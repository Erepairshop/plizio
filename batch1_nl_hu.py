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

data_batch1 = {
  "NL": {
    "desc": "Hollandia (hivatalosan: Țările de Jos, bár leggyakrabban Hollandiaként említik) egy sűrűn lakott ország Északnyugat-Európában, amely sík tájairól és a tenger szintje alatti területeiről ismert. Az ország területének negyede a tenger szintje alatt fekszik, és egy rendkívül komplex gátrendszer és szivattyúállomások hálózata védi a víztől. Történelmileg a 17. században globális tengeri és kereskedelmi nagyhatalom volt, ezt az időszakot holland aranykornak nevezik. Ma a világ egyik leginnovatívabb és legtoleránsabb társadalma. Földrajz K6: Ha az ország negyede a tengerszint alatt fekszik, hogyan tudják megakadályozni a területek elárasztását?",
    "facts": [
      "Az ország területének körülbelül 26%-a a tengerszint alatt fekszik.",
      "Az európai rész legmagasabb pontja, a Vaalserberg mindössze 322 méter magas.",
      "Hollandiában több a kerékpár, mint a lakos (kb. 23 millió kerékpár jut 17,5 millió emberre).",
      "Az Egyesült Államok után a világ második legnagyobb mezőgazdasági exportőre."
    ]
  },
  "NL-DR": {
    "desc": "Drenthe Hollandia északkeleti tartománya, amely nyugodt, vidéki hangulatáról és hatalmas fenyérjeiről ismert. A régiónak az ország többi részéhez képest nagyon alacsony a népsűrűsége, és a kerékpárosok, valamint a természetbarátok igazi paradicsoma. Történelmi szempontból kiemelkedőek a történelem előtti megalitikus sírok (Hunebedden), amelyek Hollandia legrégebbi emlékművei. A tartomány fővárosa Assen, amely a híres TT Circuit motorversenypályájáról is ismert. Történelem K5: A megalitikus sírokat hatalmas kövekből építették, amelyeket a jégkorszak alatt toltak Drenthe területére. Milyen természeti erő szállította ezeket a köveket?",
    "facts": [
      "Drenthe tartományban található Hollandia 54 megalitikus sírjából 52.",
      "Ez a tartomány rendelkezik a legalacsonyabb népsűrűséggel Hollandiában.",
      "Assen városa 1925 óta ad otthont a híres TT motorversenyeknek.",
      "A Nemzeti Börtönmúzeum a történelmi Veenhuizen faluban található."
    ]
  },
  "NL-FL": {
    "desc": "Flevoland Hollandia legfiatalabb tartománya, amely a mérnöki tudomány mesterműve, hiszen szinte teljes egészében az egykori Zuiderzee tengerből hódították el. A tartományt hivatalosan 1986-ban hozták létre, és három nagy polderből áll. A tájat kiterjedt, sík mezőgazdasági területek, modern, mesterségesen tervezett városok (mint Almere és Lelystad), valamint hatalmas természetvédelmi területek jellemzik. A terület egyedülálló bepillantást nyújt a modern várostervezésbe és a vízgazdálkodásba. Környezetismeret K6: Flevolandot a tengertől hódították el. Hogy hívják azokat a földterületeket, amelyeket gátakkal védenek és mesterségesen kiszárítanak?",
    "facts": [
      "Flevoland a világ legnagyobb mesterséges szigete.",
      "A tartomány fővárosát, Lelystadot Cornelis Lelyről, a Zuiderzee-művek tervezőjéről nevezték el.",
      "Az Oostvaardersplassen természetvédelmi terület vadlovairól és gímszarvasairól ismert.",
      "A tartomány átlagosan 5 méterrel fekszik a tengerszint alatt."
    ]
  },
  "NL-FR": {
    "desc": "Frízföld (Friesland) Hollandia északi tartománya, amely erős kulturális identitásáról és saját hivatalos nyelvéről, a frízről ismert. A régiót a kiterjedt tavak hálózata, a csatornák és a tengerparti szigetek jellemzik, így a vízisportok egyik legnépszerűbb központja. A tartomány gazdasága történelmileg a mezőgazdaságra és a hajózásra épült, ma pedig a turizmus is jelentős. Télen, ha a csatornák befagynak, a híres tizenegy városos korcsolyaverseny (Elfstedentocht) lázba hozza az egész országot. Földrajz K5: Melyik az a két hivatalos nyelv, amelyet Frízföld tartományban beszélnek?",
    "facts": [
      "A fríz egy hivatalosan elismert nyelv, amelyet a holland mellett beszélnek itt.",
      "A tartomány büszkélkedhet Hollandia legnagyobb összefüggő tavainak hálózatával.",
      "Az Elfstedentocht (tizenegy városos túra) egy legendás, közel 200 km hosszú korcsolyaverseny.",
      "Itt található a Wadden-tenger több szigete, amely UNESCO Világörökségi helyszín."
    ]
  },
  "NL-GE": {
    "desc": "Gelderland Hollandia legnagyobb területű tartománya, amely változatos tájairól ismert, az erdős Veluwe régiótól kezdve az ország legjelentősebb folyóinak völgyéig. A tartomány gazdag történelemmel büszkélkedhet, amelyet számos kastély, erődítmény és középkori város, például Arnhem és Nijmegen őriz. Arnhem a II. világháború során a Market Garden hadművelet egyik kulcsfontosságú helyszíne volt. A Veluwe Nemzeti Park lenyűgöző természeti kincsekkel és művészeti gyűjteményekkel várja a látogatókat. Történelem K8: Miért volt stratégiai jelentősége Arnhem városának a második világháborúban?",
    "facts": [
      "A Hoge Veluwe Nemzeti Park Hollandia legnagyobb összefüggő természetvédelmi területe.",
      "Nijmegen, Gelderland egyik városa, Hollandia egyik legrégebbi települése, a római korban alapították.",
      "A tartományban található a Kröller-Müller Múzeum, amely a világ második legnagyobb Van Gogh-gyűjteményét őrzi.",
      "Gelderland a holland gyümölcstermesztés központja, különösen a Betuwe régió."
    ]
  },
  "NL-GR": {
    "desc": "Groningen a legészakibb holland tartomány, amelyet lenyűgöző kontrasztok jellemeznek: az egyetemi város élénk nyüzsgése és a vidék végtelen, csendes polderei. A tartomány fővárosa, Groningen városa évszázadok óta a régió kulturális és gazdasági központja, ahol a fiatalos egyetemi élet történelmi építészettel párosul. A vidék gazdag agrárterület, ahol monumentális régi tanyák (úgynevezett herenboerderijen) találhatók. A tartomány alatt található Európa egyik legnagyobb földgázmezője is. Földrajz K8: A földgáz kitermelése milyen geológiai problémákat okozott Groningen tartományban az elmúlt évtizedekben?",
    "facts": [
      "A groningeni egyetemet 1614-ben alapították, így Hollandia egyik legrégebbi egyeteme.",
      "A tartomány alatt fekvő slochtereni földgázmező Európa legnagyobbja.",
      "A Bourtange erőd egy csillag alakú védelmi építmény a spanyol-holland háború idejéből.",
      "A Martini-torony Groningen városának szimbóluma, amely több mint 500 éves."
    ]
  },
  "NL-LI": {
    "desc": "Limburg Hollandia legdélebbi tartománya, amely eltér a hagyományos holland síkvidéki tájtól: dombos vidékeivel és kanyargós folyóival inkább Közép-Európára emlékeztet. A régió történelmi kapcsolatban állt a szomszédos német és belga területekkel, ami egyedi kulturális és gasztronómiai hagyományokat eredményezett. Fővárosa, Maastricht az ország egyik legrégebbi városa, és az 1992-es maastrichti szerződés révén az Európai Unió születési helyeként is ismert. Gazdaságilag korábban a szénbányászat központja volt. Történelem K8: Milyen jelentős nemzetközi egyezményt írtak alá Maastrichtban, amely megalapozta az Európai Uniót?",
    "facts": [
      "A Vaalserberg hegy Limburgban található, és ez Hollandia európai részének legmagasabb pontja.",
      "A hármashatárpont (Drielandenpunt) itt található, ahol Hollandia, Belgium és Németország találkozik.",
      "Maastrichtot a rómaiak alapították egy fontos Maas-folyón lévő átkelőhelynél.",
      "A tartomány híres különleges gyümölcsös pitéjéről, a vlaai-ról."
    ]
  },
  "NL-NB": {
    "desc": "Észak-Brabant (Noord-Brabant) egy gazdaságilag és kulturálisan is meghatározó tartomány Dél-Hollandiában. Ismert barátságos, „burgundi” életmódjáról, amely a jó ételeket és a társasági életet ünnepli. Fővárosa 's-Hertogenbosch (Den Bosch), míg Eindhoven a technológia és az innováció globális központja, részben a Philips vállalat alapításának köszönhetően. A tartomány természeti szépségeit a Loonse en Drunense Duinen homokdűnéi és a Biesbosch nemzeti parkjai kínálják. Földrajz K7: Miért nevezik Eindhovent a 'Fény Városának', és melyik nagyvállalathoz köthető ez?",
    "facts": [
      "Eindhoven Európa egyik legjelentősebb technológiai és design központja.",
      "A híres holland festő, Vincent van Gogh Észak-Brabantban született (Zundertben).",
      "Az Efteling, Európa egyik legrégebbi és legnépszerűbb vidámparkja is ebben a tartományban van.",
      "Itt ünneplik a holland karnevál leglátványosabb eseményeit."
    ]
  },
  "NL-NH": {
    "desc": "Észak-Holland (Noord-Holland) egy félsziget alakú tartomány, amelyet nyugatról az Északi-tenger, keletről pedig az IJsselmeer határol. Ebben a tartományban található az ország fővárosa, Amszterdam, valamint Schiphol nemzetközi repülőtere, amely Hollandia legfontosabb gazdasági motorja. A régió északi része gazdag polderekben, szélmalmokban és hagyományos halászfalvakban, mint például Volendam és Marken. Itt található a sajtpiacáról híres Alkmaar is. Gazdaság K7: Milyen szerepet játszott Amszterdam a 17. századi globális kereskedelemben?",
    "facts": [
      "A tartomány területének nagy része mesterségesen kiszárított föld (polder).",
      "Az amszterdami Schiphol repülőtér egy kiszáradt tó medrében épült, 4 méterrel a tengerszint alatt.",
      "A Zaanse Schans szabadtéri múzeum a 18-19. századi ipari szélmalmokat mutatja be.",
      "Texel szigete Észak-Hollandiához tartozik, és népszerű madármegfigyelő hely."
    ]
  },
  "NL-OV": {
    "desc": "Overijssel egy keleti tartomány Hollandiában, amelyet az IJssel-folyó, kiterjedt erdők és tőzeglápok jellemeznek. A régió történelmi gazdagságát a Hanza-szövetséghez tartozó ősi városok, mint Zwolle, Kampen és Deventer adják, amelyek a középkorban virágzó kereskedelmi központok voltak. Északnyugati részén található a Weerribben-Wieden Nemzeti Park, egyedülálló vizes élőhelyeivel. Emellett Giethoorn, a 'holland Velence' is ebben a tartományban vonzza a látogatókat. Történelem K6: Mi volt a Hanza-szövetség, és miért voltak fontosak az ehhez tartozó városok?",
    "facts": [
      "Giethoorn falujában az óvárosban egyáltalán nincsenek utak, csak csatornák.",
      "Deventer az ország egyik legrégebbi városa, híres a középkori könyvtáráról.",
      "A tartomány egykor a holland textilipar központja volt (különösen Twente régió).",
      "Az IJssel folyó menti városok a 14-15. században hatalmas vagyonra tettek szert a Hanza kereskedelemből."
    ]
  },
  "NL-UT": {
    "desc": "Utrecht Hollandia legkisebb területű, de legsűrűbben lakott tartománya, amely az ország földrajzi közepén helyezkedik el. Fővárosa, a szintén Utrecht nevű város, gazdag középkori múltjával, híres egyetemével és az egyedi, kétszintes csatornáival hívja fel magára a figyelmet. A tartomány keleti részén található a zöldellő Utrechtse Heuvelrug, egy jégkorszaki eredetű dombvidék, amely lenyűgöző erdőkkel és kastélyokkal van tele. Földrajz K6: Hogyan befolyásolja egy ország központi elhelyezkedése az infrastrukturális fejlődését, mint ahogy Utrecht esetében látható?",
    "facts": [
      "Utrecht városának csatornái egyedülállóak a vízszint közelében lévő raktárhelyiségek (werfkelders) miatt.",
      "Az Utrechti Egyetem, amelyet 1636-ban alapítottak, az egyik legrangosabb Európában.",
      "Itt található a De Haar kastély, Hollandia legnagyobb és legfényűzőbb kastélya.",
      "A tartomány Hollandia legfontosabb vasúti csomópontja."
    ]
  },
  "NL-ZE": {
    "desc": "Zeeland (magyarul Tengerföld) egy délnyugati tartomány, amely félszigetek és szigetek láncolatából áll a Schelde, a Maas és a Rajna folyók torkolatánál. Zeeland története az állandó küzdelemről szól a tenger ellen; az 1953-as katasztrofális árvíz után itt épült meg a világ egyik legnagyobb mérnöki csodája, a Delta-művek, amely megvédi a szárazföldet az Északi-tenger viharaitól. A tartomány kiváló mezőgazdasággal és jelentős halászattal (különösen osztriga és kagyló) rendelkezik. Természetismeret K7: Hogyan működnek a Delta-művek, és miért nevezik a világ nyolcadik csodájának?",
    "facts": [
      "A Delta-művek gátak, zsilipek és vihargátak gigantikus rendszere Zeelandban.",
      "Middelburg, a főváros, a 17. században az egyik legfontosabb holland kereskedelmi város volt.",
      "A tartomány neve inspirálta az Új-Zélandot felfedező holland tengerészeket az ország elnevezésére.",
      "Zeeland híres a tenger gyümölcseiről, különösen a minőségi feketekagylóról és az osztrigáról."
    ]
  },
  "NL-ZH": {
    "desc": "Dél-Holland (Zuid-Holland) Hollandia legnépesebb és gazdaságilag legfontosabb tartománya. Itt található Hága, a holland kormány, a parlament és a királyi család székhelye, valamint a Nemzetközi Bíróság. Rotterdam, a másik nagyváros, Európa legnagyobb tengeri kikötőjével büszkélkedhet, amely a globális áruforgalom kapuja. A tartomány ad otthont a híres Kinderdijk szélmalmainak és a Keukenhof tulipánmezőinek, melyek az ország ikonikus szimbólumai. Gazdaság K8: Milyen gazdasági előnyt jelent Európa számára a rotterdami kikötő hatalmas kapacitása?",
    "facts": [
      "Rotterdam kikötője volt a világ legforgalmasabb kikötője évtizedeken keresztül, 2004-ig.",
      "Hága az egyetlen olyan nemzetközi jogi központ, amely nem főváros.",
      "Kinderdijk 19 történelmi szélmalma az UNESCO Világörökség része.",
      "A Gouda városából származó sajt a világ egyik leghíresebb és legnagyobb mennyiségben exportált sajtja."
    ]
  },
  "NL-CT-AMS": {
    "desc": "Amszterdam Hollandia fővárosa és egyben legnépesebb városa, amely lenyűgöző csatornahálózatáról, történelmi építészetéről és pezsgő kulturális életéről híres. A 17. századi holland aranykorban a világ legfontosabb kereskedelmi és pénzügyi központja volt, itt jött létre a világ első tőzsdéje is. A város történelmi központja a Grachtengordel (csatornagyűrű), amely az UNESCO Világörökség része. Ma Amszterdam a globális turizmus egyik központja, híres múzeumokkal, mint a Rijksmuseum és az Anne Frank Ház. Történelem K7: Milyen hatással volt a világ első tőzsdéjének megalapítása Amszterdam globális szerepére a 17. században?",
    "facts": [
      "A városban több mint 100 kilométernyi csatorna, mintegy 90 sziget és 1500 híd található.",
      "Amszterdam házait több millió facölöpre építették, hogy ne süllyedjenek el a mocsaras talajban.",
      "A világ legrégebbi megszakítás nélkül működő tőzsdéjét (Euronext Amsterdam) 1602-ben alapították.",
      "A városnak több kerékpárja van, mint lakosa, amit a kiváló kerékpáros infrastruktúra támogat."
    ]
  },
  "NL-CT-ROT": {
    "desc": "Rotterdam a holland modernitás és építészeti innováció központja. Miután a második világháború során a város központját egy bombázás szinte teljesen elpusztította, Rotterdamot egy merész, kortárs tervek alapján építették újjá, szakítva a hagyományos holland városképpel. A város ad otthont Európa legnagyobb tengeri kikötőjének, amely évtizedeken át a világ legforgalmasabbja volt. Ikonikus épületei közé tartozik az Erasmus-híd, a Kockaházak és a hatalmas Markthal piac. Földrajz K8: Miért vált Rotterdam kikötője Európa legfontosabb kereskedelmi csomópontjává?",
    "facts": [
      "Rotterdam kikötője közvetlen hozzáférést biztosít az Északi-tengerhez gátak és zsilipek nélkül.",
      "Az Erasmus-hidat (Erasmusbrug) aszimmetrikus formája miatt gyakran 'A Hattyú'-nak becézik.",
      "A Kockaházak (Kubuswoningen) 45 fokban megdöntött, kocka alakú lakások innovatív rendszere.",
      "A város a Maas folyó deltájában fekszik, és vízügyi védelme példaértékű a világ számára."
    ]
  },
  "NL-CT-HAA": {
    "desc": "Hága (Den Haag) a nemzetközi jog és az igazságszolgáltatás globális központja, emellett Hollandia politikai szíve. Bár a hivatalos főváros Amszterdam, a holland kormány, a parlament, a Legfelsőbb Bíróság és az uralkodó királyi család is Hágában székel. A város elegáns, zöldövezeti negyedekkel, széles sugárutakkal és nagvonalú palotákkal rendelkezik, továbbá népszerű tengerparti üdülőhellyel, Scheveningen-nel. Itt működik a Nemzetközi Bíróság és a Nemzetközi Büntetőbíróság. Társadalomismeret K8: Milyen globális konfliktusokat oldanak meg a hágai Nemzetközi Bíróságon?",
    "facts": [
      "A Béke Palotája (Vredespaleis) ad otthont az ENSZ Nemzetközi Bíróságának.",
      "A Binnenhof épületegyüttese az egyik legrégebbi, ma is használt parlamentépület a világon.",
      "Hága az egyetlen nagy holland város, amely közvetlenül az Északi-tenger partján fekszik.",
      "A Mauritshuis múzeumban található Vermeer híres festménye, a Leány gyöngyfülbevalóval."
    ]
  },
  "NL-CT-UTR": {
    "desc": "Utrecht Hollandia negyedik legnagyobb városa, amely gazdag egyházi történelemmel és középkori bájjal rendelkezik. Évszázadokon át a holland kereszténység központja és az ország legfontosabb városa volt, mielőtt Amszterdam átvette volna ezt a szerepet. Különlegessége a történelmi csatornarendszer, amelynek alsó szintjén, közvetlenül a víz mellett raktárhelyiségek, a 'werf'-ek találhatók; ma ezek hangulatos kávézóknak adnak otthont. A városképet az ikonikus Dom-torony, Hollandia legmagasabb templomtornya uralja. Történelem K6: Miért volt Utrecht az ország legfontosabb vallási és kulturális központja a középkorban?",
    "facts": [
      "A 112 méter magas Dom-torony (Domtoren) egy vihar következtében szakadt el a főhajótól 1674-ben.",
      "Utrecht az ország legfontosabb vasúti csomópontja, a Central Station a legforgalmasabb állomás.",
      "A városban alapították 1579-ben az Utrechti Uniót, amely a független Hollandia elődjének tekinthető.",
      "Egyeteme az egyik legnagyobb és legelismertebb az országban."
    ]
  },
  "NL-CT-EIN": {
    "desc": "Eindhoven a holland innováció, a technológia és a formatervezés központja. A város robbanásszerű fejlődését a Philips vállalat 1891-es megalapítása indította el, amely izzólámpák, majd elektronikai cikkek gyártásával vált világhírűvé. Emiatt Eindhovent a 'Fény Városának' is nevezik. Ma a High Tech Campus és a műszaki egyetem (TU/e) révén Európa egyik legokosabb régiójaként tartják számon, amely hatalmas számú szabadalmat jegyez évről évre. Gazdaság K8: Hogyan alakította egyetlen vállalat (a Philips) egy egész város gazdaságát és társadalmát?",
    "facts": [
      "A város évente megrendezi a GLOW Eindhoven fesztivált, amely a világító művészetet ünnepli.",
      "Az ASML, a világ vezető csipgyártó berendezés gyártója az eindhoveni régióban (Veldhoven) működik.",
      "Az Evoluon egy repülő csészealj alakú épület, amelyet a Philips építtetett a technológia népszerűsítésére.",
      "Itt található a Van Abbemuseum, amely a kortárs és modern művészet egyik kiemelkedő múzeuma."
    ]
  },
  "NL-CT-GRO": {
    "desc": "Groningen városa az északi tartományok legfontosabb gazdasági és kulturális központja, egy igazi, nyüzsgő egyetemváros. Lakosságának jelentős részét diákok teszik ki, ami fiatalos, energikus atmoszférát és élénk éjszakai életet kölcsönöz a településnek. A város büszkélkedhet Hollandia legkiterjedtebb kerékpáros infrastruktúrájával, a központból szinte teljesen kitiltották az autókat. Jelképe az ötszáz éves Martini-torony és az innovatív kortárs dizájnnal rendelkező Groninger Múzeum. Földrajz K7: Miért előnyös egy város számára, ha közlekedését nagyrészt kerékpárokra és tömegközlekedésre alapozza?",
    "facts": [
      "A város lakosságának több mint negyedét egyetemi hallgatók teszik ki.",
      "Groningent 1977-ben teljesen átalakították a kerékpárosok és a gyalogosok javára egy úttörő közlekedési tervvel.",
      "A Groninger Múzeum egy mesterséges szigeten áll, és posztmodern építészetéről híres.",
      "A város történelme a 11. századig nyúlik vissza, és a Hanza-szövetség tagja volt."
    ]
  },
  "NL-CT-TIL": {
    "desc": "Tilburg egykor a holland textilipar fellegvára volt, amelyet gyakran 'Hollandia gyapjúfővárosaként' emlegettek. Bár az iparág a 20. század végén hanyatlásnak indult, a város sikeresen újra feltalálta magát, és az egykori gyárépületeket kreatív központokká, modern múzeumokká és lakóövezetekké alakították át. Tilburg ma egy modern, dinamikus város, amely egyetemi kampuszáról, élénk zenei és kulturális életéről, valamint a LocHal nevű, díjnyertes, régi mozdonycsarnokból kialakított könyvtáráról ismert. Gazdaság K7: Hogyan tud egy korábbi iparváros sikeresen átállni a modern, tudásalapú szolgáltatói gazdaságra?",
    "facts": [
      "A De Pont Múzeum egy egykori gyapjúfonodában található, és kortárs művészetet állít ki.",
      "A LocHal 2019-ben elnyerte a Világ Év Épülete díjat a belsőépítészeti kategóriában.",
      "Tilburg rendezi meg minden júliusban a Benelux államok legnagyobb, tíznapos vidámparki fesztiválját (Tilburgse Kermis).",
      "Az 1927-ben alapított Tilburgi Egyetem (TiU) közgazdasági és jogi képzéseiről híres."
    ]
  },
  "NL-CT-NIJ": {
    "desc": "Nijmegen Hollandia legrégebbi városa, amelynek története a római korig nyúlik vissza, amikor Ulpia Noviomagus néven a birodalom fontos északi helyőrsége volt. A város a Waal folyó partján fekszik, és dombosabb környezete miatt elüt a tipikus sík holland tájtól. Nijmegen ma is jelentős egyetemváros és kulturális központ, amely világszerte ismert az évente megrendezett négynapos gyaloglótúráról (Vierdaagse), amely a világ legnagyobb többnapos menetelő eseménye. Történelem K6: Mi volt a szerepe a római limesnek (határnak), amelynek egyik kulcspontja Nijmegen volt?",
    "facts": [
      "Nijmegen idén ünnepli fennállásának több mint 2000. évfordulóját.",
      "A Nemzetközi Négynapos Gyaloglótúrán (Vierdaagse) évente több mint 40 000 ember vesz részt a világ minden tájáról.",
      "A város a második világháború alatt súlyos bombatámadásokat szenvedett, de történelmi épületeit szépen helyreállították.",
      "A Radboud Egyetem az ország egyik vezető kutatóintézménye."
    ]
  },
  "NL-CT-HAR": {
    "desc": "Haarlem, az Észak-Holland tartomány fővárosa, történelmi épületeivel, macskaköves utcáival és gazdag kulturális örökségével Amszterdam csendesebb, de ugyanolyan gyönyörű alternatívája. A holland aranykorban a virágkereskedelem, a sörfőzés és a művészetek központja volt, itt élt és alkotott a híres festő, Frans Hals. A város központjában áll a hatalmas Grote Kerk (Nagy Templom), amely lenyűgöző Müller-orgonájáról ismert, melyen egykor maga Mozart is játszott. Művészettörténet K7: Miért volt a 17. századi holland festészet (mint amit Frans Hals képviselt) forradalmi az európai művészetben?",
    "facts": [
      "Haarlem a holland tulipántermesztő vidék ('Bollenstreek') északi kapuja.",
      "A Grote Kerk (Sint-Bavokerk) orgonája 5000 síppal rendelkezik, és a 18. században a világ legnagyobbja volt.",
      "A Teylers Múzeum, Hollandia legrégebbi múzeuma (1784), a művészetet és a tudományt ötvözi.",
      "A városban számos belső udvaros kis lakóház (hofje) maradt fenn a középkorból."
    ]
  },
  "NL-CT-LEI": {
    "desc": "Leiden Hollandia egyik legfontosabb történelmi egyetemvárosa. Itt alapította Orániai Vilmos 1575-ben az ország legrégebbi egyetemét, jutalmul a spanyol ostrom alatti hősies helytállásért. A város szűk csatornáival, több száz éves épületeivel és gazdag múzeumi kínálatával (mint a Rijksmuseum van Oudheden és a Naturalis) hódít. Leiden Rembrandt szülővárosa is, ahol a művész az első lépéseit tette a festészet felé. A város tudományos légköre olyan alakokat vonzott ide, mint Albert Einstein. Történelem K8: Miért volt stratégiai jelentősége a leideni ostromnak a nyolcvanéves háború során?",
    "facts": [
      "A Leideni Egyetem botanikuskertje (Hortus Botanicus) az egyik legrégebbi a világon, itt ültették az első tulipánokat Európában.",
      "Amszterdam után Leiden rendelkezik a legtöbb hidat számláló csatornarendszerrel Hollandiában.",
      "A város falaira több mint 100 híres verset festettek a világ különböző nyelvein.",
      "Leidenben jött létre az első holland csillagvizsgáló 1633-ban."
    ]
  },
  "NL-CT-DEL": {
    "desc": "Delft a világ minden táján ismert a kék-fehér porcelánjáról (Delfts Blauw), amely a 17. században jött létre a kínai porcelánok helyi alternatívájaként. A festői szépségű, fákkal szegélyezett csatornákkal és ősi hidakkal rendelkező város Johannes Vermeer festő szülőhelye és otthona volt. Delft emellett különleges történelmi jelentőséggel bír a királyi család számára: az Új Templom (Nieuwe Kerk) ad otthont az Orániai-Nassau-ház kriptájának, ahol Orániai Vilmos (a Haza Atyja) és a későbbi uralkodók is nyugszanak. Történelem K6: Miért próbálták a delfti fazekasok utánozni a 17. századi kínai porcelánokat?",
    "facts": [
      "A Királyi Delft (Royal Delft) az egyetlen fennmaradt 17. századi porcelángyár a városban.",
      "A Delfti Műszaki Egyetem (TU Delft) Hollandia legnagyobb és legrégebbi technológiai egyeteme.",
      "Orániai Vilmost a delfti Prinsenhofban gyilkolták meg 1584-ben; a golyónyomok ma is láthatók.",
      "Vermeer híres, 'Delft látképe' című festménye a holland városképfestészet csúcspontja."
    ]
  },
  "NL-CT-MAA": {
    "desc": "Maastricht Hollandia legdélebbi fekvésű, középkori hangulatú városa, amely a Maas folyó partján épült fel. Mivel a rómaiak alapították katonai bázisként, egyike az ország két legrégebbi városának (Nijmegen mellett). Történelmi belvárosa szűk utcácskákat, régi templomokat és megmaradt városfalakat rejt. A modern történelemben a város 1992-ben szerzett globális ismertséget a Maastrichti Szerződés aláírásával, amely létrehozta az Európai Uniót és megnyitotta az utat az euró bevezetése előtt. Történelem K8: Hogyan befolyásolta a Maastrichti Szerződés az európai országok gazdasági együttműködését?",
    "facts": [
      "A Sint-Servaasbasiliek a legrégebbi fennmaradt templom Hollandiában.",
      "A várost egy kiterjedt mészkőbarlang-rendszer övezi (Sint-Pietersberg), amelyet az évszázadok során bányászat hozott létre.",
      "Maastrichtban évente megrendezik a TEFAF-ot, a világ egyik legfontosabb művészeti és régiségvásárát.",
      "A város egyedi kulináris kultúrával rendelkezik, amely erősen belga és francia hatásokat mutat."
    ]
  },
  "NL-LM-AFH": {
    "desc": "Az Anne Frank Ház Amszterdam központjában található múzeum, amely az emberi kitartás és a történelem egyik legsötétebb korszakának emlékműve. Az épület hátsó traktusában (a Hátsó Traktus) rejtőzött el Anne Frank és családja, valamint négy másik zsidó ember több mint két évig a náci megszállás alatt a második világháborúban. Itt írta meg Anne világhírűvé vált naplóját, amely a remény, a félelem és a fiatalság megrendítő krónikája. A múzeum az eredeti rejtekhelyet és az üldöztetés dokumentumait mutatja be. Történelem K8: Miért döntöttek úgy a családok a második világháború alatt, hogy titkos rejtekhelyeken húzzák meg magukat?",
    "facts": [
      "A rejtekhely bejáratát egy forgatható könyvespolc rejtette el az irodában.",
      "A naplót Anne Frank apja, Otto Frank – a család egyetlen túlélője – adta ki 1947-ben.",
      "A múzeumot 1960-ban nyitották meg a nagyközönség előtt a lebontástól megmentett épületben.",
      "A naplót több mint 70 nyelvre fordították le, és a világirodalom egyik legolvasottabb műve."
    ]
  },
  "NL-LM-RJM": {
    "desc": "A Rijksmuseum Hollandia nemzeti múzeuma Amszterdamban, amely a holland művészet és történelem lenyűgöző gyűjteményének ad otthont a középkortól napjainkig. A Pierre Cuypers által tervezett grandiózus, neogótikus és reneszánsz elemeket ötvöző épület 1885-ben nyitotta meg kapuit. A múzeum leghíresebb részlege a 17. századi holland aranykor festészetét mutatja be, beleértve Rembrandt, Johannes Vermeer és Frans Hals remekműveit. A legikonikusabb kiállított mű Rembrandt hatalmas méretű, 'Éjjeli őrjárat' című festménye. Művészettörténet K7: Miért nevezik 'Éjjeli őrjáratnak' Rembrandt festményét, ha valójában egy nappali jelenetet ábrázol?",
    "facts": [
      "A múzeum több mint egymillió tárgyat őriz, ebből mintegy 8000 van folyamatosan kiállítva.",
      "A Cuypers-könyvtár a múzeum épületén belül Hollandia legnagyobb és legrégebbi nyilvános művészettörténeti könyvtára.",
      "Az épületen a kerékpárosok egy aluljárón keresztül keresztülhajthatnak, ami a világon egyedülálló.",
      "A 2013-ban befejezett tízéves felújítás során az épület visszanyerte eredeti, 19. századi pompáját."
    ]
  },
  "NL-LM-VGM": {
    "desc": "A Van Gogh Múzeum Amszterdamban a világ legnagyobb Vincent van Gogh alkotásaiból álló gyűjteményét őrzi. A múzeumot a festő öccsének, Theónak a fia, Vincent Willem van Gogh alapítványa hozta létre, hogy a művész hagyatéka egyben maradjon és a nagyközönség számára is elérhető legyen. A kiállítás időrendben mutatja be a zseniális, tragikus sorsú posztimpresszionista festő fejlődését, a korai sötét holland korszakától kezdve a ragyogó, élénk színű dél-franciaországi remekművekig. Művészettörténet K8: Hogyan tükrözik a színek Vincent van Gogh lelkiállapotát és művészi fejlődését a különböző korszakaiban?",
    "facts": [
      "A gyűjtemény mintegy 200 festményt, 500 rajzot és több mint 700 levelet tartalmaz.",
      "Itt található a híres 'Napraforgók', 'A krumplievők' és a 'Mandulavirágzás' című festmény.",
      "A múzeum épülete Gerrit Rietveld építész tervei alapján készült, 1973-ban nyílt meg.",
      "Évente több mint kétmillió látogatót fogad, ezzel az ország egyik leglátogatottabb múzeuma."
    ]
  },
  "NL-LM-VOL": {
    "desc": "Volendam egy festői történelmi halászfalu az Észak-Holland tartományban, az egykori Zuiderzee (ma Markermeer) partján. A falu a 20. század elején a művészek – köztük Picasso és Renoir – kedvelt menedékhelye volt, akik az autentikus holland életérzést keresték. Ma a turizmus a legfőbb iparága; a látogatókat a zöld faházak szegélyezte régi kikötő, a hagyományos holland népviseletek és a füstölt angolnát (paling) kínáló halárusok vonzzák. Földrajz K5: Hogyan változtatta meg a halászfalvak (mint Volendam) életét a tenger lezárása (a gátak megépítése)?",
    "facts": [
      "A volendami hagyományos népviselet, különösen a nők csipkefőkötője, a holland kultúra nemzetközi szimbólumává vált.",
      "A falu zenei kultúrája (a 'Palingsound' – angolnahang) jelentős a holland popzenében.",
      "Volendam egy gát megépítésével született meg a 14. században Edam kikötőjeként.",
      "A kikötőből rendszeres kompjárat közlekedik a szemközti, egykor szigetként funkcionáló Marken faluba."
    ]
  },
  "NL-LM-KEU": {
    "desc": "A Keukenhof, gyakran 'Európa kertje'-ként emlegetve, a világ egyik legnagyobb virágoskertje, amely a dél-hollandiai Lisse városában található. A park évente csupán nyolc hétig, a tavaszi virágzás idején tart nyitva, mégis több mint egymillió látogatót vonz a világ minden tájáról. A 32 hektáros területen a holland virághagymatermesztők több mint hétmillió tulipánt, jácintot és nárciszt ültetnek el minden ősszel, gondosan megtervezett tematikus minták szerint. Környezetismeret K6: Milyen természeti feltételek kellenek ahhoz, hogy egy ország a világ vezető virághagymatermesztője legyen?",
    "facts": [
      "A Keukenhof szó szerinti jelentése 'konyhakert', mivel a terület egykor egy kastély birtoka volt, ahol gyógynövényeket termesztettek.",
      "Minden évben a hagymákat ősszel kézzel ültetik el a kertészek.",
      "A parkot eredetileg 1949-ben hozták létre, hogy a holland exportőrök bemutathassák a hagymáikat.",
      "Több mint 800 különböző tulipánfajta látható a kertben a tavaszi szezonban."
    ]
  }
}

if __name__ == '__main__':
    update_file('lib/visualLab/data/netherlandsPoi.ts', data_batch1)
    print("Batch 1 done")
