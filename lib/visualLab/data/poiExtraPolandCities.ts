import type { POI } from "./poi";

export const poiExtraPolandCities: POI[] = [
  {
    id: "city-zielona-gora-extra",
    type: "city",
    parent: "PL-LB",
    coords: [15.5062, 51.9356],
    name: { de: "Grünberg in Schlesien", hu: "Zielona Góra", ro: "Zielona Góra", en: "Zielona Góra" },
    description: {
      de: "Bekannt für seine Weintradition, mit einem jährlichen Weinfest (Winobranie). Die Stadt ist ein wichtiges Kultur- und Bildungszentrum in der Woiwodschaft Lebus.",
      hu: "Híres borászati hagyományairól, évente megrendezik a Winobranie borfesztivált. A város a Lubusi vajdaság fontos kulturális és oktatási központja.",
      ro: "Cunoscut pentru tradiția sa vinicolă, cu un festival anual al vinului (Winobranie). Orașul este un centru cultural și educațional important în Voievodatul Lubusz.",
      en: "Known for its wine-making tradition, with an annual wine festival (Winobranie). The city is a major cultural and educational center in the Lubusz Voivodeship."
    },
    facts: {
      de: ["Größte Stadt in der Woiwodschaft Lebus.", "Jährliches Weinfest seit 1852.", "Palmhaus mit exotischen Pflanzen."],
      hu: ["A Lubusi vajdaság legnagyobb városa.", "Évenkénti borfesztivál 1852 óta.", "Pálmaház egzotikus növényekkel."],
      ro: ["Cel mai mare oraș din Voievodatul Lubusz.", "Festival anual al vinului din 1852.", "Sera de palmieri cu plante exotice."],
      en: ["Largest city in the Lubusz Voivodeship.", "Annual wine festival since 1852.", "Palm House with exotic plants."]
    },
    descriptionAdvanced: {
      hu: "Zielona Góra a lengyel borászat egyik legfontosabb történelmi fellegvára, amelynek gyökerei a 12. századig nyúlnak vissza. A Lubusi vajdaság kulturális szíveként a város nemcsak a híres Winobranie fesztiválnak ad otthont, hanem jelentős oktatási intézményekkel is büszkélkedhet. Földrajzi elhelyezkedése kedvező mikroklímát biztosít, ami ideális a szőlőtermesztéshez ezen az északi szélességen. Építészetében a középkori és a modern elemek harmonikus egységet alkotnak. (Földrajz K6 — Mezőgazdaság és mikroklíma)"
    },
    factsAdvanced: {
      hu: ["A borkészítés hagyománya több mint 800 éves a térségben.", "A helyi Pálmaház egy egykori borospince fölé épült.", "A Winobranie fesztivál idején a város kulcsait szimbolikusan Bacchusnak adják át."]
    }
  },
  {
    id: "city-gorzow-wielkopolski-extra",
    type: "city",
    parent: "PL-LB",
    coords: [15.228, 52.7367],
    name: { de: "Landsberg an der Warthe", hu: "Gorzów Wielkopolski", ro: "Gorzów Wielkopolski", en: "Gorzów Wielkopolski" },
    description: {
      de: "Eine der beiden Hauptstädte der Woiwodschaft Lebus, gelegen am Fluss Warthe. Die Stadt hat eine reiche Geschichte, die bis ins Mittelalter zurückreicht.",
      hu: "A Lubusi vajdaság két fővárosának egyike, a Warta folyó partján fekszik. A város gazdag történelme a középkorig nyúlik vissza.",
      ro: "Una dintre cele două capitale ale Voievodatului Lubusz, situată pe râul Warta. Orașul are o istorie bogată ce datează din Evul Mediu.",
      en: "One of the two capitals of the Lubusz Voivodeship, located on the Warta river. The city has a rich history dating back to the Middle Ages."
    },
    facts: {
      de: ["Geteilte Hauptstadtfunktion mit Zielona Góra.", "Wichtiger Binnenhafen.", "Kathedrale aus dem 13. Jahrhundert."],
      hu: ["Megosztott fővárosi szerep Zielona Górával.", "Fontos folyami kikötő.", "13. századi katedrális."],
      ro: ["Funcție de capitală împărțită cu Zielona Góra.", "Port fluvial important.", "Catedrală din secolul al XIII-lea."],
      en: ["Shared capital function with Zielona Góra.", "Important river port.", "13th-century cathedral."]
    },
    descriptionAdvanced: {
      hu: "Gorzów Wielkopolski a Warta folyó festői völgyében épült, jelentős történelmi múltra visszatekintő kereskedelmi csomópont. A középkori Landsberg an der Warthe néven alapított település gyorsan fejlődött a folyami hajózásnak köszönhetően. A városképet a 13. századi vöröstéglás Mária Mennybemenetele katedrális uralja, amely a régió legfontosabb gótikus műemléke. A II. világháború után a lengyel újraépítés egyik kulcsfontosságú ipari és adminisztratív központjává vált. (Történelem K7 — Középkori városfejlődés)"
    },
    factsAdvanced: {
      hu: ["A város legrégebbi épülete a 13. században emelt gótikus katedrális.", "Fontos vasúti és folyami csomópontként működött a 19. században.", "A II. világháború során a város történelmi központjának jelentős része elpusztult."]
    }
  },
  {
    id: "historical-fortress-krosno-odrzanskie-extra",
    type: "historical",
    parent: "PL-LB",
    coords: [15.0933, 52.0569],
    name: { de: "Festung Crossen an der Oder", hu: "Krosno Odrzańskie erőd", ro: "Cetatea Krosno Odrzańskie", en: "Krosno Odrzańskie Fortress" },
    description: {
      de: "Eine historische Festungsanlage, die eine strategische Rolle an der Oder spielte. Die Überreste der Burg der Piasten-Dynastie sind ein zentraler Punkt.",
      hu: "Történelmi erődítmény, amely stratégiai szerepet játszott az Odera mentén. A Piast-dinasztia várának maradványai központi látnivalót jelentenek.",
      ro: "O fortăreață istorică ce a jucat un rol strategic pe râul Oder. Rămășițele castelului dinastiei Piast sunt un punct central.",
      en: "A historical fortress that played a strategic role on the Oder river. The remains of the Piast dynasty castle are a central feature."
    },
    facts: {
      de: ["Strategische Lage an der Oder.", "Ursprünge im 10. Jahrhundert.", "Teil der schlesischen Verteidigungslinie."],
      hu: ["Stratégiai fekvés az Odera mentén.", "Eredete a 10. századra nyúlik vissza.", "A sziléziai védelmi vonal része volt."],
      ro: ["Poziție strategică pe râul Oder.", "Origini în secolul al X-lea.", "Parte a liniei de apărare sileziene."],
      en: ["Strategic location on the Oder river.", "Origins in the 10th century.", "Part of the Silesian defense line."]
    },
    descriptionAdvanced: {
      hu: "A Krosno Odrzańskie erőd évszázadokon át kulcsfontosságú védelmi pont volt az Odera folyó mentén, védve a nyugati határokat. A Piast-dinasztia által emelt vár nemcsak katonai, hanem jelentős adminisztratív funkciót is betöltött Szilézia történelmében. A 15. században a térség politikai központjaként funkcionált, és falai között fontos diplomáciai találkozók zajlottak. Mára a romok értékes régészeti lelőhelyet és turisztikai látványosságot jelentenek. (Történelem K6 — Középkori várrendszerek és védelem)"
    },
    factsAdvanced: {
      hu: ["I (Szakállas) Henrik lengyel fejedelem itt hunyt el 1238-ban.", "Az erőd az 1476-os krosnói csata központi helyszíne volt.", "A svéd és porosz csapatok is elfoglalták a harmincéves háború során."]
    }
  },
  {
    id: "nature-muskauer-park-extra",
    type: "nature",
    parent: "PL-LB",
    coords: [14.732, 51.547],
    name: { de: "Muskauer Park", hu: "Muskaui park", ro: "Parcul Muskau", en: "Muskauer Park" },
    description: {
      de: "Ein weitläufiger Landschaftspark, der sich über die deutsch-polnische Grenze erstreckt. Er ist ein UNESCO-Welterbe und eines der größten Beispiele für englische Landschaftsgärten in Europa.",
      hu: "Hatalmas tájképi park, amely a német-lengyel határon terül el. Az UNESCO Világörökség része, és az angol tájkertek egyik legnagyobb európai példája.",
      ro: "Un vast parc peisagistic care se întinde peste granița germano-polonă. Este un sit al Patrimoniului Mondial UNESCO și unul dintre cele mai mari exemple de grădini peisagistice englezești din Europa.",
      en: "A vast landscape park stretching across the German-Polish border. It is a UNESCO World Heritage site and one of the largest examples of English landscape gardens in Europe."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 2004.", "Entworfen von Hermann von Pückler-Muskau.", "Geteilt durch den Fluss Neiße."],
      hu: ["UNESCO Világörökség része 2004 óta.", "Tervezte Hermann von Pückler-Muskau.", "A Neisse folyó osztja ketté."],
      ro: ["Patrimoniu Mondial UNESCO din 2004.", "Proiectat de Hermann von Pückler-Muskau.", "Împărțit de râul Neisse."],
      en: ["UNESCO World Heritage site since 2004.", "Designed by Hermann von Pückler-Muskau.", "Divided by the Neisse river."]
    },
    descriptionAdvanced: {
      hu: "A Muskaui park a 19. századi európai tájépítészet egyik legkiemelkedőbb alkotása, amelyet Hermann von Pückler-Muskau herceg álmodott meg. A Neisse folyó által kettészelt birtok határon átnyúló fekvése miatt egyedülálló szimbóluma a német-lengyel kulturális örökségnek. A több mint 830 hektáros terület aprólékosan tervezett kilátópontokat, mesterséges tavakat és ritka növényfajokat rejt. 2004-es UNESCO világörökségi listára kerülése mérföldkő volt a két ország közös műemlékvédelmi munkájában. (Művészettörténet K8 — 19. századi tájépítészet)"
    },
    factsAdvanced: {
      hu: ["A park teljes területe eléri a 830 hektárt.", "Pückler-Muskau herceg majdnem csődbe ment a hatalmas tájkert megépítése miatt.", "A II. világháború után a park keleti része lengyel, nyugati része német területre került."]
    }
  },
  {
    id: "city-elblag-extra",
    type: "city",
    parent: "PL-WN",
    coords: [19.4056, 54.1561],
    name: { de: "Elbing", hu: "Elbląg", ro: "Elbląg", en: "Elbląg" },
    description: {
      de: "Eine historische Hansestadt mit Zugang zur Ostsee über das Frische Haff. Die wiederaufgebaute Altstadt ist eine Touristenattraktion.",
      hu: "Történelmi Hanza-város, amely a Visztula-öbölön keresztül éri el a Balti-tengert. Az újjáépített óváros turisztikai látványosság.",
      ro: "Un oraș hanseatic istoric cu acces la Marea Baltică prin Laguna Vistulei. Centrul Vechi reconstruit este o atracție turistică.",
      en: "A historic Hanseatic city with access to the Baltic Sea via the Vistula Lagoon. The reconstructed Old Town is a tourist attraction."
    },
    facts: {
      de: ["Wichtiger Hafen am Frischen Haff.", "Gegründet von den Rittern des Deutschen Ordens.", "Die Altstadt wurde nach dem Krieg wiederaufgebaut."],
      hu: ["Fontos kikötő a Visztula-öbölben.", "A Német Lovagrend alapította.", "Az óvárost a háború után újjáépítették."],
      ro: ["Port important la Laguna Vistulei.", "Fondat de Cavalerii Teutoni.", "Centrul Vechi a fost reconstruit după război."],
      en: ["Important port on the Vistula Lagoon.", "Founded by the Teutonic Knights.", "The Old Town was rebuilt after the war."]
    },
    descriptionAdvanced: {
      hu: "Elbląg a középkori Hanza-szövetség egyik legjelentősebb kelet-európai kikötővárosa volt, stratégiai fekvéssel a Visztula-öböl partján. A Német Lovagrend által 1237-ben alapított település a borostyán- és faterkedelem révén hihetetlen gazdagságra tett szert. Az óváros a II. világháború pusztításai után egy egyedülálló, retroverziós eljárással épült újjá, amely ötvözi a történelmi alaprajzot a modern építészeti megoldásokkal. A város ma is kulcsszerepet játszik a balti-tengeri hajózásban a nemrég megépült Visztula-turzás csatornának köszönhetően. (Történelem K7 — A Hanza-szövetség kereskedelme)"
    },
    factsAdvanced: {
      hu: ["A 14. században Gdansk mellett a régió legforgalmasabb kikötője volt.", "Az óvárost a világ egyik legnagyobb retroverziós projektje keretében építik újjá.", "Az Elbląg-csatorna a világ egyik ritka, vízi rámpákkal működő műszaki emléke."]
    }
  },
  {
    id: "historical-wolfsschanze-extra",
    type: "historical",
    parent: "PL-WN",
    coords: [21.493, 54.079],
    name: { de: "Wolfsschanze", hu: "Farkasverem", ro: "Bârlogul Lupului", en: "Wolf's Lair" },
    description: {
      de: "Adolf Hitlers Hauptquartier an der Ostfront während des Zweiten Weltkriegs. Hier fand das gescheiterte Attentat vom 20. Juli 1944 statt.",
      hu: "Adolf Hitler főhadiszállása volt a keleti fronton a második világháború alatt. Itt került sor a sikertelen 1944. július 20-i merényletre.",
      ro: "Cartierul general al lui Adolf Hitler pe Frontul de Est în timpul celui de-al Doilea Război Mondial. Aici a avut loc tentativa de asasinat eșuată din 20 iulie 1944.",
      en: "Adolf Hitler's headquarters on the Eastern Front during World War II. The failed assassination attempt of 20 July 1944 took place here."
    },
    facts: {
      de: ["Hitlers Hauptquartier 1941-1944.", "Ort des Stauffenberg-Attentats.", "Massive Bunkeranlagen im Wald versteckt."],
      hu: ["Hitler főhadiszállása 1941-1944.", "A Stauffenberg-merénylet helyszíne.", "Hatalmas bunkerrendszer az erdőben elrejtve."],
      ro: ["Cartierul general al lui Hitler 1941-1944.", "Locul atentatului lui Stauffenberg.", "Buncăre masive ascunse în pădure."],
      en: ["Hitler's headquarters 1941-1944.", "Site of the Stauffenberg assassination attempt.", "Massive bunkers hidden in the forest."]
    },
    descriptionAdvanced: {
      hu: "A Farkasverem (Wolfsschanze) a náci Németország keleti frontjának legfőbb katonai irányítóközpontjaként működött 1941 és 1944 között. A masúriai erdők mélyén, több mint 200 hektáron elterülő szigorúan titkos komplexum hatalmas vasbeton bunkereket és kiterjedt logisztikai infrastruktúrát foglalt magába. Claus von Stauffenberg gróf itt kísérelt meg merényletet Adolf Hitler ellen 1944. július 20-án, amelynek kudarca tragikus következményekkel járt a német ellenállásra nézve. A visszavonuló német csapatok a létesítmény nagy részét felrobbantották, ám a hatalmas betonmonstrumok ma is mementóként állnak. (Történelem K8 — A második világháború eseményei)"
    },
    factsAdvanced: {
      hu: ["A bunkerek falainak vastagsága helyenként elérte a 8 métert.", "Több mint 2000 ember szolgált a komplexumban annak fénykorában.", "A Vörös Hadsereg közeledtekor, 1945 januárjában a németek felrobbantották a támaszpontot."]
    }
  },
  {
    id: "lake-sniardwy-extra",
    type: "lake",
    parent: "PL-WN",
    coords: [21.722, 53.74],
    name: { de: "Spirdingsee", hu: "Śniardwy-tó", ro: "Lacul Śniardwy", en: "Śniardwy Lake" },
    description: {
      de: "Der größte See Polens, Teil der Masurischen Seenplatte. Ein beliebtes Ziel für Segler und Wassersportler.",
      hu: "Lengyelország legnagyobb tava, a Mazuri-tóhátság része. Kedvelt célpont a vitorlázók és a vízi sportok szerelmesei számára.",
      ro: "Cel mai mare lac din Polonia, parte a Districtului Lacurilor Mazuriene. O destinație populară pentru marinari și pasionații de sporturi nautice.",
      en: "The largest lake in Poland, part of the Masurian Lake District. A popular destination for sailors and water sports enthusiasts."
    },
    facts: {
      de: ["Größter See Polens (113,8 km²).", "Maximale Tiefe von 23 Metern.", "Teil der Großen Masurischen Seen."],
      hu: ["Lengyelország legnagyobb tava (113,8 km²).", "Maximális mélysége 23 méter.", "A Nagy-Mazuri-tavak része."],
      ro: ["Cel mai mare lac din Polonia (113,8 km²).", "Adâncime maximă de 23 de metri.", "Parte a Marilor Lacuri Mazuriene."],
      en: ["Largest lake in Poland (113.8 km²).", "Maximum depth of 23 meters.", "Part of the Great Masurian Lakes."]
    },
    descriptionAdvanced: {
      hu: "A Śniardwy-tó, Lengyelország legnagyobb állóvize, a Mazuri-tóhátság páratlan természeti gyöngyszeme. Több mint 113 négyzetkilométeres kiterjedése miatt gyakran nevezik masúriai tengernek is, partvonalát jégkorszaki morénák és sűrű fenyőerdők tagolják. A tó egy kiterjedt, hajózható csatornarendszer központja, amely összeköti a környező kisebb tavakat, így a vízi turizmus fellegvára. Gazdag halállománya és a part menti nádasokban fészkelő ritka madárfajok miatt kiemelt ökológiai jelentőséggel bír. (Földrajz K6 — Glaciális tórendszerek)"
    },
    factsAdvanced: {
      hu: ["Nyolc sziget is található a tó vizén, köztük a legnagyobb a Pajęcza.", "Erős szeleiről ismert, amelyek akár 2 méteres hullámokat is korbácsolhatnak.", "A tó jégkorszaki eredetű, mintegy 12 000 évvel ezelőtt alakult ki a visszahúzódó jégtakaró nyomán."]
    }
  },
  {
    id: "city-przemysl-extra",
    type: "city",
    parent: "PL-PK",
    coords: [22.7669, 49.785],
    name: { de: "Przemyśl", hu: "Przemyśl", ro: "Przemyśl", en: "Przemyśl" },
    description: {
      de: "Eine der ältesten Städte Südpolens mit einer reichen und multikulturellen Geschichte. Die Festung Przemyśl war im Ersten Weltkrieg von großer Bedeutung.",
      hu: "Dél-Lengyelország egyik legrégebbi városa, gazdag és multikulturális történelemmel. A Przemyśl-erőd nagy jelentőséggel bírt az első világháborúban.",
      ro: "Unul dintre cele mai vechi orașe din sudul Poloniei, cu o istorie bogată și multiculturală. Fortăreața Przemyśl a avut o mare importanță în Primul Război Mondial.",
      en: "One of the oldest cities in southern Poland, with a rich and multicultural history. The Przemyśl Fortress was of great importance in World War I."
    },
    facts: {
      de: ["Über tausendjährige Geschichte.", "Wichtige Festung im Ersten Weltkrieg.", "Lage nahe der ukrainischen Grenze."],
      hu: ["Több mint ezeréves történelem.", "Fontos erőd az első világháborúban.", "Az ukrán határ közelében fekszik."],
      ro: ["Istorie de peste o mie de ani.", "Fortăreață importantă în Primul Război Mondial.", "Situat lângă granița cu Ucraina."],
      en: ["Over a thousand years of history.", "Important fortress in World War I.", "Located near the Ukrainian border."]
    },
    descriptionAdvanced: {
      hu: "Przemyśl a lengyel-ukrán határvidék egyik legrégebbi és legfontosabb történelmi csomópontja, amely a San folyó partján épült. A 19. század végén az Osztrák-Magyar Monarchia harmadik legnagyobb erődválosává fejlesztették, amely az első világháború során kulcsfontosságú, hónapokig tartó ostromok helyszíne volt. A város gazdag építészeti öröksége hűen tükrözi a régió multikulturális múltját, ahol katolikus, ortodox és zsidó közösségek éltek együtt évszázadokon át. A meredek utcák és a reneszánsz piactér egyedülálló hangulatot kölcsönöznek a galíciai településnek. (Történelem K8 — Az első világháború erődrendszerei)"
    },
    factsAdvanced: {
      hu: ["A Przemyśl-erőd külső védelmi vonala 45 kilométer hosszú volt.", "Az orosz csapatok az első világháborúban 133 napig ostromolták az erődrendszert.", "A városban található Európa egyik legmeredekebb macskaköves piactere."]
    }
  },
  {
    id: "nature-bieszczady-mountains-extra",
    type: "mountain",
    parent: "PL-PK",
    coords: [22.6, 49.2],
    name: { de: "Bieszczady-Gebirge", hu: "Bieszczady-hegység", ro: "Munții Bieszczady", en: "Bieszczady Mountains" },
    description: {
      de: "Ein wildes und dünn besiedeltes Gebirge im äußersten Südosten Polens. Bekannt für seine einzigartigen Bergwiesen (poloniny) und reiche Tierwelt.",
      hu: "Vad és gyéren lakott hegyvidék Lengyelország legdélkeletibb részén. Egyedülálló hegyi rétjeiről (poloniny) és gazdag vadvilágáról ismert.",
      ro: "Un lanț montan sălbatic și slab populat în sud-estul extrem al Poloniei. Cunoscut pentru pajiștile sale montane unice (poloniny) și fauna bogată.",
      en: "A wild and sparsely populated mountain range in the far southeast of Poland. Known for its unique mountain meadows (poloniny) and rich wildlife."
    },
    facts: {
      de: ["Teil der Ostkarpaten.", "Heimat von Bären, Wölfen und Bisons.", "Die Bergwiesen werden 'Poloniny' genannt."],
      hu: ["A Keleti-Kárpátok része.", "Medvék, farkasok és bölények otthona.", "A hegyi réteket 'Poloniny'-nek hívják."],
      ro: ["Parte a Carpaților Orientali.", "Adăpostește urși, lupi și bizoni.", "Pajiștile montane sunt numite 'Poloniny'."],
      en: ["Part of the Eastern Carpathians.", "Home to bears, wolves, and bison.", "The mountain meadows are called 'Poloniny'."]
    },
    descriptionAdvanced: {
      hu: "A Bieszczady-hegység Lengyelország legelzártabb és legvadabb hegyvidéke, amely a Keleti-Kárpátok nyugati bástyáját képezi. A terület védjegyei a fahatár felett elterülő, alpesi jellegű füves rétek, a poloninák, amelyek páratlan panorámát kínálnak. A második világháború utáni kitelepítések következtében a régió szinte teljesen elnéptelenedett, ami lehetővé tette az ősi erdőségek és a gazdag vadvilág, köztük a barnamedvék, farkasok és bölények háborítatlan visszatérését. Mára az ökoturizmus és a fenntartható túrázás egyik legnépszerűbb európai célpontjává vált. (Földrajz K7 — A Kárpátok természeti földrajza)"
    },
    factsAdvanced: {
      hu: ["A hegység legmagasabb lengyelországi csúcsa a Tarnica, 1346 méteres tengerszint feletti magassággal.", "A terület az Európai Bölény egyik legfontosabb természetes élőhelye Közép-Európában.", "A Bieszczady Nemzeti Park 1992 óta az UNESCO Keleti-Kárpátok Bioszféra Rezervátumának része."]
    }
  },
  {
    id: "monastery-holy-cross-extra",
    type: "monastery",
    parent: "PL-SK",
    coords: [21.055, 50.86],
    name: { de: "Kloster Heiligkreuz", hu: "Szent Kereszt-kolostor", ro: "Mănăstirea Sfânta Cruce", en: "Holy Cross Monastery" },
    description: {
      de: "Ein historisches Benediktinerkloster auf dem Berg Łysa Góra. Es bewahrte einst ein Fragment des Wahren Kreuzes und war ein wichtiges Pilgerziel.",
      hu: "Történelmi bencés kolostor a Łysa Góra hegyen. Egykor az Igaz Kereszt egy darabját őrizte, és fontos zarándokhely volt.",
      ro: "O mănăstire benedictină istorică pe muntele Łysa Góra. Odinioară adăpostea un fragment din Sfânta Cruce și era un important centru de pelerinaj.",
      en: "A historic Benedictine monastery on Łysa Góra mountain. It once housed a fragment of the True Cross and was a major pilgrimage site."
    },
    facts: {
      de: ["Auf dem Berg Łysa Góra gelegen.", "Gegründet im 11. Jahrhundert.", "Aufbewahrungsort einer Reliquie des Heiligen Kreuzes."],
      hu: ["A Łysa Góra hegyen található.", "A 11. században alapították.", "A Szent Kereszt ereklyéjének őrzési helye."],
      ro: ["Situată pe muntele Łysa Góra.", "Fondată în secolul al XI-lea.", "Loc de păstrare a unei relicve a Sfintei Cruci."],
      en: ["Located on Łysa Góra mountain.", "Founded in the 11th century.", "Housed a relic of the Holy Cross."]
    },
    descriptionAdvanced: {
      hu: "A Szent Kereszt-kolostor a Świętokrzyskie (Szentkereszt) hegység névadójaként Lengyelország egyik legrégebbi egyházi központja. A 11. században alapított bencés apátság évszázadokon át a lengyel királyok egyik legfontosabb zarándokhelye volt, köszönhetően az itt őrzött Szent Kereszt-ereklyének. Az épületegyüttes a Łysa Góra (Kopasz-hegy) csúcsán magasodik, amely a kereszténység felvétele előtt egy ősi pogány kultikus központ helyszíne volt. A kolostor falai egykor az ország legnagyobb könyvtárát rejtették, amelynek értékes kódexei ma is a lengyel kulturális örökség részét képezik. (Történelem K6 — Középkori kolostori kultúra)"
    },
    factsAdvanced: {
      hu: ["A legenda szerint a Szent Kereszt ereklyét Szent Imre magyar herceg adományozta a kolostornak.", "A hegy csúcsán ma is láthatók egy kora középkori kősánc maradványai.", "A II. világháború alatt a kolostor épülete szovjet hadifoglyok táboraként szolgált."]
    }
  },
  {
    id: "landmark-krzyztopor-castle-extra",
    type: "castle",
    parent: "PL-SK",
    coords: [21.408, 50.713],
    name: { de: "Schloss Krzyżtopór", hu: "Krzyżtopór kastély", ro: "Castelul Krzyżtopór", en: "Krzyżtopór Castle" },
    description: {
      de: "Eine einzigartige Festungsruine, entworfen als befestigter Kalender. Das Schloss hatte 365 Fenster, 52 Räume, 12 Säle und 4 Türme.",
      hu: "Egyedülálló erődrom, amelyet erődített naptárnak terveztek. A kastélynak 365 ablaka, 52 szobája, 12 terme és 4 tornya volt.",
      ro: "O ruină unică de fortăreață, proiectată ca un calendar fortificat. Castelul avea 365 de ferestre, 52 de camere, 12 săli și 4 turnuri.",
      en: "A unique fortress ruin designed as a fortified calendar. The castle had 365 windows, 52 rooms, 12 halls, and 4 towers."
    },
    facts: {
      de: ["Symbolik basiert auf dem Kalender.", "Erbaut im 17. Jahrhundert, schnell zerstört.", "Eine 'palazzo in fortezza'-Struktur."],
      hu: ["Szimbolikája a naptáron alapul.", "A 17. században épült, gyorsan elpusztult.", "Egy 'palazzo in fortezza' szerkezet."],
      ro: ["Simbolism bazat pe calendar.", "Construit în secolul al XVII-lea, distrus rapid.", "O structură 'palazzo in fortezza'."],
      en: ["Symbolism based on the calendar.", "Built in the 17th century, quickly destroyed.", "A 'palazzo in fortezza' structure."]
    },
    descriptionAdvanced: {
      hu: "A Krzyżtopór kastély a 17. századi lengyel manierista építészet egyik legelképesztőbb, bár tragikus sorsú alkotása. Krzysztof Ossoliński vajda elképzelései alapján egy gigantikus naptárként tervezték: 365 ablaka, 52 szobája, 12 terme és 4 tornya az év napjait, heteit, hónapjait és az évszakokat szimbolizálta. Bár korának egyik legpompásabb palotája volt hatalmas üvegtetős akváriummal, az 1650-es évek svéd inváziója során teljesen kifosztották és romba döntötték. Monumentális, csillag alakú alaprajza és megmaradt falai ma is ámulatba ejtik a látogatókat. (Művészettörténet K8 — Manierista és barokk építészet)"
    },
    factsAdvanced: {
      hu: ["Az építkezés 13 évig tartott, de a tulajdonos mindössze egy évig élvezhette az elkészült palotát.", "A pletykák szerint a lovak jászolait is carrarai márványból faragták.", "A versailles-i kastély felépítéséig ez volt Európa legnagyobb kastélykomplexuma."]
    }
  },
  {
    id: "kid-landmark-jurapark-baltow-extra",
    type: "kid-landmark",
    parent: "PL-SK",
    coords: [21.5439, 51.0203],
    name: { de: "JuraPark Bałtów", hu: "JuraPark Bałtów", ro: "JuraPark Bałtów", en: "JuraPark Bałtów" },
    description: {
      de: "Polens erster Dinosaurierpark mit lebensgroßen Modellen und einem großen Freizeitkomplex. Ein beliebtes Ziel für Familien.",
      hu: "Lengyelország első dinoszauruszparkja életnagyságú modellekkel és egy nagy szabadidőkomplexummal. Kedvelt célpont a családok számára.",
      ro: "Primul parc de dinozauri din Polonia, cu modele în mărime naturală și un complex mare de agrement. O destinație populară pentru familii.",
      en: "Poland's first dinosaur park, with life-sized models and a large leisure complex. A popular destination for families."
    },
    facts: {
      de: ["Erster Dinosaurierpark in Polen.", "Bietet auch einen Zoo und einen Vergnügungspark.", "Echte Dinosaurierspuren in der Nähe gefunden."],
      hu: ["Az első dinoszauruszpark Lengyelországban.", "Állatkert és vidámpark is tartozik hozzá.", "Valódi dinoszaurusz-lábnyomokat találtak a közelben."],
      ro: ["Primul parc de dinozauri din Polonia.", "Include și o grădină zoologică și un parc de distracții.", "Urme reale de dinozaur găsite în apropiere."],
      en: ["First dinosaur park in Poland.", "Also features a zoo and an amusement park.", "Real dinosaur tracks found nearby."]
    },
    descriptionAdvanced: {
      hu: "A JuraPark Bałtów Lengyelország első és egyik legnagyobb őslénytani élményparkja, amely a Kamienna folyó mészkővölgyében kapott helyet. A park ötlete azt követően született, hogy helyi geológusok valódi dinoszaurusz lábnyomokat fedeztek fel a környező sziklákban. Több mint száz életnagyságú, tudományos precizitással megalkotott dinoszauruszmodell mutatja be a mezozoikum élővilágát az ide látogatóknak. Az oktatási ösvények és a múzeumi részleg kiválóan szemléltetik a Föld történetének evolúciós folyamatait. (Biológia K5 — A dinoszauruszok kora és ősmaradványok)"
    },
    factsAdvanced: {
      hu: ["A parkot 2004-ben nyitották meg a nagyközönség számára.", "Egy igazi alloszaurusz lábnyom szolgált a park megépítésének tudományos alapjául.", "A komplexumhoz egy szafaripark és egy ősállatokat bemutató ócenárium is tartozik."]
    }
  },
  {
    id: "mountain-gora-swietej-anny-extra",
    type: "mountain",
    parent: "PL-OP",
    coords: [18.169, 50.457],
    name: { de: "St. Annaberg", hu: "Szent Anna-hegy", ro: "Muntele Sfânta Ana", en: "Góra Świętej Anny" },
    description: {
      de: "Ein Hügel und Wallfahrtsort mit einem Franziskanerkloster. Der Ort war auch Schauplatz einer wichtigen Schlacht während der schlesischen Aufstände.",
      hu: "Egy domb és zarándokhely ferences kolostorral. A hely egy fontos csata helyszíne is volt a sziléziai felkelések során.",
      ro: "Un deal și un loc de pelerinaj cu o mănăstire franciscană. Locul a fost și scena unei bătălii importante în timpul revoltelor sileziene.",
      en: "A hill and pilgrimage site with a Franciscan monastery. The site was also the scene of a major battle during the Silesian Uprisings."
    },
    facts: {
      de: ["Wichtiger katholischer Wallfahrtsort.", "Schauplatz der Schlacht am Annaberg 1921.", "Geopark mit vulkanischem Ursprung."],
      hu: ["Fontos katolikus zarándokhely.", "Az 1921-es Annabergi csata helyszíne.", "Vulkáni eredetű geopark."],
      ro: ["Important loc de pelerinaj catolic.", "Scena bătăliei de la Annaberg din 1921.", "Geoparc de origine vulcanică."],
      en: ["Important Catholic pilgrimage site.", "Scene of the 1921 Battle of Annaberg.", "Geopark of volcanic origin."]
    },
    descriptionAdvanced: {
      hu: "A Szent Anna-hegy egy egykori kialudt vulkán kúpja, amely Szilézia történelmi, geológiai és kulturális csomópontjává vált az évszázadok során. A hegy tetején magasló 15. századi ferences kolostor és a több mint harminc kápolnából álló kálvária Lengyelország egyik legjelentősebb zarándokhelye. A terület geológiai jelentősége is kiemelkedő, amit a helyi geopark kőzetrétegei és egykori lávafolyásai bizonyítanak. 1921-ben a harmadik sziléziai felkelés sorsdöntő csatájának színhelye volt, melynek emlékét ma egy monumentális gránit emlékmű őrzi. (Földrajz K8 — Vulkáni formák és geológiai emlékezet)"
    },
    factsAdvanced: {
      hu: ["A hegycsúcs mindössze 408 méter magas, de uralja a környező síkvidéket.", "A vulkáni tevékenység mintegy 27 millió évvel ezelőtt zajlott ezen a területen.", "Az 1930-as években a hegy oldalában egy hatalmas kőamfiteátrumot építettek, amely 80 ezer ember befogadására alkalmas."]
    }
  },
  {
    id: "historical-moszna-castle-extra",
    type: "castle",
    parent: "PL-OP",
    coords: [17.771, 50.439],
    name: { de: "Schloss Moschen", hu: "Mosznai kastély", ro: "Castelul Moszna", en: "Moszna Castle" },
    description: {
      de: "Ein märchenhaftes Schloss mit 99 Türmen und 365 Zimmern. Es ist ein vielseitiges Gebäude, das oft als eines der schönsten Schlösser Polens bezeichnet wird.",
      hu: "Mesebeli kastély 99 toronnyal és 365 szobával. Sokoldalú épület, amelyet gyakran Lengyelország egyik legszebb kastélyának neveznek.",
      ro: "Un castel de basm cu 99 de turnuri și 365 de camere. Este o clădire eclectică, adesea numită unul dintre cele mai frumoase castele din Polonia.",
      en: "A fairy-tale castle with 99 towers and 365 rooms. It is an eclectic building, often called one of the most beautiful castles in Poland."
    },
    facts: {
      de: ["Bekannt für seine 99 Türme.", "Mischung aus Barock-, Neugotik- und Neorenaissance-Stilen.", "Ehemalige Residenz der Familie von Tiele-Winckler."],
      hu: ["Híres a 99 tornyáról.", "Barokk, neogótikus és neoreneszánsz stílusok keveréke.", "A von Tiele-Winckler család egykori rezidenciája."],
      ro: ["Renumit pentru cele 99 de turnuri ale sale.", "Amestec de stiluri baroc, neogotic și neorenascentist.", "Fosta reședință a familiei von Tiele-Winckler."],
      en: ["Famous for its 99 towers.", "Mix of Baroque, Neo-Gothic, and Neo-Renaissance styles.", "Former residence of the von Tiele-Winckler family."]
    },
    descriptionAdvanced: {
      hu: "A Mosznai kastély egy valóságos építészeti mesevirág, amely stílusok lenyűgöző és eklektikus keveredésével emelkedik ki a lengyel műemlékek közül. A Tiele-Winckler iparmágnás család egykori rezidenciája a barokk, a neogótika és a neoreneszánsz elemeit ötvözi egyetlen monumentális épületben. Az épület híres 99 tornyáról és 365 helyiségéről, amelyeket kiterjedt angolpark és évszázados tölgyfák vesznek körül. A második világháború után évtizedekig szanatóriumként funkcionált, ma pedig luxusszállodaként és kulturális központként várja a látogatókat. (Művészettörténet K7 — 19. századi historizáló építészet)"
    },
    factsAdvanced: {
      hu: ["A kastély középső, barokk szárnya az 1896-os nagy tűzvész után épült újjá.", "A legenda szerint az építtető azért terveztetett pontosan 99 tornyot, hogy elkerülje a magasabb adókat.", "A parkban található azúrkék vizű medencék egykor a család lovainak fürdetésére szolgáltak."]
    }
  },
  {
    id: "agriculture-ciechocinek-extra",
    type: "agriculture",
    parent: "PL-KP",
    coords: [18.783, 52.883],
    name: { de: "Ciechocinek Gradierwerke", hu: "Ciechocineki sólepárlók", ro: "Salinele din Ciechocinek", en: "Ciechocinek Graduation Towers" },
    description: {
      de: "Ein berühmter Kurort, der für seine drei massiven hölzernen Gradierwerke bekannt ist. Diese Strukturen erzeugen ein heilendes Mikroklima, das reich an Jod ist.",
      hu: "Híres gyógyüdülőhely, amely három hatalmas, fából készült sólepárló tornyáról ismert. Ezek a szerkezetek gyógyító, jódban gazdag mikroklímát hoznak létre.",
      ro: "O renumită stațiune balneară, cunoscută pentru cele trei turnuri masive de gradare din lemn. Aceste structuri creează un microclimat curativ bogat în iod.",
      en: "A famous spa town known for its three massive wooden graduation towers. These structures create a therapeutic, iodine-rich microclimate."
    },
    facts: {
      de: ["Größte Gradierwerke in Europa.", "Kurort seit dem 19. Jahrhundert.", "Die Sole wird zur Salzgewinnung und für Inhalationen verwendet."],
      hu: ["Európa legnagyobb sólepárló tornyai.", "Gyógyüdülőhely a 19. század óta.", "A sós vizet sókitermelésre és inhalálásra használják."],
      ro: ["Cele mai mari turnuri de gradare din Europa.", "Stațiune balneară din secolul al XIX-lea.", "Saramura este folosită pentru extracția sării și pentru inhalații."],
      en: ["Largest graduation towers in Europe.", "Spa town since the 19th century.", "Brine is used for salt extraction and inhalations."]
    },
    descriptionAdvanced: {
      hu: "Ciechocinek Lengyelország leghíresebb gyógyító alföldi fürdővárosa, amely egyedülálló, 19. századi fa sólepárlóiról vált ismertté világszerte. A több mint másfél kilométer hosszan elnyúló, sűrű kökénygallyakkal bélelt építmények tetejéről sós víz csorog le, páratlan jódban és brómban gazdag mikroklímát hozva létre. Ezek a szerkezetek eredetileg ipari sótermelési célokat szolgáltak, de hamar felismerték a sós levegő légúti betegségekre gyakorolt gyógyító hatását. A város lenyűgöző virágágyásai, elegáns sétányai és történelmi fürdőépületei a 19. századi európai elit kedvelt pihenőhelyévé tették. (Biológia K7 — Gyógyító mikroklíma és légzőszervek)"
    },
    factsAdvanced: {
      hu: ["A város három sólepárlója a legnagyobb ilyen jellegű faszerkezet egész Európában.", "A sólepárlók építését 1824-ben kezdték meg Stanisław Staszic kezdeményezésére.", "Évente több mint egy kilométernyi kökénygallyat kell cserélni a szerkezetek karbantartása során."]
    }
  },
  {
    id: "landmark-biskupin-extra",
    type: "historical",
    parent: "PL-KP",
    coords: [17.741, 52.783],
    name: { de: "Biskupin", hu: "Biskupin", ro: "Biskupin", en: "Biskupin" },
    description: {
      de: "Eine rekonstruierte befestigte Siedlung aus der Eisenzeit der Lausitzer Kultur. Es ist eines der wichtigsten archäologischen Reservate in Polen.",
      hu: "A lausitzi kultúra vaskori erődített településének rekonstrukciója. Lengyelország egyik legfontosabb régészeti rezervátuma.",
      ro: "O așezare fortificată reconstruită din Epoca Fierului, aparținând culturii lusaciane. Este una dintre cele mai importante rezervații arheologice din Polonia.",
      en: "A reconstructed fortified settlement from the Iron Age Lusatian culture. It is one of the most important archaeological reserves in Poland."
    },
    facts: {
      de: ["Siedlung aus dem 8. Jahrhundert v. Chr.", "Auf einer Halbinsel in einem See erbaut.", "Lebensgroße Rekonstruktion."],
      hu: ["Kr. e. 8. századi település.", "Egy tó félszigetére épült.", "Életnagyságú rekonstrukció."],
      ro: ["Așezare din secolul al VIII-lea î.Hr.", "Construită pe o peninsulă a unui lac.", "Reconstrucție în mărime naturală."],
      en: ["Settlement from the 8th century BC.", "Built on a peninsula in a lake.", "Life-size reconstruction."]
    },
    descriptionAdvanced: {
      hu: "Biskupin az egyik legkiemelkedőbb közép-európai régészeti felfedezés, amely egy lausitzi kultúrához tartozó, koravaskori erődített települést tár fel. A tó félszigetére épült falut a Kr.e. 8. században alapították, és a vizes, tőzeges talaj hihetetlen épségben őrizte meg a tölgyfa szerkezeteket évezredeken át. Az 1930-as években kezdődött ásatások nyomán a teljes települést életnagyságban rekonstruálták, így a látogatók szó szerint beléphetnek a 2700 évvel ezelőtti mindennapokba. Az évente megrendezett Biskupini Régészeti Fesztivál Európa egyik legnagyobb történelem-népszerűsítő eseménye. (Történelem K5 — A vaskori Európa mindennapjai)"
    },
    factsAdvanced: {
      hu: ["A feltárások során kiderült, hogy a települést egy precízen megtervezett rácsos utcarendszer jellemezte.", "A vizes talaj még a szövött anyagok és a faszerszámok maradványait is konzerválta.", "Biskupint gyakran emlegetik a 'lengyel Pompeji'-ként is."]
    }
  },
  {
    id: "historical-chelmno-extra",
    type: "historical",
    parent: "PL-KP",
    coords: [18.425, 53.35],
    name: { de: "Kulm", hu: "Chełmno", ro: "Chełmno", en: "Chełmno" },
    description: {
      de: "Bekannt als die 'Stadt der Liebenden' und eine der am besten erhaltenen mittelalterlichen Städte. Ihr Stadtplan diente als Vorbild für viele andere Städte.",
      hu: "A 'szerelmesek városa'-ként ismert, és az egyik legjobb állapotban fennmaradt középkori város. Városszerkezete mintául szolgált sok más város számára.",
      ro: "Cunoscut ca 'Orașul Îndrăgostiților' și unul dintre cele mai bine conservate orașe medievale. Planul său urbanistic a servit drept model pentru multe alte orașe.",
      en: "Known as the 'City of Lovers' and one of the best-preserved medieval towns. Its town plan served as a model for many other cities."
    },
    facts: {
      de: ["Nahezu intakte mittelalterliche Stadtmauer.", "Reliquie des Heiligen Valentin.", "Beispiel für das Kulmer Recht."],
      hu: ["Szinte érintetlen középkori városfal.", "Szent Bálint ereklyéje.", "A chełmnói jog példája."],
      ro: ["Ziduri medievale aproape intacte.", "Relicva Sfântului Valentin.", "Exemplu al legii de la Chełmno."],
      en: ["Almost intact medieval city walls.", "Relic of St. Valentine.", "Example of Chełmno law."]
    },
    descriptionAdvanced: {
      hu: "Chełmno a Visztula folyó partján magasodó dombokon épült, a lengyel gótika egyik legépebben megőrzött építészeti kincse. A város történelmi jelentőségét mutatja, hogy 1233-ban itt fektették le a 'chełmnói jog' alapjait, amely évszázadokig szolgált mintaként több mint kétszáz lengyel és porosz település alapításához. Szinte tökéletes állapotban fennmaradt, 2,2 kilométer hosszú középkori városfala és hat lenyűgöző gótikus temploma páratlan időutazást kínál. Mivel a helyi plébániatemplom évszázadok óta őrzi Szent Bálint egy ereklyéjét, a város hivatalosan is felvette a 'Szerelmesek városa' címet. (Történelem K6 — Középkori városjogok és építészet)"
    },
    factsAdvanced: {
      hu: ["A város főterén álló reneszánsz városháza a lengyel építészet egyik remekműve.", "A városfal eredetileg 23 bástyával és hat megerősített kapuval rendelkezett.", "A város utcahálózata szinte változatlan formában őrzi a 13. századi sakktábla alaprajzot."]
    }
  },
  {
    id: "river-biebrza-extra",
    type: "river",
    parent: "PL-PD",
    coords: [22.4, 53.25],
    name: { de: "Biebrza", hu: "Biebrza", ro: "Biebrza", en: "Biebrza River" },
    description: {
      de: "Ein Fluss, der durch die größten Sumpfgebiete Polens fließt und den Kern des Biebrza-Nationalparks bildet. Ein Paradies für Ornithologen.",
      hu: "A folyó Lengyelország legnagyobb mocsárvidékén folyik keresztül, és a Biebrza Nemzeti Park magját képezi. Az ornitológusok paradicsoma.",
      ro: "Un râu care curge prin cele mai mari mlaștini din Polonia, formând nucleul Parcului Național Biebrza. Un paradis pentru ornitologi.",
      en: "A river that flows through Poland's largest marshlands, forming the core of the Biebrza National Park. A paradise for ornithologists."
    },
    facts: {
      de: ["Fließt durch den Biebrza-Nationalpark.", "Größte natürliche Sumpflandschaft in Mitteleuropa.", "Brutgebiet für seltene Vogelarten."],
      hu: ["A Biebrza Nemzeti Parkon folyik keresztül.", "Közép-Európa legnagyobb természetes mocsárvidéke.", "Ritka madárfajok fészkelőhelye."],
      ro: ["Curge prin Parcul Național Biebrza.", "Cea mai mare zonă mlăștinoasă naturală din Europa Centrală.", "Zonă de cuibărit pentru specii rare de păsări."],
      en: ["Flows through Biebrza National Park.", "Largest natural marshland in Central Europe.", "Breeding ground for rare bird species."]
    },
    descriptionAdvanced: {
      hu: "A Biebrza folyó Közép-Európa egyik legjelentősebb természetes vízrendszere, amely kanyargós útján hatalmas kiterjedésű, háborítatlan mocsárvidéket hozott létre. Szabályozatlan medre és a tavaszi áradások egyedülálló, állandóan változó vizes élőhelyeket tartanak fenn, amelyeket a Biebrza Nemzeti Park oltalmaz. Ez a mocsárvilág kontinensünk egyik legfontosabb madárvonulási útvonala mentén fekszik, így tavasszal több százezer költöző madár pihenőhelye. A folyó völgye egyúttal a jávorszarvasok lengyelországi populációjának legfontosabb menedéke. (Földrajz K7 — Ártéri és mocsári ökoszisztémák)"
    },
    factsAdvanced: {
      hu: ["A Biebrza Nemzeti Park Lengyelország legnagyobb területű nemzeti parkja.", "Több mint 270 madárfajt figyeltek meg a folyó árterületén, köztük a ritka csíkosfejű nádiposzátát.", "A mocsárvidék tőzegrétege helyenként eléri a 6 méteres vastagságot is."]
    }
  },
  {
    id: "historical-tykocin-extra",
    type: "historical",
    parent: "PL-PD",
    coords: [22.769, 53.205],
    name: { de: "Tykocin", hu: "Tykocin", ro: "Tykocin", en: "Tykocin" },
    description: {
      de: "Eine kleine, aber historisch bedeutende Stadt mit einer gut erhaltenen barocken Synagoge und einem rekonstruierten Schloss. Einst ein wichtiges jüdisches Zentrum.",
      hu: "Kis, de történelmileg jelentős város, jól megőrzött barokk zsinagógával és rekonstruált várral. Egykor fontos zsidó központ volt.",
      ro: "Un oraș mic, dar important din punct de vedere istoric, cu o sinagogă barocă bine conservată și un castel reconstruit. Odinioară un important centru evreiesc.",
      en: "A small but historically significant town with a well-preserved Baroque synagogue and a reconstructed castle. Once an important Jewish center."
    },
    facts: {
      de: ["Ehemaliges 'Schtetl' (jüdische Kleinstadt).", "Große Synagoge aus dem 17. Jahrhundert, heute Museum.", "Rekonstruiertes Königsschloss."],
      hu: ["Egykori 'shtetl' (zsidó kisváros).", "17. századi Nagy Zsinagóga, ma múzeum.", "Rekonstruált királyi vár."],
      ro: ["Fost 'shtetl' (orășel evreiesc).", "Marea Sinagogă din secolul al XVII-lea, acum muzeu.", "Castel regal reconstruit."],
      en: ["Former 'shtetl' (Jewish townlet).", "17th-century Great Synagogue, now a museum.", "Reconstructed royal castle."]
    },
    descriptionAdvanced: {
      hu: "Tykocin egy apró, de történelmileg annál jelentősebb ékszerdoboz Podlasie régiójában, amely mélyen őrzi a lengyel-zsidó együttélés évszázados emlékeit. A település a 16. századtól az ország egyik legfontosabb zsidó vallási és kulturális központja volt, amit a pompásan felújított, 1642-ben épült barokk Nagy Zsinagóga is bizonyít. A Narew folyó túlpartján emelkedik a közelmúltban aprólékosan újjáépített királyi kastély, amely egykor II. Zsigmond Ágost lengyel király kincstárát és arzenálját rejtette. Kanyargós utcái és hagyományos faépületei hűen idézik fel a letűnt 'shtetlek' (zsidó kisvárosok) varázsát. (Történelem K8 — A lengyel-zsidó kultúra öröksége)"
    },
    factsAdvanced: {
      hu: ["A város főterén áll az ország második legrégebbi világi emlékműve, Stefan Czarniecki szobra.", "A Nagy Zsinagóga falait páratlanul gazdag héber kalligráfiák és állatmotívumos freskók díszítik.", "Tykocin várát a nagy északi háború (Özönvíz) során a svéd csapatok szinte a földdel tették egyenlővé."]
    }
  },
  {
    id: "forest-knyszyn-forest-extra",
    type: "forest",
    parent: "PL-PD",
    coords: [23.1, 53.3],
    name: { de: "Knyszyn-Urwald", hu: "Knyszyni-erdő", ro: "Pădurea Knyszyn", en: "Knyszyn Forest" },
    description: {
      de: "Ein großer Waldkomplex in der Nähe von Białystok, Teil des europäischen ökologischen Netzwerks Natura 2000. Bekannt für seine Wolfs- und Luchs-Populationen.",
      hu: "Nagy erdőkomplexum Białystok közelében, a Natura 2000 európai ökológiai hálózat része. Farkas- és hiúzpopulációiról ismert.",
      ro: "Un complex forestier mare lângă Białystok, parte a rețelei ecologice europene Natura 2000. Cunoscut pentru populațiile sale de lupi și râși.",
      en: "A large forest complex near Białystok, part of the European Natura 2000 ecological network. Known for its wolf and lynx populations."
    },
    facts: {
      de: ["Umfasst eine Fläche von über 1.000 km².", "Heimat für Wölfe, Luchse und Wisente.", "Wichtiger Teil des 'Grünen Lungen Polens'."],
      hu: ["Területe meghaladja az 1000 km²-t.", "Farkasok, hiúzok és bölények otthona.", "A 'Lengyelország Zöld Tüdeje' fontos része."],
      ro: ["Acoperă o suprafață de peste 1.000 km².", "Adăpostește lupi, râși și zimbri.", "Parte importantă a 'Plămânilor Verzi ai Poloniei'."],
      en: ["Covers an area of over 1,000 km².", "Home to wolves, lynx, and bison.", "Important part of the 'Green Lungs of Poland'."]
    },
    descriptionAdvanced: {
      hu: "A Knyszyni-erdő egy hatalmas kiterjedésű, ősi jellegű rengeteg, amely a Białystoktól északra elterülő dombvidéket borítja be. Kivételes biológiai sokféleségét a nyugat-európai tölgyesek és az észak-európai fenyőerdők különleges találkozása adja, amely egyedi tajga jellegű mikroklímát teremt. A terület hatalmas mérete ellenére szinte teljesen érintetlen maradt az iparosodástól, így biztonságos menedéket nyújt Európa legnagyobb szárazföldi emlőseinek, a bölényeknek. Mélyén kristálytiszta patakok és eldugott, borostyánnal borított források bújnak meg. (Biológia K6 — Északi és mérsékelt övi erdőtípusok)"
    },
    factsAdvanced: {
      hu: ["A Knyszyni-erdő az ország második legnagyobb összefüggő erdőkomplexuma a Białowieża-erdő után.", "Itt él a világ egyik legjelentősebb vadon élő európai bölénypopulációja.", "A területet sűrűn átszelik az évszázadokkal ezelőtti kereskedelmi utak és partizánösvények."]
    }
  },
  {
    id: "city-suwalki-extra",
    type: "city",
    parent: "PL-PD",
    coords: [22.930, 54.096],
    name: { de: "Suwałki", hu: "Suwałki", ro: "Suwałki", en: "Suwałki" },
    description: {
      de: "Bekannt als der 'polnische Kältepol', eine der kältesten Städte Polens. Wichtiges Kulturzentrum in der Suwałki-Region nahe der litauischen Grenze.",
      hu: "A 'lengyel hidegpólus'-ként ismert, Lengyelország egyik leghidegebb városa. Fontos kulturális központ a Suwałki régióban, a litván határ közelében.",
      ro: "Cunoscut ca 'polul frigului polonez', unul dintre cele mai reci orașe din Polonia. Un centru cultural important în regiunea Suwałki, aproape de granița cu Lituania.",
      en: "Known as the 'Polish cold pole', one of the coldest cities in Poland. An important cultural center in the Suwałki region, near the Lithuanian border."
    },
    facts: {
      de: ["Kälteste Stadt in Polen.", "Tor zur malerischen Suwałki-Seenplatte.", "Strategische Lage in der Suwałki-Lücke."],
      hu: ["Lengyelország leghidegebb városa.", "Kapuja a festői Suwałki-tóvidéknek.", "Stratégiai fekvés a Suwałki-folyosóban."],
      ro: ["Cel mai rece oraș din Polonia.", "Poarta către pitoreasca regiune a lacurilor Suwałki.", "Poziție strategică în Coridorul Suwałki."],
      en: ["Coldest city in Poland.", "Gateway to the picturesque Suwałki Lake District.", "Strategic location in the Suwałki Gap."]
    },
    descriptionAdvanced: {
      hu: "Suwałki a lengyel távol-északkelet dinamikus központja, amely zord, kontinentális éghajlata miatt a 'lengyel hidegpólus' hírnevet szerezte meg. A 18. században kamalduli szerzetesek által alapított város klasszicista és eklektikus épületeivel őrzi 19. századi arculatát. Gazdasági és logisztikai jelentőségét az adja, hogy a sokat emlegetett Suwałki-folyosó, Lengyelország és a balti államok egyetlen szárazföldi kapcsolata mentén fekszik. Innen nyílik a kapu a lélegzetelállító Suwałki-tóvidékre, amely jégkorszaki szikláival és mély, tiszta tavaival vonzza a túrázókat. (Földrajz K8 — Geopolitikai folyosók és kontinentális éghajlat)"
    },
    factsAdvanced: {
      hu: ["A városban a téli hőmérséklet nem ritkán süllyed mínusz 30 Celsius-fok alá.", "Itt született a híres lengyel költő és drámaíró, Maria Konopnicka.", "A közeli Hańcza-tó a lengyel síkvidék legmélyebb tava a maga 108 méteres mélységével."]
    }
  },
  {
    id: "sea-swinoujscie-extra",
    type: "port",
    parent: "PL-ZP",
    coords: [14.247, 53.91],
    name: { de: "Swinemünde", hu: "Świnoujście", ro: "Świnoujście", en: "Świnoujście" },
    description: {
      de: "Eine Stadt auf 44 Inseln mit einem wichtigen Fährhafen und einem Marinestützpunkt. Der Leuchtturm ist einer der höchsten der Welt.",
      hu: "Egy 44 szigeten fekvő város, fontos kompkikötővel és haditengerészeti bázissal. Világítótornya a világ egyik legmagasabbja.",
      ro: "Un oraș situat pe 44 de insule, cu un important port de feriboturi și o bază navală. Farul său este unul dintre cele mai înalte din lume.",
      en: "A city located on 44 islands, with a major ferry port and naval base. Its lighthouse is one of the tallest in the world."
    },
    facts: {
      de: ["Liegt auf den Inseln Usedom und Wollin.", "Höchster Leuchtturm in Polen (68m).", "Wichtiger LNG-Terminal."],
      hu: ["Usedom és Wolin szigetén fekszik.", "Lengyelország legmagasabb világítótornya (68 m).", "Fontos LNG-terminál."],
      ro: ["Situat pe insulele Usedom și Wolin.", "Cel mai înalt far din Polonia (68 m).", "Terminal LNG important."],
      en: ["Located on Usedom and Wolin islands.", "Tallest lighthouse in Poland (68m).", "Major LNG terminal."]
    },
    descriptionAdvanced: {
      hu: "Świnoujście Lengyelország legnyugatibb kikötővárosa, amely egyedülálló módon 44 különböző szigeten terül el a Balti-tenger partján. Stratégiai elhelyezkedése miatt évszázadokig fontos porosz katonai bázis volt, napjainkban pedig az ország egyik legforgalmasabb kompkikötője, amely Skandináviával köti össze Közép-Európát. Széles, finom homokos strandja és a 19. századi fürdőnegyed teszik a Balti-tenger egyik legkedveltebb üdülőhelyévé. A nemrégiben átadott, a Świna folyó alatt húzódó alagút történelmi mérföldkövet jelentett, végre állandó szárazföldi kapcsolatot teremtve a város szigetei között. (Földrajz K7 — Tengeri kereskedelem és tengerparti formakincs)"
    },
    factsAdvanced: {
      hu: ["A lakott területek túlnyomó része két fő szigeten, Uznamon és Wolinon oszlik el.", "A kikötőben álló, 68 méter magas téglából épült világítótorony a legmagasabb a Balti-tenger térségében.", "Az új LNG-terminálja (cseppfolyósított földgáz) létfontosságú az ország energiabiztonsága szempontjából."]
    }
  },
  {
    id: "nature-wolin-national-park-extra",
    type: "nature",
    parent: "PL-ZP",
    coords: [14.5, 53.9],
    name: { de: "Nationalpark Wollin", hu: "Wolin Nemzeti Park", ro: "Parcul Național Wolin", en: "Wolin National Park" },
    description: {
      de: "Schützt die einzigartige Landschaft der Insel Wollin mit ihren Steilküsten, Buchenwäldern und einem Wisentgehege.",
      hu: "Védi Wolin szigetének egyedülálló táját a sziklaszirtjeivel, bükkerdőivel és egy bölényrezervátumával.",
      ro: "Protejează peisajul unic al insulei Wolin, cu falezele sale, pădurile de fag și o rezervație de zimbri.",
      en: "Protects the unique landscape of Wolin Island, with its cliffs, beech forests, and a European bison enclosure."
    },
    facts: {
      de: ["Erster Meeresnationalpark in Polen.", "Berühmt für seine hohen Klippen.", "Schutzgebiet für Seeadler."],
      hu: ["Lengyelország első tengeri nemzeti parkja.", "Híres magas sziklaszirtjeiről.", "A rétisasok védett területe."],
      ro: ["Primul parc național maritim din Polonia.", "Renumit pentru falezele sale înalte.", "Arie protejată pentru vulturul codalb."],
      en: ["First maritime national park in Poland.", "Famous for its high cliffs.", "Sanctuary for white-tailed eagles."]
    },
    descriptionAdvanced: {
      hu: "A Wolin Nemzeti Park a lengyel balti partvidék természeti sokszínűségének esszenciája, ahol a tenger kíméletlen ereje és az ősrégi erdők találkoznak. Leginkább a tenger fölé 90 méter magasan tornyosuló, drámai szépségű, aktívan omló parti sziklafalairól ismert, amelyek folyamatosan formálják a sziget arculatát. Sűrű bükk- és tölgyerdei biztonságos menedéket nyújtanak a betelepített európai bölényeknek és az ország egyik legnagyobb rétisas-populációjának. A park területén található tiszta vizű, türkizkék tavak jégkorszaki gleccserek lenyomataiként színesítik a tájat. (Biológia K6 — Tengerparti erózió és madárrezervátumok)"
    },
    factsAdvanced: {
      hu: ["A park jelképe a rétisas, amely a meredek sziklafalak fáinak koronáján fészkel.", "A tengeri hullámzás évente akár egy méterrel is visszaszoríthatja a meredek parti sziklafalakat.", "A park bölényrezervátumában a látogatók természetes környezetükben figyelhetik meg az óriási emlősöket."]
    }
  },
  {
    id: "city-kolobrzeg-extra",
    type: "city",
    parent: "PL-ZP",
    coords: [15.576, 54.176],
    name: { de: "Kolberg", hu: "Kołobrzeg", ro: "Kołobrzeg", en: "Kołobrzeg" },
    description: {
      de: "Ein beliebter Kur- und Badeort an der Ostsee. Bekannt für seine Solequellen, seinen breiten Sandstrand und seinen Leuchtturm.",
      hu: "Népszerű gyógy- és üdülőhely a Balti-tenger partján. Ismert a sós forrásairól, széles homokos strandjáról és világítótornyáról.",
      ro: "O populară stațiune balneară și de agrement la Marea Baltică. Cunoscută pentru izvoarele sale saline, plaja sa largă cu nisip și farul său.",
      en: "A popular spa and seaside resort on the Baltic coast. Known for its saline springs, wide sandy beach, and lighthouse."
    },
    facts: {
      de: ["Großer Kurort an der Ostsee.", "Mittelalterliche Kathedrale.", "Militärmuseum in einem alten Fort."],
      hu: ["Nagy gyógyüdülőhely a Balti-tenger partján.", "Középkori katedrális.", "Hadimúzeum egy régi erődben."],
      ro: ["Stațiune balneară importantă la Marea Baltică.", "Catedrală medievală.", "Muzeu militar într-un fort vechi."],
      en: ["Major spa resort on the Baltic Sea.", "Medieval cathedral.", "Military museum in an old fort."]
    },
    descriptionAdvanced: {
      hu: "Kołobrzeg a Balti-tenger partvidékének legnagyobb és legnagyobb presztízsű lengyel fürdővárosa, melynek történelme szorosan egybefonódik a sólepárlással és a tengeri kereskedelemmel. Noha a második világháború véres ostroma során épületeinek több mint 80 százaléka megsemmisült, lenyűgöző középkori gótikus bazilikáját és világítótornyát sikeresen újjáépítették. Gazdag sós vizű forrásai és gyógyiszapja miatt már a 19. században felkapott szanatóriumi központtá vált. Széles tengerparti sétánya és mólója egész évben mágnesként vonzza a gyógyulni és pihenni vágyókat. (Történelem K7 — Háborús pusztítás és újjáépítés)"
    },
    factsAdvanced: {
      hu: ["A 17. századi világítótornyot egy egykori katonai erődítmény, a Münde-erőd alapjaira építették újjá.", "A város címere is őrzi a sóbányászat hagyományát, amely a középkorban alapozta meg Kołobrzeg gazdagságát.", "A Kołobrzegi csata a II. világháború egyik leghevesebb városi ütközete volt 1945 márciusában."]
    }
  },
  {
    id: "industry-pge-turow-extra",
    type: "industry",
    parent: "PL-DS",
    coords: [14.91, 50.88],
    name: { de: "Kraftwerk Turów", hu: "Turówi erőmű", ro: "Centrala Turów", en: "Turów Power Station" },
    description: {
      de: "Ein großes braunkohlebefeuertes Kraftwerk und ein angrenzender Tagebau, die eine wichtige Rolle in der polnischen Energieversorgung spielen, aber auch Umweltbedenken aufwerfen.",
      hu: "Egy nagy lignittüzelésű erőmű és a hozzá tartozó külszíni bánya, amely fontos szerepet játszik Lengyelország energiaellátásában, de környezetvédelmi aggályokat is felvet.",
      ro: "O mare centrală electrică pe lignit și o mină de suprafață adiacentă, care joacă un rol important în aprovizionarea cu energie a Poloniei, dar ridică și preocupări de mediu.",
      en: "A large lignite-fired power station and an adjacent open-cast mine, playing a major role in Poland's energy supply but also raising environmental concerns."
    },
    facts: {
      de: ["Eines der größten Kraftwerke in Polen.", "Befeuert mit Braunkohle aus dem Tagebau Turów.", "Kontrovers wegen Umweltauswirkungen."],
      hu: ["Lengyelország egyik legnagyobb erőműve.", "A turówi külszíni bányából származó lignittel tüzelik.", "Környezeti hatásai miatt ellentmondásos."],
      ro: ["Una dintre cele mai mari centrale electrice din Polonia.", "Alimentată cu lignit din mina Turów.", "Controversată din cauza impactului asupra mediului."],
      en: ["One of the largest power plants in Poland.", "Fired with lignite from the Turów mine.", "Controversial due to environmental impact."]
    },
    descriptionAdvanced: {
      hu: "A Turówi erőmű és a hozzá kapcsolódó külszíni lignitbánya a lengyel energiaszektor egyik gigantikus, ugyanakkor rendkívül vitatott komplexuma. A Németország és Csehország határai által közrefogott Bogatynia mellett fekvő ipari óriás kritikus szerepet játszik az ország délnyugati részének áramellátásában. A folyamatosan mélyülő és terjeszkedő bánya drámaian átalakította a régió felszínét, és komoly nemzetközi diplomáciai feszültséget okozott a határ menti talajvízszint csökkenése miatt. Modernizációs fejlesztései ellenére a komplexum a fosszilis energiára épülő gazdaság és a környezetvédelem konfliktusának szimbólumává vált Európában. (Földrajz K8 — Energiatermelés és környezeti konfliktusok)"
    },
    factsAdvanced: {
      hu: ["A külszíni bánya hatalmas tölcsére a világűrből is tisztán kivehető a műholdfelvételeken.", "A létesítmény az ország teljes villamosenergia-termelésének mintegy 5-7 százalékát biztosítja.", "2021-ben az Európai Bíróság példátlan napi bírságot szabott ki Lengyelországra a bánya működésének vitatott meghosszabbítása miatt."]
    }
  },
  {
    id: "industry-kghm-copper-extra",
    type: "industry",
    parent: "PL-DS",
    coords: [16.0, 51.5],
    name: { de: "KGHM Kupferbergbau", hu: "KGHM rézbányászat", ro: "Mineritul de cupru KGHM", en: "KGHM Copper Mining" },
    description: {
      de: "KGHM Polska Miedź ist einer der weltweit größten Produzenten von Kupfer und Silber. Die Hauptminen und Hütten befinden sich in der Region Niederschlesien.",
      hu: "A KGHM Polska Miedź a világ egyik legnagyobb réz- és ezüsttermelője. A fő bányák és kohók Alsó-Szilézia régiójában találhatók.",
      ro: "KGHM Polska Miedź este unul dintre cei mai mari producători de cupru și argint din lume. Minele și topitoriile principale sunt situate în regiunea Silezia Inferioară.",
      en: "KGHM Polska Miedź is one of the world's largest producers of copper and silver. The main mines and smelters are located in the Lower Silesian region."
    },
    facts: {
      de: ["Einer der größten Kupferproduzenten der Welt.", "Hauptsitz in Lubin, Niederschlesien.", "Produziert auch große Mengen an Silber."],
      hu: ["A világ egyik legnagyobb réztermelője.", "Székhelye Lubinban, Alsó-Sziléziában található.", "Jelentős mennyiségű ezüstöt is termel."],
      ro: ["Unul dintre cei mai mari producători de cupru din lume.", "Sediu în Lubin, Silezia Inferioară.", "Produce și cantități mari de argint."],
      en: ["One of the world's largest copper producers.", "Headquartered in Lubin, Lower Silesia.", "Also produces large amounts of silver."]
    },
    descriptionAdvanced: {
      hu: "A KGHM Polska Miedź alsó-sziléziai ipari létesítményei a globális réz- és ezüstbányászat élvonalába tartoznak. A hatalmas földalatti bányarendszerek és az olvasztók komplexuma Lubin és Głogów környékén húzódik, jelentősen átalakítva a régió gazdasági és demográfiai arculatát az 1950-es évekbeli rézérc-felfedezés óta. Az itt bányászott fémek kulcsfontosságúak az európai elektronikai ipar és a megújuló energiaforrások technológiái számára. Noha a bánya a legkorszerűbb technológiákat alkalmazza, működése komoly kihívásokat jelent a környezetvédelem és a bányászati biztonság terén. (Kémia K8 — Ércbányászat és nehézfém-feldolgozás)"
    },
    factsAdvanced: {
      hu: ["A KGHM rendszeresen vezeti a globális ezüsttermelők ranglistáját.", "Egyes bányatárnák mélysége meghaladja az 1200 métert a felszín alatt.", "A bányászat kezdetén több apróbb települést is át kellett költöztetni a terjeszkedő ipari létesítmények miatt."]
    }
  },
  {
    id: "agriculture-lower-silesian-forests-extra",
    type: "agriculture",
    parent: "PL-DS",
    coords: [15.5, 51.4],
    name: { de: "Niederschlesische Heide", hu: "Alsó-sziléziai erdők", ro: "Pădurile Sileziei Inferioare", en: "Lower Silesian Forests" },
    description: {
      de: "Eines der größten zusammenhängenden Waldgebiete Polens, wichtig für die Forstwirtschaft und den Naturschutz. Bekannt für seine Pilz- und Beerenvielfalt.",
      hu: "Lengyelország egyik legnagyobb összefüggő erdőterülete, amely fontos a faipar és a természetvédelem szempontjából. Híres gomba- és bogyósválasztékáról.",
      ro: "Una dintre cele mai mari zone forestiere continue din Polonia, importantă pentru silvicultură și conservarea naturii. Cunoscută pentru varietatea sa de ciuperci și fructe de pădure.",
      en: "One of Poland's largest continuous forest areas, important for forestry and nature conservation. Known for its variety of mushrooms and berries."
    },
    facts: {
      de: ["Größter Waldkomplex in Polen.", "Wichtige Holzquelle.", "Traditionelles Gebiet für Pilz- und Beerensammler."],
      hu: ["Lengyelország legnagyobb erdőkomplexe.", "Fontos faanyagforrás.", "Hagyományos gomba- és bogyógyűjtő terület."],
      ro: ["Cel mai mare complex forestier din Polonia.", "Sursă importantă de lemn.", "Zonă tradițională pentru culegătorii de ciuperci și fructe de pădure."],
      en: ["Largest forest complex in Poland.", "Important source of timber.", "Traditional area for mushroom and berry picking."]
    },
    descriptionAdvanced: {
      hu: "Az Alsó-sziléziai erdők Közép-Európa egyik leghatalmasabb összefüggő zöld területeként több százezer hektáron terülnek el a lengyel-német határvidéken. A sűrű, főként erdeifenyőkből álló rengeteg hosszú évszázadok óta a helyi fakitermelés, a méhészet és a hagyományos erdőgazdálkodás központja. Az őszi hónapokban a terület az egész országból vonzza a gombászokat, akik a gazdag aljnövényzet kincseit kutatják. Geológiai adottságainak köszönhetően az erdő mélyén különleges tőzeglápok és rejtett vizes élőhelyek is megbújnak, amelyek szigorú természetvédelmi oltalmat élveznek. (Biológia K6 — Erdőgazdálkodás és ökoszisztémák)"
    },
    factsAdvanced: {
      hu: ["A területet a II. világháború után évtizedekig szovjet katonai lőterek és titkos bázisok tagolták.", "Nyár végén a régióban virágzó hatalmas csarabosok (hangafélék) lila szőnyeggé varázsolják a tisztásokat.", "Az erdőség egyes részein az utóbbi években ismét sikeresen megtelepedtek a szürke farkasok."]
    }
  },
  {
    id: "port-gdynia-extra",
    type: "port",
    parent: "PL-PM",
    coords: [18.542, 54.518],
    name: { de: "Hafen Gdynia", hu: "Gdynia kikötője", ro: "Portul Gdynia", en: "Port of Gdynia" },
    description: {
      de: "Ein moderner Seehafen, der in den 1920er Jahren als Polens 'Tor zur Welt' gebaut wurde. Heute ein wichtiger Container- und Fährhafen.",
      hu: "Modern tengeri kikötő, amely az 1920-as években épült Lengyelország 'kapujaként a világra'. Ma fontos konténer- és kompkikötő.",
      ro: "Un port maritim modern construit în anii 1920 ca 'poarta Poloniei către lume'. Astăzi este un important port de containere și feriboturi.",
      en: "A modern seaport built in the 1920s as Poland's 'gateway to the world'. Today it is a major container and ferry port."
    },
    facts: {
      de: ["Erbaut nach dem Ersten Weltkrieg.", "Wichtiger Teil der Dreistadt (mit Danzig und Sopot).", "Jährliches Open'er Musikfestival in der Nähe."],
      hu: ["Az első világháború után épült.", "A Hármasváros fontos része (Gdańskkal és Sopottal).", "Évente megrendezett Open'er zenei fesztivál a közelben."],
      ro: ["Construit după Primul Război Mondial.", "Parte importantă a Triciudadului (cu Gdańsk și Sopot).", "Festivalul anual de muzică Open'er în apropiere."],
      en: ["Built after World War I.", "Important part of the Tricity (with Gdańsk and Sopot).", "Annual Open'er Music Festival nearby."]
    },
    descriptionAdvanced: {
      hu: "Gdynia kikötője a két világháború közötti Lengyelország legambiciózusabb és legsikeresebb mérnöki és gazdasági projektje volt. Miután Danzig (Gdańsk) szabad várossá vált, a lengyel állam egy apró halászfalut alakított át néhány év alatt a Balti-tenger egyik legkorszerűbb tengeri kapujává. Az 1920-as és 30-as évek modernista építészete a mai napig meghatározza a belváros arculatát, amelyet egyedülálló, tengerjáró hajókat idéző formák jellemeznek. Ma a kikötő nemcsak teherforgalmáról, hanem a haditengerészet bázisaként és népszerű tengerészeti múzeumairól is ismert. (Történelem K8 — A két világháború közötti iparosodás)"
    },
    factsAdvanced: {
      hu: ["Gdynia lakossága az 1920-as évekbeli ezer főről alig húsz év alatt több mint 100 ezerre duzzadt.", "A kikötőépítés atyjának Kwiatkowski mérnököt tartják, akinek munkássága előtt számos emlékmű tiszteleg.", "A déli mólónál horgonyoz az 1909-es Dar Pomorza nevű történelmi vitorlás iskolahajó."]
    }
  },
  {
    id: "industry-gdansk-shipyard-extra",
    type: "industry",
    parent: "PL-PM",
    coords: [18.65, 54.36],
    name: { de: "Danziger Werft", hu: "Gdański Hajógyár", ro: "Șantierul Naval Gdańsk", en: "Gdańsk Shipyard" },
    description: {
      de: "Die Werft ist nicht nur ein wichtiger Industriestandort, sondern auch der Geburtsort der Solidarność-Bewegung, die zum Fall des Kommunismus in Polen führte.",
      hu: "A hajógyár nemcsak fontos ipari helyszín, hanem a Szolidaritás mozgalom szülőhelye is, amely a kommunizmus bukásához vezetett Lengyelországban.",
      ro: "Șantierul naval nu este doar un important sit industrial, ci și locul de naștere al mișcării Solidaritatea, care a dus la căderea comunismului în Polonia.",
      en: "The shipyard is not only a major industrial site but also the birthplace of the Solidarity movement, which led to the fall of communism in Poland."
    },
    facts: {
      de: ["Geburtsort der 'Solidarność'-Bewegung.", "Historisch eine der größten Werften Europas.", "Das Europäische Solidarność-Zentrum befindet sich hier."],
      hu: ["A 'Szolidaritás' mozgalom szülőhelye.", "Történelmileg Európa egyik legnagyobb hajógyára.", "Itt található az Európai Szolidaritás Központ."],
      ro: ["Locul de naștere al mișcării 'Solidaritatea'.", "Istoric, unul dintre cele mai mari șantiere navale din Europa.", "Centrul European de Solidaritate se află aici."],
      en: ["Birthplace of the 'Solidarity' movement.", "Historically one of Europe's largest shipyards.", "The European Solidarity Centre is located here."]
    },
    descriptionAdvanced: {
      hu: "A Gdański Hajógyár hatalmas acéldarui nemcsak az ipari termelés, hanem a modern kori európai történelem lenyűgöző szimbólumai is. Az egykori Lenin Hajógyár területe volt a bölcsője az 1980-as nagy sztrájkhullámnak és a Szolidaritás (Solidarność) független szakszervezetnek, amelyet Lech Wałęsa vezetett. A munkások bátor kiállása lavinaként indította el azt a folyamatot, amely egy évtizeddel később a keleti blokk kommunista rendszereinek bukásához vezetett. Ma a rozsdásodó dokkok és modernizált üzemcsarnokok között magasodik az Európai Szolidaritás Központ díjnyertes, rozsdás acéllemezekkel borított épülete. (Történelem K8 — A Szolidaritás mozgalom és a rendszerváltás)"
    },
    factsAdvanced: {
      hu: ["Az 1970-es decemberi sortűz áldozatainak emlékét a kikötő bejáratánál álló három, egyenként 42 méteres acélkereszt őrzi.", "Fénykorában, a 20. század második felében a hajógyár több mint 18 ezer munkást foglalkoztatott.", "Az 1980-as sztrájkok idején a munkások követeléseiket fatáblákra írva tűzték a gyárkapura, amelyek ma az UNESCO Világemlékezet részét képezik."]
    }
  },
  {
    id: "kid-landmark-sopot-pier-extra",
    type: "kid-landmark",
    parent: "PL-PM",
    coords: [18.569, 54.446],
    name: { de: "Seebrücke von Sopot", hu: "Sopoti móló", ro: "Debarcaderul din Sopot", en: "Sopot Pier" },
    description: {
      de: "Die längste hölzerne Seebrücke Europas, ein beliebter Ort für Spaziergänge mit Blick auf die Danziger Bucht. Ein Wahrzeichen des Kurortes Sopot.",
      hu: "Európa leghosszabb fából készült mólója, kedvelt sétálóhely, kilátással a Gdański-öbölre. Sopot fürdőváros jelképe.",
      ro: "Cel mai lung debarcader din lemn din Europa, un loc popular pentru plimbări cu vedere la Golful Gdańsk. Un simbol al stațiunii Sopot.",
      en: "The longest wooden pier in Europe, a popular place for strolls with views of the Gdańsk Bay. A landmark of the Sopot resort town."
    },
    facts: {
      de: ["Längste Holzseebrücke in Europa (über 500m).", "Teil des Kurortes Sopot.", "Bietet Jachthafen und Restaurant."],
      hu: ["Európa leghosszabb fa mólója (több mint 500 m).", "Sopot fürdőváros része.", "Kikötővel és étteremmel rendelkezik."],
      ro: ["Cel mai lung debarcader din lemn din Europa (peste 500m).", "Parte a stațiunii Sopot.", "Oferă un port de agrement și un restaurant."],
      en: ["Longest wooden pier in Europe (over 500m).", "Part of the Sopot health resort.", "Features a marina and restaurant."]
    },
    descriptionAdvanced: {
      hu: "A Sopoti móló a balti fürdőkultúra eleganciájának megtestesítője, amely mintegy 511 méter hosszan nyúlik be a Balti-tenger zöldes vizébe. Ez Európa leghosszabb faszerkezetű tengeri mólója, amelynek története a 19. század elejéig, Sopot első gyógyfürdőjének alapításáig nyúlik vissza. A móló nemcsak népszerű sétány, hanem terápiás célokat is szolgál, mivel a tenger felett a jód koncentrációja itt jelentősen magasabb, mint a szárazföldön. A hófehér padok, a nyüzsgő kikötő és a történelmi Grand Hotel panorámája teszi a Hármasváros legfelkapottabb találkozóhelyévé. (Földrajz K6 — Turizmus és balneológia a Balti-tengernél)"
    },
    factsAdvanced: {
      hu: ["A móló végét sokszor le kell zárni a kemény téli balti viharok és a jégzajlás idején a sérülések elkerülése végett.", "A szerkezetet eredetileg azért építették, hogy a tengeri luxushajók csónakjai könnyebben kiköthessenek a sekély vízben.", "Nyári estéken a mólónál gyakran rendeznek szabadtéri filmvetítéseket és jazzkoncerteket."]
    }
  },
  {
    id: "animal-habitat-gdansk-zoo-extra",
    type: "animal-habitat",
    parent: "PL-PM",
    coords: [18.57, 54.4],
    name: { de: "Zoo Danzig", hu: "Gdański Állatkert", ro: "Grădina Zoologică Gdańsk", en: "Gdańsk Zoo" },
    description: {
      de: "Der größte Zoo Polens, gelegen im Landschaftspark Dreistadt. Heimat für viele seltene und exotische Tiere, darunter Zwergflusspferde und Andenkondore.",
      hu: "Lengyelország legnagyobb állatkertje, a Hármasváros Tájvédelmi Parkban található. Számos ritka és egzotikus állat otthona, köztük törpe vízilovak és andoki kondorok.",
      ro: "Cea mai mare grădină zoologică din Polonia, situată în Parcul Peisagistic Tricity. Adăpostește multe animale rare și exotice, inclusiv hipopotami pitici și condori andini.",
      en: "The largest zoo in Poland, located in the Tricity Landscape Park. Home to many rare and exotic animals, including pygmy hippos and Andean condors."
    },
    facts: {
      de: ["Größter Zoo in Polen nach Fläche.", "Liegt in einem Waldgebiet in Oliwa.", "Züchtet erfolgreich gefährdete Arten."],
      hu: ["Területét tekintve Lengyelország legnagyobb állatkertje.", "Egy erdős területen található Oliwában.", "Sikeresen tenyészt veszélyeztetett fajokat."],
      ro: ["Cea mai mare grădină zoologică din Polonia ca suprafață.", "Situată într-o zonă împădurită din Oliwa.", "Reproduce cu succes specii pe cale de dispariție."],
      en: ["Largest zoo in Poland by area.", "Located in a forested area in Oliwa.", "Successfully breeds endangered species."]
    },
    descriptionAdvanced: {
      hu: "A Gdański Állatkert nem csupán méretében, de fekvésében is egyedülálló, hiszen a festői szépségű Hármasváros Tájvédelmi Park ősfái között terül el. A több mint 120 hektáros komplexum a régió egyik legfontosabb természetvédelmi és oktatási központja, amely számos ritka és veszélyeztetett faj megmentésében vállal oroszlánrészt. Fő attrakciói közé tartozik a hatalmas afrikai kifutó és a ritka törpevízilovak medencéje, amelyek a természetes élőhelyeket hűen utánozzák. A völgyekkel tagolt domborzat és a buja növényzet igazi expedíciós élménnyé varázsolja az itteni látogatást. (Biológia K6 — Állatkertek és fajmegőrzés)"
    },
    factsAdvanced: {
      hu: ["Ez az egyetlen lengyel állatkert, ahol hiúzok és andoki kondorok is rendszeresen szaporodnak.", "A terület korábban vízimalmoknak és egy 19. századi vidéki kúriának adott otthont.", "Az állatkertet a helyi közösség adományaiból és társadalmi munkájával alapították az 1950-es években."]
    }
  },
  {
    id: "industry-pkn-orlen-plock-extra",
    type: "industry",
    parent: "PL-MA",
    coords: [19.68, 52.55],
    name: { de: "PKN Orlen Raffinerie Płock", hu: "PKN Orlen Płocki finomító", ro: "Rafinăria PKN Orlen Płock", en: "PKN Orlen Płock Refinery" },
    description: {
      de: "Die größte Raffinerie in Polen, betrieben von PKN Orlen, einem der größten Ölkonzerne in Mitteleuropa. Ein entscheidender Teil der polnischen Energieinfrastruktur.",
      hu: "Lengyelország legnagyobb finomítója, amelyet a PKN Orlen, Közép-Európa egyik legnagyobb olajvállalata üzemeltet. A lengyel energiainfrastruktúra kulcsfontosságú része.",
      ro: "Cea mai mare rafinărie din Polonia, operată de PKN Orlen, una dintre cele mai mari corporații petroliere din Europa Centrală. O parte crucială a infrastructurii energetice a Poloniei.",
      en: "The largest refinery in Poland, operated by PKN Orlen, one of the largest oil corporations in Central Europe. A crucial part of Poland's energy infrastructure."
    },
    facts: {
      de: ["Größte Ölraffinerie in Polen.", "Hauptsitz von PKN Orlen.", "Wichtiger Arbeitgeber in der Region Masowien."],
      hu: ["Lengyelország legnagyobb olajfinomítója.", "A PKN Orlen székhelye.", "Fontos munkaadó a Mazóviai régióban."],
      ro: ["Cea mai mare rafinărie de petrol din Polonia.", "Sediul central al PKN Orlen.", "Angajator important în regiunea Mazovia."],
      en: ["Largest oil refinery in Poland.", "Headquarters of PKN Orlen.", "Major employer in the Masovian region."]
    },
    descriptionAdvanced: {
      hu: "A Płocki finomító a lengyel nehézipar ékköve, egy valóságos város a városban, amely a PKN Orlen energiaipari óriás központjaként működik. A Mazóviai régió nyugati peremén elterülő hatalmas, kivilágított tornyok és ezüstösen csillogó csőrendszerek éjjel-nappal meghatározzák a tájat. Ez a komplexum kulcsszerepet játszik nemcsak Lengyelország, hanem az egész közép-európai térség üzemanyag-ellátásában és petrolkémiai termelésében. Fejlődése a folyamatos modernizációnak köszönhetően egyre inkább a fenntarthatóbb, csökkentett kibocsátású technológiák felé mutat. (Kémia K8 — Petrolkémia és kőolaj-finomítás)"
    },
    factsAdvanced: {
      hu: ["A finomító éves feldolgozókapacitása meghaladja a 16 millió tonna kőolajat.", "A komplexumhoz Európa egyik legnagyobb és legkorszerűbb kutató-fejlesztő központja is tartozik.", "A finomító területén lévő csővezetékek teljes hossza több ezer kilométert tesz ki."]
    }
  },
  {
    id: "historical-zelazowa-wola-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [20.31, 52.25],
    name: { de: "Żelazowa Wola", hu: "Żelazowa Wola", ro: "Żelazowa Wola", en: "Żelazowa Wola" },
    description: {
      de: "Der Geburtsort des Komponisten Frédéric Chopin. Das Geburtshaus ist heute ein Museum, umgeben von einem malerischen Park, in dem im Sommer Klavierkonzerte stattfinden.",
      hu: "Frédéric Chopin zeneszerző szülőhelye. Szülőháza ma múzeum, amelyet festői park vesz körül, ahol nyáron zongorakoncerteket tartanak.",
      ro: "Locul de naștere al compozitorului Frédéric Chopin. Casa sa natală este acum un muzeu, înconjurat de un parc pitoresc unde vara au loc concerte de pian.",
      en: "The birthplace of composer Frédéric Chopin. His birth house is now a museum, surrounded by a picturesque park where piano recitals are held in the summer."
    },
    facts: {
      de: ["Geburtsort von Frédéric Chopin.", "Museum im ehemaligen Gutshaus.", "Sommerliche Klavierkonzerte im Park."],
      hu: ["Frédéric Chopin szülőhelye.", "Múzeum az egykori kúriában.", "Nyári zongorakoncertek a parkban."],
      ro: ["Locul de naștere al lui Frédéric Chopin.", "Muzeu în fostul conac.", "Concerte de pian vara în parc."],
      en: ["Birthplace of Frédéric Chopin.", "Museum in the former manor house.", "Summer piano recitals in the park."]
    },
    descriptionAdvanced: {
      hu: "Żelazowa Wola neve világszerte egybeforrt a zseniális zeneszerző, Frédéric Chopin emlékével, aki itt látta meg a napvilágot 1810-ben. Az egykori udvarház épülete, amely ma múzeumként funkcionál, a tipikus lengyel vidéki kúriák eleganciáját tükrözi a mazóviai fűzfák árnyékában. A házat övező hatalmas, egzotikus és őshonos növényekkel betelepített parkot a két világháború között alakították ki zenei szentélyként. A nyári hétvégéken a világ legkiválóbb zongoraművészei adnak itt ingyenes koncerteket, amelyek hangjai bejárják a kastélypark minden szegletét. (Zene K7 — A romantika zenei zsenijei)"
    },
    factsAdvanced: {
      hu: ["Chopin mindössze élete első néhány hónapját töltötte itt, mielőtt a család Varsóba költözött.", "A park kialakítása során több mint tízezer cserjét és fát ültettek a világ minden tájáról.", "A II. világháború alatt az épület egy ideig katonai kórházként működött."]
    }
  },
  {
    id: "forest-kampinos-national-park-extra",
    type: "forest",
    parent: "PL-MA",
    coords: [20.5, 52.3],
    name: { de: "Nationalpark Kampinos", hu: "Kampinos Nemzeti Park", ro: "Parcul Național Kampinos", en: "Kampinos National Park" },
    description: {
      de: "Ein großer Waldkomplex unmittelbar westlich von Warschau, der für seinen Kontrast zwischen Binnendünen und Sumpfgebieten bekannt ist. Ein UNESCO-Biosphärenreservat.",
      hu: "Nagy erdőkomplexum közvetlenül Varsótól nyugatra, amely a belföldi dűnék és a mocsaras területek kontrasztjáról ismert. Az UNESCO bioszféra-rezervátuma.",
      ro: "Un complex forestier mare situat imediat la vest de Varșovia, cunoscut pentru contrastul dintre dunele interioare și zonele mlăștinoase. O rezervație a biosferei UNESCO.",
      en: "A large forest complex immediately west of Warsaw, known for its contrast of inland dunes and marshlands. A UNESCO Biosphere Reserve."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat.", "Direkt an Warschau angrenzend.", "Heimat von Elchen, Luchsen und Bibern."],
      hu: ["UNESCO bioszféra-rezervátum.", "Közvetlenül Varsóval határos.", "Jávorszarvasok, hiúzok és hódok otthona."],
      ro: ["Rezervație a biosferei UNESCO.", "Adiacentă direct Varșoviei.", "Adăpostește elani, râși și castori."],
      en: ["UNESCO Biosphere Reserve.", "Directly adjacent to Warsaw.", "Home to moose, lynx, and beavers."]
    },
    descriptionAdvanced: {
      hu: "A Kampinos Nemzeti Park igazi természeti paradoxon: egy kiterjedt, ősi jellegű vadon, amely közvetlenül határos egy többmilliós metropolisz, Varsó betonrengetegével. A Visztula egykori ősmedrében kialakult terület legfőbb vonzereje a száraz, sárgásbarna belföldi homokdűnék és az azokat övező sötét, nedves égerlápok drámai kontrasztja. A park menedéket nyújt számos nagyemlősnek, sőt, a jávorszarvas és a hód sikeres lengyelországi visszatelepítésének is ez a terület volt a központja. A sűrű fenyvesek mélyén ráadásul a lengyel ellenállás számos történelmi emlékhelye, partizánsírja is megbújik. (Földrajz K6 — Kontinentális dűnék és lápok)"
    },
    factsAdvanced: {
      hu: ["A nemzeti park több mint 38 ezer hektáron terül el, ami egyedülálló egy európai főváros tőszomszédságában.", "A területet 2000-ben az UNESCO bioszféra-rezervátummá nyilvánította.", "A park homokdűnéi a jégkorszakot követő erős szelek munkájának eredményeként alakultak ki."]
    }
  },
  {
    id: "industry-bełchatow-power-station-extra",
    type: "industry",
    parent: "PL-LD",
    coords: [19.37, 51.28],
    name: { de: "Kraftwerk Bełchatów", hu: "Bełchatówi erőmű", ro: "Centrala Bełchatów", en: "Bełchatów Power Station" },
    description: {
      de: "Das größte Wärmekraftwerk Europas und das größte Braunkohlekraftwerk der Welt. Es ist der größte einzelne CO2-Emittent in der Europäischen Union.",
      hu: "Európa legnagyobb hőerőműve és a világ legnagyobb lignittüzelésű erőműve. Az Európai Unió legnagyobb egyedi szén-dioxid-kibocsátója.",
      ro: "Cea mai mare termocentrală din Europa și cea mai mare centrală pe lignit din lume. Este cel mai mare emițător individual de CO2 din Uniunea Europeană.",
      en: "The largest thermal power station in Europe and the world's largest lignite-fired power plant. It is the largest single CO2 emitter in the European Union."
    },
    facts: {
      de: ["Größter CO2-Emittent in der EU.", "Produziert etwa 20% des polnischen Stroms.", "Befeuert durch den nahegelegenen Tagebau Bełchatów."],
      hu: ["Az EU legnagyobb szén-dioxid-kibocsátója.", "Lengyelország villamosenergia-termelésének mintegy 20%-át adja.", "A közeli bełchatówi külszíni bánya látja el tüzelőanyaggal."],
      ro: ["Cel mai mare emițător de CO2 din UE.", "Produce aproximativ 20% din electricitatea Poloniei.", "Alimentată de mina de suprafață Bełchatów din apropiere."],
      en: ["Largest CO2 emitter in the EU.", "Produces about 20% of Poland's electricity.", "Fueled by the nearby Bełchatów open-cast mine."]
    },
    descriptionAdvanced: {
      hu: "A Bełchatówi erőmű egy döbbenetes méretű, sötét felhőket okádó ipari monstrum, amely a modern kori Lengyelország energiaéhségének legfőbb csillapítója. A komplexum a világ legnagyobb lignittüzelésű erőműve, amely gigantikus hűtőtornyaival uralja Łódź vajdaság déli részének látképét. A vele szimbiózisban működő, több száz méter mély külszíni bánya naponta elképesztő mennyiségű szenet biztosít a kazánok számára. Méretei ellenére az erőmű folyamatosan az európai klímavédelmi viták kereszttüzében áll, hiszen egyedül felelős az ország szén-dioxid-kibocsátásának jelentős részéért. (Földrajz K8 — Fosszilis energiatermelés és klímaváltozás)"
    },
    factsAdvanced: {
      hu: ["Az erőmű két kéménye 300 méteres magasságával Európa legmagasabb szabadon álló szerkezetei közé tartozik.", "A létesítmény évente több mint 30 millió tonna szén-dioxidot juttat a légkörbe.", "A kimerült bányagödrök egy részét a jövőben hatalmas mesterséges tavakká tervezik alakítani."]
    }
  },
  {
    id: "kid-landmark-manufaktura-lodz-extra",
    type: "kid-landmark",
    parent: "PL-LD",
    coords: [19.45, 51.77],
    name: { de: "Manufaktura Łódź", hu: "Manufaktura Łódź", ro: "Manufaktura Łódź", en: "Manufaktura Łódź" },
    description: {
      de: "Ein riesiges Einkaufs-, Kunst- und Kulturzentrum in einer ehemaligen Textilfabrik. Es ist ein Symbol für die Revitalisierung von Łódź.",
      hu: "Hatalmas bevásárló-, művészeti és kulturális központ egykori textilgyárban. Łódź revitalizációjának szimbóluma.",
      ro: "Un centru comercial, artistic și cultural masiv într-o fostă fabrică de textile. Este un simbol al revitalizării orașului Łódź.",
      en: "A massive shopping, arts, and cultural center in a former textile factory. It is a symbol of the revitalization of Łódź."
    },
    facts: {
      de: ["Größtes Einkaufszentrum in Polen.", "Umfasst Museen, ein Kino und ein Hotel.", "Auf dem Gelände einer ehemaligen Textilfabrik aus dem 19. Jahrhundert."],
      hu: ["Lengyelország legnagyobb bevásárlóközpontja.", "Múzeumokat, mozit és szállodát is magában foglal.", "Egy 19. századi textilgyár területén található."],
      ro: ["Cel mai mare centru comercial din Polonia.", "Include muzee, un cinematograf și un hotel.", "Pe locul unei foste fabrici de textile din secolul al XIX-lea."],
      en: ["Largest shopping center in Poland.", "Includes museums, a cinema, and a hotel.", "On the site of a former 19th-century textile factory."]
    },
    descriptionAdvanced: {
      hu: "A Manufaktura Łódź az ipari örökség megmentésének és modern újrahasznosításának egyik legbriliánsabb európai példája. Az egykori Izrael Poznański-féle gigantikus pamutgyár vöröstéglás épületegyüttese mára egy lüktető, 27 hektáros városi központtá változott. A komplexum a bevásárlás mellett kulturális hubként is funkcionál, hiszen területén kortárs művészeti múzeum (MS2), színházak és egy grandiózus főtér is helyet kapott, amelyet szökőkutak és teraszok díszítenek. A Manufaktura sikere valóságos katalizátora volt Łódź városképi és kulturális újjászületésének a posztindusztriális korszakban. (Történelem K7 — Ipari forradalom és posztindusztriális revitalizáció)"
    },
    factsAdvanced: {
      hu: ["A komplexum felújítása során több mint 45 ezer négyzetméternyi eredeti téglahomlokzatot restauráltak aprólékos munkával.", "Az egykori gyáralapító fényűző palotája közvetlenül a komplexum mellett áll, ma a Várostörténeti Múzeumnak ad otthont.", "A Manufaktura főterén telente Európa egyik legnagyobb szabadtéri jégpályája várja a látogatókat."]
    }
  },
  {
    id: "industry-zaklady-azotowe-pulawy-extra",
    type: "industry",
    parent: "PL-LU",
    coords: [21.97, 51.43],
    name: { de: "Stickstoffwerke Puławy", hu: "Puławy Nitrogénművek", ro: "Uzina de Azot Puławy", en: "Puławy Nitrogen Plant" },
    description: {
      de: "Einer der größten Hersteller von Stickstoffdüngemitteln in der Welt. Ein wichtiger Industriekomplex in der Woiwodschaft Lublin.",
      hu: "A világ egyik legnagyobb nitrogénműtrágya-gyártója. A Lublini vajdaság fontos ipari komplexuma.",
      ro: "Unul dintre cei mai mari producători de îngrășăminte cu azot din lume. Un complex industrial important în Voievodatul Lublin.",
      en: "One of the largest producers of nitrogen fertilizers in the world. A major industrial complex in the Lublin Voivodeship."
    },
    facts: {
      de: ["Großer Produzent von Melamin.", "Teil der Grupa Azoty.", "Wichtiger Arbeitgeber in der Region."],
      hu: ["Jelentős melamingyártó.", "A Grupa Azoty része.", "Fontos munkaadó a régióban."],
      ro: ["Producător major de melamină.", "Parte a Grupului Azoty.", "Angajator important în regiune."],
      en: ["Major producer of melamine.", "Part of Grupa Azoty.", "Important employer in the region."]
    },
    descriptionAdvanced: {
      hu: "A Puławy Nitrogénművek a lengyel vegyipar lüktető szíve, egy grandiózus indusztriális komplexum a festői Visztula folyó partján. Az 1960-as években alapított gyár óriási szerepet játszott az ország mezőgazdaságának modernizálásában azáltal, hogy biztosította a szükséges műtrágya-ellátást. A hatalmas, gőzölgő hűtőtornyok és a kilométereken át kanyargó csőrendszerek ma a legmodernebb ammónia- és melamingyártó technológiákat rejtik. A gyár gazdasági súlya miatt Puławy és az egész Lublini vajdaság egyik legfontosabb munkaadója és fejlődési motorja. (Kémia K8 — Műtrágyagyártás és ipari vegyészet)"
    },
    factsAdvanced: {
      hu: ["A vállalat a világ három legnagyobb melamin-előállítója közé tartozik.", "A gyár saját, dedikált hőerőművel rendelkezik a hatalmas energiaigény fedezésére.", "A Visztula vize kulcsfontosságú a gyártási folyamatok hűtéséhez, bár a környezetvédelmi előírások ma már szigorúan szabályozzák a vízhasználatot."]
    }
  },
  {
    id: "nature-roztocze-national-park-extra",
    type: "nature",
    parent: "PL-LU",
    coords: [23.0, 50.6],
    name: { de: "Nationalpark Roztocze", hu: "Roztocze Nemzeti Park", ro: "Parcul Național Roztocze", en: "Roztocze National Park" },
    description: {
      de: "Ein Nationalpark, der die Hügellandschaft von Roztocze schützt. Bekannt für seine tiefen Schluchten, Wasserfälle und die Zucht des polnischen Konik-Pferdes.",
      hu: "Nemzeti park, amely a Roztocze dombvidékét védi. Mély szurdokairól, vízeséseiről és a lengyel konik ló tenyésztéséről ismert.",
      ro: "Un parc național care protejează peisajul deluros din Roztocze. Cunoscut pentru văile sale adânci, cascadele și creșterea calului polonez Konik.",
      en: "A national park protecting the Roztocze hills landscape. Known for its deep ravines, waterfalls, and the breeding of the Polish Konik horse."
    },
    facts: {
      de: ["Zuchtprogramm für das polnische Konik-Pferd.", "Charakteristische Tannen- und Buchenwälder.", "Beliebt für Rad- und Wandertouren."],
      hu: ["Tenyésztési program a lengyel konik ló számára.", "Jellegzetes jegenyefenyő- és bükkerdők.", "Népszerű kerékpáros és túrázási célpont."],
      ro: ["Program de creștere pentru calul polonez Konik.", "Păduri caracteristice de brad și fag.", "Popular pentru ciclism și drumeții."],
      en: ["Breeding program for the Polish Konik horse.", "Characteristic fir and beech forests.", "Popular for cycling and hiking tours."]
    },
    descriptionAdvanced: {
      hu: "A Roztocze Nemzeti Park a kelet-lengyelországi dombvidék érintetlen szigete, ahol sűrű, ősi jegenyefenyvesek és mély szurdokvölgyek váltják egymást. A terület sajátos mikroklímája a hegyvidéki és a síkvidéki növényzet lenyűgöző keveredését teszi lehetővé, ami egyedülálló biológiai sokféleséget eredményez. A park talán leghíresebb lakója a lengyel konik, egy kistermetű, vadlóra emlékeztető lófajta, amelyet itt félig vadon, hatalmas erdős kifutókban tenyésztenek. A parkot átszelő Wieprz és Tanew folyók festői, zuhatagos medreikkel a kajakosok és a természetfotósok kedvenc célpontjai. (Biológia K6 — Erdei ökoszisztémák és őshonos fajok megmentése)"
    },
    factsAdvanced: {
      hu: ["A konik lovakat a már kihalt európai vadló, a tarpán közvetlen leszármazottainak tartják.", "A park erdeinek több mint 95 százaléka teljesen természetes, emberi beavatkozástól mentes.", "A Zwierzyniec településen található egykori Zamoyski-uradalom a park történelmi és adminisztratív központja."]
    }
  },
  {
    id: "historical-majdanek-extra",
    type: "historical",
    parent: "PL-LU",
    coords: [22.60, 51.22],
    name: { de: "KZ Majdanek", hu: "Majdanek koncentrációs tábor", ro: "Lagărul de concentrare Majdanek", en: "Majdanek Concentration Camp" },
    description: {
      de: "Ein deutsches Konzentrations- und Vernichtungslager aus dem Zweiten Weltkrieg am Rande von Lublin. Heute ein staatliches Museum und eine Gedenkstätte.",
      hu: "Német koncentrációs és megsemmisítő tábor a második világháborúból Lublin határában. Ma állami múzeum és emlékhely.",
      ro: "Un lagăr de concentrare și exterminare nazist din Al Doilea Război Mondial, la periferia orașului Lublin. Astăzi este un muzeu de stat și un memorial.",
      en: "A Nazi German concentration and extermination camp from World War II on the outskirts of Lublin. Today a state museum and memorial."
    },
    facts: {
      de: ["Eines der am besten erhaltenen Lager.", "Liegt innerhalb der heutigen Stadtgrenzen von Lublin.", "Staatliches Museum seit 1944."],
      hu: ["Az egyik legjobb állapotban fennmaradt tábor.", "Lublin mai városi határain belül található.", "Állami múzeum 1944 óta."],
      ro: ["Unul dintre cele mai bine conservate lagăre.", "Situat în interiorul limitelor actuale ale orașului Lublin.", "Muzeu de stat din 1944."],
      en: ["One of the best-preserved camps.", "Located within the modern city limits of Lublin.", "State museum since 1944."]
    },
    descriptionAdvanced: {
      hu: "A Majdanek koncentrációs tábor a Holokauszt egyik leghírhedtebb és legkegyetlenebb helyszíne, amely megdöbbentő módon közvetlenül Lublin városának határában épült fel. A náci Németország 1941 és 1944 között működtette a tábort, ahol zsidók, lengyelek és szovjet hadifoglyok tízezreit végezték ki vagy dolgoztatták halálra borzalmas körülmények között. Mivel a tábort a Vörös Hadsereg hirtelen előrenyomulása miatt a náciknak nem volt idejük teljesen megsemmisíteni, a barakkok, a gázkamrák és a krematóriumok szinte érintetlenül maradtak fenn. A bejáratnál álló gigantikus, kőből faragott emlékmű és a hamvakat őrző mauzóleum letaglózó erejű mementói az emberi gonoszságnak. (Történelem K8 — A Holokauszt és a náci megsemmisítő táborok)"
    },
    factsAdvanced: {
      hu: ["Majdanek volt az első náci koncentrációs tábor, amelyet a szövetséges erők felszabadítottak.", "A tábor területén működő állami múzeum már 1944 novemberében megnyitotta kapuit.", "A tábor megálmodója, Heinrich Himmler egy SS-város és ipari központ magjaként tervezte a komplexumot."]
    }
  },
  {
    id: "animal-habitat-polesie-national-park-extra",
    type: "nature",
    parent: "PL-LU",
    coords: [23.17, 51.45],
    name: { de: "Nationalpark Polesie", hu: "Polesie Nemzeti Park", ro: "Parcul Național Polesie", en: "Polesie National Park" },
    description: {
      de: "Ein Nationalpark, der Tundra-ähnliche Torfmoore und Feuchtgebiete schützt. Teil eines internationalen Biosphärenreservats, das sich bis nach Weißrussland und in die Ukraine erstreckt.",
      hu: "Nemzeti park, amely tundra-szerű tőzeglápokat és vizes élőhelyeket véd. Egy nemzetközi bioszféra-rezervátum része, amely Fehéroroszországba és Ukrajnába is átnyúlik.",
      ro: "Un parc național care protejează turbării și zone umede asemănătoare tundrei. Parte a unei rezervații internaționale a biosferei care se întinde în Belarus și Ucraina.",
      en: "A national park protecting tundra-like peat bogs and wetlands. Part of an international biosphere reserve extending into Belarus and Ukraine."
    },
    facts: {
      de: ["Schützt subarktische Torfmoore.", "Heimat von Sumpfschildkröten und Elchen.", "Grenzüberschreitendes Biosphärenreservat Westpolesien."],
      hu: ["Szubarktikus tőzeglápokat véd.", "Mocsári teknősök és jávorszarvasok otthona.", "Nyugat-Polesie határon átnyúló bioszféra-rezervátum."],
      ro: ["Protejează turbăriile subarctice.", "Adăpostește broaște țestoase de baltă și elani.", "Rezervația transfrontalieră a biosferei Polesiei de Vest."],
      en: ["Protects sub-arctic peat bogs.", "Home to pond turtles and moose.", "West Polesie Transboundary Biosphere Reserve."]
    },
    descriptionAdvanced: {
      hu: "A Polesie Nemzeti Park a kelet-európai síkságok egyik utolsó, érintetlen vadvízi oázisa, ahol a jégkorszakot idéző tajgaszerű tőzeglápok és sekély tavak uralják a tájat. A terület szinte teljesen sík, és olyan különleges húsevő növényeknek ad otthont, mint a harmatfű, valamint rendkívül ritka orchideafajoknak. Európa egyik legjelentősebb mocsári teknős populációja is itt talál menedéket a háborítatlan, napfényes iszapos partokon. A park az ukrán és belarusz határokon átnyúló nemzetközi Nyugat-Polesie Bioszféra Rezervátum része, ami kiemeli globális ökológiai fontosságát. (Földrajz K6 — Tőzeglápok és vizes élőhelyek védelme)"
    },
    factsAdvanced: {
      hu: ["A park faunája több mint 200 madárfajt számlál, köztük a fokozottan védett darut és a fekete gólyát.", "A sekély tavak nyáron gyakran teljesen kiszáradnak, egyedi iszapos ökoszisztémát hagyva hátra.", "A látogatók a mocsarakat csak speciálisan megépített, fapallós tanösvényeken közelíthetik meg."]
    }
  },
  {
    id: "city-plock-extra",
    type: "city",
    parent: "PL-MA",
    coords: [19.70, 52.54],
    name: { de: "Płock", hu: "Płock", ro: "Płock", en: "Płock" },
    description: {
      de: "Eine der ältesten Städte Polens und eine ehemalige Hauptstadt. Liegt malerisch an der Weichsel und beherbergt eine der größten Raffinerien des Landes.",
      hu: "Lengyelország egyik legrégebbi városa és egykori fővárosa. Festői helyen, a Visztula partján fekszik, és itt található az ország egyik legnagyobb finomítója.",
      ro: "Unul dintre cele mai vechi orașe din Polonia și o fostă capitală. Situat pitoresc pe Vistula, găzduiește una dintre cele mai mari rafinării din țară.",
      en: "One of the oldest cities in Poland and a former capital. Picturesquely located on the Vistula, it is home to one of the country's largest refineries."
    },
    facts: {
      de: ["Ehemalige Hauptstadt Polens im 11.-12. Jh.", "Wichtiger Standort für PKN Orlen.", "Romanische Kathedrale mit Gräbern polnischer Monarchen."],
      hu: ["Lengyelország egykori fővárosa a 11-12. században.", "A PKN Orlen fontos telephelye.", "Román stílusú katedrális lengyel uralkodók sírjaival."],
      ro: ["Fostă capitală a Poloniei în sec. XI-XII.", "Amplasament important pentru PKN Orlen.", "Catedrală romanică cu morminte ale monarhilor polonezi."],
      en: ["Former capital of Poland in the 11th-12th c.", "Major site for PKN Orlen.", "Romanesque cathedral with tombs of Polish monarchs."]
    },
    descriptionAdvanced: {
      hu: "Płock a Visztula folyó meredek, festői partoldalán trónoló város, amely a 11. és 12. század fordulóján rövid ideig Lengyelország fővárosaként is tündökölt. A Dóm-hegyen emelkedő román stílusú katedrális nemcsak az ország egyik legősibb egyházi épülete, hanem két jelentős lengyel uralkodó, I. (Hős) Boleszláv és III. (Ferdeájú) Boleszláv végső nyughelye is. A gazdag középkori történelem azonban éles kontrasztban áll a város modern arcával, hiszen itt működik Kelet-Európa egyik legnagyobb olajfinomítója. Płock így egyedülálló módon ötvözi a királyi pompát az ipari monumentalitással. (Történelem K6 — A Piast-dinasztia kora és a lengyel államalapítás)"
    },
    factsAdvanced: {
      hu: ["A katedrális híres bronzajtajának másolata az épület egyik fő látványossága; az eredeti jelenleg a novgorodi Szent Zsófia-székesegyházban található.", "A városban található Lengyelország legrégebbi, 1180-ban alapított középiskolája, a Małachowianka.", "A Visztula partfaláról (Tumskie-domb) lenyűgöző panoráma nyílik az ország leghosszabb folyójára."]
    }
  },
  {
    id: "industry-silesian-voivodeship-industry-extra",
    type: "industry",
    parent: "PL-SL",
    coords: [19.0, 50.25],
    name: { de: "Industrieregion Schlesien", hu: "Sziléziai iparvidék", ro: "Regiunea industrială Silezia", en: "Silesian Industrial Region" },
    description: {
      de: "Das Herz der polnischen Schwerindustrie, insbesondere des Kohlebergbaus und der Stahlproduktion. Eine Region im Wandel von der traditionellen Industrie zu neuen Technologien.",
      hu: "A lengyel nehézipar, különösen a szénbányászat és az acélgyártás szíve. A régió a hagyományos iparról az új technológiákra való áttérés folyamatában van.",
      ro: "Inima industriei grele poloneze, în special a mineritului de cărbune și a producției de oțel. O regiune în tranziție de la industria tradițională la noile tehnologii.",
      en: "The heart of Polish heavy industry, especially coal mining and steel production. A region undergoing a transition from traditional industry to new technologies."
    },
    facts: {
      de: ["Größtes städtisches Gebiet in Polen.", "Historisches Zentrum des Kohlebergbaus.", "Industriedenkmälerroute (Szlak Zabytków Techniki)."],
      hu: ["Lengyelország legnagyobb városi területe.", "A szénbányászat történelmi központja.", "Ipari Műemlékek Útvonala (Szlak Zabytków Techniki)."],
      ro: ["Cea mai mare zonă urbană din Polonia.", "Centru istoric al mineritului de cărbune.", "Ruta Monumentelor Industriale (Szlak Zabytków Techniki)."],
      en: ["Largest urban area in Poland.", "Historical center of coal mining.", "Trail of the Industrial Monuments (Szlak Zabytków Techniki)."]
    },
    descriptionAdvanced: {
      hu: "A Sziléziai iparvidék Felső-Szilézia füstös, de büszke szíve, ahol a szén, a vas és az acél évszázadokon át diktálta az élet ritmusát. Ez az európai viszonylatban is gigantikus, szorosan egybeépült városhalmaz egykor a kontinens egyik legzsúfoltabb és legszennyezettebb régiója volt. A 21. századba lépve azonban radikális átalakuláson ment keresztül: az egykori bányák, kohók és gyárkémények helyén ma gyakran kulturális központok, technológiai parkok és múzeumok állnak. Az Ipari Műemlékek Útvonala (Szlak Zabytków Techniki) egyedülálló módon fűzi fel ezt a gazdag technikatörténeti örökséget. (Földrajz K8 — A nehézipar hanyatlása és a régiók revitalizációja)"
    },
    factsAdvanced: {
      hu: ["A régió agglomerációja több mint kétmillió lakost számlál, így Lengyelország legnépesebb városi területe.", "Az egykori szénbányák mélyén ma már földalatti éttermek, koncerttermek és kiállítások várják a látogatókat.", "A sziléziai iparosodás a 18. század végén indult virágzásnak a porosz uralom alatt."]
    }
  },
  {
    id: "landmark-trail-of-eagles-nests-extra",
    type: "landmark",
    parent: "PL-SL",
    coords: [19.5, 50.45],
    name: { de: "Adlerhorst-Route", hu: "Saskastélyok útvonala", ro: "Traseul Cuiburilor de Vulturi", en: "Trail of the Eagles' Nests" },
    description: {
      de: "Eine Kette mittelalterlicher Burgen, die auf hohen Felsen im Krakau-Tschenstochauer Jura errichtet wurden und Adlernestern ähneln. Eine beliebte Touristenroute.",
      hu: "Középkori várak láncolata, amelyeket a Krakkó-Częstochowai-fennsík magas szikláira építettek, sasfészkekre emlékeztetve. Népszerű turisztikai útvonal.",
      ro: "Un lanț de castele medievale construite pe stânci înalte în Jura Krakov-Częstochowa, semănând cu cuiburile de vulturi. O rută turistică populară.",
      en: "A chain of medieval castles built on high rocks in the Kraków-Częstochowa Upland, resembling eagles' nests. A popular tourist trail."
    },
    facts: {
      de: ["25 mittelalterliche Burgen und Ruinen.", "Verbindet Krakau mit Tschenstochau.", "Spektakuläre Kalksteinfelsen."],
      hu: ["25 középkori vár és rom.", "Összeköti Krakkót Częstochowával.", "Látványos mészkősziklák."],
      ro: ["25 de castele și ruine medievale.", "Leagă Cracovia de Częstochowa.", "Stânci spectaculoase de calcar."],
      en: ["25 medieval castles and ruins.", "Connects Krakow with Częstochowa.", "Spectacular limestone cliffs."]
    },
    descriptionAdvanced: {
      hu: "A Saskastélyok útvonala egy varázslatos történelmi zarándoklat a Krakkó-Częstochowai-fennsík fehér mészkősziklái között. A 14. században, Nagy Kázmér király utasítására emelt erődítmény-hálózat eredeti célja a lengyel királyság déli határainak és a fontos kereskedelmi útvonalaknak a védelme volt. A sziklaszirtekkel szinte szervesen egybeépült, sasfészkekre emlékeztető várak és őrtornyok többsége a svéd háborúk során romba dőlt, de festői maradványaik ma is uralják a tájat. Az útvonal 163 kilométer hosszan kanyarog lenyűgöző szurdokokon és buja erdőkön keresztül. (Történelem K7 — Középkori védelmi rendszerek és várépítészet)"
    },
    factsAdvanced: {
      hu: ["A legismertebb és legimpozánsabb rom a Pieskowa Skała-i kastély, amely teljesen felújítva ma múzeumként működik.", "A mészkősziklák népszerű célpontjai a sziklamászóknak, rengeteg kiépített útvonallal.", "A várak többségét a sziklákból kitermelt helyi kőzetekből építették, így azok szinte észrevehetetlenül olvadnak bele a hegyoldalba."]
    }
  },
  {
    id: "animal-habitat-silesian-zoo-extra",
    type: "animal-habitat",
    parent: "PL-SL",
    coords: [18.98, 50.27],
    name: { de: "Schlesischer Zoologischer Garten", hu: "Sziléziai Állatkert", ro: "Grădina Zoologică Sileziană", en: "Silesian Zoological Garden" },
    description: {
      de: "Der Schlesische Zoo befindet sich im Schlesischen Park in Chorzów und beherbergt fast 2.500 Tiere. Er verfügt auch über ein Dinosauriertal.",
      hu: "A Sziléziai Állatkert a chorzówi Sziléziai Parkban található, és közel 2500 állatnak ad otthont. Dinoszaurusz-völggyel is rendelkezik.",
      ro: "Situată în Parcul Silezian din Chorzów, Grădina Zoologică Sileziană găzduiește aproape 2.500 de animale. De asemenea, include o vale a dinozaurilor.",
      en: "Located in the Silesian Park in Chorzów, the Silesian Zoological Garden is home to almost 2,500 animals. It also features a dinosaur valley."
    },
    facts: {
      de: ["Im riesigen Schlesischen Park gelegen.", "Dinosauriertal mit lebensgroßen Modellen.", "Gegründet 1954."],
      hu: ["A hatalmas Sziléziai Parkban található.", "Dinoszaurusz-völgy életnagyságú modellekkel.", "1954-ben alapították."],
      ro: ["Situată în imensul Parc Silezian.", "Valea Dinozaurilor cu modele în mărime naturală.", "Fondată în 1954."],
      en: ["Located in the vast Silesian Park.", "Dinosaur Valley with life-size models.", "Founded in 1954."]
    },
    descriptionAdvanced: {
      hu: "A Sziléziai Állatkert a Chorzów és Katowice határán elterülő gigantikus Sziléziai Park (Park Śląski) egyik leglátogatottabb ékköve. Az 1950-es években egy posztindusztriális, bányászati meddőhányókkal tarkított területen hozták létre, ami igazi ökológiai csodának számít. A tágas kifutókban a világ minden tájáról származó, több mint 300 faj képviselői élnek, beleértve a ritka szibériai tigriseket és az indiai orrszarvúkat is. Az állatkert talán legemblematikusabb része a Dinoszaurusz-völgy, ahol életnagyságú, az 1970-es években készült beton őslényszobrok várják a gyerekeket. (Biológia K6 — Zootoológia és élőhely-rekonstrukció)"
    },
    factsAdvanced: {
      hu: ["Az állatkert kapuját díszítő monumentális kőoroszlánt a 19. században Donnersmarck gróf kastélyából szállították ide.", "A Dinoszaurusz-völgy szobrai az 1960-as és 70-es évek lengyel-mongol góbi sivatagi expedícióinak felfedezésein alapulnak.", "Az állatkert területén egy gyönyörű, kötélpályás felvonó is működik, az úgynevezett 'Elka'."]
    }
  },
  {
    id: "historical-guido-mine-extra",
    type: "historical",
    parent: "PL-SL",
    coords: [18.82, 50.29],
    name: { de: "Schaubergwerk Guido", hu: "Guido bánya", ro: "Mina Guido", en: "Guido Mine" },
    description: {
      de: "Ein historisches Kohlebergwerk in Zabrze, das in ein Museum umgewandelt wurde. Besucher können in die Stollen einfahren und die Arbeitsbedingungen der Bergleute erleben.",
      hu: "Történelmi szénbánya Zabrzében, amelyet múzeummá alakítottak át. A látogatók leereszkedhetnek a tárnákba, és megtapasztalhatják a bányászok munkakörülményeit.",
      ro: "O mină de cărbune istorică din Zabrze, transformată în muzeu. Vizitatorii pot coborî în galerii și pot experimenta condițiile de muncă ale minerilor.",
      en: "A historic coal mine in Zabrze, turned into a museum. Visitors can descend into the tunnels and experience the working conditions of miners."
    },
    facts: {
      de: ["Teil der Route der Industriedenkmäler.", "Besucherebenen auf 170m und 320m Tiefe.", "Tiefstgelegener Pub Europas."],
      hu: ["Az Ipari Műemlékek Útvonalának része.", "Látogatói szintek 170 és 320 méter mélyen.", "Európa legmélyebben fekvő kocsmája."],
      ro: ["Parte a Rutei Monumentelor Industriale.", "Niveluri pentru vizitatori la 170m și 320m adâncime.", "Cel mai adânc pub din Europa."],
      en: ["Part of the Industrial Monuments Trail.", "Visitor levels at 170m and 320m depth.", "Europe's deepest pub."]
    },
    descriptionAdvanced: {
      hu: "A Guido bánya Zabrze városában a sziléziai szénbányászat dicsőséges múltjának legautentikusabb emlékműve. Az 1855-ben Guido Henckel von Donnersmarck gróf által alapított vágatokban a látogatók szó szerint alámerülhetnek a Föld gyomrába, egészen 320 méteres mélységig. A túra során eredeti, működő bányagépek zajában és a sötét járatokban tapasztalhatják meg a vájárok egykori embert próbáló munkakörülményeit. A bánya mélyén nemcsak történelem, hanem szórakozás is várja az érdeklődőket: itt üzemel Európa legmélyebben fekvő kocsmája, sőt földalatti koncerteket is rendeznek. (Földrajz K8 — Bányászat és ipartörténet)"
    },
    factsAdvanced: {
      hu: ["A látogatókat eredeti, a bányászok által is használt aknakasok (liftek) szállítják a mélybe.", "A 320 méteres szinten kipróbálható egy modern függővasút, amellyel a szenet és a munkásokat szállították a járatokban.", "A bánya egyes szakaszain olyan erős a huzat a szellőztetőrendszer miatt, hogy állandóan hűvös van lent, évszaktól függetlenül."]
    }
  },
  {
    id: "city-zakopane-extra",
    type: "city",
    parent: "PL-MA",
    coords: [19.95, 49.29],
    name: { de: "Zakopane", hu: "Zakopane", ro: "Zakopane", en: "Zakopane" },
    description: {
      de: "Die 'Winterhauptstadt' Polens, am Fuße des Tatra-Gebirges gelegen. Ein beliebtes Ziel für Skifahrer, Wanderer und Liebhaber der Goralen-Kultur.",
      hu: "Lengyelország 'téli fővárosa', a Tátra lábánál. Népszerű célpont síelők, túrázók és a gorál kultúra kedvelői számára.",
      ro: "'Capitala de iarnă' a Poloniei, situată la poalele Munților Tatra. O destinație populară pentru schiori, drumeți și iubitorii culturii Goral.",
      en: "The 'winter capital' of Poland, located at the foot of the Tatra Mountains. A popular destination for skiers, hikers, and lovers of Goral culture."
    },
    facts: {
      de: ["Höchstgelegene Stadt in Polen.", "Zentrum der Goralen-Kultur.", "Tor zum Tatra-Nationalpark."],
      hu: ["Lengyelország legmagasabban fekvő városa.", "A gorál kultúra központja.", "Kapuja a Tátrai Nemzeti Parknak."],
      ro: ["Orașul situat la cea mai mare altitudine din Polonia.", "Centrul culturii Goral.", "Poarta de acces către Parcul Național Tatra."],
      en: ["Highest town in Poland.", "Center of the Goral highlander culture.", "Gateway to the Tatra National Park."]
    },
    descriptionAdvanced: {
      hu: "Zakopane a Tátra fenséges bércei alatt megbújó üdülőváros, amelyet Lengyelország 'téli fővárosaként' is emlegetnek. A 19. század végéig apró pásztorfalu volt, amíg a friss hegyi levegő és a lenyűgöző panoráma fel nem fedezte magának a lengyel értelmiség és művészvilág. A város építészetét a Stanisław Witkiewicz által megalkotott 'zakopanei stílus' határozza meg, amely a helyi gorál fafaragó hagyományokat emelte nemzeti művészeti rangra. Ma a nyüzsgő Krupówki utca, a füstölt oscypek sajt illata és a környező sípályák évente milliókat vonzanak. (Földrajz K6 — Hegyvidéki turizmus és helyi kultúrák)"
    },
    factsAdvanced: {
      hu: ["A város Lengyelország legmagasabban fekvő települése, központja mintegy 840 méter magasan van.", "A híres oscypek, a díszesen formázott füstölt juhsajt szigorúan védett európai eredetmegjelöléssel rendelkezik.", "A közeli Wielka Krokiew csúcsán található Európa egyik leghíresebb síugrósánca."]
    }
  },
  {
    id: "mountain-rysy-extra",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.08, 49.17],
    name: { de: "Rysy", hu: "Tengerszem-csúcs", ro: "Vârful Rysy", en: "Rysy" },
    description: {
      de: "Der höchste Berg Polens in der Hohen Tatra. Der Gipfel liegt an der Grenze zwischen Polen und der Slowakei und bietet eine atemberaubende Aussicht.",
      hu: "Lengyelország legmagasabb hegye a Magas-Tátrában. A csúcs a lengyel-szlovák határon fekszik, és lélegzetelállító kilátást nyújt.",
      ro: "Cel mai înalt munte din Polonia, situat în Munții Tatra Înaltă. Vârful se află la granița dintre Polonia și Slovacia și oferă o priveliște uluitoare.",
      en: "The highest mountain in Poland, located in the High Tatras. The summit is on the border between Poland and Slovakia and offers a breathtaking view."
    },
    facts: {
      de: ["Höchster Punkt Polens (2.499 m).", "Liegt an der Grenze zur Slowakei.", "Beliebtes, aber anspruchsvolles Wanderziel."],
      hu: ["Lengyelország legmagasabb pontja (2499 m).", "A szlovák határon fekszik.", "Népszerű, de kihívást jelentő túracélpont."],
      ro: ["Cel mai înalt punct din Polonia (2.499 m).", "Situat la granița cu Slovacia.", "Destinație populară, dar dificilă, pentru drumeții."],
      en: ["Highest point in Poland (2,499 m).", "Located on the border with Slovakia.", "Popular but challenging hiking destination."]
    },
    descriptionAdvanced: {
      hu: "A Tengerszem-csúcs (Rysy) a Magas-Tátra és egyben Lengyelország legmagasabb pontja, amelynek három csúcsa közül az északnyugati (2499 m) jelöli a határt Szlovákiával. A gránitbércek közé szorult, meredek sziklafalakkal övezett hegy a kihívást kereső túrázók és hegymászók legáhítottabb lengyelországi trófeája. A csúcs meghódítása komoly fizikai felkészültséget és olykor láncos biztosítások használatát igényli a lengyel oldalról indulva. Fentről páratlan kilátás nyílik a festői Halastóra (Morskie Oko) és a környező több mint száz kárpáti csúcsra. (Földrajz K7 — Magashegységi formák és gleccsertavak)"
    },
    factsAdvanced: {
      hu: ["A hegy neve a hegyoldalakat átszelő jellegzetes hasadékokra, 'karcokra' utal.", "A Rysy szlovákiai oldalán található csúcsa magasabb (2501 m), mint a lengyel határkőnél lévő pont.", "Nyári szezonban a csúcsra vezető láncos szakaszokon gyakran alakulnak ki 'túrázó dugók' a hatalmas érdeklődés miatt."]
    }
  },
  {
    id: "landmark-kasprowy-wierch-cable-car-extra",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.98, 49.23],
    name: { de: "Kasprowy-Wierch-Seilbahn", hu: "Kasprowy Wierch felvonó", ro: "Telecabina Kasprowy Wierch", en: "Kasprowy Wierch Cable Car" },
    description: {
      de: "Eine berühmte Seilbahn, die Touristen auf den Gipfel des Kasprowy Wierch in der Tatra bringt. Bietet spektakuläre Panoramablicke das ganze Jahr über.",
      hu: "Híres felvonó, amely a turistákat a Kasprowy Wierch csúcsára szállítja a Tátrában. Egész évben látványos panorámát kínál.",
      ro: "O faimoasă telecabină care transportă turiștii pe vârful Kasprowy Wierch din Munții Tatra. Oferă vederi panoramice spectaculoase pe tot parcursul anului.",
      en: "A famous cable car that takes tourists to the summit of Kasprowy Wierch in the Tatra Mountains. Offers spectacular panoramic views all year round."
    },
    facts: {
      de: ["Erbaut in den 1930er Jahren.", "Erreicht eine Höhe von 1.987 m.", "Beliebter Ausgangspunkt für Skifahrer und Wanderer."],
      hu: ["Az 1930-as években épült.", "Eléri az 1987 méteres magasságot.", "Népszerű kiindulópont síelők és túrázók számára."],
      ro: ["Construită în anii 1930.", "Atinge o altitudine de 1.987 m.", "Punct de plecare popular pentru schiori și drumeți."],
      en: ["Built in the 1930s.", "Reaches an altitude of 1,987 m.", "Popular starting point for skiers and hikers."]
    },
    descriptionAdvanced: {
      hu: "A Kasprowy Wierch (Gáspár-csúcs) felvonó a lengyel mérnöki zsenialitás és a hegyvidéki turizmus ikonikus szimbóluma a Tátrában. Az 1930-as évek közepén mindössze 227 nap alatt építették fel, munkások ezrei cipelték kézzel vagy lovas szánokon a hatalmas acélelemeket a meredek hegyoldalakon. A kabinok Kuźnicéből indulva egy átszállással repítik a látogatókat közel 2000 méteres magasságba, drámai kilátást nyújtva a fenyvesekre és a kopár sziklákra. Télen a csúcs a lengyel sísport fellegvára, ahonnan az ország legmagasabban fekvő és leghosszabb sípályái indulnak. (Földrajz K6 — Turisztikai infrastruktúra magashegységekben)"
    },
    factsAdvanced: {
      hu: ["A felvonó felső állomása 1959 méteres magasságban található, közvetlenül a meteorológiai obszervatórium mellett.", "Építése idején a technológia élvonalába tartozott, és a modernizációk ellenére megőrizte történelmi nyomvonalát.", "Erős, a Tátrára jellemző 'halny' főnszél esetén a felvonó biztonsági okokból szünetelteti a járatokat."]
    }
  },
  {
    id: "city-sandomierz-extra",
    type: "city",
    parent: "PL-SK",
    coords: [21.75, 50.68],
    name: { de: "Sandomir", hu: "Sandomierz", ro: "Sandomierz", en: "Sandomierz" },
    description: {
      de: "Eine der ältesten und schönsten Städte Polens, malerisch auf sieben Hügeln über der Weichsel gelegen. Bekannt für ihre gut erhaltene Altstadt.",
      hu: "Lengyelország egyik legrégebbi és legszebb városa, festői helyen, hét dombon, a Visztula felett. Jól megőrzött óvárosáról ismert.",
      ro: "Unul dintre cele mai vechi și mai frumoase orașe din Polonia, situat pitoresc pe șapte coline deasupra Vistulei. Cunoscut pentru centrul său vechi bine conservat.",
      en: "One of the oldest and most beautiful cities in Poland, picturesquely situated on seven hills above the Vistula. Known for its well-preserved Old Town."
    },
    facts: {
      de: ["Lage auf sieben Hügeln.", "Gotische Kathedrale und Renaissance-Rathaus.", "Einzigartiger unterirdischer Touristenpfad."],
      hu: ["Hét dombon fekszik.", "Gótikus katedrális és reneszánsz városháza.", "Egyedülálló földalatti turisztikai útvonal."],
      ro: ["Situat pe șapte coline.", "Catedrală gotică și primărie renascentistă.", "Traseu turistic subteran unic."],
      en: ["Located on seven hills.", "Gothic cathedral and Renaissance town hall.", "Unique underground tourist route."]
    },
    descriptionAdvanced: {
      hu: "Sandomierz a Visztula folyó fölé magasodó hét dombon terül el, így gyakran 'Kis Rómának' is becézik. Lengyelország egyik legrégebbi települése, amely már a 11. században jelentős fejedelmi székhelyként és a folyami kereskedelem csomópontjaként virágzott. A város szerencsésen elkerülte a második világháború pusztításait, így macskaköves utcái, reneszánsz városházája és a gótikus Opatów-kapu ma is eredeti pompájukban csodálhatók meg. A várost átszelő titokzatos középkori pincerendszer, amelyet eredetileg bor- és sóraktárnak használtak, ma izgalmas turisztikai útvonalként szolgál. (Történelem K6 — Középkori kereskedővárosok virágzása)"
    },
    factsAdvanced: {
      hu: ["A sandomierzi lösztalajnak köszönhetően a környéken ismét reneszánszát éli a helyi borászat.", "A városháza pártázatos reneszánsz attikája a lengyel építészet egyik legszebb alkotása.", "A város alatt húzódó alagutak hossza egyes becslések szerint a 15 kilométert is elérheti."]
    }
  },
  {
    id: "landmark-palace-of-culture-and-science-extra",
    type: "landmark",
    parent: "PL-MA",
    coords: [21.00, 52.23],
    name: { de: "Kultur- und Wissenschaftspalast", hu: "Kultúra és Tudomány Palotája", ro: "Palatul Culturii și Științei", en: "Palace of Culture and Science" },
    description: {
      de: "Ein massives Hochhaus im Zentrum von Warschau, ein 'Geschenk' der Sowjetunion an das polnische Volk. Heute beherbergt es Theater, Museen und eine Aussichtsplattform.",
      hu: "Hatalmas toronyház Varsó központjában, a Szovjetunió 'ajándéka' a lengyel népnek. Ma színházaknak, múzeumoknak és egy kilátóterassznak ad otthont.",
      ro: "Un zgârie-nori masiv în centrul Varșoviei, un 'cadou' de la Uniunea Sovietică pentru poporul polonez. Astăzi găzduiește teatre, muzee și o punte de observație.",
      en: "A massive high-rise building in the center of Warsaw, a 'gift' from the Soviet Union to the people of Poland. Today it houses theaters, museums, and an observation deck."
    },
    facts: {
      de: ["Höchstes Gebäude in Polen.", "Ein umstrittenes Symbol der sowjetischen Herrschaft.", "Aussichtsplattform im 30. Stock."],
      hu: ["Lengyelország legmagasabb épülete.", "A szovjet uralom ellentmondásos szimbóluma.", "Kilátóterasz a 30. emeleten."],
      ro: ["Cea mai înaltă clădire din Polonia.", "Un simbol controversat al dominației sovietice.", "Punte de observație la etajul 30."],
      en: ["Tallest building in Poland.", "A controversial symbol of Soviet domination.", "Observation deck on the 30th floor."]
    },
    descriptionAdvanced: {
      hu: "A Kultúra és Tudomány Palotája (PKiN) Varsó legmagasabb és egyben legmegosztóbb épülete, a sztálini szocreál építészet monumentális szimbóluma. Az 1955-ben átadott felhőkarcolót Sztálin 'ajándékként' adományozta a lengyel népnek, felépítésén ezernél is több szovjet munkás dolgozott. Míg évtizedekig a szovjet elnyomás gyűlölt jelképe volt, mára a főváros arculatának elválaszthatatlan és sokak által kedvelt részévé vált. A 237 méter magas toronyban több színház, múzeum, egyetem és egy hatalmas kongresszusi terem is helyet kapott, 30. emeleti teraszáról pedig páratlan kilátás nyílik a modernizálódó Varsóra. (Történelem K8 — A hidegháború és a szocreál építészet)"
    },
    factsAdvanced: {
      hu: ["Építése során az orosz mérnökök igyekeztek lengyel történelmi motívumokat, például reneszánsz attikákat is belecsempészni a homlokzatba.", "A toronyóra a világ második legnagyobb olyan órája, amely egy felhőkarcolón kapott helyet.", "Több mint 3000 szobát rejt magában az épület, valóságos labirintust alkotva."]
    }
  },
  {
    id: "historical-polin-museum-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [20.99, 52.24],
    name: { de: "POLIN Museum", hu: "POLIN Múzeum", ro: "Muzeul POLIN", en: "POLIN Museum" },
    description: {
      de: "Museum der Geschichte der polnischen Juden auf dem Gelände des ehemaligen Warschauer Ghettos. Es dokumentiert 1000 Jahre jüdischen Lebens in Polen.",
      hu: "A Lengyelországi Zsidóság Történeti Múzeuma az egykori varsói gettó területén. 1000 év lengyelországi zsidó életet dokumentál.",
      ro: "Muzeul de Istorie a Evreilor Polonezi pe locul fostului ghetou din Varșovia. Documentează 1000 de ani de viață evreiască în Polonia.",
      en: "Museum of the History of Polish Jews on the site of the former Warsaw Ghetto. It documents 1000 years of Jewish life in Poland."
    },
    facts: {
      de: ["Gegenüber dem Denkmal für die Helden des Ghettos.", "Preisgekrönte Architektur.", "Kernausstellung über 1000 Jahre Geschichte."],
      hu: ["A gettó hőseinek emlékművével szemben található.", "Díjnyertes építészet.", "Az 1000 éves történelemről szóló központi kiállítás."],
      ro: ["Vizavi de Monumentul Eroilor Ghetoului.", "Arhitectură premiată.", "Expoziție de bază despre 1000 de ani de istorie."],
      en: ["Opposite the Monument to the Ghetto Heroes.", "Award-winning architecture.", "Core exhibition on 1000 years of history."]
    },
    descriptionAdvanced: {
      hu: "A POLIN Múzeum a lengyelországi zsidóság ezeréves történetének megrendítő és interaktív krónikája, amely pontosan az egykori varsói gettó szívében épült fel. Az üveg- és rézborítású, díjnyertes modern épületet egy hatalmas, szimbolikus hasadék szeli ketté, amely a Vörös-tenger szétnyílását és a zsidó történelem töréseit is jelképezi. A múzeum nem csupán a Holokausztra fókuszál, hanem bemutatja azt a gazdag és vibráló kulturális együttélést, amely Lengyelországot évszázadokon át a zsidóság globális központjává tette. Az aprólékosan rekonstruált gwoździeci fatemplom mennyezete a kiállítás egyik leglélegzetelállítóbb pontja. (Történelem K8 — A lengyel-zsidó kultúra és a Holokauszt)"
    },
    factsAdvanced: {
      hu: ["A 'Polin' héber szó, amelynek jelentése: 'Itt pihenhetsz meg'.", "A múzeum fő kiállításának elkészítésében több mint száz nemzetközi tudós és kurátor vett részt.", "Közvetlenül a múzeum bejárata előtt áll a Gettó Hőseinek híres emlékműve."]
    }
  },
  {
    id: "kid-landmark-copernicus-science-centre-extra",
    type: "kid-landmark",
    parent: "PL-MA",
    coords: [21.02, 52.24],
    name: { de: "Kopernikus-Wissenschaftszentrum", hu: "Kopernikusz Tudományos Központ", ro: "Centrul de Știință Copernic", en: "Copernicus Science Centre" },
    description: {
      de: "Eines der größten Wissenschaftsmuseen in Europa, mit Hunderten von interaktiven Exponaten. Ein Paradies für neugierige Kinder und Erwachsene.",
      hu: "Európa egyik legnagyobb tudományos múzeuma, több száz interaktív kiállítási tárggyal. A kíváncsi gyerekek és felnőttek paradicsoma.",
      ro: "Unul dintre cele mai mari muzee de știință din Europa, cu sute de exponate interactive. Un paradis pentru copiii și adulții curioși.",
      en: "One of the largest science museums in Europe, with hundreds of interactive exhibits. A paradise for curious children and adults."
    },
    facts: {
      de: ["Über 450 interaktive Exponate.", "Planetarium 'Himmel des Kopernikus'.", "Am Ufer der Weichsel gelegen."],
      hu: ["Több mint 450 interaktív kiállítási tárgy.", "'Kopernikusz Ege' planetárium.", "A Visztula partján található."],
      ro: ["Peste 450 de exponate interactive.", "Planetariul 'Cerul lui Copernic'.", "Situat pe malul Vistulei."],
      en: ["Over 450 interactive exhibits.", "Planetarium 'Heavens of Copernicus'.", "Located on the bank of the Vistula river."]
    },
    descriptionAdvanced: {
      hu: "A Kopernikusz Tudományos Központ (CNK) Közép-Kelet-Európa legnagyobb és legmodernebb interaktív tudományos múzeuma, a Visztula folyó modernizált varsói partján. Nevéhez méltóan, Nicolaus Copernicus szellemiségét követve az intézmény a kísérletezésre, a jelenségek saját kezű felfedezésére és a kritikus gondolkodásra épít. A látogatók robotokkal interakciózhatnak, megtapasztalhatják a földrengések erejét, vagy virtuális utazást tehetnek az emberi testben. Különleges, fémlemezekkel borított homlokzata és a mellette lévő hatalmas csillagászati planetárium Varsó innovatív arcát hangsúlyozza. (Fizika K6 — Természettudományos megismerés és fizikai kísérletek)"
    },
    factsAdvanced: {
      hu: ["A központnak nincs rögzített útvonala, a látogatók maguk fedezhetik fel a több száz kísérleti állomást.", "A tetőkertből, amely egyfajta 'biológiai laboratórium', gyönyörű kilátás nyílik a folyóra és a Nemzeti Stadionra.", "Az intézmény 'Kopernikusz Ege' planetáriuma az egyik legfejlettebb Európában, lézeres és 3D-s vetítőkkel."]
    }
  },
  {
    id: "historical-wilanow-palace-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [21.09, 52.16],
    name: { de: "Schloss Wilanów", hu: "Wilanów-palota", ro: "Palatul Wilanów", en: "Wilanów Palace" },
    description: {
      de: "Eine prächtige königliche Residenz am Rande von Warschau, oft als das 'polnische Versailles' bezeichnet. Umgeben von weitläufigen Gärten.",
      hu: "Pompás királyi rezidencia Varsó szélén, amelyet gyakran a 'lengyel Versailles'-ként emlegetnek. Hatalmas kertek veszik körül.",
      ro: "O reședință regală magnifică la periferia Varșoviei, adesea numită 'Versailles-ul polonez'. Înconjurată de grădini vaste.",
      en: "A magnificent royal residence on the outskirts of Warsaw, often called the 'Polish Versailles'. Surrounded by extensive gardens."
    },
    facts: {
      de: ["Sommerresidenz von König Jan III. Sobieski.", "Überlebte die Teilungen und Kriege Polens.", "Museum für Kunst und Geschichte."],
      hu: ["III. Sobieski János király nyári rezidenciája.", "Túlélte Lengyelország felosztásait és háborúit.", "Művészeti és Történeti Múzeum."],
      ro: ["Reședința de vară a regelui Ioan al III-lea Sobieski.", "A supraviețuit împărțirilor și războaielor Poloniei.", "Muzeu de artă și istorie."],
      en: ["Summer residence of King John III Sobieski.", "Survived the partitions and wars of Poland.", "Museum of art and history."]
    },
    descriptionAdvanced: {
      hu: "A Wilanów-palota a lengyel barokk építészet abszolút csúcspontja, amelyet a törökverő III. Sobieski János király építtetett nyári rezidenciaként a 17. század végén. A francia, olasz és hagyományos lengyel stílusjegyeket mesterien ötvöző épület csodával határos módon túlélte az ország felosztásait, sőt a két világháború pusztításait is, így belső terei jórészt eredeti pompájukban maradtak fenn. A kastélyt lenyűgöző kétszintes olasz teraszos kert és egy romantikus angol tájpark veszi körül, amely a tópartig fut le. Történelmi freskói, gazdag stukkói és pazar műkincsgyűjteménye a lengyel arisztokrácia fénykorát idézik. (Művészettörténet K7 — A barokk kor világi építészete)"
    },
    factsAdvanced: {
      hu: ["A palota 1805-ben nyitotta meg kapuit a nagyközönség előtt, mint Lengyelország egyik legelső nyilvános múzeuma.", "A kastély sárga homlokzatát a felújítások során nyerte vissza, amely az eredeti 17. századi színe volt.", "Telente a palota kertjét a 'Királyi Fények Kertje' elnevezésű látványos fényinstalláció világítja meg."]
    }
  },
  {
    id: "nature-vistula-river-extra",
    type: "river",
    parent: "PL",
    coords: [18.9, 54.3],
    name: { de: "Weichsel", hu: "Visztula", ro: "Vistula", en: "Vistula River" },
    description: {
      de: "Der längste und wichtigste Fluss Polens, der das Land von den Beskiden im Süden bis zur Ostsee im Norden durchfließt.",
      hu: "Lengyelország leghosszabb és legfontosabb folyója, amely délen a Beszkidektől északon a Balti-tengerig szeli át az országot.",
      ro: "Cel mai lung și mai important râu din Polonia, care traversează țara de la Munții Beskizi în sud până la Marea Baltică în nord.",
      en: "The longest and most important river in Poland, flowing from the Beskid Mountains in the south to the Baltic Sea in the north."
    },
    facts: {
      de: ["Längster Fluss in Polen (1.047 km).", "Fließt durch Krakau, Warschau und Danzig.", "Mündet in die Danziger Bucht."],
      hu: ["Lengyelország leghosszabb folyója (1047 km).", "Átfolyik Krakkón, Varsón és Gdańskon.", "A Gdański-öbölbe torkollik."],
      ro: ["Cel mai lung râu din Polonia (1.047 km).", "Curge prin Cracovia, Varșovia și Gdańsk.", "Se varsă în Golful Gdańsk."],
      en: ["Longest river in Poland (1,047 km).", "Flows through Krakow, Warsaw, and Gdańsk.", "Empties into the Gdańsk Bay."]
    },
    descriptionAdvanced: {
      hu: "A Visztula (Wisła) Lengyelország ütőere és leghosszabb, több mint ezer kilométeren át kanyargó folyója. A sziléziai Beszkidek vadregényes forrásaitól indulva átszeli az egész országot, érintve a legfontosabb történelmi fővárosokat: Krakkót, Varsót és Gdańskot. A folyó különlegessége, hogy középső szakasza – ellentétben Európa más nagy folyóival – szinte teljesen szabályozatlan, így hatalmas homokszigeteivel és zátonyaival páratlan madárrezervátumként is funkcionál. Történelmileg a Visztula volt a lengyel gabonakereskedelem legfőbb útvonala, amelyen uszályok ezrei szállították a terményt a balti kikötőkbe. (Földrajz K6 — Folyórendszerek és ártéri természeti értékek)"
    },
    factsAdvanced: {
      hu: ["A Visztula vízgyűjtő területe Lengyelország területének több mint felét (54%) fedi le.", "Varsónál a folyó egyes szakaszai annyira természetesek maradtak, hogy nyáron széles homokos strandok alakulnak ki a parton.", "A folyó a pomerániai deltavidéken, a Visztula-öbölben éri el a Balti-tengert."]
    }
  },
  {
    id: "river-oder-river-extra",
    type: "river",
    parent: "PL",
    coords: [14.5, 53.5],
    name: { de: "Oder", hu: "Odera", ro: "Oder", en: "Oder River" },
    description: {
      de: "Ein großer Fluss in Mitteleuropa, der einen großen Teil der Grenze zwischen Polen und Deutschland bildet. Wichtige Wasserstraße.",
      hu: "Nagy folyó Közép-Európában, amely a lengyel-német határ jelentős részét képezi. Fontos vízi út.",
      ro: "Un râu important din Europa Centrală, formând o mare parte a graniței dintre Polonia și Germania. O cale navigabilă importantă.",
      en: "A major river in Central Europe, forming a large part of the border between Poland and Germany. An important waterway."
    },
    facts: {
      de: ["Bildet die Grenze zu Deutschland.", "Zweitlängster Fluss Polens.", "Mündet in das Stettiner Haff."],
      hu: ["Határt képez Németországgal.", "Lengyelország második leghosszabb folyója.", "A Szczecini-öbölbe torkollik."],
      ro: ["Formează granița cu Germania.", "Al doilea cel mai lung râu din Polonia.", "Se varsă în Laguna Szczecin."],
      en: ["Forms the border with Germany.", "Second longest river in Poland.", "Flows into the Szczecin Lagoon."]
    },
    descriptionAdvanced: {
      hu: "Az Odera (Odra) Közép-Európa egyik legfontosabb, geopolitikailag is meghatározó vízi útja, amely a csehországi Odera-hegységből eredve szeli át Sziléziát. A második világháború után a folyó – a Neisse folyóval együtt – lett a híres Odera–Neisse-vonal, amely kijelölte Lengyelország és Németország új, nyugati államhatárát. Történelmileg hatalmas szerepet játszott az iparvidékek, különösen Wrocław (Breslau) és Szczecin fejlődésében, mivel olcsó szállítási útvonalat biztosított a szénnek és a nehézipari termékeknek. A folyó alsó szakasza, ahol a hatalmas Szczecini-öbölbe torkollik, lenyűgöző kiterjedésű, madarakban gazdag ártéri oázis. (Földrajz K7 — Folyami áruszállítás és országhatárok)"
    },
    factsAdvanced: {
      hu: ["Az Odera hossza meghaladja a 850 kilométert, amivel a régió második legnagyobb folyója.", "Wrocławban az Oderának olyannyira sok ága és csatornája van, hogy a várost több mint 100 híd köti össze.", "1997-ben az Odera történetének egyik legpusztítóbb árvize (a 'Millenniumi árvíz') hatalmas károkat okozott a part menti városokban."]
    }
  },
  {
    id: "mountain-table-mountains-extra",
    type: "mountain",
    parent: "PL-DS",
    coords: [16.3, 50.48],
    name: { de: "Heuscheuergebirge", hu: "Tábla-hegység", ro: "Munții Mesei", en: "Table Mountains" },
    description: {
      de: "Ein einzigartiges Gebirge mit flachen, tischähnlichen Gipfeln. Die bizarren Felsformationen und Labyrinthe sind eine Hauptattraktion.",
      hu: "Egyedülálló hegység lapos, asztalszerű csúcsokkal. A bizarr sziklaalakzatok és labirintusok fő vonzerőt jelentenek.",
      ro: "Un lanț montan unic, cu vârfuri plate, asemănătoare unor mese. Formațiunile stâncoase bizare și labirinturile sunt o atracție majoră.",
      en: "A unique mountain range with flat, table-like tops. The bizarre rock formations and labyrinths are a major attraction."
    },
    facts: {
      de: ["Einziges Tafelgebirge in Polen.", "Nationalpark Stołowe-Berge.", "Drehort für 'Die Chroniken von Narnia'."],
      hu: ["Lengyelország egyetlen táblahegysége.", "Stołowe-hegység Nemzeti Park.", "A 'Narnia krónikái' forgatási helyszíne."],
      ro: ["Singurul lanț montan de tip masă din Polonia.", "Parcul Național Munții Stołowe.", "Loc de filmare pentru 'Cronicile din Narnia'."],
      en: ["Only table mountains in Poland.", "Stołowe Mountains National Park.", "Filming location for 'The Chronicles of Narnia'."]
    },
    descriptionAdvanced: {
      hu: "A Tábla-hegység (Góry Stołowe) a Szudéták legszürreálisabb és legegyedülállóbb formakincsű hegylánca. Ritka, vízszintes homokkő rétegekből épül fel, amelyeket a szél, a víz és a fagy évmilliók alatt drámai, asztalra emlékeztető fennsíkokká és bizarr sziklalabirintusokká koptatott. A leghíresebb formációk, mint a Błędne Skały (Elátkozott Sziklák) és a Szczeliniec Wielki (Nagy-hasadék) szűk, sötét folyosóikról és állatokat vagy emberi arcokat formázó sziklaalakzataikról ismertek. Ez az elvarázsolt kővilág megihlette a 'Narnia krónikái' című film alkotóit is, akik több jelenetet forgattak a sziklaszorosokban. (Földrajz K8 — Homokkőformációk és szélerózió)"
    },
    factsAdvanced: {
      hu: ["A Szczeliniec Wielki a hegység legmagasabb pontja, egy lapos, 919 méter magas kőasztal.", "A hegység nevében szereplő 'stołowe' szó egyértelműen az asztal (stół) szóból ered.", "A sziklalabirintusokban nyáron is nagyon hűvös van, bizonyos repedésekben a hó sokáig megmarad."]
    }
  },
  {
    id: "animal-habitat-wroclaw-zoo-extra",
    type: "animal-habitat",
    parent: "PL-DS",
    coords: [17.07, 51.10],
    name: { de: "Zoo Breslau", hu: "Wrocławi Állatkert", ro: "Grădina Zoologică Wrocław", en: "Wrocław Zoo" },
    description: {
      de: "Der älteste Zoo Polens mit einer riesigen Artenvielfalt. Das Afrykarium, ein Ozeanarium, das den Tieren Afrikas gewidmet ist, ist die Hauptattraktion.",
      hu: "Lengyelország legrégebbi állatkertje, hatalmas fajgazdagsággal. Az Afrikárium, egy Afrikai állatoknak szentelt ócenárium, a fő attrakció.",
      ro: "Cea mai veche grădină zoologică din Polonia, cu o imensă biodiversitate. Afrykarium, un oceanariu dedicat animalelor din Africa, este atracția principală.",
      en: "The oldest zoo in Poland, with a huge biodiversity. The Afrykarium, an oceanarium dedicated to the animals of Africa, is the main attraction."
    },
    facts: {
      de: ["Ältester Zoo in Polen (gegr. 1865).", "Artenreichster Zoo in Polen.", "Einzigartiges Afrykarium-Komplex."],
      hu: ["Lengyelország legrégebbi állatkertje (alapítva 1865).", "Lengyelország legfajgazdagabb állatkertje.", "Egyedülálló Afrikárium komplexum."],
      ro: ["Cea mai veche grădină zoologică din Polonia (fondată în 1865).", "Grădina zoologică cu cea mai mare biodiversitate din Polonia.", "Complex unic Afrykarium."],
      en: ["Oldest zoo in Poland (est. 1865).", "Most species-rich zoo in Poland.", "Unique Afrykarium complex."]
    },
    descriptionAdvanced: {
      hu: "A Wrocławi Állatkert nemcsak Lengyelország legrégebbi és legfajgazdagabb zoológiai kertje, de kontinensszinten is az egyik leglátogatottabb turisztikai célpont. A hatalmas áttörést a 2014-ben átadott, futurisztikus formájú Afrykarium hozta meg, amely a világ egyetlen, kizárólag Afrika vízi élettereit bemutató ócenáriuma. A látogatók a víz alatti üvegalagutakon sétálva közvetlen közelről csodálhatják meg a Vörös-tenger cápáit, a Kongó medencéjének krokodiljait vagy a pingvinek játékát. Az intézmény emellett komoly nemzetközi programokat tart fenn a veszélyeztetett afrikai és ázsiai fajok, például a szumátrai tigrisek megmentésére. (Biológia K6 — Ócenáriumok és egzotikus élőhelyek)"
    },
    factsAdvanced: {
      hu: ["Az Afrykarium medencéihez több mint 15 millió liter vizet használnak fel.", "Az állatkertet 1865-ben, még a porosz uralom idején Breslau városában alapították.", "Területén több mint 10 000 állat él, mintegy 1100 különböző fajt képviselve."]
    }
  },
  {
    id: "landmark-hydropolis-wroclaw-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [17.05, 51.10],
    name: { de: "Hydropolis Breslau", hu: "Hydropolis Wrocław", ro: "Hydropolis Wrocław", en: "Hydropolis Wrocław" },
    description: {
      de: "Ein einzigartiges Wissenszentrum, das ganz dem Wasser gewidmet ist. Untergebracht in einem historischen unterirdischen Reinwasserbehälter aus dem 19. Jahrhundert.",
      hu: "Egyedülálló tudásközpont, amelyet teljes egészében a víznek szenteltek. Egy történelmi, 19. századi földalatti tiszta vizű tartályban kapott helyet.",
      ro: "Un centru de cunoaștere unic, dedicat în întregime apei. Găzduit într-un rezervor subteran istoric de apă curată din secolul al XIX-lea.",
      en: "A unique knowledge center dedicated entirely to water. Housed in a historic 19th-century underground clean water tank."
    },
    facts: {
      de: ["Museum, das dem Wasser gewidmet ist.", "Multimedia- und interaktive Ausstellungen.", "In einem historischen Wasserreservoir."],
      hu: ["A víznek szentelt múzeum.", "Multimédiás és interaktív kiállítások.", "Egy történelmi víztározóban."],
      ro: ["Muzeu dedicat apei.", "Expoziții multimedia și interactive.", "Într-un rezervor istoric de apă."],
      en: ["Museum dedicated to water.", "Multimedia and interactive exhibits.", "In a historic water reservoir."]
    },
    descriptionAdvanced: {
      hu: "A Hydropolis Wrocław egyik leginnovatívabb oktatási és kiállítótere, amely a víz lenyűgöző világát mutatja be a legmodernebb vizuális és hangtechnikák segítségével. Különlegességét fokozza, hogy egy 19. századi, sötét és boltíves, földalatti tiszta vizű tározóban kapott helyet, amely egykor a város vízellátását biztosította. A kiállítás a víz kozmikus eredetétől kezdve a mélytengeri szörnyetegeken át az emberi test vízháztartásáig minden aspektust lefed. A bejáratnál egy speciális, vízcseppekből formálódó interaktív 'vízfüggöny' nyílik meg a látogatók előtt. (Fizika K5 — A víz halmazállapotai és fizikai tulajdonságai)"
    },
    factsAdvanced: {
      hu: ["A kiállítótér közel 4000 négyzetmétert foglal el a történelmi, téglából rakott víztározóban.", "Egyik legnépszerűbb attrakciója a Mariana-árokba ereszkedő Trieste fürdőgömb életnagyságú, beléphető másolata.", "A létesítmény külön zónát szentel Wrocław város bonyolult vízgazdálkodási és hidrológiai történetének."]
    }
  },
  {
    id: "nature-karkonosze-national-park-extra",
    type: "nature",
    parent: "PL-DS",
    coords: [15.6, 50.78],
    name: { de: "Nationalpark Riesengebirge", hu: "Karkonosze Nemzeti Park", ro: "Parcul Național Karkonosze", en: "Karkonosze National Park" },
    description: {
      de: "Schützt das höchste Gebirge der Sudeten. Bekannt für seine postglazialen Kessel, Bergseen und die markante Schneekoppe.",
      hu: "Védi a Szudéták legmagasabb hegységét. Ismert a jégkorszak utáni katlanjairól, hegyi tavairól és a jellegzetes Sněžka-csúcsról.",
      ro: "Protejează cel mai înalt lanț montan din Sudeți. Cunoscut pentru circurile sale post-glaciare, lacurile montane și vârful distinctiv Sněžka.",
      en: "Protects the highest mountain range of the Sudetes. Known for its post-glacial cirques, mountain lakes, and the distinctive Sněžka peak."
    },
    facts: {
      de: ["Umfasst den höchsten Gipfel der Sudeten, die Schneekoppe.", "UNESCO-Biosphärenreservat.", "Einzigartige Tundra-ähnliche Vegetation."],
      hu: ["Magában foglalja a Szudéták legmagasabb csúcsát, a Sněžkát.", "UNESCO Bioszféra Rezervátum.", "Egyedülálló tundra-szerű növényzet."],
      ro: ["Include cel mai înalt vârf al Sudeților, Sněžka.", "Rezervație a biosferei UNESCO.", "Vegetație unică asemănătoare tundrei."],
      en: ["Includes the highest peak of the Sudetes, Sněžka.", "UNESCO Biosphere Reserve.", "Unique tundra-like vegetation."]
    },
    descriptionAdvanced: {
      hu: "A Karkonosze (Óriás-hegység) Nemzeti Park a Szudéták legzordabb, ugyanakkor leglátványosabb alpesi jellegű régióját oltalmazza a lengyel-cseh határon. A gránitbércekkel, posztglaciális katlanokkal és hegyi tavakkal tagolt táj koronája a jellegzetes kúp alakú Śnieżka (Hókópé), amely 1603 méterével a hegység legmagasabb pontja. A zord, szeles mikroklíma miatt a fahatár rendkívül alacsonyan, már 1200 méter körül húzódik, amely felett ritka, tundra-szerű növényzet és törpefenyők uralják a gerinceket. A hegyoldalakon lezúduló vízesések, mint a Kamieńczyk-vízesés, drámai szépségű kanyonokat vájtak a sziklákba. (Földrajz K7 — Glaciális erózió és alpesi éghajlat)"
    },
    factsAdvanced: {
      hu: ["A Śnieżka csúcsán található, repülő csészealjakra emlékeztető meteorológiai obszervatórium 1974-ben épült.", "A hegy gerincén halad végig a Lengyel–Cseh Barátság Útja nevű népszerű túraútvonal.", "Az ősi helyi legendák szerint a hegység mélyén él a titokzatos Szudéta-hegyi szellem, a 'Rübezahl' (lengyelül Liczyrzepa)."]
    }
  },
  {
    id: "landmark-church-of-peace-swidnica-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.49, 50.84],
    name: { de: "Friedenskirche Świdnica", hu: "Świdnicai béketemplom", ro: "Biserica Păcii din Świdnica", en: "Church of Peace, Świdnica" },
    description: {
      de: "Die größte hölzerne Barockkirche Europas, ein UNESCO-Weltkulturerbe. Erbaut nach dem Westfälischen Frieden ohne Turm und Glocken.",
      hu: "Európa legnagyobb barokk fatemploma, az UNESCO Világörökség része. A vesztfáliai béke után épült, torony és harangok nélkül.",
      ro: "Cea mai mare biserică barocă din lemn din Europa, un sit al Patrimoniului Mondial UNESCO. Construită după Pacea de la Westfalia, fără turn și clopote.",
      en: "The largest timber-framed Baroque church in Europe, a UNESCO World Heritage site. Built after the Peace of Westphalia without a tower or bells."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Erbaut aus Holz, Lehm und Stroh.", "Bietet Platz für 7.500 Menschen."],
      hu: ["UNESCO Világörökség része.", "Fából, agyagból és szalmából épült.", "7500 ember befogadására alkalmas."],
      ro: ["Patrimoniu Mondial UNESCO.", "Construită din lemn, lut și paie.", "Are o capacitate de 7.500 de persoane."],
      en: ["UNESCO World Heritage site.", "Built of wood, loam and straw.", "Has a capacity of 7,500 people."]
    },
    descriptionAdvanced: {
      hu: "A świdnicai Béketemplom Európa legnagyobb favázas (fachwerk) vallási épülete, az 17. századi protestáns építészet lenyűgöző és megismételhetetlen mesterműve. A harmincéves háborút lezáró vesztfáliai béke után a katolikus Habsburg császár engedélyezte építését a sziléziai lutheránusoknak, de szigorú feltételekkel: csak fát, agyagot és szalmát használhattak, és a templomnak torony, illetve harang nélkül kellett felépülnie egy év alatt. A kívülről puritán, pajtaszerű szerkezet odabent egy elképesztően gazdag, többszintes barokk galériarendszert és pazarul díszített faoltárt rejt. Az épület kivételes mérnöki teljesítménye miatt az UNESCO Világörökség listájára is felkerült. (Művészettörténet K7 — Favázas építészet és a barokk kor)"
    },
    factsAdvanced: {
      hu: ["A templom belső tere annyira hatalmas, hogy több mint 7500 ember befogadására alkalmas.", "A tetőszerkezetet eredetileg egyetlen vasszög felhasználása nélkül, fa csapolásokkal építették.", "A gazdagon festett fa mennyezet a Jelenések könyvéből vett bibliai jeleneteket ábrázol."]
    }
  },
  {
    id: "landmark-church-of-peace-jawor-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.19, 51.05],
    name: { de: "Friedenskirche Jawor", hu: "Jawori béketemplom", ro: "Biserica Păcii din Jawor", en: "Church of Peace, Jawor" },
    description: {
      de: "Zusammen mit der Kirche in Świdnica ein UNESCO-Weltkulturerbe. Eine beeindruckende Fachwerkkirche, die im 17. Jahrhundert unter strengen Auflagen erbaut wurde.",
      hu: "A świdnicai templommal együtt az UNESCO Világörökség része. Lenyűgöző favázas templom, amelyet a 17. században szigorú feltételek mellett építettek.",
      ro: "Împreună cu biserica din Świdnica, este un sit al Patrimoniului Mondial UNESCO. O biserică impresionantă din lemn, construită în secolul al XVII-lea sub condiții stricte.",
      en: "A UNESCO World Heritage site along with the church in Świdnica. An impressive timber-framed church built in the 17th century under strict conditions."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Eine von drei Friedenskirchen, von denen zwei erhalten sind.", "In nur einem Jahr erbaut."],
      hu: ["UNESCO Világörökség része.", "A három béketemplom egyike, melyből kettő maradt fenn.", "Mindössze egy év alatt épült fel."],
      ro: ["Patrimoniu Mondial UNESCO.", "Una dintre cele trei Biserici ale Păcii, dintre care două au supraviețuit.", "Construită în doar un an."],
      en: ["UNESCO World Heritage site.", "One of three Churches of Peace, two of which survived.", "Built in just one year."]
    },
    descriptionAdvanced: {
      hu: "A jawori Béketemplom Świdnicával karöltve a sziléziai protestánsok küzdelmes történetének fából ácsolt, gigantikus emlékműve. Az Albrecht von Säbisch wrocławi építész által tervezett favázas csarnokot 1654 és 1655 között emelték, ragaszkodva az osztrák császár szigorú és megalázónak szánt korlátozásaihoz. Az épület belseje háromemeletes galériarendszerével a színházak szerkezetét idézi, amelynek mellvédjeit csodálatos, virágokat, címereket és bibliai idézeteket ábrázoló festmények borítják. A templom kiváló akusztikájának köszönhetően ma nemcsak istentiszteleteknek, hanem rangos nemzetközi békekoncerteknek is helyet ad. (Művészettörténet K7 — A vallásháborúk korának művészete)"
    },
    factsAdvanced: {
      hu: ["A jawori templom valamivel kisebb, mint a świdnicai, mintegy 6000 férőhelyes.", "A belső díszítés kék és fehér színei az egykori helyi textilkészítők céhét dicsérik.", "Évente itt rendezik meg a nemzetközi Jawori Békekoncerteket, kihasználva a fatemplom orgonájának páratlan hangzását."]
    }
  },
  {
    id: "city-legnica-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.16, 51.21],
    name: { de: "Liegnitz", hu: "Legnica", ro: "Legnica", en: "Legnica" },
    description: {
      de: "Eine historisch wichtige Stadt in Niederschlesien, bekannt für die Schlacht bei Liegnitz 1241 gegen die Mongolen. Heute ein Zentrum der Kupferindustrie.",
      hu: "Történelmileg fontos város Alsó-Sziléziában, amely az 1241-es, mongolok elleni legnicai csatáról ismert. Ma a rézipar központja.",
      ro: "Un oraș important din punct de vedere istoric în Silezia Inferioară, cunoscut pentru Bătălia de la Legnica din 1241 împotriva mongolilor. Astăzi este un centru al industriei cuprului.",
      en: "A historically important city in Lower Silesia, known for the 1241 Battle of Legnica against the Mongols. Today a center of the copper industry."
    },
    facts: {
      de: ["Ort der Schlacht bei Liegnitz (1241).", "Piastenschloss mit zwei Türmen.", "Wichtig für die Kupferverarbeitung (KGHM)."],
      hu: ["A legnicai csata helyszíne (1241).", "Piast-vár két toronnyal.", "Fontos a rézfeldolgozás szempontjából (KGHM)."],
      ro: ["Locul Bătăliei de la Legnica (1241).", "Castelul Piast cu două turnuri.", "Important pentru prelucrarea cuprului (KGHM)."],
      en: ["Site of the Battle of Legnica (1241).", "Piast Castle with two towers.", "Important for copper processing (KGHM)."]
    },
    descriptionAdvanced: {
      hu: "Legnica, a Kaczawa folyó partján fekvő város, Alsó-Szilézia történelmének egyik legfontosabb csomópontja. Hírnevét elsősorban az 1241-es, mongolok elleni hősies, bár tragikus kimenetelű csatának köszönheti, ahol a lengyel és európai lovagság megállította az ázsiai inváziót, noha Jámbor Henrik herceg is elesett. A második világháború után a város újabb stratégiai szerepet kapott: évtizedekig itt volt a Vörös Hadsereg Északi Csoportjának főhadiszállása, amiért a „Kis Moszkva” gúnynevet kapta. Ma az ország egyik legfontosabb ipari bázisa, a KGHM rézbányászati tröszt finomítóinak otthona. (Történelem K6 — A tatárjárás Európában és a hidegháború)"
    },
    factsAdvanced: {
      hu: ["A város hatalmas Piast-vára egyike a legrégebbi lengyel téglaerődöknek.", "Az 1241-es mongol invázió emléke a mai napig él a helyi legendákban és fesztiválokon.", "A szovjet csapatok csak 1993-ban hagyták el véglegesen a várost."]
    }
  },
  {
    id: "city-jelenia-gora-extra",
    type: "city",
    parent: "PL-DS",
    coords: [15.73, 50.90],
    name: { de: "Hirschberg im Riesengebirge", hu: "Jelenia Góra", ro: "Jelenia Góra", en: "Jelenia Góra" },
    description: {
      de: "Eine Stadt am Fuße des Riesengebirges, bekannt als das 'Tal der Schlösser und Gärten'. Ein beliebter Ausgangspunkt für die Erkundung der Sudeten.",
      hu: "Város az Óriás-hegység lábánál, a 'kastélyok és kertek völgyeként' ismert. Népszerű kiindulópont a Szudéták felfedezéséhez.",
      ro: "Un oraș la poalele Munților Karkonosze, cunoscut ca 'Valea Palatelor și Grădinilor'. Un punct de plecare popular pentru explorarea Sudeților.",
      en: "A city at the foot of the Karkonosze Mountains, known as the 'Valley of Palaces and Gardens'. A popular base for exploring the Sudetes."
    },
    facts: {
      de: ["Tor zum Riesengebirge.", "Umgeben von zahlreichen Schlössern und Palästen.", "Kurviertel Cieplice mit Thermalquellen."],
      hu: ["Kapu az Óriás-hegységhez.", "Számos vár és palota veszi körül.", "Cieplice gyógyfürdő negyed termálforrásokkal."],
      ro: ["Poarta de acces către Munții Karkonosze.", "Înconjurat de numeroase castele și palate.", "Stațiunea balneară Cieplice cu izvoare termale."],
      en: ["Gateway to the Karkonosze Mountains.", "Surrounded by numerous castles and palaces.", "Cieplice spa district with thermal springs."]
    },
    descriptionAdvanced: {
      hu: "Jelenia Góra (Szarvas-hegy) a Sudéták legfontosabb turisztikai és kulturális bástyája, amely egy hegyekkel koszorúzott, festői völgyben fekszik. A város elegáns, pasztellszínű árkádsoros főtere a sziléziai kereskedővárosok gazdagságát idézi, míg a Cieplice nevű városrésze a 13. század óta működő neves gyógyfürdő központja, melyet egykor porosz királyok is látogattak. A település kapuként szolgál a Karkonosze Nemzeti Park lenyűgöző túraútvonalaihoz és a „Kastélyok Völgyéhez”, ahol tucatnyi 19. századi arisztokrata palota rejtőzik a fák között. Hangulata egyedülálló módon ötvözi a barokk polgárvárosi életérzést a hegyi kalandok ígéretével. (Földrajz K6 — Gyógyturizmus és hegyvidéki medencék)"
    },
    factsAdvanced: {
      hu: ["A cieplicei termálvizek hőmérséklete eléri a 87 Celsius-fokot, így Közép-Európa legmelegebb forrásai közé tartoznak.", "A város címerében egy büszke szarvas áll, utalva a település nevére és a vadban gazdag hegyi környezetre.", "A környező Kastélyok Völgyét (Dolina Pałaców i Ogrodów) sokszor a franciaországi Loire-völgyhöz hasonlítják."]
    }
  },
  {
    id: "historical-project-riese-extra",
    type: "historical",
    parent: "PL-DS",
    coords: [16.4, 50.68],
    name: { de: "Projekt Riese", hu: "Projekt Riese", ro: "Proiectul Riese", en: "Project Riese" },
    description: {
      de: "Ein unvollendetes, riesiges unterirdisches Bauprojekt der Nazis im Eulengebirge. Der Zweck ist bis heute ein Rätsel und Gegenstand vieler Theorien.",
      hu: "A nácik befejezetlen, hatalmas földalatti építési projektje a Bagoly-hegységben. Célja máig rejtély, és számos elmélet tárgya.",
      ro: "Un proiect de construcție subterană nazist, neterminat și masiv, în Munții Owl. Scopul său rămâne un mister și subiectul multor teorii.",
      en: "An unfinished, massive Nazi underground construction project in the Owl Mountains. Its purpose remains a mystery and the subject of many theories."
    },
    facts: {
      de: ["Geheimes Bauprojekt von Nazi-Deutschland.", "Sieben unterirdische Komplexe.", "Wurde von Zwangsarbeitern gebaut."],
      hu: ["A náci Németország titkos építési projektje.", "Hét földalatti komplexum.", "Kényszermunkások építették."],
      ro: ["Proiect secret de construcție al Germaniei naziste.", "Șapte complexe subterane.", "Construit de muncitori forțați."],
      en: ["Secret construction project of Nazi Germany.", "Seven underground complexes.", "Built by forced labourers."]
    },
    descriptionAdvanced: {
      hu: "A Riese (Óriás) projekt a Harmadik Birodalom egyik legrejtélyesebb és leginkább megdöbbentő, soha be nem fejezett gigantikus építkezése a Bagoly-hegység mélyén. 1943 és 1945 között koncentrációs táborok foglyainak tízezreivel vájattak hatalmas, összefüggő alagútrendszereket és csarnokokat a kemény gránitsziklákba. A hét ismert komplexum (köztük Osówka és Włodarz) pontos célja a mai napig ismeretlen: a történészek vitatkoznak, hogy vajon egy újabb, sebezhetetlen vezéri főhadiszállást, földalatti fegyvergyárakat, vagy titkos kutatólaboratóriumokat szántak-e ide. A nyirkos, részben vízzel elárasztott sötét alagutak bejárása ma fojtogató emlékezés a kényszermunkások szenvedésére. (Történelem K8 — A Harmadik Birodalom titkos projektjei)"
    },
    factsAdvanced: {
      hu: ["Az eddig felfedezett járatok összhossza meghaladja a 8 kilométert, de sokak szerint további elfalazott alagutak várnak feltárásra.", "A betonozott termek mérete néhol eléri az 50 méteres hosszúságot és a 10 méteres magasságot.", "Az építkezés olyan hatalmas mennyiségű betont emésztett fel, amely a teljes akkori német cementtermelés jelentős részét tette ki."]
    }
  },
  {
    id: "city-gliwice-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.67, 50.29],
    name: { de: "Gleiwitz", hu: "Gliwice", ro: "Gliwice", en: "Gliwice" },
    description: {
      de: "Eine Industriestadt in Oberschlesien, bekannt für den Sender Gleiwitz, dessen inszenierter Überfall den Beginn des Zweiten Weltkriegs markierte.",
      hu: "Ipari város Felső-Sziléziában, amely a gliwicei rádióadóról ismert, amelynek megrendezett megtámadása a második világháború kezdetét jelentette.",
      ro: "Un oraș industrial în Silezia Superioară, cunoscut pentru stația radio din Gliwice, al cărei atac înscenat a marcat începutul celui de-al Doilea Război Mondial.",
      en: "An industrial city in Upper Silesia, known for the Gliwice Radio Tower, the site of a staged attack that marked the beginning of World War II."
    },
    facts: {
      de: ["Ort des 'Gleiwitzer Zwischenfalls' 1939.", "Holzsendeturm ist einer der höchsten der Welt.", "Wichtiger Binnenhafen am Gleiwitzer Kanal."],
      hu: ["Az 1939-es 'gliwicei incidens' helyszíne.", "A fa adótorony a világ egyik legmagasabbja.", "Fontos folyami kikötő a Gliwice-csatornán."],
      ro: ["Locul 'Incidentului de la Gliwice' din 1939.", "Turnul radio din lemn este unul dintre cele mai înalte din lume.", "Port fluvial important pe Canalul Gliwice."],
      en: ["Site of the 1939 'Gliwice incident'.", "Wooden radio tower is one of the tallest in the world.", "Important river port on the Gliwice Canal."]
    },
    descriptionAdvanced: {
      hu: "Gliwice a felső-sziléziai iparvidék egyik legszebb és legélhetőbb városa, amely sikeresen alakult át nehézipari központból a lengyel IT és mérnöki szektor fellegvárává. A település neve világszerte ismertté vált az 1939. augusztus 31-i „gliwicei incidens” miatt, amikor egy náci kommandó lengyel támadást színlelve elfoglalta a helyi rádióállomást, ürügyet szolgáltatva a második világháború kirobbantására. A rádióállomás eredeti, vörösfenyőből épült gigantikus adótornya ma is áll, Európa legmagasabb faszerkezeteként. A város büszkesége a csodálatos pálmaház és a Gliwice-csatorna, amely közvetlen folyami kapcsolatot biztosít az Odera felé. (Történelem K8 — A II. világháború kitörésének körülményei)"
    },
    factsAdvanced: {
      hu: ["A gliwicei rádiótorony magassága 111 méter, és kizárólag sárgaréz csavarokat használtak az összeállításához.", "A városban működő Sziléziai Műszaki Egyetem az ország egyik legmagasabban rangsorolt mérnökképző intézménye.", "Óvárosa szinte tökéletesen megőrizte középkori, sugaras-gyűrűs utcaszerkezetét és a várfalak jelentős részét."]
    }
  },
  {
    id: "city-zabrze-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.78, 50.32],
    name: { de: "Zabrze", hu: "Zabrze", ro: "Zabrze", en: "Zabrze" },
    description: {
      de: "Eine Stadt im Herzen des schlesischen Industriegebiets, die für ihre Bergbautradition bekannt ist. Beherbergt das historische Kohlebergwerk Guido.",
      hu: "Város a sziléziai iparvidék szívében, amely bányászati hagyományairól ismert. Itt található a történelmi Guido szénbánya.",
      ro: "Un oraș în inima zonei industriale sileziene, cunoscut pentru tradițiile sale miniere. Găzduiește mina istorică de cărbune Guido.",
      en: "A city in the heart of the Silesian industrial area, known for its mining traditions. It is home to the Guido Historic Coal Mine."
    },
    facts: {
      de: ["Zentrum des oberschlesischen Industriegebiets.", "Beherbergt die Bergwerke Guido und Königin Luise.", "Heimat des erfolgreichen Fußballvereins Górnik Zabrze."],
      hu: ["A felső-sziléziai iparvidék központja.", "Otthont ad a Guido és a Queen Luise bányáknak.", "A sikeres Górnik Zabrze futballklub otthona."],
      ro: ["Centru al zonei industriale a Sileziei Superioare.", "Găzduiește minele Guido și Queen Luise.", "Acasă la clubul de fotbal de succes Górnik Zabrze."],
      en: ["Center of the Upper Silesian Industrial Region.", "Home to the Guido and Queen Luise mines.", "Home of the successful football club Górnik Zabrze."]
    },
    descriptionAdvanced: {
      hu: "Zabrze a sziléziai feketeszén bányászatának ikonikus, nyughatatlan városa, ahol az ipari forradalom emléke minden utcasarkon visszaköszön. Bár a szénkitermelés a 20. század vége óta rohamosan csökkent, a város páratlan sikerrel mentette meg bányászati örökségét a turizmus számára. A Guido bánya és a Luiza Királynő Bánya komplexumai olyan egyedülálló földalatti élményeket kínálnak, ahol a látogatók bányászvasúton utazhatnak és megcsodálhatják a működő szénfejtő gépeket a mélyben. A város emellett Lengyelország egyik legismertebb futballcsapatának, a Górnik Zabrzének (Zabrzei Bányász) az otthona, amely nemzeti szinten dominált a sportban. (Történelem K7 — A szénbányászat hatása az urbanizációra)"
    },
    factsAdvanced: {
      hu: ["A Luiza Királynő Bánya a legrégebbi állami szénbánya volt Felső-Sziléziában, 1791-ben alapították.", "A városban található Európa leghosszabb, csónakkal bejárható földalatti bányajárata, a Fő Örökletes Táró.", "Zabrze az ország egyik legfontosabb kardiológiai központja is, ahol Zbigniew Religa professzor végrehajtotta az első sikeres lengyelországi szívátültetést."]
    }
  },
  {
    id: "city-bytom-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.92, 50.34],
    name: { de: "Beuthen", hu: "Bytom", ro: "Bytom", en: "Bytom" },
    description: {
      de: "Eine der ältesten Städte Oberschlesiens mit einer reichen, aber durch den Niedergang des Bergbaus gezeichneten Geschichte. Bekannt für ihre Oper und ihr Museum.",
      hu: "Felső-Szilézia egyik legrégebbi városa, gazdag, de a bányászat hanyatlása által megviselt történelemmel. Operájáról és múzeumáról ismert.",
      ro: "Unul dintre cele mai vechi orașe din Silezia Superioară, cu o istorie bogată, dar marcată de declinul mineritului. Cunoscut pentru opera și muzeul său.",
      en: "One of the oldest cities in Upper Silesia, with a rich history but marked by the decline of mining. Known for its opera house and museum."
    },
    facts: {
      de: ["Historisch wichtiges Zentrum für Blei- und Silbererz.", "Schlesische Oper hat hier ihren Sitz.", "Viele Gebäude leiden unter Bergschäden."],
      hu: ["Történelmileg fontos ólom- és ezüstérc-központ.", "Itt található a Sziléziai Opera.", "Sok épület szenved a bányakároktól."],
      ro: ["Centru istoric important pentru minereul de plumb și argint.", "Opera Sileziană își are sediul aici.", "Multe clădiri suferă din cauza daunelor miniere."],
      en: ["Historically important center for lead and silver ore.", "The Silesian Opera is based here.", "Many buildings suffer from mining damage."]
    },
    descriptionAdvanced: {
      hu: "Bytom Felső-Szilézia egyik legősibb, már a 11. században fontos ezüst- és ólombányászati központként jegyzett városa. Noha a 19. és 20. században a szén- és cinkbányászat hatalmas gazdasági fellendülést hozott a gazdagon díszített szecessziós épületekkel tarkított településnek, a földalatti járatok omlásai miatt az épített örökség egy része süllyedni kezdett. Ma a város a megújulás és a kultúra útjára lépett: a Sziléziai Opera és a Sziléziai Múzeum a régió kiemelkedő szellemi központjai. Az egykori bányaterületek rehabilitációja során csodálatos természetes tavak és zöldövezetek alakultak ki a város peremén. (Földrajz K8 — Iparvidékek süllyedése és városi rehabilitáció)"
    },
    factsAdvanced: {
      hu: ["A történelmi bányászat miatt a városközpont bizonyos részei az elmúlt évszázadban több métert süllyedtek.", "A bytom-i Felső-Sziléziai Múzeum lenyűgöző gyűjteménnyel rendelkezik a régió néprajzi és bányászati örökségéről.", "A 19. századi hatalmas, vöröstéglás börtön és bírósági épület ma is a város egyik legimpozánsabb építménye."]
    }
  },
  {
    id: "city-sosnowiec-extra",
    type: "city",
    parent: "PL-SL",
    coords: [19.10, 50.28],
    name: { de: "Sosnowitz", hu: "Sosnowiec", ro: "Sosnowiec", en: "Sosnowiec" },
    description: {
      de: "Eine große Industriestadt im Dombrowaer Kohlebecken. Historisch Teil des 'Dreikaiserecks', wo die Grenzen von Deutschland, Österreich-Ungarn und Russland aufeinander trafen.",
      hu: "Nagy iparváros a Dąbrowa-medencében. Történelmileg a 'három császár sarkának' része volt, ahol Németország, Ausztria-Magyarország és Oroszország határai találkoztak.",
      ro: "Un mare oraș industrial în Bazinul Cărbunelui Dąbrowa. Istoric, parte a 'Colțului celor Trei Împărați', unde se întâlneau granițele Germaniei, Austro-Ungariei și Rusiei.",
      en: "A large industrial city in the Dąbrowa Basin. Historically part of the 'Three Emperors' Corner', where the borders of Germany, Austria-Hungary, and Russia met."
    },
    facts: {
      de: ["Größte Stadt im Dombrowaer Kohlebecken.", "Ehemals am 'Dreikaisereck' gelegen.", "Schloss Sielecki aus dem 15. Jahrhundert."],
      hu: ["A Dąbrowa-medence legnagyobb városa.", "Egykor a 'három császár sarkánál' feküdt.", "15. századi Sielecki-kastély."],
      ro: ["Cel mai mare oraș din Bazinul Cărbunelui Dąbrowa.", "Fost situat la 'Colțul celor Trei Împărați'.", "Castelul Sielecki din secolul al XV-lea."],
      en: ["Largest city in the Dąbrowa Basin.", "Formerly located at the 'Three Emperors' Corner'.", "15th-century Sielecki Castle."]
    },
    descriptionAdvanced: {
      hu: "Sosnowiec a Dąbrowai-medence fiatal, robbanásszerűen fejlődő ipari csomópontja, amely a 19. század végén az orosz, a porosz és az osztrák-magyar birodalmak találkozásánál épült fel. A hírhedt „Három Császár Sarka” (Trójkąt Trzech Cesarzy) a város szélén ma is a térség viharos geopolitikai múltjára emlékeztet. A város gazdag iparmágnások által emelt neoreneszánsz és neogótikus kastélyokkal büszkélkedhet, mint amilyen a gyönyörű Sielecki-kastély vagy a Dietel-palota. Sosnowiec jelentős zsidó közösséggel rendelkezett a háború előtt, Władysław Szpilman (A zongorista) szülővárosaként is ismert. (Történelem K8 — Lengyelország felosztásának határvidékei)"
    },
    factsAdvanced: {
      hu: ["Sosnowiec nevének eredete a 'sosna', azaz erdeifenyő szóból származik, amely a területet egykor borító erdőkre utal.", "A 'Három Császár Sarka' a 19. században népszerű turisztikai célpont volt, ahová sétahajókkal érkeztek a látogatók.", "A városban található Edward Gierek, a kommunista korszak egyik legismertebb lengyel politikusának emlékműve."]
    }
  },
  {
    id: "industry-fiat-auto-poland-tychy-extra",
    type: "industry",
    parent: "PL-SL",
    coords: [19.0, 50.15],
    name: { de: "Fiat Auto Poland Tychy", hu: "Fiat Auto Poland Tychy", ro: "Fiat Auto Poland Tychy", en: "Fiat Auto Poland Tychy" },
    description: {
      de: "Eine der größten und modernsten Autofabriken in Europa. Sie produziert verschiedene Modelle für Stellantis, darunter den Fiat 500.",
      hu: "Európa egyik legnagyobb és legmodernebb autógyára. Különböző modelleket gyárt a Stellantis számára, köztük a Fiat 500-at.",
      ro: "Una dintre cele mai mari și mai moderne fabrici de automobile din Europa. Produce diverse modele pentru Stellantis, inclusiv Fiat 500.",
      en: "One of the largest and most modern car factories in Europe. It produces various models for Stellantis, including the Fiat 500."
    },
    facts: {
      de: ["Größte Autofabrik in Polen.", "Produziert den Fiat 500, Lancia Ypsilon und andere.", "Wichtiger Arbeitgeber in der Region."],
      hu: ["Lengyelország legnagyobb autógyára.", "Többek között a Fiat 500-at és a Lancia Ypsilont gyártja.", "Fontos munkaadó a régióban."],
      ro: ["Cea mai mare fabrică de automobile din Polonia.", "Produce Fiat 500, Lancia Ypsilon și altele.", "Angajator important în regiune."],
      en: ["Largest car factory in Poland.", "Produces the Fiat 500, Lancia Ypsilon, and others.", "Major employer in the region."]
    },
    descriptionAdvanced: {
      hu: "A tychy-i Stellantis (korábban Fiat Auto Poland) gyár az európai autógyártás egyik legnagyobb és leghatékonyabb üzemegysége, amely a lengyel ipari precizitás szimbóluma. Az 1970-es évek elején, a kis Polskik (Fiat 126p) tömeggyártására létrehozott óriásüzem történelmi jelentőségű volt a lengyel társadalom motorizációjában a szocializmus alatt. Ma a hipermodern robotikával és szigorú minőségbiztosítással felszerelt gyár elsősorban a Fiat 500-as és a Lancia Ypsilon modelleket ontja magából az európai piacokra. A létesítmény jelenléte Tychyt egy gyorsan növekvő, modern és tiszta várossá formálta. (Földrajz K8 — A járműipar földrajzi elhelyezkedése Európában)"
    },
    factsAdvanced: {
      hu: ["A gyárban több mint hárommillió legendás Fiat 126p (Kispolszki) gördült le a szalagsorról 2000-ig.", "Egy új autó átlagosan percenként hagyja el a szerelőszalagot a tychy-i üzemben.", "A gyárat a Fiat 2007-ben az egész vállalatcsoport leghatékonyabb termelőegységévé választotta."]
    }
  },
  {
    id: "agriculture-zywiec-brewery-extra",
    type: "agriculture",
    parent: "PL-SL",
    coords: [19.18, 49.67],
    name: { de: "Brauerei Żywiec", hu: "Żywieci sörfőzde", ro: "Fabrica de bere Żywiec", en: "Żywiec Brewery" },
    description: {
      de: "Eine der größten und bekanntesten Brauereien Polens, gegründet 1856 von Erzherzog Albrecht Friedrich von Habsburg. Das Biermuseum ist eine beliebte Attraktion.",
      hu: "Lengyelország egyik legnagyobb és legismertebb sörfőzdéje, amelyet 1856-ban Habsburg Albert Frigyes főherceg alapított. A sörmúzeum népszerű látványosság.",
      ro: "Una dintre cele mai mari și mai cunoscute fabrici de bere din Polonia, fondată în 1856 de arhiducele Albert Frederic de Habsburg. Muzeul berii este o atracție populară.",
      en: "One of the largest and most famous breweries in Poland, founded in 1856 by Archduke Albert Frederick of Habsburg. The beer museum is a popular attraction."
    },
    facts: {
      de: ["Gegründet von der Familie Habsburg.", "Teil der Heineken-Gruppe.", "Interaktives Museum der Brauerei."],
      hu: ["A Habsburg család alapította.", "A Heineken-csoport része.", "Interaktív sörfőzde-múzeum."],
      ro: ["Fondată de familia Habsburg.", "Parte a grupului Heineken.", "Muzeu interactiv al fabricii de bere."],
      en: ["Founded by the Habsburg family.", "Part of the Heineken Group.", "Interactive museum of the brewery."]
    },
    descriptionAdvanced: {
      hu: "A Żywieci sörfőzde a lengyel sörfőző művészet legismertebb, történelmi bástyája, amely a festői Beszkidek lábánál épült fel 1856-ban. A Habsburg Albrecht Frigyes főherceg által alapított üzem a kristálytiszta hegyi forrásvizek és a legkiválóbb technológia ötvözésével már a 19. században a császári udvar hivatalos beszállítója lett. A történelmi erjesztőkádakat és pincéket felvonultató modern multimédiás múzeum az egyik legvonzóbb ipartörténeti látványosság Dél-Lengyelországban. A Żywiec sör ma nemcsak a belföldi piac vezető márkája, hanem az ország egyik legfontosabb exportcikke is a tengerentúlon. (Történelem K7 — A söripar és az osztrák-magyar gazdaság hatásai)"
    },
    factsAdvanced: {
      hu: ["A sör címkéjén a kezdetek óta a hagyományos krakkói népviseletbe öltözött táncoló pár látható.", "A sörfőzde múzeumát az egykori sziklába vájt hatalmas jégpincékben alakították ki.", "A II. világháború alatt a gyárat a németek vették át, de a lengyel ellenállás megakadályozta az üzem felrobbantását a visszavonuláskor."]
    }
  },
  {
    id: "landmark-beskid-mountains-extra",
    type: "mountain",
    parent: "PL-SL",
    coords: [19.5, 49.6],
    name: { de: "Beskiden", hu: "Beszkidek", ro: "Munții Beskizi", en: "Beskid Mountains" },
    description: {
      de: "Eine Reihe von Gebirgszügen in den Karpaten, die sich ideal zum Wandern, Skifahren und für den ländlichen Tourismus eignen. Bekannte Gipfel sind Babia Góra und Pilsko.",
      hu: "A Kárpátok hegyláncolata, amely ideális túrázásra, síelésre és falusi turizmusra. Ismert csúcsai a Babia Góra és a Pilsko.",
      ro: "Un lanț de munți din Carpați, ideal pentru drumeții, schi și turism rural. Vârfurile cunoscute includ Babia Góra și Pilsko.",
      en: "A series of mountain ranges in the Carpathians, ideal for hiking, skiing, and rural tourism. Notable peaks include Babia Góra and Pilsko."
    },
    facts: {
      de: ["Teil der Äußeren Westkarpaten.", "Beliebte Skigebiete wie Szczyrk.", "Nationalpark Babia Góra ist ein UNESCO-Biosphärenreservat."],
      hu: ["A Külső-Nyugati-Kárpátok része.", "Népszerű síterepek, mint például Szczyrk.", "A Babia Góra Nemzeti Park az UNESCO bioszféra-rezervátuma."],
      ro: ["Parte a Carpaților Occidentali Exteriori.", "Stațiuni de schi populare precum Szczyrk.", "Parcul Național Babia Góra este o rezervație a biosferei UNESCO."],
      en: ["Part of the Outer Western Carpathians.", "Popular ski resorts like Szczyrk.", "Babia Góra National Park is a UNESCO Biosphere Reserve."]
    },
    descriptionAdvanced: {
      hu: "A Beszkidek egy lágyan hullámzó, hatalmas kiterjedésű, erdős hegyvonulat, amely a Külső-Kárpátok ívét alkotja Dél-Lengyelországban. Ellentétben a szomszédos, sziklás Tátrával, a Beszkidek a végtelen, sűrű fenyő- és bükkerdők, a tágas hegyi legelők és a faházas, hagyományőrző gorál falvak vidéke. A régió nyáron a családbarát túrázás, a kerékpározás, télen pedig a síelés paradicsoma, Szczyrk és Wisła neves síközpontjaival. A Babia Góra (Boszorkány-hegy) meredek, 1725 méter magas csúcsa a hegység legvadabb, szinte misztikus koronája, amely az UNESCO oltalma alatt áll. (Földrajz K6 — A Kárpátok domborzata és erdei zónái)"
    },
    factsAdvanced: {
      hu: ["A Babia Góra legendája szerint a csúcson boszorkányok tartották sabbatjaikat.", "A hegységben máig él a hagyományos, juhászkutyákkal történő juhászat és a hegyi sajtkészítés.", "A terület a lengyelországi farkasok és hiúzok egyik legstabilabb és legnagyobb természetes menedéke."]
    }
  },
  {
    id: "city-glogow-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.08, 51.66],
    name: { de: "Glogau", hu: "Głogów", ro: "Głogów", en: "Głogów" },
    description: {
      de: "Eine historische Stadt an der Oder, bekannt für die heldenhafte Verteidigung von 1109. Stark im Zweiten Weltkrieg zerstört, aber mit wiederaufgebautem Schloss und Rathaus.",
      hu: "Történelmi város az Odera partján, amely az 1109-es hősies védelemről ismert. A második világháborúban súlyosan elpusztult, de a várat és a városházát újjáépítették.",
      ro: "Un oraș istoric pe râul Oder, cunoscut pentru apărarea sa eroică din 1109. Distrus în mare parte în Al Doilea Război Mondial, dar cu un castel și o primărie reconstruite.",
      en: "A historic city on the Oder river, known for its heroic defense in 1109. Heavily destroyed in WWII but with a rebuilt castle and town hall."
    },
    facts: {
      de: ["Berühmt für die Verteidigung von 1109.", "Wichtiger Standort der Kupferindustrie (KGHM).", "Wiederaufgebautes Schloss der Glogauer Herzöge."],
      hu: ["Híres az 1109-es védelemről.", "Fontos rézipari központ (KGHM).", "A głogówi hercegek újjáépített kastélya."],
      ro: ["Faimos pentru apărarea din 1109.", "Amplasament important al industriei cuprului (KGHM).", "Castel reconstruit al Ducilor de Głogów."],
      en: ["Famous for the defense of 1109.", "Important site for the copper industry (KGHM).", "Rebuilt Castle of the Dukes of Głogów."]
    },
    descriptionAdvanced: {
      hu: "Głogów, az Odera partján trónoló erődváros a lengyel kitartás egyik legismertebb történelmi szimbóluma. Legdicsőbb pillanata 1109-ben érkezett el, amikor a városvédők hősiesen verték vissza V. Henrik német-római császár seregét, ami a lengyel államiság megszilárdításának kulcsfontosságú mozzanata lett. A város tragédiája a második világháború végnapjaiban teljesedett be, amikor a szovjet ostrom során az egykori pompás reneszánsz belváros 95 százaléka teljesen megsemmisült. Bár az újjáépítés sokáig váratott magára, ma a Głogówi hercegek újjáépített kastélya és a folyamatosan szépülő óváros ismét méltó az ősi település rangjához. (Történelem K6 — Középkori ostromok és a Piast-kor)"
    },
    factsAdvanced: {
      hu: ["A legenda szerint az 1109-es ostromnál a németek túszul ejtett lengyel gyerekeket kötöztek az ostromgépekre pajzsként.", "A város hatalmas posztglaciális rézérc-készleteken fekszik, ami a mai gazdaságának alapja.", "A középkori városháza tornya 80 méteres magasságával a régió egyik legmagasabbja, lenyűgöző kilátást nyújtva az Odera völgyére."]
    }
  },
  {
    id: "city-walbrzych-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.28, 50.77],
    name: { de: "Waldenburg", hu: "Wałbrzych", ro: "Wałbrzych", en: "Wałbrzych" },
    description: {
      de: "Ehemals ein wichtiges Zentrum des Kohlebergbaus, heute eine Stadt im Wandel. In der Nähe befinden sich das Schloss Fürstenstein und das Geheimprojekt Riese.",
      hu: "Egykor a szénbányászat fontos központja, ma átalakulóban lévő város. A közelben található a Książ kastély és a titkos Riese projekt.",
      ro: "Fost un centru important al mineritului de cărbune, acum un oraș în tranziție. Castelul Książ și proiectul secret Riese se află în apropiere.",
      en: "Formerly a major center of coal mining, now a city in transition. Nearby are Książ Castle and the secret Project Riese."
    },
    facts: {
      de: ["Größte Stadt im Waldenburger Bergland.", "Zentrum des ehemaligen niederschlesischen Kohlebeckens.", "Alte Mine - Wissenschafts- und Kunstzentrum."],
      hu: ["A Wałbrzychi-hegység legnagyobb városa.", "Az egykori alsó-sziléziai szénmedence központja.", "Régi Bánya Tudományos és Művészeti Központ."],
      ro: ["Cel mai mare oraș din Munții Wałbrzych.", "Centrul fostului bazin carbonifer din Silezia Inferioară.", "Centrul de Știință și Artă 'Mina Veche'."],
      en: ["Largest city in the Wałbrzych Mountains.", "Center of the former Lower Silesian Coal Basin.", "Old Mine Science and Art Centre."]
    },
    descriptionAdvanced: {
      hu: "Wałbrzych egy katlanban fekvő, meredek hegyoldalakkal ölelt város, amely az alsó-sziléziai „fekete arany”, a szén évszázados központja volt. A 20. század végén bekövetkezett bányabezárások súlyos gazdasági krízisbe taszították, ám a város mára az ipari örökség és a turizmus révén főnixmadárként tér vissza. A település északi peremén magasodik a mesébe illő, gigantikus Książ kastély, Lengyelország harmadik legnagyobb palotája, mely alatt a nácik titokzatos alagutakat vájtak. A régi szénbányából (Stara Kopalnia) kialakított Tudományos és Művészeti Központ ma Európa egyik legmodernebb indusztriális múzeuma. (Földrajz K8 — A szénbányászat válsága és az ipari revitalizáció)"
    },
    factsAdvanced: {
      hu: ["2015-ben a város világhírű lett a feltételezett, arannyal teli náci 'aranyvonat' legendája miatt, amelyet a környező hegyekben kerestek.", "A Książ kastély alatt a II. világháborúban Adolf Hitler egyik lehetséges főhadiszállását építették ki kényszermunkásokkal.", "Wałbrzych környékén működik Lengyelország egyetlen olyan régiója, ahol egykor illegális „szegénybányászat” is folyt a felszíni kibúvásoknál."]
    }
  },
  {
    id: "city-swidnica-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.48, 50.84],
    name: { de: "Schweidnitz", hu: "Świdnica", ro: "Świdnica", en: "Świdnica" },
    description: {
      de: "Eine historische Stadt in Niederschlesien mit einem wunderschönen Marktplatz und einer der beiden Friedenskirchen, die zum UNESCO-Weltkulturerbe gehören.",
      hu: "Történelmi város Alsó-Sziléziában, gyönyörű főtérrel és a két, UNESCO Világörökség részét képező béketemplom egyikével.",
      ro: "Un oraș istoric în Silezia Inferioară, cu o piață centrală frumoasă și una dintre cele două Biserici ale Păcii, situri ale Patrimoniului Mondial UNESCO.",
      en: "A historic city in Lower Silesia with a beautiful market square and one of the two Churches of Peace, a UNESCO World Heritage site."
    },
    facts: {
      de: ["Heimat der Friedenskirche, UNESCO-Weltkulturerbe.", "Gut erhaltener mittelalterlicher Stadtkern.", "Kathedrale St. Stanislaus und St. Wenzel."],
      hu: ["Itt található a Béketemplom, amely az UNESCO Világörökség része.", "Jól megőrzött középkori városközpont.", "Szent Szaniszló és Szent Vencel katedrális."],
      ro: ["Găzduiește Biserica Păcii, un sit al Patrimoniului Mondial UNESCO.", "Centru medieval bine conservat.", "Catedrala Sfinților Stanislau și Venceslau."],
      en: ["Home to the Church of Peace, a UNESCO World Heritage site.", "Well-preserved medieval town center.", "Cathedral of St. Stanislaus and St. Wenceslaus."]
    },
    descriptionAdvanced: {
      hu: "Świdnica Alsó-Szilézia egyik legfestőibb, sértetlen középkori bájjal rendelkező városa, egykor a lengyel, a cseh és a német befolyás olvasztótégelye. Gazdasági aranykorát a középkorban élte élénk sörfőzésének és posztókereskedelmének köszönhetően; a helyi 'schweidnitzi sört' még Európa távoli udvaraiba is exportálták. Macskaköves piacterét díszes, barokk és reneszánsz polgárházak, valamint a monumentális városháza szobrokkal ékített tornya uralja. Világhírét a páratlan mérnöki bravúrral, tisztán fából épített, UNESCO világörökségi Béketemplomnak (Kościół Pokoju) köszönheti. (Történelem K7 — A kora újkori céhes ipar és a sziléziai kereskedelem)"
    },
    factsAdvanced: {
      hu: ["A város gótikus székesegyházának 103 méter magas tornya a legmagasabb a délnyugat-lengyelországi régióban.", "A középkorban a świdnicai kocsmákat még Krakkóban, Prágában és Budán is nagyra becsülték a híres helyi sör miatt.", "A város alatt kiterjedt alagút- és pincerendszer fut, melyeket egykor sör- és árutárolásra használtak."]
    }
  },
  {
    id: "city-kalisz-extra",
    type: "city",
    parent: "PL-WP",
    coords: [18.09, 51.76],
    name: { de: "Kalisz", hu: "Kalisz", ro: "Kalisz", en: "Kalisz" },
    description: {
      de: "Gilt als eine der ältesten Städte Polens, die schon vom antiken Geographen Ptolemäus als 'Calisia' erwähnt wurde. Ein wichtiges Industrie- und Kulturzentrum.",
      hu: "Lengyelország egyik legrégebbi városának tartják, amelyet már az ókori geográfus, Ptolemaiosz is 'Calisia' néven említett. Fontos ipari és kulturális központ.",
      ro: "Considerat unul dintre cele mai vechi orașe din Polonia, menționat ca 'Calisia' de geograful antic Ptolemeu. Un important centru industrial și cultural.",
      en: "Considered one of the oldest cities in Poland, mentioned as 'Calisia' by the ancient geographer Ptolemy. An important industrial and cultural center."
    },
    facts: {
      de: ["Eine der ältesten Städte Polens.", "Bekannt für seine Klavierfabriken.", "Archäologisches Reservat in Zawodzie."],
      hu: ["Lengyelország egyik legrégebbi városa.", "Zongoragyárairól ismert.", "Régészeti rezervátum Zawodzie-ban."],
      ro: ["Unul dintre cele mai vechi orașe din Polonia.", "Cunoscut pentru fabricile sale de piane.", "Rezervație arheologică în Zawodzie."],
      en: ["One of the oldest cities in Poland.", "Known for its piano factories.", "Archaeological reserve in Zawodzie."]
    },
    descriptionAdvanced: {
      hu: "Kalisz joggal viseli a 'Lengyelország legrégebbi városa' büszke címet, hiszen Klaudiosz Ptolemaiosz már az i. sz. 2. században említést tett a Borostyánút mentén fekvő 'Calisia' településről. A Prosna folyó ágai által körbeölelt szigeteken fekvő város építészete a 19. és a kora 20. századi orosz birodalmi klasszicizmust tükrözi, miután az I. világháború nyitányaként szinte porig rombolták. Hosszú évtizedeken át Európa-szerte ismert volt zongora- és pianínógyártásáról, amely meghatározta a helyi ipar identitását. Zawodzie városrészében lenyűgöző szabadtéri régészeti rezervátum mutatja be a korai szláv faerődítmények világát. (Történelem K5 — A Borostyánút és a korai szláv települések)"
    },
    factsAdvanced: {
      hu: ["A várost az I. világháború elején, 1914 augusztusában a német tüzérség ok nélkül szinte teljesen elpusztította.", "A híres Calisia zongoragyár több mint 120 éven át készített prémium hangszereket a városban.", "Kalisz a lengyel diaszpóra körében is fontos név, több amerikai települést is elneveztek a városról."]
    }
  },
  {
    id: "city-pila-extra",
    type: "city",
    parent: "PL-WP",
    coords: [16.74, 53.15],
    name: { de: "Schneidemühl", hu: "Piła", ro: "Piła", en: "Piła" },
    description: {
      de: "Eine Stadt in Großpolen, umgeben von Wäldern und Seen. Wichtiger Eisenbahnknotenpunkt und Zentrum der Holzindustrie.",
      hu: "Város Nagy-Lengyelországban, erdőkkel és tavakkal körülvéve. Fontos vasúti csomópont és faipari központ.",
      ro: "Un oraș în Polonia Mare, înconjurat de păduri și lacuri. Un nod feroviar important și un centru al industriei lemnului.",
      en: "A city in Greater Poland, surrounded by forests and lakes. An important railway junction and center of the timber industry."
    },
    facts: {
      de: ["Großer Eisenbahnknotenpunkt.", "Umgeben von der 'Puszcza Notecka' (Netze-Heide).", "Geburtsort von Stanisław Staszic."],
      hu: ["Nagy vasúti csomópont.", "A 'Puszcza Notecka' (Noteć-i erdő) veszi körül.", "Stanisław Staszic szülőhelye."],
      ro: ["Nod feroviar major.", "Înconjurat de 'Puszcza Notecka' (Pădurea Noteć).", "Locul nașterii lui Stanisław Staszic."],
      en: ["Major railway junction.", "Surrounded by 'Puszcza Notecka' (Noteć Forest).", "Birthplace of Stanisław Staszic."]
    },
    descriptionAdvanced: {
      hu: "Piła (németül Schneidemühl) Nagy-Lengyelország északnyugati peremének zöld, vizekkel és hatalmas erdőségekkel körbevett ipari és vasúti központja. A Gwda folyó partján épült város neve lengyelül fűrészt jelent, ami hűen tükrözi évszázados fakitermelői és faipari hagyományait. A második világháborúban az utcai harcok során a történelmi belváros mintegy 90 százaléka elpusztult, így a települést egy modern, széles utakkal és zöldterületekkel operáló városterv alapján építették újjá. Piła büszkesége a lengyel felvilágosodás polihisztora, Stanisław Staszic, aki itt született, és akinek múzeuma a város kevés megmaradt 18. századi épületének egyikében található. (Földrajz K8 — A második világháború utáni várostervezés és fafeldolgozás)"
    },
    factsAdvanced: {
      hu: ["Piła vasúti kerekháza (mozdonyfűtőháza) egyedülálló, 19. századi ipari műemlék a város központjában.", "A várost egy hatalmas, félkörív alakú fenyőerdő, a Puszcza Notecka (Noteć-i erdő) öleli körbe.", "Az 1920-as években a német repülőgépgyártás, az Albatros Flugzeugwerke egyik fontos bázisa működött itt."]
    }
  },
  {
    id: "nature-wielkopolski-national-park-extra",
    type: "nature",
    parent: "PL-WP",
    coords: [16.8, 52.26],
    name: { de: "Nationalpark Großpolen", hu: "Wielkopolski Nemzeti Park", ro: "Parcul Național Wielkopolski", en: "Wielkopolski National Park" },
    description: {
      de: "Ein Nationalpark südlich von Posen, der eine postglaziale Landschaft mit Seen, Wäldern und Moränenhügeln schützt.",
      hu: "Nemzeti park Poznańtól délre, amely egy jégkorszak utáni tájat véd tavakkal, erdőkkel és morénadombokkal.",
      ro: "Un parc național la sud de Poznań, care protejează un peisaj post-glaciar cu lacuri, păduri și dealuri morenice.",
      en: "A national park south of Poznań, protecting a post-glacial landscape with lakes, forests, and moraine hills."
    },
    facts: {
      de: ["13 postglaziale Seen.", "Vielfältige Landschaftsformen.", "Beliebtes Naherholungsgebiet für Posen."],
      hu: ["13 jégkorszak utáni tó.", "Változatos tájformák.", "Poznań kedvelt rekreációs területe."],
      ro: ["13 lacuri post-glaciare.", "Forme de relief diverse.", "Zonă populară de recreere pentru Poznań."],
      en: ["13 post-glacial lakes.", "Diverse landforms.", "Popular recreational area for Poznań."]
    },
    descriptionAdvanced: {
      hu: "A Wielkopolski Nemzeti Park Poznań városának zöld tüdeje, egy szinte tankönyvbe illő jégkorszaki (posztglaciális) tájmodell. A mintegy hétezer hektáros területet az utolsó jégkorszak visszahúzódó gleccserei formálták, hátrahagyva mély, csík alakú szalagvölgyeket, morénadombokat és sziklákat (vándorköveket). A sűrű fenyő- és tölgyerdők 13 gleccsertavat rejtenek, melyek közül a legszebb a festői Góreckie-tó, közepén egy romantikus kastélyrommal büszkélkedő kis szigettel. A terület a gazdag növényvilágon túl a madárvédők paradicsoma, számtalan vízimadár fészkelőhelye. (Földrajz K6 — A jégkorszaki formakincs és a glaciális tavak)"
    },
    factsAdvanced: {
      hu: ["A Góreckie-tó szigetén álló 19. századi kastélyt Tytus Działyński gróf építtette testvérének, Klaudynának.", "A park területén egyedülálló, teljesen rovarfogó növényekkel (pl. kereklevelű harmatfűvel) borított lápok is találhatók.", "Számos hatalmas gránit vándorkő (erratikus blokk) pihen az erdőben, amelyeket a skandináv jégtakaró szállított ide."]
    }
  },
  {
    id: "city-ostrow-wielkopolski-extra",
    type: "city",
    parent: "PL-WP",
    coords: [17.81, 51.65],
    name: { de: "Ostrów Wielkopolski", hu: "Ostrów Wielkopolski", ro: "Ostrów Wielkopolski", en: "Ostrów Wielkopolski" },
    description: {
      de: "Eine Stadt in Großpolen, bekannt für ihre Rolle in der 'Republik von Ostrów' 1918, einer der ersten polnischen Unabhängigkeitsbestrebungen.",
      hu: "Város Nagy-Lengyelországban, amely az 1918-as 'Ostrówi Köztársaságban' játszott szerepéről ismert, az egyik első lengyel függetlenségi törekvésről.",
      ro: "Un oraș în Polonia Mare, cunoscut pentru rolul său în 'Republica de la Ostrów' din 1918, una dintre primele încercări de independență poloneză.",
      en: "A city in Greater Poland known for its role in the 1918 'Republic of Ostrów', one of the first Polish independence efforts."
    },
    facts: {
      de: ["Zentrum der 'Republik von Ostrów' (1918).", "Wichtiger Eisenbahnknotenpunkt.", "Neo-Renaissance-Rathaus."],
      hu: ["Az 'Ostrówi Köztársaság' központja (1918).", "Fontos vasúti csomópont.", "Neoreneszánsz városháza."],
      ro: ["Centrul 'Republicii de la Ostrów' (1918).", "Nod feroviar important.", "Primărie neorenascentistă."],
      en: ["Center of the 'Republic of Ostrów' (1918).", "Important railway junction.", "Neo-Renaissance town hall."]
    },
    descriptionAdvanced: {
      hu: "Ostrów Wielkopolski Dél-Nagy-Lengyelország lüktető, dinamikus csomópontja, amely a 19. század során vált jelentős vasúti és ipari központtá. A település hírnevét a lengyel függetlenségi mozgalmakban betöltött szerepe alapozta meg: 1918 novemberében itt kiáltották ki a rövid életű, de szimbolikus 'Ostrówi Köztársaságot', amely a lengyel függetlenség egyik előfutára volt. A város szívét a gyönyörű, 19. századi neoreneszánsz városháza uralja a macskaköves piactéren. A vasút a mai napig meghatározza a város lüktetését, modern ipari parkjai pedig a régió egyik leggyorsabban fejlődő településévé teszik. (Történelem K8 — Az 1918-as függetlenségi törekvések Lengyelországban)"
    },
    factsAdvanced: {
      hu: ["A város egyedülálló, szinte érintetlenül fennmaradt mór stílusú, 19. századi zsinagógával büszkélkedhet.", "A vasúti csomópont kiépítése az 1870-es években indította el a város ipari forradalmát.", "Az 'Ostrówi Köztársaság' vérontás nélkül, a lengyel többség összefogásával vette át a hatalmat a német közigazgatástól."]
    }
  },
  {
    id: "castle-kornik-castle-extra",
    type: "castle",
    parent: "PL-WP",
    coords: [17.09, 52.24],
    name: { de: "Schloss Kórnik", hu: "Kórniki kastély", ro: "Castelul Kórnik", en: "Kórnik Castle" },
    description: {
      de: "Ein neugotisches Schloss, umgeben von einem der reichsten Arboreten Polens. Das Schloss beherbergt ein Museum und eine bedeutende Bibliothek.",
      hu: "Neogótikus kastély, amelyet Lengyelország egyik leggazdagabb arborétuma vesz körül. A kastély múzeumnak és egy jelentős könyvtárnak ad otthont.",
      ro: "Un castel neogotic înconjurat de unul dintre cele mai bogate arboreturi din Polonia. Castelul găzduiește un muzeu și o bibliotecă importantă.",
      en: "A Neo-Gothic castle surrounded by one of Poland's richest arboretums. The castle houses a museum and a significant library."
    },
    facts: {
      de: ["Neugotischer Baustil.", "Umfangreiches Arboretum mit über 3000 Pflanzenarten.", "Legende der 'Weißen Dame'."],
      hu: ["Neogótikus stílus.", "Hatalmas arborétum több mint 3000 növényfajjal.", "A 'Fehér Hölgy' legendája."],
      ro: ["Stil arhitectural neogotic.", "Arboret vast cu peste 3000 de specii de plante.", "Legenda 'Doamnei Albe'."],
      en: ["Neo-Gothic architectural style.", "Extensive arboretum with over 3000 plant species.", "Legend of the 'White Lady'."]
    },
    descriptionAdvanced: {
      hu: "A Kórniki kastély a lengyel romantikus és neogótikus építészet egyik leglátványosabb remeke, amely szinte lebeg egy festői tó partján. A Działyński és a Zamoyski arisztokrata családok ősi fészke eredetileg egy középkori erődítmény volt, amelyet a 19. században építettek át az angol gótika divatja szerint, csipkézett pártázatokkal és tornyokkal. A kastély falai között őrzik Lengyelország egyik legértékesebb történelmi könyv- és kéziratgyűjteményét, valamint fegyvereket és műtárgyakat. A birtokot egy lenyűgöző, több mint háromezer ritka fafajt felsorakoztató arborétum öleli körbe, amely az ország legrégebbi ilyen jellegű botanikus kertje. (Művészettörténet K7 — A neogótika és a romantika kastélyépítészete)"
    },
    factsAdvanced: {
      hu: ["A kastély híres szelleme a 'Fehér Hölgy' (Biała Dama), Teofila Działyńska, aki a helyi legenda szerint éjjelente lelép a falon lévő festményről.", "Az arborétumban láthatók Észak-Amerikából és Ázsiából származó óriás mocsárciprusok és ritka fenyőfélék is.", "A kastély csodálatos, fából intarziált padlózata (parkettája) az egyik legszebb egész Európában."]
    }
  },
  {
    id: "historical-lednica-extra",
    type: "historical",
    parent: "PL-WP",
    coords: [17.38, 52.52],
    name: { de: "Lednica", hu: "Lednica", ro: "Lednica", en: "Lednica" },
    description: {
      de: "Ein See und eine Insel, die als wahrscheinlicher Ort der Taufe Polens im Jahr 966 gelten. Heute ein Museum und Schauplatz jährlicher großer Jugendtreffen.",
      hu: "Egy tó és sziget, amelyet Lengyelország 966-os megkeresztelkedésének valószínű helyszínének tartanak. Ma múzeum és éves nagy ifjúsági találkozók helyszíne.",
      ro: "Un lac și o insulă considerate a fi locul probabil al botezului Poloniei în 966. Astăzi este un muzeu și locul unor mari întâlniri anuale de tineret.",
      en: "A lake and island considered the likely site of the Baptism of Poland in 966. Now a museum and the site of large annual youth meetings."
    },
    facts: {
      de: ["Wahrscheinlicher Ort der Taufe Polens 966.", "Ruinen einer Pfalz und einer Kapelle auf der Insel.", "Jährliches katholisches Jugendtreffen Lednica 2000."],
      hu: ["Lengyelország 966-os megkeresztelkedésének valószínű helyszíne.", "Palota és kápolna romjai a szigeten.", "Éves katolikus ifjúsági találkozó, a Lednica 2000."],
      ro: ["Locul probabil al botezului Poloniei în 966.", "Ruinele unui palatinat și ale unei capele pe insulă.", "Întâlnirea anuală a tineretului catolic Lednica 2000."],
      en: ["Likely site of the Baptism of Poland in 966.", "Ruins of a palatium and chapel on the island.", "Annual Lednica 2000 Catholic youth meeting."]
    },
    descriptionAdvanced: {
      hu: "A Lednica-tó szigete (Ostrów Lednicki) a lengyel államiság és kereszténység szakrális, ősi bölcsője, amely a korai Piast-dinasztia uralkodóinak központja volt. A kutatók túlnyomó többsége egyetért abban, hogy I. Mieszko lengyel fejedelem 966-ban ezen a helyen – vagy a közeli Poznańban – vette fel a kereszténységet, ezzel a nyugati civilizációhoz kötve az országot. A szigeten ma is megcsodálhatók a 10. századi kőpalota (palatium) és a keresztelőkápolna döbbenetes méretű romjai. A történelmi helyszín szellemisége miatt minden nyáron itt gyűlik össze a 'Lednica 2000' találkozón több tízezer katolikus fiatal egész Európából. (Történelem K6 — Lengyelország keresztény államalapítása)"
    },
    factsAdvanced: {
      hu: ["A tó medréből a régészek több száz fegyvert, köztük csatabárdokat, kardokat és sisakokat emeltek ki az ősi hidak környékéről.", "A szigetet a szárazfölddel egykor két, egyenként több száz méter hosszú, masszív tölgyfahíd kötötte össze.", "A 966-os dátumot a hagyományos lengyel történelemoktatás az ország 'születésnapjának' tekinti."]
    }
  },
  {
    id: "city-tarnow-extra",
    type: "city",
    parent: "PL-MP",
    coords: [20.98, 50.01],
    name: { de: "Tarnów", hu: "Tarnów", ro: "Tarnów", en: "Tarnów" },
    description: {
      de: "Bekannt als die 'Perle der Renaissance' mit einem wunderschön erhaltenen Marktplatz. Die Stadt hatte vor dem Krieg eine große jüdische Bevölkerung.",
      hu: "A 'reneszánsz gyöngyszemeként' ismert, gyönyörűen megőrzött főtérrel. A városnak a háború előtt nagy zsidó lakossága volt.",
      ro: "Cunoscut ca 'Perla Renașterii', cu o piață centrală frumos conservată. Orașul avea o populație evreiască mare înainte de război.",
      en: "Known as the 'Pearl of the Renaissance' with a beautifully preserved market square. The city had a large Jewish population before the war."
    },
    facts: {
      de: ["Renaissance-Rathaus und Bürgerhäuser.", "Bima der alten Synagoge ist erhalten.", "Wärmster Ort in Polen."],
      hu: ["Reneszánsz városháza és polgárházak.", "Megmaradt a régi zsinagóga bimája.", "Lengyelország legmelegebb helye."],
      ro: ["Primărie și case burgheze renascentiste.", "Bimah-ul vechii sinagogi este conservat.", "Cel mai cald loc din Polonia."],
      en: ["Renaissance town hall and tenement houses.", "Bimah of the old synagogue is preserved.", "Warmest place in Poland."]
    },
    descriptionAdvanced: {
      hu: "Tarnów, Galícia északi peremének egyik legszebb ékszerdoboza, amelyet páratlanul egységes főtere miatt a 'lengyel reneszánsz gyöngyszemének' is neveznek. A középkori utcaszerkezetet őrző óvárost lenyűgöző árkádos polgárházak és a gótikus-reneszánsz városháza lenyűgöző, pártázatos tornya uralja. A város történelme során a lengyel, a zsidó és az osztrák-magyar kultúrák virágzó olvasztótégelye volt; a második világháború előtt lakosságának közel felét zsidók alkották. Bár a Holokauszt letörölte a zsidó közösséget, a régi zsinagóga megmaradt imapódiuma (bima) és az egykori zsidó negyed utcái máig őrzik a múltjuk emlékét. (Történelem K7 — A reneszánsz városi polgárság és a zsidó diaszpóra)"
    },
    factsAdvanced: {
      hu: ["A meteorológiai mérések alapján Tarnów Lengyelország statisztikailag legmelegebb városa, nyáron hosszú hőhullámokkal.", "A tarnówi székesegyházban található a lengyel arisztokrácia egyik legpompásabb monumentális reneszánsz síremléke.", "A magyar származású Bem József (Bem apó), a lengyel és az 1848-49-es magyar szabadságharc hőse ebben a városban született."]
    }
  },
  {
    id: "city-nowy-sacz-extra",
    type: "city",
    parent: "PL-MP",
    coords: [20.69, 49.62],
    name: { de: "Neu-Sandez", hu: "Nowy Sącz", ro: "Nowy Sącz", en: "Nowy Sącz" },
    description: {
      de: "Eine historische Stadt am Zusammenfluss der Flüsse Dunajec und Kamienica. Sie verfügt über einen großen Marktplatz und die Ruinen einer königlichen Burg.",
      hu: "Történelmi város a Dunajec és a Kamienica folyók összefolyásánál. Nagy főtérrel és egy királyi vár romjaival rendelkezik.",
      ro: "Un oraș istoric la confluența râurilor Dunajec și Kamienica. Are o piață centrală mare și ruinele unui castel regal.",
      en: "A historic town at the confluence of the Dunajec and Kamienica rivers. It has a large market square and the ruins of a royal castle."
    },
    facts: {
      de: ["Gegründet im 13. Jahrhundert.", "Großer Marktplatz (Rynek).", "Galizisches Städtchen (Miasteczko Galicyjskie) Freilichtmuseum."],
      hu: ["A 13. században alapították.", "Nagy főtér (Rynek).", "Galíciai Kisváros (Miasteczko Galicyjskie) skanzen."],
      ro: ["Fondat în secolul al XIII-lea.", "Piață centrală mare (Rynek).", "Muzeu în aer liber 'Orășelul Galițian' (Miasteczko Galicyjskie)."],
      en: ["Founded in the 13th century.", "Large Market Square (Rynek).", "Galician Town (Miasteczko Galicyjskie) open-air museum."]
    },
    descriptionAdvanced: {
      hu: "Nowy Sącz a festői Sądecki-medencében, a Dunajec és a Kamienica folyók összefolyásánál fekvő történelmi város, a déli határvidék egykori védelmezője. A 13. század végén alapított település gyorsan meggazdagodott a Magyarország felé irányuló réz-, só- és borkereskedelemből. Gigantikus méretű, fásított piacterének közepén áll az ország egyik leghíresebb 19. századi, eklektikus stílusú városházája. A város határában található a Galíciai Kisváros nevű csodálatos skanzen, amely egy 19. századi osztrák-magyar monarchiabeli tartományi kisváros minden részletét, a patikától a fogadóig, pontosan rekonstruálja. (Történelem K7 — A középkori lengyel-magyar kereskedelem útvonalai)"
    },
    factsAdvanced: {
      hu: ["A város királyi várát a 14. században építették, de a második világháború végén a németek lőszerraktárként használták és felrobbantották.", "Nowy Sącz a lengyelországi ortodox és görögkatolikus lemkók (kárpátaljai hegyi népcsoport) egyik fontos kulturális központja.", "A helyi skanzen egy korabeli galíciai tűzoltóállomást is bemutat, eredeti lóvontatású fecskendőkkel."]
    }
  },
  {
    id: "historical-wooden-churches-southern-lesser-poland-extra",
    type: "historical",
    parent: "PL-MP",
    coords: [20.2, 49.5],
    name: { de: "Holzkirchen im südlichen Kleinpolen", hu: "Dél-kis-lengyelországi fatemplomok", ro: "Bisericile de lemn din sudul Micii Polonii", en: "Wooden Churches of Southern Lesser Poland" },
    description: {
      de: "Eine Gruppe von sechs einzigartigen Holzkirchen, die zum UNESCO-Weltkulturerbe gehören. Sie repräsentieren eine außergewöhnliche Bautradition.",
      hu: "Hat egyedi fatemplom csoportja, amelyek az UNESCO Világörökség részét képezik. Kivételes építészeti hagyományt képviselnek.",
      ro: "Un grup de șase biserici unice din lemn, situri ale Patrimoniului Mondial UNESCO. Ele reprezintă o tradiție excepțională de construcție.",
      en: "A group of six unique wooden churches, a UNESCO World Heritage site. They represent an exceptional building tradition."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Sechs Kirchen gehören zum Ensemble.", "Beispiele sind Binarowa, Dębno, Lipnica Murowana."],
      hu: ["UNESCO Világörökség része.", "Hat templom tartozik az együtteshez.", "Példák: Binarowa, Dębno, Lipnica Murowana."],
      ro: ["Patrimoniu Mondial UNESCO.", "Șase biserici fac parte din ansamblu.", "Exemplele includ Binarowa, Dębno, Lipnica Murowana."],
      en: ["UNESCO World Heritage site.", "Six churches form the group.", "Examples include Binarowa, Dębno, Lipnica Murowana."]
    },
    descriptionAdvanced: {
      hu: "A Dél-kis-lengyelországi fatemplomok a kárpáti régió ácsmesterségének legtökéletesebb, évszázadok óta álló remekművei, melyek megőrizték a gótikus fatemplom-építészet hagyományait. A hat UNESCO Világörökségként elismert, kizárólag vörösfenyőből és fenyőből épült templom (pl. Binarowa, Dębno, Lipnica Murowana) egyetlen vasszög felhasználása nélkül, fecskefarkú illesztésekkel készült a 15. és 16. században. Kívülről magas, meredek zsindelytetejük zord fenséget sugároz, míg odabent az egész mennyezetet és falakat beborító, élénk színű vallási festmények, a polychrómiák nyűgözik le a belépőt. Ezek az épületek a lengyel falusi katolicizmus és a nemesi alapítványi rendszer legautentikusabb emlékei. (Művészettörténet K6 — A középkori szakrális faépítészet)"
    },
    factsAdvanced: {
      hu: ["A dębno-i Szent Mihály Arkangyal templom falfestményei a legősibb és legépebben fennmaradt fatemplom-polychrómiák egész Európában.", "A zsindelytetők nemcsak védtek a kárpáti havazásoktól, de a mélyre nyúló ereszek az esővizet is távol tartották a fa falaktól.", "A templomokat túlnyomórészt helyi falusi közösségek és kistulajdonos nemesek finanszírozták, nem az egyházi vezetés."]
    }
  },
  {
    id: "kid-landmark-bochnia-salt-mine-extra",
    type: "kid-landmark",
    parent: "PL-MP",
    coords: [20.42, 49.96],
    name: { de: "Salzbergwerk Bochnia", hu: "Bochniai sóbánya", ro: "Salina Bochnia", en: "Bochnia Salt Mine" },
    description: {
      de: "Die älteste Salzmine Polens, die zusammen mit Wieliczka zum UNESCO-Weltkulturerbe gehört. Sie bietet einzigartige Attraktionen wie eine unterirdische Bootsfahrt.",
      hu: "Lengyelország legrégebbi sóbányája, amely Wieliczkával együtt az UNESCO Világörökség része. Egyedülálló látnivalókat kínál, mint például egy földalatti csónakázást.",
      ro: "Cea mai veche mină de sare din Polonia, un sit al Patrimoniului Mondial UNESCO împreună cu Wieliczka. Oferă atracții unice, cum ar fi o plimbare cu barca subterană.",
      en: "The oldest salt mine in Poland, a UNESCO World Heritage site along with Wieliczka. It offers unique attractions like an underground boat ride."
    },
    facts: {
      de: ["Älteste Salzmine in Polen (13. Jh.).", "Unterirdische Bootsfahrt auf einem Soleteich.", "Teil des UNESCO-Weltkulturerbes."],
      hu: ["Lengyelország legrégebbi sóbányája (13. század).", "Földalatti csónakázás egy sós tavon.", "Az UNESCO Világörökség része."],
      ro: ["Cea mai veche mină de sare din Polonia (sec. XIII).", "Plimbare subterană cu barca pe un lac sărat.", "Parte a Patrimoniului Mondial UNESCO."],
      en: ["Oldest salt mine in Poland (13th c.).", "Underground boat trip on a brine lake.", "Part of the UNESCO World Heritage site."]
    },
    descriptionAdvanced: {
      hu: "A Bochniai sóbánya Európa egyik legidősebb folyamatosan működő ipari létesítménye volt, amelyben a sókitermelés már az 1240-es évek közepén, a wieliczkai bányát megelőzve megindult. A Piast-királyok gazdagságát megalapozó kősó (a korabeli 'fehér arany') bányászata egészen a 20. század végéig tartott a hatalmas, több kilométer mély földalatti hálózatban. Ma a bányát az UNESCO Világörökség részeként csúcstechnológiás, multimédiás interaktív múzeummá alakították, ahol a látogatók holografikus lengyel királyokkal és szellemekkel találkozhatnak a sötét vágatokban. Egyik leghíresebb attrakciója egy igazi, sósvizű földalatti tavon történő csónakázás. (Történelem K6 — A középkori sóbányászat és királyi monopóliumok)"
    },
    factsAdvanced: {
      hu: ["A bányában lévő sókápolnák közül a Szent Kinga-kápolnát egy valódi, földalatti kisvasút köti össze a többi járattal.", "Bochniában rendezték meg a világ első földalatti félmaratonját, a szűk sós folyosókon keresztül.", "A bánya mikroklímája annyira tiszta és antiallergén, hogy a vágatok egy részében asztmás gyerekek számára alakítottak ki szanatóriumot."]
    }
  },
  {
    id: "agriculture-bieszczady-forested-area-extra",
    type: "agriculture",
    parent: "PL-PK",
    coords: [22.5, 49.3],
    name: { de: "Forstwirtschaft Bieszczady", hu: "Bieszczady erdőgazdálkodás", ro: "Silvicultura Bieszczady", en: "Bieszczady Forestry" },
    description: {
      de: "Die Forstwirtschaft ist ein wichtiger Wirtschaftszweig in der dünn besiedelten Bieszczady-Region. Die Waldeisenbahn von Bieszczady war einst für den Holztransport von entscheidender Bedeutung.",
      hu: "Az erdőgazdálkodás fontos gazdasági ágazat a gyéren lakott Bieszczady régióban. A Bieszczady erdei vasút egykor kulcsfontosságú volt a fa szállításában.",
      ro: "Silvicultura este o industrie importantă în regiunea slab populată Bieszczady. Calea ferată forestieră Bieszczady a fost odată crucială pentru transportul lemnului.",
      en: "Forestry is a major industry in the sparsely populated Bieszczady region. The Bieszczady Forest Railway was once crucial for timber transport."
    },
    facts: {
      de: ["Nachhaltige Forstwirtschaft.", "Buchen- und Tannenwälder.", "Historische Waldeisenbahn, heute Touristenattraktion."],
      hu: ["Fenntartható erdőgazdálkodás.", "Bükk- és jegenyefenyőerdők.", "Történelmi erdei vasút, ma turisztikai látványosság."],
      ro: ["Silvicultură durabilă.", "Păduri de fag și brad.", "Cale ferată forestieră istorică, acum atracție turistică."],
      en: ["Sustainable forestry.", "Beech and fir forests.", "Historic forest railway, now a tourist attraction."]
    },
    descriptionAdvanced: {
      hu: "A Bieszczady erdőgazdálkodási területei Lengyelország legelzártabb, mégis gazdaságilag létfontosságú zöld régióját jelentik a Keleti-Kárpátokban. A második világháború után szinte teljesen elnéptelenedett vidéken a szocialista állam hatalmas fakitermelői bázisokat hozott létre a sűrű bükk- és jegenyefenyőerdőkben. A zord, hegyvidéki terepen a nehéz gépeket keskeny nyomtávú erdei vasutak helyettesítették, amelyek kígyóként kanyarogtak a völgyek mélyén. Bár a nagyipari fakitermelés mára lelassult és egyre inkább a fenntarthatóságra fókuszál, a felújított Bieszczady Erdei Vasút (Bieszczadzka Kolejka Leśna) gőzösei ma tízezreket visznek romantikus erdei utazásra. (Földrajz K8 — A nehéz terepű erdőgazdálkodás és az ipari vasutak)"
    },
    factsAdvanced: {
      hu: ["A terület fakitermelői (drwal) és faszénégetői a lengyel kultúrában a vad, romantikus és kemény hegyi élet szimbólumaivá váltak.", "A Bieszczady erdei vasútvonalainak nagy részét az I. világháború előtt építették ki osztrák-magyar mérnökök.", "A faszénégetés füstölgő, fémkupola alakú kemencéi (retorty) még ma is megtalálhatók az erdők mélyén."]
    }
  },
  {
    id: "agriculture-podlaskie-stork-villages-extra",
    type: "agriculture",
    parent: "PL-PD",
    coords: [22.9, 52.8],
    name: { de: "Storchendörfer in Podlachien", hu: "Podlasiei gólyafalvak", ro: "Satele cu berze din Podlasia", en: "Podlaskie Stork Villages" },
    description: {
      de: "Die Region Podlachien ist berühmt für ihre hohe Weißstorchpopulation. Dörfer wie Pentowo wurden als 'Europäisches Storchendorf' ausgezeichnet.",
      hu: "A Podlasie régió híres a magas fehérgólya-populációjáról. Az olyan falvakat, mint Pentowo, 'Európai Gólyafalu'-ként ismerték el.",
      ro: "Regiunea Podlasia este renumită pentru populația sa mare de berze albe. Sate precum Pentowo au fost desemnate 'Sat European al Berzelor'.",
      en: "The Podlaskie region is famous for its high population of white storks. Villages like Pentowo have been designated a 'European Stork Village'."
    },
    facts: {
      de: ["Höchste Storchendichte in Polen.", "Pentowo ist ein 'Europäisches Storchendorf'.", "Die Störche sind ein Symbol für die ländliche Landschaft."],
      hu: ["A legnagyobb gólyasűrűség Lengyelországban.", "Pentowo egy 'Európai Gólyafalu'.", "A gólyák a vidéki táj szimbólumai."],
      ro: ["Cea mai mare densitate de berze din Polonia.", "Pentowo este un 'Sat European al Berzelor'.", "Berzele sunt un simbol al peisajului rural."],
      en: ["Highest density of storks in Poland.", "Pentowo is a 'European Stork Village'.", "Storks are a symbol of the rural landscape."]
    },
    descriptionAdvanced: {
      hu: "Podlasie régiója Európa legfontosabb gólyamenedéke, egy olyan lenyűgöző agrártáj, ahol az ember és a természet tökéletes, évezredes harmóniában él együtt. A Narew és a Biebrza folyók ártéri legelői, a kiterjedt mocsarak és a hagyományos, kisparcellás mezőgazdaság páratlanul gazdag békákban és rovarokban, ami tökéletes táplálékforrást biztosít a fehér gólyáknak. A régió olyan falvai, mint Pentowo vagy Tykocin környéke, nyaranta a gólyák valóságos metropoliszaivá válnak: sokszor egyetlen tanyán, fákon, villanyoszlopokon és tetőkön tucatnyi fészek is található. Ez az érintetlen lengyel vidék a nyugat-európai intenzív mezőgazdaság elől visszaszoruló madárfajok egyik utolsó, hatalmas bástyája. (Biológia K6 — Agrár-ökoszisztémák és a költöző madarak védelme)"
    },
    factsAdvanced: {
      hu: ["Pentowo birtoka 2001-ben kapta meg a nemzetközileg elismert 'Európai Gólyafalu' címet a fészkek extrém sűrűsége miatt.", "A lengyel hagyomány szerint a ház tetejére rakott gólyafészek megvédi az épületet a villámcsapástól és bőséges gyermekáldást hoz.", "Tavasszal Lengyelország ad otthont a világ fehérgólya-populációja mintegy egynegyedének."]
    }
  },
  {
    id: "port-police-chemical-port-extra",
    type: "port",
    parent: "PL-ZP",
    coords: [14.57, 53.55],
    name: { de: "Chemiehafen Police", hu: "Police vegyi kikötő", ro: "Portul chimic Police", en: "Police Chemical Port" },
    description: {
      de: "Ein spezialisierter Seehafen in der Nähe von Stettin, der hauptsächlich die großen Chemiewerke in Police bedient. Wichtiger Umschlagplatz für Phosphat, Ammoniak und Säuren.",
      hu: "Speciális tengeri kikötő Szczecin közelében, amely főként a policei nagy vegyi üzemeket szolgálja ki. Fontos átrakodóhely foszfát, ammónia és savak számára.",
      ro: "Un port maritim specializat lângă Szczecin, care deservește în principal marile uzine chimice din Police. Un punct major de transbordare pentru fosfat, amoniac și acizi.",
      en: "A specialized seaport near Szczecin, mainly serving the large chemical plants in Police. A major transshipment point for phosphate, ammonia, and acids."
    },
    facts: {
      de: ["Verbunden mit den Grupa Azoty Police Chemiewerken.", "Umschlag von Rohstoffen für Düngemittel.", "Einer der größten Häfen an der polnischen Küste nach Tonnage."],
      hu: ["Összeköttetésben áll a Grupa Azoty Police vegyi üzemekkel.", "Műtrágya-alapanyagok átrakodása.", "Tonnázs alapján a lengyel partvidék egyik legnagyobb kikötője."],
      ro: ["Conectat la uzinele chimice Grupa Azoty Police.", "Transbordarea materiilor prime pentru îngrășăminte.", "Unul dintre cele mai mari porturi de pe coasta poloneză după tonaj."],
      en: ["Connected to Grupa Azoty Police chemical plants.", "Transshipment of raw materials for fertilizers.", "One of the largest ports on the Polish coast by tonnage."]
    },
    descriptionAdvanced: {
      hu: "A Police vegyi kikötő a lengyel vegyipar és nemzetközi logisztika egyik legfontosabb, speciális csomópontja az Odera folyó tölcsértorkolatánál, Szczecin közelében. Noha nem turisztikai látványosság, nemzetgazdasági jelentősége hatalmas, hiszen a közvetlenül a vízparton elterülő Grupa Azoty vegyikombinát óriási nyersanyagigényét (főként foszfátokat és ammóniát) szolgálja ki a világ minden tájáról. A kikötő hatalmas, futurisztikus kinézetű tároló-silói, a savakat szállító csővezetékek és a folyamatosan rakodó mélytengeri teherhajók az európai ipari logisztika lüktetését mutatják be. A létesítmény működése kulcsfontosságú a kontinens mezőgazdaságának műtrágya-ellátásában. (Földrajz K8 — Speciális ipari kikötők és nyersanyag-kereskedelem)"
    },
    factsAdvanced: {
      hu: ["A kikötő képes fogadni a világ legnagyobb, vegyi anyagokra specializálódott tartályhajóit, amelyek egyenesen a Balti-tengerről hajóznak be ide.", "Police Lengyelország negyedik legforgalmasabb kikötője az átrakott áruk tonnatömege alapján.", "Az üzem egyedülálló, zárt csővezeték-hálózattal minimalizálja a mérgező anyagok környezetbe jutásának kockázatát a hajókról."]
    }
  }
];
