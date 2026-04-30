import json

data = {}

def add_entry(id, desc_hu, facts_hu):
    data[id] = {
        "descriptionAdvanced": {
            "hu": desc_hu,
            "en": "",
            "de": "",
            "ro": ""
        },
        "factsAdvanced": {
            "hu": facts_hu,
            "en": [],
            "de": [],
            "ro": []
        }
    }

# 1. sudbury-cities-v2
add_entry(
    "sudbury-cities-v2",
    "Greater Sudbury Észak-Ontario legnagyobb városa, amely világszerte a nikkelbányászat központjaként ismert. A város egy hatalmas becsapódási kráter, a Sudbury-medence peremén alakult ki, ami egyedülálló geológiai adottságokat kölcsönöz a régiónak. A település látképét uralja a Big Nickel, a világ legnagyobb ötcentses érméje, amely a helyi bányászat előtt tiszteleg. Sudbury nemcsak ipari központ, hanem a tudomány fellegvára is, itt található a Science North és a Dynamic Earth központ. A város különlegessége a több mint 300 tó, amelyek a városhatáron belül találhatók, lehetőséget biztosítva a vízi sportokra és a pihenésre. Az elmúlt évtizedekben a város jelentős környezeti rehabilitáción ment keresztül, visszanyerve zöld területeit. A település geológiai eredete és bányászati jelentősége szorosan kapcsolódik a K5-K8 tanterv természetföldrajzi és gazdasági ismereteihez.",
    [
        "A város területén több mint 330 tó található, ami egyedülálló a kanadai városok között.",
        "Itt található a Big Nickel, egy 9 méter magas és 13 tonnás rozsdamentes acél emlékmű.",
        "Greater Sudbury lakossága megközelítőleg 166 000 fő, ezzel Észak-Ontario legnépesebb városa.",
        "A Sudbury-medence egy 1,85 milliárd évvel ezelőtti meteoritbecsapódás nyomán jött létre.",
        "A Science North a tartomány second legnagyobb tudományos központja.",
        "A városban több mint 100 000 fát ültettek el a nagyszabású újraerdősítési program keretében.",
        "A bányák összesített vágathossza meghaladja az 5000 kilométert a föld alatt.",
        "Sudbury ad otthont a SNOLAB-nak, a világ egyik legmélyebb föld alatti fizikai kutatóintézetének."
    ]
)

# 2. brantford-cities-v2
add_entry(
    "brantford-cities-v2",
    "Brantford, amelyet gyakran a 'Telefon városaként' emlegetnek, Ontario délnyugati részén fekszik, a Grand River partján. Itt élt Alexander Graham Bell, aki a várostól nem messze, a Tutela Heights-i családi birtokon találta fel a telefont 1874-ben. A település büszke sporttörténelmére is, hiszen itt született a jégkorong legenda, Wayne Gretzky. Brantford gazdasága történelmileg az iparra épült, de ma már a felsőoktatás és a szolgáltatások is meghatározóak. A város gazdag őslakos örökséggel rendelkezik, a Six Nations of the Grand River közösség szomszédságában. A Grand River völgye gyönyörű túraútvonalakat és vízi sportolási lehetőségeket kínál. Brantford ipari átalakulása és technológiai öröksége szervesen illeszkedik a K5-K8 tanterv technológiatörténeti és gazdaságföldrajzi moduljaihoz.",
    [
        "Brantfordban található a Bell Memorial, amely a telefon feltalálásának állít emléket.",
        "A város lakossága meghaladja a 102 000 főt, agglomerációval együtt a 140 000-et.",
        "A Grand River mentén több mint 70 kilométernyi kiépített túraútvonal található.",
        "Wayne Gretzky tiszteletére a város sportközpontja az ő nevét viseli és egy 3 méteres szobor áll előtte.",
        "Itt alapították 1831-ben a Mohawk Institute Residential School-t, amely ma emlékközpontként működik.",
        "A városban több mint 40 park és játszótér várja a családokat.",
        "Brantford ad otthont a Wilfrid Laurier Egyetem egyik jelentős campusának.",
        "A település az 1840-es években fontos kikötő volt a Grand River csatornarendszerének köszönhetően."
    ]
)

# 3. peterborough-cities-v2
add_entry(
    "peterborough-cities-v2",
    "Peterborough Ontario tartomány Kawarthas régiójának kapuja, amely híres tavairól és természeti szépségeiről. A város legfontosabb mérnöki látványossága a Peterborough Lift Lock, a világ legmagasabb hidraulikus hajóemelője, amely a Trent-Severn vízi út része. A település fontos oktatási központ, itt található a Trent University és a Fleming College, ami fiatalos lendületet ad a városnak. Peterborough gazdasága diverzifikált, jelentős az élelmiszeripar, az atomenergia-technológia és a turizmus. A városközpontban található Kanadai Kenu Múzeum a világ legnagyobb kenu- és kajakgyűjteményével rendelkezik, bemutatva az ország vízi közlekedésének történetét. A település tóparti élete és mérnöki emlékei kiválóan kapcsolódnak a K5-K8 tanterv természetföldrajzi és műszaki ismereteihez.",
    [
        "A Peterborough Lift Lock 1904-ben épült, és 20 méter magasra emeli a hajókat.",
        "A város lakossága megközelítőleg 84 000 fő, és folyamatosan növekszik.",
        "A Kanadai Kenu Múzeumban több mint 600 vízi járművet őriznek.",
        "Peterborough a Kawartha-tavak turisztikai régiójának központja, ahol több mint 150 tó található.",
        "A Trent University több mint 10 000 hallgatónak ad otthont minden évben.",
        "A városban található a Quaker Oats gyár, amely Észak-Amerika egyik legnagyobb zabfeldolgozója.",
        "A Little Lake park a város szívében egész évben fesztiválok és koncertek helyszíne.",
        "A város több mint 100 kilométernyi kerékpár- és túraúttal rendelkezik a Trans Canada Trail részeként."
    ]
)

# 4. sarnia-cities-v2
add_entry(
    "sarnia-cities-v2",
    "Sarnia a Huron-tó déli partján, a St. Clair-folyó mentén fekszik, és Észak-Amerika egyik legfontosabb petrolkémiai központja. A várost és az amerikai Port Huront a monumentális Blue Water Bridge köti össze, amely Kanada egyik legforgalmasabb határátkelője. Sarnia gazdasága szorosan összefonódik az energiaiparral, de a város híres gyönyörű strandjairól és parkjairól is, mint például a Canatara Park, ahol fehér homokos part várja a látogatókat. A Huron-tó kristálytiszta kék vize népszerűvé teszi a várost a vitorlázók és a horgászok körében. A település tiszta és rendezett vízparti sétánya kiváló lehetőséget nyújt a kikapcsolódásra. Sarnia ipari jelentősége és határmenti logisztikai szerepe szorosan kapcsolódik a K5-K8 tanterv gazdaságföldrajzi és szállítási ismereteihez.",
    [
        "A Blue Water Bridge két hídja naponta több mint 14 000 járművet szolgál ki.",
        "Sarnia lakossága meghaladja a 72 000 főt, ezzel Lambton megye legnagyobb települése.",
        "A Canatara Park strandja elnyerte a nemzetközi Kék Zászló minősítést a vízminőségért.",
        "A városban található a 'Chemical Valley', ahol több mint 60 vegyipari és finomító üzem működik.",
        "Sarniában több mint 40 kilométernyi többfunkciós kerékpárútvonal található.",
        "A város ad otthont a Lambton College-nak, amely az energiaipari képzések központja.",
        "A Huron-tó a világ negyedik legnagyobb édesvízi tava, amely meghatározza a város éghajlatát.",
        "A város kikötője jelentős gabona- és sóexportot bonyolít le minden évben."
    ]
)

# 5. niagara-falls-city-cities-v2
add_entry(
    "niagara-falls-city-cities-v2",
    "Niagara Falls városa világszerte a lenyűgöző vízeséseiről ismert, amelyek az USA és Kanada határán dübörögnek. A kanadai oldalon fekvő város a turizmus fellegvára, ahol modern szállodák, kaszinók és szórakoztató negyedek várják az évi több millió látogatót. A vízesés mellett a város híres a Queen Victoria Parkról, ahol gondosan ápolt virágágyások és kilátópontok sorakoznak. A Niagara-folyó mentén húzódó Parkwayt Winston Churchill 'a világ legszebb vasárnapi autózásának' nevezte. A település nemcsak turisztikai, hanem történelmi jelentőséggel is bír, hiszen az 1812-es háború több csatája zajlott a környéken. A vízesés energiája hatalmas vízerőműveket hajt, árammal látva el a régiót. A város energetikai jelentősége és geológiai képződményei szorosan kapcsolódnak a K5-K8 tanterv fizikai földrajzi és megújuló energia ismereteihez.",
    [
        "A vízeséseken másodpercenként több mint 2,8 millió liter víz zúdul le.",
        "Niagara Falls lakossága meghaladja a 94 000 főt, but a turisták száma eléri az évi 14 milliót.",
        "A városban található a Skylon Tower, amely 160 méter magasból kínál panorámát a vízesésre.",
        "A Niagara-vízesés energiájának mintegy 50%-át villamosenergia-termelésre fordítják.",
        "A városban több mint 400 holdnyi parkterület található a Niagara Parks Commission kezelésében.",
        "Itt található a Whirlpool Aero Car, egy 1916 óta működő drótkötélpálya a folyó örvényei felett.",
        "A vízesés menti kőzetrétegek 400 millió éves tengeri üledékekből származnak.",
        "Niagara Falls Ontario egyik legnagyobb kaszinó-központja két hatalmas létesítménnyel."
    ]
)

# 6. st-catharines-cities-v2
add_entry(
    "st-catharines-cities-v2",
    "St. Catharines, amelyet a 'Kertvárosként' emlegetnek, a Niagara-félsziget legnagyobb városa, Ontario tartományban. A település híres buja parkjairól, virágzó gyümölcsöskertjeiről és világszínvonalú borvidékéről. Itt halad át a Welland-csatorna, amely lehetővé teszi a hajók számára a Niagara-vízesés megkerülését az Ontario- és az Erie-tó között. A város gazdasága diverzifikált, jelentős az autóipar, a turizmus és az oktatás, itt található a Brock University. St. Catharines ad otthont a neves Royal Canadian Henley Regattának, amely Észak-Amerika egyik legfontosabb evezős versenye. A történelmi Port Dalhousie negyed strandjaival és antik körhintájával népszerű kirándulóhely. A város csatornarendszere és mezőgazdasági adottságai kiválóan kapcsolódnak a K5-K8 tanterv gazdaságföldrajzi és szállítási ismereteihez.",
    [
        "A Welland-csatorna 8 zsilipje összesen 100 méteres szintkülönbséget küzd le.",
        "St. Catharines lakossága meghaladja a 136 000 főt, agglomerációval együtt a 400 000-et.",
        "A városban több mint 1000 hektárnyi parkterület és kert található.",
        "A Brock University több mint 19 000 hallgatójával a régió egyik legnagyobb foglalkoztatója.",
        "A Niagara-borvidéken belül a város környékén több tucat díjnyertes borászat működik.",
        "A Royal Canadian Henley Regatta pályája 2112 méter hosszú és nemzetközi hírű.",
        "Port Dalhousie-ban található egy 1905-ben faragott fa körhinta, amely ma is csak 5 centért vehető igénybe.",
        "A városon keresztül halad a Bruce Trail, Kanada leghosszabb gyalogos túraútvonala."
    ]
)

# 7. chatham-kent-cities-v2
add_entry(
    "chatham-kent-cities-v2",
    "Chatham-Kent egy különleges, több települést egyesítő község Ontario délnyugati részén, az Erie-tó és a St. Clair-tó között. A régió Kanada egyik legtermékenyebb mezőgazdasági területe, ahol a hosszú tenyészidőszak kedvez a változatos növénytermesztésnek. Chatham történelmi jelentőséggel bír az Underground Railroad végállomásaként, ahol sok egykori rabszolga talált menedéket és szabadságot. A környék a klasszikus autók rajongóinak paradicsoma, és itt található a neves RM Sotheby’s központja is. A természetkedvelőket a Rondeau Tartományi Park homokdűnéi és ritka madárfajai vonzzák. A település gazdasága a modern agráriparra és a gyártásra épül. Chatham-Kent történelmi öröksége és mezőgazdasági szerepe szervesen illeszkedik a K5-K8 tanterv társadalomföldrajzi és történelmi moduljaihoz.",
    [
        "A régió Kanada legnagyobb paradicsom- és töktermesztő vidékei közé tartozik.",
        "Chatham-Kent lakossága megközelítőleg 104 000 fő, hatalmas, 2400 négyzetkilométeres területen.",
        "Itt található a Buxton National Historic Site, amely az afroamerikai történelem egyik legfontosabb emlékehelye.",
        "A Rondeau Tartományi Parkban található Ontario egyik legnagyobb megmaradt tölgy- és juharerdeje.",
        "Az Erie-tó partja mentén több mint 100 kilométernyi tengerparti szakasz tartozik a városhoz.",
        "A város minden évben megrendezi a 'Retrofest' klasszikus autókiállítást.",
        "A St. Clair-tó világhírű a horgászatról, különösen a pézsma- és sügérállományáról.",
        "A településen keresztül folyik a Thames-folyó, amely fontos történelmi vízi útvonal volt."
    ]
)

# 8. new-westminster-cities-v2
add_entry(
    "new-westminster-cities-v2",
    "New Westminster, Brit Kolumbia legöregebb városa, a Fraser-folyó partján fekszik, és egykor a tartomány fővárosa volt. A 'Királyi Városként' ismert települést Viktória királynő nevezte el, és gazdag viktoriánus építészettel, valamint történelmi bájjal rendelkezik. Ma New Westminster egy pezsgő, sűrűn lakott központ Metro Vancouver szívében, amely kiváló tömegközlekedési kapcsolatokkal rendelkezik. A vízparti sétány (Quay) a város társadalmi élete, ahol piacok, parkok és múzeumhajók várják a látogatókat. A település gazdasága az egészségügyre, az oktatásra és a technológiára épül, miközben megőrizte fontos kikötői funkcióját is. A város meredek dombjai és folyóparti fekvése egyedülálló panorámát biztosítanak. New Westminster történelmi szerepe és urbanizációs folyamata kiválóan kapcsolódik a K5-K8 tanterv településföldrajzi és történelmi ismereteihez.",
    [
        "New Westminstert 1858-ban alapították, és 1866-ig Brit Kolumbia fővárosa volt.",
        "A város lakossága meghaladja a 80 000 főt, és területe viszonylag kicsi, mindössze 15 négyzetkilométer.",
        "Itt található a neves Royal Columbian Hospital, a régió egyik legfontosabb kórháza.",
        "A városban öt SkyTrain állomás található, így mindössze 25 perc alatt elérhető Vancouver belvárosa.",
        "A Fraser River Discovery Centre bemutatja Észak-Amerika egyik legnagyobb lazacfolyójának ökoszisztémáját.",
        "A Queen's Park 30 hektáron kínál sportpályákat, játszótereket és botanikus kerteket.",
        "A városban minden évben megrendezik a Hyack Fesztivált, amely a helyi hagyományokat ápolja.",
        "New Westminster híres az 'antik negyedéről', ahol számos történelmi üzlet és galéria található."
    ]
)

# 9. port-coquitlam-cities-v2
add_entry(
    "port-coquitlam-cities-v2",
    "Port Coquitlam, amelyet a helyiek gyakran 'PoCo'-nak neveznek, egy barátságos város Metro Vancouver régiójában, a Fraser- és a Pitt-folyók összefolyásánál. A város leghíresebb szülötte Terry Fox, a kanadai nemzeti hős, akinek emlékét számos szobor és intézmény őrzi. Port Coquitlam híres kiterjedt parkrendszeréről és a több mint 25 kilométer hosszú Traboulay PoCo Trailről, amely körbeöleli a várost. A település megőrizte kisvárosi hangulatát, miközben modern ipari parkokkal és kereskedelmi központokkal fejlődött. A folyóparti területek gazdag élővilágot és kiváló horgászhelyeket kínálnak. A közösség központja a történelmi belváros, ahol helyi üzletek és kávézók várják a lakókat. A város környezettudatos fejlesztése és sporttörténete szorosan kapcsolódik a K5-K8 tanterv társadalomföldrajzi és egészségnevelési ismereteihez.",
    [
        "A Traboulay PoCo Trail egy 25,3 kilométer hosszú gyűrű, amely erdőkön és folyópartokon vezet át.",
        "A város lakossága megközelítőleg 61 000 fő, és népszerű a fiatal családok körében.",
        "Terry Fox itt végezte el középiskolai tanulmányait, és innen indult el a Reménység Maratonjára.",
        "A várost két nagy folyó határolja, amelyek fontos szerepet játszanak a helyi vízgazdálkodásban.",
        "Port Coquitlam több mint 270 hektárnyi parkterülettel és természetvédelmi övezettel rendelkezik.",
        "A település fontos vasúti csomópont, itt található a CPR egyik legnagyobb rendező pályaudvara.",
        "A városban minden évben megrendezik a májusi PoCo Days fesztivált és felvonulást.",
        "Az átlagos csapadékmennyiség évente kb. 1900 mm, ami dús, zöld növényzetet biztosít."
    ]
)

# 10. langley-cities-v2
add_entry(
    "langley-cities-v2",
    "Langley városa egy dinamikus városi központ a Langley Township szívében, Brit Kolumbia Fraser-völgyében. A település híres élénk kiskereskedelméről, modern lakónegyedeiről és gyalogosbarát belvárosáról. Langley-t gyakran a 'lovas sportok fővárosaként' emlegetik a környékén található számos ménes és lovas pálya miatt. A város közelében fekszik a történelmi Fort Langley, ahol Brit Kolumbia tartományát hivatalosan kikiáltották 1858-ban. A régió mezőgazdasági jelentősége kiemelkedő, különösen a bogyós gyümölcsök és a bortermelés területén. Langley kiváló oktatási intézményekkel és modern rekreációs központokkal várja a lakókat. A város gyors növekedése és történelmi gyökerei remek szemléltető anyagot kínálnak a K5-K8 tanterv településföldrajzi és történelmi moduljaihoz.",
    [
        "Langley városa önálló önkormányzat a Townshipen belül, lakossága kb. 26 000 fő.",
        "A környéken több mint 500 lótenyésztő farm and lovas létesítmény található.",
        "A Cascades Casino a város egyik legnagyobb szórakoztató központja és munkaadója.",
        "A városközpontban található Douglas Park egész évben ingyenes koncerteknek ad otthont.",
        "A Kwantlen Polytechnic University (KPU) egyik fő campusa a város határában található.",
        "Langley több mint 17 parkot és kiterjedt sétaútvonal-hálózatot tart fenn.",
        "Itt található a Kanadai Repülési Múzeum (Canadian Museum of Flight), ahol több mint 25 történelmi repülőgép látható.",
        "A város stratégiai helyen, a Trans-Canada Highway és az amerikai határ közelében fekszik."
    ]
)

# 11. white-rock-cities-v2
add_entry(
    "white-rock-cities-v2",
    "White Rock egy bájos tengerparti város Brit Kolumbiában, a Semiahmoo-öböl partján, az amerikai határ közvetlen közelében. A város nevét egy hatalmas, fehérre meszelt szikláról kapta, amely a strandon fekszik, és az őslakos legendák szerint egy tengeri istenség hajította oda. White Rock híres 470 méter hosszú történelmi mólójáról és a napsütötte homokos strandjairól, amelyek népszerűek a sétálók és a fürdőzők körében. A domboldalra épült városból csodálatos panoráma nyílik az óceánra és a San Juan-szigetekre. A település klímája az egyik legenyhébb Kanadában, ami vonzza a nyugdíjasokat és a turistákat. White Rock gazdag művészeti galériákban és hangulatos tengerparti éttermekben. A város tengerparti ökoszisztémája és geológiai érdekességei szorosan kapcsolódnak a K5-K8 tanterv természetföldrajzi és környezeti ismereteihez.",
    [
        "A város jelképét, a fehér sziklát 19. század óta rendszeresen fehérre festik a tengerészek tájékozódása végett.",
        "White Rock mólója 470 méter hosszú, és 1914-ben épült.",
        "A város lakossága megközelítőleg 20 000 fő, és Brit Kolumbia egyik legnépsűrűbb települése.",
        "White Rock évente átlagosan 20%-kal több napsütést kap, mint Vancouver.",
        "A város 8 kilométernyi homokos tengerparttal rendelkezik a Semiahmoo-öböl mentén.",
        "A település legmagasabb pontja 80 méterrel van a tengerszint felett a domboldalon.",
        "A móló mellett húzódó vasútvonal fontos történelmi és kereskedelmi útvonal volt.",
        "A városban minden évben megrendezik a Tour de White Rock kerékpárversenyt."
    ]
)

# 12. terrebonne-cities-v2
add_entry(
    "terrebonne-cities-v2",
    "Terrebonne egy dinamikusan fejlődő város Quebec tartományban, Montreal északi partján, a Mille Îles folyó mentén. A város neve franciául 'jó földet' jelent, ami a terület termékeny talajára utal. Terrebonne büszke történelmi örökségére, különösen az Île-des-Moulins negyedre, amely egy 17. századi uradalmi központ rekonstruált épületeivel és malmaival varázsolja el a látogatókat. A település ma Quebec egyik legnépesebb elővárosa, amely sikeresen ötvözi a modern lakónegyedeket a kiterjedt zöldfelületekkel és kulturális központokkal. A folyó menti kerékpárutak és parkok népszerűek a kikapcsolódni vágyók körében. A gazdaság diverzifikált, jelentős a kereskedelem és a szolgáltató szektor. Terrebonne történelmi megújulása és urbanizációs üteme kiválóan kapcsolódik a K5-K8 tanterv településföldrajzi és történelmi ismereteihez.",
    [
        "Terrebonne lakossága meghaladja a 111 000 főt, ezzel Quebec egyik legnagyobb városa.",
        "Az Île-des-Moulins Quebec egyik legfontosabb történelmi helyszíne öt régi épülettel.",
        "A város területén több mint 200 kilométernyi kerékpárútvonal található.",
        "A település 1673-ban kapott uradalmi státuszt, így Quebec egyik legrégebbi alapítású helye.",
        "Terrebonne több mint 100 parkkal és játszótérrel várja a családokat.",
        "A Théâtre du Vieux-Terrebonne a régió egyik legfontosabb kulturális intézménye.",
        "A Mille Îles folyó számos apró szigete természetvédelmi terület és fészkelőhely.",
        "A város gazdaságában meghatározó az építőipar és az élelmiszer-feldolgozás."
    ]
)

# 13. saint-jean-sur-richelieu-cities-v2
add_entry(
    "saint-jean-sur-richelieu-cities-v2",
    "Saint-Jean-sur-Richelieu Quebec tartományban, a Richelieu-folyó partján fekszik, nem messze a Champlain-tótól. A város világszerte híres az évenkénti Nemzetközi Hőlégballon Fesztiválról, amely színes látványosságával turisták ezreit vonzza a régióba. Történelmileg a település fontos katonai és kereskedelmi központ volt, amit a Royal Military College Saint-Jean jelenléte is hangsúlyoz. A Richelieu-folyó mentén húzódó történelmi csatorna (Chambly Canal) fontos szerepet játszott az USA és Kanada közötti vízi kereskedelemben. A város ma modern ipari és kutatási bázis, különösen a védelem és a repülés területén. A település kerékpárútjai és folyóparti parkjai kiváló rekreációs lehetőségeket kínálnak. Saint-Jean-sur-Richelieu katonai múltja és technológiai fesztiválja szorosan kapcsolódik a K5-K8 tanterv történelmi és fizikai ismereteihez.",
    [
        "A Nemzetközi Hőlégballon Fesztivál során több mint 100 ballon emelkedik a magasba egyszerre.",
        "A város lakossága meghaladja a 95 000 főt, és Quebec egyik legfontosabb regionális központja.",
        "A Saint-Jean erőd 1666 óta fontos katonai pont, ma múzeumként is funkcionál.",
        "A Chambly-csatorna 20 kilométer hosszú, és 9 zsilipje van Saint-Jean és Chambly között.",
        "A városban található a Kanadai Erők 2. számú Kiképző Központja.",
        "Itt épült fel Kanada első vasútvonala 1836-ban Saint-Jean és La Prairie között.",
        "A folyóparti sétány több mint 5 kilométer hosszan kínál látványos pihenőhelyeket.",
        "A városban több mint 50 sportpálya és 3 fedett jégpálya található."
    ]
)

# 14. blainville-cities-v2
add_entry(
    "blainville-cities-v2",
    "Blainville egy jómódú és gyorsan fejlődő város Quebec tartományban, a Laurentides régió bejáratánál, Montreal közelében. A várost rendszeresen Kanada egyik legjobb lakóhelyének választják, köszönhetően magas életszínvonalának, biztonságának és családbarát környezetének. Blainville híres kiterjedt erdős területeiről és parkjairól, mint például a Parc de la Pinière, amely kiváló túrázó- és sífutóhely. A település jelentős lovasközponttal rendelkezik, és számos rangos golfpályának ad otthont. A gazdaság diverzifikált, de a hangsúly a szolgáltatásokon és a technológiai fejlesztéseken van. A város modern infrastruktúrája és fejlődő oktatási rendszere vonzza a fiatal tehetségeket. Blainville környezettudatos városfejlesztése és gazdasági stabilitása kiválóan kapcsolódik a K5-K8 tanterv településföldrajzi és fenntarthatósági ismereteihez.",
    [
        "Blainville lakossága meghaladja a 60 000 főt, és az egyik leggyorsabban növő quebeci város.",
        "A várost 2019-ben Kanada legjobb helyének választották a családalapításhoz.",
        "A Parc de la Pinière több mint 5 kilométernyi természetes túraútvonalat kínál.",
        "A város területének közel 40%-a park és természetvédelmi övezet marad.",
        "Itt található Quebec egyik legnagyobb és legmodernebb lovas parkja (Parc équestre).",
        "A városban három világszínvonalú 18 lyukú golfpálya található.",
        "Blainville rendelkezik egy modern vízi központtal és több tucat sportlétesítménnyel.",
        "A város medián jövedelme jelentősen meghaladja a tartományi átlagot."
    ]
)

# 15. drummondville-cities-v2
add_entry(
    "drummondville-cities-v2",
    "Drummondville Quebec tartomány szívében, a Saint-François folyó partján fekszik, stratégiai helyen Montreal és Quebec City között. A várost 1815-ben alapították brit katonák a háború utáni letelepedés keretében, és ma a régió fontos ipari és kulturális központja. Drummondville legfőbb turisztikai vonzereje a Village Québécois d'Antan, egy élő történelmi múzeum, amely a 19. századi quebeci életet mutatja be több mint 70 eredeti épülettel. A város ad otthont a Mondial des Cultures fesztiválnak, amely a világ népeinek táncait és zenéit vonultatja fel. A gazdaság motorja a gyártóipar és a logisztika, köszönhetően a központi elhelyezkedésnek. A folyó menti parkok és sétányok kellemes kikapcsolódást nyújtanak. Drummondville történelmi újrafelfedezése és ipari fejlődése szervesen illeszkedik a K5-K8 tanterv történelmi és gazdaságföldrajzi moduljaihoz.",
    [
        "A Village Québécois d'Antanban több mint 100 kosztümös animátor mutatja be a régi mesterségeket.",
        "Drummondville lakossága meghaladja a 75 000 főt, and fontos közlekedési csomópont.",
        "A város minden évben megrendezik a Poutine Fesztivált, a híres quebeci étel tiszteletére.",
        "A Saint-François-folyó 259 kilométer hosszú, and meghatározza a város látképét.",
        "A város gazdasága több mint 600 különböző ipari vállalatnak ad otthont.",
        "A Centre Marcel-Dionne a helyi jégkorongcsapat, a Voltigeurs otthona.",
        "A városban több mint 100 kilométernyi kerékpárút található a Route Verte hálózat részeként.",
        "Itt épült fel Kanada egyik legmodernebb könyvtára és kulturális központja."
    ]
)

# 16. saint-hyacinthe-cities-v2
add_entry(
    "saint-hyacinthe-cities-v2",
    "Saint-Hyacinthe Quebec tartomány mezőgazdasági fővárosa, amely a Yamaska-folyó partján fekszik. A várost 2002-ben Észak-Amerika első 'Agrárélelmiszer-technológiai Városává' nyilvánították, mivel itt található a régió legjelentősebb kutatási és oktatási központja ezen a területen. Itt székel a Montreal-i Egyetem Állatorvostudományi Kara is, ami nemzetközi hírnevet ad a településnek. Saint-Hyacinthe büszke történelmi belvárosára és a legrégebbi folyamatosan működő köztéri piacára Quebecben. A város minden évben megrendezi az Expo de Saint-Hyacinthe mezőgazdasági vásárt, amely több százezer látogatót vonz. A település modern ipari parkjai élelmiszeripari innovációknak adnak otthont. Saint-Hyacinthe tudományos és mezőgazdasági szerepe szorosan kapcsolódik a K5-K8 tanterv biológiai és gazdaságföldrajzi ismereteihez.",
    [
        "A városban több mint 1500 kutató dolgozik az agrárélelmiszer-technológia területén.",
        "A Marché Public de Saint-Hyacinthe 1830 óta működik ugyanazon a helyszínen.",
        "A város lakossága megközelítőleg 56 000 fő, de gazdasági vonzáskörzete sokkal nagyobb.",
        "Az Expo de Saint-Hyacinthe Kanada legnagyobb mezőgazdasági fesztiválja tíz napon keresztül.",
        "A Yamaska-folyó völgye Quebec egyik legtermékenyebb vidéke.",
        "A városban található a Jardin Daniel A. Séguin, egy 4,5 hektáros bemutatókert.",
        "Saint-Hyacinthe ad otthont a Centre des Arts Juliette-Lassonde-nak, a régió fő kulturális központjának.",
        "A város saját, biogázt előállító üzemet működtet a szerves hulladék feldolgozására."
    ]
)

# 17. mirabel-cities-v2
add_entry(
    "mirabel-cities-v2",
    "Mirabel egy hatalmas területű város Quebec tartományban, Montreal északi részén, amely eredetileg a világ legnagyobb repülőterének tervezett Mirabel Nemzetközi Repülőtér köré épült. Bár a repülőtér ma főleg teherforgalmat és repülőgépgyártást szolgál ki, Mirabel a tartomány egyik leggyorsabban fejlődő településévé vált. A város gazdaságának alapköve a repüléstechnika, itt található többek között a Bombardier és az Airbus egyik legfontosabb üzeme. A város nagy része továbbra is mezőgazdasági terület, ami különleges egyensúlyt teremt az ipar és a természet között. Mirabel népszerű a bevásárlóturizmusáról is, köszönhetően a Premium Outlets központnak. A település modern lakóparkjai és tágas terei vonzzák a fiatal családokat. Mirabel technológiai jelentősége és urbanizációs szerkezete kiválóan kapcsolódik a K5-K8 tanterv technológiai és településföldrajzi moduljaihoz.",
    [
        "Mirabel területe 485 négyzetkilométer, ezzel Quebec egyik legnagyobb területű városa.",
        "A városban gyártják az Airbus A220-as repülőgépeket.",
        "A település lakossága az elmúlt 15 évben több mint kétszeresére, 60 000 fő fölé nőtt.",
        "A terület 80%-a mezőgazdasági vagy erdészeti védett övezet.",
        "Itt található a Circuit ICAR, egy professzionális autóverseny-pálya a régi kifutópályákon.",
        "A Bois de Belle-Rivière park több mint 20 kilométernyi túra- és sífutópályát kínál.",
        "A városban található Észak-Amerika egyik legnagyobb juharszirup-termelő vidéke.",
        "A Mirabel repülőtér irányítótornya ma is uralja a tájat, bár az utasterminált lebontották."
    ]
)

# 18. granby-cities-v2
add_entry(
    "granby-cities-v2",
    "Granby egy barátságos város Quebec Eastern Townships régiójában, amely leginkább világszínvonalú állatkertjéről, a Zoo de Granby-ról híres. A város a Boivin-tó partján fekszik, és rendkívül büszke zöldterületeire, parkjaira és kiterjedt kerékpárút-hálózatára. Granby fontos ipari központ is, ahol a gyártóipar and technológia egyaránt jelen van. A városközpontban található szökőkutak és virágágyások kellemes hangulatot árasztanak. A település híres a Nemzetközi Dalfesztiváljáról (Festival International de la Chanson), amely a francia nyelvű zenét népszerűsíti. A környéken található a Yamaska Tartományi Park, amely strandjaival és vízi sportjaival vonzza a látogatókat. Granby környezetvédelmi törekvései és turisztikai szerepe szorosan kapcsolódik a K5-K8 tanterv biológiai és gazdaságföldrajzi ismereteihez.",
    [
        "A Granby Állatkert több mint 1500 állatnak ad otthont, és Quebec egyik legnépszerűbb látványossága.",
        "A város lakossága meghaladja a 69 000 főt, és folyamatosan növekszik.",
        "Granbyban több mint 100 kilométernyi kerékpárút található, amely a 'Route Verte' hálózat része.",
        "A Boivin-tó egy 19 hektáros madárrezervátumnak ad otthont a város szívében.",
        "A város beceneve 'A szökőkutak városa' a közterületeken található számos vízi látványosság miatt.",
        "A Yamaska Tartományi Parkban található a Choinière víztározó, amely népszerű horgászhely.",
        "Itt alapították 1947-ben az Agropur szövetkezetet, amely ma Észak-Amerika egyik legnagyobb tejipari cége.",
        "A város minden évben megrendezik a nemzetközi veteránautó kiállítást (Granby International)."
    ]
)

# 19. moose-jaw-cities-v2
add_entry(
    "moose-jaw-cities-v2",
    "Moose Jaw Saskatchewan tartomány egyik legkülönlegesebb városa, amely gazdag történelmi legendákkal és modern attrakciókkal várja a látogatókat. A várost leginkább a 'Moose Jaw alagútjairól' ismerik, amelyek a szesztilalom idején állítólag Al Capone menedékhelyéül is szolgáltak. A település látképét Mac, a Jávorszarvas szobra uralja, amely a világ egyik legmagasabb ilyen emlékműve. Moose Jaw híres gyógyvizes fürdőiről (Temple Gardens) és monumentális falfestményeiről, amelyek a város múltját idézik fel. Itt található a CFB Moose Jaw légibázis, a híres Snowbirds műrepülő raj otthona. A város gazdasága a mezőgazdaságra, a bányászatra és a turizmusra épül. Moose Jaw történelmi legendái és geológiai adottságai kiválóan kapcsolódnak a K5-K8 tanterv társadalomföldrajzi és történelmi moduljaihoz.",
    [
        "Mac, a Jávorszarvas szobra 10,36 méter magas és acélból, valamint betonból készült.",
        "A város alatti alagútrendszer eredetileg a vasúti fűtés gőzvezetékei számára épült a 19. század végén.",
        "Moose Jaw lakossága megközelítőleg 34 000 fő, és fontos vasúti csomópont.",
        "A Temple Gardens Mineral Spa vize 1350 méter mélyről érkezik, és 45 fokos.",
        "A városban több mint 45 nagyméretű történelmi falfestmény található az épületek falán.",
        "Itt található a Nyugati Fejlesztési Múzeum (WDM) közlekedési gyűjteménye.",
        "A CFB Moose Jaw a kanadai légierő legforgalmasabb kiképző bázisa.",
        "A város neve az őslakos 'moose gaw' szóból ered, ami 'meleg szellőket' jelent."
    ]
)

# 20. prince-albert-cities-v2
add_entry(
    " prince-albert-cities-v2",
    "Prince Albert Saskatchewan harmadik legnagyobb városa, amelyet 'az észak kapujaként' emlegetnek, mivel itt találkozik a préri és az északi erdőség (tajga). A North Saskatchewan-folyó partján fekvő település fontos kereskedelmi és közigazgatási központ a tartomány északi régiói számára. Prince Albert büszke kulturális örökségére, különösen a métis és az őslakos közösségek hagyományaira. A várostól északra található a Prince Albert Nemzeti Park, amely Kanada egyik legszebb természetvédelmi területe, tavakkal és sűrű fenyvesekkel. A gazdaság motorja a mezőgazdaság, az erdészet és a szolgáltatások. A városban számos történelmi épület és múzeum, például a Diefenbaker House található, amely John Diefenbaker egykori miniszterelnök emlékeit őrzi. A település északi fekvése és ökoszisztémája szorosan kapcsolódik a K5-K8 tanterv természetföldrajzi és politikai ismereteihez.",
    [
        "Prince Albert lakossága meghaladja a 36 000 főt, és egy több mint 100 000 fős régiót szolgál ki.",
        "A városban született vagy élt Kanada három korábbi miniszterelnöke is.",
        "A Prince Albert Nemzeti Park 3874 négyzetkilométeren terül el a várostól északra.",
        "A North Saskatchewan-folyó fontos közlekedési útvonal volt a szőrmekereskedelem idején.",
        "Itt található a Northern Lights Casino, amely a régió egyik legnagyobb szórakoztató központja.",
        "A városban minden évben megrendezik a Prince Albert Exhibition vásárt, amely 1884 óta hagyomány.",
        "A környéken található Saskatchewan egyik legnagyobb börtönkomplexuma.",
        "A város fekvése miatt nyáron a nappalok rendkívül hosszúak, a nap csak késő este nyugszik le."
    ]
)

# 21. brandon-cities-v2
add_entry(
    "brandon-cities-v2",
    "Brandon Manitoba tartomány második legnagyobb városa, amely az Assiniboine-folyó völgyében fekszik. A települést gyakran 'Búza Városként' emlegetik, mivel a világ egyik legtermékenyebb mezőgazdasági régiójának központja. Brandon fontos oktatási és kereskedelmi csomópont, itt található a Brandon University és az Assiniboine Community College. A város híres a minden évben megrendezett Royal Manitoba Winter Fair-ről, amely Kanada egyik legnagyobb mezőgazdasági vására. A település gazdag katonai és vasúti múlttal rendelkezik, amit a Nemzetközi Légitámadó Múzeum is hirdet. A folyóparti parkok és a közeli Spruce Woods Tartományi Park sivatagi dűnéi különleges természeti élményt nyújtanak. Brandon mezőgazdasági súlya és régióformáló ereje szervesen illeszkedik a K5-K8 tanterv gazdaságföldrajzi és történelmi moduljaihoz.",
    [
        "Brandon lakossága meghaladja az 51 000 főt, és Manitoba délnyugati részének központja.",
        "A Royal Manitoba Winter Fair egyike a mindössze két kanadai vásárnak, amely 'Royal' (királyi) címet visel.",
        "A város környékén évente több millió tonna gabonát és olajos magvat termesztenek.",
        "A Brandon University több mint 3500 hallgatónak ad otthont, és híres zeneművészeti karáról.",
        "Itt található a Daly House Museum, a város első polgármesterének egykori otthona.",
        "Brandonban több mint 40 kilométernyi többfunkciós sétaútvonal található a folyó mentén.",
        "A város fontos logisztikai központ a Trans-Canada Highway és a vasútvonalak mentén.",
        "A környéken található a Commonwealth Air Training Plan Museum, amely a II. világháború repülőit mutatja be."
    ]
)

# 22. north-bay-cities-v2
add_entry(
    "north-bay-cities-v2",
    "North Bay Ontario tartomány északi részén, a Nipissing-tó és a Trout-tó között helyezkedik el. A várost gyakran 'Észak kapujának' nevezik, mivel fontos közlekedési csomópont a déli és északi régiók között. North Bay híres látványos naplementéiről a Nipissing-tó felett és tágas homokos strandjairól. A város gazdasága az oktatásra, az egészségügyre és a védelemre épül; itt található a Nipissing University és a Canadore College. Különleges látnivaló a CFB North Bay föld alatti komplexuma, amely a hidegháború idején a légvédelem központja volt. A település környezete ideális a horgászathoz, a vitorlázáshoz és a túrázáshoz az örökzöld erdőkben. A város közlekedési stratégiai szerepe és tóparti elhelyezkedése kiválóan kapcsolódik a K5-K8 tanterv logisztikai és természetföldrajzi ismereteihez.",
    [
        "North Bay lakossága megközelítőleg 52 000 fő, és a Nipissing körzet székhelye.",
        "A Nipissing-tó Kanada egyik legnagyobb tava, felülete meghaladja a 870 négyzetkilométert.",
        "A városban található a NORAD kanadai központja, amely egykor 60 emelet mélyen volt a föld alatt.",
        "A Waterfront Park egy 2 kilométer hosszú sétányt és egy antik körhintát kínál a tóparton.",
        "North Bay volt a híres Dionne-ötösikrek szülőhelye, aminek emlékmúzeuma a városban található.",
        "A városban több mint 50 kilométernyi sífutó és túraútvonal várja a sportolókat.",
        "A Trout-tó a város ivóvízforrása és népszerű üdülőhelye a kristálytiszta vize miatt.",
        "Itt található a Chief Commanda II sétahajó, amely katamaránként járja a Nipissing-tavat."
    ]
)

# 23. belleville-cities-v2
add_entry(
    "belleville-cities-v2",
    "Belleville, amelyet 'A Szép Városként' is emlegetnek, Ontario tartományban, a Quinte-öböl északi partján fekszik, Torontótól keletre. A város fontos ipari és kereskedelmi központ a 401-es autópálya mentén, amely Kanada legforgalmasabb közlekedési folyosója. Belleville híres történelmi építészetéről, különösen a Városházáról és a viktoriánus stílusú lakónegyedeiről. A település ad otthont a Loyalist College-nak, ami fontos oktatási bázist jelent a régiónak. A Quinte-öböl vizei népszerűek a horgászok körében, különösen a süllőállományáról híres. A város elkötelezett a vízparti fejlesztések mellett, ahol modern sétányok és parkok várják a lakókat. Belleville gazdasági elhelyezkedése és történelmi lojalista gyökerei szervesen illeszkedik a K5-K8 tanterv történelmi és közlekedésföldrajzi moduljaihoz.",
    [
        "Belleville lakossága meghaladja a 50 000 főt, agglomerációval együtt a 100 000-et.",
        "A várost 1789-ben alapította brit lojalisták, akik az amerikai forradalom után érkeztek ide.",
        "A Quinte-öböl felett átívelő Norris Whitney híd látványos kapuja a városnak.",
        "A városban több mint 500 holdnyi parkterület található, beleértve a népszerű Zwick's Parkot.",
        "Itt található a Glanmore National Historic Site, egy gazdagon díszített 1883-as kúria.",
        "Belleville fontos élelmiszeripari központ, itt található többek között a Kellogg's gyára.",
        "A város kikötője népszerű megállóhely a vitorlázók számára a Trent-Severn vízi út felé.",
        "A településen keresztül folyik a Moira-folyó, amely festői zúgókkal tarkított."
    ]
)

# 24. sault-ste-marie-cities-v2
add_entry(
    "sault-ste-marie-cities-v2",
    "Sault Ste. Marie egy stratégiai határváros Ontario tartományban, a Felső-tavat és a Huron-tavat összekötő St. Marys-folyó partján. A város világszerte híres a Soo Locks hajózsilipjeiről, amelyek lehetővé teszik a hatalmas teherhajók áthaladását a tavak közötti szintkülönbségen. A település gazdasága hagyományosan az acélgyártásra és az erdőgazdálkodásra épül, de ma már a megújuló energia és a turizmus is meghatározó. Itt indul az Agawa Canyon Tour Train, amely az ország egyik leglátványosabb vasúti kirándulását kínálja az északi vadonba. Sault Ste. Marie gazdag őslakos és francia örökséggel rendelkezik, neve is a folyó zúgóira utal. A város környezete kiváló lehetőséget nyújt a síelésre és a túrázásra. A település mérnöki létesítményei és természetföldrajzi környezete szorosan kapcsolódik a K5-K8 tanterv fizikai földrajzi és közlekedési ismereteihez.",
    [
        "A Soo Locks zsilipjein évente több mint 10 000 hajó halad át, hatalmas árumennyiséggel.",
        "Sault Ste. Marie lakossága megközelítőleg 73 000 fő, és fontos híd köti össze az USA-val.",
        "Itt található az Algoma Steel, Kanada egyik legnagyobb és legrégebbi acélgyára.",
        "A városban működik az Kanadai Bushplane Örökség Központ, amely a tűzoltó repülőket mutatja be.",
        "Sault Ste. Marie rendelkezik Észak-Amerika egyik legnagyobb napelem-parkjával.",
        "A St. Marys-folyó zúgói világhírűek a horgászatról, különösen a szivárványos pisztrángról.",
        "A városon keresztül halad a Trans-Canada Highway és a vízi út kereszteződése.",
        "Itt található a Shingwauk Residential School Centre, amely fontos emlékhelye az őslakos történelemnek."
    ]
)

# 25. kawartha-lakes-cities-v2
add_entry(
    "kawartha-lakes-cities-v2",
    "Kawartha Lakes egy hatalmas kiterjedésű község Ontario tartományban, amely több mint 250 tavat foglal magában, és Kanada egyik legnépszerűbb nyaralóövezete (Cottage Country). A település központja Lindsay, amely fontos kereskedelmi és oktatási bázis. Kawartha Lakes híres a Trent-Severn vízi útról, amely csatornákon és zsilipeken keresztül köti össze a tavakat a vitorlázók örömére. A régió tájképe változatos: délen termékeny mezőgazdasági földek, északon pedig a Kanadai-pajzs sziklás-erdős vidéke jellemzi. A turizmus a legfontosabb gazdasági ágazat, de az agráripar is jelentős. A település számtalan fesztiválnak, kézműves vásárnak és szabadtéri eseménynek ad otthont egész évben. Kawartha Lakes vízhálózata és geológiai kettőssége kiválóan kapcsolódik a K5-K8 tanterv természetföldrajzi és gazdasági ismereteihez.",
    [
        "Kawartha Lakes területe több mint 3000 négyzetkilométer, amivel Ontario egyik legnagyobb községe.",
        "A településen belül több mint 250 tó és folyó található, köztük a Sturgeon és a Balsam tó.",
        "Kawartha Lakes lakossága megközelítőleg 75 000 fő, ami nyáron a turistákkal jelentősen megnő.",
        "A Trent-Severn vízi út 386 kilométer hosszú, és átszeli a község teljes területét.",
        "Lindsay-ben található a neves Fleming College Frost Campusa, amely környezetvédelmi képzéseiről híres.",
        "A környéken található a Carden Plain, amely Észak-Amerika egyik legfontosabb madármegfigyelő helye.",
        "A községben több mint 600 kilométernyi túra- és motorosszán-útvonal található.",
        "Kawartha Lakes népszerű forgatási helyszín, számos kanadai film és sorozat készült itt."
    ]
)

# 26. airdrie-cities-v2
add_entry(
    "airdrie-cities-v2",
    "Airdrie Alberta tartomány egyik leggyorsabban fejlődő városa, amely Calgarytól közvetlenül északra helyezkedik el. A település eredetileg vasúti megállóhelyként indult, de mára egy modern, családbarát nagyvárossá vált, amely megőrizte szoros közösségi szellemét. Airdrie népszerűsége a kiváló életminőségnek, a biztonságnak és a calgary-i munkalehetőségek közelségének köszönhető. A város híres az évenként megrendezett Fényfesztiválról (Festival of Lights), amely Nyugat-Kanada egyik legnagyobb ingyenes karácsonyi eseménye. A gazdaság motorja a szolgáltató szektor, a gyártás és a logisztika. A település tágas parkokkal, modern sportlétesítményekkel és fejlődő oktatási hálózattal rendelkezik. Airdrie urbanizációs üteme és népességszerkezete remek példát szolgáltat a K5-K8 tanterv településföldrajzi és társadalmi ismereteihez.",
    [
        "Airdrie lakossága az elmúlt 10 évben több mint 50%-kal nőtt, meghaladva a 75 000 főt.",
        "A város Nyugat-Kanada egyik legmagasabban fekvő települése, 1089 méterrel a tengerszint felett.",
        "Az Airdrie Festival of Lights több mint 1 millió dollár értékű fényinstallációt mutat be.",
        "A városban több mint 80 kilométernyi többfunkciós gyalogút és kerékpárút található.",
        "A Genesis Place egy hatalmas, 450 000 négyzetlábas sport- és rekreációs központ.",
        "A városban minden évben megrendezik az Airdrie Pro Rodeo versenyt, amely nagy múltra tekint vissza.",
        "A település stratégiai helyen, a Queen Elizabeth II Highway mentén fekszik.",
        "Airdrie-ben nincsenek üzleti adók, ami vonzza a vállalkozásokat a régióba."
    ]
)

# 27. wood-buffalo-fort-mcmurray-cities-v2
add_entry(
    "wood-buffalo-fort-mcmurray-cities-v2",
    "Fort McMurray Alberta északi részén, az Athabasca-folyó völgyében fekszik, és a világ egyik legfontosabb energiaipari központja. A település az albertai olajhomok-kitermelés szolgáltató bázisa, ami rendkívül gyors növekedést és nemzetközi sokszínűséget eredményezett. Fort McMurray lakossága az ország egyik legmagasabb átlagjövedelmével rendelkezik, köszönhetően a jól fizető ipari munkahelyeknek. A várost sűrű tajgaerdők veszik körül, amelyek lenyűgöző kirándulóhelyeket és horgásztavakat kínálnak. Itt gyakran megfigyelhető az aurora borealis (északi fény), ami varázslatos éjszakai látványt nyújt. A város 2016-ban egy hatalmas erdőtüzet élt át, de az újjáépítés során modernebbé és fenntarthatóbbá vált. A település energiaipari szerepe és környezeti kihívásai szorosan kapcsolódik a K5-K8 tanterv gazdaságföldrajzi és ökológiai ismereteihez.",
    [
        "Fort McMurray az Athabasca olajhomok-mező szívében fekszik, amely a világ harmadik legnagyobb olajkészlete.",
        "A település lakossága (a Wood Buffalo régióval együtt) meghaladja a 75 000 főt.",
        "A városban több mint 80 különböző nemzetiség képviselteti magát a munkaerőpiacon.",
        "Itt található az Oil Sands Discovery Centre, amely bemutatja a kitermelés technológiáját.",
        "A téli hónapokban a sarki fény az év több mint 100 éjszakáján látható a város felett.",
        "A város stratégiai pontja a 63-as autópályának, amely az egyetlen összeköttetés az északi területekkel.",
        "MacDonald Island Park Kanada legnagyobb közösségi rekreációs és szabadidős központja.",
        "A város környéki erdőkben hatalmas bölénycsordák élnek vadon."
    ]
)

# 28. st-johns-county-cities-v2
add_entry(
    "st-johns-county-cities-v2",
    "St. John's Új-Fundland és Labrador tartomány fővárosa és Észak-Amerika egyik legrégebbi európai alapítású települése. A város meredek dombokra épült a természetes kikötő felett, és híres színes házaiból álló utcáiról ('Jellybean Row'). A Signal Hill csúcsán található Cabot Tower-nél fogták az első transzatlanti rádiójelet, és innen nyílik a legszebb kilátás az Atlanti-óceánra. St. John's a tartomány gazdasági motorja, ahol az offshore olaj- és gázkitermelés, valamint az informatika dominál. A város lakói híresek vendégszeretetükről, egyedi akcentusukról és pezsgő zenei életükről a George Streeten. A település közelében található Cape Spear, az észak-amerikai kontinens legkeletibb pontja. St. John's történelmi jelentősége és tengeri elhelyezkedése kiválóan kapcsolódik a K5-K8 tanterv történelmi és óceánföldrajzi ismereteihez.",
    [
        "St. John's-t 1497-ben fedezte fel John Cabot, és az 1500-as évek óta állandóan lakott.",
        "A város lakossága az agglomerációval együtt meghaladja a 212 000 főt.",
        "Cape Spear világítótornya Kanada legkeletibb pontját jelöli, ahol először kel fel a nap az országban.",
        "Guglielmo Marconi 1901-ben a Signal Hill-en fogadta az első vezeték nélküli rádiójelet Angliából.",
        "A kikötő bejárata, a 'The Narrows' mindössze 61 méter széles a legszűkebb pontján.",
        "A városban található a Memorial University, az Atlanti-Kanada legnagyobb egyeteme.",
        "St. John's Kanada egyik legködösebb és legszelesebb városa a tengeri áramlatok miatt.",
        "A város színes házai eredetileg azért kaptak élénk színeket, hogy a halászok a ködben is hazataláljanak."
    ]
)

# 29. clarington-cities-v2
add_entry(
    "clarington-cities-v2",
    "Clarington egy változatos község Ontario tartományban, a Durham régió keleti szélén, az Ontario-tó partján. A település több kisebb közösséget (Bowmanville, Courtice, Newcastle) egyesít, és sikeresen ötvözi a vidéki bájt a modern ipari fejlődéssel. Clarington gazdaságának meghatározó eleme a Darlingtoni Atomerőmű, amely Kanada egyik legfontosabb energiaforrása. A város híres a Canadian Tire Motorsport Parkról, amely nemzetközi autó- és motorversenyeknek ad otthont. A természetkedvelők a tóparti sétányokat és a Bowmanville-völgy túraútvonalait élvezhetik. A mezőgazdaság továbbra is jelentős, különösen az alma- és gyümölcstermesztés területén. Clarington energiatermelési szerepe és infrastrukturális hálózata szorosan kapcsolódik a K5-K8 tanterv technológiai és gazdaságföldrajzi moduljaihoz.",
    [
        "Clarington lakossága meghaladja a 100 000 főt, és területe több mint 600 négyzetkilométer.",
        "A Darlingtoni Atomerőmű Ontario áramszükségletének közel 20%-át biztosítja.",
        "A Canadian Tire Motorsport Park (korábban Mosport) volt az első kanadai Forma-1-es futam helyszíne.",
        "Itt található az Archibald’s Orchard & Estate Winery, amely híres almadesszertjeiről és gyümölcsborairól.",
        "A község több mint 10 kilométer hosszú érintetlen partszakasszal rendelkezik az Ontario-tó mentén.",
        "Bowmanville-ben található a neves Jabbah-zoo, ahol egzotikus állatok mentésével foglalkoznak.",
        "A város fontos állomása a GO Transit hálózatának, megkönnyítve a torontói ingázást.",
        "A környéken található az Orono Park, amely egyike a régió legnépszerűbb szabadtéri strandjainak."
    ]
)

# 30. pickering-cities-v2
add_entry(
    "pickering-cities-v2",
    "Pickering egy dinamikus város Ontario tartományban, közvetlenül Torontótól keletre, az Ontario-tó partján. A város legismertebb létesítménye a Pickeringi Atomerőmű, amely évtizedek óta meghatározza a település gazdaságát és látképét. Pickering híres gyönyörű vízpartjáról, különösen a Frenchman's Bay negyedről, ahol kikötők, strandok és sétányok várják a kikapcsolódni vágyókat. A város északi része megőrizte vidéki jellegét, falvakkal és természetvédelmi területekkel, míg a déli rész modern lakó- és bevásárlónegyedekkel fejlődik. A település fontos közlekedési csomópont, kiváló vasúti összeköttetéssel Toronto belvárosával. Pickering elkötelezett a fenntartható városfejlesztés és a zöldterületek megőrzése mellett. A város energetikai jelentősége és urbanizációs üteme kiválóan kapcsolódik a K5-K8 tanterv fizikai földrajzi és társadalmi ismereteihez.",
    [
        "Pickering lakossága meghaladja a 95 000 főt, és várhatóan jelentősen nő a jövőbeli fejlesztésekkel.",
        "A Pickeringi Atomerőmű a világ egyik legnagyobb ilyen létesítménye nyolc reaktorral.",
        "A Frenchman's Bay egy természetes öböl, amely népszerű vitorlázó és kajakos központ.",
        "A városban található a Pickering Village, egy történelmi negyed eredeti 19. századi épületekkel.",
        "Itt található a neves Petticoat Creek természetvédelmi terület, amely látványos kilátást nyújt a tó.",
        "Pickering ad otthont a Durham Live szórakoztató komplexumnak, amely kaszinót és hoteleket foglal magában.",
        "A város több mint 85 parkot és kiterjedt túraútvonal-hálózatot tart fenn.",
        "A településen keresztül halad az országos hírű Waterfront Trail kerékpárút."
    ]
)

# 31. ajax-cities-v2
add_entry(
    "ajax-cities-v2",
    "Ajax egy modern város Ontario tartományban, a Durham régió szívében, az Ontario-tó partján. A várost a második világháború idején alapították egy hatalmas lőszergyár köré, és nevét a HMS Ajax brit hadihajóról kapta. Ma Ajax egy gyorsan fejlődő település, amely híres érintetlen vízpartjáról, parkjairól és multikulturális közösségéről. A város gazdasága a technológiára, az egészségügyre és az automatizálásra épül. A település kiterjedt kerékpárút-hálózattal és modern rekreációs központokkal rendelkezik, mint például az Audley Recreation Centre. Ajax vízparti sétánya az egyik leghosszabb és legszebb a régióban. A város történelmi alapítása és modern urbanizációja kiválóan kapcsolódik a K5-K8 tanterv történelmi és településföldrajzi ismereteihez.",
    [
        "A várost 1941-ben alapították, eredetileg a Defence Industries Limited (DIL) munkásai számára.",
        "Ajax lakossága meghaladja a 125 000 főt, és rendkívül gyorsan növekszik.",
        "A város partvonala 7 kilométer hosszú, és szinte teljes egészében parkosított és nyilvános.",
        "Ajax büszke a 'Legzöldebb város' címre, amelyet több környezetvédelmi kezdeményezésével érdemelt ki.",
        "A városban található a Greenwood Természetvédelmi Terület, amely népszerű túrázóhely.",
        "Az Ajax Downs lópálya a régió egyik legfontosabb szórakoztató és sportközpontja.",
        "A település stratégiai pontja a 401-es autópályának és a GO Transit vasúti hálózatának.",
        "A városban több mint 60 különböző nyelvet beszélnek, tükrözve a lakosság sokszínűségét."
    ]
)

# 32. richmond-hill-cities-v2
add_entry(
    "richmond-hill-cities-v2",
    "Richmond Hill egy jómódú és dinamikusan növekvő város Ontario tartományban, Torontótól közvetlenül északra, a York régióban. A település híres magas életminőségéről, kiváló oktatási intézményeiről és gazdag kulturális életéről. Itt található a neves David Dunlap Obszervatórium, ahol Kanada legnagyobb optikai távcsöve működik. Richmond Hill gazdasága rendkívül erős, számos technológiai és üzleti vállalat központjának ad otthont. A város rendkívül sokszínű, jelentős kínai és iráni közösséggel, ami gazdagítja a helyi gasztronómiát és fesztiválokat. A település számos parkkal, tóval (például a Bond Lake) és természetvédelmi területtel büszkélkedhet. Richmond Hill technológiai fejlettsége és népességszerkezete szorosan kapcsolódik a K5-K8 tanterv csillagászati és társadalomföldrajzi moduljaihoz.",
    [
        "A David Dunlap Obszervatóriumban található teleszkóp tükre 1,88 méter átmérőjű.",
        "Richmond Hill lakossága meghaladja a 200 000 főt, ezzel Ontario egyik legnagyobb városa.",
        "A városban található a neves Richmond Hill Centre for the Performing Arts kulturális központ.",
        "A település területén több mint 160 park és 544 hektárnyi természetvédelmi terület található.",
        "Richmond Hill medián családi jövedelme az egyik legmagasabb Kanadában.",
        "A városban működik az Oak Ridges Moraine, egy fontos geológiai és ökológiai védett övezet.",
        "A település lakóinak több mint 60%-a bevándorló származású, ami rendkívüli sokszínűséget ad.",
        "Richmond Hill-t 1872-ben alapították faluként, és mára modern nagyvárossá nőtte ki magát."
    ]
)

# 33. oakville-cities-v2
add_entry(
    "oakville-cities-v2",
    "Oakville egy elegáns és jómódú város Ontario tartományban, az Ontario-tó partján, Torontótól nyugatra. A település híres festői kikötőiről, történelmi belvárosáról és Kanada-szerte elismert magas életminőségéről. Oakville gazdasága diverzifikált, jelentős az autóipar (Ford Canada központja), a pénzügyi szolgáltatások és az oktatás, itt található a neves Sheridan College. A város a golf szerelmeseinek paradicsoma is, hiszen itt fekszik a híres Glen Abbey Golf Club. A vízparti parkok és a 16 Mile Creek völgye kiváló lehetőséget nyújt a túrázásra és a vitorlázásra. Oakville megőrizte kisvárosi báját, miközben modern infrastrukturális hálózattal rendelkezik. A város gazdasági stabilitása és vízparti fejlesztései kiválóan kapcsolódnak a K5-K8 tanterv gazdaságföldrajzi és környezetvédelmi ismereteihez.",
    [
        "Oakville lakossága meghaladja a 213 000 főt, és rendszeresen Kanada legjobb lakóhelyei közé sorolják.",
        "A városban két festői jachtkikötő található: Bronte Harbour és Oakville Harbour.",
        "Itt található a Ford Motor Company of Canada központja és egy hatalmas összeszerelő üzeme.",
        "A Glen Abbey Golf Club már több mint 30 alkalommal adott otthont a Canadian Opennek.",
        "A Sheridan College nemzetközileg elismert animációs és vizuális művészeti képzéseiről.",
        "A városban több mint 1400 hektárnyi parkterület és 300 kilométernyi túraútvonal található.",
        "Oakville belvárosa több mint 400 üzletnek, étteremnek és szolgáltatásnak ad otthont történelmi környezetben.",
        "Minden évben itt rendezik meg az Oakville Jazz Fesztivált, amely a régió egyik legfontosabb zenei eseménye."
    ]
)

# 34. burlington-cities-v2
add_entry(
    "burlington-cities-v2",
    "Burlington egy gyönyörű város Ontario tartományban, az Ontario-tó nyugati végénél, Hamilton és Oakville között. A várost gyakran választják Kanada legélhetőbb településének a kiváló közszolgáltatások, a biztonság és a természeti környezet miatt. Burlington híres a Királyi Botanikus Kertekről (RBG), amely a világ egyik legnagyobb ilyen létesítménye. A vízparti Spencer Smith Park modern sétányaival és fesztiváljaival a város társadalmi központja. A település északi részén magasodik a Niagara-lépcső, amely az UNESCO világörökség része és számtalan túraútvonalat kínál. A gazdaság a technológiára, az élelmiszeriparra és a szolgáltatásokra épül. Burlington környezettudatos fejlődése és természetvédelmi jelentősége szervesen illeszkedik a K5-K8 tanterv ökológiai és természetföldrajzi moduljaihoz.",
    [
        "Burlington lakossága meghaladja a 183 000 főt, és rendkívül alacsony a munkanélküliségi ráta.",
        "A Royal Botanical Gardens több mint 1100 hektáron terül el, és 20 kilométernyi tanösvényt kínál.",
        "A Spencer Smith Park ad otthont Kanada legnagyobb ingyenes bordafesztiváljának (Ribfest).",
        "A város északi határán fekvő Mount Nemo természetvédelmi területről tiszta időben Toronto is látható.",
        "Burlingtonban több mint 115 park és 35 kilométernyi kerékpárútvonal található.",
        "Itt található a Joseph Brant Múzeum, amely a város alapítójának, a neves mohawk vezetőnek állít emléket.",
        "A város stratégiai helyen, a QEW autópálya és két nagyváros között fekszik.",
        "Burlington elkötelezett a klímavédelem mellett, célja, hogy 2050-re karbonsemlegessé váljon."
    ]
)

# 35. cambridge-cities-v2
add_entry(
    "cambridge-cities-v2",
    "Cambridge egy történelmi hangulatú város Ontario tartományban, amely 1973-ban jött létre Galt, Preston és Hespeler települések egyesítésével. A város a Grand River és a Speed-folyó találkozásánál fekszik, és híres gyönyörű 19. századi mészkő építészetéről. Cambridge a kanadai gyártóipar egyik bástyája, itt található többek között a Toyota hatalmas összeszerelő üzeme is. A település óvárosi részei gyakran szolgálnak filmforgatási helyszínül európai stílusú utcáik miatt. A folyóparti parkok és sétányok kiváló lehetőséget nyújtanak a kikapcsolódásra. Cambridge fontos része Ontario 'Technológiai Háromszögének', ahol az innováció és a hagyomány találkozik. A város ipari öröksége és folyóvölgyi elhelyezkedése kiválóan kapcsolódik a K5-K8 tanterv történelmi és gazdaságföldrajzi ismereteihez.",
    [
        "Cambridge lakossága meghaladja a 130 000 főt, és a Waterloo régió része.",
        "A városban található Toyota gyár Kanada egyik legnagyobb autógyártó üzeme.",
        "Cambridge belvárosa (Galt) híres a 19. századi skót kőfaragók munkáiról.",
        "A Grand River mentén több mint 50 kilométernyi kiépített túraútvonal vezet keresztül a városon.",
        "Itt található a neves Cambridge-i Pillangó-konzervatórium, ahol több ezer trópusi lepke repked szabadon.",
        "A városháza épülete Kanada egyik legjobb példája a modern és a történelmi építészet ötvözésének.",
        "Cambridge fontos textilipari központ volt a 19. században, aminek emlékeit ma is őrzik az ódon gyárépületek.",
        "A városban több mint 100 park és játszótér található a családok számára."
    ]
)

# 36. waterloo-cities-v2
add_entry(
    "waterloo-cities-v2",
    "Waterloo egy világszínvonalú technológiai és oktatási központ Ontario tartomány szívében. A város nemzetközileg elismert két egyeteméről, a Waterloo-i Egyetemről és a Wilfrid Laurier Egyetemről, amelyek az innováció és a start-up kultúra motorjai. Waterloo-t gyakran 'Kanada Szilícium-völgyeként' emlegetik, mivel itt született a BlackBerry és itt található számos globális technológiai óriás kanadai központja. A település fiatalos, dinamikus és rendkívül innovatív légkörrel rendelkezik. A városközpontban található Uptown Waterloo pezsgő kulturális életet, éttermeket és galériákat kínál. A település nagy hangsúlyt fektet a zöldterületekre, mint például a Waterloo Park és a RIM Park. Waterloo technológiai szerepe és oktatási jelentősége központi téma a K5-K8 tanterv tudományos és társadalomföldrajzi moduljaiban.",
    [
        "A Waterloo-i Egyetem híres a világ legnagyobb kooperatív oktatási programjáról.",
        "Waterloo lakossága meghaladja a 100 000 főt, agglomerációval együtt az 500 000-et.",
        "Itt található a Perimeter Elméleti Fizikai Intézet, amely a világ egyik vezető kutatóközpontja.",
        "A városban több mint 1000 technológiai vállalat működik, jelentős gazdasági erőt képviselve.",
        "Waterloo volt az első város Kanadában, ahol bevezették a kék kukás újrahasznosítási rendszert.",
        "A város közlekedését a modern ION gyorsvasút rendszer segíti, összekötve Kitchenerrel.",
        "A Waterloo Park a 'város ékköve', ahol tavak, állatkert és történelmi épületek találhatók.",
        "A település lakóinak jelentős része magasan képzett kutató és mérnök."
    ]
)

# 37. halton-hills-cities-v2
add_entry(
    "halton-hills-cities-v2",
    "Halton Hills egy festői és változatos község Ontario tartományban, Torontótól nyugatra. A település több kisebb közösséget, köztük Georgetownt és Actont egyesíti, megőrizve barátságos, vidéki jellegét. Halton Hills híres természeti szépségeiről, hiszen itt húzódik a Niagara-lépcső és a Bruce Trail túraútvonal jelentős szakasza. A község területén számos sziklafal, erdő és vízesés található, mint például a Silver Creek természetvédelmi területen. A gazdaság motorja a gyártóipar, a szolgáltatások és a turizmus, itt található a népszerű Toronto Premium Outlets bevásárlóközpont. Acton városa történelmileg a bőriparáról volt híres. Halton Hills sikeresen egyensúlyoz a természetvédelem és a modern fejlődés között. A község geológiai adottságai és fenntartható fejlesztései szorosan kapcsolódnak a K5-K8 tanterv természetföldrajzi és ökológiai ismereteihez.",
    [
        "Halton Hills lakossága meghaladja a 61 000 főt, és területe több mint 270 négyzetkilométer.",
        "A Bruce Trail Kanada leghosszabb túraútvonala, amely látványos szakaszokkal szeli át a községet.",
        "Itt található a Limehouse Conservation Area, ahol 19. századi mészégető kemencék romjai láthatók.",
        "Georgetown belvárosa megőrizte 19. századi báját, és népszerű filmforgatási helyszín.",
        "A Toronto Premium Outlets évente több millió vásárlót vonz a régióba.",
        "Halton Hills az ország egyik legzöldebb települése, számos környezetvédelmi díjjal.",
        "A községben több mint 30 park és kiterjedt sétaútvonal-hálózat található.",
        "Acton híres beceneve 'Leathertown' (Bőrváros), utalva a hajdani hatalmas cserzőüzemekre."
    ]
)

# 38. milton-cities-v2
add_entry(
    "milton-cities-v2",
    "Milton Kanada egyik leggyorsabban növekvő városa, amely Ontario tartományban, a Niagara-lépcső lábánál fekszik. A település az elmúlt két évtizedben egy álmos kisvárosból modern, fiatalos nagyvárossá fejlődött, vonzva a fiatal családokat és a szakembereket. Milton híres kiváló rekreációs lehetőségeiről, itt található a Mattamy Nemzeti Kerékpáros Központ, Kanada egyetlen olimpiai szabványú velodroma. A város határában fekvő Kelso és Rattlesnake Point természetvédelmi területek a sziklamászók és túrázók paradicsomai. A gazdaság dinamikus, jelentős a technológiai szektor és a logisztika. A település büszke történelmi belvárosára is, amely emlékeztet a 19. századi gyökerekre. Milton robbanásszerű növekedése és geológiai környezete kiválóan kapcsolódik a K5-K8 tanterv urbanizációs és természetföldrajzi moduljaihoz.",
    [
        "Milton lakossága az elmúlt 20 évben több mint négyszeresére, 110 000 fő fölé nőtt.",
        "A város lakosságának átlagéletkora az egyik legalacsonyabb Kanadában, mindössze 35 év körül van.",
        "A Mattamy National Cycling Centre a 2015-ös Pánamerikai Játékokra épült.",
        "A Niagara-lépcső védett övezete több mint 100 méter magas sziklafalakat kínál a túrázóknak.",
        "Miltonban található a Halton megyei Radiómúzeum, amely egyedülálló technikatörténeti gyűjtemény.",
        "A város minden évben megrendezi a Milton Fall Fair-t, amely 1853 óta hagyomány.",
        "A település stratégiai pontja a 401-es autópályának, megkönnyítve a közlekedést.",
        "Itt található a Mohawk Racetrack, Kanada egyik legfontosabb ügetőpályája."
    ]
)

# 39. newmarket-cities-v2
add_entry(
    "newmarket-cities-v2",
    "Newmarket egy barátságos és modern város Ontario tartományban, a York régió központjában. A település híres a történelmi Main Street-jéről, amely megőrizte 19. századi báját, és ma pezsgő üzletekkel és éttermekkel várja a lakókat. Newmarket az egészségügy és a közigazgatás fontos regionális központja, itt található a Southlake Regionális Egészségügyi Központ. A város büszke gyönyörű parkjaira, mint például a Fairy Lake park, amely a közösségi élet szíve. A gazdaság stabil, jelentős a kereskedelem, itt található az Upper Canada Mall, a régió egyik legnagyobb bevásárlóközpontja. Newmarket rendszeresen szerepel Kanada legélhetőbb városainak listáján a biztonság és a kiváló szolgáltatások miatt. A város történelmi megújulása és intézményi szerepköre szorosan kapcsolódik a K5-K8 tanterv társadalomföldrajzi és történelmi ismereteihez.",
    [
        "Newmarket lakossága meghaladja a 85 000 főt, és Ontario egyik legnépsűrűbb városa.",
        "A Fairy Lake egy mesterséges tó a város szívében, amely egy 19. századi gát révén jött létre.",
        "A Southlake Regionális Egészségügyi Központ több mint 3500 embert foglalkoztat.",
        "A városban több mint 800 holdnyi parkterület és 44 kilométernyi túraútvonal található.",
        "Newmarket volt a kiindulópontja az 1837-es felső-kanadai lázadásnak.",
        "Az Upper Canada Mall több mint 250 üzletével a régió kereskedelmi központja.",
        "A város területén halad át a történelmi 'Yonge Street', amely egykor a világ leghosszabb utcája volt.",
        "Newmarket elnyerte a 'Legjobb hely a családoknak' díjat több alkalommal is."
    ]
)

# 40. caledon-cities-v2
add_entry(
    "caledon-cities-v2",
    "Caledon egy hatalmas és festői község Ontario tartományban, a Peel régió északi részén. A települést gyakran Kanada 'zöld oázisának' nevezik, mivel területének nagy része védett erdőség, mezőgazdasági föld és dombvidék. Caledon híres a Cheltenham Badlands különleges vörös sziklaformációiról, amelyek egyedülálló geológiai látványosságot nyújtanak. A község a lovassportok fellegvára, számos nemzetközi versenynek és ménesnek ad otthont. Caledon sikeresen megőrizte falusi jellegét, apró, hangulatos településekkel (mint például Belfountain vagy Terra Cotta), miközben Toronto közelsége miatt népszerű lakóhely. A gazdaság a turizmusra, a kézművesiparra és a fenntartható agráriumra épül. A község különleges geológiája és természetvédelmi törekvései kiválóan kapcsolódnak a K5-K8 tanterv természetföldrajzi és környezeti ismereteihez.",
    [
        "Caledon területe több mint 680 négyzetkilométer, amivel Ontario egyik legnagyobb községe.",
        "A Cheltenham Badlands vörös agyagrétegei több mint 400 millió éves tengeri üledékből állnak.",
        "Caledon lakossága meghaladja a 75 000 főt, de a népsűrűség nagyon alacsony.",
        "A községben található a Caledon Equestrian Park, a 2015-ös Pánamerikai Játékok helyszíne.",
        "Itt halad keresztül a Bruce Trail és a Trans Canada Trail jelentős szakasza.",
        "Caledon elnyerte Kanada 'Legzöldebb városa' címét a környezettudatos lakói miatt.",
        "A község területén több mint 260 kilométernyi nyilvános túraútvonal található.",
        "Itt található a Belfountain Conservation Area, amely híres vízeséséről és függőhídjáról."
    ]
)

# 41. maple-ridge-cities-v2
add_entry(
    "maple-ridge-cities-v2",
    "Maple Ridge egy lenyűgöző fekvésű város Brit Kolumbiában, a Fraser-folyó és a Golden Ears-hegység hófödte csúcsai között. A település híres vadregényes tájairól, sűrű erdőiről és a közeli Golden Ears Tartományi Parkról, amely a tartomány egyik legnépszerűbb kirándulóhelye. Maple Ridge gazdasága történelmileg az erdőgazdálkodásra és a mezőgazdaságra épült, de ma már a technológia és a filmipar is meghatározó. A város lovas hagyományai kiemelkedőek, hiszen itt található az ország egyik legnagyobb egy főre jutó lósűrűsége. A település barátságos lakókörnyezetet kínál, ahol a természet és a városi szolgáltatások harmóniában élnek. A Fraser-folyó menti sétányok és a számos tó kiváló szabadidős lehetőségeket nyújtanak. A város domborzati adottságai és ökoszisztémája szorosan kapcsolódik a K5-K8 tanterv természetföldrajzi és környezetismereti moduljaihoz.",
    [
        "A Golden Ears Tartományi Park 55 000 hektáron terül el, és népszerű kempingező hely.",
        "Maple Ridge lakossága meghaladja a 90 000 főt, és dinamikusan növekszik kelet felé.",
        "A várost 1874-ben alapították, ezzel Brit Kolumbia egyik legrégebbi önkormányzata.",
        "Maple Ridge-ben több mint 50 lovas farm és kiterjedt lovaglóútvonal-hálózat található.",
        "A város fontos filmforgatási helyszín, számos hollywoodi produkció készült a környékén.",
        "Az Alouette-tó kristálytiszta vize népszerű a fürdőzők és a vitorlázók körében.",
        "A város területén több mint 100 kilométernyi kijelölt túraútvonal található.",
        "Itt található az ACT Arts Centre, a régió egyik legfontosabb kulturális központja."
    ]
)

# 42. north-vancouver-cities-v2
add_entry(
    "north-vancouver-cities-v2",
    "North Vancouver városa egy sűrűn lakott, modern városi központ a Burrard Inlet északi partján, Brit Kolumbiában. A település híres lenyűgöző panorámájáról, amely Vancouver felhőkarcolóira és az óceánra nyílik. North Vancouver kapuja a hegyeknek, ahonnan percek alatt elérhető a Grouse Mountain vagy a Mount Seymour síközpont. A város központja a Lonsdale Quay, ahol forgalmas piac és a SeaBus állomása található, amely gyors kapcsolatot biztosít Vancouver belvárosával. A település gazdasága a technológiára, a tengeri szállítmányozásra és a turizmusra épül. A városi élet és a vadon közelsége egyedülálló életstílust kölcsönöz a lakóknak. North Vancouver infrastrukturális megoldásai és hegyvidéki elhelyezkedése kiválóan kapcsolódik a K5-K8 tanterv településföldrajzi és domborzati ismereteihez.",
    [
        "North Vancouver lakossága megközelítőleg 58 000 fő, területe pedig viszonylag kicsi (11 km2).",
        "A SeaBus mindössze 12 perc alatt szeli át az öblöt, összekötve a várost Vancouverrel.",
        "A Lonsdale Quay piac több mint 80 helyi árusnak és művésznek ad otthont.",
        "A városban található a Shipyards negyed, amely egy történelmi hajógyárból alakult át modern közösségi térré.",
        "North Vancouver ad otthont Kanada egyik legnagyobb szabadtéri jégpályájának télen.",
        "A városon keresztül halad a neves Spirit Trail kerékpáros és gyalogos útvonal.",
        "Itt található a neves Capilano Egyetem egyik legnagyobb központja a közelben.",
        "A város klímája csapadékos, ami dús esőerdő-szerű növényzetet biztosít a hegyoldalakon."
    ]
)

# 43. delta-cities-v2
add_entry(
    "delta-cities-v2",
    "Delta egy különleges fekvésű város Brit Kolumbiában, a Fraser-folyó torkolatánál, három különböző közösséget (Ladner, North Delta, Tsawwassen) egyesítve. A város neve a folyó deltájára utal, amely Kanada egyik legtermékenyebb mezőgazdasági területe és fontos ökológiai folyosó a vándormadarak számára. Delta stratégiai jelentőségét a Tsawwassen kompkikötő adja, amely a legfontosabb összeköttetés Victoria és a szigetek felé. A település sík domborzata ideális a földműveléshez és a kerékpározáshoz. A természetkedvelőket a Boundary Bay Regional Park homokos strandjai és madárrezervátumai vonzzák. Delta gazdasága a mezőgazdaságra, a tengeri szállítmányozásra és a kereskedelemre épül. A város folyóvízi üledékes képződése és közlekedési szerepe szorosan kapcsolódik a K5-K8 tanterv természetföldrajzi és logisztikai ismereteihez.",
    [
        "Delta lakossága meghaladja a 108 000 főt, és területe 180 négyzetkilométer.",
        "A Tsawwassen kompkikötő a világ egyik legnagyobb és legforgalmasabb ilyen létesítménye.",
        "A város területén évente több mint 5 millió vándormadár vonul keresztül a Csendes-óceáni útvonalon.",
        "Delta Kanada egyik legnaposabb és legszárazabb területe a Lower Mainland régión belül.",
        "Itt található a Roberts Bank Superport, amely Észak-Amerika egyik legnagyobb konténerterminálja.",
        "Ladner történelmi halászfaluja megőrizte 19. századi báját és fontos mezőgazdasági központ.",
        "A Burns Bog egy 3000 hektáros tőzegláp, amely a világ egyik legnagyobb érintetlen városi vizes élőhelye.",
        "Deltában több mint 60 park és kiterjedt gát menti túraútvonal található."
    ]
)

# 44. victoriaville-cities-v2
add_entry(
    "victoriaville-cities-v2",
    "Victoriaville Quebec tartomány szívében, a Nicolet-folyó partján fekszik, és Kanada-szerte a 'fenntartható fejlődés bölcsőjeként' ismert. A város úttörő szerepet játszott az újrahasznosítás és a környezettudatos városüzemeltetés bevezetésében. Victoriaville gazdasága történelmileg a bútoriparra és a fafeldolgozásra épült, mára azonban diverzifikált ipari és kereskedelmi központtá vált. A település híres a kiváló sajtgyártásáról is, itt rendezik meg minden évben a neves Sajtfesztivált. A várost körülölelő természet, különösen a Mont Arthabaska, kiváló lehetőséget nyújt a túrázásra, a síelésre és a madármegfigyelésre. Victoriaville pezsgő kulturális élettel és számos képzőművészeti galériával rendelkezik. A város környezetvédelmi innovációi és ipari múltja kiválóan kapcsolódik a K5-K8 tanterv fenntarthatósági és gazdaságföldrajzi moduljaihoz.",
    [
        "Victoriaville lakossága meghaladja a 46 000 főt, és a Bois-Francs régió központja.",
        "A várost 1990-ben Quebec 'újrahasznosítási fővárosává' választották.",
        "A Mont Arthabaska csúcsáról 360 fokos panoráma nyílik a környező tájra.",
        "Itt található a neves Laurier Múzeum, amely Sir Wilfrid Laurier egykori miniszterelnök otthona volt.",
        "A városban több mint 60 kilométernyi kerékpárút található a Route Verte hálózat részeként.",
        "Victoriaville fontos oktatási központ, itt működik a Cégep de Victoriaville és több kutatóintézet.",
        "A település ad otthont a Nemzetközi Kortárs Zenei Fesztiválnak (FIMAV).",
        "A Nicolet-folyó menti parkok népszerűek a horgászok és a pihenni vágyók körében."
    ]
)

# 45. salaberry-de-valleyfield-cities-v2
add_entry(
    "salaberry-de-valleyfield-cities-v2",
    "Salaberry-de-Valleyfield egy egyedülálló szigetváros Quebec tartományban, a Szent Lőrinc-folyó és a Saint-François-tó partján. A települést gyakran 'Quebec Velencéjének' nevezik a várost átszelő csatornák és vízi utak miatt. A város stratégiai helyen fekszik a Szent Lőrinc-vízi út mentén, és fontos ipari kikötővel rendelkezik. Valleyfield világszerte híres a minden évben megrendezett Nemzetközi Hidroplán Regattáról, amely Észak-Amerika egyik legizgalmasabb gyorsasági motorcsónak versenye. A történelmi belváros és a felújított régi gyárépületek a város gazdag ipari múltjáról tanúskodnak, amikor még a textilipar dominált. A vízparti parkok és a kiterjedt kerékpárutak népszerűek a lakók és a turisták körében. A város vízi úthálózata és infrastrukturális jelentősége szorosan kapcsolódik a K5-K8 tanterv technológiai és fizikai földrajzi ismereteihez.",
    [
        "A város lakossága meghaladja a 42 000 főt, és egy szigeten (Grande-Île) helyezkedik el.",
        "A Valleyfield Regatta minden júliusban több mint 100 000 látogatót vonz.",
        "A Beauharnois-csatorna zsilipjei a város közelében lehetővé teszik a tengerjáró hajók áthaladását.",
        "A városban több mint 140 kilométernyi aszfaltozott kerékpárút található a vízpart mentén.",
        "Itt működött egykor a Montreal Cottons, a Brit Birodalom egyik legnagyobb textilgyára.",
        "A Saint-François-tó kristálytiszta vize ideális a búvárkodáshoz és az átláthatósága miatt.",
        "A város központjában található Delpha-Sauvé Park egy hatalmas szabadtéri amfiteátrumnak ad otthont.",
        "Valleyfield fontos logisztikai központ a vasúti és vízi útvonalak kereszteződésében."
    ]
)

with open('cities_batch_2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
