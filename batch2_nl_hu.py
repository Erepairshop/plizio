import json
import sys

def update_file(filepath, data):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    out_lines = []
    current_id = None
    in_desc_adv = False
    in_facts_adv = False

    for i, line in enumerate(lines):
        if 'id: "' in line:
            parts = line.split('id: "')
            if len(parts) > 1:
                current_id = parts[1].split('"')[0]

        if 'descriptionAdvanced: {' in line:
            in_desc_adv = True
        elif 'factsAdvanced: {' in line:
            in_facts_adv = True

        if in_desc_adv and current_id in data:
            if 'hu: "",' in line:
                desc_val = json.dumps(data[current_id]['desc'], ensure_ascii=False)
                line = line.replace('hu: "",', f'hu: {desc_val},')
                in_desc_adv = False
            elif 'hu: ""' in line:
                desc_val = json.dumps(data[current_id]['desc'], ensure_ascii=False)
                line = line.replace('hu: ""', f'hu: {desc_val}')
                in_desc_adv = False

        if in_facts_adv and current_id in data:
            if 'hu: [],' in line:
                facts_val = json.dumps(data[current_id]['facts'], ensure_ascii=False)
                line = line.replace('hu: [],', f'hu: {facts_val},')
                in_facts_adv = False
            elif 'hu: []' in line:
                facts_val = json.dumps(data[current_id]['facts'], ensure_ascii=False)
                line = line.replace('hu: []', f'hu: {facts_val}')
                in_facts_adv = False

        out_lines.append(line)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

data_batch2 = {
  "NL-LM-GIE": {
    "desc": "Giethoorn egy mesébe illő falu Overijssel tartományban, amelyet gyakran 'Holland Velence'-ként is emlegetnek. A falu különlegessége, hogy a történelmi központban egyáltalán nincsenek utak, így az autóforgalom is teljesen hiányzik; a közlekedés kizárólag a sűrű csatornahálózaton, úgynevezett suttogó csónakokkal (fluisterboot), vagy az azokon átívelő számtalan fa gyaloghídon történik. A települést a 13. században alapították tőzegbányászok, a csatornákat eredetileg a tőzeg szállítására ásták. Földrajz K6: Hogyan befolyásolta a tőzegkitermelés Giethoorn tájképét és csatornáinak kialakulását?",
    "facts": [
      "A faluban több mint 170 kis fahíd köti össze a csatornák által elválasztott telkeket.",
      "A hagyományos giethoorni házak nádtetővel rendelkeznek, ami régen a legolcsóbb tetőfedő anyag volt.",
      "A suttogó csónakok elektromos motorral működnek, hogy ne zavarják a falu nyugalmát.",
      "A település különösen az ázsiai, főleg kínai turisták körében rendkívül népszerű."
    ]
  },
  "NL-LM-KIN": {
    "desc": "Kinderdijk egy világhírű szélmalom-komplexum Dél-Hollandiában, amely az Alblasserwaard polder vízszintjének szabályozására épült. A 18. század közepén, 1738 és 1740 között épült 19 szélmalom a legnagyobb fennmaradt ilyen jellegű csoportosulás Hollandiában. Eredeti céljuk az volt, hogy a vizet a mélyebben fekvő területekről a Lek folyóba pumpálják, megelőzve az elárasztást. A komplexum 1997 óta az UNESCO Világörökség része, és lenyűgöző példája a hagyományos holland vízgazdálkodásnak. Történelem K7: Milyen technológiai innovációt jelentettek a szélmalmok a holland vízgazdálkodásban a 18. században?",
    "facts": [
      "A Kinderdijk malmai egy komplex, többlépcsős pumpálási rendszert alkottak.",
      "Napjainkban a vizet modern, elektromos szivattyúállomások mozgatják, de a malmok ma is működőképesek.",
      "A 'Kinderdijk' név (Gyermekgát) egy legendából származik, amely szerint egy 1421-es árvíz után egy bölcsőt mosott partra a víz egy macskával és egy csecsemővel.",
      "A 19 malom közül sokat ma is laknak, fenntartva a molnár-hagyományokat."
    ]
  },
  "NL-LM-TEX": {
    "desc": "Texel a legnagyobb és legnépesebb a holland Wadden-szigetek közül, amely Észak-Holland tartományhoz tartozik. A sziget híres változatos természeti környezetéről: hosszú, homokos strandok, dűnék, fenyvesek, fenyérek és gazdag polderek alkotják a tájat. Területének mintegy harmada védett nemzeti park (Duinen van Texel), amely madármegfigyelők paradicsoma, hiszen több száz madárfaj vonul át vagy fészkel itt. A sziget gazdasága a turizmusra és a juhtenyésztésre épül. Környezetismeret K6: Miért tekinthető a Wadden-tenger és a környező szigetek ökoszisztémája globálisan is egyedülállónak?",
    "facts": [
      "Texel szigetén nagyjából annyi juh él, mint ember (körülbelül 14 000).",
      "Az Ecomare nevű tengeri múzeum és fókamenhely a sziget egyik legnépszerűbb látványossága.",
      "A szigetet komppal lehet megközelíteni Den Helderből, az út mindössze 20 percet vesz igénybe.",
      "Itt évente megrendezik a világ legnagyobb katamarán vitorlásversenyét, a Ronde om Texelt."
    ]
  },
  "NL-LM-HOG": {
    "desc": "A Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefüggő természetvédelmi területe, amely Gelderland tartományban található. A parkot egy gazdag házaspár, Anton Kröller és Helene Müller alapította a 20. század elején. A táj rendkívül változatos: kiterjedt fenyőerdők, hatalmas homokdűnék és lila fenyérek váltakoznak, miközben gímszarvasok, vaddisznók és muflonok élnek itt szabadon. A park szívében található a híres Kröller-Müller Múzeum is. Természetismeret K7: Hogyan jöttek létre a park területén található hatalmas futóhomokdűnék?",
    "facts": [
      "A park látogatói ingyenesen használhatják a kihelyezett híres 'fehér kerékpárokat' a terület felfedezésére.",
      "A Kröller-Müller Múzeum a világ második legnagyobb Van Gogh-gyűjteményével büszkélkedhet.",
      "Az alapítók által építtetett Jachthuis Sint Hubertus kastély a park egyik építészeti remekműve.",
      "A park fenntartása szinte kizárólag a belépőjegyek bevételeiből történik, állami támogatás nélkül."
    ]
  },
  "NL-LM-ZAA": {
    "desc": "A Zaanse Schans egy életteli szabadtéri múzeum Amszterdamtól északra, amely a 18. és 19. századi holland ipari forradalom emlékét őrzi. A területen található fűrészmalmok, olajütők, fűszer- és festékőrlő szélmalmok hűen mutatják be, hogyan működött a Zaan folyó mente, amely egykor Európa egyik legnagyobb és legrégebbi ipari központja volt több száz működő szélmalommal. A malmok mellett hagyományos zöld faházak, sajtüzem és fapapucs-készítő műhely is várja a látogatókat. Történelem K6: Miért tekinthető a Zaan folyó mente a világ első igazi ipari régiójának?",
    "facts": [
      "A Zaanse Schans malmainak és házainak nagy részét az 1960-as években teherautókon és hajókon szállították ide a régió más részeiről a megmentésük érdekében.",
      "A terület egykor több mint 600 működő szélmalomnak adott otthont.",
      "Itt található az ország első Albert Heijn élelmiszerboltjának eredeti épülete.",
      "A malmok közül sok ma is aktívan termel, például fűszereket, lenmagolajat vagy lisztet."
    ]
  },
  "NL-LM-ERA": {
    "desc": "Az Erasmus-híd (Erasmusbrug) Rotterdam egyik legfontosabb építészeti szimbóluma, amely a Maas folyó felett ível át, összekötve a város északi és déli részét. Az 1996-ban átadott, 800 méter hosszú ferdekábeles hidat Ben van Berkel építész tervezte. Aszimmetrikus, 139 méter magas, fehéren ragyogó pilonja miatt a helyiek gyakran csak 'A Hattyú' (De Zwaan) néven emlegetik. A híd nemcsak közlekedési, hanem vizuális kapocs is Rotterdam modern felhőkarcoló-negyede (Kop van Zuid) és a történelmi központ között. Fizika K8: Milyen mérnöki előnyökkel jár a ferdekábeles híd kialakítás a hagyományos függőhidakkal szemben?",
    "facts": [
      "Az Erasmus-híd déli részén egy felnyitható (bascule) szakasz található a legnagyobb tengerjáró hajók áthaladásához.",
      "Az átadása utáni első hetekben erős szélben a híd kábelei veszélyesen rezonálni kezdtek, amit utólagos lengéscsillapítókkal orvosoltak.",
      "A híd a híres humanista filozófusról, Rotterdami Erasmusról kapta a nevét.",
      "Gyakran szolgál nagyszabású események, például a Red Bull Air Race vagy zenei fesztiválok háttereként."
    ]
  },
  "NL-LM-MAD": {
    "desc": "A Madurodam egy lenyűgöző miniatűr park Hágában, amely az egész holland társadalom, építészet és történelem 1:25 méretarányú, élethű mását mutatja be. A parkot 1952-ben nyitották meg George Maduro, egy a második világháborúban hősi halált halt curaçaói ellenálló emlékére. A látogatók végigsétálhatnak a miniatűr csatornákon, a mozgó vonatok, szélmalmok és hajók között, megcsodálva az ország legfontosabb épületeinek aprólékos modelljeit. A park bevételeit alapítása óta gyermekeket segítő jótékonysági szervezetek kapják. Társadalomismeret K5: Milyen céllal hozták létre a Madurodam parkot, és hogyan szolgálja ma a közösséget?",
    "facts": [
      "A parkban minden fa és bokor valódi, amelyeket folyamatos metszéssel tartanak a modellépületekhez illő 1:25-ös arányban.",
      "A Madurodam a világ egyik legfejlettebb miniatűr vasúthálózatával rendelkezik, amely mintegy 4 km hosszú.",
      "A park 1952-es megnyitásakor Beatrix hercegnő (a későbbi királynő) lett a miniatűr város első 'polgármestere'.",
      "Az épületek elkészítése gyakran hónapokat vagy éveket vesz igénybe a 3D-szkennelési technológia és a kézi munka ötvözésével."
    ]
  },
  "NL-LM-EFT": {
    "desc": "Az Efteling Európa egyik legrégebbi és leglátogatottabb vidámparkja, amely Észak-Brabant tartományban, Kaatsheuvelben található. A park 1952-ben nyílt meg egyetlen Meseerdővel (Sprookjesbos), amelyet a híres holland illusztrátor, Anton Pieck tervezett. Sikerének titka a romantikus, részletgazdag dizájnban és a hagyományos európai mesék varázslatos atmoszférájának megteremtésében rejlik. Mára egy modern, hullámvasutakkal és sötét utazásokkal (dark rides) teli, gigantikus élményparkká nőtte ki magát. Irodalom K5: Milyen európai mesék karakterei jelennek meg leggyakrabban az Efteling park Meseerdejében?",
    "facts": [
      "Az Efteling három évvel korábban nyílt meg, mint az első amerikai Disneyland.",
      "A park ikonikus figurája Langnek (Hosszúnyakú), a meseerdő lakója, és a varázslatos papírkosár, Holle Bolle Gijs, aki megeszi a szemetet.",
      "A park évente több mint 5 millió látogatót fogad, ami Hollandia lakosságának jelentős részét teszi ki.",
      "A Fata Morgana, egy Ezeregyéjszaka témájú csónakos utazás, Anton Pieck utolsó nagy tervezési munkája volt."
    ]
  },
  "NL-LM-ZUI": {
    "desc": "A Zuiderzeemuseum Enkhuizen városában található szabadtéri és beltéri múzeum, amely a Zuiderzee (Déli-tenger) partvidékének kultúráját és mindennapjait mutatja be a 19. század végétől a 20. század elejéig. Amikor az Afsluitdijk gát megépítésével a tengert elzárták és édesvízű tóvá (IJsselmeer) változtatták, a környékbeli halászfalvak évszázados életmódja örökre megváltozott. A múzeum eredeti, tégláról téglára áttelepített házakkal, hagyományos mesterségekkel és halfüstölőkkel őrzi ezt a letűnt világot. Történelem K7: Milyen drasztikus gazdasági és társadalmi változásokat hozott a halászfalvak életében a Zuiderzee tenger lezárása?",
    "facts": [
      "A szabadtéri múzeumot egy komppal lehet megközelíteni, ami megadja a korhű tengerparti érkezés illúzióját.",
      "Több mint 130 történelmi épület található a területén, a boltoktól a templomig.",
      "A látogatók megkóstolhatják a helyben, hagyományos módszerrel füstölt heringet.",
      "A múzeum nemcsak az épületeket, hanem az egykori lakók népviseletét és szokásait is dokumentálja."
    ]
  },
  "NL-LM-IJS": {
    "desc": "Az IJsselmeer (IJssel-tó) Hollandia legnagyobb tava, amely egy nagyszabású mérnöki beavatkozás, a Zuiderzee 1932-es elzárásának eredményeként jött létre. A tengeröblöt az Afsluitdijk nevű hatalmas gát zárta el az Északi-tengertől, így az egykori sós vízű tenger lassan édesvizű tóvá változott, amelyet elsősorban az IJssel folyó táplál. A tó mélysége mindössze 5-6 méter, és létfontosságú szerepet játszik az ország édesvíz-ellátásában, a mezőgazdaságban, valamint a vízi sportok és rekreáció terén. Földrajz K7: Hogyan válik egy sós tengeröböl édesvízű tóvá egy gát megépítése után?",
    "facts": [
      "Az IJsselmeer területének jelentős részét az évtizedek során polderesítéssel (Flevoland) szárazfölddé alakították.",
      "A tó édesvízkészlete kritikus fontosságú a holland ivóvízellátás szempontjából szárazság idején.",
      "1976-ban egy másik gáttal (Houtribdijk) a tavat kettéosztották, létrehozva a déli Markermeer-t.",
      "A tavat szegélyező történelmi városok (pl. Hoorn, Enkhuizen, Urk) egykori tengeri kikötővárosok voltak."
    ]
  },
  "nl-gouda": {
    "desc": "Gouda egy történelmi város Dél-Hollandiában, amely az egész világon ismertté vált az azonos nevű sajtjáról. Bár a sajtot nem feltétlenül magában a városban készítették, évszázadokon át itt, a lenyűgöző Városháza előtti téren cserélt gazdát a híres sajtpiacon. Gouda nemcsak a gasztronómiájáról (köztük a stroopwafel nevű szirupos ostyáról), hanem a Szent János-templom (Sint-Janskerk) csodálatos, 16. századi ólomüveg ablakairól is híres, amelyek túlélték a reformáció képrombolásait. Történelem K6: Miért rendezték a nagy sajtvásárokat a város főterén, és hogyan működött a kereskedelem mérlegelése a középkorban?",
    "facts": [
      "A goudai sajtpiac a mai napig működik minden csütörtökön a nyári hónapokban, hagyományos ceremóniákkal.",
      "A goudai Városháza (Stadhuis) az egyik legrégebbi és legszebb gótikus városháza Hollandiában.",
      "A Szent János-templom Hollandia leghosszabb temploma a maga 123 méterével.",
      "A Gouda sajt neve nem védett eredetmegjelölés, így világszerte gyárthatnak ilyen nevű sajtot."
    ]
  },
  "nl-enschede": {
    "desc": "Enschede Kelet-Hollandia legnagyobb városa, Overijssel tartomány Twente régiójának központja. A 19. és 20. században a holland textilipar lüktető szíve volt, amelyet hatalmas gyárak és kémények jellemeztek. A textilipar hanyatlása után a város átalakult, és ma a Twentei Egyetem (Universiteit Twente) révén a technológia és az innováció egyik fellegvára. 2000-ben egy tragikus tűzijáték-raktár robbanás pusztította el a város egy részét (Roombeek), amelyet azóta díjnyertes modern építészeti negyedként építettek újjá. Társadalomismeret K8: Hogyan tudott Enschede egy katasztrófa után egy modern és fenntartható városrészt létrehozni?",
    "facts": [
      "A Twentei Egyetem Hollandia egyetlen olyan egyeteme, amely amerikai stílusú, integrált campusszal rendelkezik.",
      "A város közvetlenül a német határ mellett fekszik, és erős határon átnyúló kapcsolatokat ápol Münsterrel.",
      "A Grolsch, a világ egyik leghíresebb holland söre, egy Enschede melletti modern sörfőzdében készül.",
      "A Rijksmuseum Twenthe a régió legfontosabb képzőművészeti múzeuma."
    ]
  },
  "nl-arnhem": {
    "desc": "Arnhem Gelderland tartomány zöldellő fővárosa, amely a Rajna alsó szakaszának (Nederrijn) partján fekszik. A város neve örökre összefonódott a második világháborúval a „Market Garden” hadművelet miatt, amikor a szövetséges ejtőernyősök súlyos veszteségeket szenvedtek az arnhemi híd megszerzéséért folytatott csatában („A híd túl messze volt”). Ma Arnhem egy divat- és dizájnközpont, élénk kulturális élettel, valamint Hollandia egyik legismertebb szabadtéri múzeumával (Nederlands Openluchtmuseum). Történelem K8: Miért volt a 'Market Garden' hadművelet kulcsfontosságú a szövetségesek számára a második világháborúban?",
    "facts": [
      "A John Frost híd Arnhemben arról a brit parancsnokról kapta a nevét, aki hősiesen védte azt 1944-ben.",
      "A Holland Szabadtéri Múzeum (Openluchtmuseum) több mint 100 történelmi holland épületet mutat be.",
      "A város ad otthont a Burgers' Zoo-nak, Európa egyik legnagyobb és leginnovatívabb állatkertjének.",
      "Arnhem az egyetlen holland város, ahol ma is kiterjedt trolibusz-hálózat működik."
    ]
  },
  "nl-zwolle": {
    "desc": "Zwolle egy történelmi város Overijssel tartományban, amely a középkorban a Hanza-szövetség egyik legbefolyásosabb kereskedelmi központja volt. A városmagot ma is csillag alakú csatornarendszer és masszív erődítmények veszik körül, a Peperbus (Borsszóró) nevű impozáns templomtorony pedig uralja a városképet. Zwolle híres kiváló gasztronómiájáról – itt található a De Librije, Hollandia egyik leghíresebb Michelin-csillagos étterme. A város ötvözi a történelmi bájt a dinamikus, modern egyetemi élettel. Történelem K6: Mi volt a Hanza-szövetség, és miért biztosított gazdagságot a hozzá tartozó városoknak, mint Zwolle?",
    "facts": [
      "A Sassenpoort, a város megmaradt középkori kapuja, a 15. századból származik és az UNESCO műemléki listáján szerepel.",
      "A Waanders In de Broeren egy lenyűgöző könyvesbolt, amelyet egy 15. századi domonkos templomban alakítottak ki.",
      "Zwolle lakóit a középkor óta 'Blauwvingers'-nek (Kékujjúaknak) csúfolják egy szomszédos várossal való viszály miatt.",
      "A város egy fontos közlekedési csomópont a Randstad (a nyugati metropolisz) és Hollandia északi része között."
    ]
  },
  "nl-breda": {
    "desc": "Breda egy elegáns város Észak-Brabant tartományban, amely szoros történelmi kapcsolatokat ápol az Orániai-Nassau uralkodóházzal. A Breda Kastély és a lenyűgöző Grote Kerk (Nagy Templom) a város királyi múltjának legszebb emlékei; ez utóbbiban több korai Orániai herceg is nyugszik. A várost gyakran 'az Észak Gyöngyszemeként' említik burgundi atmoszférája, kiváló éttermei és pezsgő éjszakai élete miatt. Breda fontos helyszíne volt a nyolcvanéves háborúnak is, amelynek során többször is gazdát cserélt. Történelem K7: Miért volt Breda fontos bázisa az Orániai-Nassau-háznak a holland függetlenségi háború előtt?",
    "facts": [
      "A bredai Grote Kerk tornya 97 méter magas, és a gótikus építészet egyik csúcspontja.",
      "A 'Spanyolok általi bredai ostrom' Diego Velázquez híres festményének ('Breda átadása') témája.",
      "Breda volt a lengyel páncélos hadosztály által felszabadított első holland város a második világháborúban.",
      "A KMA (Királyi Katonai Akadémia) 1828 óta a bredai kastélyban működik."
    ]
  },
  "nl-s-hertogenbosch": {
    "desc": "'s-Hertogenbosch, gyakran egyszerűen csak Den Bosch (A Herceg Erdeje) néven ismert város Észak-Brabant fővárosa. A település a holland dél klasszikus, katolikus gyökerekkel rendelkező központja, amelynek büszkesége a fenséges Szent János-katedrális (Sint-Janskathedraal), a brabanti gótika mesterműve. A város leghíresebb szülötte Hieronymus Bosch, a 15-16. századi látomásos és szürreális festő, akinek zsenialitását egy külön múzeum is ünnepli. Den Bosch híres még a Binnendieze nevű rejtett csatornarendszeréről is. Művészettörténet K8: Milyen középkori hiedelmek és félelmek tükröződnek Hieronymus Bosch szürreális festményein?",
    "facts": [
      "A Binnendieze csatornák részben a város történelmi épületei alatt futnak, és hajóval felfedezhetők.",
      "A város híres édessége a 'Bossche Bol', egy hatalmas, csokoládéval bevont és tejszínhabbal töltött fánk.",
      "A Sint-Janskathedraal külsejét különleges 'kapaszkodó' kőszobrok (szörnyek, emberek) díszítik a támpilléreken.",
      "A város egyike volt a kevés holland településnek, amelyik a 80 éves háború elején hű maradt a spanyol koronához."
    ]
  },
  "nl-dordrecht": {
    "desc": "Dordrecht, gyakran röviden csak Dordt, Hollandia legidősebb városa a történelmi Holland grófság (a mai Észak- és Dél-Holland) területén, 1220-ban kapott városi rangot. A település egy szigeten fekszik több nagy folyó találkozásánál, amely ideális kereskedelmi központtá tette a középkorban a fa- és gabonakereskedelem számára. Dordrecht történelmi belvárosa több mint ezer műemlékkel, festői belső kikötőkkel és jellegzetes patricius házakkal büszkélkedhet. Az 1618-as dordrechti zsinat a holland protestantizmus egyik legfontosabb eseménye volt. Történelem K7: Hogyan alapozta meg Dordrecht gazdagságát a 'stapelrecht' (árumegállítási jog) a középkori Hollandiában?",
    "facts": [
      "Dordrecht a Biesbosch Nemzeti Park, egy egyedülálló édesvízi árapály-deltavidék szomszédságában fekszik.",
      "A Grote Kerk hatalmas, ferde tornya befejezetlen maradt, miután a mocsaras talaj süllyedni kezdett.",
      "1572-ben itt tartották az Első Szabad Államok Gyűlését, amely Orániai Vilmost választotta vezetőnek.",
      "A város történelmi központja a vízre épült, így sok ház bejárata közvetlenül a csatornákra nyílik."
    ]
  },
  "nl-alkmaar": {
    "desc": "Alkmaar egy varázslatos város Észak-Holland tartományban, amely a világ minden táján a hagyományos sajtpiacáról (Kaasmarkt) ismert. Minden pénteken a Waagplein téren a sajthordó céhek tagjai a hagyományoknak megfelelően, fehér ruhában és színes szalmakalapokban mérlegelik és cipelik a sárga Goudát és Edamit hatalmas fa hordágyakon. Alkmaar gazdag történelemmel is bír: az 1573-as spanyol ostrom sikeres visszaverése volt az első nagy holland győzelem a nyolcvanéves háborúban, innen ered a mondás: 'Alkmaarnál kezdődik a győzelem'. Történelem K6: Miért volt morálisan olyan fontos a hollandok számára az alkmaari ostrom sikeres visszaverése?",
    "facts": [
      "Az alkmaari sajtpiac áprilistól szeptemberig működik, és évente több mint 100 000 turistát vonz.",
      "A városban található a Holland Sajtmúzeum (Hollands Kaasmuseum), a Mázsaház (De Waag) épületében.",
      "A sajthordók céhe (Kaasdragersgilde) négy különböző színű (piros, kék, sárga, zöld) csoportra oszlik.",
      "Alkmaar az ország egyik legfontosabb városa az orgonazene és az orgonaépítés történetében."
    ]
  },
  "nl-mauritshuis": {
    "desc": "A Mauritshuis (Móric-ház) Hágában található, és Hollandia egyik legjelentősebb művészeti múzeuma. A palotát Johan Maurits van Nassau-Siegen számára építették a 17. században a holland klasszicista építészet remekműveként. A múzeum világhírű a holland Aranykor festészetének páratlan gyűjteményéről. Méreteiben sokkal intimebb, mint a Rijksmuseum, mégis olyan ikonikus mesterműveknek ad otthont, mint Johannes Vermeer 'Leány gyöngyfülbevalóval' című alkotása, valamint Rembrandt 'Dr. Nicolaes Tulp anatómiája' című festménye. Művészettörténet K8: Miért tartják a 'Leány gyöngyfülbevalóval' című festményt a 'holland Mona Lisának'?",
    "facts": [
      "Az épületet a híres 17. századi holland építész, Jacob van Campen tervezte.",
      "A gyűjtemény magját eredetileg Orániai Vilmos V. herceg magángyűjteménye alkotta.",
      "Carel Fabritius 'A tengelice' (Het Puttertje) című festménye is ebben a múzeumban található.",
      "A múzeum közvetlenül a Binnenhof, a holland parlament történelmi épületegyüttese mellett fekszik."
    ]
  },
  "nl-royal-palace-dam": {
    "desc": "Az amszterdami Királyi Palota (Koninklijk Paleis) a Dam téren áll, és eredetileg nem királyi rezidenciának, hanem Amszterdam Városházának épült a 17. századi holland aranykor csúcsán. Az épület Jacob van Campen tervei alapján készült klasszicista stílusban, és a város hihetetlen gazdagságát és globális hatalmát hivatott hirdetni. Csak a 19. század elején, amikor Bonaparte Lajos (Napóleon testvére) Hollandia királya lett, alakították át palotává. Ma a holland királyi család három hivatalos palotájának egyike, amelyet állami fogadásokra használnak. Történelem K7: Hogyan tükrözte a Városháza (a mai Palota) építészete Amszterdam 17. századi globális kereskedelmi szerepét?",
    "facts": [
      "Az épület több mint 13 600 facölöpön nyugszik, hogy ne süllyedjen el a mocsaras amszterdami talajban.",
      "A palota központi csarnokának (Burgerzaal) padlóján három hatalmas térkép (világtérképek és csillagtérkép) látható.",
      "A homlokzaton lévő Atlasz-szobor a világ terhét a vállán hordozó mitológiai alakot ábrázolja.",
      "A palota bútorzatának jelentős része Bonaparte Lajos király idejéből, az empíre stílus korából származik."
    ]
  },
  "nl-kinderdijk-wind": {
    "desc": "Kinderdijk, Dél-Hollandia szívében, a holland vízgazdálkodás és mérnöki zsenialitás legszebb szimbóluma. Az itteni 19 monumentális szélmalom 1738 és 1740 között épült azzal a céllal, hogy kiszivattyúzza a felesleges vizet a környező polderekről, megakadályozva az állandó áradásokat. A szélmalmok szorosan együttműködtek a zsiliprendszerekkel, a csatornákkal és a szivattyúállomásokkal egy rendkívül komplex védelmi hálózatban. Az UNESCO 1997-ben a Világörökség részévé nyilvánította a területet, mivel az ember és a természet harmonikus küzdelmét példázza. Természetismeret K7: Hogyan pumpálták a vizet a szélmalmok magasabb szintekre, mielőtt a folyóba engedték volna?",
    "facts": [
      "A 19 malom közül sokat még mindig a molnárcsaládok laknak, akik felügyelik a működésüket.",
      "Télen a befagyott csatornákon a Kinderdijk malmai között korcsolyázni is lehet, ami festői látvány.",
      "A malmok között kétféle típus dominál: a nyolcszögletű 'grondzeiler' és a kerek téglamalmak.",
      "Nyáron, szombatonként a malmok mind egyszerre forognak, emlékezve a régi időkre."
    ]
  },
  "nl-afsluitdijk": {
    "desc": "Az Afsluitdijk (Zárógát) Hollandia egyik leglenyűgözőbb mérnöki teljesítménye, egy 32 kilométer hosszú gát, amely Észak-Holland és Frízföld tartományokat köti össze. 1932-ben fejezték be azzal a céllal, hogy lezárja a sekély Zuiderzee-t (Déli-tenger), megvédve ezzel a partvidéket a pusztító áradásoktól és vihardagályoktól. A gát megépítésével a sós vizű Zuiderzee egy édesvizű tóvá, az IJsselmeer-ré alakult át. A gáton autópálya fut végig, a közepén lévő kilátópontnál pedig egy emlékmű tiszteleg a tervező, Cornelis Lely előtt. Földrajz K8: Milyen ökológiai és gazdasági hatásai voltak a Zuiderzee lezárásának a part menti falvakra?",
    "facts": [
      "A gát építése során hatalmas mennyiségű agyagot és bazalttömböket használtak fel, melyeket hajókkal szállítottak.",
      "Az Afsluitdijk 90 méter széles és 7,2 méterrel magasodik a tengerszint fölé.",
      "Éjszaka a gát zsilipkapuit Daan Roosegaarde különleges fényművészeti installációja, a 'Gates of Light' világítja meg.",
      "A gáton nagyszabású árapály-erőmű kísérletek is zajlanak (Blue Energy) az édes- és sós víz keveredéséből adódó energia hasznosítására."
    ]
  },
  "nl-peace-palace": {
    "desc": "A hágai Béke Palota (Vredespaleis) a nemzetközi jog és a globális konfliktusmegoldás szimbolikus központja. A lenyűgöző neoreneszánsz épületet 1913-ban adták át az amerikai filantróp, Andrew Carnegie adományának köszönhetően. Jelenleg az ENSZ Nemzetközi Bírósága (ICJ) és az Állandó Választottbíróság (PCA) székhelye, valamint a hágai Nemzetközi Jogi Akadémia és egy hatalmas jogi könyvtár is itt működik. A palota belső tereit a világ különböző nemzetei által adományozott műalkotások és építőanyagok díszítik. Társadalomismeret K8: Mi volt a motiváció a Béke Palota felépítésére közvetlenül az első világháború előtt?",
    "facts": [
      "Az épülethez szükséges építőanyagokat (pl. márványt, fát, selymet) több tucat különböző ország adományozta a világbéke jegyében.",
      "Az 'Örök Béke Lángja' emlékmű a palota kapuja előtt folyamatosan ég.",
      "Bár az ENSZ egyik legfőbb szerve, a Nemzetközi Bíróság, a palota maga egy holland alapítvány tulajdonában van.",
      "A palotát a francia építész, Louis Cordonnier tervezte egy nemzetközi pályázat győzteseként."
    ]
  },
  "nl-waddenzee": {
    "desc": "A Wadden-tenger (Waddenzee) a világ legnagyobb egybefüggő árapálysíksága, amely Hollandia partjaitól egészen Németországig és Dániáig húzódik. A tenger lenyűgöző dinamikája miatt apálykor a víz szinte teljesen visszahúzódik, hatalmas iszap- és homokpadokat hagyva hátra, amelyek millió költöző madár és fóka számára nyújtanak táplálékot és pihenőhelyet. Ezt a felbecsülhetetlen ökológiai értéket az UNESCO a Világörökség részévé nyilvánította. Az itt élő hollandok kedvelt tevékenysége a 'wadlopen', vagyis az apálykor az iszapban tett gyalogtúra a szigetek felé. Környezetismeret K7: Miért kritikus a Wadden-tenger ökoszisztémája a költöző madarak túlélése szempontjából?",
    "facts": [
      "A Wadden-tenger naponta kétszer, árapály idején drasztikusan változtatja a kinézetét és a vízszintjét.",
      "A terület több mint 10 000 növény- és állatfajnak ad otthont, a mikroszkopikus algáktól a tengeri emlősökig.",
      "A borjúfókák (gewone zeehond) nagy számban pihennek a napon sütkérezve a felszínre bukkanó homokpadokon.",
      "Az iszaptúrákat (wadlopen) szigorúan csak tapasztalt helyi vezetőkkel szabad megtenni a gyorsan emelkedő vízszint miatt."
    ]
  },
  "nl-biesbosch": {
    "desc": "A De Biesbosch Nemzeti Park Hollandia egyik legnagyobb nemzeti parkja, egy hatalmas, édesvízi árapály-deltavidék Dél-Holland és Észak-Brabant határán. Ez a vízilabirintusokkal, fűzfaerdőkkel és nádasokkal teli mocsárvidék az 1421-es Szent Erzsébet-napi árvíz során jött létre, amikor a tenger áttörte a gátakat és tucatnyi falut elpusztított. Ma a park a természetjárók, kenusok és madármegfigyelők paradicsoma, és az egyik legsikeresebb helyszíne a hódok hollandiai visszatelepítésének. Földrajz K6: Hogyan képes egy ilyen mocsárvidék csökkenteni a folyami áradások veszélyét a környező városok számára?",
    "facts": [
      "A De Biesbosch a ritka édesvízi árapályos területek egyike Európában.",
      "A park számos szigete csak vízen keresztül (kenuval vagy elektromos csónakkal) közelíthető meg.",
      "A területet a második világháború alatt holland ellenállók használták rejtekhelyként és csempészútvonalként.",
      "A hódokat 1988-ban telepítették vissza a Biesbosch-ba, és mára virágzó populációjuk van."
    ]
  },
  "nl-dunes-kennemerland": {
    "desc": "A Zuid-Kennemerland Nemzeti Park Észak-Holland partvidékén terül el, Haarlem és Zandvoort közelében. A parkot kiterjedt, tengeri szelek által formált homokdűnék, dűnevölgyek, ritka fenyőerdők és érintetlen tengerparti sávok alkotják. A terület ökoszisztémájának egyensúlyát olyan legelésző nagyvadakkal tartják fenn, mint a skót felföldi marhák, a konik lovak és a visszatelepített, ősi európai bölény, a wisent. A park a városi lakosság kedvelt rekreációs területe túrázásra és kerékpározásra. Környezetismeret K6: Milyen szerepet játszanak a növények (pl. a dűnefű) a homokdűnék stabilizálásában a tengerparton?",
    "facts": [
      "A park területén egyedülálló, zárt dűne-tavak (duinmeren) is találhatók, amelyek gazdagok kétéltűekben és madarakban.",
      "Az európai bölényt (wisent) 2007-ben telepítették ide vissza egy elzárt területre.",
      "A dűnék fontos szerepet játszanak a holland ivóvízellátásban: itt tisztítják és tárolják az édesvizet természetes szűrőként.",
      "A parkban számos második világháborús bunker (Atlantisz-fal maradványa) bújik meg a homok alatt."
    ]
  },
  "nl-drenthe-hunebed": {
    "desc": "A Drenthe tartományban található megalitikus sírok, az úgynevezett 'Hunebedden' Hollandia legrégebbi ember alkotta műemlékei, amelyek története a Krisztus előtti 3400 körüli évekre (a Tölcséres Szájú Edények Kultúrájának idejére) nyúlik vissza. Ezek a grandiózus sírkamrák hatalmas gránit tömbökből épültek, amelyeket a legutóbbi jégkorszak gleccserei szállítottak Skandináviából a mai Hollandia területére. A legnagyobb és leghíresebb sír Borger falu mellett található (D27), ahol egy modern látogatóközpont mutatja be a kőkori emberek életét. Történelem K5: Hogyan voltak képesek a kőkorszaki emberek ilyen hatalmas, akár 20 tonnás sziklatömböket elmozdítani és egymásra helyezni?",
    "facts": [
      "Hollandiában összesen 54 Hunebed maradt fenn, ebből 52 Drenthe tartományban található.",
      "A sírokat eredetileg földdel és homokkal fedték be, a kövek a földalatti sírkamra vázát alkották.",
      "A leghosszabb sírkamra (D27) majdnem 23 méter hosszú.",
      "A 'hunebed' elnevezés a 17. századból származik, amikor az emberek úgy hitték, hogy a köveket 'huynen' (óriások) hordták össze."
    ]
  },
  "nl-vondelpark": {
    "desc": "A Vondelpark Amszterdam legnagyobb, legismertebb és legnépszerűbb városi parkja, amelyet évente több millió helyi lakos és turista keres fel. A parkot az 1860-as években az angol tájépítészeti stílus (romantikus, kanyargós utak, tavak és hidak) jegyében tervezték meg. Névadója Joost van den Vondel, a 17. század leghíresebb holland költője és drámaírója, akinek hatalmas szobra a park közepén áll. Nyáron a park szabadtéri színháza ingyenes koncerteket és előadásokat kínál, miközben a pázsit tele van piknikezőkkel. Irodalom K6: Kivel lehetne összehasonlítani Vondelt (például Shakespeare-rel) a saját nemzeti irodalmukra gyakorolt hatásuk alapján?",
    "facts": [
      "A park nem önkormányzati területként jött létre, hanem egy gazdag polgárokból álló bizottság vásárolta meg a földet.",
      "A terület egy süllyedő tőzeglápra épült, ezért a parkot az évtizedek során folyamatosan fel kell tölteni és karbantartani.",
      "A Vondelparkban több mint 100 fafaj található, és rengeteg zöld papagáj (Sándor-papagáj) él itt vadon.",
      "A park szélén található a híres holland filmmúzeum, a (korábbi nevén) Filmmuseum pavilonja."
    ]
  },
  "port-maasvlakte-2-extra": {
    "desc": "A Maasvlakte 2 a rotterdami kikötő hatalmas, tengerből elhódított mesterséges bővítése, amely 2013-ban készült el. Ez a 2000 hektáros terület úgy jött létre, hogy több millió köbméter homokot pumpáltak az Északi-tengerbe, új szárazföldet kialakítva, ahol a világ legnagyobb konténerszállító hajói kiköthetnek. A terminálokat a legmodernebb, teljesen automatizált (robotizált) daruk és önvezető szállítójárművek szolgálják ki, drasztikusan növelve a kikötő hatékonyságát és fenntartva Európa logisztikai kapujának státuszát. Gazdaság K8: Hogyan növeli az automatizáció (robotizáció) a konténerkikötők globális versenyképességét?",
    "facts": [
      "A Maasvlakte 2 vize 20 méter mély, így a valaha épült legnagyobb hajókat is fogadni tudja.",
      "A konténerterminálok a legmodernebb technológiának köszönhetően zéró szén-dioxid-kibocsátással (szélenergiával) működnek.",
      "A bővítés keretében új dűnéket és strandokat is kialakítottak a lakosság rekreációja és a természetvédelem céljából.",
      "A mesterséges félsziget építésekor több jégkorszaki őslény (például mamut) csontvázát is felszínre hozták a mélyből."
    ]
  },
  "animal-habitat-burgers-zoo-extra": {
    "desc": "A Burgers' Zoo egy világhírű és innovatív állatkert Arnhemben (Gelderland tartományban), amely arról ismert, hogy hatalmas, fedett ökoszisztéma-csarnokokat ('öko-kibontakozásokat') hozott létre az állatok számára. Ezekben a csarnokokban (mint a trópusi esőerdő – Bush, a sivatag – Desert, és a tengeri akvárium – Ocean) az állatok nem hagyományos ketrecekben élnek, hanem a látogatók sétálnak át az aprólékosan rekonstruált, természetes élőhelyeken. Az állatkert élen jár az európai fajmegőrzési programokban is. Környezetismeret K5: Milyen előnyei vannak a hagyományos ketreces állatkertekkel szemben az ökoszisztéma-alapú bemutatásnak?",
    "facts": [
      "A Burgers' Bush a világ egyik legnagyobb fedett beltéri esőerdeje.",
      "A Burgers' Ocean egy hatalmas, nyolcmillió literes tengeri akvárium, ahol az élő korallzátonyok növesztésében is világelsők.",
      "A Burgers' Mangrove a világ legnagyobb fedett mangróve-kupolája, amely belize-i lepkéket és manátuszokat mutat be.",
      "A parkot Johan Burgers alapította 1913-ban magánbirtokként, majd fázisokban bővítették mai formájára."
    ]
  }
}

if __name__ == '__main__':
    update_file('lib/visualLab/data/netherlandsPoi.ts', data_batch2)
    update_file('lib/visualLab/data/poiExtraNetherlandsCities.ts', data_batch2)
    print("Batch 2 done")
