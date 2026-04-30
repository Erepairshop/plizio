import re
import os

def update_vatican_other():
    filepath = 'lib/visualLab/data/poiExtraVaticanOther.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    data = {
        'landscape-vatican-gardens-extra': {
            'desc': "A Vatikáni Kertek a törpeállam területének több mint felét elfoglalják, és évszázadok óta a pápák pihenőhelyeként szolgálnak. A kertek kialakítása a reneszánsz és a barokk stílus jegyeit ötvözi, számos szökőkúttal, barlanggal és műemlékkel díszítve. A kertészek gondos munkájának köszönhetően a világ minden tájáról származó növényfajok találtak itt otthonra, miközben a terület szigorúan zárt a nyilvánosság elől, csak korlátozott számú vezetett túra keretében látogatható. A kertekben található erődítmények a középkori védelem nyomait őrzik, míg a modern kiegészítések, mint a helikopter-leszálló, a Vatikán mai igényeit szolgálják. A látogatók számára ez a zöld oázis betekintést enged a pápaság privát szférájába és a történelembe.",
            'facts': [
                "A kertek területe körülbelül 23 hektár, ami a Vatikán 52%-a.",
                "Az első kerteket III. Miklós pápa idején, 1279-ben alakították ki.",
                "Több mint 100 szökőkút található a kertek területén.",
                "A kertekben saját rádióállomás (Vatikáni Rádió) is működik.",
                "Számos pápai címer látható a bokrokból és virágokból megformálva.",
                "A kertekben található a Lourdes-i barlang pontos másolata.",
                "A területen több középkori védmű és bástya maradványa is látható.",
                "A kertek karbantartását egy 30 fős kertészcsapat végzi folyamatosan."
            ]
        },
        'landscape-grotto-of-lourdes-extra': {
            'desc': "A Vatikáni Kertek egyik legmeghittebb és legfontosabb szakrális helyszíne a Lourdes-i barlang másolata. Ez az építmény a franciaországi Massabielle-barlang pontos reprodukciója, ahol 1858-ban Szűz Mária megjelent Bernadette Soubirous-nak. A vatikáni másolatot a 20. század elején építették, és azóta a pápák egyik kedvenc imádkozóhelyévé vált. A barlang előtt egy kis téren gyakran tartanak szabadtéri szertartásokat és közös imádságokat. A környező dús növényzet és a csendes környezet tökéletes helyszínt biztosít az elmélyüléshez. A barlang falán elhelyezett emléktáblák és fogadalmi tárgyak a hívők háláját és tiszteletét fejezik ki a Szűzanya felé.",
            'facts': [
                "A barlangot XIII. Leó pápa kérésére építették és 1905-ben fejezték be.",
                "A francia katolikusok ajándékozták a Vatikánnak a hitük jeléül.",
                "Minden év májusában itt zárják le a Mária-hónapot fáklyás körmenettel.",
                "A barlang oltára előtt a pápák rendszeresen tartanak magánmiséket.",
                "A reprodukció méretei hűen követik az eredeti franciaországi barlangot.",
                "A barlang tetején egy Szűz Mária szobor látható a jelenés emlékére.",
                "A helyszín a Vatikáni Kertek nyugati részén, egy domboldalban található.",
                "Gyakran látogatják a Vatikánba érkező államfők és diplomáciai küldöttségek."
            ]
        },
        'landscape-cortile-della-pigna-extra': {
            'desc': "A Toboz-udvar a Vatikáni Múzeumok egyik leglátványosabb és legtágasabb szabadtéri területe. Nevét a hatalmas, közel négy méter magas bronz fenyőtobozról kapta, amely az udvar északi végén, egy fülkében áll. Ez a toboz az ókori Rómából származik, és eredetileg a Pantheon közelében található szökőkút dísze volt. Az udvar építészeti megoldásai, különösen a Bramante által tervezett fülke, a reneszánsz téralkotás csúcsművei. Az udvar közepén ma Arnaldo Pomodoro modern szobra, a 'Sfera con Sfera' látható, amely kontrasztot alkot az antik elemekkel. Ez a terület fontos összekötő kapocs a Vatikán különböző palotaszárnyai között, és a turisták számára népszerű pihenőhely a múzeumlátogatás közben.",
            'facts': [
                "A bronz fenyőtoboz magassága körülbelül 4 méter.",
                "Az ókorban az Agrippa termái környékén állt a toboz szökőkútként.",
                "A toboz mellett két antik bronz páva látható, melyek Hadrianus sírjából származnak.",
                "Az udvart Donato Bramante kezdte el tervezni 1506-ban.",
                "Arnaldo Pomodoro aranygömb szobra 1990-ben került az udvar közepére.",
                "Az udvar a Belvedere-palotát köti össze az Apostoli Palotával.",
                "A toboz tetején lyukak vannak, ahol egykor a víz távozott a szökőkútból.",
                "Az udvar északi végén található fülkét 'Nicchione'-nak nevezik."
            ]
        },
        'port-vatican-heliport-extra': {
            'desc': "A Vatikán helikopter-leszállója kulcsfontosságú közlekedési csomópont a pápaság számára, lehetővé téve a gyors és biztonságos eljutást a fontos helyszínekre. Az 1976-ban épült heliport a Vatikáni Kertek nyugati csücskében, a bástyák mellett található. Elsősorban a pápa használja, amikor a nyári rezidenciájára, Castel Gandolfóba utazik, vagy amikor Róma nemzetközi repülőtereire kell eljutnia külföldi utak előtt. Emellett fontos szerepet játszik a diplomáciai látogatások során is, hiszen az államfők gyakran helikopterrel érkeznek a Vatikánba. A leszállóhely modern navigációs eszközökkel van felszerelve, és szigorú biztonsági protokollok védik. Bár kicsi, jelentősége az állam szuverenitása és a pápa mobilitása szempontjából elengedhetetlen.",
            'facts': [
                "A heliportot VI. Pál pápa uralkodása alatt, 1976-ban nyitották meg.",
                "Körülbelül 20 perces repülőutat biztosít Castel Gandolfo és a Vatikán között.",
                "A leszállópálya a Vatikáni Kertek egyik legmagasabb pontján fekszik.",
                "A pápa mellett csak engedéllyel rendelkező állami delegációk használhatják.",
                "Vészhelyzet esetén mentőhelikopterek fogadására is alkalmas.",
                "A leszállóhely mellett a częstochowai Szűzanya bronzszobra látható.",
                "A heliport karbantartását az olasz légierővel együttműködve végzik.",
                "A pápai helikopter hívójele hagyományosan a 'Volatus' nevet viseli."
            ]
        },
        'port-vatican-railway-station-extra': {
            'desc': "A Vatikáni vasútállomás a világ legkisebb állami vasúthálózatának központja. A Lateráni Szerződések után épült állomás elegáns, márvánnyal díszített épülete Giuseppe Momo tervei alapján készült. Bár rendszeres személyszállítás nincs, az állomás fontos szimbolikus és diplomáciai funkciókat tölt be. Időnként különleges vonatok indulnak innen, például zarándokcsoportok számára vagy a pápai kertek látogatóinak. A vágányok egy díszes vaskapun keresztül csatlakoznak az olasz vasúti hálózathoz. Az állomás épülete ma már részben múzeumnak és vámmentes boltnak is otthont ad, de a vasúti infrastruktúra továbbra is működőképes. Ez a helyszín a Vatikán függetlenségének egyik kézzelfogható bizonyítéka.",
            'facts': [
                "A vatikáni vasúti sínpálya teljes hossza mindössze 800 méter.",
                "Az állomásépület travertin márványból készült, neoreneszánsz stílusban.",
                "A vágányokat és az állomást 1934-ben adták át hivatalosan.",
                "A sínpálya egy hatalmas bronzkapun keresztül lép át Olaszországba.",
                "Ferenc pápa 2015 óta heti rendszerességgel engedélyezi a turistavonatokat.",
                "Az állomáson soha nem volt állandó menetrend szerinti járat.",
                "Az épület homlokzatát a pápai címer és allegorikus szobrok díszítik.",
                "A vasúthálózat fenntartása a vatikáni kormányszervek feladata."
            ]
        },
        'industry-vatican-pharmacy-extra': {
            'desc': "A Vatikáni Gyógyszertár a világ egyik legkülönlegesebb és legforgalmasabb patikája. Az 1874-ben alapított intézmény a Vatikán falain belül található, és híres arról, hogy olyan ritka gyógyszereket is tart, amelyek máshol nem elérhetőek. Mivel a Vatikán nem tagja az Európai Uniónak, saját szabályozás alá tartozik, így adómentesen és közvetlenül importálhat készítményeket a világ minden tájáról. Naponta több ezer vásárló keresi fel, köztük nemcsak a Vatikán lakói, hanem rómaiak is, akik speciális recepteket hoznak. A gyógyszertár modern felszereltsége ellenére megőrizte hagyományos, szolgálatkész szellemét, amit a betegápoló irgalmasrendi szerzetesek felügyelnek.",
            'facts': [
                "A gyógyszertárat 1874-ben alapította Eusebio Ludvig Fronmen szerzetes.",
                "Évente több mint 200 000 receptet váltanak be az intézményben.",
                "A világ szinte minden országából importálnak gyógyszerkészítményeket.",
                "A patika adómentes státusza miatt az árak kedvezőbbek a római átlagnál.",
                "Különleges kozmetikai és gyógyhatású készítményeket is készítenek itt.",
                "A gyógyszertárba való belépéshez érvényes recept és személyi igazolvány kell.",
                "A kiszolgálást képzett gyógyszerészek és szerzetesek végzik közösen.",
                "A patika weboldalán keresztül külföldi megrendeléseket is fogadnak."
            ]
        },
        'industry-vatican-mosaic-studio-extra': {
            'desc': "A Vatikáni Mozaikstúdió évszázadok óta őrzi a mozaikkészítés magas szintű művészetét. A 18. században alapított műhely elsődleges feladata a Szent Péter-bazilika hatalmas mozaikjainak karbantartása és restaurálása, de itt készülnek a pápák hivatalos diplomáciai ajándékai is. A stúdióban dolgozó művészek több ezer különböző árnyalatú üvegpasztát (smalti) használnak, amelyeket egy titkos recept alapján készítenek. A munka rendkívüli türelmet és precizitást igényel, hiszen egy-egy kisebb kép elkészítése is hónapokig tarthat. A stúdió látogatható a turisták számára, akik betekintést nyerhetnek ebbe az ősi, de a mai napig élő mesterségbe, amely Rómát a mozaikművészet központjává tette.",
            'facts': [
                "A stúdiót 1727-ben alapította XIII. Benedek pápa.",
                "Több mint 28 000 különböző színű és árnyalatú mozaikszemcsét használnak.",
                "A stúdió felelős a Szent Péter-bazilika 10 000 négyzetméternyi mozaikjáért.",
                "A művészek gyakran klasszikus festményeket másolnak le mozaiktechnikával.",
                "Egyetlen négyzetméternyi mozaik elkészítése akár egy évig is eltarthat.",
                "A stúdió saját készítésű mozaikszemeket is gyárt speciális kemencékben.",
                "A kész alkotásokat gyakran magas rangú állami látogatóknak ajándékozzák.",
                "A műhely a Szent Péter-bazilika tőszomszédságában található."
            ]
        },
        'agriculture-vatican-vineyard-extra': {
            'desc': "A Vatikáni Szőlőültetvény egy apró, de annál jelentősebb mezőgazdasági terület a pápai állam szívében. A szőlőt a Vatikáni Kertek egyik napsütötte domboldalán telepítették, emlékeztetve a kereszténység és a bortermelés évezredes kapcsolatára. Az ültetvény nem tömegtermelésre szolgál, hanem jelképezi a természet iránti tiszteletet és a föld szeretetét. A megtermelt szőlőből készült bort gyakran liturgikus célokra használják fel, vagy különleges alkalmakkor a pápa asztalára kerül. Az ültetvény gondozása során kerülik a vegyszereket, híven a pápai enciklikák környezetvédelmi iránymutatásaihoz. Ez a kis zöld folt a Vatikán sokszínűségét és a hagyományok ápolását reprezentálja a modern világban.",
            'facts': [
                "A szőlőültetvényt 2014-ben újították fel jelentősen Ferenc pápa idején.",
                "A tőkéket Szlovénia és Olaszország neves borvidékeiről adományozták.",
                "Főként fehérszőlő fajtákat termesztenek, mint például a Malvasia.",
                "A területen biogazdálkodási módszereket alkalmaznak a kertészek.",
                "A szüretet gyakran vatikáni alkalmazottak és önkéntesek végzik.",
                "Az ültetvény közelében egy kis borospince is található a tároláshoz.",
                "A vatikáni bor nem kerül kereskedelmi forgalomba, csak belső célokra használják.",
                "A szőlőültetvény a Vatikáni Kertek központi részén helyezkedik el."
            ]
        },
        'agriculture-vatican-olive-grove-extra': {
            'desc': "A Vatikán olajfaligete a béke és a spiritualitás szimbóluma a Kertek területén. Az itt található fák között több száz éves példányok is akadnak, amelyek még a pápai állam korábbi korszakaiból maradtak fenn. Az olajfák gondozása kiemelt figyelmet kap, hiszen az itt termelt olaj egy részét a Szent Olajok (krizma) elkészítéséhez használják, amelyeket a nagycsütörtöki misén szentelnek meg. A liget elhelyezkedése lehetővé teszi a csendes elmélkedést, és a pápák gyakran sétálnak ezen a területen. Az olajbogyók szüretelése közösségi esemény, amely összeköti a Vatikán lakóit a természettel. A liget gazdag biodiverzitása és az ősi fák jelenléte a Vatikán ökológiai elkötelezettségét is mutatja.",
            'facts': [
                "A ligetben több mint 500 olajfa található különböző korokból.",
                "Néhány fát államfők ajándékoztak a Vatikánnak a béke jeléül.",
                "Az itt készült olajat a vatikáni konyhán és rituális célokra is használják.",
                "Az olajfák között számos ritka madárfaj talált fészkelőhelyet.",
                "A legidősebb fák kora meghaladja a 300 évet is.",
                "A ligetet modern öntözőrendszerrel látják el a forró nyári hónapokban.",
                "A szüretből származó első préselésű olajat gyakran a pápának adják át.",
                "A liget fontos része a Vatikáni Kertek ökológiai egyensúlyának."
            ]
        },
        'kid-landmark-swiss-guard-barracks-extra': {
            'desc': "A Svájci Gárda laktanyája a Vatikán egyik legizgalmasabb helyszíne a fiatalabb látogatók számára. Itt élnek és készülnek fel a szolgálatra azok a katonák, akik a pápa biztonságáért felelnek. A gyerekeket lenyűgözik a gárdisták színes, sárga-kék-piros csíkos egyenruhái, a fényes sisakok és a hatalmas alabárdok. Bár a laktanya belseje nem látogatható, a kapuknál álló őrségváltás és a gárdisták fegyelmezett mozgása látványos élményt nyújt. A laktanyában saját kápolna, edzőterem és konyha is található, így a gárdisták egy kis önálló közösséget alkotnak a Vatikánon belül. A helyszín segít megérteni a gyerekeknek, hogy a történelem és a hagyomány hogyan él tovább a mai modern világban.",
            'facts': [
                "A Svájci Gárda laktanyája a Vatikán északi részén található.",
                "A gárda jelenleg körülbelül 135 fős legénységgel rendelkezik.",
                "A katonák egyenruhája a Medici-család színeit tükrözi.",
                "A laktanyában minden évben nyílt napot tartanak az újoncok eskütételekor.",
                "A gárdisták naponta több órát gyakorolják az alabárd használatát.",
                "Saját zenekaruk is van, amely fontos eseményeken lép fel.",
                "A laktanya falai között egy kis múzeum is található a gárda történetéről.",
                "A gárdisták modern fegyverekkel is rendelkeznek, bár ezeket nem hordják nyilvánosan."
            ]
        },
        'kid-landmark-vatican-carriage-pavilion-extra': {
            'desc': "A Vatikáni Hintómúzeum, hivatalos nevén a Hintópavilon, a gyerekek kedvenc helyszíne a múzeumi negyedben. Ebben a hatalmas teremben régi, aranyozott pápai hintókat, elegáns lovas szánokat és az első pápai autókat lehet megtekinteni. A gyűjtemény leglátványosabb darabja a 'Grand Gala Berlin', egy gazdagon díszített, hatalmas hintó, amelyet egykor hat ló húzott. A látogatók megnézhetik a modern 'pápamobilokat' is, amelyeket a pápa a tömeges rendezvényeken használ. A kiállítás bemutatja, hogyan változott az utazás módja az évszázadok során, a lovaktól kezdve a modern benzinmotoros járművekig. A csillogó kocsik és a különleges autók világa minden gyereket elvarázsol és mesebeli hangulatot áraszt.",
            'facts': [
                "A Hintópavilont 1973-ban alapította VI. Pál pápa.",
                "A gyűjteményben látható az 1826-os, arannyal bevont Grand Gala hintó.",
                "Itt őrzik azt az autót is, amelyben II. János Pál pápa elleni merénylet történt.",
                "Kilenc díszes pápai hintó és számos lovas felszerelés látható itt.",
                "A pavilon a Vatikáni Múzeumok kijáratának közelében található.",
                "Egyes hintók kerekei majdnem olyan magasak, mint egy felnőtt ember.",
                "A kiállításon látható az első pápai gépkocsi, egy 1929-es Graham-Paige.",
                "A modern pápamobilok golyóálló üveggel vannak felszerelve a biztonság érdekében."
            ]
        }
    }

    for poi_id, values in data.items():
        # regex to find the POI block with this id
        # it looks like: { id: "poi_id", ... }
        pattern = rf'\{{\s*id:\s*[\'"]{poi_id}[\'"].*?\}}'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            poi_block = match.group(0)
            if 'descriptionAdvanced' not in poi_block:
                facts_str = ',\n      '.join([f'"{f}"' for f in values['facts']])
                new_fields = f""",
    descriptionAdvanced: {{
      de: "",
      hu: "{values['desc']}",
      ro: "",
      en: ""
    }},
    factsAdvanced: {{
      de: [],
      hu: [
        {facts_str}
      ],
      ro: [],
      en: []
    }}"""
                # Insert before the last }
                updated_block = poi_block[:-1] + new_fields + "\n  }"
                content = content.replace(poi_block, updated_block)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_vatican_other()
