import re
import json

content_dict = {
  "city-minsk": {
    "descriptionAdvanced": "Minszk, Fehéroroszország fővárosa és legnagyobb városa, a történelem és a modernitás lenyűgöző keveréke. Bár a város történelme a 11. századig nyúlik vissza, a második világháború során szinte teljesen megsemmisült, így mai arculatát a nagyszabású szovjet újjáépítés határozza meg. Széles sugárútjai, hatalmas terei és a sztálini empír stílusú építészete egyedülálló atmoszférát teremtenek. A város ugyanakkor folyamatosan fejlődik, amit a modern épületek, nyüzsgő kávézók és az egyre gyarapodó technológiai szektor is bizonyít. A Szviszlacs folyó partján elterülő metropolisz a kulturális élet központja is, számos múzeummal és színházzal. Földrajz K8 - Kelet-Európa nagyvárosai.",
    "factsAdvanced": [
      "Minszk a második világháborúban elszenvedett pusztítás után 1974-ben kapta meg a 'Hős Város' kitüntető címet.",
      "A város Függetlenség sugárútja az egyik leghosszabb egyenes sugárút Európában, több mint 15 kilométer hosszú.",
      "A minszki metrót 1984-ben nyitották meg, és állomásait gazdag márvány- és gránitdíszítés jellemzi.",
      "A város technológiai parkja, a Hi-Tech Park gyakran kapja a 'Kelet-Európa Szilícium-völgye' becenevet."
    ]
  },
  "city-gomel": {
    "descriptionAdvanced": "Homel (vagy Gomel) Fehéroroszország második legnagyobb városa, amely az ország délkeleti részén, a Szozs folyó festői partján fekszik. A település első írásos említése 1142-ből származik, ami gazdag és fordulatos múltra utal. A város igazi ékköve a Rumjancev-Paszkevics palotaegyüttes, amely lenyűgöző építészetével és hatalmas, egzotikus növényekkel teli parkjával vonzza a látogatókat. Homel fontos ipari és oktatási központ is, ahol a hagyományok és a modern ipar jól megfér egymás mellett. A csernobili katasztrófa jelentős hatással volt a régióra, de a város azóta is a kulturális ellenállóképesség szimbóluma. Történelem K8 - Modern kori katasztrófák és újjáépítés.",
    "factsAdvanced": [
      "A Rumjancev-Paszkevics palota parkjában található egy 19. században épült télikert, amely ritka trópusi növényeknek ad otthont.",
      "Homel a Szozs folyó jelentős kikötővárosa, amely fontos kereskedelmi útvonal volt a történelem során.",
      "A város egyik jelképe a hatalmas gyalogos híd, amely átível a folyón és összeköti a központot a parkkal.",
      "Homelben található Fehéroroszország egyik legfontosabb erdészeti és fafeldolgozási kutatóintézete."
    ]
  },
  "city-mogilev": {
    "descriptionAdvanced": "Mahiljov a Dnyeper folyó magas partjain elhelyezkedő történelmi város, Fehéroroszország keleti régiójának központja. A 13. században alapított település a történelem során fontos kereskedelmi csomópontként szolgált Kelet és Nyugat között. A város építészetén nyomot hagyott az ortodox, a katolikus és a zsidó kultúra békés együttélése. Kiemelkedő látványossága a rekonstruált Városháza és a lenyűgöző Szent Szaniszló-székesegyház, amely egyedülálló freskóival a régió egyik legszebb barokk épülete. Mahiljov a második világháború alatt jelentős hősies védelmi harcok színtere volt. Földrajz K7 - Folyóparti települések és kereskedelem.",
    "factsAdvanced": [
      "A mahiljovi Városháza eredetileg 1679-ben épült, de a második világháború után lebontották, majd 2008-ban teljesen újjáépítették.",
      "A város volt az első világháború előtt II. Miklós orosz cár főhadiszállása.",
      "Mahiljov a Dnyeper folyó egyik legfontosabb kikötője volt a Kijevi Rusz idején.",
      "A Csillagászok tere a város központjában egy hatalmas napórát formáz, amelynek közepén egy csillagász szobra áll."
    ]
  },
  "city-vitebsk": {
    "descriptionAdvanced": "Vicebszk Fehéroroszország északi részén, a Nyugati-Dvina folyó partján fekszik, és az ország kulturális és művészeti fővárosaként tartják számon. A várost 974-ben alapították, így az egyik legrégebbi település a régióban. Vicebszk világszerte ismert arról, hogy itt született és alkotott Marc Chagall, akinek szülőháza ma múzeumként működik. A város évente ad otthont a híres Szlavjanszkij Bazar nemzetközi művészeti fesztiválnak, amely rengeteg látogatót vonz. Szűk, macskaköves utcái és felújított történelmi templomai romantikus hangulatot kölcsönöznek a központnak. Művészet K8 - Modern festészet és kulturális örökség.",
    "factsAdvanced": [
      "Marc Chagall mellett Vicebszkben alkotott Kazimir Malevics is, aki itt alapította meg az UNOVIS művészeti csoportot.",
      "A Szlavjanszkij Bazar fesztivált 1992 óta minden nyáron megrendezik, bemutatva a szláv kultúra sokszínűségét.",
      "A város legmagasabb pontján álló Uszpenszkij-székesegyház lenyűgöző kilátást nyújt a Nyugati-Dvina folyóra.",
      "Vicebszk az egyetlen fehérorosz város, amely saját, kiterjedt villamoshálózattal rendelkezett már 1898-ban."
    ]
  },
  "city-grodno": {
    "descriptionAdvanced": "Hrodna, más néven Grodno, Fehéroroszország nyugati határán, a Nyeman folyó mentén található, és az ország egyik legszebb történelmi városának tartják. Mivel a város sok más településsel ellentétben nagyrészt sértetlenül vészelte át a második világháborút, megőrizte eredeti középkori és barokk utcahálózatát. Hrodna igazi építészeti ékszerdoboz, ahol a régi és az új kastély egymás mellett áll a folyó partján. A város vallási sokszínűségét a monumentális Farny katolikus templom és a 12. századi Kalozsa-templom is bizonyítja. Hrodna pezsgő egyetemi város, amely szoros kulturális szálakkal kapcsolódik a szomszédos Lengyelországhoz és Litvániához. Történelem K8 - Határmenti városok és kultúrák találkozása.",
    "factsAdvanced": [
      "A Kalozsa-templom (Szent Borisz és Gleb templom) az ország egyik legrégebbi, még mindig álló ortodox temploma, amely 1180 körül épült.",
      "Hrodna volt a Lengyel-Litván Unió egyik legfontosabb városa, gyakran tartottak itt szejmeket (országgyűléseket).",
      "Báthory István lengyel király és erdélyi fejedelem olyannyira kedvelte a várost, hogy a hrodnai kastélyt tette fő rezidenciájává.",
      "A régi kastély a 11. században épült, míg az új kastélyt a 18. században húzták fel a királyi udvar számára."
    ]
  },
  "city-brest": {
    "descriptionAdvanced": "Breszt egy nagy múltú, dinamikus város Fehéroroszország délnyugati csücskében, közvetlenül a lengyel határ mellett. A várost a világ leginkább a monumentális Breszti erőd révén ismeri, amely a második világháború elején mutatott hősies ellenállás szimbóluma. Breszt azonban nem csak katonai emlékhely; a városközpont bájos gyalogosutcái, a Sovetszkaja utca és a hagyományos lámpagyújtogató ceremónia különleges vonzerőt jelentenek. A Bug folyó partján elterülő település több mint ezeréves történelemmel bír, és a vasúti közlekedés egyik legfontosabb európai csomópontja is. Földrajz K8 - Közlekedési csomópontok és határok.",
    "factsAdvanced": [
      "A Sovetszkaja utcán minden este egy egyenruhás lámpagyújtogató gyújtja meg kézzel a régi olajlámpásokat.",
      "Bresztben található a világ egyik legérdekesebb múzeuma, a 'Megmentett Műkincsek Múzeuma', amely a határon lefoglalt csempészett antikvitásokat mutatja be.",
      "A város 1596-ban a breszti unió helyszíne volt, amely létrehozta a görögkatolikus egyházat.",
      "A Breszti erődöt a Szovjetunió 'Hős Erőd' címmel tüntette ki az 1941-es hősies védelem elismeréseként."
    ]
  },
  "landmark-mir-castle": {
    "descriptionAdvanced": "A Miri várkastély Fehéroroszország egyik legikonikusabb műemléke, amely tökéletesen ötvözi a gótika, a reneszánsz és a barokk építészet stílusjegyeit. Az 1520-as években épült erődítményt eredetileg védekezési célokra tervezték, vastag téglafalakkal és öt masszív toronnyal. A 16. század végén a hatalmas Radziwill család tulajdonába került, akik pompás rezidenciává alakították át. A festői tó partján álló kastély a háborúk során többször megrongálódott, de átfogó restaurálása után ma eredeti pompájában tündököl. A kastély és a körülötte elterülő angolpark ma UNESCO Világörökségi helyszín. Történelem K7 - Középkori várépítészet és nemesi rezidenciák.",
    "factsAdvanced": [
      "A kastély falai helyenként elérik a 3 méteres vastagságot, ami szinte áttörhetetlenné tette az ostromló seregek számára.",
      "A Miri várkastély 2000-ben került fel az UNESCO Világörökség listájára, kiemelkedő építészeti jelentősége miatt.",
      "A legenda szerint a várkastélyt egy titkos földalatti alagút köti össze a mintegy 30 kilométerre lévő nyeszvizsi kastéllyal.",
      "A kastély udvarán nyaranta történelmi fesztiválokat és középkori lovagi tornákat rendeznek."
    ]
  },
  "landmark-nesvizh-castle": {
    "descriptionAdvanced": "A nyeszvizsi kastély a befolyásos Radziwill dinasztia egykori székhelye, és a fehéroroszországi barokk építészet legszebb példája. A 16. században épült, de a későbbi évszázadok során többször kibővített rezidencia egy kiterjedt, mesterséges tavakkal és gyönyörű tájkertekkel díszített park közepén fekszik. A kastély belső terei lenyűgöző luxusról árulkodnak, gazdagon díszített csarnokokkal, aranyozott stukkókkal és hatalmas könyvtárral. A komplexumhoz tartozik a közeli Úrnapja-templom is, amely a térség első barokk stílusú épülete volt. A nyeszvizsi kastély nemcsak építészeti, hanem kulturális szempontból is kiemelkedő jelentőségű UNESCO Világörökségi helyszín. Művészet K8 - Barokk építészet és főúri udvarok.",
    "factsAdvanced": [
      "A Radziwill család könyvtára több mint 20 000 kötetet számlált, ezzel Európa egyik legnagyobb magángyűjteménye volt.",
      "A kastélykomplexumot körülölelő parkrendszer öt különböző stílusú kertből áll, több mint 90 hektáron elterülve.",
      "Az Úrnapja-templom alagsorában található a Radziwill család kriptája, amely Európa harmadik legnagyobb családi mauzóleuma.",
      "A kastély a 18. században saját udvari színházzal és Európa-hírű zenekarral rendelkezett."
    ]
  },
  "landmark-brest-fortress": {
    "descriptionAdvanced": "A Breszti erőd a szovjet ellenállás és a második világháborús önfeláldozás legfontosabb szimbóluma Fehéroroszországban. Az eredetileg a 19. században az Orosz Birodalom védelmére épült csillag alakú erődítmény a Nyugati-Bug és a Muhavec folyók találkozásánál fekszik. 1941 nyarán a kis létszámú szovjet helyőrség több mint egy hónapig tartott ki a német csapatok ostroma ellen, messze túlszárnyalva minden várakozást. Ma a romok között egy gigantikus, sziklából faragott katona feje és egy hatalmas csillag alakú bejárat állít emléket a védőknek. Az emlékhely évente több százezer látogatót fogad, akik tiszteletüket teszik a hősök előtt. Történelem K8 - A második világháború és az emlékezetkultúra.",
    "factsAdvanced": [
      "A 'Bátorság' nevű központi emlékmű egy több mint 30 méter magas, kőből faragott katonafejet ábrázol.",
      "A védők egyik utolsó, falba vésett üzenete így szólt: 'Meghalok, de nem adom meg magam! Ég veled, Haza! 1941. július 20.'",
      "Az erődítmény eredetileg négy fő szigetből állt, amelyeket hidak és kapuk bonyolult rendszere kötött össze.",
      "Az emlékmű területén folyamatosan hallható egy szívverést imitáló hang, amely az áldozatokra emlékeztet."
    ]
  },
  "nature-belovezhskaya-pushcha": {
    "descriptionAdvanced": "A Belovezsszkaja Puscsa a kontinens utolsó és legnagyobb megmaradt síkvidéki őserdeje, amely egykor az egész európai síkságot borította. Ez a Lengyelország és Fehéroroszország határán átnyúló hatalmas terület az UNESCO Világörökség része, és páratlan biodiverzitással rendelkezik. Az erdő legismertebb lakója az európai bölény, a kontinens legnehezebb szárazföldi emlőse, amelyet itt sikerült megmenteni a kihalástól. A több száz éves tölgyek és fenyők között farkasok, hiúzok és számtalan ritka madárfaj is menedéket talál. A park nemcsak természeti, hanem történelmi szempontból is fontos, egykor a lengyel királyok és orosz cárok exkluzív vadászterülete volt. Biológia K7 - Őserdők ökoszisztémája és természetvédelem.",
    "factsAdvanced": [
      "A Belovezsszkaja Puscsában él a világ legnagyobb szabadon élő európai bölény populációja, mintegy 800 egyeddel.",
      "Az erdőben található 'Cár-tölgy' nevű fa több mint 600 éves és 43 méter magas.",
      "1991-ben az erdő fehérorosz oldalán, Viskuliban írták alá azt a megállapodást, amely feloszlatta a Szovjetuniót.",
      "A nemzeti park területén található a fehérorosz Télapó (Gyed Moroz) hivatalos rezidenciája is."
    ]
  },
  "nature-braslav-lakes": {
    "descriptionAdvanced": "A Braszlavi-tavak Nemzeti Park Fehéroroszország északnyugati részén egy lenyűgöző, jégkorszak által formált tóvidék. A területet mintegy 300, csatornákkal és folyókkal összekötött kristálytiszta tó alkotja, amelyeket fenyvesekkel borított dombok vesznek körül. A park nemcsak a vízisportok szerelmeseinek és a horgászoknak nyújt paradicsomi környezetet, hanem egyedülálló élőhelyet biztosít számos ritka állat- és növényfaj számára is. A kanyargós partvonalak, az apró szigetek és az érintetlen természet nyugodt, festői tájat hoznak létre. A régió falvaiban máig őrzik a hagyományos népi építészetet és a helyi legendákat. Földrajz K7 - Jégkorszaki felszínformák és tórendszerek.",
    "factsAdvanced": [
      "A Braszlavi-tavak rendszerét az utolsó jégkorszak gleccserei alakították ki mintegy 10 000 évvel ezelőtt.",
      "A park legnagyobb tava, a Drivjaty-tó közepén hat apró, lakatlan sziget található.",
      "A területen több mint 30 ritka, a fehérorosz Vörös Könyvben szereplő halfaj él.",
      "A nemzeti park területén található a 'Május 1.' hegy, ahonnan panorámás kilátás nyílik több nagy tóra egyszerre."
    ]
  },
  "nature-lake-narach": {
    "descriptionAdvanced": "A Narocs-tó Fehéroroszország legnagyobb tava, amelyet gyakran a 'fehérorosz tengernek' is neveznek lenyűgöző kiterjedése miatt. A tó a Narocsanszkij Nemzeti Park központja, melyet homokos partok, fenyvesek és tiszta vizű források vesznek körül. Nyaranta a régió az ország legnépszerűbb üdülőhelyévé válik, számos szanatóriummal és gyógyfürdővel várva a pihenni vágyókat. A tó sekély parti vize ideális a családosok számára, míg mélyebb részei népszerűek a búvárok és vitorlázók körében. A park gazdag madárvilágnak is otthont ad, köztük számos költöző madárnak, amelyek itt pihennek meg hosszú útjuk során. Biológia K7 - Édesvízi ökoszisztémák és turizmus hatásai.",
    "factsAdvanced": [
      "A Narocs-tó felszíne majdnem 80 négyzetkilométer, de átlagos mélysége mindössze 9 méter.",
      "A tó vize annyira tiszta, hogy nyugodt időben akár 7 méter mélyre is le lehet látni.",
      "A tavat 17 különböző patak és kis folyó táplálja, de csak egyetlen folyó, a Narocs folyik ki belőle.",
      "A tó északi részén található a Nemzeti Park ökológiai oktatóközpontja."
    ]
  }
}
with open('seo_data_1.json', 'w', encoding='utf-8') as f:
    json.dump(content_dict, f, ensure_ascii=False, indent=2)
