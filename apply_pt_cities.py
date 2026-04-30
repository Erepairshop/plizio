
import json
import re
import os

def apply_seo(json_data, ts_path):
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for poi_id, data in json_data.items():
        # Find the POI block
        poi_regex = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\})'
        match = re.search(poi_regex, content, re.MULTILINE | re.DOTALL)
        if match:
            poi_obj = match.group(1)
            full_match = match.group(0)
            
            # Update descriptionAdvanced.hu
            # Look for hu: "", inside descriptionAdvanced: { ... }
            desc_adv_regex = r'(descriptionAdvanced:\s*\{[\s\S]*?hu:\s*)"\s*"'
            new_desc_val = f'hu: "{data["huDesc"]}"'
            updated_poi_obj = re.sub(desc_adv_regex, r'\1' + json.dumps(data["huDesc"], ensure_ascii=False), poi_obj, flags=re.MULTILINE | re.DOTALL)
            
            # Update factsAdvanced.hu
            facts_adv_regex = r'(factsAdvanced:\s*\{[\s\S]*?hu:\s*)\[\s*\]'
            hu_facts_json = json.dumps(data["huFacts"], ensure_ascii=False, indent=8).replace(']', '        ]')
            updated_poi_obj = re.sub(facts_adv_regex, r'\1' + hu_facts_json, updated_poi_obj, flags=re.MULTILINE | re.DOTALL)
            
            content = content.replace(poi_obj, updated_poi_obj)
        else:
            print(f"POI {poi_id} not found.")

    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("SEO content applied successfully.")

if __name__ == "__main__":
    data_str = """
{
  "city-cascais-extra": {
    "huDesc": "Cascais egy egykori halászfalu, amely mára Portugália egyik legelegánsabb tengerparti üdülőhelyévé vált, mindössze rövid távolságra Lisszabontól. A város hírnevét a 19. század végén alapozta meg, amikor a portugál királyi család nyári rezidenciájává választotta, ezzel vonzva a nemességet és az európai arisztokráciát. Ma Cascais a modern luxus és a történelmi báj különleges elegye, ahol a homokos strandok, a pálmákkal szegélyezett sétányok és a hangulatos óváros várja a látogatókat. A környék egyik leglátványosabb természeti képződménye a Boca do Inferno, egy drámai sziklahasadék, ahol az Atlanti-óceán hullámai hatalmas erővel csapnak össze. A város kiváló kiindulópont a közeli Sintra felfedezéséhez is. Földrajz K7 — Portugália és az európai tengerparti városok.",
    "huFacts": [
      "Cascais lakossága körülbelül 215 000 fő.",
      "A város a „Portugál Riviéra” néven is ismert.",
      "A 19. században itt volt a portugál királyok nyári székhelye.",
      "A Boca do Inferno (Pokol szája) egy híres tengerparti sziklaképződmény.",
      "Cascais kikötője fontos szerepet játszik a vitorlás sportokban.",
      "A városban található Condes de Castro Guimarães Múzeum egy gyönyörű palotában kapott helyet.",
      "Lisszabonból vonattal mindössze 40 perc alatt elérhető."
    ]
  },
  "city-guimaraes-extra": {
    "huDesc": "Guimarães városa különleges helyet foglal el minden portugál szívében, hiszen itt született meg a nemzet és itt kiáltották ki az első fővárost. A város történelmi központja a UNESCO Világörökség része, amely szűk középkori utcáival és tágas tereivel a múltat idézi. A település felett uralkodik a lenyűgöző Guimarães-i vár, amely a 10. században épült a mór támadások elleni védekezésül. Mellette található a Braganza hercegek palotája, egy burgundi stílusú építmény, amely gazdag faliszőnyegeivel és fegyvergyűjteményével nyűgözi le a látogatókat. Guimarães a hagyomány és a modernitás egyensúlya, ahol a büszke történelem találkozik a pezsgő egyetemi élettel. Földrajz K7 — Európa történelmi városai és a nemzetállamok kialakulása.",
    "huFacts": [
      "Guimarães Portugália resonance első fővárosa volt.",
      "A várost a portugál nemzet bölcsőjének (Berço da Nação) nevezik.",
      "Itt született I. Alfonz, Portugália első királya.",
      "A történelmi központ 2001 óta UNESCO Világörökségi helyszín.",
      "A Largo da Oliveira a város egyik legszebb középkori tere.",
      "A Braganza hercegek palotája a 15. században épült.",
      "2012-ben Guimarães volt Európa Kulturális Fővárosa."
    ]
  },
  "city-coimbra-extra": {
    "huDesc": "Coimbra Portugália egyik legősibb és legtiszteltebb városa, amely a Mondego folyó partján fekszik, és évszázadokon át az ország tudományos és kulturális központja volt. A város szimbóluma az 1290-ben alapított Coimbrai Egyetem, amely Európa egyik legrégebbi felsőoktatási intézménye és a UNESCO Világörökség része. Az egyetem területén található Biblioteca Joanina barokk könyvtár világszerte híres lenyűgöző belső teréről és ritka könyvgyűjteményéről. Coimbra óvárosa meredek, szűk utcákkal és középkori templomokkal teli, ahol az esti órákban felcsendül a jellegzetes coimbrai fado, amelyet hagyományosan férfiak énekelnek akadémiai talárban. A város a történelem, a hagyomány és a fiatalság vibráló keveréke. Földrajz K7 — Európai oktatási központok és kulturális örökség.",
    "huFacts": [
      "A Coimbrai Egyetemet 1290-ben alapították.",
      "Coimbra 1131 és 1255 között Portugália fővárosa volt.",
      "A Joanina könyvtárban denevérek védik a könyveket a rovaroktól.",
      "A Coimbrai Fado sötétebb és melankolikusabb a lisszaboni változatnál.",
      "A Santa Cruz-kolostorban nyugszanak az első portugál királyok.",
      "A „Portugal dos Pequenitos” egy híres miniatűr park gyerekeknek.",
      "A város lakossága körülbelül 140 000 fő."
    ]
  },
  "city-braga-extra": {
    "huDesc": "Braga Portugália harmadik legnagyobb városa és az ország vallási fővárosa, amelynek története több mint kétezer évre nyúlik vissza. Az ókori rómaiak által Bracara Augusta néven alapított település ma a mély vallásosság és a dinamikus fejlődés különleges elegye. A város legfontosabb látnivalója a Bom Jesus do Monte szentély, amelynek monumentális barokk lépcsősora világhírű zarándokhely és a UNESCO Világörökség része. Braga büszkélkedhet az ország legrégebbi katedrálisával is, amely több építészeti stílust ötvöz a romántól a barokkig. A történelmi óváros virágos kertjeivel, díszes palotáival és pezsgő tereivel minden évszakban vonzza a látogatókat, különösen a húsvéti Szent Hét idején. Földrajz K7 — Vallási központok és építészeti stílusok Európában.",
    "huFacts": [
      "Bragát a rómaiak alapították i.e. 16-ban.",
      "Ez Portugália legrégebbi keresztény városa.",
      "A Bom Jesus do Monte szentély lépcsősora 577 fokból áll.",
      "A Bragai katedrális építése a 11. században kezdődött.",
      "A várost gyakran „Portugália Rómájaként” emlegetik.",
      "2012-ben Braga volt Európa Ifjúsági Fővárosa.",
      "A város híres a látványos nagyheti (Semana Santa) körmeneteiről."
    ]
  },
  "city-aveiro-extra": {
    "huDesc": "Aveiro, amelyet gyakran „Portugália Velencéjeként” emlegetnek, a Ria de Aveiro lagúna partján fekszik, és egyedülálló csatornahálózatáról ismert. A várost a színes, hagyományos „moliceiro” hajók teszik különlegessé, amelyeket eredetileg hínárgyűjtésre használtak, ma pedig turistákat szállítanak a vizeken. Aveiro építészete az Art Nouveau (szecesszió) stílusjegyeit hordozza, elegáns homlokzatokkal díszítve a csatornapartokat. A közeli sólepárlók a mai napig működnek, emlékeztetve a város tengerhez fűződő szoros kapcsolatára. A látogatók nem hagyhatják ki a helyi édességet, az „ovos moles”-t sem, amely ostyába zárt édes tojáskrém. A tengerparti Costa Nova negyed csíkosra festett faházai pedig felejthetetlen látványt nyújtanak. Földrajz K7 — Partvidéki lagúnák és hagyományos életmód.",
    "huFacts": [
      "Aveiro a „Portugália Velencéje” becenevet viseli.",
      "A moliceiro hajók színes, gyakran humoros festményeikről ismertek.",
      "A város híres Art Nouveau stílusú épületeiről.",
      "Az Ovos Moles de Aveiro az első portugál édesség, amely védett státuszt kapott.",
      "A közeli Costa Nova strandja a színes csíkos házairól (palheiros) nevezetes.",
      "A Ria de Aveiro lagúna területe 45 negyzetkilométer.",
      "A város fontos egyetemi központ és az innováció városa."
    ]
  },
  "city-faro-extra": {
    "huDesc": "Faro az Algarve régió közigazgatási központja és kapuja, amely gyakran elkerüli a turisták figyelmét, pedig gazdag történelmi örökséggel büszkélkedhet. A várost egy impozáns várfal veszi körül, amelyen belül található a Vila Adentro, azaz a történelmi óváros macskaköves utcákkal és narancsfákkal díszített tereivel. Faro egyik legkülönlegesebb látnivalója a Karmelita-templom Csontkápolnája, amelyet több mint ezer szerzetes csontjai díszítenek. A város közvetlenül a Ria Formosa természetvédelmi terület szélén fekszik, amely lagúnákból és szigetekből álló bonyolult rendszer, és számtalan vándormadár otthona. Faro ideális helyszín azok számára, akik a tengerparti pihenést autentikus portugál kultúrával szeretnék ötvözni. Földrajz K7 — Természetvédelmi területek és dél-európai városok.",
    "huFacts": [
      "Faro az Algarve régió legnépesebb városa.",
      "A Ria Formosa lagúna a világ egyik legfontosabb vizes élőhelye.",
      "A Szent Ferenc-templom csontkápolnája 1200 szerzetes csontjából készült.",
      "A város katedrálisa (Sé) egy korábbi mecset és római templom helyén áll.",
      "Farót 1249-ben hódították vissza a móroktól.",
      "A nemzetközi repülőtér évente több millió utast fogad.",
      "Az óváros bejárata az Arco da Vila, egy neoklasszicista kapu."
    ]
  },
  "city-evora-extra": {
    "huDesc": "Évora az Alentejo régió múzeumvárosa, amelynek falai között több mint kétezer év történelme elevenedik meg. A UNESCO Világörökség részét képező óváros egyik leglenyűgözőbb emléke a római Diana-templom, amely Portugália legjobb állapotban fennmaradt ókori építménye. A középkori katedrális és a gótikus Szent Ferenc-templom mellett a látogatók megborzonghatnak a híres Csontkápolnában, amelynek falait emberi maradványok borítják. Évora azonban nem csak a múlté; pezsgő egyetemi városa és a Giraldo-tér árkádos kávézói élettel töltik meg a történelmi tereket. A várost körülölelő napsütötte táj híres a parafatermeléséről és kiváló borairól, amelyek az alentejói gasztronómia alapkövei. Földrajz K7 — Mezőgazdasági régiók és történelmi városmagok.",
    "huFacts": [
      "Évora történelmi központja 1986 óta UNESCO Világörökség.",
      "A Diana-templom az 1. században épült a rómaiak idején.",
      "A Csontkápolna bejáratánál ez áll: „Mi, a csontok, amik itt vagyunk, a tieidre várunk.”",
      "Évora az ország második legrégebbi egyetemének ad otthont (1559).",
      "A várost egy 6 kilométer hosszú középkori fal veszi körül.",
      "Az Alentejo régió a világ legnagyobb parafatermelője.",
      "A Giraldo-tér a város társadalmi és politikai központja."
    ]
  },
  "city-viana-do-castelo-extra": {
    "huDesc": "Viana do Castelo az Atlanti-óceán partján, a Lima folyó torkolatánál fekszik, és Észak-Portugália egyik legszebb városaként tartják számon. A település arculatát meghatározza a Santa Luzia-hegy tetején magasodó monumentális bazilika, ahonnan lélegzetelállító kilátás nyílik a városra, a folyóra és az óceánra. Viana híres a hajóépítési hagyományairól és a tengeri kereskedelemben betöltött történelmi szerepéről, amelyet a kikötőben álló Gil Eannes kórházhajó is jelképez. A város kulturális élete rendkívül gazdag, különösen az augusztusi Nossa Senhora da Agonia fesztivál idején, amikor a nők hagyományos aranyékszerekkel és színes népviseletbe öltözve vonulnak fel. A kézműves hagyományok és a modern kikötői élet itt kéz a kézben jár. Földrajz K7 — Kikötővárosok és néprajzi hagyományok.",
    "huFacts": [
      "Viana do Castelo fontos állomás volt a portugál felfedezések korában.",
      "A Santa Luzia-bazilika építését a párizsi Sacré-Cœur ihlette.",
      "A város híres a filigrán technikával készült aranyékszereiről.",
      "A Gil Eannes hajó korábban a tőkehalhalászokat segítette Grönlandnál.",
      "A város főtere, a Praça da República, reneszánsz stílusú épületeiről ismert.",
      "A folyón átívelő Eiffel-hidat maga Gustave Eiffel tervezte 1878-ban.",
      "Ez az egyik legfontosabb központja a portugál népviseletnek."
    ]
  },
  "city-setubal-extra": {
    "huDesc": "Setúbal egy dinamikus kikötőváros Lisszabontól délre, a Sado folyó torkolatánál, ahol a tenger kincsei és a hegyek zöldje találkozik. A város egyik legnagyobb vonzereje a közeli Arrábida Természeti Park, amely hófehér mészkőszikláival és türkizkék vizű öbleivel a Földközi-tenger hangulatát idézi. Setúbal híres halpiacáról, amelyet a világ legjobbjai között tartanak számon, valamint a sült tintahaláról (chocofrito), amely helyi specialitás. A Sado-lagúna különlegessége az itt élő palackorrú delfin kolónia, amely Európában ritka jelenség a folyótorkolatokban. A város felett őrködő São Filipe erőd falairól lenyűgöző panoráma nyílik a Tróia-félszigetre és az óceánra. Földrajz K7 — Tengeri ökoszisztémák és ipari kikötők.",
    "huFacts": [
      "Setúbal Portugália negyedik legnagyobb városa.",
      "A Sado-estuáriumban él az ország egyetlen rezidens delfinpopulációja.",
      "Az Arrábida-hegység legmagasabb pontja 501 méter.",
      "A Livramento piacot 1876-ben alapították, és híres az azulejo csempéiről.",
      "Itt született a híres portugál költő, Manuel Maria Barbosa du Bocage.",
      "A Tróia-félsziget komppal mindössze 15 perc alatt elérhető.",
      "A régió híres a Moscatel de Setúbal édes borról."
    ]
  },
  "city-leiria-extra": {
    "huDesc": "Leiria városa Portugália középső részén helyezkedik el, és történelme szorosan összefonódik a dombtetőn magasodó középkori várral, amelyet eredetileg a mórok elleni védekezésül építettek. A várat I. Dénes király alakíttatta át elegáns rezidenciává, ahonnan gyönyörű kilátás nyílik a Lis folyó által átszelt városra. Leiria környéke híres a hatalmas fenyőerdőjéről, a Pinhal de Leiriáról, amelyet a 13. században telepítettek a dűnék megfékezésére és a hajóépítéshez szükséges faanyag biztosítására. A város kiváló elhelyezkedése miatt tökéletes kiindulópont a közeli vallási és történelmi helyszínek, mint Fátima, Batalha és Alcobaça felfedezéséhez. A modern Leiria egy dinamikus ipari és oktatási központ. Földrajz K7 — Erdőgazdálkodás és középkori várak.",
    "huFacts": [
      "Leiria vára az egyik legszebb középkori építmény Portugáliában.",
      "A Pinhal de Leiria fenyőerdő területe több mint 11 000 hektár.",
      "A várost 1135-ben foglalta vissza a keresztény sereg.",
      "Itt tartották 1254-ben az első portugál rendi gyűlést (Cortes).",
      "A Lis folyó az egyetlen Portugáliában, amely délről északra folyik.",
      "A város lakossága körülbelül 128 000 fő.",
      "Leiria a UNESCO „Kreatív Városa” címet viseli az irodalom terén."
    ]
  },
  "city-portimao-extra": {
    "huDesc": "Portimão az Algarve régió második legnagyobb városa, amely eredetileg fontos halászkikötő és konzervipari központ volt, mára azonban a turizmus vált a motorjává. A város leghíresebb pontja a Praia da Rocha, egy ikonikus strand hatalmas sárga sziklákkal és széles homokos parttal, amely Európa-szerte ismert. Portimão kikötője ma már modern jachtoknak és óceánjáróknak ad otthont, míg a folyóparti sétány éttermei a frissen sült szardínia illatával csalogatják az utazókat. A város kiváló sporthelyszín is; a közeli autópálya-versenypálya nemzetközi futamoknak ad otthont, a folyón pedig gyakoriak a vitorlásversenyek. Portimão az élénk éjszakai élet és a tengerparti kikapcsolódás tökéletes helyszíne. Földrajz K7 — Turizmus és partmenti infrastruktúra fejlesztése.",
    "huFacts": [
      "Portimão az Arade folyó torkolatánál fekszik.",
      "A Praia da Rocha strand sziklaalakzatai az Algarve jelképei.",
      "Minden augusztusban megrendezik a híres Szardínia Fesztivált.",
      "A város múzeuma egy egykori szardíniakonzerv-gyárban található.",
      "Az Autódromo Internacional do Algarve a Forma-1 futamoknak is helyszíne.",
      "A Santa Catarina erőd a 17. században épült a folyótorkolat védelmére.",
      "Portimão korábbi neve Vila Nova de Portimão volt."
    ]
  },
  "city-funchal-extra": {
    "huDesc": "Funchal, Madeira szigetének fővárosa, egy természetes amfiteátrumként terül el az Atlanti-óceán partján, meredek hegyoldalakkal övezve. A várost buja kertek, színes trópusi virágok és az egész évben tartó tavaszias időjárás teszi különlegessé. Funchal történelmi központja fehérre meszelt falaival és jellegzetes bazaltburkolatú utcáival igazi gyöngyszem. A látogatók kötélpályán juthatnak fel Monte negyedébe, ahonnan hagyományos fonott szánkókkal (toboggan) csúszhatnak vissza a városba. Madeira híres bora, a hímzésművészet és a Cristiano Ronaldo tiszteletére alapított múzeum is ide vonzza a turistákat. A kikötő az óceánjáró hajók egyik legfontosabb megállóhelye Európa és Amerika között, különösen a világhírű szilveszteri tűzijáték idején. Földrajz K7 — Szigeti ökoszisztémák és óceáni kikötők.",
    "huFacts": [
      "Funchal nevét az itt vadon növő édesköményről (funcho) kapta.",
      "A város katedrálisa (Sé) a 15. század végén épült.",
      "Itt található a CR7 Múzeum, amelyet Cristiano Ronaldo tiszteletére emeltek.",
      "A Monte-szánkók (Carros de Cesto) fából és fonott vesszőből készülnek.",
      "Funchal szilveszteri tűzijátéka korábban világrekordot is tartott.",
      "A város botanikus kertje több mint 2000 egzotikus növényfajt mutat be.",
      "Madeira bora akár száz évig is eltartható."
    ]
  },
  "city-ponta-delgada-extra": {
    "huDesc": "Ponta Delgada az Azori-szigetek legnagyobb városa és a São Miguel-sziget közigazgatási központja, amely vulkanikus tájaival és buja növényzetével varázsolja el a látogatókat. A város építészetére jellemző a fekete bazalt és a fehér mészkő kontrasztja, amely elegáns megjelenést kölcsönöz a templomoknak és a Portas da Cidade városkapunak. Ponta Delgada híres az ananászültetvényeiről, ahol üvegházakban, füsttel érlelik a gyümölcsöt, valamint a közeli Sete Cidades kráter tavairól. A kikötő fontos bázis a bálna- és delfinfigyelő túrák számára, mivel az Azori-szigetek vizei a világ egyik leggazdagabb tengeri élőhelyei. A város a nyugalom és a kaland tökéletes kiindulópontja az Atlanti-óceán közepén. Földrajz K7 — Vulkanizmus és az Atlanti-óceán szigetvilága.",
    "huFacts": [
      "Ponta Delgada lakossága körülbelül 68 000 fő.",
      "A városkapu (Portas da Cidade) a 18. században épült.",
      "Az Azori-szigetek Portugália egyik autonóm régiója.",
      "Itt találhatók Európa egyetlen ipari méretű ananászültetvényei.",
      "A Gruta do Carvão egy hatalmas vulkáni barlangrendszer a város alatt.",
      "A vizekben 25 különböző bálna- és delfinfaj figyelhető meg.",
      "A város fontos megállóhely az Atlanti-óceánt átszelő jachtoknak."
    ]
  },
  "city-viseu-extra": {
    "huDesc": "Viseu városa Portugália középső hegyvidéki területén fekszik, és többször is elnyerte az ország „legélhetőbb városa” címet. A település történelme a római korig nyúlik vissza, és szorosan kötődik Viriatushoz, a luzitánok legendás vezéréhez, aki a római hódítók ellen harcolt. Viseu vallási központ is, amelynek monumentális katedrálisa és a vele szemben álló Misericórdia-templom az Adro da Sé téren lélegzetelállító építészeti együttest alkot. A város híres a Grão Vasco Múzeumról, amely a reneszánsz festészet remekműveit őrzi, valamint a Dão borvidékről, amely az ország egyik legfontosabb vörösbortermelő területe. A történelmi óváros szűk utcái és a modern parkok harmonikus egységet alkotnak. Földrajz K7 — Belső területek fejlődése és bortermelés.",
    "huFacts": [
      "Viseu az egyetlen portugál kerületi székhely, amelynek nincs vasúti kapcsolata.",
      "A Cava de Viriato egy rejtélyes, nyolcszögletű földsánc a város szélén.",
      "A Viseu-i katedrális építése a 12. században kezdődött.",
      "Grão Vasco a 16. század egyik legfontosabb portugál festője volt.",
      "A város híres a minden évben megrendezett Feira de São Mateus vásárról.",
      "Viseu magassága 400 és 500 méter között mozog.",
      "A Dão borvidék borai eleganciájukról és eltarthatóságukról ismertek."
    ]
  },
  "city-beja-extra": {
    "huDesc": "Beja az Alentejo régió szívében, a déli síkságokon fekszik, és már a római időkben is fontos közigazgatási központ volt Pax Julia néven. A város fölé magasodik a középkori vár tornya, a Torre de Menagem, amely 40 méteres magasságával Portugália legmagasabb ilyen építménye, és tiszta időben belátni róla az egész síkságot. Beja gazdag vallási örökséggel rendelkezik, a volt Nossa Senhora da Conceição kolostor ma a Regionális Múzeumnak ad otthont, ahol Mariana Alcoforado apáca híres „Portugál levelei” ihletődtek. A város környéke a végtelen gabonaföldekről, az olajfaligetekről és a modern öntözőrendszereknek köszönhetően fellendülő mezőgazdaságról híres, miközben megőrzi nyugodt, tradicionális jellegét. Földrajz K7 — Kontinentális éghajlat és mezőgazdasági síkságok.",
    "huFacts": [
      "Beja római neve Pax Julia volt, Julius Caesar tiszteletére.",
      "A vár tornya (Torre de Menagem) teljes egészében márványból és mészkőből épült.",
      "Itt található Portugália egyik legjelentősebb visigót gyűjteménye.",
      "A „Portugál levelek” (Lettres portugaises) a világirodalom híres szerelmes levelei.",
      "Beja környéke az ország egyik legmelegebb területe nyáron.",
      "Az Alqueva-gát közelsége jelentősen átalakította a régió mezőgazdaságát.",
      "A város lakossága körülbelül 35 000 fő."
    ]
  },
  "city-braganca-extra": {
    "huDesc": "Bragança városa Portugália északkeleti csücskén, a Trás-os-Montes régióban található, távol a nagyvárosi nyüzsgéstől, egy vadregényes hegyvidéki környezetben. A város legfőbb ékessége a 12. századi középkori citadella, amelynek falain belül egy érintetlen óváros és a különleges, ötszögletű Domus Municipalis található, amely Portugália egyetlen fennmaradt román stílusú városházája. Bragança a Bragança-ház névadója, amely dinasztia évszázadokon át uralkodott Portugáliában és Brazíliában. A város a Montesinho Természeti Park kapuja, ahol a látogatók megismerhetik a hagyományos hegyi falvak életét és a gazdag vadvilágot, beleértve az ibériai farkast is. A helyi gasztronómia a gesztenyére, a vadhúsokra és a füstölt kolbászfélékre épül. Földrajz K7 — Hegyvidéki régiók és elszigetelt települések.",
    "huFacts": [
      "Bragança citadellája 800 méteres tengerszint feletti magasságban fekszik.",
      "A Domus Municipalis egy egyedülálló, 12. századi román stílusú épület.",
      "A Bragança-ház 1640 és 1910 között adta Portugália királyait.",
      "A város közelében található Montesinho falu a népi építészetéről híres.",
      "A régióban még mindig beszélik a mirandai nyelvet (mirandês).",
      "A közeli Montesinho parkban él az ibériai farkas egyik legnagyobb populációja.",
      "Bragança Portugália egyik leghidegebb városa a téli hónapokban."
    ]
  },
  "city-santarem-extra": {
    "huDesc": "Santarém, amelyet gyakran „a portugál gótika fővárosaként” emlegetnek, a Tejo folyó feletti domboldalon terül el, stratégiai fontosságú helyen. A város történelmi központja bővelkedik gótikus templomokban és kolostorokban, amelyek a portugál középkor fénykorát idézik. A Portas do Sol kertjeiből lenyűgöző panoráma nyílik a Tejo folyó völgyére és a végtelen síkságokra, ahol a hagyományos mezőgazdaság és a bikatenyésztés folyik. Santarém fontos vásárváros is, itt rendezik meg minden évben az Országos Mezőgazdasági Vásárt, amely a régió gazdasági erejét mutatja be. A város fontos szerepet játszott Portugália függetlenségi harcaiban is, és ma is büszkén őrzi történelmi örökségét és vidéki hagyományait. Földrajz K7 — Folyóvölgyek és mezőgazdasági központok.",
    "huFacts": [
      "Santarém római neve Scalabis volt.",
      "A várost 1147-ben foglalta vissza a móroktól I. Alfonz király.",
      "A Graça-templomban található Pedro Álvares Cabralnak, Brazília felfedezőjének sírja.",
      "A Portas do Sol park egykori várfalak helyén alakult ki.",
      "A város a Ribatejo régió központja, amely a lovas hagyományairól híres.",
      "Itt rendezik meg az ország legfontosabb gasztronómiai fesztivált.",
      "A Santarémi gótika az egyik legegységesebb építészeti stílus az országban."
    ]
  },
  "city-portalegre-extra": {
    "huDesc": "Portalegre városa Észak-Alentejo dombjai között, a Serra de São Mamede Természeti Park lábánál fekszik, és híres gazdag textilipari múltjáról. A város legkülönlegesebb látnivalója a Tapétamúzeum, ahol a világhírű portalegrei kézzel szőtt faliszőnyegeket készítik és állítják ki, amelyek gyakran neves művészek alkotásait reprodukálják. Az óváros elegáns barokk palotái és díszes kúriái a 17. és 18. századi fellendülés emlékei, amikor a selyemipar virágzott a környéken. A várost körülölelő hegyvidék hűvösebb klímája és buja növényzete éles ellentétben áll az Alentejo déli részének forróságával. Portalegre kiváló helyszín a túrázáshoz és a természet felfedezéséhez, miközben az utazók élvezhetik a nyugodt, vidéki eleganciát. Földrajz K7 — Hegyvidéki mikroklímák és ipari hagyományok.",
    "huFacts": [
      "Portalegre a 17. században Portugália egyik leggazdagabb városa volt a selyemnek köszönhetően.",
      "A portalegrei faliszőnyeg egy egyedülálló technika, amely 7000 árnyalatot használhat.",
      "A Serra de São Mamede park legmagasabb pontja 1025 méter.",
      "A városban számos 18. századi barokk szökőkút található.",
      "Itt élt és alkotott José Régio híres portugál író, akinek háza ma múzeum.",
      "A környéken rengeteg gesztenyefa és parafa tölgy található.",
      "A város katedrálisa a 16. században épült manierista stílusban."
    ]
  },
  "city-castelo-branco-extra": {
    "huDesc": "Castelo Branco városa Portugália középső-keleti részén, a spanyol határ közelében található, és nevének jelentése „Fehér Vár”, utalva a templomos lovagok által épített erődítményre. A város legfőbb vonzereje a Püspöki Palota Kertje (Jardim do Paço Episcopal), amely Portugália egyik legszebb barokk kertje, tele szobrokkal, szökőkutakkal és labirintusokkal. Castelo Branco híres a hagyományos selyemhímzéséről (bordados), amely színes madár- és virágmotívumairól ismert, és generációk óta száll apáról fiúra. A város fontos oktatási és kulturális központ, ahol a modern múzeumok és a történelmi templomos örökség jól kiegészítik egymást. A környező táj ideális a természetjáráshoz, a közeli Tejo Nemzetközi Természeti Park pedig gazdag madárvilágot kínál. Földrajz K7 — Határmenti régiók és barokk kertek.",
    "huFacts": [
      "A várost a 12. században a templomos lovagok alapították.",
      "A Püspöki Palota kertjében a portugál királyok és evangélisták szobrai láthatók.",
      "A Castelo Branco-i hímzés (Bordado) eredete a 16. századig nyúlik vissza.",
      "A vár romjai mellől tiszta időben belátni az egész Beira Baixa síkságot.",
      "A város híres a finom kecskesajtjáról (Queijo de Castelo Branco).",
      "Itt található a Francisco Tavares Proença Júnior Múzeum.",
      "A közeli Monsanto falu elnyerte „a legportugálabb falu” címet."
    ]
  },
  "city-vila-real-extra": {
    "huDesc": "Vila Real városa Trás-os-Montes régió szívében, a Corgo és a Cabril folyók mély völgyeinek találkozásánál fekszik, látványos környezetben. A város nemzetközi hírnevét leginkább a közeli Mateus-palotának (Casa de Mateus) köszönheti, amely a portugál barokk építészet remekműve, és amelynek képe világszerte ismert a népszerű rozé bor címkéjéről. Vila Real történelmi központja nemesi kúriákban és címeres házakban bővelkedik, tükrözve a város „királyi” múltját. A település kapu a Douro-völgy borvidékéhez és az Alvão Természeti Parkhoz, ahol hatalmas vízesések és gránit sziklák várják a látogatókat. A város pezsgő egyetemi élete és a hagyományos kézműves vásárok, mint a Szent János-napi ünnepségek, különleges hangulatot adnak Vila Realnak. Földrajz K7 — Borvidékek és hegyi folyók.",
    "huFacts": [
      "Vila Real nevének jelentése „Királyi Város”, utalva alapítójára, I. Dénes királyra.",
      "A Mateus-palota kertje híres a víztükréről és az évszázados cédrusairól.",
      "A Corgo-szurdok egy látványos természeti képződmény a város közepén.",
      "A közeli Alvão parkban található a Fisgas de Ermelo vízesés.",
      "A város híres a „Pitos de Santa Luzia” nevű hagyományos édességről.",
      "Vila Real fontos állomás a Douro-völgyi borturizmusban.",
      "Minden évben megrendezik a Circuito Internacional de Vila Real autóversenyt."
    ]
  },
  "city-tavira-extra": {
    "huDesc": "Tavira az Algarve keleti részének egyik legelbűvölőbb városa, amely megőrizte autentikus jellegét és elkerülte a tömegturizmus romboló hatását. A Gilão folyó partján fekvő települést egy hétlyukú római híd köti össze, óvárosát pedig több tucat templom és jellegzetes, piramis alakú „tesoura” tetőkkel díszített házak alkotják. Tavira híres a fehér homokos strandjairól, amelyek a közeli Tavira-szigeten találhatók, és komppal könnyen elérhetők. A város történelme a föníciai időkig nyúlik vissza, várának romjai közül pedig gyönyörű kilátás nyílik a háztetőkre és a közeli sólepárlókra. Tavira a nyugalom és a tradicionális algarvei életmód szimbóluma, ahol a halászat és a tengeri só kitermelése ma is fontos szerepet játszik. Földrajz K7 — Part menti szigetek és hagyományos építészet.",
    "huFacts": [
      "Tavirát gyakran a „templomok városának” nevezik, több mint 30 temploma van.",
      "A római híd valójában középkori újjáépítés, de római alapokon nyugszik.",
      "A Tavira-sziget a Ria Formosa természetvédelmi terület része.",
      "A város híres a kiváló minőségű tengeri sójáról (Flor de Sal).",
      "Itt található a föníciai régészeti ásatásokat bemutató múzeum.",
      "A „tesoura” tetőforma segítette a házak szellőzését a forró nyárban.",
      "A város fontos központja volt a tonhalhalászatnak a 20. század közepéig."
    ]
  },
  "city-guarda-extra": {
    "huDesc": "Guarda Portugália legmagasabban fekvő városa, amely több mint 1000 méteres tengerszint feletti magasságban, a Serra de Estrela hegység északkeleti peremén helyezkedik el. Nevének jelentése „Őrző”, mivel évszázadokon át fontos határvédelmi szerepet töltött be a spanyol hódítások ellen. A város jelképe a masszív, gránitból épült gótikus katedrális, amely inkább egy erődítményre hasonlít. Guarda óvárosának szűk, kanyargós utcái között található a régi zsidó negyed, amely a város gazdag vallási és kulturális múltjáról tanúskodik. A tiszta és friss hegyi levegő, valamint a közeli sípályák és túraútvonalak népszerű célponttá teszik a természetbarátok körében, télen pedig gyakora borítja hó a történelmi tereket. Földrajz K7 — Hegyvidéki települések és határvédelem.",
    "huFacts": [
      "Guarda 1056 méteres magasságával az ország legmagasabb városa.",
      "A katedrális építése több mint 150 évig tartott (1390-1540).",
      "A várost I. Sancho király alapította 1199-ben.",
      "Guarda híres az „F” betűkről: Forte, Farta, Fiel, Formosa, Fria (Erős, Gazdag, Hűséges, Szép, Hideg).",
      "A zsidó negyed (Judiaria) az egyik legjobb állapotban fennmaradt az országban.",
      "A közelben található a Serra da Estrela, Portugália legmagasabb hegysége.",
      "A városban évente megrendezik a „Bárányfesztivált”."
    ]
  },
  "city-chaves-extra": {
    "huDesc": "Chaves városa Portugália legészakibb részén, a spanyol határ mellett, a Tâmega folyó völgyében fekszik, és már a római időkben is híres volt termálvizeiről. A város egyik legfontosabb emléke a Traianus császár idején épült római híd, amely ma is használatban van, és összeköti a folyó két partját. Chaves neve latinul Aquae Flaviae volt, utalva a gyógyító erejű forrásokra, amelyek ma is vonzzák a rekreációra vágyókat 73 fokos vizükkel. A város középkori vára és annak tornya a portugál függetlenség védelmét jelképezte az évszázadok során. Chaves híres a gasztronómiájáról is, különösen a füstölt sonkájáról (presunto) és a hússal töltött tésztaféléről, a „pastel de Chaves”-re, amely nemzeti kincs. Földrajz K7 — Termálvizek és ókori római utak.",
    "huFacts": [
      "A római hidat a 1. század végén építették Traianus császár tiszteletére.",
      "Chaves forrásvizei Európa legforróbb nátrium-hidkarbonátos vizei közé tartoznak.",
      "A város stratégiai helyzete miatt a „Transmontán-kapu” nevet is viseli.",
      "A Pastel de Chaves 2015 óta eredetvédett termék.",
      "Itt található a Nadir Afonso Kortárs Művészeti Múzeum.",
      "Chaves volt az egyik első város, amely felszabadult a napóleoni hódítás alól.",
      "A város lakossága körülbelül 41 000 fő."
    ]
  },
  "city-elvas-extra": {
    "huDesc": "Elvas városa Portugália és Spanyolország határán fekszik, és a világ legnagyobb és legjobban megőrzött bástyás erődrendszerével büszkélkedhet, amely a UNESCO Világörökség része. A város csillag alakú erődítményei, mint a Forte de Santa Luzia és a Forte de Nossa Senhora da Graça, a hadmérnöki művészet remekművei, amelyeket a 17. és 19. század között építettek. Elvas látképét meghatározza a monumentális, 7 kilométer hosszú Amoreira-vízmű, amely évszázadokon át biztosította a város vízellátását az ostromok idején is. Az óváros szűk utcái, a mór negyed és a történelmi templomok a város katonai és vallási jelentőségéről mesélnek. Elvas a történelem élő emlékműve, ahol a falak minden köve a határok védelméről szól. Földrajz K7 — Erődrendszerek és katonai építészet.",
    "huFacts": [
      "Elvas 2012 óta UNESCO Világörökségi helyszín.",
      "Az Amoreira-vízmű 843 ívből áll és több mint 100 évig épült.",
      "A Santa Luzia erőd a világ egyik legjobb állapotban fennmaradt bástyás erődje.",
      "A város főtere, a Praça de República, egykor a bikaviadalok helyszíne volt.",
      "Elvas híres a kandírozott szilvájáról (Ameixas de Elvas).",
      "A városban több mint 20 templom és 7 kolostor található.",
      "A határ menti védelmi rendszer kulcsfontosságú volt a restaurációs háborúban."
    ]
  }
}
"""
    json_data = json.loads(data_str)
    apply_seo(json_data, "lib/visualLab/data/poiExtraPortugalCities.ts")
