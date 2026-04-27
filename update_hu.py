
import os
import re

file_path = 'lib/visualLab/data/poiExtraHu2.ts'

updates = {
    'mountain-janos-hegy-extra': {
        'descriptionAdvanced': 'A János-hegy Budapest legmagasabb pontja a maga 527 méteres magasságával, a Budai-hegység egyik legnépszerűbb kirándulóhelye. A csúcson található neoromán stílusú Erzsébet-kilátót 1910-ben adták át, és Schulek Frigyes építész munkáját dicséri. Nevét Erzsébet királynéról kapta, aki rajongott a környékért és a panorámáért. A hegyre nemcsak gyalogos túraútvonalakon, hanem a Zugligeti Libegővel vagy a Gyermekvasúttal is feljuthatunk, ami különleges élményt kínál minden korosztálynak. A kilátó teraszáról tiszta időben akár a Magas-Tátra csúcsai is megpillanthatóak a messzeségben. A hegyet borító erdők fontos ökológiai folyosót alkotnak és számos védett növénynek adnak otthont. Földrajz K7 — Magyarország hegy- és vízrajza.',
        'factsAdvanced': [
            "527 méteres magasságával ez Budapest közigazgatási határán belüli legmagasabb pont.",
            "Az Erzsébet-kilátó 1908 és 1910 között épült fel kőből, neoromán stílusban.",
            "A kilátó építéséhez szükséges köveket lovas kocsikkal szállították fel a meredek hegyoldalon.",
            "Tiszta időjárási körülmények között a csúcsról akár 80 kilométeres távolságra is ellátni.",
            "A Libegő 1970 óta köti össze Zugligetet a hegytetővel, hossza 1040 méter.",
            "A hegy belsejében található a János-hegyi-átjáróbarlang, amely fokozottan védett természeti érték.",
            "Erzsébet királyné (Sisi) 1882-ben többször is meglátogatta a helyszínt, ami inspirálta a későbbi névválasztást.",
            "A környező erdőket bükkösök és tölgyesek uralják, gazdag élőhelyet biztosítva a helyi faunának."
        ]
    },
    'mountain-harmashatar-hegy-extra': {
        'descriptionAdvanced': 'A Hármashatár-hegy a Budai-hegység északi részének egyik legnépszerűbb kirándulóhelye, amely 495 méteres magasságával magasodik a város fölé. Nevét onnan kapta, hogy 1873-ig itt találkozott Buda, Óbuda és Pesthidegkút közigazgatási határa. A hegycsúcson található a 2016-ban épült Guckler Károly-kilátó, ahonnan lenyűgöző körpanoráma nyílik Budapestre és a Dunára. A hegy különleges adottságai, főként a kedvező termikek miatt, már az 1930-as évek óta a magyar vitorlázórepülés bölcsőjeként ismert. Számos túraútvonal, köztük az Országos Kéktúra is áthalad a területén, érintve a kopár dolomitsziklákat és a gazdag növényvilágú tisztásokat. A természetjárók körében kedvelt a fenyőgyöngyei indulópont és a hangulatos turistaházak közelsége. Földrajz K7 — domborzati formák és turizmus.',
        'factsAdvanced': [
            "A hegy neve a Buda, Óbuda és Pesthidegkút határának egykori találkozási pontjára utal.",
            "495 méteres tengerszint feletti magasságával a Budai-hegység északi részének meghatározó csúcsa.",
            "A Guckler Károly-kilátó 2016-ban készült el vörösfenyő gerendák felhasználásával.",
            "A hegy lábánál fekvő repülőtér a magyar vitorlázórepülés egyik legfontosabb bázisa.",
            "Kőzetösszetétele főként triász kori dolomit, amelyen ritka sziklagyepek alakultak ki.",
            "A csúcson lévő adótorony messziről is jól felismerhetővé teszi a hegy sziluettjét.",
            "Itt halad át az Országos Kéktúra egyik legnépszerűbb szakasza a főváros közelében.",
            "A közelben található a Fenyőgyöngye étterem, amely patinás találkozóhelye a kirándulóknak."
        ]
    },
    'mountain-sas-hegy-extra': {
        'descriptionAdvanced': 'A Sas-hegy Budapest XI. kerületében található 30 hektáros országos jelentőségű természetvédelmi terület, amely igazi ökológiai sziget a város közepén. Ez a dolomitsziklás magaslat a jégkorszak utáni növényvilág maradványait, úgynevezett reliktumfajokat őriz, amelyek máshol már alig lelhetők fel a térségben. A terület legismertebb lakója a pannon gyík, de számos ritka orchideafaj és az árvalányhaj is megtalálható a déli lejtőkön. A látogatókat modern látogatóközpont és egy interaktív tanösvény várja, amely bemutatja a hegy geológiáját és biológiáját. A csúcsról nyíló kilátóplatformról Budapest egyik legszebb 360 fokos panorámája élvezhető, rálátással a Budai Várra és a Gellért-hegyre. A terület védettségét az itt élő több mint 50 védett és fokozottan védett növényfaj indokolja. Természetismeret K4 — élőlények védelme és élőhelyek.',
        'factsAdvanced': [
            "A terület 1958 óta áll állami védelem alatt, jelenleg a Duna-Ipoly Nemzeti Park kezeli.",
            "Itt él a pannon gyík, Magyarország legkisebb termetű gyíkfaja, amelynek stabil populációja van itt.",
            "A legenda szerint a hegy neve az 1686-os felszarakításkor felreppenő sasokról kapta a nevét.",
            "A dolomitkőzet repedéseiben kialakult barlangokban ritka denevérfajok találnak menedéket.",
            "A Sas-hegyi Látogatóközpont modern, interaktív kiállításokkal várja a családokat és iskolás csoportokat.",
            "Növényvilága olyan ritkaságokat tartalmaz, mint a pannon bennszülött gyepek és különféle orchideák.",
            "A hegy belsejében a Magyar Tudományos Akadémia egyik fontos szeizmológiai állomása működik.",
            "A területre való belépés korlátozott, csak a tanösvényeken vagy vezetett túrákon lehetséges az élővilág védelme miatt."
        ]
    },
    'lake-naplas-to-extra': {
        'descriptionAdvanced': 'A Naplás-tó, hivatalos nevén Szilas-pataki árvízvédelmi tározó, Budapest XVI. kerületében található, és a főváros legnagyobb kiterjedésű állóvize. Az 1978-ban a Szilas-patak felduzzasztásával létrehozott mesterséges tó mára egyedülálló ökológiai paradicsommá vált, amelyet 150 hektáros természetvédelmi terület övez. A tóparti nádasok és az égerlápos erdők számos védett madárfajnak és az ország egyik legnagyobb mocsári teknős állományának nyújtanak menedéket. 2021-ben adták át a tó partján álló modern, különleges faépítészetű kilátót, ahonnan pazar rálátás nyílik a Cinkotai-erdőre és a vízfelületre. A környék a horgászok, futók és kerékpárosok körében rendkívül népszerű, igazi oázist kínálva a nagyvárosi forgalomtól távol. Környezetismeret K3 — vízi és vízparti életközösségek.',
        'factsAdvanced': [
            "A tó vízfelülete körülbelül 16 hektár, átlagos mélysége pedig 2 méter körüli.",
            "A Cinkotai-erdővel és a környező láprétekkel együtt 1997 óta természetvédelmi terület.",
            "A 2021-ben épült kilátó 22 méter magas, és fenyőfából, valamint acélból készült.",
            "A Naplás-tó a vonuló madarak számára kulcsfontosságú pihenőhely a régióban.",
            "A tóban fürödni tilos, de a kijelölt helyeken a horgászat engedélyezett.",
            "Vizeiben él a főváros legnagyobb mocsári teknős populációja.",
            "A Szilas-patak mentén kiépített kerékpárút közvetlen összeköttetést biztosít a belvárossal.",
            "Tavasszal a békák tömeges vándorlása figyelhető meg az erdőből a tó vizei felé."
        ]
    },
    'river-soroksari-duna-extra': {
        'descriptionAdvanced': 'A Soroksári-Duna, amelyet gyakran Kis-Dunának is neveznek, az élő Duna 58 kilométer hosszú mellékága, amely a Csepel-szigetet választja el a pesti partoktól. A folyóágat északon a Kvassay-zsilip, délen pedig a Tassi-zsilip szabályozza, így áramlása rendkívül lassú, vízszintje pedig szinte állandó. Ez a sajátos ökoszisztéma kedvezett az Európában ritkaságnak számító úszólápok kialakulásának, amelyek értékes élőhelyet biztosítanak számos védett növénynek és vízimadárnak. A nyugodt vízfelszín és a sűrű nádasok miatt a terület a kajakosok, kenusok és horgászok valóságos paradicsoma. A Molnár-sziget és a környező üdülőövezetek kedvelt hétvégi célpontok, ahol a vízparti hangulat találkozik az érintetlen természettel. Biológia K8 — vizes élőhelyek és úszólápok ökológiája.',
        'factsAdvanced': [
            "A mellékág hossza 58 kilométer Budapest és Tass között, teljes szakasza szabályozott.",
            "Az itt található úszólápok nemzetközi szinten is kiemelkedő természeti értéket képviselnek.",
            "A víz szintjét mesterségesen tartják, így az ingadozás egész évben csupán 10-20 centiméter.",
            "Itt található az ország egyik legfontosabb kajak-kenu versenypályája és edzőközpontja.",
            "A part mentén több mint 20 000 horgászállás található, ami jelzi a víz népszerűségét.",
            "A Molnár-sziget a Soroksári-Duna legnagyobb és legismertebb lakott szigete.",
            "A terület a Natura 2000 hálózat része, különös tekintettel a jégmadár védelmére.",
            "Lassú áramlása miatt a főágnál sokkal hamarabb befagy a vize keményebb teleken."
        ]
    },
    'mountain-zengo-extra': {
        'descriptionAdvanced': 'A Zengő 682 méteres magasságával a Mecsek legmagasabb csúcsa, amely Baranya vármegye és az egész Dél-Dunántúl fölé magasodik. Neve a népi magyarázat szerint a hegy belsejéből hallható zengő hangról kapta, amit a szél kelt a völgyekben. A hegy világhírét a bánáti bazsarózsának köszönheti, amelynek a világállományának 90%-a itt, a Zengő lankáin él. 2020-ban adták át az új, modern kilátót, amely egy régi geodéziai torony köré épült, és ahonnan tiszta időben akár a Balatonig vagy a horvátországi Papuk-hegységig is ellátni. A hegy történelme is izgalmas: csúcsán egy középkori vár romjai láthatók, a közelmúltban pedig a sikeres környezetvédő „zengői csata” helyszíne volt, ahol a helyiek megakadályozták egy radarállomás építését. Földrajz K7 — Magyarország tájegységei és védett növényei.',
        'factsAdvanced': [
            "682 méteres magasságával a Zengő a Mecsek és Dél-Dunántúl legmagasabb pontja.",
            "A világ bánáti bazsarózsa állományának döntő többsége ezen a hegyen található.",
            "A 2020-ban megnyitott kilátó hétszintes, és különleges acélszerkezetű burkolatot kapott.",
            "A hegycsúcson egy kis méretű, középkori várfal maradványai fedezhetők fel.",
            "Húsvéthétfőn hagyományos népi zarándoklat és túra indul a hegycsúcsra.",
            "A Zengő a Kelet-Mecsek Tájvédelmi Körzet része, fokozottan védett terület.",
            "A hegy kőzete főként jura kori mészkő, de vulkanikus kőzetek is előfordulnak.",
            "A 2004-es környezetvédelmi tiltakozás a magyar civil összefogás egyik jelképévé vált."
        ]
    },
    'mountain-tubes-extra': {
        'descriptionAdvanced': 'A Tubes 611 méteres magasságával a Középső-Mecsek egyik legszebb kilátópontja, amely közvetlenül Pécs városa fölé magasodik. A csúcson álló János-kilátót 2001-ben építették újjá kőből és fából, nevét pedig a neves természetkutatóról, Hunyadi Jánosról kapta. A kilátóból lenyűgöző panoráma nyílik: délre Pécs városa és a Dráva-sík, északra pedig a Mecsek végtelen erdőségei látszanak. A hegy vegetációját a szubmediterrán hatás jellemzi, molyhos tölgyesek és karsztbokorerdők borítják a lejtőit, ahol ritka orchideafajok és a pannon nőszőfű is virít. A Tubes a pécsiek egyik legkedveltebb kirándulóhelye, amely könnyen megközelíthető a Misina-tetőről induló gerincúton keresztül. Biológia K8 — szubmediterrán flóra és karsztvidékek.',
        'factsAdvanced': [
            "A Tubes 611 méterével a Mecsek hegység harmadik legmagasabb csúcsa.",
            "A János-kilátó helyén már 1910-ben is állt egy fából készült kilátótorony.",
            "Tiszta időben a kilátóból a horvátországi Papuk-hegység vonulatai is jól láthatóak.",
            "A hegy stratégiai fontosságú, korábban katonai megfigyelőpontként is szolgált.",
            "A déli oldalon elterülő karsztbokorerdőkben él a ritka majomkosbor orchidea.",
            "A csúcs a Misina-tető felől egy kényelmes, 3 kilométeres túrával érhető el.",
            "A Tubes kőzetanyaga triász kori mészkő, amelyben kisebb barlangok is találhatók.",
            "2004-ben a pécsi lakosság sikeresen tiltakozott egy ide tervezett NATO-radar ellen."
        ]
    },
    'mountain-jakab-hegy-extra': {
        'descriptionAdvanced': 'A Jakab-hegy a Nyugati-Mecsek legmisztikusabb és leglátványosabb magaslata, amely 592 méterrel emelkedik a tengerszint fölé. Geológiai felépítése egyedülálló a környéken: a hegyet alkotó permi vörös homokkő adja jellegzetes színét és különleges sziklaalakzatait. A hegycsúcsot egy monumentális, vaskori kelta földvár sáncai övezik, amely Közép-Európa egyik legnagyobb ilyen jellegű építménye. A spirituális hangulatot a 13. században alapított pálos kolostor romjai teszik teljessé, amely az egyetlen magyar alapítású szerzetesrend központja volt. A plató peremén sorakozó Babás-szerkövek és a Zsongorkő természetes sziklakilátói felejthetetlen panorámát nyújtanak a Dráva-sík irányába. Történelem K5 — őskori erődítmények és szerzetesrendek Magyarországon.',
        'factsAdvanced': [
            "A hegy vörös homokkő kőzete körülbelül 250 millió évvel ezelőtt keletkezett.",
            "A kelta földvár sáncai több mint 2 kilométer hosszan futnak körbe a platón.",
            "A pálos kolostort 1225-ben alapította Bertalan pécsi püspök a remeték számára.",
            "A Babás-szerkövek bizarr sziklaalakzatait a népnyelv megkövesedett násznépnek tartja.",
            "A Zsongorkő egy természetes sziklapárkány, amelyről a Mecsek legszebb kilátása nyílik.",
            "A hegyen forgatták az „Indul a bakterház” című kultikus magyar film egyes jeleneteit.",
            "A Jakab-hegyen olyan ritka zuzmófajok élnek, amelyek csak savanyú talajon maradnak meg.",
            "A hegy lábánál fekvő Cserkút falu híres Árpád-kori templomáról és vendégszeretetéről."
        ]
    },
    'river-fekete-viz-extra': {
        'descriptionAdvanced': 'A Fekete-víz a Baranyai-síkság egyik legjelentősebb vízfolyása, amely az Ormánság területén keresztül kanyarogva gyűjti össze a környék vizeit. A patak elnevezése a medrében felhalmozódott sötét színű hordalékról és a dús mocsári vegetációról ered, amely sajátos, sötét árnyalatot kölcsönöz a víznek. Fontos ökológiai folyosóként funkcionál, partjait fűz- és nyárfaligetek kísérik, amelyek számos ritka kétéltűnek és vízi hüllőnek nyújtanak életteret. A folyó szabályozása ellenére az Ormánság mélyebb területein megőrizte természetközeli jellegét, hozzájárulva a vidék jellegzetes, vizes élőhelyekben gazdag arculatához. A horgászok körében is kedvelt csendes, nyugodt környezete miatt. Földrajz K7 — Magyarország vízrajza és folyórendszerei.',
        'factsAdvanced': [
            "A Fekete-víz a Baranyai-hegyhát déli részén ered, és a Drávába torkollik.",
            "Nevét a vízben lebegő szerves anyagoktól és a sötét iszaptól kapta.",
            "Teljes hossza körülbelül 80 kilométer, vízgyűjtő területe pedig jelentős Baranyában.",
            "Az Ormánság tájegységének meghatározó vízfolyása, amely mentén mocsarak alakultak ki.",
            "Partjait gazdag ártéri erdők és nádasok szegélyezik, amelyek védettek.",
            "A folyóban számos őshonos halfaj, köztük a réti csík is megtalálható.",
            "Fontos szerepet játszik a környező mezőgazdasági területek vízháztartásának szabályozásában.",
            "Számos híd és gázló keresztezi, amelyek összekötik az apró ormánsági falvakat."
        ]
    },
    'lake-orfui-to-extra': {
        'descriptionAdvanced': 'Az Orfűi-tó a Mecsek-hegység északi lábánál fekvő mesterséges tórendszer legidősebb tagja, amely az 1960-as évek elején jött létre a Vízfő-forrás vizének felduzzasztásával. A kristálytiszta vizű tó nemcsak Baranya vármegye, hanem az egész Dél-Dunántúl egyik legnépszerűbb üdülőhelye, ahol a fürdőzés mellett a vitorlázás és a kajakozás is engedélyezett. A tó partján fekvő Orfű falu híres a Malommúzeumról és a különleges gasztronómiai fesztiváljairól, például a Medvehagyma Fesztiválról. A környező hegyek zöld koszorúja és a tó nyugodt tükre festői látványt nyújt minden évszakban. A tó vize gyógyító hatású és rendkívül tiszta, köszönhetően a szigorú környezetvédelmi szabályoknak. Földrajz K7 — mesterséges tavak és turisztikai központok.',
        'factsAdvanced': [
            "Az Orfűi-tó az orfűi tórendszer elsőként kialakított mesterséges tava.",
            "A tavat a bővizű Vízfő-forrás és a környező karsztvizek táplálják.",
            "Területe körülbelül 11 hektár, vize pedig híres a tisztaságáról és minőségéről.",
            "Itt található az ország egyik legszebb környezetű strandja, az Orfűi Aktív Strand.",
            "A tó és környéke a Duna-Ipoly Nemzeti Parkhoz tartozó Mecsek-vidék része.",
            "A környéken több mint 20 kilométernyi tanösvény és túraútvonal érhető el.",
            "Orfű neve szorosan összefügg a medvehagymával, amely a környék erdeiben tömegesen terem.",
            "A tórendszer további tagjai a Pécsi-tó, a Herman Ottó-tó és a Kovácsszénájai-tó."
        ]
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

for poi_id, data in updates.items():
    # Update descriptionAdvanced.hu
    pattern_desc = r'(id: "' + poi_id + r'".*?descriptionAdvanced: \{.*?hu: )(.*?)(\n|,\n)'
    def replace_desc(match):
        return match.group(1) + f'"{data["descriptionAdvanced"]}",\n'
    content = re.sub(pattern_desc, replace_desc, content, flags=re.DOTALL)
    
    # Update factsAdvanced.hu
    # This regex is trickier because factsAdvanced might be empty or messed up
    formatted_facts = ',\n        '.join([f'"{f}"' for f in data["factsAdvanced"]])
    new_facts_hu = f'hu: [\n        {formatted_facts}\n      ]'
    
    # Try to find existing hu facts in factsAdvanced
    pattern_facts = r'(id: "' + poi_id + r'".*?factsAdvanced: \{.*?)(hu: \[.*?\]|hu: \[\]|\[\s*".*?"\s*\])(.*?\})'
    def replace_facts(match):
        return match.group(1) + new_facts_hu + match.group(3)
    
    if re.search(pattern_facts, content, flags=re.DOTALL):
        content = re.sub(pattern_facts, replace_facts, content, flags=re.DOTALL)
    else:
        # If hu is completely missing, insert before ro:
        pattern_insert = r'(id: "' + poi_id + r'".*?factsAdvanced: \{.*?)(ro:)'
        def insert_facts(match):
            return match.group(1) + new_facts_hu + ',\n      ' + match.group(2)
        content = re.sub(pattern_insert, insert_facts, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
