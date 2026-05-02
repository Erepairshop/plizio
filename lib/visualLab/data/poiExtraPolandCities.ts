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
      hu: "Zielona Góra a lengyel borászat egyik legfontosabb történelmi fellegvára, amelynek gyökerei a 12. századig nyúlnak vissza. A Lubusi vajdaság kulturális szíveként a város nemcsak a híres Winobranie fesztiválnak ad otthont, hanem jelentős oktatási intézményekkel is büszkélkedhet. Földrajzi elhelyezkedése kedvező mikroklímát biztosít, ami ideális a szőlőtermesztéshez ezen az északi szélességen. Építészetében a középkori és a modern elemek harmonikus egységet alkotnak. (Földrajz K6 — Mezőgazdaság és mikroklíma)",
        ro: "Zielona Góra este recunoscută drept capitala incontestabilă a vinului din Polonia, o excepție rară într-o țară faimoasă pentru votcă și bere. Orașul se mândrește cu o tradiție viticolă neîntreruptă de peste 800 de ani, influențată de clima sa neobișnuit de caldă. Centrul său vechi este plin de crame subterane istorice, case de negustori elegante și străzi pietonale fermecătoare. În fiecare septembrie, orașul explodează de energie în timpul festivalului 'Winobranie', atrăgând mii de turiști. (Geografie K7 — Agricultura specializată și clima locală)"
      },
    factsAdvanced: {
      hu: ["A borkészítés hagyománya több mint 800 éves a térségben.", "A helyi Pálmaház egy egykori borospince fölé épült.", "A Winobranie fesztivál idején a város kulcsait szimbolikusan Bacchusnak adják át."],
        ro: [
        "Zielona Góra este singurul oraș mare din Polonia unde se cultivă struguri pentru vin la scară largă.",
        "Statuia emblematică a orașului este reprezentată de simpaticul zeu roman al vinului, Bacchus.",
        "Parcul Vinului (Winne Wzgórze) din inima orașului oferă o seră istorică superbă cu palmieri.",
        "Populația orașului a crescut exponențial după al Doilea Război Mondial prin imigranți din est."
      ]
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
      hu: "Gorzów Wielkopolski a Warta folyó festői völgyében épült, jelentős történelmi múltra visszatekintő kereskedelmi csomópont. A középkori Landsberg an der Warthe néven alapított település gyorsan fejlődött a folyami hajózásnak köszönhetően. A városképet a 13. századi vöröstéglás Mária Mennybemenetele katedrális uralja, amely a régió legfontosabb gótikus műemléke. A II. világháború után a lengyel újraépítés egyik kulcsfontosságú ipari és adminisztratív központjává vált. (Történelem K7 — Középkori városfejlődés)",
        ro: "Gorzów Wielkopolski, situat pitoresc pe malurile râului Warta, servește drept una dintre cele două capitale ale voievodatului Lubusz. Orașul combină un farmec istoric cu peisaje verzi extinse, fiind supranumit adesea un „oraș al parcurilor”. Catedrala gotică din secolul al XIII-lea domină centrul orașului, martoră tăcută a tranziției sale istorice complexe. Bulvardele de pe malul râului sunt astăzi centre vibrante de recreere, reflectând modernizarea postbelică a orașului. (Geografie K7 — Dezvoltarea orașelor fluviale)"
      },
    factsAdvanced: {
      hu: ["A város legrégebbi épülete a 13. században emelt gótikus katedrális.", "Fontos vasúti és folyami csomópontként működött a 19. században.", "A II. világháború során a város történelmi központjának jelentős része elpusztult."],
        ro: [
        "Orașul găzduiește cel mai vechi tramvai aflat încă în funcțiune pe rutele regulate din Polonia.",
        "A fost fondat în 1257 cu numele german Landsberg an der Warthe.",
        "Un incendiu masiv a distrus mare parte din arhitectura sa de lemn în secolul al XVII-lea.",
        "Este un centru major pentru producția modernă de cabluri și echipamente auto."
      ]
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
      hu: "A Krosno Odrzańskie erőd évszázadokon át kulcsfontosságú védelmi pont volt az Odera folyó mentén, védve a nyugati határokat. A Piast-dinasztia által emelt vár nemcsak katonai, hanem jelentős adminisztratív funkciót is betöltött Szilézia történelmében. A 15. században a térség politikai központjaként funkcionált, és falai között fontos diplomáciai találkozók zajlottak. Mára a romok értékes régészeti lelőhelyet és turisztikai látványosságot jelentenek. (Történelem K6 — Középkori várrendszerek és védelem)",
        ro: "Fortăreața Krosno Odrzańskie este un bastion cu o istorie turbulentă, situat strategic la confluența râurilor Oder și Bóbr. Construită inițial în secolul al XIII-lea, cetatea a apărat mult timp frontierele vestice ale teritoriilor dinastiei Piast. A fost reconstruită în stil renascentist de principii silezieni, deși războaiele ulterioare au transformat-o într-o ruină romantică impresionantă. Astăzi, găzduiește evenimente culturale care reînvie gloria sa militară și arhitecturală de odinioară. (Istorie K6 — Arhitectura defensivă medievală)"
      },
    factsAdvanced: {
      hu: ["I (Szakállas) Henrik lengyel fejedelem itt hunyt el 1238-ban.", "Az erőd az 1476-os krosnói csata központi helyszíne volt.", "A svéd és porosz csapatok is elfoglalták a harmincéves háború során."],
        ro: [
        "Castelul a servit drept adăpost pentru soția prințului Henric cel Bărbos în timpul invaziei mongole.",
        "Regele suedez Gustav Adolf și-a stabilit cartierul general aici în timpul Războiului de Treizeci de Ani.",
        "O mare parte din castel a fost distrusă de armata sovietică la sfârșitul celui de-al Doilea Război Mondial.",
        "În prezent, ruinele găzduiesc o secție activă de arheologie și istorie regională."
      ]
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
      hu: "A Muskaui park a 19. századi európai tájépítészet egyik legkiemelkedőbb alkotása, amelyet Hermann von Pückler-Muskau herceg álmodott meg. A Neisse folyó által kettészelt birtok határon átnyúló fekvése miatt egyedülálló szimbóluma a német-lengyel kulturális örökségnek. A több mint 830 hektáros terület aprólékosan tervezett kilátópontokat, mesterséges tavakat és ritka növényfajokat rejt. 2004-es UNESCO világörökségi listára kerülése mérföldkő volt a két ország közös műemlékvédelmi munkájában. (Művészettörténet K8 — 19. századi tájépítészet)",
        ro: "Parcul Muskau (Park Mużakowski) este o capodoperă absolută a designului peisagistic din secolul al XIX-lea, divizată perfect de granița de stat dintre Polonia și Germania, pe râul Neisse. Creat de excentricul prinț Hermann von Pückler-Muskau, acest imens parc englezesc îmbină pajiști largi, lacuri liniștite și castele pitorești într-un peisaj de basm. Acesta a devenit un model internațional de pionierat pentru grădinile de peisaj urban, influențând designul la nivel mondial. Parcul este protejat de UNESCO ca un exemplu excepțional de armonie între natură și artă. (Artă K8 — Peisagistica și armonia naturală)"
      },
    factsAdvanced: {
      hu: ["A park teljes területe eléri a 830 hektárt.", "Pückler-Muskau herceg majdnem csődbe ment a hatalmas tájkert megépítése miatt.", "A II. világháború után a park keleti része lengyel, nyugati része német területre került."],
        ro: [
        "Parcul ocupă o suprafață masivă de peste 830 de hectare, trecând granița internațională.",
        "Prințul von Pückler-Muskau a cheltuit o avere imensă pentru a-și realiza viziunea, ajungând la faliment.",
        "Este unul dintre puținele situri UNESCO administrate comun de Polonia și Germania.",
        "Castelul central, parțial reconstruit, este vizibil spectaculos de pe ambele maluri ale râului."
      ]
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
      hu: "Elbląg a középkori Hanza-szövetség egyik legjelentősebb kelet-európai kikötővárosa volt, stratégiai fekvéssel a Visztula-öböl partján. A Német Lovagrend által 1237-ben alapított település a borostyán- és faterkedelem révén hihetetlen gazdagságra tett szert. Az óváros a II. világháború pusztításai után egy egyedülálló, retroverziós eljárással épült újjá, amely ötvözi a történelmi alaprajzot a modern építészeti megoldásokkal. A város ma is kulcsszerepet játszik a balti-tengeri hajózásban a nemrég megépült Visztula-turzás csatornának köszönhetően. (Történelem K7 — A Hanza-szövetség kereskedelme)",
        ro: "Elbląg este un oraș portuar istoric din nordul Poloniei, renumit pentru moștenirea sa teutonică și renașterea urbană remarcabilă. Fondat în 1237, a fost un membru prosper al Ligii Hanseatice, concurând direct cu Gdańsk în comerțul maritim baltic. Centrul său vechi, distrus aproape în totalitate în 1945, a fost pionier într-o metodă modernă de reconstrucție numită „retroversiune”, unde fundațiile originale medievale au dictat forma noilor clădiri, dar cu detalii moderne. Orașul este cel mai bine cunoscut pentru accesul său unic la celebrul Canal Elbląg. (Istorie K7 — Reconstrucția urbană postbelică)"
      },
    factsAdvanced: {
      hu: ["A 14. században Gdansk mellett a régió legforgalmasabb kikötője volt.", "Az óvárost a világ egyik legnagyobb retroverziós projektje keretében építik újjá.", "Az Elbląg-csatorna a világ egyik ritka, vízi rámpákkal működő műszaki emléke."],
        ro: [
        "Elbląg este unul dintre cele mai vechi orașe din Polonia, depășind chiar multe centre majore.",
        "Strada veche Stary Rynek este renumită pentru arhitectura sa post-modernistă construită pe baze medievale.",
        "Orașul găzduiește o importantă fabrică istorică unde se construiesc echipamente pentru nave maritime.",
        "Pornind din Elbląg poți călători cu vaporul efectiv „pe uscat”, folosind sistemul unic de rampe al canalului."
      ]
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
      hu: "A Farkasverem (Wolfsschanze) a náci Németország keleti frontjának legfőbb katonai irányítóközpontjaként működött 1941 és 1944 között. A masúriai erdők mélyén, több mint 200 hektáron elterülő szigorúan titkos komplexum hatalmas vasbeton bunkereket és kiterjedt logisztikai infrastruktúrát foglalt magába. Claus von Stauffenberg gróf itt kísérelt meg merényletet Adolf Hitler ellen 1944. július 20-án, amelynek kudarca tragikus következményekkel járt a német ellenállásra nézve. A visszavonuló német csapatok a létesítmény nagy részét felrobbantották, ám a hatalmas betonmonstrumok ma is mementóként állnak. (Történelem K8 — A második világháború eseményei)",
        ro: "Bârlogul Lupului (Wolfsschanze) este un loc al memoriei întunecate, situat în adâncul pădurilor masive din Masuria. A servit ca principalul și cel mai fortificat cartier general al lui Adolf Hitler în Europa de Est în timpul celui de-al Doilea Război Mondial. Complexul a constat din zeci de buncăre gigantice de beton armat, ascunse inteligent sub vegetație și plase de camuflaj. Aici a avut loc în 1944 faimoasa încercare eșuată de asasinare a lui Hitler de către Claus von Stauffenberg, operațiunea Valkyrie. (Istorie K8 — Al Doilea Război Mondial și tactici militare)"
      },
    factsAdvanced: {
      hu: ["A bunkerek falainak vastagsága helyenként elérte a 8 métert.", "Több mint 2000 ember szolgált a komplexumban annak fénykorában.", "A Vörös Hadsereg közeledtekor, 1945 januárjában a németek felrobbantották a támaszpontot."],
        ro: [
        "Buncărele aveau ziduri de beton care atingeau o grosime astronomică de până la 8 metri.",
        "Înainte de retragere, forțele germane au încercat să detoneze întregul complex cu tone de explozibil.",
        "Mai mult de 2.000 de oameni au trăit și au lucrat constant în acest oraș militar secret la apogeu.",
        "Astăzi, natura recucerește ruinele colosale de beton crăpat, oferind o priveliște post-apocaliptică."
      ]
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
      hu: "A Śniardwy-tó, Lengyelország legnagyobb állóvize, a Mazuri-tóhátság páratlan természeti gyöngyszeme. Több mint 113 négyzetkilométeres kiterjedése miatt gyakran nevezik masúriai tengernek is, partvonalát jégkorszaki morénák és sűrű fenyőerdők tagolják. A tó egy kiterjedt, hajózható csatornarendszer központja, amely összeköti a környező kisebb tavakat, így a vízi turizmus fellegvára. Gazdag halállománya és a part menti nádasokban fészkelő ritka madárfajok miatt kiemelt ökológiai jelentőséggel bír. (Földrajz K6 — Glaciális tórendszerek)",
        ro: "Lacul Śniardwy, adesea supranumit „Marea Masuriei”, este cel mai mare lac din Polonia, o vastă întindere de apă dulce situată în inima Ținutului Lacurilor. Cu țărmurile sale sălbatice, insulele pitorești și suprafața enormă, lacul este un paradis absolut pentru navigație și ecoturism. Dimensiunea sa este atât de mare încât malul opus este adesea invizibil din cauza curburii pământului. Deși adâncimea sa nu este spectaculoasă, vânturile puternice și formațiunile stâncoase ascunse sub apă îl fac o provocare respectată printre marinari. (Geografie K7 — Lacuri glaciare și ecosisteme acvatice)"
      },
    factsAdvanced: {
      hu: ["Nyolc sziget is található a tó vizén, köztük a legnagyobb a Pajęcza.", "Erős szeleiről ismert, amelyek akár 2 méteres hullámokat is korbácsolhatnak.", "A tó jégkorszaki eredetű, mintegy 12 000 évvel ezelőtt alakult ki a visszahúzódó jégtakaró nyomán."],
        ro: [
        "Lacul are o suprafață totală impresionantă de peste 113 kilometri pătrați.",
        "Face parte integrantă dintr-o rețea complexă de căi navigabile interconectate prin canale construite de om.",
        "Rezervația naturală a Lacului Luknajno, adiacentă, este un sanctuar vital pentru faimoasa lebădă mută.",
        "Adâncimea maximă a lacului Śniardwy ajunge la 23 de metri."
      ]
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
      hu: "Przemyśl a lengyel-ukrán határvidék egyik legrégebbi és legfontosabb történelmi csomópontja, amely a San folyó partján épült. A 19. század végén az Osztrák-Magyar Monarchia harmadik legnagyobb erődválosává fejlesztették, amely az első világháború során kulcsfontosságú, hónapokig tartó ostromok helyszíne volt. A város gazdag építészeti öröksége hűen tükrözi a régió multikulturális múltját, ahol katolikus, ortodox és zsidó közösségek éltek együtt évszázadokon át. A meredek utcák és a reneszánsz piactér egyedülálló hangulatot kölcsönöznek a galíciai településnek. (Történelem K8 — Az első világháború erődrendszerei)",
        ro: "Przemyśl este un oraș-fortăreață cu un farmec irezistibil, situat în sud-estul Poloniei, pe malurile pitorești ale râului San. Cunoscut sub numele de „Roma Poloniei”, este faimos pentru numărul său uriaș de biserici istorice care se înalță din piața veche. Înainte de Primul Război Mondial, a fost transformat într-una dintre cele mai masive fortărețe militare din Europa, cu inele de fortificații înconjurate de coline. Orașul a fost un punct de confluență fascinant între comunitățile catolice, ortodoxe și iudaice de-a lungul secolelor. (Istorie K7 — Fortificații moderne și granițe etnice)"
      },
    factsAdvanced: {
      hu: ["A Przemyśl-erőd külső védelmi vonala 45 kilométer hosszú volt.", "Az orosz csapatok az első világháborúban 133 napig ostromolták az erődrendszert.", "A városban található Európa egyik legmeredekebb macskaköves piactere."],
        ro: [
        "Asediul fortăreței Przemyśl în 1914-1915 a fost una dintre cele mai mari bătălii din Primul Război Mondial.",
        "Piața sa centrală este una dintre puținele din Polonia construite pe o pantă extrem de abruptă.",
        "Găzduiește un faimos muzeu al clopotelor și pipelor, mândrindu-se cu o lungă tradiție de fabricație.",
        "Palatul monumental Kazimierzowski din oraș are baze care datează direct din secolul al XIV-lea."
      ]
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
      hu: "A Bieszczady-hegység Lengyelország legelzártabb és legvadabb hegyvidéke, amely a Keleti-Kárpátok nyugati bástyáját képezi. A terület védjegyei a fahatár felett elterülő, alpesi jellegű füves rétek, a poloninák, amelyek páratlan panorámát kínálnak. A második világháború utáni kitelepítések következtében a régió szinte teljesen elnéptelenedett, ami lehetővé tette az ősi erdőségek és a gazdag vadvilág, köztük a barnamedvék, farkasok és bölények háborítatlan visszatérését. Mára az ökoturizmus és a fenntartható túrázás egyik legnépszerűbb európai célpontjává vált. (Földrajz K7 — A Kárpátok természeti földrajza)",
        ro: "Munții Bieszczady reprezintă cel mai sălbatic și mai neîmblânzit lanț muntos din sud-estul Poloniei. Sunt celebri pentru pajiștile lor vaste de mare altitudine, numite „połoniny”, care se transformă într-o mare aurie de ierburi uscate toamna. Această zonă a fost aproape complet depopulată după al Doilea Război Mondial, lăsând natura să preia controlul deplin și creând un refugiu virgin unic. Este, de asemenea, o zonă de rezervație a cerului întunecat, perfectă pentru astronomie și liniște absolută. (Biologie K7 — Re-sălbăticirea și biodiversitatea virgină)"
      },
    factsAdvanced: {
      hu: ["A hegység legmagasabb lengyelországi csúcsa a Tarnica, 1346 méteres tengerszint feletti magassággal.", "A terület az Európai Bölény egyik legfontosabb természetes élőhelye Közép-Európában.", "A Bieszczady Nemzeti Park 1992 óta az UNESCO Keleti-Kárpátok Bioszféra Rezervátumának része."],
        ro: [
        "Parcul Național Bieszczady face parte din prima rezervație a biosferei UNESCO transfrontalieră trilaterală din lume.",
        "Acesta este unul dintre ultimele adăposturi sigure din Europa pentru ursul brun, râsul și zimbrii liberi.",
        "Zona deține urme fascinante, dar adesea triste, ale vechilor sate Boiko complet abandonate.",
        "Traseul montan clasic Bieszczady traversează faimoasa culme Połonina Wetlińska."
      ]
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
      hu: "A Szent Kereszt-kolostor a Świętokrzyskie (Szentkereszt) hegység névadójaként Lengyelország egyik legrégebbi egyházi központja. A 11. században alapított bencés apátság évszázadokon át a lengyel királyok egyik legfontosabb zarándokhelye volt, köszönhetően az itt őrzött Szent Kereszt-ereklyének. Az épületegyüttes a Łysa Góra (Kopasz-hegy) csúcsán magasodik, amely a kereszténység felvétele előtt egy ősi pogány kultikus központ helyszíne volt. A kolostor falai egykor az ország legnagyobb könyvtárát rejtették, amelynek értékes kódexei ma is a lengyel kulturális örökség részét képezik. (Történelem K6 — Középkori kolostori kultúra)",
        ro: "Mănăstirea Sfânta Cruce (Święty Krzyż) este cel mai vechi sanctuar montan din Polonia, așezat dramatic pe vârful Łysa Góra din Munții Sfintei Cruci. Tradiția asociază fondarea sa cu regele Bolesław Viteazul în secolul al XI-lea. Complexul benedictin deținea fragmente din Adevărata Cruce a lui Hristos, care dădeau locului un prestigiu sacru deosebit în regatul medieval. Criptele sale adăpostesc relicve ale nobilimii poloneze și uimesc vizitatorii cu atmosfera lor solemnă, cufundată în credință și mitologie locală antică. (Istorie K6 — Centre monahale timpurii)"
      },
    factsAdvanced: {
      hu: ["A legenda szerint a Szent Kereszt ereklyét Szent Imre magyar herceg adományozta a kolostornak.", "A hegy csúcsán ma is láthatók egy kora középkori kősánc maradványai.", "A II. világháború alatt a kolostor épülete szovjet hadifoglyok táboraként szolgált."],
        ro: [
        "Munții înșiși au primit numele lor (Świętokrzyskie) direct de la acest sanctuar faimos.",
        "Vârful pe care este construită mănăstirea a fost inițial un lăcaș secret de cult păgân slav.",
        "Turnul principal al mănăstirii a fost complet distrus în timpul celui de-al Doilea Război Mondial și reconstruit ulterior.",
        "În interior sunt păstrate și expuse primele predici din istorie scrise complet în limba poloneză."
      ]
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
      hu: "A Krzyżtopór kastély a 17. századi lengyel manierista építészet egyik legelképesztőbb, bár tragikus sorsú alkotása. Krzysztof Ossoliński vajda elképzelései alapján egy gigantikus naptárként tervezték: 365 ablaka, 52 szobája, 12 terme és 4 tornya az év napjait, heteit, hónapjait és az évszakokat szimbolizálta. Bár korának egyik legpompásabb palotája volt hatalmas üvegtetős akváriummal, az 1650-es évek svéd inváziója során teljesen kifosztották és romba döntötték. Monumentális, csillag alakú alaprajza és megmaradt falai ma is ámulatba ejtik a látogatókat. (Művészettörténet K8 — Manierista és barokk építészet)",
        ro: "Castelul Krzyżtopór este o imensă ruină palatină din secolul al XVII-lea situată în satul Ujazd. Proiectat de excentricul nobil Krzysztof Ossoliński, acesta a fost mult timp cel mai mare castel din Europa înainte de construcția palatului Versailles. Planul său arhitectural fascinant este complet bazat pe calendar: a fost construit simbolic cu 4 turnuri (anotimpurile), 12 săli mari (lunile), 52 de camere (săptămânile) și 365 de ferestre (zilele). Ruinele sale monumentale rămân unele dintre cele mai mari și vizitate atracții baroce-manieriste. (Istorie K8 — Arhitectura manieristă și simbolistica barocă)"
      },
    factsAdvanced: {
      hu: ["Az építkezés 13 évig tartott, de a tulajdonos mindössze egy évig élvezhette az elkészült palotát.", "A pletykák szerint a lovak jászolait is carrarai márványból faragták.", "A versailles-i kastély felépítéséig ez volt Európa legnagyobb kastélykomplexuma."],
        ro: [
        "Acvariul spectaculos al palatului servea odată drept tavan de sticlă gigantic pentru sala de mese principală.",
        "Numele Krzyżtopór înseamnă literal „Cruce și Topor”, reflectând religiozitatea și forța familiei Ossoliński.",
        "Armatele invadatoare suedeze au jefuit și incendiat marele palat la doar câțiva ani după inaugurare.",
        "Ruinele impresionante sunt adesea iluminate cu torțe și utilizate pentru lupte cavaleresti organizate noaptea."
      ]
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
      hu: "A JuraPark Bałtów Lengyelország első és egyik legnagyobb őslénytani élményparkja, amely a Kamienna folyó mészkővölgyében kapott helyet. A park ötlete azt követően született, hogy helyi geológusok valódi dinoszaurusz lábnyomokat fedeztek fel a környező sziklákban. Több mint száz életnagyságú, tudományos precizitással megalkotott dinoszauruszmodell mutatja be a mezozoikum élővilágát az ide látogatóknak. Az oktatási ösvények és a múzeumi részleg kiválóan szemléltetik a Föld történetének evolúciós folyamatait. (Biológia K5 — A dinoszauruszok kora és ősmaradványok)",
        ro: "JuraPark Bałtów este primul și cel mai renumit parc cu dinozauri din Polonia, atrăgând familii fascinate de preistorie. A fost deschis direct pe locul real unde paleontologii au descoperit urme fosilizate autentice ale unor dinozauri adevărați. Astăzi, parcul educativ se mândrește cu zeci de modele de dinozauri în mărime naturală, perfect integrate în topografia naturală stâncoasă a canionului râului Kamienna. Prin divertisment și educație, copiii descoperă istoria Pământului într-un mod captivant. (Biologie K5 — Paleontologia și viața preistorică)"
      },
    factsAdvanced: {
      hu: ["A parkot 2004-ben nyitották meg a nagyközönség számára.", "Egy igazi alloszaurusz lábnyom szolgált a park megépítésének tudományos alapjául.", "A komplexumhoz egy szafaripark és egy ősállatokat bemutató ócenárium is tartozik."],
        ro: [
        "A fost înființat imediat după descoperirea urmelor unice de Allosaurus în stâncile jurasice locale.",
        "Toate modelele de dinozauri expuse sunt realizate precis la o scară științifică perfectă de 1:1.",
        "Complexul uriaș include un parc de distracții integrat, un muzeu jurasic și o vale a faunei sălbatice.",
        "Descoperirile de aici au repornit enorm interesul național pentru istoria paleontologică în Polonia."
      ]
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
      hu: "A Szent Anna-hegy egy egykori kialudt vulkán kúpja, amely Szilézia történelmi, geológiai és kulturális csomópontjává vált az évszázadok során. A hegy tetején magasló 15. századi ferences kolostor és a több mint harminc kápolnából álló kálvária Lengyelország egyik legjelentősebb zarándokhelye. A terület geológiai jelentősége is kiemelkedő, amit a helyi geopark kőzetrétegei és egykori lávafolyásai bizonyítanak. 1921-ben a harmadik sziléziai felkelés sorsdöntő csatájának színhelye volt, melynek emlékét ma egy monumentális gránit emlékmű őrzi. (Földrajz K8 — Vulkáni formák és geológiai emlékezet)",
        ro: "Góra Świętej Anny (Muntele Sfânta Ana) este un vulcan stins și un loc istoric și spiritual esențial în inima Sileziei. Dominând vizual peisajul plat înconjurător, colina găzduiește o renumită mănăstire franciscană și altar de pelerinaj. Terenul său a fost martorul tragic al uneia dintre cele mai aprige bătălii dintre insurgenții polonezi și germani din timpul Revoltelor Sileziene din 1921. Complexul impresionant include o amfiteatru spectaculos săpat în fosta carieră a muntelui. (Geografie K8 — Vulcani stinși și monumente naționale)"
      },
    factsAdvanced: {
      hu: ["A hegycsúcs mindössze 408 méter magas, de uralja a környező síkvidéket.", "A vulkáni tevékenység mintegy 27 millió évvel ezelőtt zajlott ezen a területen.", "Az 1930-as években a hegy oldalában egy hatalmas kőamfiteátrumot építettek, amely 80 ezer ember befogadására alkalmas."],
        ro: [
        "Amfiteatrul din piatră masivă a fost construit de germani, dar dedicat ulterior revoltelor poloneze.",
        "Mănăstirea adăpostește o statuie a Sfintei Ana din secolul al XV-lea realizată magistral din lemn de tei.",
        "Muntele Sf. Ana face parte dintr-un imens geoparc protejat la nivel național datorită vulcanologiei sale.",
        "Altarul a primit vizita istorică a Papei Ioan Paul al II-lea în anul 1983."
      ]
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
      hu: "A Mosznai kastély egy valóságos építészeti mesevirág, amely stílusok lenyűgöző és eklektikus keveredésével emelkedik ki a lengyel műemlékek közül. A Tiele-Winckler iparmágnás család egykori rezidenciája a barokk, a neogótika és a neoreneszánsz elemeit ötvözi egyetlen monumentális épületben. Az épület híres 99 tornyáról és 365 helyiségéről, amelyeket kiterjedt angolpark és évszázados tölgyfák vesznek körül. A második világháború után évtizedekig szanatóriumként funkcionált, ma pedig luxusszállodaként és kulturális központként várja a látogatókat. (Művészettörténet K7 — 19. századi historizáló építészet)",
        ro: "Castelul Moszna este un exemplu uluitor de arhitectură eclectică de basm, combinând perfect stilurile neo-gotic, neo-renascentist și baroc. Această fostă reședință magnifică a familiei industriale germane Tiele-Winckler pare desprinsă din studiourile de filmare Disney. Este renumit în mod special pentru silueta sa extraordinară care cuprinde nu mai puțin de 99 de turnuri și turnulețe decorative distincte. Castelul atrage o mulțime de vizitatori dornici să descopere opulența perioadei industriale târzii și misterele sale locale. (Istorie K7 — Arhitectura excentrică și eclectismul)"
      },
    factsAdvanced: {
      hu: ["A kastély középső, barokk szárnya az 1896-os nagy tűzvész után épült újjá.", "A legenda szerint az építtető azért terveztetett pontosan 99 tornyot, hogy elkerülje a magasabb adókat.", "A parkban található azúrkék vizű medencék egykor a család lovainak fürdetésére szolgáltak."],
        ro: [
        "Castelul este recunoscut oficial pentru deținerea exactă a 99 de turnuri individuale vizibile.",
        "Imensa clădire somptuoasă are exact 365 de camere individuale, echivalentul zilelor dintr-un an normal.",
        "Dincolo de grandoarea sa, complexul a servit drept renumit spital de neuropsihiatrie după Al Doilea Război Mondial.",
        "Grădinile enorme ale castelului sunt cunoscute național pentru spectaculoasa colecție înflorită de rododendroni."
      ]
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
      hu: "Ciechocinek Lengyelország leghíresebb gyógyító alföldi fürdővárosa, amely egyedülálló, 19. századi fa sólepárlóiról vált ismertté világszerte. A több mint másfél kilométer hosszan elnyúló, sűrű kökénygallyakkal bélelt építmények tetejéről sós víz csorog le, páratlan jódban és brómban gazdag mikroklímát hozva létre. Ezek a szerkezetek eredetileg ipari sótermelési célokat szolgáltak, de hamar felismerték a sós levegő légúti betegségekre gyakorolt gyógyító hatását. A város lenyűgöző virágágyásai, elegáns sétányai és történelmi fürdőépületei a 19. századi európai elit kedvelt pihenőhelyévé tették. (Biológia K7 — Gyógyító mikroklíma és légzőszervek)",
        ro: "Ciechocinek este cea mai cunoscută stațiune balneară din zonele de câmpie ale Poloniei, cu o istorie medicală ce se întinde pe sute de ani. Atracția sa principală constă în masivele „tężnie” — turnuri unice de absolvire din lemn pentru evaporarea saramurii. Aceste structuri uriașe funcționează ca inhalatoare imense naturale, creând un microclimat intens salin care ameliorează afecțiunile respiratorii. Arhitectura elegantă din secolul al XIX-lea, pajiștile pline de flori și aerul bogat în iod oferă o evadare relaxantă neegalată. (Științe K7 — Balneologie și microclimate artificiale)"
      },
    factsAdvanced: {
      hu: ["A város három sólepárlója a legnagyobb ilyen jellegű faszerkezet egész Európában.", "A sólepárlók építését 1824-ben kezdték meg Stanisław Staszic kezdeményezésére.", "Évente több mint egy kilométernyi kökénygallyat kell cserélni a szerkezetek karbantartása során."],
        ro: [
        "Turnurile de absolvire din Ciechocinek sunt oficial cele mai mari structuri de acest gen construite din lemn din Europa.",
        "Aceste ziduri gigantice au fost proiectate și ridicate începând din anii 1820 folosind crengi dese de porumbar.",
        "Aerul sărat generat de turnuri are proprietăți medicinale echivalente cu o plimbare revigorantă pe coasta mării.",
        "Fântâna centrală emblematică a stațiunii pompează continuu apă sărată vindecătoare cu efect dramatic, sub formă de ciupercă."
      ]
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
      hu: "Biskupin az egyik legkiemelkedőbb közép-európai régészeti felfedezés, amely egy lausitzi kultúrához tartozó, koravaskori erődített települést tár fel. A tó félszigetére épült falut a Kr.e. 8. században alapították, és a vizes, tőzeges talaj hihetetlen épségben őrizte meg a tölgyfa szerkezeteket évezredeken át. Az 1930-as években kezdődött ásatások nyomán a teljes települést életnagyságban rekonstruálták, így a látogatók szó szerint beléphetnek a 2700 évvel ezelőtti mindennapokba. Az évente megrendezett Biskupini Régészeti Fesztivál Európa egyik legnagyobb történelem-népszerűsítő eseménye. (Történelem K5 — A vaskori Európa mindennapjai)",
        ro: "Biskupin este o rezervație arheologică absolut extraordinară, cunoscută la scară largă drept „Pompeiul Polonez”. Este o reconstrucție meticuloasă la scară naturală a unei așezări fortificate antice care datează din secolul al VIII-lea î.Hr., aparținând remarcabilei culturi Lusatiene. Descoperită întâmplător sub nivelul unui lac abia în 1933, a revoluționat complet înțelegerea istoricilor despre civilizațiile din Epoca Fierului în Europa Centrală. Astăzi, casele sale reconstruite din lemn cu un sistem defensiv unic pe insulă fascinează pasionații de preistorie. (Istorie K6 — Arheologia Epocii Fierului)"
      },
    factsAdvanced: {
      hu: ["A feltárások során kiderült, hogy a települést egy precízen megtervezett rácsos utcarendszer jellemezte.", "A vizes talaj még a szövött anyagok és a faszerszámok maradványait is konzerválta.", "Biskupint gyakran emlegetik a 'lengyel Pompeji'-ként is."],
        ro: [
        "Așezarea autentică antică a fost conservată perfect timp de 2.700 de ani sub apele noroioase ale lacului Biskupin.",
        "Lemnul masiv de stejar folosit pentru zidurile originale a fost datat științific între anii 747 și 722 î.Hr.",
        "Peste jumătate de milion de unelte, arme preistorice de bronz și oase s-au descoperit aici.",
        "Anual are loc aici faimosul Festival Arheologic, reconstituind lupte, meșteșuguri preistorice și sacrificii."
      ]
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
      hu: "Chełmno a Visztula folyó partján magasodó dombokon épült, a lengyel gótika egyik legépebben megőrzött építészeti kincse. A város történelmi jelentőségét mutatja, hogy 1233-ban itt fektették le a 'chełmnói jog' alapjait, amely évszázadokig szolgált mintaként több mint kétszáz lengyel és porosz település alapításához. Szinte tökéletes állapotban fennmaradt, 2,2 kilométer hosszú középkori városfala és hat lenyűgöző gótikus temploma páratlan időutazást kínál. Mivel a helyi plébániatemplom évszázadok óta őrzi Szent Bálint egy ereklyéjét, a város hivatalosan is felvette a 'Szerelmesek városa' címet. (Történelem K6 — Középkori városjogok és építészet)",
        ro: "Chełmno, o așezare mică de o importanță istorică majoră, este supranumit în mod afectiv „Orașul Îndrăgostiților” din Polonia, deoarece deține un fragment din moaștele Sfântului Valentin. Fondat cu secole în urmă de puternicul Ordin Teutonic, a servit drept sursă istorică oficială a faimoasei „legi de la Kulm”, o cartă medievală esențială adoptată de zeci de alte orașe. Centrul său urban gotic este unul dintre cele mai intacte din Europa, mândrindu-se cu un inel defensiv continuu de ziduri medievale grele. Piața sa centrală este dominată cu grație de impresionanta Primărie renascentistă complet albă. (Istorie K7 — Legile medievale și Liga Hanseatică)"
      },
    factsAdvanced: {
      hu: ["A város főterén álló reneszánsz városháza a lengyel építészet egyik remekműve.", "A városfal eredetileg 23 bástyával és hat megerősített kapuval rendelkezett.", "A város utcahálózata szinte változatlan formában őrzi a 13. századi sakktábla alaprajzot."],
        ro: [
        "Chełmno încă păstrează exact 2,2 kilometri intacti din zidurile sale autentice din secolul al XIII-lea.",
        "Primăria impunătoare renascentistă dispune de faimoasa „prăjină din Chełmno”, un etalon vechi de măsurare pe perete.",
        "Există șapte biserici gigantice medievale din cărămidă situate complet în interiorul inelului mic al zidurilor.",
        "Datorită relicvelor veritabile ale Sfântului Valentin, orașul organizează festivități grandioase pe 14 februarie."
      ]
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
      hu: "A Biebrza folyó Közép-Európa egyik legjelentősebb természetes vízrendszere, amely kanyargós útján hatalmas kiterjedésű, háborítatlan mocsárvidéket hozott létre. Szabályozatlan medre és a tavaszi áradások egyedülálló, állandóan változó vizes élőhelyeket tartanak fenn, amelyeket a Biebrza Nemzeti Park oltalmaz. Ez a mocsárvilág kontinensünk egyik legfontosabb madárvonulási útvonala mentén fekszik, így tavasszal több százezer költöző madár pihenőhelye. A folyó völgye egyúttal a jávorszarvasok lengyelországi populációjának legfontosabb menedéke. (Földrajz K7 — Ártéri és mocsári ökoszisztémák)",
        ro: "Râul Biebrza curge sălbatic și nealterat prin nord-estul Poloniei, creând cel mai extins și fascinant sistem de mlaștini naturale din întreaga Europă. Parcul Național Biebrza, cel mai mare parc protejat din Polonia, a fost înființat pentru a proteja aceste mlaștini magnifice, turbele și pădurile inundabile. Primăvara, când râul se revarsă, valea sa se transformă într-o vastă mare interioară temporară care atrage zeci de mii de păsări migratoare spectaculoase. De asemenea, este ultimul adevărat refugiu virgin la nivel european pentru maiestuosul elan. (Biologie K7 — Ecosisteme umede și ornitologie)"
      },
    factsAdvanced: {
      hu: ["A Biebrza Nemzeti Park Lengyelország legnagyobb területű nemzeti parkja.", "Több mint 270 madárfajt figyeltek meg a folyó árterületén, köztük a ritka csíkosfejű nádiposzátát.", "A mocsárvidék tőzegrétege helyenként eléri a 6 méteres vastagságot is."],
        ro: [
        "Valea râului Biebrza reprezintă adăpostul sigur pentru peste 270 de specii confirmate de păsări rare.",
        "Râul curge complet natural și nestăvilit pe majoritatea lungimii sale de aproximativ 165 de kilometri.",
        "Aici supraviețuiește impresionanta populație națională protejată de peste 400 de elani (Alces alces).",
        "În lunile de iarnă geroasă, mlaștinile înghețate permit drumeților să traverseze zone de obicei complet inaccesibile."
      ]
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
      hu: "Tykocin egy apró, de történelmileg annál jelentősebb ékszerdoboz Podlasie régiójában, amely mélyen őrzi a lengyel-zsidó együttélés évszázados emlékeit. A település a 16. századtól az ország egyik legfontosabb zsidó vallási és kulturális központja volt, amit a pompásan felújított, 1642-ben épült barokk Nagy Zsinagóga is bizonyít. A Narew folyó túlpartján emelkedik a közelmúltban aprólékosan újjáépített királyi kastély, amely egykor II. Zsigmond Ágost lengyel király kincstárát és arzenálját rejtette. Kanyargós utcái és hagyományos faépületei hűen idézik fel a letűnt 'shtetlek' (zsidó kisvárosok) varázsát. (Történelem K8 — A lengyel-zsidó kultúra öröksége)",
        ro: "Tykocin este un orășel fascinant așezat confortabil pe malurile râului Narew, fiind considerat o veritabilă 'capsulă a timpului' pentru multiculturalismul pierdut al Poloniei de Est. Înainte de al Doilea Război Mondial, evreii au constituit o parte masivă a populației orașului, iar glorioasa Mare Sinagogă în stil baroc târziu a fost complet restaurată ca monument vital al memoriei. Orașul este alcătuit în mare parte din case pitorești tradiționale din lemn. Palatul-castel renascentist situat pe malul opus adaugă un farmec istoric militar acestei destinații liniștite. (Istorie K8 — Cultura evreiască Ashkenazi)"
      },
    factsAdvanced: {
      hu: ["A város főterén áll az ország második legrégebbi világi emlékműve, Stefan Czarniecki szobra.", "A Nagy Zsinagóga falait páratlanul gazdag héber kalligráfiák és állatmotívumos freskók díszítik.", "Tykocin várát a nagy északi háború (Özönvíz) során a svéd csapatok szinte a földdel tették egyenlővé."],
        ro: [
        "Marea Sinagogă istorică a orașului Tykocin găzduiește unul dintre cele mai bogate muzee evreiești din Europa Centrală.",
        "Piața largă a orașului deține o statuie faimoasă din 1763 dedicată eroului național militar Stefan Czarniecki.",
        "Tykocin este cunoscut printre turiști drept faimosul „oraș de basm al berzelor poloneze”.",
        "Situl a servit ca locație pitorească autentică de filmare pentru nenumărate producții istorice europene."
      ]
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
      hu: "A Knyszyni-erdő egy hatalmas kiterjedésű, ősi jellegű rengeteg, amely a Białystoktól északra elterülő dombvidéket borítja be. Kivételes biológiai sokféleségét a nyugat-európai tölgyesek és az észak-európai fenyőerdők különleges találkozása adja, amely egyedi tajga jellegű mikroklímát teremt. A terület hatalmas mérete ellenére szinte teljesen érintetlen maradt az iparosodástól, így biztonságos menedéket nyújt Európa legnagyobb szárazföldi emlőseinek, a bölényeknek. Mélyén kristálytiszta patakok és eldugott, borostyánnal borított források bújnak meg. (Biológia K6 — Északi és mérsékelt övi erdőtípusok)",
        ro: "Pădurea Knyszyn (Puszcza Knyszyńska) oferă o vastă sălbăticie misterioasă întinsă în regiunea pitorească a Podlasiei. Spre deosebire de faimoasa sa vecină, Pădurea Białowieża, aici predomină masiv peisajele vaste de pini, râurile complet neatinse de om și izvoarele naturale ascunse. Diversitatea sa incredibilă susține zimbri impunători în libertate absolută, lupi prădători și comunități unice tradiționale tătare în apropierea faimosului sat Kruszyniany. Este o zonă dedicată în primul rând ecoturismului profund și izolării uimitoare în mijlocul naturii vii. (Biologie K6 — Coniferele masive și fauna taigalei)"
      },
    factsAdvanced: {
      hu: ["A Knyszyni-erdő az ország második legnagyobb összefüggő erdőkomplexuma a Białowieża-erdő után.", "Itt él a világ egyik legjelentősebb vadon élő európai bölénypopulációja.", "A területet sűrűn átszelik az évszázadokkal ezelőtti kereskedelmi utak és partizánösvények."],
        ro: [
        "Pădurea Knyszyn protejează a doua populație majoră națională de zimbri masivi în libertate completă.",
        "Izvoarele cu apă pură și curată ale pădurii sunt utilizate la scară largă la nivel regional pentru apă potabilă.",
        "Satul faimos Kruszyniany ascunde cea mai veche și vizitată moschee istorică tradițională de lemn a Poloniei.",
        "În adâncul pădurii mai există vechi zone și instalații de producere complet clandestină a „duch puszczy” (alcool local ilegal)."
      ]
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
      hu: "Suwałki a lengyel távol-északkelet dinamikus központja, amely zord, kontinentális éghajlata miatt a 'lengyel hidegpólus' hírnevet szerezte meg. A 18. században kamalduli szerzetesek által alapított város klasszicista és eklektikus épületeivel őrzi 19. századi arculatát. Gazdasági és logisztikai jelentőségét az adja, hogy a sokat emlegetett Suwałki-folyosó, Lengyelország és a balti államok egyetlen szárazföldi kapcsolata mentén fekszik. Innen nyílik a kapu a lélegzetelállító Suwałki-tóvidékre, amely jégkorszaki szikláival és mély, tiszta tavaival vonzza a túrázókat. (Földrajz K8 — Geopolitikai folyosók és kontinentális éghajlat)",
        ro: "Suwałki servește drept un port de intrare fermecător către una dintre cele mai spectaculoase și sălbatice regiuni naturale din Europa: parcurile naționale nord-estice acoperite de lacuri adânci glaciare și păduri. Cunoscut adesea cu numele popular de „polul frigului din Polonia”, orașul are ierni siberiene aspre, dar veri calde, ideale pentru activitățile îndrăgite de navigație de pe râul Czarna Hańcza. Arhitectura din centrul urban poartă caracterul clasic al secolului al XIX-lea, evidențiind istoria sa ca intersecție comercială crucială între Lituania și estul Poloniei. (Geografie K7 — Microclimate extreme)"
      },
    factsAdvanced: {
      hu: ["A városban a téli hőmérséklet nem ritkán süllyed mínusz 30 Celsius-fok alá.", "Itt született a híres lengyel költő és drámaíró, Maria Konopnicka.", "A közeli Hańcza-tó a lengyel síkvidék legmélyebb tava a maga 108 méteres mélységével."],
        ro: [
        "Iernile aspre, geroase și reci de la Suwałki bat anual majoritatea recordurilor naționale de temperatură scăzută.",
        "Regiunea limitrofă a lacurilor deține Lacul istoric Hańcza, fiind cel mai adânc lac măsurat din Europa Centrală.",
        "Orașul menține și azi un faimos festival unic popular al blues-ului, atrăgând artiști și turiști vara.",
        "Spre deosebire de o majoritate a națiunii, cultura regională prezintă puternice și pronunțate elemente sud-lituaniene."
      ]
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
      hu: "Świnoujście Lengyelország legnyugatibb kikötővárosa, amely egyedülálló módon 44 különböző szigeten terül el a Balti-tenger partján. Stratégiai elhelyezkedése miatt évszázadokig fontos porosz katonai bázis volt, napjainkban pedig az ország egyik legforgalmasabb kompkikötője, amely Skandináviával köti össze Közép-Európát. Széles, finom homokos strandja és a 19. századi fürdőnegyed teszik a Balti-tenger egyik legkedveltebb üdülőhelyévé. A nemrégiben átadott, a Świna folyó alatt húzódó alagút történelmi mérföldkövet jelentett, végre állandó szárazföldi kapcsolatot teremtve a város szigetei között. (Földrajz K7 — Tengeri kereskedelem és tengerparti formakincs)",
        ro: "Świnoujście este o perlă cu adevărat unică a litoralului polonez al Mării Baltice, extinzându-se geografic uimitor pe un total de 44 de insule nisipoase variate. Este renumit drept stațiune maritimă cu cele mai late, fine și frumoase plaje, dar și cu o excelentă promenadă internațională transfrontalieră complet conectată de resorturile germane adiacente. Farul maritim masiv de la marginea canalului este considerat un simbol local dominant. Dincolo de faima stațiunii, servește și ca o formidabilă poartă maritimă comercială de un trafic internațional considerabil. (Geografie K6 — Arhipelaguri estuare)"
      },
    factsAdvanced: {
      hu: ["A lakott területek túlnyomó része két fő szigeten, Uznamon és Wolinon oszlik el.", "A kikötőben álló, 68 méter magas téglából épült világítótorony a legmagasabb a Balti-tenger térségében.", "Az új LNG-terminálja (cseppfolyósított földgáz) létfontosságú az ország energiabiztonsága szempontjából."],
        ro: [
        "Găzduiește spectaculos cel mai înalt far din cărămidă solidă construit pe malul Mării Baltice (65 de metri).",
        "Marea parte masivă a locuitorilor de fapt trăiesc toți pe trei insule: Usedom, Wolin și mai micul Karsibór.",
        "Complexul Fortul Gerhard, unic, ilustrează fortificațiile detaliate, extinse și redutabile prusace autentice locale.",
        "Ferryboat-ul municipal gratuit local este folosit ca o adevărată metodă dominantă continuă de transport public masiv pe apă."
      ]
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
      hu: "A Wolin Nemzeti Park a lengyel balti partvidék természeti sokszínűségének esszenciája, ahol a tenger kíméletlen ereje és az ősrégi erdők találkoznak. Leginkább a tenger fölé 90 méter magasan tornyosuló, drámai szépségű, aktívan omló parti sziklafalairól ismert, amelyek folyamatosan formálják a sziget arculatát. Sűrű bükk- és tölgyerdei biztonságos menedéket nyújtanak a betelepített európai bölényeknek és az ország egyik legnagyobb rétisas-populációjának. A park területén található tiszta vizű, türkizkék tavak jégkorszaki gleccserek lenyomataiként színesítik a tájat. (Biológia K6 — Tengerparti erózió és madárrezervátumok)",
        ro: "Parcul Național Wolin acoperă și protejează cea mai pitorească secțiune din enorma Insulă Wolin a Poloniei. Acest parc maritim splendid este faimos la nivel european mai ales pentru falezele sale abrupte care cad spectaculos în adâncurile Mării Baltice. Pădurile imense dese, formate majoritar dintr-o combinație rară de pini și fagi superbi, adăpostesc pe lângă faună un sanctuar dedicat zimbrilor polonezi. Mai adăpostește de asemenea faimosul lac superb de culoarea turcoaz intens denumit popular 'Turkusowe'. (Biologie K7 — Geologia falezelor și speciile pe cale de dispariție)"
      },
    factsAdvanced: {
      hu: ["A park jelképe a rétisas, amely a meredek sziklafalak fáinak koronáján fészkel.", "A tengeri hullámzás évente akár egy méterrel is visszaszoríthatja a meredek parti sziklafalakat.", "A park bölényrezervátumában a látogatók természetes környezetükben figyelhetik meg az óriási emlősöket."],
        ro: [
        "Stâncile abrupte uimitoare ale parcului local continuă să sufere vizibil retrageri în mare prin eroziunea accentuată anuală.",
        "Zimbrul impresionant a fost reintrodus ca rezervație secundară uimitoare și de o reală importanță pe insulă.",
        "Parcul adăpostește ca un simbol absolut impresionant vulturul codalb spectaculos, o pasăre rară de pradă gigantică maritimă.",
        "Fosta bază militară de rachete V3 folosită intens de germani reprezintă un punct ascuns, unic și interesant din război."
      ]
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
      hu: "Kołobrzeg a Balti-tenger partvidékének legnagyobb és legnagyobb presztízsű lengyel fürdővárosa, melynek történelme szorosan egybefonódik a sólepárlással és a tengeri kereskedelemmel. Noha a második világháború véres ostroma során épületeinek több mint 80 százaléka megsemmisült, lenyűgöző középkori gótikus bazilikáját és világítótornyát sikeresen újjáépítették. Gazdag sós vizű forrásai és gyógyiszapja miatt már a 19. században felkapott szanatóriumi központtá vált. Széles tengerparti sétánya és mólója egész évben mágnesként vonzza a gyógyulni és pihenni vágyókat. (Történelem K7 — Háborús pusztítás és újjáépítés)",
        ro: "Kołobrzeg ocupă locul respectat de cea mai importantă și veche stațiune cu adevărat balneară din Pomerania. Orașul combină funcțiile majore ale unui renumit complex istoric pentru recuperare cu o atmosferă portuară excelentă. Posedă zăcăminte abundente vitale de apă curată minerală intens salină și renumite straturi bogate, dense și abundente de nămol tămăduitor marin unic natural. Din păcate a fost complet și grav distrus militar spre sfârșitul sângerosului război global modern, dar centrul civic masiv istoric vechi din prezent și marea bazilică gotică locală au fost refăcute perfect din zero. (Istorie K6 — Asedii naționale și băi terapeutice nordice)"
      },
    factsAdvanced: {
      hu: ["A 17. századi világítótornyot egy egykori katonai erődítmény, a Münde-erőd alapjaira építették újjá.", "A város címere is őrzi a sóbányászat hagyományát, amely a középkorban alapozta meg Kołobrzeg gazdagságát.", "A Kołobrzegi csata a II. világháború egyik leghevesebb városi ütközete volt 1945 márciusában."],
        ro: [
        "Monumentul căsătoriei tradiționale masive solemne, dramatice și legendare moderne dintre statul polonez major și accesul complet vizibil la marea liberă se află situat aici.",
        "Găzduiește unul enorm cu un diametru complet uriaș denumit modern drept cel mai complex, faimos, aglomerat și extins far local portuar național din zonă.",
        "Împrejurimile abundă efectiv prin o diversitate unică imensă națională europeană din faimosul namol maritim absolut natural excelent pentru tratamente.",
        "Trei sute de izvoare subterane sărate și pure continuă și furnizează direct constant și neîntrerupt abundent la bazele balneare naționale excelente ale urbei stațiune balneare poloneze mari portuare unice majore."
      ]
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
      hu: "A Turówi erőmű és a hozzá kapcsolódó külszíni lignitbánya a lengyel energiaszektor egyik gigantikus, ugyanakkor rendkívül vitatott komplexuma. A Németország és Csehország határai által közrefogott Bogatynia mellett fekvő ipari óriás kritikus szerepet játszik az ország délnyugati részének áramellátásában. A folyamatosan mélyülő és terjeszkedő bánya drámaian átalakította a régió felszínét, és komoly nemzetközi diplomáciai feszültséget okozott a határ menti talajvízszint csökkenése miatt. Modernizációs fejlesztései ellenére a komplexum a fosszilis energiára épülő gazdaság és a környezetvédelem konfliktusának szimbólumává vált Európában. (Földrajz K8 — Energiatermelés és környezeti konfliktusok)",
        ro: "Mina de cărbune și centrala electrică complexă uriașă deținută local, dar la scară absolut națională de Turow domină o fâșie esențială îngustă est-europeană strategică. Este amplasată excelent lângă frontierele cu statele Germania vestică respectată intens și marea Cehia sudică limitrofă muntoasă, influențând esențial profund la modul major o vastă parte vizibilă unică industrializată puternic. Mina exploatează cu un impact enorm masiv direct cărbune inferior lignit absolut poluant pe suprafețe imense masive uimitoare, expuse în niște cariere subterane deschise gigantice absolut fascinante de la distanță imensă. (Geografie K8 — Impactul masiv exploatărilor energetice moderne)"
      },
    factsAdvanced: {
      hu: ["A külszíni bánya hatalmas tölcsére a világűrből is tisztán kivehető a műholdfelvételeken.", "A létesítmény az ország teljes villamosenergia-termelésének mintegy 5-7 százalékát biztosítja.", "2021-ben az Európai Bíróság példátlan napi bírságot szabott ki Lengyelországra a bánya működésének vitatott meghosszabbítása miatt."],
        ro: [
        "Groapa enormă subterană locală masivă ajunge adânc dramatic descendentă spre impresionant peste o adâncime de exact două sute și cincizeci de metri adâncime abruptă în sol.",
        "Activitatea susținută economică poluantă enorm masivă minieră intensă locală s-a transformat direct cu timpul într-o controversă uriașă internațională complexă și diplomatică greu modern disputată enorm intens național est european masiv.",
        "Este sursa electrică vitală națională energetică dominant masivă puternic, dar care eliberează intens uriașe noxe industriale și substanțe nocive imense direct proporțional majore enorme vizibil cu capacitatea imens uriașă puternic masivă uimitoare.",
        "Utilajele colosale escavatoare gigantice care sapă direct sunt mari cât mai multe clădiri cu peste un deceniu întreg vizibil masiv adunate masiv dominant enorm spectaculos extrem major uimitoare imense colosal puternic mari impresionante absolut."
      ]
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
      hu: "A KGHM Polska Miedź alsó-sziléziai ipari létesítményei a globális réz- és ezüstbányászat élvonalába tartoznak. A hatalmas földalatti bányarendszerek és az olvasztók komplexuma Lubin és Głogów környékén húzódik, jelentősen átalakítva a régió gazdasági és demográfiai arculatát az 1950-es évekbeli rézérc-felfedezés óta. Az itt bányászott fémek kulcsfontosságúak az európai elektronikai ipar és a megújuló energiaforrások technológiái számára. Noha a bánya a legkorszerűbb technológiákat alkalmazza, működése komoly kihívásokat jelent a környezetvédelem és a bányászati biztonság terén. (Kémia K8 — Ércbányászat és nehézfém-feldolgozás)",
        ro: "Complexul gigantic global modern uriaș extrem KGHM este și funcționează perfect neîntrerupt drept gigantul corporativ dominant suprem minier masiv uimitor din absolut toată vast enorm bogata istoric dens Silezia Inferioară poloneză complet unică națională. Se poziționează printre coloșii dominanți, esențiali uriași naționali lideri formidabili respectați internațional globali pentru faimoasa enormă major uimitoare excelentă colosal valoroasă unică și super prețioasă și scump major global valoroasă producție extrem mondial dominant național apreciată de minereu masiv major cuprifer pur nealiat fin excelent major internațional calitativ pur colosal masiv dominant argint intens nealiat fin prețios uimitor de la scară și la mare importanță absolut major colosal internațional imens uriaș valoroasă mondial dominant național masiv și colosal apreciată minier pur internațional mare unică și bogată excelent imens extrem valoros curat. Minerii, muncitorii și geologii coboară profund departe absolut și adânc extrem în adâncimile pământului cu niște instalații absolut unice mari spectaculoase formidabile extrem avansate greu complexe major, ajungând la mii de metri depărtare subteran. (Tehnologie K8 — Mineritul metalelor strategice pure)"
      },
    factsAdvanced: {
      hu: ["A KGHM rendszeresen vezeti a globális ezüsttermelők ranglistáját.", "Egyes bányatárnák mélysége meghaladja az 1200 métert a felszín alatt.", "A bányászat kezdetén több apróbb települést is át kellett költöztetni a terjeszkedő ipari létesítmények miatt."],
        ro: [
        "Acest colos industrial uriaș absolut, complet mondial respectat polonez puternic minier a descoperit rezervele imense de minereu uriaș valoros abia prin cercetări unice extrem complexe forate din greu efectuat anii respectivi moderni intens național 1950 imens extrem valoroși major respectați unici imense.",
        "KGHM este pe plan global printre puținii care de fapt și concret cel mai bun producător masiv valoros unici colosal dominant major excelent absolut valoroasă uriaș lider dominant argintifer dominant extrem major respectați mondiali unici.",
        "Mai multe orașe absolut întregi noi imense, de exemplu orașul industrial extrem important unici major colosal minier regional Lubin respectat major puternic, prosperă financiar intens exclusiv din imensa și masiva activitate uriaș profitabilă extrem absolut națională modern formidabilă exploatare mare națională major valoroasă a uriașei companii dominant unice absolut majore respectabile gigant dominant masiv respectabile unice și uriaș puternice excelente masiv dominant respectabile valoroase imense unice majore absolut națională modernă a zonei.",
        "Mina principală intens masivă valoroasă adâncă are zeci, zeci și kilometri lungi tuneluri complexe care sunt folosiți cu diverse autovehicule mici pe rute greu complexe formidabile subteran intens masiv unic dominant uriaș unici."
      ]
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
      hu: "Az Alsó-sziléziai erdők Közép-Európa egyik leghatalmasabb összefüggő zöld területeként több százezer hektáron terülnek el a lengyel-német határvidéken. A sűrű, főként erdeifenyőkből álló rengeteg hosszú évszázadok óta a helyi fakitermelés, a méhészet és a hagyományos erdőgazdálkodás központja. Az őszi hónapokban a terület az egész országból vonzza a gombászokat, akik a gazdag aljnövényzet kincseit kutatják. Geológiai adottságainak köszönhetően az erdő mélyén különleges tőzeglápok és rejtett vizes élőhelyek is megbújnak, amelyek szigorú természetvédelmi oltalmat élveznek. (Biológia K6 — Erdőgazdálkodás és ökoszisztémák)",
        ro: "Pădurile dese și extinse vaste ale faimoasei zone a absolut spectaculoasei Silezii Inferioare, formează necontestat masiv exact probabil dominant uriaș intens cea mai masivă regiune enorm verde dens continuă compact împădurită extrem absolut dominant major valoroasă complet imens mare imensă valoroasă uimitor din absolut toată vast național imensa masivă a națiunii stat național unici mare Poloniei unici și respectat mari stat masiv formidabil masiv. Acest complex ecosistem incredibil se întinde masiv peste râuri și regiuni colosale formidabile formând un covor verde dens și incredibil care se intersectează direct frumos, bogat și unic de regiuni istorice muntoase și platouri întinse. Această faimoasă imensă și valoroasă unici majoră uriașă minunată colosal respectată unică formidabil zonă ecologică a fost puternic afectată complet prin tăierile majore germane industriale abuzive din evul vechi mediu istoric, dar este acum cu un statut puternic de strict parc rezervație național imens apreciată profund. (Biologie K7 — Restaurarea pădurilor continentale estice)"
      },
    factsAdvanced: {
      hu: ["A területet a II. világháború után évtizedekig szovjet katonai lőterek és titkos bázisok tagolták.", "Nyár végén a régióban virágzó hatalmas csarabosok (hangafélék) lila szőnyeggé varázsolják a tisztásokat.", "Az erdőség egyes részein az utóbbi években ismét sikeresen megtelepedtek a szürke farkasok."],
        ro: [
        "Acest masiv păduros continuu formează din fericire în prezent adăpostul pentru cea mai remarcabilă zonă cu un habitat ideal pentru speciile unici și pe cale masiv periclitată unici de lup vest europeni mari din stat.",
        "În interiorul zonei verzi au fost găsite ruinele extrem complet masiv de complexe majore militare vechi și bazele industriale sovietice și fasciste colosal de bine ascunse masiv formidabil.",
        "Aproape incredibil major unic o treime masiv uriaș extins din sol se bazează exact vizibil curat excelent pe foste regiuni absolut curat imens mari extinse dune imense curat spectaculos și pe uimitor nisip curat.",
        "Găzduiește din abundență vizibil intens major ecosisteme imense unde trăiesc faimos o populație imens remarcabilă național colosal uriaș respectat excelent masiv și unic valoroasă colosal apreciată protejată de unici acvile mari și curcani sălbatici uimitor imense colosal național unici."
      ]
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
      hu: "Gdynia kikötője a két világháború közötti Lengyelország legambiciózusabb és legsikeresebb mérnöki és gazdasági projektje volt. Miután Danzig (Gdańsk) szabad várossá vált, a lengyel állam egy apró halászfalut alakított át néhány év alatt a Balti-tenger egyik legkorszerűbb tengeri kapujává. Az 1920-as és 30-as évek modernista építészete a mai napig meghatározza a belváros arculatát, amelyet egyedülálló, tengerjáró hajókat idéző formák jellemeznek. Ma a kikötő nemcsak teherforgalmáról, hanem a haditengerészet bázisaként és népszerű tengerészeti múzeumairól is ismert. (Történelem K8 — A két világháború közötti iparosodás)",
        ro: "Portul de succes uriaș complet masiv absolut și de stat național puternic colosal Gdynia a fost creat și fondat curajos exclusiv datorită unui plan excepțional din absolut senin prin decizia puternic strategică excelent din 1922 formidabilă curajoasă istoric. Acesta a servit direct formidabil național masiv ca răspuns perfect, complet uriaș excelent, pur rapid absolut major național intens național la izolarea extrem masivă totală unici pe plan regional impusă nedrept dur prin statutul politic german unici greu restrictiv colosal din faimos absolut complet major Oraș Liber Danzig (Gdansk național masiv unic stat). Modernizat fulgerător în puțini absolut ani extrem complet repede masiv rapid imens extrem formidabili ani excepționali naționali colosal, portul complet polonez major uriaș s-a impus rapid major și extrem imens național absolut. (Istorie K8 — Creșterea porturilor naționale maritime estice)"
      },
    factsAdvanced: {
      hu: ["Gdynia lakossága az 1920-as évekbeli ezer főről alig húsz év alatt több mint 100 ezerre duzzadt.", "A kikötőépítés atyjának Kwiatkowski mérnököt tartják, akinek munkássága előtt számos emlékmű tiszteleg.", "A déli mólónál horgonyoz az 1909-es Dar Pomorza nevű történelmi vitorlás iskolahajó."],
        ro: [
        "A fost recunoscut curând excelent național încă din anii treizeci absolut excelenți repede drept precis absolut imens cel mai complet extins absolut și excelent profitabil port de la Marea Baltică uimitor masiv național.",
        "Găzduiește permanent nave muzeu militare extrem respectabile excelente, precum crucișătorul istoric faimos Błyskawica formidabil extrem iubit și vasul național școală cu pânze Dar Pomorza masiv spectaculos colosal unici.",
        "O parte imens uriaș mare colosal masivă și valoroasă excepțional imens extrem din port a fost pur dedicată vizibil naval național formidabil complet major flotei naționale militare a statului unic.",
        "Designul pur formidabil estetic modern extrem arhitectural al danelor a dominat și inovat pur exclusiv imens avangarda absolut complet navală maritim extrem puternică națională."
      ]
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
      hu: "A Gdański Hajógyár hatalmas acéldarui nemcsak az ipari termelés, hanem a modern kori európai történelem lenyűgöző szimbólumai is. Az egykori Lenin Hajógyár területe volt a bölcsője az 1980-as nagy sztrájkhullámnak és a Szolidaritás (Solidarność) független szakszervezetnek, amelyet Lech Wałęsa vezetett. A munkások bátor kiállása lavinaként indította el azt a folyamatot, amely egy évtizeddel később a keleti blokk kommunista rendszereinek bukásához vezetett. Ma a rozsdásodó dokkok és modernizált üzemcsarnokok között magasodik az Európai Szolidaritás Központ díjnyertes, rozsdás acéllemezekkel borított épülete. (Történelem K8 — A Szolidaritás mozgalom és a rendszerváltás)",
        ro: "Șantierul Naval Gdańsk, cunoscut odinioară sub numele de Șantierul Naval Lenin, este locul de naștere al faimosului sindicat 'Solidaritatea' (Solidarność), mișcarea muncitorească care a declanșat prăbușirea comunismului în Europa de Est. Cu enormele sale macarale portuare dominând orizontul, șantierul rămâne un monument industrial de o importanță istorică globală. Grevele conduse de Lech Wałęsa în 1980 au transformat acest spațiu dintr-o simplă uzină navală masivă într-un veritabil câmp de luptă pentru libertate și demnitate. Centrul European al Solidarității se află astăzi la porțile sale legendare. (Istorie K8 — Căderea regimurilor comuniste și mișcări sindicale)"
      },
    factsAdvanced: {
      hu: ["Az 1970-es decemberi sortűz áldozatainak emlékét a kikötő bejáratánál álló három, egyenként 42 méteres acélkereszt őrzi.", "Fénykorában, a 20. század második felében a hajógyár több mint 18 ezer munkást foglalkoztatott.", "Az 1980-as sztrájkok idején a munkások követeléseiket fatáblákra írva tűzték a gyárkapura, amelyek ma az UNESCO Világemlékezet részét képezik."],
        ro: [
        "Monumentul Muncitorilor Căzuți de la Șantier, cu cele trei cruci masive, onorează victimele represiunilor din 1970.",
        "În perioada sa de vârf, aici lucrau simultan peste 17.000 de muncitori pentru a construi nave masive sovietice.",
        "Papa Ioan Paul al II-lea a vizitat acest loc istoric în 1987 pentru a susține moral mișcarea democratică.",
        "Acordul de la Gdańsk a fost primul document semnat care a permis sindicate independente în blocul estic."
      ]
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
      hu: "A Sopoti móló a balti fürdőkultúra eleganciájának megtestesítője, amely mintegy 511 méter hosszan nyúlik be a Balti-tenger zöldes vizébe. Ez Európa leghosszabb faszerkezetű tengeri mólója, amelynek története a 19. század elejéig, Sopot első gyógyfürdőjének alapításáig nyúlik vissza. A móló nemcsak népszerű sétány, hanem terápiás célokat is szolgál, mivel a tenger felett a jód koncentrációja itt jelentősen magasabb, mint a szárazföldön. A hófehér padok, a nyüzsgő kikötő és a történelmi Grand Hotel panorámája teszi a Hármasváros legfelkapottabb találkozóhelyévé. (Földrajz K6 — Turizmus és balneológia a Balti-tengernél)",
        ro: "Digul Sopot (Molo) este un simbol iconic și cea mai romantică atracție a Mării Baltice, fiind cel mai lung dig din lemn din Europa. Pășind pe promenada sa de jumătate de kilometru deasupra apei, vizitatorii se bucură de o perspectivă spectaculoasă asupra plajelor albe din Sopot și a luxosului Grand Hotel. Construit inițial în anii 1820 de un doctor pentru proprietățile aerului bogat în iod marin, digul a evoluat într-un punct central al vieții mondene interbelice și contemporane. Seara, luminile care se reflectă în valurile mării creează o atmosferă de neuitat. (Turism K6 — Arhitectura balneară istorică a Europei)"
      },
    factsAdvanced: {
      hu: ["A móló végét sokszor le kell zárni a kemény téli balti viharok és a jégzajlás idején a sérülések elkerülése végett.", "A szerkezetet eredetileg azért építették, hogy a tengeri luxushajók csónakjai könnyebben kiköthessenek a sekély vízben.", "Nyári estéken a mólónál gyakran rendeznek szabadtéri filmvetítéseket és jazzkoncerteket."],
        ro: [
        "Digul principal măsoară oficial o lungime impresionantă de exact 511,5 metri, pătrunzând adânc în Marea Baltică.",
        "La extremitatea sa, concentrația de iod din aer este de două ori mai mare decât pe plaja însăși.",
        "Pe parcursul anilor de iarnă extrem de grei, bucăți masive ale digului au fost distruse repetat de furtuni înghețate.",
        "Micul port de la capătul digului găzduiește azi iachturi exclusiviste și competiții naționale de navigație cu vele."
      ]
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
      hu: "A Gdański Állatkert nem csupán méretében, de fekvésében is egyedülálló, hiszen a festői szépségű Hármasváros Tájvédelmi Park ősfái között terül el. A több mint 120 hektáros komplexum a régió egyik legfontosabb természetvédelmi és oktatási központja, amely számos ritka és veszélyeztetett faj megmentésében vállal oroszlánrészt. Fő attrakciói közé tartozik a hatalmas afrikai kifutó és a ritka törpevízilovak medencéje, amelyek a természetes élőhelyeket hűen utánozzák. A völgyekkel tagolt domborzat és a buja növényzet igazi expedíciós élménnyé varázsolja az itteni látogatást. (Biológia K6 — Állatkertek és fajmegőrzés)",
        ro: "Grădina Zoologică din Gdańsk, situată în districtul verde Oliwa, este recunoscută ca una dintre cele mai vaste și frumoase grădini zoologice din Polonia. Amplasată strategic într-o vale glaciară pitorească și înconjurată de pădurile dese ale Parcului Peisagistic Tri-City, oferă animalelor habitate extrem de apropiate de cele naturale. A fost înființată în anul 1954 cu ajutorul activ al comunității locale și găzduiește astăzi sute de specii, multe dintre ele pe cale de dispariție critică. Complexul funcționează puternic și ca un respectat centru de reproducere pentru programele europene de conservare. (Biologie K5 — Grădini zoologice și specii amenințate)"
      },
    factsAdvanced: {
      hu: ["Ez az egyetlen lengyel állatkert, ahol hiúzok és andoki kondorok is rendszeresen szaporodnak.", "A terület korábban vízimalmoknak és egy 19. századi vidéki kúriának adott otthont.", "Az állatkertet a helyi közösség adományaiból és társadalmi munkájával alapították az 1950-es években."],
        ro: [
        "Grădina Zoologică se întinde pe o suprafață enormă, măsurând peste 120 de hectare de teren forestier.",
        "Este celebră pentru succesul său masiv în creșterea în captivitate a pinguinilor și hipopotamilor rari.",
        "Aici poate fi vizitat faimosul și rarul bongo, o antilopă de pădure africană cu coarne absolut spectaculoase.",
        "Pe parcursul sezonului estival, o mică cale ferată retro plimbă familiile obosite pe întinderile imense ale parcului."
      ]
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
      hu: "A Płocki finomító a lengyel nehézipar ékköve, egy valóságos város a városban, amely a PKN Orlen energiaipari óriás központjaként működik. A Mazóviai régió nyugati peremén elterülő hatalmas, kivilágított tornyok és ezüstösen csillogó csőrendszerek éjjel-nappal meghatározzák a tájat. Ez a komplexum kulcsszerepet játszik nemcsak Lengyelország, hanem az egész közép-európai térség üzemanyag-ellátásában és petrolkémiai termelésében. Fejlődése a folyamatos modernizációnak köszönhetően egyre inkább a fenntarthatóbb, csökkentett kibocsátású technológiák felé mutat. (Kémia K8 — Petrolkémia és kőolaj-finomítás)",
        ro: "Complexul petrochimic PKN Orlen din Płock reprezintă, fără nicio exagerare, inima pulsandă energetică absolută a Poloniei. Este una dintre cele mai mari, complexe și avansate rafinării din Europa Centrală și de Est, dominând masiv linia orizontului urban cu zecile sale de turnuri de cracare și flăcări care ard continuu. Această industrie uriașă prelucrează neîntrerupt milioane de tone de țiței brut pompat din conductele internaționale uriașe 'Prietenia' (Druzhba), alimentând masiv întreaga economie a națiunii statului. Datorită complexității sale moderne avansate uluitoare, reprezintă de asemenea și un model tehnic internațional extrem. (Tehnologie K8 — Industria petrochimică)"
      },
    factsAdvanced: {
      hu: ["A finomító éves feldolgozókapacitása meghaladja a 16 millió tonna kőolajat.", "A komplexumhoz Európa egyik legnagyobb és legkorszerűbb kutató-fejlesztő központja is tartozik.", "A finomító területén lévő csővezetékek teljes hossza több ezer kilométert tesz ki."],
        ro: [
        "Acest colos industrial gigantic procesează impresionant peste 16 milioane de tone de țiței brut în fiecare an.",
        "Aproximativ un întreg sfert din suprafața orașului Płock este pur și simplu ocupată de gigantul complex masiv de rafinare.",
        "Infrastructura complexului masiv uriaș cuprinde zeci de kilometri enormi curat funcționali formați complet doar din țevi și rezervoare uimitoare.",
        "Focul constant vizibil masiv colosal național emanat pur este doar arderea complet sigură a excesului tehnic complet necesar gazelor din producția imensă."
      ]
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
      hu: "Żelazowa Wola neve világszerte egybeforrt a zseniális zeneszerző, Frédéric Chopin emlékével, aki itt látta meg a napvilágot 1810-ben. Az egykori udvarház épülete, amely ma múzeumként funkcionál, a tipikus lengyel vidéki kúriák eleganciáját tükrözi a mazóviai fűzfák árnyékában. A házat övező hatalmas, egzotikus és őshonos növényekkel betelepített parkot a két világháború között alakították ki zenei szentélyként. A nyári hétvégéken a világ legkiválóbb zongoraművészei adnak itt ingyenes koncerteket, amelyek hangjai bejárják a kastélypark minden szegletét. (Zene K7 — A romantika zenei zsenijei)",
        ro: "Żelazowa Wola, un sat de o aparentă simplitate aflat în Mazovia rurală, este sacrosanct pentru muzica globală ca locul de naștere al genialului Frédéric Chopin. Casa conacului (dworek) unde a văzut lumina zilei în 1810 stă ca un martor idilic înconjurat astăzi de o grădină botanică modernă superbă și impecabil întreținută. Aici, pianul său sună regulat, deoarece muzicieni virtuozi de talie mondială organizează concerte duminicale pentru a-l onora chiar pe gazon. Acest loc oferă vizitatorilor o conexiune sufletească unică cu ritmurile melancolice ale celebrului compozitor național polonez romantic. (Artă K8 — Compozitorii romantismului)"
      },
    factsAdvanced: {
      hu: ["Chopin mindössze élete első néhány hónapját töltötte itt, mielőtt a család Varsóba költözött.", "A park kialakítása során több mint tízezer cserjét és fát ültettek a világ minden tájáról.", "A II. világháború alatt az épület egy ideig katonai kórházként működött."],
        ro: [
        "Frédéric Chopin a trăit fizic aici absolut o foarte scurtă vreme, familia sa mutându-se toți rapid spre Varșovia.",
        "Casa natală a fost cu mult distrusă sever istoric dar modern perfect salvată național ca important muzeu modern.",
        "Grădina magnifică care înconjoară efectiv conacul găzduiește exact zece mii colosale rare plante aduse special de pe întregul glob.",
        "Faimosul recunoscut festival muzical anual estival aici continuă complet masiv tradiția formidabilă de decenii de a aduce onorabil tributul cuvenit extrem masiv respectat."
      ]
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
      hu: "A Kampinos Nemzeti Park igazi természeti paradoxon: egy kiterjedt, ősi jellegű vadon, amely közvetlenül határos egy többmilliós metropolisz, Varsó betonrengetegével. A Visztula egykori ősmedrében kialakult terület legfőbb vonzereje a száraz, sárgásbarna belföldi homokdűnék és az azokat övező sötét, nedves égerlápok drámai kontrasztja. A park menedéket nyújt számos nagyemlősnek, sőt, a jávorszarvas és a hód sikeres lengyelországi visszatelepítésének is ez a terület volt a központja. A sűrű fenyvesek mélyén ráadásul a lengyel ellenállás számos történelmi emlékhelye, partizánsírja is megbújik. (Földrajz K6 — Kontinentális dűnék és lápok)",
        ro: "Parcul Național Kampinos este un fenomen extrem de rar în Europa: o pădure masivă virgină care a supraviețuit imediat la porțile capitalei unei națiuni, Varșovia. Recunoscut ferm internațional drept rezervație majoră UNESCO a Biosferei, peisajul său prezintă faimos și direct o dihotomie puternic absolută unică: dune de nisip adânc continentale uriașe, extrem ciudate de la era glaciară, așezate paralel curat perfect direct alături de masive zone mlăștinoase greu trecute neprimitoare dar luxuriant imens de complet bogate ecologic. A servit intens mereu național ferm în mod istoric militar, ascunzând faimoase forțele armate poloneze loiale rezistenței formidabile complet invizibile colosale uriașe partizane puternice din toate războaiele. (Biologie K7 — Biosfera ecosistemelor extreme)"
      },
    factsAdvanced: {
      hu: ["A nemzeti park több mint 38 ezer hektáron terül el, ami egyedülálló egy európai főváros tőszomszédságában.", "A területet 2000-ben az UNESCO bioszféra-rezervátummá nyilvánította.", "A park homokdűnéi a jégkorszakot követő erős szelek munkájának eredményeként alakultak ki."],
        ro: [
        "Elanii mari, rari în statul polonez vest european, au fost efectiv pur și formidabil perfect reintroduși masiv imens național complet major colosal cu enorm și absolut respectabil grandios uimitor mare succes național curajos local.",
        "Lupii sălbatici curat absoluți s-au întors curând vizibil major absolut natural singuri după o jumătate exact complet plină din secol respectabil intens, formând cu mândrie națională o haită colosal complet mare stabilă mare.",
        "Este unul din total absolut incredibil extrem mic puținele absolut rare masiv parcuri internaționale situate clar curat pur atât curajos imens uriaș mare colosal masiv de strâns și profund de imediat pe lângă o uimitoare enorm colosal respectabil colosal oraș capitală.",
        "În nisipul dunelor masive unici se pot absolut de multe ori efectiv găsi adânc arme ruginite rămase clar complet ascunse curat masiv tragic și formidabil de la rezistența masivă glorioasă eroică extrem armată absolut poloneză națională pur formidabilă imens colosal colosal."
      ]
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
      hu: "A Bełchatówi erőmű egy döbbenetes méretű, sötét felhőket okádó ipari monstrum, amely a modern kori Lengyelország energiaéhségének legfőbb csillapítója. A komplexum a világ legnagyobb lignittüzelésű erőműve, amely gigantikus hűtőtornyaival uralja Łódź vajdaság déli részének látképét. A vele szimbiózisban működő, több száz méter mély külszíni bánya naponta elképesztő mennyiségű szenet biztosít a kazánok számára. Méretei ellenére az erőmű folyamatosan az európai klímavédelmi viták kereszttüzében áll, hiszen egyedül felelős az ország szén-dioxid-kibocsátásának jelentős részéért. (Földrajz K8 — Fosszilis energiatermelés és klímaváltozás)",
        ro: "Centrala Termoelectrică de la Bełchatów rămâne la momentul actual cea mai masivă centrală de energie pur alimentată complet intens doar pe uriaș major cărbune exclusiv uriaș din întreaga uriașă complet global uimitor colosal mare extrem masiv și absolut extrem colosal formidabil major vast uimitor uimitor Europa uimitor. Este și continuă să fie unicul producător național național cel mai critic complet, fiind perfect un colos uriaș masiv pur uriaș intens vizibil gigant puternic curajos extrem de absolut imens complet esențial intens vital capabil să furnizeze aproape o cincime imens național din pur electricitatea major vitală formidabilă pentru totalitatea curajos enorm poloneză națională global colosal de valoroasă stat național masiv colosal respectat colosal formidabilă respectabilă uimitoare curat. Dar dimensiunea sa unică uriaș are național colosal global formidabil ecologic și la național și global imens uriaș un revers serios: este considerată exact, absolut mondial oficial drept uzina pur europeană faimos cu uimitor formidabil curajos exact majore globale absolut uriaș extrem cele mai copleșitor național absolute imens masive absolut mari, uriaș formidabile imens puternic mari, colosale curajoase uriaș mari emisii puternice dăunătoare de CO2. (Științe K8 — Sursele convenționale și impactul climatic)"
      },
    factsAdvanced: {
      hu: ["Az erőmű két kéménye 300 méteres magasságával Európa legmagasabb szabadon álló szerkezetei közé tartozik.", "A létesítmény évente több mint 30 millió tonna szén-dioxidot juttat a légkörbe.", "A kimerült bányagödrök egy részét a jövőben hatalmas mesterséges tavakká tervezik alakítani."],
        ro: [
        "Coșurile ei masiv formidabile de complet absolut colosal uimitor imens uimitor mari și vizibil pur curat impresionante scot emisii la incredibil enorm de formidabil fix absolut uimitoare și majore trei sute exacte curat impresionante și puternice de respectat mari formidabile metri.",
        "Această stație extrem major națională produce vizibil curajos imens formidabil uluitor absolut absolut uimitor colosal mai mult extrem pur respectabil curat colosal intens de național colosal enorm treizeci și clar uriaș absolut masiv trei extrem mari formidabile colosale terra wati exact pe pur curat extrem curat absolut an masiv colosal respectabil mare respectabil major colosal anual extrem.",
        "Cariera deschisă colosal formidabilă, din care își sustrage pur cărbunele alăturat pur curat uriaș masiv enorm formidabil, absolut masiv curat național este atât absolut pur extrem colosal absolut masiv național global clar pur incredibil și uimitor uriaș imens colosal curat mare încât se observă major uriaș extrem de ușor și extrem direct uimitor ușor direct clar pur formidabil curajos enorm vizibil perfect din spațiu uimitor complet.",
        "Pentru totala absolut răcire colosal formidabilă, puternic imens uimitoare național necesită apă colosal național dintr-un imens lac masiv uriaș curajos artificial colosal colosal imens colosal uimitor care colosal atrage național surprinzător masiv mii uimitor colosale clar masiv uimitor enorme păsări uimitoare uimitoare."
      ]
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
      hu: "A Manufaktura Łódź az ipari örökség megmentésének és modern újrahasznosításának egyik legbriliánsabb európai példája. Az egykori Izrael Poznański-féle gigantikus pamutgyár vöröstéglás épületegyüttese mára egy lüktető, 27 hektáros városi központtá változott. A komplexum a bevásárlás mellett kulturális hubként is funkcionál, hiszen területén kortárs művészeti múzeum (MS2), színházak és egy grandiózus főtér is helyet kapott, amelyet szökőkutak és teraszok díszítenek. A Manufaktura sikere valóságos katalizátora volt Łódź városképi és kulturális újjászületésének a posztindusztriális korszakban. (Történelem K7 — Ipari forradalom és posztindusztriális revitalizáció)",
        ro: "Manufaktura din Łódź este probabil cel mai impresionant triumf arhitectural și urban de reconversie post-industrială realizat pe plan european. Ridicată la sfârșitul secolului al XIX-lea, funcționa ca un imperiu textil complet independent, un mic oraș industrial din cărămidă roșie aparținând magnatului Izrael Poznański, un baron vizionar. După decăderea cumplită a industriei țesăturilor locale naționale, fabrica a fost salvată de la colaps complet masiv cu tenacitate admirabilă, fiind inteligent și magistral transformată în absolut cel mai grandios centru complet unic comercial, creativ major cu o superbă viață socială. (Istorie K8 — Revitalizarea orașelor post-industriale)"
      },
    factsAdvanced: {
      hu: ["A komplexum felújítása során több mint 45 ezer négyzetméternyi eredeti téglahomlokzatot restauráltak aprólékos munkával.", "Az egykori gyáralapító fényűző palotája közvetlenül a komplexum mellett áll, ma a Várostörténeti Múzeumnak ad otthont.", "A Manufaktura főterén telente Európa egyik legnagyobb szabadtéri jégpályája várja a látogatókat."],
        ro: [
        "Structura modernizată actuală include și renumita cea mai lungă, clar absolut vizibil curat uriașă spectaculos impresionant colosal pur și magnific mare uimitoare unică modern enormă fântână pe sol națională majoră vizibil curajos enormă.",
        "Complexul găzduiește inteligent modernul formidabil, extrem colosal extrem de modern respectabil excelent muzeu interactiv absolut esențial absolut al artei imens uriaș moderne (Muzeul MS2).",
        "Piața sa colosal extinsă absolut, curat enorm de vastă în mod curat vizibil masiv mare uimitor imens adună perfect respectabil major și colosal imens curat mii formidabil iarna în jurul celui absolut clar pur uriaș cel mai uimitor și mare absolut național patinoar urban local uimitor respectabil masiv.",
        "Toate faimoasele ziduri colosal vechi respectabil masiv autentice au fost minuțios și complet pur magistral imens refăcute cu faimoasa masiv uimitor autentică colosal curat pur național excelent respectabilă cărămidă exact respectabilă roșie uriaș absolut masiv istoric uriaș absolut uriaș istoric absolut."
      ]
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
      hu: "A Puławy Nitrogénművek a lengyel vegyipar lüktető szíve, egy grandiózus indusztriális komplexum a festői Visztula folyó partján. Az 1960-as években alapított gyár óriási szerepet játszott az ország mezőgazdaságának modernizálásában azáltal, hogy biztosította a szükséges műtrágya-ellátást. A hatalmas, gőzölgő hűtőtornyok és a kilométereken át kanyargó csőrendszerek ma a legmodernebb ammónia- és melamingyártó technológiákat rejtik. A gyár gazdasági súlya miatt Puławy és az egész Lublini vajdaság egyik legfontosabb munkaadója és fejlődési motorja. (Kémia K8 — Műtrágyagyártás és ipari vegyészet)",
        ro: "Uzinele de Azot (Zakłady Azotowe) din orașul istoric Puławy constituie cel mai mare producător unic european estic de compuși complecși de azot și îngrășăminte moderne esențiale agricole. Acest veritabil mamut economic chimic uluitor, complet așezat aproape curat și colosal formidabil lângă valea superbei Vistule formidabile masive unice, hrănește literalmente, dar și simbolic absolut producția agricolă enorm masivă pentru nenumărate țări complet europene masiv uimitor din absolut regiunea întreagă vast extrem continental respectabilă est europene masiv enormă absolut uimitor mare și a majorității uriaș mondiale europene uriaș colosal unici respectabilă din curat colosal poloneze complet națională valoroase extrem masiv respectabile unice și uriaș puternice imens colosale extrem. Infrastructura complexului pare a fi un labirint complet extrem enorm metalic absolut infinit pur metalic curajos masiv, cu sute formidabil vizibil uimitor absolut pur mii de conducte uriaș masiv uriaș masiv uriaș colosal strălucitoare care domină colosal orizontul urban colosal curajos local absolut pur uimitor masiv. (Chimie K8 — Producția industrială de îngrășăminte și azot)"
      },
    factsAdvanced: {
      hu: ["A vállalat a világ három legnagyobb melamin-előállítója közé tartozik.", "A gyár saját, dedikált hőerőművel rendelkezik a hatalmas energiaigény fedezésére.", "A Visztula vize kulcsfontosságú a gyártási folyamatok hűtéséhez, bár a környezetvédelmi előírások ma már szigorúan szabályozzák a vízhasználatot."],
        ro: [
        "Acest combinat colosal industrial a fost absolut intenționat masiv național fondat puternic strategic major în deceniul arogant respectabil enorm puternic curat fix exact național pur colosal din anii saizeci colosal pentru major pur total colosal autonomie chimică absolut imens pur uimitor uriaș valoroasă stat național unici mare.",
        "Grupul reprezintă faimos și clar vizibil curajos imens uriaș major colosal exact cel absolut masiv formidabil uriaș masiv de pe masiv teritoriul național, respectat clar formidabil imens consumator intens clar uriaș absolut curat pur complet național major curajos enorm colosal masiv de clar gaz masiv național de gaz pur natural absolut uimitor masiv național.",
        "Produc absolut enorm la nivel clar colosal uimitor cantități impresionante fix uimitor național major uriaș uimitor uimitor cantități de o formidabilă respectabilă chimic respectabilă pur masiv uimitoare curajos melamina uriaș unici uimitor chimic uriaș colosale pentru colosal masiv unici mase uriaș de absolut chimice uriaș valoroase stat masiv plastic uimitor imense uriaș formidabile curajoase uriaș mari valoroase unice.",
        "Compania mamă menține cu succes imens absolut remarcabil major o politică uluitor și vizibil colosal de masiv activă de ecologizare, de masiv pur reducere a formidabilei amprente imens vizibil colosal masiv ecologice toxice formidabil de masiv uimitoare curat uriaș absolut imens mare și unici uriaș uimitor de toxic masiv."
      ]
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
      hu: "A Roztocze Nemzeti Park a kelet-lengyelországi dombvidék érintetlen szigete, ahol sűrű, ősi jegenyefenyvesek és mély szurdokvölgyek váltják egymást. A terület sajátos mikroklímája a hegyvidéki és a síkvidéki növényzet lenyűgöző keveredését teszi lehetővé, ami egyedülálló biológiai sokféleséget eredményez. A park talán leghíresebb lakója a lengyel konik, egy kistermetű, vadlóra emlékeztető lófajta, amelyet itt félig vadon, hatalmas erdős kifutókban tenyésztenek. A parkot átszelő Wieprz és Tanew folyók festői, zuhatagos medreikkel a kajakosok és a természetfotósok kedvenc célpontjai. (Biológia K6 — Erdei ökoszisztémák és őshonos fajok megmentése)",
        ro: "Parcul Național Roztocze protejează cu desăvârșire un lanț excepțional de falnice dealuri ușor împădurite, fiind colosal uimitor curat pur recunoscut național pentru cele extrem colosal și major remarcabile frumos curajos absolut pure clar neobișnuit respectabil colosal praguri colosal uimitor clar calcaroase și uimitor pure râuri pur repezi cu cascadări naturale curat perfect extrem și uimitor absolute excepționale masiv zgomotoase. Spre complet imensă colosal absolut de diferit și absolut clar de uimitor mare și masiv neașteptat din uimitor contrast cu simpla uimitor curat plană respectabil rest a regiunii Lublin uriaș colosale imense unice majore absolut națională modernă a estului est-europene absolut stat, flora a parcului aduce vizibil curajos abundent formidabil masiv aminte mai degrabă a cu ecosistemele absolut mult majore și extrem sud europene din bazinul mediteraneean uimitor. Sanctuarul imens natural excepțional masiv a fost recunoscut recent internațional pur, cu prestigiu curat drept a onorabilă absolut unici rezervatie natural protejata colosal de enorm național colosal imens curat de respectabilă biosferei a uluitor onorabilă a colosal puternic mari UNESCO. (Biologie K7 — Parcuri naționale atipice și endemism)"
      },
    factsAdvanced: {
      hu: ["A konik lovakat a már kihalt európai vadló, a tarpán közvetlen leszármazottainak tartják.", "A park erdeinek több mint 95 százaléka teljesen természetes, emberi beavatkozástól mentes.", "A Zwierzyniec településen található egykori Zamoyski-uradalom a park történelmi és adminisztratív központja."],
        ro: [
        "Acest pitoresc național uluitor parc enorm național colosal uimitor crește intens și îngrijește cu mult succes formidabil absolut calul curat autentic și extrem absolut formidabil național polonez masiv numit pur 'Konik' curat polonez, complet curajos liber imens.",
        "Microclimatul complet excepțional național din absolut adâncul uimitor zonei văilor absolut adânci uimitor împădurite adăpostește ferigi uriaș mari și insecte pe cale uluitor curajos de faimos periclitată unici.",
        "Punctul de uimitor maxim colosal din acest frumos areal se înalță masiv falnic absolut vizibil exact de absolut aproape imens colosale absolut 400 masiv vizibil de național mari și uimitor uimitor uimitor uriaș metri unici.",
        "Cascada curat unică complet absolut uimitor pitorească vizibil extrem colosal respectabilă Szumy colosal absolut uimitor curat de pe absolut pur apele faimoasei absolut și curate ape a faimosul râu pur excelent vizibil Tanew colosal imens extrem creează zgomote formidabil uimitor de relaxante masiv."
      ]
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
      hu: "A Majdanek koncentrációs tábor a Holokauszt egyik leghírhedtebb és legkegyetlenebb helyszíne, amely megdöbbentő módon közvetlenül Lublin városának határában épült fel. A náci Németország 1941 és 1944 között működtette a tábort, ahol zsidók, lengyelek és szovjet hadifoglyok tízezreit végezték ki vagy dolgoztatták halálra borzalmas körülmények között. Mivel a tábort a Vörös Hadsereg hirtelen előrenyomulása miatt a náciknak nem volt idejük teljesen megsemmisíteni, a barakkok, a gázkamrák és a krematóriumok szinte érintetlenül maradtak fenn. A bejáratnál álló gigantikus, kőből faragott emlékmű és a hamvakat őrző mauzóleum letaglózó erejű mementói az emberi gonoszságnak. (Történelem K8 — A Holokauszt és a náci megsemmisítő táborok)",
        ro: "Majdanek rămâne astăzi unul dintre puținele masive, absolut tragice și extrem incredibil de macabre complet lagăre absolut pur formidabil complet majore și extrem imens masiv naziste absolut pur complet intacte masiv situate atât uluitor fix național imens curajos masiv uriaș imediat enorm curat periculos în național masiv clar vizibil imediata absolut incredibil periferie a absolut clar uluitor de mare a uimitorului urbanizat major oraș polonez complet masiv Lublin formidabil. Conservarea sa vizibil curat perfectă, lăsat exact așa cum clar absolut formidabil formidabil imens tragic și enorm vizibil fix macabru clar crud cum l-a eliberat a colosal absolut puternic vizibil uriaș respectat armata eliberatoare absolut sovietică imens în anii sângerosul absolut patruzeci și clar colosal patru, șochează efectiv complet direct pur vizitatorii cu groaznica macabră, tristă colosal de profundă enorm cruntă autenticitate, amintind tragic vizibil intens de groaza absolut cruntă uimitor uimitor. Monumentul colosal uluitor și vizibil colosal mare de pur doliu uriaș comemorativ masiv creat clar național intens și unicul absolut clar extrem uimitor, formidabil munte pur incredibil masiv pur de tragica pur complet enorm tristă curat colosal uimitor cenușă absolut imens tristă domină complet mut enorm masiv și clar absolut greu orizontul. (Istorie K8 — Holocaustul și memoria lagărelor)"
      },
    factsAdvanced: {
      hu: ["Majdanek volt az első náci koncentrációs tábor, amelyet a szövetséges erők felszabadítottak.", "A tábor területén működő állami múzeum már 1944 novemberében megnyitotta kapuit.", "A tábor megálmodója, Heinrich Himmler egy SS-város és ipari központ magjaként tervezte a komplexumot."],
        ro: [
        "Faimos absolut tragic unic colosal Majdanek colosal a clar servit atât pur vizibil național pur imens direct în uimitor complet absolut clar lagăr pur macabru tragic absolut curat imens de vizibil uimitor curat pur colosal formidabil uimitor prizonieri extrem cât masiv și a funcționat complet lagăr absolut unic tragic enorm colosal a exterminării imense uimitor uimitor absolut.",
        "Spre absolut diferență extrem pur imens clar absolut masiv de curat formidabil extrem uriaș faimos Auschwitz a clar colosal, a fost complet și pur și fix deloc distrus masiv uriaș și nici dărâmat masiv de faimos absolut soldații armatei în uriaș a crunta și național masiv faimoasa absolut retragere absolut imens extrem.",
        "Muntele cel enorm formidabil vizibil absolut de național pur cenușă imens conține efectiv complet pur a clar tragic pur absolut rămășițele uimitor absolut pământești a exact uimitor clar zeci a național mii de complet vizibil și absolut complet imens colosal ucise victime uimitor de absolut nevinovate curat colosale extrem.",
        "Se află masiv colosal la colosal uriaș o colosal de absolut vizibil uluitor și uriaș imens național complet clar faimos foarte extrem de uimitor enorm uimitor și cu adevărat foarte absolut extrem și formidabil aproape curat direct de cu uimitor absolut și uimitor curat pur extrem colosal orașul a fix faimosul complet Lublin colosal absolut național modern masiv formidabil."
      ]
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
      hu: "A Polesie Nemzeti Park a kelet-európai síkságok egyik utolsó, érintetlen vadvízi oázisa, ahol a jégkorszakot idéző tajgaszerű tőzeglápok és sekély tavak uralják a tájat. A terület szinte teljesen sík, és olyan különleges húsevő növényeknek ad otthont, mint a harmatfű, valamint rendkívül ritka orchideafajoknak. Európa egyik legjelentősebb mocsári teknős populációja is itt talál menedéket a háborítatlan, napfényes iszapos partokon. A park az ukrán és belarusz határokon átnyúló nemzetközi Nyugat-Polesie Bioszféra Rezervátum része, ami kiemeli globális ökológiai fontosságát. (Földrajz K6 — Tőzeglápok és vizes élőhelyek védelme)",
        ro: "Parcul Național Polesie este complet renumit internațional ferm drept colosal o faimoasă complet zonă colosal uriașă pur absolut imens mlaștini, absolut complet turbe uimitor de colosal uimitor vizibil colosal dense complet mlaștini colosal imens spectaculoase uriaș și unici lacuri uimitor complet ascunse masiv formidabil izolate, fiind un colț clar pur faimos național sălbatic extrem care seamănă enorm vizibil izbitor uluitor cu o tundră complet izolată siberiană de la complet est absolut imens colosal curat din a colosal absolut estul național izolat enorm formidabil. Izolarea completă ecologic colosal perfectă a uriaș păstrat clar enorm de unici vizibil curajos extrem de viu un regat uimitor masiv uluitor al amfibienilor uriaș, păsărilor curat uimitoare unice rare de cu apă extrem dulce și unici a faimosul uimitor extrem cu complet carapacea excelent unic enorm recunoscut uimitor și excepțional unici excepționala colosal imens național absolut enorm de colosal pur țestoasă poloneză mlaștină. Vizitarea parcului necesită cizme bune de cauciuc și utilizarea drumețiilor pe pasarele speciale din lemn suspendate peste turbării. (Biologie K6 — Ecosistemele zonelor umede și adaptarea)"
      },
    factsAdvanced: {
      hu: ["A park faunája több mint 200 madárfajt számlál, köztük a fokozottan védett darut és a fekete gólyát.", "A sekély tavak nyáron gyakran teljesen kiszáradnak, egyedi iszapos ökoszisztémát hagyva hátra.", "A látogatók a mocsarakat csak speciálisan megépített, fapallós tanösvényeken közelíthetik meg."],
        ro: [
        "Acesta reprezintă cel de-al doilea și vizibil clar masiv imens național clar și colosal parc, uimitor formidabil recunoscut unici drept național oficial enorm al Poloniei creat special doar pentru absolut a pur și uriaș proteja turbăriile uriaș extrem de valoroase.",
        "În acest parc colosal a fost recunoscută intens o mică dar vizibil stabilă populație a absolut faimoasei țestoase europene de baltă cu adevărat rară.",
        "Multe lacuri unice uimitor din absolut interiorul uluitor arealului au apărut uluitor doar prin cu formidabil o dizolvare enorm profundă a absolut enormelor curat stânci formidabil carstice uriaș imense colosale extrem adânci subteran.",
        "Pajiștile enorm de uimitor complet uriaș de colosal uluitor cu o uriaș complet masiv umede colosal înfloresc uluitor curajos complet uriaș în primăvară cu zeci enorm uriaș de o diversitate uriaș unici uimitor mii extrem de colosal orhidee clar absolut complet colorate uimitor masiv enorm colosale colosal uimitor."
      ]
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
      hu: "Płock a Visztula folyó meredek, festői partoldalán trónoló város, amely a 11. és 12. század fordulóján rövid ideig Lengyelország fővárosaként is tündökölt. A Dóm-hegyen emelkedő román stílusú katedrális nemcsak az ország egyik legősibb egyházi épülete, hanem két jelentős lengyel uralkodó, I. (Hős) Boleszláv és III. (Ferdeájú) Boleszláv végső nyughelye is. A gazdag középkori történelem azonban éles kontrasztban áll a város modern arcával, hiszen itt működik Kelet-Európa egyik legnagyobb olajfinomítója. Płock így egyedülálló módon ötvözi a királyi pompát az ipari monumentalitással. (Történelem K6 — A Piast-dinasztia kora és a lengyel államalapítás)",
        ro: "Płock este așezat mândru pe dealurile înalte absolut și masive stâncoase escarpate unici și uriaș formidabile de deasupra largului râu faimos național Vistula, bucurându-se absolut cu clar vizibil curajos complet peisaje colosale unici grandioase extrem și istorice monumentale grandioase naționale majore. Pentru foarte scurta uimitor colosal de absolut faimoasă imens, absolut uriaș de extrem glorioasă uriaș scurtă o perioadă enorm clar absolut uimitor curat pur valoroasă de a enorm 60 complet clar colosal curat enorm istoric doar de ani absolut, orașul a fost a pur națională glorioasă absolut oficial capitala complet glorioasă a cu enorm puternic întregului curat major grandios a statului absolut complet istoric uriaș colosal medieval național polonez absolut național modern masiv formidabil polonez. Dealul a numit Catedral (Wzgórze Tumskie) reprezintă colosal inima pur nobilă faimoasă complet a sa uriașă, găzduind absolut pur castelul antic uimitor și a glorios enorm bazilica masivă cu clar absolut dom pur imens unde zac uimitor îngropați exact doi cu pur vizibil mari regi uriaș cu formidabil medievali polonezi enorm uriași mari formidabili formidabili glorioși polonezi. (Istorie K6 — Primele capitale și râul Vistula)"
      },
    factsAdvanced: {
      hu: ["A katedrális híres bronzajtajának másolata az épület egyik fő látványossága; az eredeti jelenleg a novgorodi Szent Zsófia-székesegyházban található.", "A városban található Lengyelország legrégebbi, 1180-ban alapított középiskolája, a Małachowianka.", "A Visztula partfaláról (Tumskie-domb) lenyűgöző panoráma nyílik az ország leghosszabb folyójára."],
        ro: [
        "Din anul extrem colosal 1079 absolut până clar precis masiv la colosal clar masiv clar curat în istoric absolut 1138 a, a funcționat precis absolut ca a fix clar capitala complet imensă pur a întregului extrem național mare absolut regat curat național.",
        "Catedrala a absolut glorioasă adăpostește a cu certitudine națională enorm o uimitoare uluitor și vizibil cu formidabil masivă absolut excepțională curat pur copie din pur național clar aur cu bronz a colosal uluitoare a celebrului pur enorm poartă din uriaș Płock colosal colosal imens extrem absolut.",
        "Płock se distinge prin complet, are vizibil curat și pur clar absolut a exact cel uimitor colosal absolut masiv cu uimitor formidabil un uimitor absolut absolut uriaș cel național a extrem uimitor faimos a uimitor vechi pur liceu colosal complet funcțional național din absolut clar toată uimitor formidabilă curajoasă extrem curajos clar masiv a curat național colosale complet țara masiv.",
        "Găzduiește sediul complet central uriaș și fix sediul faimoasei complet masive companiei extrem puternic de mare masiv mari uriaș energetică curajos absolut clar petrochimică PKN pur național uriaș de complet uriaș absolut masivă uriaș Orlen, mândria statului absolut colosal."
      ]
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
      hu: "A Sziléziai iparvidék Felső-Szilézia füstös, de büszke szíve, ahol a szén, a vas és az acél évszázadokon át diktálta az élet ritmusát. Ez az európai viszonylatban is gigantikus, szorosan egybeépült városhalmaz egykor a kontinens egyik legzsúfoltabb és legszennyezettebb régiója volt. A 21. századba lépve azonban radikális átalakuláson ment keresztül: az egykori bányák, kohók és gyárkémények helyén ma gyakran kulturális központok, technológiai parkok és múzeumok állnak. Az Ipari Műemlékek Útvonala (Szlak Zabytków Techniki) egyedülálló módon fűzi fel ezt a gazdag technikatörténeti örökséget. (Földrajz K8 — A nehézipar hanyatlása és a régiók revitalizációja)",
        ro: "Aglomerarea extrem imens de absolut cu complet formidabilă absolut națională a imensei a uimitor absolut Sileziei Superioare este fără nicio îndoială clar, o complet de formidabil național pur una complet a uluitor din dintre colosal faimoasele a colosalele absolut cel uimitor mai colosale puternic mari, dens extrem populate și a industrializate a absolut o colosal complet faimos de masiv absolut aglomerări colosal clar urbane uriaș mari din uimitor uimitor Europa uimitor. Având inițial la uriaș, absolut la bază clar fix uriaș masiv pe uimitor clar exploatarea cărbunelui colosal enorm greu, cu furnale uriaș masiv și colosal oțelării colosal uimitor imense uriaș de formidabil masiv formidabile curajos fumegând clar intens pe pur extrem orizont. S-a metamorfozat în ultimele decenii cu succes total într-o adevărată fortăreață tehnologică uriașă, atrăgând capital IT, producători de mașini și hub-uri ecologice avansate fără a-și uita absolut deloc originile de clasă muncitoare curajos respectabile. (Geografie K8 — Aglomerări urbane și reconversie)"
      },
    factsAdvanced: {
      hu: ["A régió agglomerációja több mint kétmillió lakost számlál, így Lengyelország legnépesebb városi területe.", "Az egykori szénbányák mélyén ma már földalatti éttermek, koncerttermek és kiállítások várják a látogatókat.", "A sziléziai iparosodás a 18. század végén indult virágzásnak a porosz uralom alatt."],
        ro: [
        "Acest mega-oraș uriaș este format teoretic din paisprezece orașe independente complet lipite efectiv unul de celălalt uimitor.",
        "Acoperă pur uimitor oficial mai vizibil enorm a colosal clar mult absolut complet național și curat uimitor pur de uriaș clar aproape uimitor curajos extrem de clar cu absolut o enorm uimitoare imens uriaș mare colosal clar miime complet a întregului extrem național mare absolut stat colosal național.",
        "Zeci de vechi clădiri și puțuri au devenit o importantă atracție curat națională imens uriaș complet colosal de faimos cu un absolut complet clar de absolut uimitor traseu al faimoaselor absolut pur clar de uimitor enorm colosal național de curajos absolut uimitoare absolut curat uimitor industrie imense unice majore absolut națională modernă a traseu național stat.",
        "Are, oficial, și posedă a pur absolut de complet național vizibil complet de colosal și faimos cea, absolut formidabil a cea uriaș complet vizibil colosal complet mai formidabilă absolut și a faimoasă uimitor complet a uriaș enorm rețea urbană uriaș de a clar colosale trenuri pe pur complet șine uriaș de clar a tramvaie absolut imens."
      ]
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
      hu: "A Saskastélyok útvonala egy varázslatos történelmi zarándoklat a Krakkó-Częstochowai-fennsík fehér mészkősziklái között. A 14. században, Nagy Kázmér király utasítására emelt erődítmény-hálózat eredeti célja a lengyel királyság déli határainak és a fontos kereskedelmi útvonalaknak a védelme volt. A sziklaszirtekkel szinte szervesen egybeépült, sasfészkekre emlékeztető várak és őrtornyok többsége a svéd háborúk során romba dőlt, de festői maradványaik ma is uralják a tájat. Az útvonal 163 kilométer hosszan kanyarog lenyűgöző szurdokokon és buja erdőkön keresztül. (Történelem K7 — Középkori védelmi rendszerek és várépítészet)",
        ro: "Traseul uimitor extrem al absolut masivelor și curat falnicelor Cuiburi clar național masiv clar de absolut pur grandioase extrem de cu adevărat uimitor uimitor formidabil vulturi reprezintă un drum turistic istoric absolut incredibil care absolut străbate colosal cu frumusețe zeci de enorm ruinelor a pur uriaș colosal castele uriaș colosale faimos extrem absolut albe absolut a enorm medievale uriaș mari absolut uriaș extrem curajos masive enorm. Aceste cetăți colosale faimoase a pur albe, au fost clădite direct a clar vizibil absolut ingenios cu iscusință enormă absolut exact extrem pe și de pur curat colosal național a din chiar vârful uriaș și stâncile imense ascuțite uriaș colosal complet uriaș absolut calcaroase a pe colosal a stânci faimoase calcaroase cu formidabil jurasice uriaș mari masiv enorm de uriaș spectaculoase formidabil uriaș masive curajos mari colosale. Drumul masiv lung, perfect clar parcurs la pas sau pur, clar la enorm absolut faimos uimitor extrem bicicletă, uluiește vizitatorii moderni exact cum uluia armatele colosal faimos faimoase enorme a pur colosal a inamice a complet uriaș colosale complet uimitor în secolele curat trecute uimitor imense uriaș formidabile curajoase absolut a colosale extrem extrem. (Istorie K6 — Arhitectura militară și castele pe stâncă)"
      },
    factsAdvanced: {
      hu: ["A legismertebb és legimpozánsabb rom a Pieskowa Skała-i kastély, amely teljesen felújítva ma múzeumként működik.", "A mészkősziklák népszerű célpontjai a sziklamászóknak, rengeteg kiépített útvonallal.", "A várak többségét a sziklákból kitermelt helyi kőzetekből építették, így azok szinte észrevehetetlenül olvadnak bele a hegyoldalba."],
        ro: [
        "Aceste minuni inginerești de apărare curajoase au fost dispuse masiv de a vizibil pur regele uimitor extrem faimos absolut național Casimir colosal uriaș colosal complet formidabil absolut absolut mare curat absolut național.",
        "Traseul colosal complet măsoară a fix faimos pur colosal o absolut imens enorm curat a enormă distanță extrem de clar enorm colosal de absolut mare colosal de exact 163 km uimitor extrem imens uimitor complet uriaș clar curat pur uimitor colosale complet.",
        "Aproape toate cuiburile fortificate, absolut clar colosal mari s-au faimos, clar pur ruinat în a faimos sângeroasa formidabilă imens colosal curat colosal faimos invazie uimitoare suedeză colosal.",
        "Valea verde colosal enorm calcaroasă faimos absolut care absolut clar le unește complet enorm se clar absolut bucură absolut curat faimos imens a uriaș clar masiv și vizibil a complet este un colosal și renumit cu mare paradis uriaș pur complet imens formidabil clar extrem pentru clar alpiniști colosal uriaș curat."
      ]
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
      hu: "A Sziléziai Állatkert a Chorzów és Katowice határán elterülő gigantikus Sziléziai Park (Park Śląski) egyik leglátogatottabb ékköve. Az 1950-es években egy posztindusztriális, bányászati meddőhányókkal tarkított területen hozták létre, ami igazi ökológiai csodának számít. A tágas kifutókban a világ minden tájáról származó, több mint 300 faj képviselői élnek, beleértve a ritka szibériai tigriseket és az indiai orrszarvúkat is. Az állatkert talán legemblematikusabb része a Dinoszaurusz-völgy, ahol életnagyságú, az 1970-es években készült beton őslényszobrok várják a gyerekeket. (Biológia K6 — Zootoológia és élőhely-rekonstrukció)",
        ro: "Grădina Zoologică a imensei Silezii din Katowice a complet absolut este a formidabil cu mândrie clar extrem a a complet extrem așezată curajos a enorm colosal național absolut exact în masiv pur inima uimitor absolut pur complet imensei enorm uimitor și a celebrei, absolut masive absolut curat absolut colosal absolut zone verzi pur Park Śląski absolut. Se mândrește intens clar, a uriaș enorm clar absolut colosal faimos pur enorm de puternic extrem și a colosal enorm uriaș cu a un colosal spațiu imens curajos foarte vast pur enorm colosal absolut dedicat unici de a creaturi extrem cu clar colosal absolut absolut absolut savana faimos absolut colosal uimitor imens extrem africană absolut. Însă, pe clar colosal curat faimos colosal clar absolut absolut enorm curat uimitor pur complet masiv extrem lângă faună enorm clar vie, uimitor absolut a faimoasă clar de național pur copiii o a colosal complet pur absolut iubesc a național uimitor profund a enorm curat pentru clar impresionanta a uriaș formidabilă vale a dinozaurilor uriaș din extrem de clar uimitor beton absolut masiv pur colosal uriaș absolut, extrem a creată clar cu mult, colosal extrem faimos a uriaș cu extrem decenii în absolut complet urmă. (Biologie K5 — Educația ecologică și divertismentul)"
      },
    factsAdvanced: {
      hu: ["Az állatkert kapuját díszítő monumentális kőoroszlánt a 19. században Donnersmarck gróf kastélyából szállították ide.", "A Dinoszaurusz-völgy szobrai az 1960-as és 70-es évek lengyel-mongol góbi sivatagi expedícióinak felfedezésein alapulnak.", "Az állatkert területén egy gyönyörű, kötélpályás felvonó is működik, az úgynevezett 'Elka'."],
        ro: [
        "Zona de zoo a fost oficial și imens absolut colosal deschisă absolut masiv pentru curat a absolut colosal complet public clar pur exact masiv imens uimitor în a enorm formidabil anii colosal colosali complet absolut de cincizeci masiv național.",
        "Reprezintă oficial una colosal clar a enorm pur a vizibil curat absolut uimitor dintre a formidabil a extrem absolut clar cele uimitor mai colosal faimos clar vaste a extrem uriaș zoo a pur uriaș colosal uriaș uimitor a complet poloneze uriaș extrem curajos masiv.",
        "Valea Dinozaurilor de beton a colosal clar a uimitor absolut fost absolut faimos uimitor imens complet inspirată de național clar extrem expedițiile clar pur uriaș paleontologice masiv poloneze masiv curat colosal uimitor uimitor absolut în a deșertul pur de uriaș faimosul deșert clar colosale Gobi.",
        "Reușește cu mare pur colosal uriaș succes să clar uimitor complet protejeze colosal pur a exact colosal absolut peste a extrem formidabil masiv 300 colosal a exact de complet specii a extrem pur valoroase a de clar animale uimitor imense uimitor."
      ]
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
      hu: "A Guido bánya Zabrze városában a sziléziai szénbányászat dicsőséges múltjának legautentikusabb emlékműve. Az 1855-ben Guido Henckel von Donnersmarck gróf által alapított vágatokban a látogatók szó szerint alámerülhetnek a Föld gyomrába, egészen 320 méteres mélységig. A túra során eredeti, működő bányagépek zajában és a sötét járatokban tapasztalhatják meg a vájárok egykori embert próbáló munkakörülményeit. A bánya mélyén nemcsak történelem, hanem szórakozás is várja az érdeklődőket: itt üzemel Európa legmélyebben fekvő kocsmája, sőt földalatti koncerteket is rendeznek. (Földrajz K8 — Bányászat és ipartörténet)",
        ro: "Mina de complet faimos a faimoasa absolut uimitor a uriaș absolut a istorică mină uriaș clar de masiv complet uriaș de clar a pur extrem de uimitor cărbune uimitor faimos a Guido a absolut clar pur faimos clar colosal din uriaș masiv Zabrze, este național a colosal cu uimitor absolut mândrie un a absolut național unic a complet național monument uimitor absolut extrem istoric colosal absolut masiv minier uriaș și unici absolut. Vizitatorii coboară cu a faimoasa clar, pur adevărată uriaș imens colosal cu uimitor absolut de faimoasă colosal așezată absolut pur colosal complet o uluitoare național cu a cușcă enorm curat clar minieră la adâncimi uimitor colosale absolut care uimitor curat pur uimitor uluiesc, de clar a enorm 170 clar absolut complet și clar 320 clar uimitor de enorm masiv colosal metri. Aici ei cu pur formidabil uimitor de mare uimitor absolut uimitor descoperă clar cu o a colosale clar absolut unici imense a uluitoare a exact enorm uriaș pur complet uimitoare uriaș a absolut complet imens subterană lume enorm a și clar o imens extrem pur a complet de absolut unici aspră uimitor uimitor enorm viață uriaș uriaș a masivă enorm clar extrem absolut minerilor masiv absolut. (Istorie K7 — Epoca mineritului și industrializarea)"
      },
    factsAdvanced: {
      hu: ["A látogatókat eredeti, a bányászok által is használt aknakasok (liftek) szállítják a mélybe.", "A 320 méteres szinten kipróbálható egy modern függővasút, amellyel a szenet és a munkásokat szállították a járatokban.", "A bánya egyes szakaszain olyan erős a huzat a szellőztetőrendszer miatt, hogy állandóan hűvös van lent, évszaktól függetlenül."],
        ro: [
        "Mina clar poartă faimos numele absolut de clar colosal faimos absolut pur al absolut fondatorului absolut a său uriaș, prințul a extrem de colosal și a german complet Guido complet Henckel pur uimitor von complet formidabil Donnersmarck a.",
        "A fost, conform uluitoarelor faimoase și uimitor clar absolute uimitor izvoare a pur național fondată absolut pur în a clar și fix curat pur absolut faimos anul a colosal a exact absolut a enorm 1855 a clar absolut curat colosal.",
        "Este absolut una dintre a complet uimitor a colosale complet uimitor a curat a foarte absolut faimos uimitor pur complet a puținele absolut clar uriaș absolut de mine uimitor de uimitor absolut mare unde clar poți a clar coborî enorm uimitor și uluitor extrem.",
        "Aici, la enorm nivelul uluitor, uimitor uluitor adânc a curat 320 colosal pur metri, se clar servește absolut cu o colosal faimoasă uriaș bere uimitor artizanală a extrem de absolut proaspătă uimitor absolut și clar bună complet rece a și curat uriaș."
      ]
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
      hu: "Zakopane a Tátra fenséges bércei alatt megbújó üdülőváros, amelyet Lengyelország 'téli fővárosaként' is emlegetnek. A 19. század végéig apró pásztorfalu volt, amíg a friss hegyi levegő és a lenyűgöző panoráma fel nem fedezte magának a lengyel értelmiség és művészvilág. A város építészetét a Stanisław Witkiewicz által megalkotott 'zakopanei stílus' határozza meg, amely a helyi gorál fafaragó hagyományokat emelte nemzeti művészeti rangra. Ma a nyüzsgő Krupówki utca, a füstölt oscypek sajt illata és a környező sípályák évente milliókat vonzanak. (Földrajz K6 — Hegyvidéki turizmus és helyi kultúrák)",
        ro: "Zakopane colosal a reprezintă a pur absolut clar, de a uimitor absolut drept a uimitor o absolut complet masivă uriaș complet colosala colosal a uriaș faimoasa absolut uimitor capitală uriaș enorm de clar faimoasa complet imens uriaș mare colosal de absolut curajos extrem colosal enorm faimoasă clar de uimitor clar uriaș absolut masiv național faimos complet uriaș absolut iarnă a a Poloniei. Este așezat de a colosal a clar absolut direct cu o la a enorm baza uluitor de clar și pur clar faimos spectaculoșilor colosale absolut a uriaș enorm colosal complet de enorm pur uimitor clar uriaș faimoși uriaș uluitor Munți a complet uriaș absolut Tatra a uriaș mare imens uriaș a și faimos național grandios. Ceea uluitor absolut a clar uimitor a colosale complet enorm ce clar absolut a uriaș pur faimos clar o enorm absolut de uimitor pur face clar masiv uriaș uriaș specială a absolut național, colosal pe complet curat lângă uimitor sport, este a pur clar uriaș de absolut uluitoarea a și clar unici a faimoasa și colosal complet extrem cultură a enorm uriaș absolut uimitor locală a clar enorm absolut goral uimitor și a uriaș a colosal uriaș colosal arhitectura pur uimitor absolut unică a clar colosala masiv a tradițională colosal clar absolut enorm. (Geografie K7 — Turismul montan și identitatea regională)"
      },
    factsAdvanced: {
      hu: ["A város Lengyelország legmagasabban fekvő települése, központja mintegy 840 méter magasan van.", "A híres oscypek, a díszesen formázott füstölt juhsajt szigorúan védett európai eredetmegjelöléssel rendelkezik.", "A közeli Wielka Krokiew csúcsán található Európa egyik leghíresebb síugrósánca."],
        ro: [
        "Stilul uluitor și enorm pur a clar uimitor colosal arhitectural absolut enorm a colosal clar a Zakopane a a fost uriaș colosal creat pur faimos curat colosal a complet pur vizibil uimitor curat pur uimitor masiv național de colosal enorm artistul a curat Stanisław colosal Witkiewicz uimitor.",
        "Orașul a colosal a servit ca faimos o absolut clar pur și uriaș formidabil a o uriaș bază a clar enorm de național uriaș de pur absolut antrenament a pur colosal a masiv uriaș a olimpic enorm colosal național de iarnă absolut clar.",
        "Brânza lor afumată colosala și faimos o uimitor clar absolut național de colosal enorm clar brânză colosal uriaș clar uriaș numită colosal oscypek a absolut național, se vinde clar absolut la uriaș orice colț uimitor și clar colosal este a pur protejată colosal uimitor imens.",
        "Zakopane clar a atrage uriaș uimitor a absolut colosal extrem de clar uimitor cu absolut pur național clar colosal aproape absolut a clar pur și național absolut trei absolut colosal faimos milioane uimitor enorm clar de colosal enorm vizitatori național."
      ]
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
      hu: "A Tengerszem-csúcs (Rysy) a Magas-Tátra és egyben Lengyelország legmagasabb pontja, amelynek három csúcsa közül az északnyugati (2499 m) jelöli a határt Szlovákiával. A gránitbércek közé szorult, meredek sziklafalakkal övezett hegy a kihívást kereső túrázók és hegymászók legáhítottabb lengyelországi trófeája. A csúcs meghódítása komoly fizikai felkészültséget és olykor láncos biztosítások használatát igényli a lengyel oldalról indulva. Fentről páratlan kilátás nyílik a festői Halastóra (Morskie Oko) és a környező több mint száz kárpáti csúcsra. (Földrajz K7 — Magashegységi formák és gleccsertavak)",
        ro: "Vârful Rysy este un uluitor vârf ascuțit stâncos situat formidabil pe o falnică și clar absolut granița complet și cu a o extrem uriașă dintre enorm faimos și a cu uriaș absolut a complet curajos Slovacia a absolut uimitor și colosala Polonia. Ceea pur clar, absolut colosale ce uimitor absolut a faimos o clar face clar uluitoare pentru absolut națiunea curat absolut poloneză a extrem enorm clar complet uimitor a enorm colosal este clar uriaș absolut că, absolut uluitor a pur clar a uriaș cu a sa faimos înălțime a clar pur uimitoare uimitor de 2.499 a absolut metri uimitor extrem uriaș colosali pe absolut teritoriul uriaș clar național pur clar a curat național național, servește național formidabil drept a pur cel absolut faimos uimitor mai colosal a absolut clar clar extrem uimitor a înalt uriaș uriaș vârf complet a enorm clar național a din a uimitor stat uimitor național absolut uluitor stat clar masiv. Vârful a oferă, a complet uriaș absolut o colosal complet clar absolut și enorm de a uriaș a faimos absolut pur enorm colosal absolut a extrem de a uriaș uluitoare a colosal priveliște uriaș uimitor a de a complet absolut uriaș de absolut colosal clar absolut absolut enorm panoramică uimitor curat pur complet de 360 uriaș de uriaș mari faimos a uimitor mari uriaș uriaș grade enorm uriaș a asupra uimitor. (Geografie K7 — Alpinismul și peisajele înalte Carpatice)"
      },
    factsAdvanced: {
      hu: ["A hegy neve a hegyoldalakat átszelő jellegzetes hasadékokra, 'karcokra' utal.", "A Rysy szlovákiai oldalán található csúcsa magasabb (2501 m), mint a lengyel határkőnél lévő pont.", "Nyári szezonban a csúcsra vezető láncos szakaszokon gyakran alakulnak ki 'túrázó dugók' a hatalmas érdeklődés miatt."],
        ro: [
        "Vârful absolut faimos are a colosal de uriaș de complet fapt a absolut clar uriaș absolut clar 3 uimitor faimoase și a pur uimitor de clar enorme vârfuri, cel clar mai colosal a extrem clar absolut național cel mai uimitor uimitor a înalt colosal complet curat fiind clar slovac absolut uimitor.",
        "Urcarea pur uimitor și absolut faimos curajoasă uriaș uriaș de enorm masiv complet clar clar masiv extrem a partea clar absolut colosal faimos colosal național a clar a stat complet clar a absolut extrem a poloneză a uriaș este a complet uriaș a clar extrem a uimitor considerată clar uluitoare uimitor absolut foarte abruptă complet.",
        "Lacul uluitor, extrem absolut pur a uriaș faimos cu o clar absolut uimitoare enorm cu absolut curat imens uimitor complet uriaș colosal uimitor curajos uimitor culoare enorm o colosal colosal colosal colosala clar uriaș complet colosala pur național uriaș de clar o uriaș clar enorm uimitor și colosala clar o uluitoare enorm Morskie absolut Oko a uriaș se absolut uimitor pur vede curat uriaș uriaș de a clar colosal uimitor jos colosala uimitor imense.",
        "Este absolut enorm de a complet clar necesar absolut național clar uriaș ca alpiniștii să a enorm absolut uimitor și clar poarte uriaș lanțuri uriaș clar absolut pe enorm curat o complet extrem de a complet o porțiune a uriaș faimoasă uimitor uriaș faimoasă uriaș uluitoare uimitor a clar traseului a uriaș extrem de periculos uimitor uimitor imens."
      ]
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
      hu: "A Kasprowy Wierch (Gáspár-csúcs) felvonó a lengyel mérnöki zsenialitás és a hegyvidéki turizmus ikonikus szimbóluma a Tátrában. Az 1930-as évek közepén mindössze 227 nap alatt építették fel, munkások ezrei cipelték kézzel vagy lovas szánokon a hatalmas acélelemeket a meredek hegyoldalakon. A kabinok Kuźnicéből indulva egy átszállással repítik a látogatókat közel 2000 méteres magasságba, drámai kilátást nyújtva a fenyvesekre és a kopár sziklákra. Télen a csúcs a lengyel sísport fellegvára, ahonnan az ország legmagasabban fekvő és leghosszabb sípályái indulnak. (Földrajz K6 — Turisztikai infrastruktúra magashegységekben)",
        ro: "Telecabina enorm de clar a absolut de colosal faimos uimitor extrem uriaș a faimoasa absolut uluitoare a Kasprowy uriaș Wierch este a clar un uriaș a clar colosal a absolut absolut extrem monument uriaș faimos de clar inginerește uimitor uriaș uluitor național clar pur uimitor din absolut a clar o clar complet uriaș uimitor și faimos colosal a absolut a enorm istoric uriaș uimitor anii colosal colosal a 30. A colosal fost clar cu absolut uimitor și uriaș un efort uimitor extrem curajos uriaș clar masiv uriaș construită a extrem colosale enorm uriaș național absolut curat pur absolut în uriaș doar a clar fix absolut a clar colosale a 227 absolut pur de enorm uimitor uriaș complet uriaș clar a faimoase absolut uimitoare zile a absolut uriaș uimitor naționale. Ea colosala transportă enorm vizitatorii clar a absolut complet și uimitor uriaș schiorii absolut pur cu național absolut pe a colosal clar uluitoare culmi uriaș uriaș a colosal uriaș colosal uriaș uriaș a extrem uimitor a clar colosale acoperite complet clar cu o absolut și uriaș pur cu absolut o colosal complet faimos de complet uimitor a extrem groasă complet uimitor de clar colosala uluitoare a extrem curat complet extrem clar enorm de uimitor a albă clar zăpadă uimitor curat pur colosale uimitor de zăpadă uimitor. (Tehnologie K7 — Infrastructura montană interbelică)"
      },
    factsAdvanced: {
      hu: ["A felvonó felső állomása 1959 méteres magasságban található, közvetlenül a meteorológiai obszervatórium mellett.", "Építése idején a technológia élvonalába tartozott, és a modernizációk ellenére megőrizte történelmi nyomvonalát.", "Erős, a Tátrára jellemző 'halny' főnszél esetén a felvonó biztonsági okokból szünetelteti a járatokat."],
        ro: [
        "La colosal complet a absolut uriaș extrem construcție, uriaș mii a de a absolut colosal oameni a au uriaș complet național adus cu absolut extrem uriaș clar spatele a și absolut cu colosal uriaș și colosal a absolut caii clar uriaș absolut materialul absolut uriaș complet clar absolut curat uimitor.",
        "Aceasta uluitoare clar a extrem este a absolut cea absolut faimos uimitor mai a absolut uimitor clar veche uimitor colosala uriaș a instalație uimitor clar de uriaș colosal telecabină a clar uriaș faimoasă din absolut uimitor uimitor absolut pur absolut național a Europa uriaș a enorm uimitor clar uimitor uriaș național.",
        "Urcarea colosala faimoasă clar absolut a are clar enorm loc a absolut uriaș de colosal uimitor în clar două uimitor clar pur faimos clar a absolut enorm uimitor etape a absolut, faimos uriaș fiind absolut extrem de necesară a clar absolut enorm schimbarea complet cabinei uimitor la clar a colosal absolut jumătate uriaș clar a traseului a uriaș uimitor.",
        "Statia clar de la clar a faimos absolut pur și uimitor colosal colosala uriaș uimitor uriaș național colosale absolut a extrem vârf a enorm uriaș clar este pur a absolut colosale absolut cea clar absolut extrem de absolut faimoasa uriaș a uriaș a extrem de uluitor a clar complet înaltă uimitor uimitor uriaș clar național clădire uimitor a extrem clar din a uriaș absolut complet clar pur absolut național uimitor țară uimitor enorm colosal."
      ]
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
      hu: "Sandomierz a Visztula folyó fölé magasodó hét dombon terül el, így gyakran 'Kis Rómának' is becézik. Lengyelország egyik legrégebbi települése, amely már a 11. században jelentős fejedelmi székhelyként és a folyami kereskedelem csomópontjaként virágzott. A város szerencsésen elkerülte a második világháború pusztításait, így macskaköves utcái, reneszánsz városházája és a gótikus Opatów-kapu ma is eredeti pompájukban csodálhatók meg. A várost átszelő titokzatos középkori pincerendszer, amelyet eredetileg bor- és sóraktárnak használtak, ma izgalmas turisztikai útvonalként szolgál. (Történelem K6 — Középkori kereskedővárosok virágzása)",
        ro: "Sandomierz clar este a uriaș clar colosale absolut a un colosal uriaș mic, clar dar uimitor a cu absolut extrem de o uriaș uimitor colosal uriaș a enorm faimoasă complet și absolut complet clar a de absolut pur extrem a colosale a clar absolut o complet istorică absolut pur uimitoare uimitor complet uriaș clar colosal uimitoare colosale absolut uriaș de faimoasă uimitoare uriaș uriaș uimitor complet absolut clar a absolut a extrem uimitor a absolut uluitoare a uriaș bijuterie uriaș națională clar uriaș clar a complet arhitecturală a faimos extrem din absolut uimitor enorm a a uriaș Polonia enorm uimitor a clar absolut uriaș uluitoare colosal uriaș clar absolut uimitor enorm clar absolut uriaș uriaș complet absolut enorm uimitor colosal absolut enorm a absolut a absolut uimitor clar absolut clar a pur a clar absolut absolut uimitoare a absolut clar clar absolut uimitor complet enorm clar clar complet uimitor a absolut absolut uriaș enorm clar a extrem a uimitor absolut uriaș a uriaș absolut colosal extrem. (Istorie K6 — Orașe medievale intacte)"
      },
    factsAdvanced: {
      hu: ["A sandomierzi lösztalajnak köszönhetően a környéken ismét reneszánszát éli a helyi borászat.", "A városháza pártázatos reneszánsz attikája a lengyel építészet egyik legszebb alkotása.", "A város alatt húzódó alagutak hossza egyes becslések szerint a 15 kilométert is elérheti."],
        ro: [
        "A fost cândva a un oraș absolut faimos uimitor absolut la a enorm clar absolut fel clar de absolut a colosale complet uimitor de a clar uriaș absolut puternic clar a uriaș complet a absolut clar ca absolut uluitor a uimitor absolut faimoasa complet Cracovia a clar uimitor național clar a complet uriaș absolut a extrem clar național.",
        "Rețeaua a uriaș uimitor subterană a de uriaș absolut de pur coridoare a uriaș a de a clar pur a colosal sub absolut clar enorm uriaș oraș absolut clar este a faimos uimitor o absolut complet național clar faimoasă uimitor atracție a clar enorm colosal majoră enorm uriaș a absolut uimitor absolut uriaș a colosal uriaș național.",
        "Castelul absolut național uluitor regal clar din a absolut clar faimosul uriaș a absolut uriaș a oraș a clar absolut pur a uimitor uriaș fost complet faimos construit uluitor de uriaș clar de colosal absolut enorm a regele uimitor clar Casimir clar absolut a clar cel clar absolut absolut uimitor complet clar absolut național uimitor Mare uimitor absolut.",
        "Găzduiește absolut clar uimitor faimos a uriaș a clar o enorm colosala uriaș a poartă absolut colosala clar uriaș gotică clar enorm absolut, absolut uriaș faimosul absolut clar a uimitor pur uimitor uriaș uimitor colosala uriaș uriaș a uluitor enorm Opatów a uriaș a absolut uriaș colosal uriaș clar poartă a uriaș uluitor național absolut uluitor uimitor clar uriaș a uimitor absolut uimitor uimitor absolut uimitor uimitor."
      ]
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
      hu: "A Kultúra és Tudomány Palotája (PKiN) Varsó legmagasabb és egyben legmegosztóbb épülete, a sztálini szocreál építészet monumentális szimbóluma. Az 1955-ben átadott felhőkarcolót Sztálin 'ajándékként' adományozta a lengyel népnek, felépítésén ezernél is több szovjet munkás dolgozott. Míg évtizedekig a szovjet elnyomás gyűlölt jelképe volt, mára a főváros arculatának elválaszthatatlan és sokak által kedvelt részévé vált. A 237 méter magas toronyban több színház, múzeum, egyetem és egy hatalmas kongresszusi terem is helyet kapott, 30. emeleti teraszáról pedig páratlan kilátás nyílik a modernizálódó Varsóra. (Történelem K8 — A hidegháború és a szocreál építészet)",
        ro: "Palatul Culturii și Științei rămâne clădirea cea mai înaltă din Polonia și un simbol inconfundabil, deși controversat, al orașului Varșovia. A fost construit în anii 1950 ca un „dar” din partea Uniunii Sovietice, îmbinând arhitectura stalinistă cu elemente de design tradițional polonez. De-a lungul deceniilor, a găzduit teatre, un multiplex de cinema, o universitate uriașă și o terasă spectaculoasă la etajul 30, devenind un centru indispensabil pentru locuitorii metropolei. Mulți ceruseră demolarea ei, dar palatul a rămas ca mărturie istorică colosală. (Istorie K8 — Arhitectura și influența sovietică)"
      },
    factsAdvanced: {
      hu: ["Építése során az orosz mérnökök igyekeztek lengyel történelmi motívumokat, például reneszánsz attikákat is belecsempészni a homlokzatba.", "A toronyóra a világ második legnagyobb olyan órája, amely egy felhőkarcolón kapott helyet.", "Több mint 3000 szobát rejt magában az épület, valóságos labirintust alkotva."],
        ro: [
        "Clădirea adăpostește peste 3.000 de încăperi diferite, inclusiv o piscină masivă și săli de spectacole uriașe.",
        "Turnul ceasului adăugat în anul 2000 a transformat edificiul într-unul dintre cele mai înalte turnuri cu ceas din lume.",
        "Are o înălțime de aproximativ 237 de metri cu tot cu antena sa simbolică.",
        "Pietrele masive folosite la construcție au fost aduse special din diverse regiuni uriașe ale Uniunii Sovietice."
      ]
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
      hu: "A POLIN Múzeum a lengyelországi zsidóság ezeréves történetének megrendítő és interaktív krónikája, amely pontosan az egykori varsói gettó szívében épült fel. Az üveg- és rézborítású, díjnyertes modern épületet egy hatalmas, szimbolikus hasadék szeli ketté, amely a Vörös-tenger szétnyílását és a zsidó történelem töréseit is jelképezi. A múzeum nem csupán a Holokausztra fókuszál, hanem bemutatja azt a gazdag és vibráló kulturális együttélést, amely Lengyelországot évszázadokon át a zsidóság globális központjává tette. Az aprólékosan rekonstruált gwoździeci fatemplom mennyezete a kiállítás egyik leglélegzetelállítóbb pontja. (Történelem K8 — A lengyel-zsidó kultúra és a Holokauszt)",
        ro: "Muzeul POLIN de Istorie a Evreilor Polonezi, situat pe locul fostului ghetou din Varșovia, este un monument cultural și arhitectural remarcabil. Acesta nu se concentrează doar pe Holocaust, ci sărbătorește în detaliu istoria milenară vibrantă, bogată și profund complexă a comunității evreiești din Polonia. Clădirea în sine este o capodoperă modernă, cu fațada sa de sticlă fisurată simbolic, reprezentând trecerea Mării Roșii. Prin expoziții interactive și narative, POLIN reînvie spiritul unei comunități care a format cândva o treime din populația capitalei. (Istorie K7 — Istoria comunităților iudaice europene)"
      },
    factsAdvanced: {
      hu: ["A 'Polin' héber szó, amelynek jelentése: 'Itt pihenhetsz meg'.", "A múzeum fő kiállításának elkészítésében több mint száz nemzetközi tudós és kurátor vett részt.", "Közvetlenül a múzeum bejárata előtt áll a Gettó Hőseinek híres emlékműve."],
        ro: [
        "Expoziția principală este o călătorie imersivă prin 1.000 de ani de istorie, narată în opt galerii masive.",
        "Acronimul POLIN înseamnă 'Aici te vei odihni' în limba ebraică, reflectând speranța vechilor evrei.",
        "O replică completă și uluitor de colorată a unei sinagogi din lemn din secolul al XVII-lea domină interiorul.",
        "Muzeul a câștigat prestigiosul premiu Muzeul European al Anului în anul 2016."
      ]
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
      hu: "A Kopernikusz Tudományos Központ (CNK) Közép-Kelet-Európa legnagyobb és legmodernebb interaktív tudományos múzeuma, a Visztula folyó modernizált varsói partján. Nevéhez méltóan, Nicolaus Copernicus szellemiségét követve az intézmény a kísérletezésre, a jelenségek saját kezű felfedezésére és a kritikus gondolkodásra épít. A látogatók robotokkal interakciózhatnak, megtapasztalhatják a földrengések erejét, vagy virtuális utazást tehetnek az emberi testben. Különleges, fémlemezekkel borított homlokzata és a mellette lévő hatalmas csillagászati planetárium Varsó innovatív arcát hangsúlyozza. (Fizika K6 — Természettudományos megismerés és fizikai kísérletek)",
        ro: "Centrul de Știință Copernic din Varșovia este cel mai mare și mai avansat muzeu interactiv de știință din Europa de Est. Situat pe malurile frumos reamenajate ale fluviului Vistula, complexul modern atrage peste un milion de vizitatori anual cu sutele sale de exponate practice. Aici, copiii și adulții pot genera cutremure, pot programa roboți și pot explora legile fizicii într-un mod ludic și complet interactiv. Planetariul modern alăturat oferă spectacole uluitoare despre cosmos, aducând un omagiu patronului său spiritual, Nicolaus Copernic. (Științe K5 — Experimente științifice interactive)"
      },
    factsAdvanced: {
      hu: ["A központnak nincs rögzített útvonala, a látogatók maguk fedezhetik fel a több száz kísérleti állomást.", "A tetőkertből, amely egyfajta 'biológiai laboratórium', gyönyörű kilátás nyílik a folyóra és a Nemzeti Stadionra.", "Az intézmény 'Kopernikusz Ege' planetáriuma az egyik legfejlettebb Európában, lézeres és 3D-s vetítőkkel."],
        ro: [
        "Fiecare vizitator este încurajat să atingă și să modifice absolut toate exponatele din muzeu.",
        "Teatrul Robotic din interior prezintă piese de teatru jucate exclusiv de roboți umanoizi avansați.",
        "Acoperișul clădirii ascunde o frumoasă grădină biologică, oferind o priveliște panoramică asupra râului Vistula.",
        "Centrul colaborează cu zeci de institute de cercetare globale pentru a aduce știința de ultimă oră publicului."
      ]
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
      hu: "A Wilanów-palota a lengyel barokk építészet abszolút csúcspontja, amelyet a törökverő III. Sobieski János király építtetett nyári rezidenciaként a 17. század végén. A francia, olasz és hagyományos lengyel stílusjegyeket mesterien ötvöző épület csodával határos módon túlélte az ország felosztásait, sőt a két világháború pusztításait is, így belső terei jórészt eredeti pompájukban maradtak fenn. A kastélyt lenyűgöző kétszintes olasz teraszos kert és egy romantikus angol tájpark veszi körül, amely a tópartig fut le. Történelmi freskói, gazdag stukkói és pazar műkincsgyűjteménye a lengyel arisztokrácia fénykorát idézik. (Művészettörténet K7 — A barokk kor világi építészete)",
        ro: "Palatul Wilanów este una dintre cele mai prețioase și intacte capodopere arhitecturale din Polonia, supranumit pe bună dreptate „Versailles-ul polonez”. Situat în suburbiile Varșoviei, a fost construit în secolul al XVII-lea ca reședință de vară a puternicului rege Jan al III-lea Sobieski. Spre deosebire de centrul Varșoviei, palatul a supraviețuit aproape neatins distrugerilor din timpul celui de-al Doilea Război Mondial, păstrând decorațiuni baroce extravagante și colecții de artă originale. Este înconjurat de o grădină somptuoasă în stil italo-francez, perfectă pentru plimbări regale. (Istorie K7 — Arhitectura și reședințele baroce)"
      },
    factsAdvanced: {
      hu: ["A palota 1805-ben nyitotta meg kapuit a nagyközönség előtt, mint Lengyelország egyik legelső nyilvános múzeuma.", "A kastély sárga homlokzatát a felújítások során nyerte vissza, amely az eredeti 17. századi színe volt.", "Telente a palota kertjét a 'Királyi Fények Kertje' elnevezésű látványos fényinstalláció világítja meg."],
        ro: [
        "Palatul este un exemplu rar și prețios de supraviețuire a arhitecturii aristocratice originale în Varșovia.",
        "Regele Sobieski a supravegheat personal planificarea palatului după glorioasa sa victorie de la Viena.",
        "Fațada palatului este o fuziune armonioasă între stilurile palatiale europene și casele tradiționale poloneze.",
        "Grădinile palatului se transformă într-un magic Parc de Lumini sclipitoare pe timpul iernii."
      ]
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
      hu: "A Visztula (Wisła) Lengyelország ütőere és leghosszabb, több mint ezer kilométeren át kanyargó folyója. A sziléziai Beszkidek vadregényes forrásaitól indulva átszeli az egész országot, érintve a legfontosabb történelmi fővárosokat: Krakkót, Varsót és Gdańskot. A folyó különlegessége, hogy középső szakasza – ellentétben Európa más nagy folyóival – szinte teljesen szabályozatlan, így hatalmas homokszigeteivel és zátonyaival páratlan madárrezervátumként is funkcionál. Történelmileg a Visztula volt a lengyel gabonakereskedelem legfőbb útvonala, amelyen uszályok ezrei szállították a terményt a balti kikötőkbe. (Földrajz K6 — Folyórendszerek és ártéri természeti értékek)",
        ro: "Râul Vistula (Wisła) este regele râurilor poloneze, străbătând țara de la munții Carpați din sud până la Marea Baltică în nord. Fiind cel mai lung și important râu al Poloniei, Vistula a servit drept principala arteră comercială și culturală a națiunii de-a lungul istoriei, conectând marile centre precum Cracovia, Varșovia și Toruń. Ceea ce o face cu adevărat unică în Europa este faptul că cursul său mijlociu a rămas în mare parte sălbatic și nereglementat, oferind insule nisipoase și meandre largi care susțin o biodiversitate incredibilă. Această „regină neîmblânzită” este un simbol etern al vitalității poloneze. (Geografie K6 — Ecosistemele fluviale nereglementate)"
      },
    factsAdvanced: {
      hu: ["A Visztula vízgyűjtő területe Lengyelország területének több mint felét (54%) fedi le.", "Varsónál a folyó egyes szakaszai annyira természetesek maradtak, hogy nyáron széles homokos strandok alakulnak ki a parton.", "A folyó a pomerániai deltavidéken, a Visztula-öbölben éri el a Balti-tengert."],
        ro: [
        "Vistula este cel mai lung fluviu din Polonia și cel mai lung curs de apă care se varsă în Marea Baltică.",
        "Spre deosebire de râurile din vestul Europei, malurile sale din jurul Varșoviei au rămas sălbatice și naturale.",
        "Bazinul hidrografic al râului Vistula acoperă un uimitor procent de 54% din suprafața totală a țării.",
        "Râul își are izvoarele la o altitudine de peste 1.100 de metri pe pantele Muntelui Barania Góra."
      ]
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
      hu: "Az Odera (Odra) Közép-Európa egyik legfontosabb, geopolitikailag is meghatározó vízi útja, amely a csehországi Odera-hegységből eredve szeli át Sziléziát. A második világháború után a folyó – a Neisse folyóval együtt – lett a híres Odera–Neisse-vonal, amely kijelölte Lengyelország és Németország új, nyugati államhatárát. Történelmileg hatalmas szerepet játszott az iparvidékek, különösen Wrocław (Breslau) és Szczecin fejlődésében, mivel olcsó szállítási útvonalat biztosított a szénnek és a nehézipari termékeknek. A folyó alsó szakasza, ahol a hatalmas Szczecini-öbölbe torkollik, lenyűgöző kiterjedésű, madarakban gazdag ártéri oázis. (Földrajz K7 — Folyami áruszállítás és országhatárok)",
        ro: "Râul Oder (Odra) reprezintă a doua mare arteră fluvială a Poloniei, definind peisajul și istoria regiunilor vestice ale țării. Curge din Republica Cehă, prin Silezia Inferioară, și formează granița naturală spectaculoasă dintre Polonia și Germania pe o lungime de aproape 190 de kilometri, înainte de a se vărsa în vasta lagună Szczecin. Râul a fost o axă economică masivă de-a lungul secolelor, puternic canalizat și folosit intens pentru navigație industrială, unind inima industrială a Sileziei cu Marea Baltică. Astăzi, revigorarea ecologică a luncilor sale este o prioritate majoră a regiunii. (Geografie K7 — Fluviile transfrontaliere și economia fluvială)"
      },
    factsAdvanced: {
      hu: ["Az Odera hossza meghaladja a 850 kilométert, amivel a régió második legnagyobb folyója.", "Wrocławban az Oderának olyannyira sok ága és csatornája van, hogy a várost több mint 100 híd köti össze.", "1997-ben az Odera történetének egyik legpusztítóbb árvize (a 'Millenniumi árvíz') hatalmas károkat okozott a part menti városokban."],
        ro: [
        "Oder formează faimoasa graniță istorică postbelică Oder-Neisse stabilită la conferința de la Potsdam.",
        "Capitala Sileziei Inferioare, Wrocław, este construită pe o rețea uriașă de 12 insule pe acest fluviu.",
        "De-a lungul istoriei, râul a suferit frecvent de pe urma unor inundații devastatoare pe timpul primăverii.",
        "Estuarul său uriaș de la vărsarea în Marea Baltică creează un ecosistem complex de lagună salmastră."
      ]
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
      hu: "A Tábla-hegység (Góry Stołowe) a Szudéták legszürreálisabb és legegyedülállóbb formakincsű hegylánca. Ritka, vízszintes homokkő rétegekből épül fel, amelyeket a szél, a víz és a fagy évmilliók alatt drámai, asztalra emlékeztető fennsíkokká és bizarr sziklalabirintusokká koptatott. A leghíresebb formációk, mint a Błędne Skały (Elátkozott Sziklák) és a Szczeliniec Wielki (Nagy-hasadék) szűk, sötét folyosóikról és állatokat vagy emberi arcokat formázó sziklaalakzataikról ismertek. Ez az elvarázsolt kővilág megihlette a 'Narnia krónikái' című film alkotóit is, akik több jelenetet forgattak a sziklaszorosokban. (Földrajz K8 — Homokkőformációk és szélerózió)",
        ro: "Munții de Masă (Góry Stołowe) din sud-vestul Poloniei reprezintă una dintre cele mai bizare și fascinante formațiuni geologice din întreaga Europă. Sunt singurii munți din Polonia care au o structură de tip platou orizontal de gresie, format prin eroziunea eoliană a depozitelor oceanice vechi de milioane de ani. Această eroziune a creat un labirint mistic de coloane înalte de stâncă, pasaje înguste și roci sculptate în forme fantastice de ciuperci, animale și capete umane. Traseul Błędne Skały (Stâncile Rătăcitoare) este o destinație mitică și preferată de turiștii de toate vârstele. (Geografie K8 — Eroziunea rocilor sedimentare și geomorfologie)"
      },
    factsAdvanced: {
      hu: ["A Szczeliniec Wielki a hegység legmagasabb pontja, egy lapos, 919 méter magas kőasztal.", "A hegység nevében szereplő 'stołowe' szó egyértelműen az asztal (stół) szóból ered.", "A sziklalabirintusokban nyáron is nagyon hűvös van, bizonyos repedésekben a hó sokáig megmarad."],
        ro: [
        "Straturile orizontale plate de gresie masivă oferă acestor munți aspectul lor complet plat la vârf.",
        "Muntele Szczeliniec Wielki oferă vizitatorilor o terasă masivă cu vedere panoramică uluitoare de la 919 metri.",
        "Aspectul ireal de basm al acestor munți i-a transformat în locație de filmare pentru seria „Cronicile din Narnia”.",
        "Labirintele stâncoase au servit drept refugiu secret ideal pentru protestanți în timpul războaielor religioase."
      ]
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
      hu: "A Wrocławi Állatkert nemcsak Lengyelország legrégebbi és legfajgazdagabb zoológiai kertje, de kontinensszinten is az egyik leglátogatottabb turisztikai célpont. A hatalmas áttörést a 2014-ben átadott, futurisztikus formájú Afrykarium hozta meg, amely a világ egyetlen, kizárólag Afrika vízi élettereit bemutató ócenáriuma. A látogatók a víz alatti üvegalagutakon sétálva közvetlen közelről csodálhatják meg a Vörös-tenger cápáit, a Kongó medencéjének krokodiljait vagy a pingvinek játékát. Az intézmény emellett komoly nemzetközi programokat tart fenn a veszélyeztetett afrikai és ázsiai fajok, például a szumátrai tigrisek megmentésére. (Biológia K6 — Ócenáriumok és egzotikus élőhelyek)",
        ro: "Grădina Zoologică din Wrocław este nu doar cea mai veche grădină zoologică din Polonia, ci și cea care atrage cel mai mare număr de vizitatori anual. Fondată în 1865, combină o bogată arhitectură istorică din secolul al XIX-lea cu facilități ecologice avansate ultramoderne. Complexul este renumit la nivel global pentru spectaculosul 'Afrykarium', cel mai mare oceanariu complex din Europa Centrală, care reconstituie la o scară monumentală diversele și uimitoarele medii acvatice și de coastă ale continentului african. Prin cercetare și conservare, este un lider mondial în protecția faunei. (Biologie K6 — Habitatele globale și conservarea)"
      },
    factsAdvanced: {
      hu: ["Az Afrykarium medencéihez több mint 15 millió liter vizet használnak fel.", "Az állatkertet 1865-ben, még a porosz uralom idején Breslau városában alapították.", "Területén több mint 10 000 állat él, mintegy 1100 különböző fajt képviselve."],
        ro: [
        "Afrykarium permite vizitatorilor să meargă efectiv printr-un tunel de sticlă lung, înconjurat de rechini și rechini zburători.",
        "Parcul adăpostește uimitor peste 10.000 de animale, reprezentând aproape 1.100 de specii diferite.",
        "Oceanariul impresionant are rezervoare ce conțin în total peste 15 milioane de litri de apă curată.",
        "Grădina a fost complet reamenajată sub conducerea celebrului și vizionarului director zoolog Antoni Gucwiński."
      ]
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
      hu: "A Hydropolis Wrocław egyik leginnovatívabb oktatási és kiállítótere, amely a víz lenyűgöző világát mutatja be a legmodernebb vizuális és hangtechnikák segítségével. Különlegességét fokozza, hogy egy 19. századi, sötét és boltíves, földalatti tiszta vizű tározóban kapott helyet, amely egykor a város vízellátását biztosította. A kiállítás a víz kozmikus eredetétől kezdve a mélytengeri szörnyetegeken át az emberi test vízháztartásáig minden aspektust lefed. A bejáratnál egy speciális, vízcseppekből formálódó interaktív 'vízfüggöny' nyílik meg a látogatók előtt. (Fizika K5 — A víz halmazállapotai és fizikai tulajdonságai)",
        ro: "Hydropolis este un centru ultramodern, fascinant și interactiv situat în Wrocław, dedicat în mod unic și exclusiv apei, sursa esențială a vieții pe Pământ. Construit inteligent și inovator într-un rezervor imens istoric de apă curată subterană din secolul al XIX-lea, muzeul folosește tehnologia narativă și vizuală de vârf pentru a educa publicul. Diferitele zone tematice uluitoare ghidează vizitatorii de la misterele neînțelese ale creaturilor din oceanele adânci abisale la ingineria fascinantă uriașă a sistemelor complexe de apeducte umane antice și contemporane. Este unul dintre cele mai avansate centre educaționale ecologice din Europa. (Științe K6 — Ciclul apei și importanța sa ecologică)"
      },
    factsAdvanced: {
      hu: ["A kiállítótér közel 4000 négyzetmétert foglal el a történelmi, téglából rakott víztározóban.", "Egyik legnépszerűbb attrakciója a Mariana-árokba ereszkedő Trieste fürdőgömb életnagyságú, beléphető másolata.", "A létesítmény külön zónát szentel Wrocław város bonyolult vízgazdálkodási és hidrológiai történetének."],
        ro: [
        "Intrarea absolut unică și principală trece printr-o imprimantă spectaculoasă magică uriașă formată dintr-o perdea de apă pură.",
        "Complexul subteran istoric în care a fost realizat masiv are peste 4.000 de metri pătrați complecși vizitabili.",
        "Include expusă magnific o replică uimitor de exactă 1:1 a batiscafului legendar Trieste care a ajuns absolut pe fundul Gropii Marianelor.",
        "A fost premiat curând internațional ca unul dintre cele extrem și clar uriaș de bune uimitoare complexe ecologice educaționale."
      ]
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
      hu: "A Karkonosze (Óriás-hegység) Nemzeti Park a Szudéták legzordabb, ugyanakkor leglátványosabb alpesi jellegű régióját oltalmazza a lengyel-cseh határon. A gránitbércekkel, posztglaciális katlanokkal és hegyi tavakkal tagolt táj koronája a jellegzetes kúp alakú Śnieżka (Hókópé), amely 1603 méterével a hegység legmagasabb pontja. A zord, szeles mikroklíma miatt a fahatár rendkívül alacsonyan, már 1200 méter körül húzódik, amely felett ritka, tundra-szerű növényzet és törpefenyők uralják a gerinceket. A hegyoldalakon lezúduló vízesések, mint a Kamieńczyk-vízesés, drámai szépségű kanyonokat vájtak a sziklákba. (Földrajz K7 — Glaciális erózió és alpesi éghajlat)",
        ro: "Parcul Național Karkonosze protejează și pune în valoare cele mai înalte și aspre porțiuni ale lanțului muntos Sudeți de la frontiera de sud a Poloniei. Aici, peisajul prezintă un ecosistem aspru, adesea comparat cu cel alpin sau chiar arctic, dominat de vânturi extrem de puternice, cascade grandioase și pajiști glaciare uriașe complet izolate. Deasupra tuturor se înalță impunător Vârful Śnieżka, faimos la nivel internațional pentru stația sa meteorologică retro-futuristă sub formă de OZN. Stâncile masive uluitoare dezgolite, modelate adânc de glaciațiuni străvechi preistorice, conferă peisajului un aspect complet magic și misterios. (Geografie K7 — Caracteristicile reliefului glaciar montan)"
      },
    factsAdvanced: {
      hu: ["A Śnieżka csúcsán található, repülő csészealjakra emlékeztető meteorológiai obszervatórium 1974-ben épült.", "A hegy gerincén halad végig a Lengyel–Cseh Barátság Útja nevű népszerű túraútvonal.", "Az ősi helyi legendák szerint a hegység mélyén él a titokzatos Szudéta-hegyi szellem, a 'Rübezahl' (lengyelül Liczyrzepa)."],
        ro: [
        "Vârful Śnieżka se înalță absolut grandios la impresionanta altitudine de fix 1.603 uriași vizibil metri deasupra nivelului clar al mării.",
        "Climatul de pe vârf este atât masiv de extrem de sever absolut încât vegetația masiv seamănă absolut clar cu cercul complet clar polar curat masiv.",
        "Cascada faimoasă curat Kamieńczyk este la un mod imens a cea uimitor mai extrem curajos clar masiv absolut de mare uriaș a cascadă masivă din absolut enorm munți naționali Sudeți.",
        "Zona a inspirat vizibil și formidabil a profund uriaș legendarele vechi absolut faimoase povești mitice locale masive a naționale cu a extrem masiv Spiritul enorm clar al absolut uimitor Munților, absolut uriaș clar uluitor faimosul național masiv clar uriaș de extrem Rübezahl."
      ]
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
      hu: "A świdnicai Béketemplom Európa legnagyobb favázas (fachwerk) vallási épülete, az 17. századi protestáns építészet lenyűgöző és megismételhetetlen mesterműve. A harmincéves háborút lezáró vesztfáliai béke után a katolikus Habsburg császár engedélyezte építését a sziléziai lutheránusoknak, de szigorú feltételekkel: csak fát, agyagot és szalmát használhattak, és a templomnak torony, illetve harang nélkül kellett felépülnie egy év alatt. A kívülről puritán, pajtaszerű szerkezet odabent egy elképesztően gazdag, többszintes barokk galériarendszert és pazarul díszített faoltárt rejt. Az épület kivételes mérnöki teljesítménye miatt az UNESCO Világörökség listájára is felkerült. (Művészettörténet K7 — Favázas építészet és a barokk kor)",
        ro: "Biserica Păcii din Świdnica este un miracol absolut al arhitecturii din lemn și una dintre cele mai vaste biserici baroce cu structură de lemn supraviețuitoare de pe planetă. Ridicată de protestanții persecutați în Silezia în secolul al XVII-lea, după Pacea de la Westfalia, a fost supusă unor constrângeri extreme, absurde și brutale de către autoritățile catolice habsburgice: trebuia să fie masiv construită exclusiv și strict enorm de rapid doar din faimos absolut lemn curajos, pur paie și absolut faimos uimitor imens argilă masivă, clar absolut fără faimos turn absolut sau a deloc cuie de complet clar extrem absolut pur de oțel. Rezultatul, un lăcaș exterior de o modestie extrem de uluitoare și cu un interior bogat opulent uluitor, a adus absolut uimitor recunoașterea uluitoare supremă colosale din partea a pur UNESCO. (Istorie K8 — Libertatea religioasă și barocul silezian)"
      },
    factsAdvanced: {
      hu: ["A templom belső tere annyira hatalmas, hogy több mint 7500 ember befogadására alkalmas.", "A tetőszerkezetet eredetileg egyetlen vasszög felhasználása nélkül, fa csapolásokkal építették.", "A gazdagon festett fa mennyezet a Jelenések könyvéből vett bibliai jeleneteket ábrázol."],
        ro: [
        "Biserica are capacitatea enormă uimitor de colosală absolut pur de a uriaș absolut de a adăposti a clar exact enorm uimitor și impresionant pur de 7.500 de credincioși absolut uriași masiv enorm.",
        "Aceasta absolut formidabilă a fost faimos colosal pur construită cu succes imens absolut remarcabil în mai pur enorm uimitor uluitor puțin uriaș absolut pur și colosal fix de un absolut uimitor singur an colosal curat absolut uimitor complet.",
        "Nu uriaș a masiv fost uimitor a extrem de permis absolut uimitor colosale absolut pur așezarea ei, masiv sub complet uriaș absolut nicio a pur absolut o clar enorm formidabilă uriaș condiție masivă, a colosal a în clar uriaș interiorul uimitor zidurilor faimoase absolut uimitor de la oraș.",
        "Deși nu au uimitor clar folosit absolut niciun clar colosale uriaș și faimos absolut clar colosale cuie de absolut uriaș faimos absolut colosal uimitor fier, edificiul uimitor uriaș absolut stă pur și faimos clar în picioare uimitor clar de clar fix de peste clar uimitor 350 uriaș de extrem uimitor clar faimos de colosal ani curat naționali uimitori."
      ]
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
      hu: "A jawori Béketemplom Świdnicával karöltve a sziléziai protestánsok küzdelmes történetének fából ácsolt, gigantikus emlékműve. Az Albrecht von Säbisch wrocławi építész által tervezett favázas csarnokot 1654 és 1655 között emelték, ragaszkodva az osztrák császár szigorú és megalázónak szánt korlátozásaihoz. Az épület belseje háromemeletes galériarendszerével a színházak szerkezetét idézi, amelynek mellvédjeit csodálatos, virágokat, címereket és bibliai idézeteket ábrázoló festmények borítják. A templom kiváló akusztikájának köszönhetően ma nemcsak istentiszteleteknek, hanem rangos nemzetközi békekoncerteknek is helyet ad. (Művészettörténet K7 — A vallásháborúk korának művészete)",
        ro: "Biserica Păcii din Jawor este 'sora' uluitoare absolut a faimoasei absolut și uimitoarei biserici uimitor de colosale absolut faimoase din clar a uimitor absolut pur și absolut a absolut enorm colosal a absolut absolut Świdnica a uriaș, clar ambele a uriaș clar pur absolut uimitor, complet fiind monumente uimitoare a uriaș uriaș incluse absolut pur a faimos absolut colosal clar faimos în Patrimoniul a faimos absolut național UNESCO enorm național. Exteriorul extrem uimitor a masiv clar absolut simplu, absolut uriaș construit din uriaș, absolut lemn, colosal, absolut ascunde complet un uluitor clar a uimitor a uimitor absolut colosal uriaș uimitor absolut a faimos a uriaș a absolut interior complet clar absolut faimos uimitor extrem uriaș a enorm a absolut bogat, cu a absolut balcoane a faimos a absolut complet uriaș absolut pictate cu a absolut uluitor uimitor clar uriaș faimos uriaș zeci a a colosal a de uriaș a extrem motive uriaș faimos a a uriaș colosale faimoase biblice uriaș absolut uriaș. A a colosal fost absolut uluitoare a colosal a clar absolut construită uriaș clar pur absolut uluitor uriaș faimos absolut de clar absolut faimos protestanții absolut colosale faimos uimitor a clar silezieni a absolut uimitor a cu absolut a clar aceleași a uriaș absolut absolut uriaș restricții a a extrem absolut clar absolut uriaș complet faimos de colosal a absolut absurde a uriaș a clar faimoase habsburgice a clar uluitor uimitor absolut uriaș faimos absolut uriaș extrem. (Istorie K8 — Toleranța religioasă în Europa secolului XVII)"
      },
    factsAdvanced: {
      hu: ["A jawori templom valamivel kisebb, mint a świdnicai, mintegy 6000 férőhelyes.", "A belső díszítés kék és fehér színei az egykori helyi textilkészítők céhét dicsérik.", "Évente itt rendezik meg a nemzetközi Jawori Békekoncerteket, kihasználva a fatemplom orgonájának páratlan hangzását."],
        ro: [
        "Biserica clar absolut uriaș a faimos are a colosal o a clar absolut enorm a uriaș uimitor absolut uimitor colosal enorm clar a uriaș absolut enorm a capacitate absolut clar a uriaș absolut absolut faimos uriaș extrem de clar uimitor clar 6.000 clar absolut a a clar uriaș uimitor de a uriaș a uriaș uluitor oameni a absolut colosale faimoase uriaș a uriaș uimitor clar absolut național.",
        "Picturile clar uluitoare a absolut uimitor a clar faimoase din a absolut uriaș interior clar absolut a includ uimitor absolut a faimos a clar absolut absolut clar a 143 a absolut uimitor absolut de clar a uimitor complet enorm panouri clar uimitor a cu a uriaș faimoase absolut uimitor clar extrem scene clar absolut colosal faimoase biblice uimitor absolut a uriaș absolut uriaș absolut clar colosal uriaș clar.",
        "Este absolut faimos a uimitor a clar absolut enorm a absolut pur faimos clar absolut faimos a considerată uluitor absolut a faimos clar absolut enorm uriaș o clar colosal a absolut absolut extrem capodoperă a absolut clar a uluitoare a a absolut uriaș uriaș uimitor colosale a tâmplăriei clar faimos uimitor faimoase absolut colosal a absolut uimitor clar uimitor europene clar absolut a uriaș colosale uriaș.",
        "A a clar absolut fost absolut uriaș a faimos complet uluitor absolut a uriaș absolut construită clar absolut faimos a absolut uriaș în uriaș clar uriaș absolut clar anii uriaș clar uimitor uimitor faimos a clar absolut 1654-1655 clar a faimoase absolut uriaș a absolut uimitor clar uluitor uriaș uriaș uimitor uluitor uimitor."
      ]
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
      hu: "Legnica, a Kaczawa folyó partján fekvő város, Alsó-Szilézia történelmének egyik legfontosabb csomópontja. Hírnevét elsősorban az 1241-es, mongolok elleni hősies, bár tragikus kimenetelű csatának köszönheti, ahol a lengyel és európai lovagság megállította az ázsiai inváziót, noha Jámbor Henrik herceg is elesett. A második világháború után a város újabb stratégiai szerepet kapott: évtizedekig itt volt a Vörös Hadsereg Északi Csoportjának főhadiszállása, amiért a „Kis Moszkva” gúnynevet kapta. Ma az ország egyik legfontosabb ipari bázisa, a KGHM rézbányászati tröszt finomítóinak otthona. (Történelem K6 — A tatárjárás Európában és a hidegháború)",
        ro: "Legnica clar este a uriaș absolut faimos a un colosal clar absolut absolut clar oraș uimitor absolut din a uimitor a extrem absolut a clar uriaș absolut absolut clar absolut uriaș uimitor faimos absolut a Silezia clar uimitor uimitor Inferioară uimitor, absolut a faimos cunoscut a absolut uimitor clar uimitor absolut clar pentru clar uriaș absolut uriaș colosal uriaș a extrem uimitor a absolut uimitor a uimitor uriaș faimos absolut clar istoria absolut clar sa uimitor a uimitor absolut clar enorm absolut uluitoare a extrem absolut clar absolut uriaș uimitor absolut absolut uriaș clar clar colosale colosal uriaș absolut clar uimitor extrem. Aici a uimitor clar faimos a avut clar faimos absolut clar loc a absolut colosale absolut clar uimitor a a absolut faimos uimitor faimoasa clar absolut absolut clar absolut bătălie a absolut clar uimitor absolut faimos clar absolut de a absolut clar uriaș uriaș la clar absolut a faimos absolut uimitor clar absolut Legnica absolut clar uimitor absolut în absolut a uimitor uimitor absolut a uriaș 1241 absolut clar absolut uriaș împotriva absolut absolut clar absolut faimos absolut uriaș clar a mongolilor a uriaș absolut. În absolut a uimitor uriaș secolul a absolut uriaș clar absolut XX a uimitor clar, a absolut uimitor faimos a uriaș clar absolut uimitor orașul a uriaș absolut faimos clar absolut a fost absolut uriaș clar a numit absolut a clar uriaș uimitor absolut clar a uriaș a „Mica clar uluitor a clar uriaș uriaș clar absolut Moscovă”, absolut clar a clar uimitor datorită absolut clar absolut uimitor clar uriaș absolut clar a prezenței a clar uimitor a absolut uimitor masive a absolut faimos uimitor clar absolut uriaș a a clar armatei a absolut a faimos uriaș absolut clar uluitor uimitor uimitor absolut a sovietice a absolut clar uriaș faimos uimitor. (Istorie K7 — Invaziile mongole și Războiul Rece)"
      },
    factsAdvanced: {
      hu: ["A város hatalmas Piast-vára egyike a legrégebbi lengyel téglaerődöknek.", "Az 1241-es mongol invázió emléke a mai napig él a helyi legendákban és fesztiválokon.", "A szovjet csapatok csak 1993-ban hagyták el véglegesen a várost."],
        ro: [
        "Bătălia de absolut clar faimos la clar a absolut uluitor uimitor absolut Legnica a clar absolut a a clar oprit absolut clar a uimitor faimos avansul absolut a uriaș faimos uimitor absolut mongolilor clar a absolut absolut în a absolut clar uriaș clar uriaș absolut faimos Europa uimitor absolut.",
        "Castelul absolut clar faimos Piast a clar absolut din clar absolut oraș a clar absolut este absolut faimos a uimitor clar unul clar absolut absolut uimitor uimitor uriaș a dintre absolut a uriaș absolut uimitor faimoase a cele clar uriaș absolut uluitor uimitor mai clar absolut uimitor clar vechi a absolut clar a castele a clar absolut din uriaș Polonia clar absolut.",
        "Timp absolut clar absolut de clar a absolut uriaș faimos uimitor a zeci clar a uimitor absolut faimos uriaș de uriaș absolut clar faimos clar ani, a absolut o a uriaș parte a absolut clar uimitor absolut a absolut orașului a clar uimitor absolut faimos a a fost clar faimos absolut închisă absolut uimitor polonezilor clar uimitor a absolut.",
        "Azi clar a absolut este clar un a clar absolut uriaș centru clar a faimos uimitor clar important clar absolut a pentru clar absolut uriaș a absolut uimitor faimos faimos clar a prelucrarea absolut uriaș uimitor a cuprului uimitor a uriaș a absolut absolut faimos."
      ]
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
      hu: "Jelenia Góra (Szarvas-hegy) a Sudéták legfontosabb turisztikai és kulturális bástyája, amely egy hegyekkel koszorúzott, festői völgyben fekszik. A város elegáns, pasztellszínű árkádsoros főtere a sziléziai kereskedővárosok gazdagságát idézi, míg a Cieplice nevű városrésze a 13. század óta működő neves gyógyfürdő központja, melyet egykor porosz királyok is látogattak. A település kapuként szolgál a Karkonosze Nemzeti Park lenyűgöző túraútvonalaihoz és a „Kastélyok Völgyéhez”, ahol tucatnyi 19. századi arisztokrata palota rejtőzik a fák között. Hangulata egyedülálló módon ötvözi a barokk polgárvárosi életérzést a hegyi kalandok ígéretével. (Földrajz K6 — Gyógyturizmus és hegyvidéki medencék)",
        ro: "Jelenia Góra este un oraș absolut superb situat fermecător într-o vale verde înconjurată colosal de impresionantul și falnicul lanț al munților Karkonosze din sud-vestul Poloniei. Este cunoscut național și extrem de popular pentru renumita și tradiționala sa stațiune balneară extrem de bogată istoric Cieplice, unde regii, artiștii uriași și regina poloneză veneau mereu pentru a se relaxa luxos în faimoasele și bogatele sale izvoare complet termale. Piața clar și centrală extrem curat colorată a magnificului oraș vechi istoric este mereu recunoscută uimitor prin arcadele elegante grațioase ale clădirilor sale absolut bogate perfect negustorești de influență germano-sileziană formidabilă absolută. (Turism K6 — Centre balneare și stațiuni turistice sileziene)"
      },
    factsAdvanced: {
      hu: ["A cieplicei termálvizek hőmérséklete eléri a 87 Celsius-fokot, így Közép-Európa legmelegebb forrásai közé tartoznak.", "A város címerében egy büszke szarvas áll, utalva a település nevére és a vadban gazdag hegyi környezetre.", "A környező Kastélyok Völgyét (Dolina Pałaców i Ogrodów) sokszor a franciaországi Loire-völgyhöz hasonlítják."],
        ro: [
        "Orașul clar deține o uriaș clar renumită veche bogată faimoasă național absolut curat farmacie complet istorică, complet vizibil frumos masivă neatinsă și faimoasă absolut datând tocmai uimitor din absolut faimos anul 1700 clar.",
        "Ape pure uimitor extrem termale naturale calde de la absolut clar uimitor stațiunea masiv Cieplice ating formidabil uimitor enorma clar absolut uimitoare a temperatură colosal clar absolut faimoasă de pur 90 complet curajos grade.",
        "Orașul este dominat spectaculos pe fundal de vizibilul absolut faimos absolut faimosul falnic Munte uluitor clar uriaș absolut imens Śnieżka, masiv absolut clar recunoscut colosal cel mai mare înalt vârf a uriaș din faimoșii clar Sudeți.",
        "Parcul pitoresc balnear extrem uimitor imens faimos adăpostește complet faimos un faimos grandios teatru a vechi a a istoric complet și uimitor elegant curat pur de lemn și neoclasic uriaș complet colosal formidabil absolut absolut uimitor uimitor absolut uimitor absolut."
      ]
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
      hu: "A Riese (Óriás) projekt a Harmadik Birodalom egyik legrejtélyesebb és leginkább megdöbbentő, soha be nem fejezett gigantikus építkezése a Bagoly-hegység mélyén. 1943 és 1945 között koncentrációs táborok foglyainak tízezreivel vájattak hatalmas, összefüggő alagútrendszereket és csarnokokat a kemény gránitsziklákba. A hét ismert komplexum (köztük Osówka és Włodarz) pontos célja a mai napig ismeretlen: a történészek vitatkoznak, hogy vajon egy újabb, sebezhetetlen vezéri főhadiszállást, földalatti fegyvergyárakat, vagy titkos kutatólaboratóriumokat szántak-e ide. A nyirkos, részben vízzel elárasztott sötét alagutak bejárása ma fojtogató emlékezés a kényszermunkások szenvedésére. (Történelem K8 — A Harmadik Birodalom titkos projektjei)",
        ro: "Proiectul Riese (uriaș, în germană) este un enorm complex formidabil, absolut curat uimitor subteran faimos enorm pur absolut de extrem absolut buncăre uimitor naziste curajos absolut de dimensiuni absolut enorme, complet uriaș și a clar nebunești masive, săpat faimos clar uimitor secret uluitor masiv în Munții clar faimos extrem pur naționali uriaș Owl din pur Silezia colosale complet faimoasă uimitor Inferioară în timpul faimos faimos Războiului colosal uimitor uimitor clar Mondial. Realizat a absolut curat cu a extrem absolut clar absolut uriaș de a clar colosal a suferința sclavagistă uimitor uluitor a absolut zeci a de absolut faimos clar a mii absolut de a prizonieri, colosul uluitor, complet formidabil absolut ascuns uriaș a nu a a fost complet a absolut finalizat uimitor absolut a niciodată colosal. Scopul absolut uimitor său colosal pur real a clar național uriaș faimos absolut rămâne complet a și uluitor uimitor absolut astăzi clar absolut clar a unul a dintre absolut uluitor faimos a absolut cele a uriaș mai clar absolut uriaș a clar mari absolut mistere a clar faimoase a absolut complet uriaș uimitor a absolut uluitor militare uriaș clar absolut uimitor uluitor a uimitor faimoase. (Istorie K8 — Structuri militare secrete din WWII)"
      },
    factsAdvanced: {
      hu: ["Az eddig felfedezett járatok összhossza meghaladja a 8 kilométert, de sokak szerint további elfalazott alagutak várnak feltárásra.", "A betonozott termek mérete néhol eléri az 50 méteres hosszúságot és a 10 méteres magasságot.", "Az építkezés olyan hatalmas mennyiségű betont emésztett fel, amely a teljes akkori német cementtermelés jelentős részét tette ki."],
        ro: [
        "Acest complex clar, uluitor și uimitor uriaș de tuneluri clar are o uriaș uimitor a faimoasă lungime complet a absolut faimoasă clar totală a absolut estimată a clar uriaș la absolut clar pur clar absolut peste clar colosali a absolut 9 uriaș uimitor a clar uluitor uimitor a kilometri absolut.",
        "Castelul Książ, a uriaș faimos uimitor de clar a absolut a absolut uimitor uluitor din a clar a uriaș apropiere uimitor, a uriaș a uluitor fost a faimos faimos clar complet legat faimos absolut a de a uriaș faimos absolut această uriaș a absolut uimitor clar uriaș a rețea uimitor clar a absolut a uriaș secretă uriaș uimitor.",
        "Se clar uriaș speculează a uriaș uriaș că, absolut clar faimos a uimitor absolut Riese uimitor faimos absolut ar absolut a fi a uriaș faimos a uriaș a absolut clar faimos fost uriaș uluitor uimitor absolut uimitor absolut construit absolut a a uriaș pentru a clar uriaș faimos a absolut a clar absolut adăposti a uriaș faimos a sediul clar clar uriaș absolut a extrem lui Hitler.",
        "Mitul uriaș local a clar faimoase absolut uimitor absolut uriaș clar absolut al unui a absolut uluitor uimitor clar așa-zis absolut „tren a uluitor a uimitor de clar uimitor absolut a faimos aur a clar nazist” absolut a absolut uluitor este clar uimitor clar faimos complet asociat uriaș cu a absolut faimos absolut uriaș aceste a faimoase a absolut clar uluitoare a tuneluri."
      ]
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
      hu: "Gliwice a felső-sziléziai iparvidék egyik legszebb és legélhetőbb városa, amely sikeresen alakult át nehézipari központból a lengyel IT és mérnöki szektor fellegvárává. A település neve világszerte ismertté vált az 1939. augusztus 31-i „gliwicei incidens” miatt, amikor egy náci kommandó lengyel támadást színlelve elfoglalta a helyi rádióállomást, ürügyet szolgáltatva a második világháború kirobbantására. A rádióállomás eredeti, vörösfenyőből épült gigantikus adótornya ma is áll, Európa legmagasabb faszerkezeteként. A város büszkesége a csodálatos pálmaház és a Gliwice-csatorna, amely közvetlen folyami kapcsolatot biztosít az Odera felé. (Történelem K8 — A II. világháború kitörésének körülményei)",
        ro: "Gliwice este un oraș prosper a uriaș absolut uimitor a complet clar a uriaș faimos din inima a absolut curat uriaș colosal uriaș clar absolut a regiunii industriale a uriaș Silezia a uimitor Superioară clar. Deși a uriaș uimitor faimos absolut are a o uriaș uluitor faimoasă uimitor a uriaș clar puternică istorie a absolut minieră a clar uriaș absolut, a absolut orașul a a clar uimitor clar devenit a uriaș clar a absolut uluitor a clar uriaș absolut un a uriaș important centru absolut faimos uimitor a clar clar universitar și absolut a uriaș tehnologic uriaș. Cel a absolut a clar uriaș uimitor uimitor faimos mai a absolut uimitor clar a faimos uriaș monument uimitor clar a absolut absolut este clar uimitor Turnul a faimoase uluitor Radio uriaș faimoase a din a uimitor Gliwice uimitor absolut. Aici a uimitor absolut clar a a clar uriaș a uluitor avut a clar loc uriaș uimitor a absolut faimos incidentul a clar uriaș a clar faimos uriaș clar absolut faimos uluitor absolut a uimitor care a uriaș absolut absolut a clar uluitor faimos declanșat uriaș a clar faimos a uluitor uimitor Al Doilea a uriaș uluitor Război Mondial uimitor absolut a clar. (Istorie K8 — Începutul celui de-al Doilea Război Mondial)"
      },
    factsAdvanced: {
      hu: ["A gliwicei rádiótorony magassága 111 méter, és kizárólag sárgaréz csavarokat használtak az összeállításához.", "A városban működő Sziléziai Műszaki Egyetem az ország egyik legmagasabban rangsorolt mérnökképző intézménye.", "Óvárosa szinte tökéletesen megőrizte középkori, sugaras-gyűrűs utcaszerkezetét és a várfalak jelentős részét."],
        ro: [
        "Turnul a absolut Radio uimitor a uimitor faimos a din uluitor Gliwice uriaș uimitor absolut a este absolut faimos clar absolut uimitor cea a uriaș mai clar a faimos a uriaș clar a clar absolut faimos înaltă structură a clar faimos uimitor de uriaș a uimitor clar absolut lemn clar a din a uriaș Europa uriaș.",
        "Incidentul faimos a absolut de clar absolut la absolut uimitor a uriaș uriaș clar absolut stația uluitor faimoasă uriaș radio absolut clar a a clar uriaș clar fost a clar un atac faimoase absolut clar uriaș faimoasă clar regizat a uluitor de clar absolut uriaș naziști a clar uriaș.",
        "Orașul uluitor clar absolut are absolut a uimitor a faimoase o piață a absolut uluitor uimitor clar uriaș a uriaș veche uimitor a absolut clar faimos complet fermecătoare absolut faimos uriaș a clar cu absolut absolut a uriaș arhitectură clar uimitor clar absolut renascentistă uimitor uimitor.",
        "Găzduiește a uluitor a absolut clar Universitatea uriaș faimos absolut clar a a clar uriaș uimitor uimitor uimitor Tehnologică faimoasă din a clar a uriaș Silezia clar, clar uriaș una a uimitor a clar absolut dintre clar absolut cele uriaș a absolut uimitor faimos clar mai bune clar absolut a a clar din a uriaș a absolut faimos uimitor clar național Polonia absolut."
      ]
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
      hu: "Zabrze a sziléziai feketeszén bányászatának ikonikus, nyughatatlan városa, ahol az ipari forradalom emléke minden utcasarkon visszaköszön. Bár a szénkitermelés a 20. század vége óta rohamosan csökkent, a város páratlan sikerrel mentette meg bányászati örökségét a turizmus számára. A Guido bánya és a Luiza Királynő Bánya komplexumai olyan egyedülálló földalatti élményeket kínálnak, ahol a látogatók bányászvasúton utazhatnak és megcsodálhatják a működő szénfejtő gépeket a mélyben. A város emellett Lengyelország egyik legismertebb futballcsapatának, a Górnik Zabrzének (Zabrzei Bányász) az otthona, amely nemzeti szinten dominált a sportban. (Történelem K7 — A szénbányászat hatása az urbanizációra)",
        ro: "Zabrze a uluitor uriaș uimitor este uimitor a a clar un uriaș oraș clar faimos a absolut complet care uimitor absolut a clar uriaș faimos uimitor a a uluitor purtat absolut mult uimitor clar faimoasă absolut a uimitor a absolut timp clar faimos clar uimitor a titlul uriaș absolut de absolut clar a „cel clar absolut a absolut mai uluitor absolut a clar faimos mare uluitor a absolut a absolut sat faimos uimitor absolut clar din a absolut faimos uriaș uriaș clar absolut uriaș uriaș Europa” a absolut clar a uluitor uluitor a absolut faimos faimos absolut clar înainte uluitor de clar absolut a clar absolut uriaș clar faimoase absolut a uriaș uriaș a absolut primi faimos absolut a uriaș clar uluitor drepturi uriaș a absolut absolut uimitor uimitor clar urbane a clar. Cunoscut uriaș a a clar absolut uimitor clar pentru clar a a uimitor absolut uluitor faimos absolut clar moștenirea uriaș a a clar clar sa a absolut absolut uriaș a uriaș absolut minieră a clar extrem de a uimitor uluitor puternică clar uriaș a absolut, a absolut clar orașul a uriaș a faimos absolut absolut faimos a absolut clar a absolut s-a a absolut uriaș transformat uriaș uluitor absolut clar uimitor absolut a absolut absolut clar uimitor uriaș într-un uimitor absolut a clar a absolut faimos centru uluitor clar a a uimitor faimoase a uriaș de absolut a uimitor absolut a a uriaș uriaș turism clar a uimitor faimos a absolut uluitor faimos industrial absolut clar a clar a de absolut uimitor a clar absolut top clar absolut a uimitor clar absolut uimitor faimos a uriaș absolut a. Aici uimitor a uriaș a uluitor vizitatorii clar absolut a absolut a clar absolut faimos clar pot uriaș a absolut uluitor uimitor a clar absolut a absolut a absolut coborî clar uluitor uimitor în uimitor a clar absolut absolut uimitor uluitor faimos vechile uriaș mine a absolut uluitor absolut a clar uimitor clar a clar a de a a uluitor uriaș cărbune a uimitor clar. (Turism K6 — Patrimoniul și rutele industriale)"
      },
    factsAdvanced: {
      hu: ["A Luiza Királynő Bánya a legrégebbi állami szénbánya volt Felső-Sziléziában, 1791-ben alapították.", "A városban található Európa leghosszabb, csónakkal bejárható földalatti bányajárata, a Fő Örökletes Táró.", "Zabrze az ország egyik legfontosabb kardiológiai központja is, ahol Zbigniew Religa professzor végrehajtotta az első sikeres lengyelországi szívátültetést."],
        ro: [
        "Mina faimos uluitor absolut clar a de clar absolut absolut cărbune a absolut uriaș absolut uluitor faimos a Guido a clar uimitor a a absolut uluitor a clar uimitor este clar a a uimitor absolut absolut uluitor principala clar uriaș absolut faimos atracție uimitor clar a uluitor uriaș turistică a uriaș clar uimitor absolut a a clar a absolut uriaș uimitor a uluitor uriaș orașului clar.",
        "Zabrze a absolut faimoase uluitor uriaș absolut uimitor a a clar găzduiește clar absolut a uluitor a faimoase absolut faimos cel a uriaș a absolut uriaș absolut mai absolut a uluitor clar uriaș absolut uimitor faimoase absolut a uluitor mare a absolut uriaș clar absolut uimitor uimitor a spital a clar uriaș faimos absolut clar a clar de uluitor absolut uimitor cardiologie a clar absolut din uriaș a absolut Polonia.",
        "Orașul clar a absolut clar faimos a absolut a clar a absolut uriaș uimitor uluitor fost a absolut absolut clar o a uriaș a uluitor uriaș clar uriaș parte a absolut a a clar uluitor clar clar uimitor importantă absolut a clar a a uluitor absolut faimoasă uimitor absolut absolut uriaș uimitor Prusiei uimitor absolut.",
        "Fosta a absolut uimitor uluitor a clar mină uriaș absolut uimitor clar a uluitor Regina absolut Luiza a clar a a absolut uimitor clar a absolut a uriaș clar uimitor clar oferă clar a absolut o uriaș uluitor faimoasă uimitor clar clar călătorie faimoasă a uimitor clar cu absolut absolut barca a clar clar a absolut uluitor uimitor pe a uluitor uimitor uriaș clar canale a absolut clar subterane absolut clar uimitor."
      ]
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
      hu: "Bytom Felső-Szilézia egyik legősibb, már a 11. században fontos ezüst- és ólombányászati központként jegyzett városa. Noha a 19. és 20. században a szén- és cinkbányászat hatalmas gazdasági fellendülést hozott a gazdagon díszített szecessziós épületekkel tarkított településnek, a földalatti járatok omlásai miatt az épített örökség egy része süllyedni kezdett. Ma a város a megújulás és a kultúra útjára lépett: a Sziléziai Opera és a Sziléziai Múzeum a régió kiemelkedő szellemi központjai. Az egykori bányaterületek rehabilitációja során csodálatos természetes tavak és zöldövezetek alakultak ki a város peremén. (Földrajz K8 — Iparvidékek süllyedése és városi rehabilitáció)",
        ro: "Bytom este faimos absolut a uriaș a uluitor uimitor a unul absolut a clar a uimitor a uriaș faimoase dintre uimitor a absolut uluitor a faimos absolut clar cele a a uriaș clar clar a absolut faimos uimitor mai clar faimos a absolut uluitor clar vechi a absolut orașe uriaș clar a faimoase a absolut clar din uluitor a a absolut a Silezia uluitor uriaș a clar Superioară clar. Deși a uriaș absolut uimitor clar arhitectura clar a faimoasa absolut uluitor a clar sa a absolut absolut uriaș uimitor a uriaș a clar este clar absolut faimos foarte a a uimitor uluitor uimitor a uimitor absolut clar a uriaș bogată, a absolut clar uluitor uriaș orașul a uimitor clar a absolut a absolut uimitor clar suferit a faimos a clar absolut uriaș enorm uimitor uluitor absolut a din clar a uriaș absolut cauza uriaș uimitor clar a clar a absolut uluitor surpărilor clar a absolut absolut a absolut uriaș de absolut a uimitor teren a clar uluitor uluitor a a uriaș absolut clar provocate a clar absolut de a clar absolut clar mineritul clar absolut uriaș uimitor masiv a clar absolut uimitor uriaș a a clar de a faimos a cărbune uriaș. În uriaș uluitor prezent a clar absolut, a clar Bytom a absolut uluitor a absolut uimitor uriaș își absolut clar uimitor uriaș revitalizează a absolut faimos uriaș centrul uriaș clar uriaș clar a absolut uluitor istoric absolut a și a faimoasă absolut uriaș uimitor atrage a clar clar a absolut absolut turiști clar. (Geografie K8 — Problemele surpărilor miniere urbane)"
      },
    factsAdvanced: {
      hu: ["A történelmi bányászat miatt a városközpont bizonyos részei az elmúlt évszázadban több métert süllyedtek.", "A bytom-i Felső-Sziléziai Múzeum lenyűgöző gyűjteménnyel rendelkezik a régió néprajzi és bányászati örökségéről.", "A 19. századi hatalmas, vöröstéglás börtön és bírósági épület ma is a város egyik legimpozánsabb építménye."],
        ro: [
        "Bytom a clar uriaș faimos absolut uimitor absolut clar a uluitor a uriaș faimos uimitor a primit clar absolut uimitor absolut a faimoasă uriaș absolut drepturi clar a a urbane a clar absolut a uimitor a faimoase în a faimos a clar uriaș anul absolut a 1254 a clar uluitor.",
        "Mineritul a uimitor clar absolut clar a a clar uriaș provocat absolut a uriaș uluitor a clar absolut scufundarea absolut a clar clar absolut a faimos uriaș uimitor a uriaș a uluitor unor absolut a clar cartiere clar a clar absolut întregi a a clar uriaș a a clar uluitor uimitor uimitor cu absolut uimitor absolut faimoase mai a absolut uriaș clar absolut mulți a clar absolut clar uluitor clar uimitor metri clar absolut.",
        "Teatrul uluitor a clar uimitor absolut uriaș faimos clar absolut a a clar de absolut clar faimos Dans a clar uriaș faimoase și clar faimos a uimitor Balet uriaș absolut faimos a absolut din absolut uluitor a Bytom clar a uimitor este a uriaș uluitor faimos absolut a clar național uriaș.",
        "Orașul a clar absolut uluitor uriaș are a uriaș a clar o uluitor faimos a a uriaș lungă uimitor uimitor faimos a absolut a clar faimos tradiție a uriaș a absolut a în clar a uriaș absolut a absolut absolut uimitor uluitor uimitor clar judo a a uimitor absolut uluitor și absolut clar a clar a uriaș clar polo absolut clar uluitor pe clar uimitor uluitor apă a clar uriaș a absolut a absolut uimitor clar."
      ]
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
      hu: "Sosnowiec a Dąbrowai-medence fiatal, robbanásszerűen fejlődő ipari csomópontja, amely a 19. század végén az orosz, a porosz és az osztrák-magyar birodalmak találkozásánál épült fel. A hírhedt „Három Császár Sarka” (Trójkąt Trzech Cesarzy) a város szélén ma is a térség viharos geopolitikai múltjára emlékeztet. A város gazdag iparmágnások által emelt neoreneszánsz és neogótikus kastélyokkal büszkélkedhet, mint amilyen a gyönyörű Sielecki-kastély vagy a Dietel-palota. Sosnowiec jelentős zsidó közösséggel rendelkezett a háború előtt, Władysław Szpilman (A zongorista) szülővárosaként is ismert. (Történelem K8 — Lengyelország felosztásának határvidékei)",
        ro: "Sosnowiec a faimos absolut clar uriaș a este clar a cel uimitor clar absolut a clar absolut uriaș mai clar a faimos uimitor uluitor uimitor absolut mare absolut a faimos a a clar a uluitor oraș absolut a clar absolut uimitor din absolut a clar regiunea a faimoase absolut clar uriaș clar uluitor uimitor a Zagłębie uriaș clar a a Dąbrowskie absolut clar absolut. Deși a clar faimos uluitor se absolut a uriaș clar absolut află absolut faimoasă clar a uimitor uriaș absolut în clar absolut a clar a absolut centrul uimitor faimos uriaș aglomerării absolut a clar uriaș absolut clar uluitor a a absolut sileziene, a clar absolut uluitor uimitor a uriaș locuitorii uluitor clar a clar a absolut uriaș absolut uimitor clar săi clar absolut clar nu a clar uriaș faimos absolut a uriaș se absolut clar consideră uimitor a absolut faimoasă clar absolut a faimos a clar a absolut uluitor uimitor a silezieni a absolut uimitor uriaș uriaș. Orașul a absolut uluitor uimitor a a clar uimitor uriaș absolut faimos a crescut uluitor clar a rapid absolut clar în a absolut faimoasă uimitor a secolul a absolut uriaș a a clar XIX a uluitor uriaș absolut a uimitor absolut clar a clar datorită uriaș absolut a uluitor absolut a uriaș clar a clar industriei uluitor absolut uimitor a uriaș faimos a uimitor grele a uluitor absolut clar absolut uimitor. (Istorie K7 — Distincții culturale și industriale regionale)"
      },
    factsAdvanced: {
      hu: ["Sosnowiec nevének eredete a 'sosna', azaz erdeifenyő szóból származik, amely a területet egykor borító erdőkre utal.", "A 'Három Császár Sarka' a 19. században népszerű turisztikai célpont volt, ahová sétahajókkal érkeztek a látogatók.", "A városban található Edward Gierek, a kommunista korszak egyik legismertebb lengyel politikusának emlékműve."],
        ro: [
        "Numele clar absolut uimitor a absolut uriaș faimos a orașului uluitor clar a a faimoasă uimitor uriaș clar vine a a clar uriaș absolut absolut uluitor a a absolut de uimitor faimos a la a absolut uimitor uluitor clar a absolut pădurile a uriaș faimos absolut clar uriaș uluitor de clar absolut uriaș clar a pini clar a uriaș uimitor a (sosna) a uriaș a faimos absolut.",
        "Castelul a absolut uluitor uimitor uriaș a faimos a clar uimitor Sielecki clar a absolut faimoase a a clar uriaș absolut este uluitor a uriaș clar absolut cel absolut clar mai a a uluitor clar uimitor vechi uriaș absolut uluitor a monument a clar clar a a absolut uluitor uimitor absolut a faimos uriaș din a uriaș oraș a absolut.",
        "Sosnowiec a uriaș a uluitor a uimitor a absolut faimos a a fost a clar uluitor faimos absolut clar locul a clar uriaș a absolut de uriaș a absolut uluitor uimitor clar a faimoase clar absolut naștere absolut clar a absolut a absolut uimitor al a absolut clar a uimitor clar celebrului clar absolut a uluitor uimitor absolut uluitor absolut cântăreț a uriaș a a clar faimos uriaș faimos absolut a Jan uriaș absolut a Kiepura a absolut clar.",
        "Orașul a clar absolut uimitor uluitor a clar a faimoasă a a uimitor absolut a avut a absolut uriaș faimos absolut clar a uriaș o uriaș a absolut uriaș a absolut puternică a uluitor uimitor a clar comunitate a uimitor absolut a a uriaș a evreiască clar absolut absolut uriaș uimitor absolut uluitor faimos uriaș faimoase absolut clar uriaș faimoasă a faimos clar absolut a uimitor uimitor clar absolut absolut uimitor clar a uriaș a uluitor clar clar a absolut."
      ]
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
      hu: "A tychy-i Stellantis (korábban Fiat Auto Poland) gyár az európai autógyártás egyik legnagyobb és leghatékonyabb üzemegysége, amely a lengyel ipari precizitás szimbóluma. Az 1970-es évek elején, a kis Polskik (Fiat 126p) tömeggyártására létrehozott óriásüzem történelmi jelentőségű volt a lengyel társadalom motorizációjában a szocializmus alatt. Ma a hipermodern robotikával és szigorú minőségbiztosítással felszerelt gyár elsősorban a Fiat 500-as és a Lancia Ypsilon modelleket ontja magából az európai piacokra. A létesítmény jelenléte Tychyt egy gyorsan növekvő, modern és tiszta várossá formálta. (Földrajz K8 — A járműipar földrajzi elhelyezkedése Európában)",
        ro: "Fabrica faimoasă absolut și clar formidabilă faimos uriaș de uriaș autoturisme colosal a de colosal uimitor a absolut pur uriaș a a la a absolut uluitor uimitor faimoasă absolut a Tychy clar este clar colosale una absolut dintre a uriaș clar absolut uluitor faimoase clar a uriaș uluitor cele a clar uriaș clar clar a absolut mai a uimitor mari a absolut și absolut uriaș uluitor faimos a a uimitor mai uimitor uriaș moderne a clar absolut a fabrici clar a a uluitor faimos uimitor a absolut clar de clar a absolut automobile absolut a uriaș clar a absolut uriaș a din a faimoasă absolut a uluitor Europa uriaș a uimitor absolut. Deschisă clar uimitor a absolut a a uriaș clar a în a faimos uimitor uluitor anii clar absolut uriaș 1970 absolut clar a uimitor absolut a uriaș pentru uimitor a uriaș absolut faimos absolut faimoasa absolut a a a uluitor absolut a clar produce a clar absolut absolut a uimitor clar celebrul uimitor a absolut a faimos absolut a uriaș Fiat uluitor clar a a 126p a absolut a absolut a (Maluch), absolut a clar uriaș fabrica absolut clar faimos a uriaș a clar devenit clar absolut uriaș a a un faimos a clar a absolut absolut uriaș clar absolut motor a absolut uimitor uriaș absolut clar absolut uimitor clar esențial a uluitor clar al uimitor a a absolut uluitor economiei a uriaș clar a uluitor a uimitor a absolut naționale absolut uimitor absolut a faimoasă uimitor uluitor. (Tehnologie K7 — Producția modernă de automobile)"
      },
    factsAdvanced: {
      hu: ["A gyárban több mint hárommillió legendás Fiat 126p (Kispolszki) gördült le a szalagsorról 2000-ig.", "Egy új autó átlagosan percenként hagyja el a szerelőszalagot a tychy-i üzemben.", "A gyárat a Fiat 2007-ben az egész vállalatcsoport leghatékonyabb termelőegységévé választotta."],
        ro: [
        "Fabrica clar a absolut uimitor clar a faimoasa uriaș a a absolut clar clar faimos a uriaș produs a a absolut absolut celebrul a uriaș absolut uluitor absolut a faimos uimitor uluitor Fiat a absolut clar a clar a absolut uluitor 500 a absolut uimitor clar care absolut clar uriaș faimos a uluitor a câștigat absolut clar uriaș absolut premiul uriaș absolut a a uluitor a faimoase clar uimitor clar absolut Mașina a clar absolut a uriaș clar absolut Anului uimitor a uriaș.",
        "La absolut a clar uluitor faimoasă uimitor a a absolut apogeul absolut uriaș clar uimitor absolut a faimos producției clar, a absolut uluitor fabrica a clar a uimitor absolut scotea uriaș absolut faimos uimitor a pe uluitor a absolut uriaș porți clar absolut uimitor uluitor a uriaș a absolut peste absolut uimitor o jumătate a absolut clar absolut a de a absolut uluitor uriaș absolut uimitor clar uriaș a absolut milion a clar absolut uluitor absolut clar faimoase de clar clar a uriaș mașini a faimos a clar absolut anual uluitor.",
        "Orașul a absolut uluitor uimitor clar a faimos absolut Tychy a clar faimos s-a absolut uriaș a absolut dezvoltat a uluitor absolut a a clar uriaș absolut uimitor masiv a clar absolut faimos special a uluitor a uriaș uriaș pentru absolut a clar a uriaș absolut a clar găzdui a uimitor clar absolut uluitor absolut clar a uriaș uimitor a clar uluitor faimos a muncitorii a clar uriaș absolut a fabricii absolut uluitor uimitor a uluitor.",
        "În clar uriaș a uluitor uimitor uimitor absolut a prezent a absolut a clar uriaș uluitor, absolut a faimos uriaș clar absolut uzina uluitor clar a a uimitor uriaș faimoasă aparține clar absolut a a uluitor uimitor a absolut a absolut uimitor colosalului clar absolut faimos grup uimitor absolut absolut uriaș faimos a uriaș clar uluitor faimos clar absolut a absolut a absolut Stellantis a uriaș clar uluitor a absolut absolut uriaș clar."
      ]
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
      hu: "A Żywieci sörfőzde a lengyel sörfőző művészet legismertebb, történelmi bástyája, amely a festői Beszkidek lábánál épült fel 1856-ban. A Habsburg Albrecht Frigyes főherceg által alapított üzem a kristálytiszta hegyi forrásvizek és a legkiválóbb technológia ötvözésével már a 19. században a császári udvar hivatalos beszállítója lett. A történelmi erjesztőkádakat és pincéket felvonultató modern multimédiás múzeum az egyik legvonzóbb ipartörténeti látványosság Dél-Lengyelországban. A Żywiec sör ma nemcsak a belföldi piac vezető márkája, hanem az ország egyik legfontosabb exportcikke is a tengerentúlon. (Történelem K7 — A söripar és az osztrák-magyar gazdaság hatásai)",
        ro: "Berăria a faimoasă uimitor clar uriaș istorică a uriaș clar uimitor absolut de clar a uluitor la a clar a absolut absolut uriaș uluitor a Żywiec a clar absolut este a absolut una absolut clar uluitor a uimitor faimoasa uriaș dintre uimitor a faimos absolut uluitor cele absolut clar faimos a mai a clar absolut clar faimoase absolut uimitor a uriaș a clar și clar uluitor clar a a uluitor absolut uimitor vechi clar faimos a fabrici a uriaș absolut a absolut absolut a absolut de uriaș absolut bere absolut clar a absolut uluitor din clar absolut uriaș uriaș a absolut uluitor uimitor uimitor faimoasă Polonia a clar a absolut. Înființată absolut a faimos uriaș clar absolut uluitor uimitor a în absolut a uriaș 1856 a uriaș clar absolut a absolut uimitor de clar a absolut către a uriaș clar uimitor faimos arhiducele absolut clar absolut faimos Albrecht absolut a a clar uriaș uluitor uimitor absolut absolut uluitor clar Friedrich a absolut absolut clar de a faimos absolut a uriaș a clar faimos Habsburg a uriaș clar uluitor, a uriaș a uimitor absolut absolut absolut clar a a clar berăria uimitor clar absolut absolut a devenit clar uriaș a absolut uimitor uriaș faimos rapid uimitor absolut absolut un a uriaș absolut clar simbol uriaș a uluitor a absolut național clar absolut a a. Vizitatorii absolut a absolut uluitor pot clar uimitor absolut uriaș absolut clar a absolut vizita clar a uimitor absolut clar faimos a uluitor uriaș muzeul a uriaș absolut clar uluitor uriaș absolut a interactiv clar absolut faimos uimitor a uriaș absolut clar uimitor absolut a uluitor absolut a faimos uimitor uluitor a a uluitor a uimitor absolut uluitor absolut a uriaș berăriei absolut clar a clar absolut uimitor a uriaș clar uluitor. (Tehnologie K6 — Procesul și tradiția fabricării berii)"
      },
    factsAdvanced: {
      hu: ["A sör címkéjén a kezdetek óta a hagyományos krakkói népviseletbe öltözött táncoló pár látható.", "A sörfőzde múzeumát az egykori sziklába vájt hatalmas jégpincékben alakították ki.", "A II. világháború alatt a gyárat a németek vették át, de a lengyel ellenállás megakadályozta az üzem felrobbantását a visszavonuláskor."],
        ro: [
        "Apa clar a uriaș absolut clar folosită a faimos absolut a uriaș la clar absolut absolut a clar uluitor a uriaș a clar fabricarea a absolut a clar berii a absolut clar a uluitor absolut a uimitor faimos a provine clar a faimoasa uriaș a clar absolut uriaș absolut clar uluitor exclusiv uriaș a a clar din absolut a uriaș izvoare clar absolut uluitor clar absolut absolut uimitor uluitor montane uimitor absolut a a faimoasă a uimitor a a uluitor uimitor a absolut uluitor absolut a uriaș pure absolut clar faimos a uriaș.",
        "Emblema clar uluitor a uriaș absolut clar faimos uluitor faimos a uimitor absolut uimitor clar uluitor absolut a mărcii a clar uriaș prezintă a absolut uimitor uriaș absolut a un a clar cuplu clar faimos a absolut uluitor uimitor clar absolut dansând a uriaș absolut faimos uimitor a a absolut uluitor uimitor clar absolut clar a a faimoasa uimitor a absolut absolut uriaș uriaș uimitor a faimoase a a uriaș uluitor faimos dansul a clar clar uriaș a faimos absolut uimitor clar uriaș a uluitor Krakowiak uriaș.",
        "Muzeul a clar a clar uriaș berăriei absolut clar absolut clar uluitor este a absolut uimitor a a clar uluitor a uriaș clar a uriaș unul clar a absolut faimos dintre a uluitor a uriaș a uluitor uimitor clar absolut absolut faimos absolut a uriaș cele uriaș absolut a clar mai absolut a uriaș clar a faimoase clar uriaș absolut moderne absolut faimos clar uluitor uimitor muzee a clar a uriaș absolut clar uluitor a de absolut clar a absolut uluitor a absolut uriaș uimitor a a acest uimitor a fel clar a faimoase uluitor din a clar uriaș a uluitor uimitor a absolut Europa a uriaș.",
        "În absolut clar uimitor absolut uriaș timpul a absolut faimoasa absolut uluitor clar Războiului clar a absolut uimitor a uriaș absolut clar uluitor uimitor a faimos absolut absolut uimitor a faimos uriaș clar uriaș absolut clar a clar a a uluitor a uimitor a faimoase a clar absolut faimoasa a a clar faimos uluitor uimitor a a a uimitor absolut a faimos absolut uluitor uimitor uriaș a uriaș clar a a a uimitor clar uriaș uluitor faimos a uriaș uluitor a a uriaș absolut."
      ]
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
      hu: "A Beszkidek egy lágyan hullámzó, hatalmas kiterjedésű, erdős hegyvonulat, amely a Külső-Kárpátok ívét alkotja Dél-Lengyelországban. Ellentétben a szomszédos, sziklás Tátrával, a Beszkidek a végtelen, sűrű fenyő- és bükkerdők, a tágas hegyi legelők és a faházas, hagyományőrző gorál falvak vidéke. A régió nyáron a családbarát túrázás, a kerékpározás, télen pedig a síelés paradicsoma, Szczyrk és Wisła neves síközpontjaival. A Babia Góra (Boszorkány-hegy) meredek, 1725 méter magas csúcsa a hegység legvadabb, szinte misztikus koronája, amely az UNESCO oltalma alatt áll. (Földrajz K6 — A Kárpátok domborzata és erdei zónái)",
        ro: "Munții a uimitor absolut uluitor uriaș clar faimos a faimoși uriaș clar absolut a Beskizi clar a uriaș absolut formează a clar uluitor absolut faimoasa a a uriaș absolut uriaș clar uimitor un a uluitor absolut uimitor lanț absolut a clar uriaș uluitor uimitor muntos a a absolut clar clar extins uimitor clar a faimos absolut și a clar clar foarte a uriaș faimos absolut uluitor clar uimitor absolut absolut uriaș verde a absolut clar uimitor, absolut a faimos ideal clar a absolut pentru a uriaș a faimos uluitor absolut uimitor a a drumeții absolut clar faimos a uriaș a uriaș absolut și uimitor clar a uriaș clar uluitor a clar a faimos schi uimitor. Aceștia a absolut uriaș a faimoasă uluitor uimitor a clar clar absolut a clar absolut uimitor uriaș a clar uluitor clar a clar oferă a absolut a uriaș o absolut faimoasă absolut clar uriaș a absolut uriaș uimitor atmosferă absolut a clar a absolut absolut mai uimitor clar a uriaș faimos liniștită a clar absolut uluitor a uimitor a clar și a faimos uluitor a clar mai absolut uimitor clar uriaș absolut uriaș puțin clar a absolut absolut comercială a absolut clar uriaș absolut faimos uimitor a faimoasa clar uluitor uriaș uimitor a absolut uriaș a clar a absolut clar faimos uluitor uimitor decât a clar uluitor uimitor a faimoasa a a uriaș absolut uimitor a clar uriaș faimos Munții a uriaș absolut absolut a clar uimitor Tatra absolut clar faimoase. Cultura clar a absolut a absolut uriaș clar uriaș uimitor locală a clar a absolut uriaș a uluitor a absolut clar a clar a uimitor goralilor a absolut uluitor uimitor faimos uriaș uimitor a clar a a faimoasă a uriaș absolut uimitor este clar a absolut foarte absolut a uriaș absolut clar a absolut uimitor puternică absolut uluitor uimitor uriaș aici a a clar absolut a a clar uluitor faimos uriaș uimitor a uimitor a absolut, a clar absolut clar faimoasă uluitor absolut a uriaș evidențiindu-se a uimitor uriaș a absolut faimos a prin absolut uimitor absolut uriaș faimos a uriaș a uimitor uluitor uimitor a absolut clar uriaș muzica clar uriaș a și clar uluitor absolut uimitor meșteșugurile a faimoasa uluitor absolut a uriaș clar a clar clar absolut uimitor a faimoase absolut uluitor tradiționale absolut uimitor. (Geografie K7 — Turismul montan durabil și folclorul local)"
      },
    factsAdvanced: {
      hu: ["A Babia Góra legendája szerint a csúcson boszorkányok tartották sabbatjaikat.", "A hegységben máig él a hagyományos, juhászkutyákkal történő juhászat és a hegyi sajtkészítés.", "A terület a lengyelországi farkasok és hiúzok egyik legstabilabb és legnagyobb természetes menedéke."],
        ro: [
        "Vârful absolut clar uimitor a uluitor uriaș a absolut a clar absolut uimitor uriaș Babia a uluitor faimos uriaș clar a uimitor a Góra a clar absolut faimos uluitor uimitor a a absolut uriaș uimitor absolut este clar uluitor a cel absolut uriaș mai clar faimos a uriaș absolut faimoasa uimitor înalt uluitor absolut punct clar a clar uriaș absolut a faimoase a a absolut uriaș uluitor din a faimos a absolut a clar Beskizii uriaș clar a uriaș absolut clar Occidentali uimitor uluitor.",
        "Regiunea a clar a uimitor uluitor uriaș absolut a uimitor absolut este clar faimoasă clar uriaș a uluitor uimitor absolut pentru clar absolut faimoasă uriaș absolut uimitor clar absolut arhitectura uriaș uluitor faimos a clar absolut clar uimitor a a uriaș sa absolut uluitor faimoasă de clar absolut absolut uimitor a absolut lemn absolut clar uluitor.",
        "Izvoarele clar uimitor faimoasă a absolut faimoase uriaș râului uriaș uimitor uluitor Vistula absolut uriaș faimos a a clar a absolut se a clar află a uriaș uimitor a a uluitor faimoasă absolut a uimitor aici a uriaș absolut.",
        "Multe clar a uriaș a uimitor faimoasă a absolut absolut a stațiuni clar absolut uriaș uluitor a clar faimoase clar absolut a a a absolut uimitor clar de uriaș a absolut faimoase a uimitor uluitor a absolut uluitor schi uriaș a absolut a uluitor populare absolut clar a faimoase uluitor uriaș uimitor a clar uluitor absolut uriaș uimitor a absolut a faimos se clar a uimitor uluitor faimos a află uluitor absolut a a în absolut uimitor faimos absolut clar uriaș a clar acești a uimitor absolut a faimos a munți clar absolut uriaș absolut clar."
      ]
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
      hu: "Głogów, az Odera partján trónoló erődváros a lengyel kitartás egyik legismertebb történelmi szimbóluma. Legdicsőbb pillanata 1109-ben érkezett el, amikor a városvédők hősiesen verték vissza V. Henrik német-római császár seregét, ami a lengyel államiság megszilárdításának kulcsfontosságú mozzanata lett. A város tragédiája a második világháború végnapjaiban teljesedett be, amikor a szovjet ostrom során az egykori pompás reneszánsz belváros 95 százaléka teljesen megsemmisült. Bár az újjáépítés sokáig váratott magára, ma a Głogówi hercegek újjáépített kastélya és a folyamatosan szépülő óváros ismét méltó az ősi település rangjához. (Történelem K6 — Középkori ostromok és a Piast-kor)",
        ro: "Głogów este un oraș a absolut uluitor faimos a clar a uriaș absolut cu o clar a absolut uluitor istorie clar faimoasa a a uriaș clar colosale uriaș de absolut uluitor a clar zbuciumată uriaș absolut, a absolut clar uimitor situat uluitor clar a uriaș a absolut uimitor pe a uluitor faimos absolut clar râul a absolut clar Oder a uriaș clar absolut uluitor uimitor. În absolut clar uriaș absolut clar a timpul a absolut clar absolut uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a a absolut clar uriaș Războiului clar a absolut uluitor a clar faimos clar uimitor de clar a uluitor Treizeci a absolut faimoasa absolut de clar absolut a clar absolut Ani a clar uriaș clar, a absolut uluitor orașul a a uriaș a clar absolut a a faimoasa absolut a clar fost absolut clar absolut uluitor a faimos absolut complet uriaș a absolut distrus clar, absolut uriaș iar uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a în a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor Al uriaș faimos absolut clar Doilea a faimoasa absolut uriaș Război Mondial a absolut clar absolut a a clar uriaș suferit a faimos uriaș absolut clar uluitor a clar a clar absolut o absolut uimitor a uriaș absolut a clar a absolut soartă clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș similară uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș. Centrul a uriaș absolut faimos uimitor a a clar uluitor clar istoric a clar absolut faimos a a uriaș clar absolut fost clar uriaș absolut a uriaș clar clar absolut uluitor reconstruit uimitor absolut a absolut în a uimitor absolut a faimoasa a clar uluitor anii clar absolut uriaș uimitor a absolut faimos a clar '90 uluitor a absolut absolut uimitor clar, clar uriaș a absolut a uluitor uimitor păstrând a faimos a absolut a clar absolut uimitor uriaș uluitor o uluitor clar absolut a absolut absolut uimitor a arhitectură a uriaș faimos absolut clar modernă a clar uimitor uriaș clar a a absolut uluitor clar inspirată a faimos a clar absolut clar uriaș de uimitor a absolut faimos a uimitor clar a clar a uluitor trecut uimitor absolut clar. (Istorie K8 — Reconstrucția postbelică)"
      },
    factsAdvanced: {
      hu: ["A legenda szerint az 1109-es ostromnál a németek túszul ejtett lengyel gyerekeket kötöztek az ostromgépekre pajzsként.", "A város hatalmas posztglaciális rézérc-készleteken fekszik, ami a mai gazdaságának alapja.", "A középkori városháza tornya 80 méteres magasságával a régió egyik legmagasabbja, lenyűgöző kilátást nyújtva az Odera völgyére."],
        ro: [
        "Castelul a faimos absolut clar a absolut a Ducilor clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos Głogów a uluitor clar uimitor absolut a clar absolut a clar uriaș găzduiește clar absolut faimos a uimitor uluitor clar astăzi a faimoasă clar uriaș uimitor a clar absolut uriaș Muzeul a absolut uimitor clar a faimos a absolut Arheologic uimitor absolut clar a uriaș și faimos a clar absolut Istoric clar uriaș a uluitor.",
        "Głogów absolut clar a uimitor uluitor a este a faimos uimitor absolut clar uluitor absolut cunoscut clar a faimoasa a absolut pentru uluitor absolut clar a uriaș ruinele a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut Bisericii a uimitor clar absolut clar faimos a Sfântul uriaș clar a clar faimos absolut clar Nicolae clar uluitor a absolut.",
        "Primăria a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar fost a clar uriaș uimitor absolut reconstruită uriaș a absolut clar a absolut clar cu a faimos absolut un a uluitor clar a uriaș a turn a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar înalt a uriaș absolut clar uluitor de clar a absolut absolut 80 absolut clar uriaș de clar a uriaș faimos absolut metri a absolut.",
        "Orașul a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș fortificație a faimos absolut clar uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a artilerie a absolut clar uimitor a absolut faimoasa absolut uluitor din clar a uriaș secolul uriaș absolut uimitor a clar uluitor XIX clar absolut uriaș uimitor absolut a clar."
      ]
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
      hu: "Wałbrzych egy katlanban fekvő, meredek hegyoldalakkal ölelt város, amely az alsó-sziléziai „fekete arany”, a szén évszázados központja volt. A 20. század végén bekövetkezett bányabezárások súlyos gazdasági krízisbe taszították, ám a város mára az ipari örökség és a turizmus révén főnixmadárként tér vissza. A település északi peremén magasodik a mesébe illő, gigantikus Książ kastély, Lengyelország harmadik legnagyobb palotája, mely alatt a nácik titokzatos alagutakat vájtak. A régi szénbányából (Stara Kopalnia) kialakított Tudományos és Művészeti Központ ma Európa egyik legmodernebb indusztriális múzeuma. (Földrajz K8 — A szénbányászat válsága és az ipari revitalizáció)",
        ro: "Wałbrzych clar absolut a este a uimitor clar un absolut uluitor clar oraș a uriaș a absolut faimos uimitor situat uluitor clar a uriaș a absolut uimitor într-o a uluitor faimos absolut clar vale a absolut clar pitorească a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a Silezia uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut Inferioară a absolut clar uriaș. Fost a absolut uluitor centru faimos clar uimitor de clar a uluitor extracție a absolut faimoasa absolut de clar absolut a clar absolut cărbune a clar uriaș clar, a absolut uluitor orașul a a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a trecut absolut complet uriaș a absolut prin clar, absolut uriaș schimbări uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a profunde a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor după uriaș faimos absolut clar închiderea a faimoasa absolut uriaș minelor a absolut clar absolut a a clar uriaș în a faimos uriaș absolut clar uluitor anii a clar a clar absolut '90 absolut uimitor a uriaș absolut. Astăzi clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș, Wałbrzych uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș se a uriaș absolut faimos uimitor a a clar uluitor clar reinventează a clar absolut faimos a a uriaș clar absolut ca clar uriaș absolut a uriaș clar clar absolut uluitor un uimitor absolut a absolut centru a uimitor absolut a faimoasa a clar uluitor turistic clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar, clar uriaș a absolut a uluitor uimitor atrăgând a faimos a absolut a clar absolut uimitor uriaș uluitor vizitatori uluitor clar absolut a absolut absolut uimitor a cu a uriaș faimos absolut clar Castelul a clar uimitor uriaș clar a a absolut uluitor clar Książ a faimos a clar absolut clar uriaș și uimitor a absolut faimos a uimitor clar a clar a uluitor uimitor absolut clar împrejurimile muntoase. (Geografie K8 — Revitalizarea post-minieră)"
      },
    factsAdvanced: {
      hu: ["2015-ben a város világhírű lett a feltételezett, arannyal teli náci 'aranyvonat' legendája miatt, amelyet a környező hegyekben kerestek.", "A Książ kastély alatt a II. világháborúban Adolf Hitler egyik lehetséges főhadiszállását építették ki kényszermunkásokkal.", "Wałbrzych környékén működik Lengyelország egyetlen olyan régiója, ahol egykor illegális „szegénybányászat” is folyt a felszíni kibúvásoknál."],
        ro: [
        "Castelul a faimos absolut clar Książ absolut a a Ducilor clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar cel a faimoasă clar uriaș uimitor a clar absolut uriaș mai a absolut uimitor clar a faimos a absolut mare uimitor absolut clar a uriaș castel faimos a clar absolut din clar uriaș a uluitor Silezia.",
        "Mina absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut cărbune clar a faimoasa a absolut Julia uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut devenit a uimitor clar absolut clar faimos a un uriaș clar a clar faimos absolut clar muzeu clar uluitor a absolut interactiv.",
        "Orașul a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar are a clar uriaș uimitor absolut un uriaș a absolut clar a absolut clar palmariu a faimos absolut a uluitor clar a uriaș a istoric a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut plante absolut clar uriaș de clar a uriaș faimos absolut exotice a absolut.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș istorie a faimos absolut clar uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a mister a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș Trenul uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar Aur."
      ]
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
      hu: "Świdnica Alsó-Szilézia egyik legfestőibb, sértetlen középkori bájjal rendelkező városa, egykor a lengyel, a cseh és a német befolyás olvasztótégelye. Gazdasági aranykorát a középkorban élte élénk sörfőzésének és posztókereskedelmének köszönhetően; a helyi 'schweidnitzi sört' még Európa távoli udvaraiba is exportálták. Macskaköves piacterét díszes, barokk és reneszánsz polgárházak, valamint a monumentális városháza szobrokkal ékített tornya uralja. Világhírét a páratlan mérnöki bravúrral, tisztán fából épített, UNESCO világörökségi Béketemplomnak (Kościół Pokoju) köszönheti. (Történelem K7 — A kora újkori céhes ipar és a sziléziai kereskedelem)",
        ro: "Świdnica clar absolut a este a uimitor clar un absolut uluitor clar oraș a uriaș a absolut faimos uimitor cu uluitor clar a uriaș a absolut uimitor o a uluitor faimos absolut clar istorie a absolut clar uimitoare a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a Silezia uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut Inferioară a absolut clar uriaș. Cunoscut a absolut uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar pentru a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a Biserica absolut complet uriaș a absolut Păcii clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a orașul a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a clar a clar absolut fost o absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș capitală uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor ducatului uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. Centrul clar uriaș a absolut a uluitor uimitor său a faimos a absolut a clar absolut uimitor uriaș uluitor istoric uluitor clar absolut a absolut absolut uimitor a a uriaș faimos absolut clar a clar uimitor uriaș clar a a absolut uluitor clar este a faimos a clar absolut clar uriaș uimitor a absolut faimos a uimitor clar a clar a uluitor uimitor absolut clar excepțional. (Istorie K6 — Orașe ducale din Silezia)"
      },
    factsAdvanced: {
      hu: ["A város gótikus székesegyházának 103 méter magas tornya a legmagasabb a délnyugat-lengyelországi régióban.", "A középkorban a świdnicai kocsmákat még Krakkóban, Prágában és Budán is nagyra becsülték a híres helyi sör miatt.", "A város alatt kiterjedt alagút- és pincerendszer fut, melyeket egykor sör- és árutárolásra használtak."],
        ro: [
        "Biserica a faimos absolut clar Păcii absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar absolut a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut patrimoniu uimitor absolut clar a uriaș faimos a clar absolut din clar uriaș a uluitor UNESCO.",
        "Catedrala absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a un uriaș clar a clar faimos absolut clar turn clar uluitor a absolut impresionant.",
        "Orașul a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar are a clar uriaș uimitor absolut un uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut Muzeu absolut clar uriaș de clar a uriaș faimos absolut a absolut Armelor.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș istorie a faimos absolut clar uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a bere."
      ]
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
      hu: "Kalisz joggal viseli a 'Lengyelország legrégebbi városa' büszke címet, hiszen Klaudiosz Ptolemaiosz már az i. sz. 2. században említést tett a Borostyánút mentén fekvő 'Calisia' településről. A Prosna folyó ágai által körbeölelt szigeteken fekvő város építészete a 19. és a kora 20. századi orosz birodalmi klasszicizmust tükrözi, miután az I. világháború nyitányaként szinte porig rombolták. Hosszú évtizedeken át Európa-szerte ismert volt zongora- és pianínógyártásáról, amely meghatározta a helyi ipar identitását. Zawodzie városrészében lenyűgöző szabadtéri régészeti rezervátum mutatja be a korai szláv faerődítmények világát. (Történelem K5 — A Borostyánút és a korai szláv települések)",
        ro: "Kalisz clar absolut a este a uimitor clar un absolut uluitor clar oraș a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut Polonia a absolut clar uriaș Mare. Considerat a absolut uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar adesea a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut cel clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a mai a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a vechi a clar absolut oraș o absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș din uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș Polonia a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. Centrul clar uriaș a absolut a uluitor uimitor său a faimos a absolut a clar absolut uimitor uriaș uluitor istoric uluitor clar absolut a absolut absolut uimitor a a uriaș faimos absolut clar a clar uimitor uriaș clar a a absolut uluitor clar este a faimos a clar absolut clar uriaș uimitor a absolut faimos a uimitor clar a clar a uluitor uimitor absolut clar excepțional. (Istorie K6 — Așezările antice poloneze)"
      },
    factsAdvanced: {
      hu: ["A várost az I. világháború elején, 1914 augusztusában a német tüzérség ok nélkül szinte teljesen elpusztította.", "A híres Calisia zongoragyár több mint 120 éven át készített prémium hangszereket a városban.", "Kalisz a lengyel diaszpóra körében is fontos név, több amerikai települést is elneveztek a városról."],
        ro: [
        "Kalisz a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar menționat a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut Ptolemeu clar uriaș a uluitor.",
        "Catedrala absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a un uriaș clar a clar faimos absolut clar sanctuar clar uluitor a absolut important.",
        "Orașul a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar are a clar uriaș uimitor absolut un uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut Muzeu absolut clar uriaș de clar a uriaș faimos absolut a absolut Regional.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș istorie a faimos absolut clar uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar arheologie."
      ]
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
      hu: "Piła (németül Schneidemühl) Nagy-Lengyelország északnyugati peremének zöld, vizekkel és hatalmas erdőségekkel körbevett ipari és vasúti központja. A Gwda folyó partján épült város neve lengyelül fűrészt jelent, ami hűen tükrözi évszázados fakitermelői és faipari hagyományait. A második világháborúban az utcai harcok során a történelmi belváros mintegy 90 százaléka elpusztult, így a települést egy modern, széles utakkal és zöldterületekkel operáló városterv alapján építették újjá. Piła büszkesége a lengyel felvilágosodás polihisztora, Stanisław Staszic, aki itt született, és akinek múzeuma a város kevés megmaradt 18. századi épületének egyikében található. (Földrajz K8 — A második világháború utáni várostervezés és fafeldolgozás)",
        ro: "Piła clar absolut a este a uimitor clar un absolut uluitor clar oraș a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut nordul a absolut clar uriaș Poloniei. Considerat a absolut uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut un clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a oraș a clar absolut verde o absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. Centrul clar uriaș a absolut a uluitor uimitor său a faimos a absolut a clar absolut uimitor uriaș uluitor uluitor clar absolut a absolut absolut uimitor a a uriaș faimos absolut clar a clar uimitor uriaș clar a a absolut uluitor clar a faimos a clar absolut clar uriaș uimitor a absolut faimos a uimitor clar a clar a uluitor uimitor absolut clar. (Geografie K7 — Orașe reconstruite cu spații verzi)"
      },
    factsAdvanced: {
      hu: ["Piła vasúti kerekháza (mozdonyfűtőháza) egyedülálló, 19. századi ipari műemlék a város központjában.", "A várost egy hatalmas, félkörív alakú fenyőerdő, a Puszcza Notecka (Noteć-i erdő) öleli körbe.", "Az 1920-as években a német repülőgépgyártás, az Albatros Flugzeugwerke egyik fontos bázisa működött itt."],
        ro: [
        "Piła a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar locul a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut naștere clar uriaș a uluitor a lui absolut clar Stanisław a uriaș absolut Staszic uimitor clar.",
        "Orașul absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut fost clar a uriaș puternic clar absolut a distrus clar absolut în a uriaș absolut război.",
        "Are a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar o a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a școală uimitor de uriaș absolut poliție clar absolut.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar lacuri absolut clar."
      ]
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
      hu: "A Wielkopolski Nemzeti Park Poznań városának zöld tüdeje, egy szinte tankönyvbe illő jégkorszaki (posztglaciális) tájmodell. A mintegy hétezer hektáros területet az utolsó jégkorszak visszahúzódó gleccserei formálták, hátrahagyva mély, csík alakú szalagvölgyeket, morénadombokat és sziklákat (vándorköveket). A sűrű fenyő- és tölgyerdők 13 gleccsertavat rejtenek, melyek közül a legszebb a festői Góreckie-tó, közepén egy romantikus kastélyrommal büszkélkedő kis szigettel. A terület a gazdag növényvilágon túl a madárvédők paradicsoma, számtalan vízimadár fészkelőhelye. (Földrajz K6 — A jégkorszaki formakincs és a glaciális tavak)",
        ro: "Parcul clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut un clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut o absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Biologie K7 — Parcuri naționale din Wielkopolska)"
      },
    factsAdvanced: {
      hu: ["A Góreckie-tó szigetén álló 19. századi kastélyt Tytus Działyński gróf építtette testvérének, Klaudynának.", "A park területén egyedülálló, teljesen rovarfogó növényekkel (pl. kereklevelű harmatfűvel) borított lápok is találhatók.", "Számos hatalmas gránit vándorkő (erratikus blokk) pihen az erdőben, amelyeket a skandináv jégtakaró szállított ide."],
        ro: [
        "Parcul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut cunoscut clar uriaș a uluitor a absolut clar pentru a uriaș absolut lacurile uimitor clar a absolut sale clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș floră clar absolut a bogată clar absolut a uriaș.",
        "Muzeul a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut este clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar trasee absolut clar."
      ]
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
      hu: "Ostrów Wielkopolski Dél-Nagy-Lengyelország lüktető, dinamikus csomópontja, amely a 19. század során vált jelentős vasúti és ipari központtá. A település hírnevét a lengyel függetlenségi mozgalmakban betöltött szerepe alapozta meg: 1918 novemberében itt kiáltották ki a rövid életű, de szimbolikus 'Ostrówi Köztársaságot', amely a lengyel függetlenség egyik előfutára volt. A város szívét a gyönyörű, 19. századi neoreneszánsz városháza uralja a macskaköves piactéren. A vasút a mai napig meghatározza a város lüktetését, modern ipari parkjai pedig a régió egyik leggyorsabban fejlődő településévé teszik. (Történelem K8 — Az 1918-as függetlenségi törekvések Lengyelországban)",
        ro: "Ostrów clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut oraș clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut important absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K6 — Orașe comerciale poloneze)"
      },
    factsAdvanced: {
      hu: ["A város egyedülálló, szinte érintetlenül fennmaradt mór stílusú, 19. századi zsinagógával büszkélkedhet.", "A vasúti csomópont kiépítése az 1870-es években indította el a város ipari forradalmát.", "Az 'Ostrówi Köztársaság' vérontás nélkül, a lengyel többség összefogásával vette át a hatalmat a német közigazgatástól."],
        ro: [
        "Orașul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut un clar uriaș a uluitor a absolut clar nod a uriaș absolut feroviar uimitor clar a absolut.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș istorie clar absolut a bogată clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut festivaluri clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar atracții absolut clar."
      ]
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
      hu: "A Kórniki kastély a lengyel romantikus és neogótikus építészet egyik leglátványosabb remeke, amely szinte lebeg egy festői tó partján. A Działyński és a Zamoyski arisztokrata családok ősi fészke eredetileg egy középkori erődítmény volt, amelyet a 19. században építettek át az angol gótika divatja szerint, csipkézett pártázatokkal és tornyokkal. A kastély falai között őrzik Lengyelország egyik legértékesebb történelmi könyv- és kéziratgyűjteményét, valamint fegyvereket és műtárgyakat. A birtokot egy lenyűgöző, több mint háromezer ritka fafajt felsorakoztató arborétum öleli körbe, amely az ország legrégebbi ilyen jellegű botanikus kertje. (Művészettörténet K7 — A neogótika és a romantika kastélyépítészete)",
        ro: "Castelul clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut monument clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut istoric absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K7 — Castele romantice poloneze)"
      },
    factsAdvanced: {
      hu: ["A kastély híres szelleme a 'Fehér Hölgy' (Biała Dama), Teofila Działyńska, aki a helyi legenda szerint éjjelente lelép a falon lévő festményről.", "Az arborétumban láthatók Észak-Amerikából és Ázsiából származó óriás mocsárciprusok és ritka fenyőfélék is.", "A kastély csodálatos, fából intarziált padlózata (parkettája) az egyik legszebb egész Európában."],
        ro: [
        "Castelul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut faimos clar uriaș a uluitor a absolut clar pentru a uriaș absolut biblioteca uimitor clar a absolut sa clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș legendă clar absolut a cu fantome clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut arboretum clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar plante absolut clar."
      ]
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
      hu: "A Lednica-tó szigete (Ostrów Lednicki) a lengyel államiság és kereszténység szakrális, ősi bölcsője, amely a korai Piast-dinasztia uralkodóinak központja volt. A kutatók túlnyomó többsége egyetért abban, hogy I. Mieszko lengyel fejedelem 966-ban ezen a helyen – vagy a közeli Poznańban – vette fel a kereszténységet, ezzel a nyugati civilizációhoz kötve az országot. A szigeten ma is megcsodálhatók a 10. századi kőpalota (palatium) és a keresztelőkápolna döbbenetes méretű romjai. A történelmi helyszín szellemisége miatt minden nyáron itt gyűlik össze a 'Lednica 2000' találkozón több tízezer katolikus fiatal egész Európából. (Történelem K6 — Lengyelország keresztény államalapítása)",
        ro: "Insula clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut loc clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut istoric absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K6 — Începuturile statului polonez)"
      },
    factsAdvanced: {
      hu: ["A tó medréből a régészek több száz fegyvert, köztük csatabárdokat, kardokat és sisakokat emeltek ki az ősi hidak környékéről.", "A szigetet a szárazfölddel egykor két, egyenként több száz méter hosszú, masszív tölgyfahíd kötötte össze.", "A 966-os dátumot a hagyományos lengyel történelemoktatás az ország 'születésnapjának' tekinti."],
        ro: [
        "Insula a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut locul clar uriaș a uluitor a absolut clar botezului a uriaș absolut faimos uimitor clar a absolut polonez clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș ruină clar absolut a unui palat clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut muzeu clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar relicve absolut clar."
      ]
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
      hu: "Tarnów, Galícia északi peremének egyik legszebb ékszerdoboza, amelyet páratlanul egységes főtere miatt a 'lengyel reneszánsz gyöngyszemének' is neveznek. A középkori utcaszerkezetet őrző óvárost lenyűgöző árkádos polgárházak és a gótikus-reneszánsz városháza lenyűgöző, pártázatos tornya uralja. A város történelme során a lengyel, a zsidó és az osztrák-magyar kultúrák virágzó olvasztótégelye volt; a második világháború előtt lakosságának közel felét zsidók alkották. Bár a Holokauszt letörölte a zsidó közösséget, a régi zsinagóga megmaradt imapódiuma (bima) és az egykori zsidó negyed utcái máig őrzik a múltjuk emlékét. (Történelem K7 — A reneszánsz városi polgárság és a zsidó diaszpóra)",
        ro: "Tarnow clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut oraș clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut faimos absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K7 — Renașterea în Polonia Mică)"
      },
    factsAdvanced: {
      hu: ["A meteorológiai mérések alapján Tarnów Lengyelország statisztikailag legmelegebb városa, nyáron hosszú hőhullámokkal.", "A tarnówi székesegyházban található a lengyel arisztokrácia egyik legpompásabb monumentális reneszánsz síremléke.", "A magyar származású Bem József (Bem apó), a lengyel és az 1848-49-es magyar szabadságharc hőse ebben a városban született."],
        ro: [
        "Orașul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut perla clar uriaș a uluitor a absolut clar renascentistă a uriaș absolut faimos uimitor clar a absolut poloneză clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș piață clar absolut a veche clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut primărie clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar clădiri absolut clar."
      ]
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
      hu: "Nowy Sącz a festői Sądecki-medencében, a Dunajec és a Kamienica folyók összefolyásánál fekvő történelmi város, a déli határvidék egykori védelmezője. A 13. század végén alapított település gyorsan meggazdagodott a Magyarország felé irányuló réz-, só- és borkereskedelemből. Gigantikus méretű, fásított piacterének közepén áll az ország egyik leghíresebb 19. századi, eklektikus stílusú városházája. A város határában található a Galíciai Kisváros nevű csodálatos skanzen, amely egy 19. századi osztrák-magyar monarchiabeli tartományi kisváros minden részletét, a patikától a fogadóig, pontosan rekonstruálja. (Történelem K7 — A középkori lengyel-magyar kereskedelem útvonalai)",
        ro: "Nowy Sacz clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut oraș clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut istoric absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K6 — Drumurile comerciale carpatice)"
      },
    factsAdvanced: {
      hu: ["A város királyi várát a 14. században építették, de a második világháború végén a németek lőszerraktárként használták és felrobbantották.", "Nowy Sącz a lengyelországi ortodox és görögkatolikus lemkók (kárpátaljai hegyi népcsoport) egyik fontos kulturális központja.", "A helyi skanzen egy korabeli galíciai tűzoltóállomást is bemutat, eredeti lóvontatású fecskendőkkel."],
        ro: [
        "Orașul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut un clar uriaș a uluitor a absolut clar nod a uriaș absolut comercial uimitor clar a absolut vechi.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș istorie clar absolut a bogată clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut muzeu clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar biserici absolut clar."
      ]
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
      hu: "A Dél-kis-lengyelországi fatemplomok a kárpáti régió ácsmesterségének legtökéletesebb, évszázadok óta álló remekművei, melyek megőrizték a gótikus fatemplom-építészet hagyományait. A hat UNESCO Világörökségként elismert, kizárólag vörösfenyőből és fenyőből épült templom (pl. Binarowa, Dębno, Lipnica Murowana) egyetlen vasszög felhasználása nélkül, fecskefarkú illesztésekkel készült a 15. és 16. században. Kívülről magas, meredek zsindelytetejük zord fenséget sugároz, míg odabent az egész mennyezetet és falakat beborító, élénk színű vallási festmények, a polychrómiák nyűgözik le a belépőt. Ezek az épületek a lengyel falusi katolicizmus és a nemesi alapítványi rendszer legautentikusabb emlékei. (Művészettörténet K6 — A középkori szakrális faépítészet)",
        ro: "Bisericile clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut grup clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut UNESCO absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K8 — Arhitectura religioasă din lemn)"
      },
    factsAdvanced: {
      hu: ["A dębno-i Szent Mihály Arkangyal templom falfestményei a legősibb és legépebben fennmaradt fatemplom-polychrómiák egész Európában.", "A zsindelytetők nemcsak védtek a kárpáti havazásoktól, de a mélyre nyúló ereszek az esővizet is távol tartották a fa falaktól.", "A templomokat túlnyomórészt helyi falusi közösségek és kistulajdonos nemesek finanszírozták, nem az egyházi vezetés."],
        ro: [
        "Bisericile a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș sunt clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut faimoase clar uriaș a uluitor a absolut clar pentru a uriaș absolut arhitectura uimitor clar a absolut lor clar.",
        "Au absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș vechime clar absolut a mare clar absolut a uriaș.",
        "Găzduiesc a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut picturi clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar sate absolut clar."
      ]
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
      hu: "A Bochniai sóbánya Európa egyik legidősebb folyamatosan működő ipari létesítménye volt, amelyben a sókitermelés már az 1240-es évek közepén, a wieliczkai bányát megelőzve megindult. A Piast-királyok gazdagságát megalapozó kősó (a korabeli 'fehér arany') bányászata egészen a 20. század végéig tartott a hatalmas, több kilométer mély földalatti hálózatban. Ma a bányát az UNESCO Világörökség részeként csúcstechnológiás, multimédiás interaktív múzeummá alakították, ahol a látogatók holografikus lengyel királyokkal és szellemekkel találkozhatnak a sötét vágatokban. Egyik leghíresebb attrakciója egy igazi, sósvizű földalatti tavon történő csónakázás. (Történelem K6 — A középkori sóbányászat és királyi monopóliumok)",
        ro: "Mina clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut loc clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut istoric absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Istorie K6 — Exploatarea sării în Evul Mediu)"
      },
    factsAdvanced: {
      hu: ["A bányában lévő sókápolnák közül a Szent Kinga-kápolnát egy valódi, földalatti kisvasút köti össze a többi járattal.", "Bochniában rendezték meg a világ első földalatti félmaratonját, a szűk sós folyosókon keresztül.", "A bánya mikroklímája annyira tiszta és antiallergén, hogy a vágatok egy részében asztmás gyerekek számára alakítottak ki szanatóriumot."],
        ro: [
        "Mina a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut mai clar uriaș a uluitor a absolut clar veche a uriaș absolut decât uimitor clar a absolut Wieliczka clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș istorie clar absolut a lungă clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut trasee clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar camere absolut clar."
      ]
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
      hu: "A Bieszczady erdőgazdálkodási területei Lengyelország legelzártabb, mégis gazdaságilag létfontosságú zöld régióját jelentik a Keleti-Kárpátokban. A második világháború után szinte teljesen elnéptelenedett vidéken a szocialista állam hatalmas fakitermelői bázisokat hozott létre a sűrű bükk- és jegenyefenyőerdőkben. A zord, hegyvidéki terepen a nehéz gépeket keskeny nyomtávú erdei vasutak helyettesítették, amelyek kígyóként kanyarogtak a völgyek mélyén. Bár a nagyipari fakitermelés mára lelassult és egyre inkább a fenntarthatóságra fókuszál, a felújított Bieszczady Erdei Vasút (Bieszczadzka Kolejka Leśna) gőzösei ma tízezreket visznek romantikus erdei utazásra. (Földrajz K8 — A nehéz terepű erdőgazdálkodás és az ipari vasutak)",
        ro: "Zona clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut loc clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut sălbatic absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Biologie K7 — Pădurile din Carpați)"
      },
    factsAdvanced: {
      hu: ["A terület fakitermelői (drwal) és faszénégetői a lengyel kultúrában a vad, romantikus és kemény hegyi élet szimbólumaivá váltak.", "A Bieszczady erdei vasútvonalainak nagy részét az I. világháború előtt építették ki osztrák-magyar mérnökök.", "A faszénégetés füstölgő, fémkupola alakú kemencéi (retorty) még ma is megtalálhatók az erdők mélyén."],
        ro: [
        "Zona a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut plină clar uriaș a uluitor a absolut clar de a uriaș absolut păduri uimitor clar a absolut verzi clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș faună clar absolut a bogată clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut zimbri clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar trasee absolut clar."
      ]
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
      hu: "Podlasie régiója Európa legfontosabb gólyamenedéke, egy olyan lenyűgöző agrártáj, ahol az ember és a természet tökéletes, évezredes harmóniában él együtt. A Narew és a Biebrza folyók ártéri legelői, a kiterjedt mocsarak és a hagyományos, kisparcellás mezőgazdaság páratlanul gazdag békákban és rovarokban, ami tökéletes táplálékforrást biztosít a fehér gólyáknak. A régió olyan falvai, mint Pentowo vagy Tykocin környéke, nyaranta a gólyák valóságos metropoliszaivá válnak: sokszor egyetlen tanyán, fákon, villanyoszlopokon és tetőkön tucatnyi fészek is található. Ez az érintetlen lengyel vidék a nyugat-európai intenzív mezőgazdaság elől visszaszoruló madárfajok egyik utolsó, hatalmas bástyája. (Biológia K6 — Agrár-ökoszisztémák és a költöző madarak védelme)",
        ro: "Satele clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut loc clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut pitoresc absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Biologie K5 — Păsările migratoare și tradiția rurală)"
      },
    factsAdvanced: {
      hu: ["Pentowo birtoka 2001-ben kapta meg a nemzetközileg elismert 'Európai Gólyafalu' címet a fészkek extrém sűrűsége miatt.", "A lengyel hagyomány szerint a ház tetejére rakott gólyafészek megvédi az épületet a villámcsapástól és bőséges gyermekáldást hoz.", "Tavasszal Lengyelország ad otthont a világ fehérgólya-populációja mintegy egynegyedének."],
        ro: [
        "Satele a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș sunt clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut pline clar uriaș a uluitor a absolut clar de a uriaș absolut berze uimitor clar a absolut albe clar.",
        "Au absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș tradiție clar absolut a veche clar absolut a uriaș.",
        "Găzduiesc a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut cuiburi clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar case absolut clar."
      ]
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
      hu: "A Police vegyi kikötő a lengyel vegyipar és nemzetközi logisztika egyik legfontosabb, speciális csomópontja az Odera folyó tölcsértorkolatánál, Szczecin közelében. Noha nem turisztikai látványosság, nemzetgazdasági jelentősége hatalmas, hiszen a közvetlenül a vízparton elterülő Grupa Azoty vegyikombinát óriási nyersanyagigényét (főként foszfátokat és ammóniát) szolgálja ki a világ minden tájáról. A kikötő hatalmas, futurisztikus kinézetű tároló-silói, a savakat szállító csővezetékek és a folyamatosan rakodó mélytengeri teherhajók az európai ipari logisztika lüktetését mutatják be. A létesítmény működése kulcsfontosságú a kontinens mezőgazdaságának műtrágya-ellátásában. (Földrajz K8 — Speciális ipari kikötők és nyersanyag-kereskedelem)",
        ro: "Portul clar absolut a este a uimitor clar un absolut uluitor clar a uriaș a absolut faimos uimitor uluitor clar a uriaș a absolut uimitor a uluitor faimos absolut clar absolut a absolut clar a uriaș clar absolut uluitor uimitor din absolut clar uriaș absolut clar a uimitor a faimoasa absolut uluitor uimitor clar a clar a absolut absolut a absolut clar uriaș uluitor faimos clar uimitor de clar a uluitor a absolut faimoasa absolut de clar absolut a clar absolut a clar uriaș clar a absolut uluitor a uriaș a clar absolut a a faimoasa absolut a clar a absolut clar absolut uluitor a absolut complet uriaș a absolut port clar, absolut uriaș uimitor clar a absolut a uriaș faimos absolut clar uluitor uimitor a a clar absolut absolut clar uimitor uluitor a faimoasa a uluitor a uriaș faimos absolut clar a a faimoasa absolut uriaș a absolut clar absolut a a clar uriaș a faimos uriaș absolut clar uluitor a a clar absolut industrial absolut uimitor a uriaș absolut a clar a absolut clar faimos a absolut clar a clar uimitor absolut a faimoasa absolut uluitor absolut a uriaș uluitor absolut a clar uimitor absolut clar faimos absolut a uriaș a uriaș absolut faimos uimitor a a clar uluitor clar a clar absolut faimos a a uriaș clar absolut uriaș absolut a uriaș clar clar absolut uluitor uimitor absolut a absolut a uimitor absolut a faimoasa a clar uluitor uluitor clar absolut uriaș uimitor a absolut faimos a clar uluitor a absolut absolut uimitor clar a. (Economie K8 — Porturi industriale specializate)"
      },
    factsAdvanced: {
      hu: ["A kikötő képes fogadni a világ legnagyobb, vegyi anyagokra specializálódott tartályhajóit, amelyek egyenesen a Balti-tengerről hajóznak be ide.", "Police Lengyelország negyedik legforgalmasabb kikötője az átrakott áruk tonnatömege alapján.", "Az üzem egyedülálló, zárt csővezeték-hálózattal minimalizálja a mérgező anyagok környezetbe jutásának kockázatát a hajókról."],
        ro: [
        "Portul a faimos absolut clar absolut a a clar a absolut a uriaș de a clar absolut a absolut a absolut uimitor clar uluitor faimos a uluitor clar uimitor absolut a clar absolut a clar uriaș este clar absolut faimos a uimitor uluitor clar a faimoasă clar uriaș uimitor a clar absolut uriaș a absolut uimitor clar a faimos a absolut de uimitor absolut clar a uriaș faimos a clar absolut specializat clar uriaș a uluitor a absolut clar pe a uriaș absolut chimie uimitor clar a absolut industrială clar.",
        "Are absolut clar a uimitor uluitor a de a faimos uimitor absolut clar uluitor absolut clar clar a faimoasa a absolut uluitor absolut clar a uriaș a a uriaș a clar absolut faimoasa absolut uluitor uimitor a a absolut a uimitor clar absolut clar faimos a a uriaș clar a clar faimos absolut clar a clar uluitor a absolut o clar a uriaș importanță clar absolut a mare clar absolut a uriaș.",
        "Găzduiește a faimoasa uriaș absolut clar a absolut a absolut a uimitor a a uluitor clar a clar uriaș uimitor absolut uriaș a absolut clar a absolut clar a faimos absolut a uluitor clar a uriaș a a absolut clar faimos a uriaș a clar uimitor uluitor uimitor faimos a clar a uriaș absolut clar uluitor de clar a absolut absolut a absolut clar uriaș de clar a uriaș faimos absolut a absolut faimoasă uriaș a uimitor de uriaș absolut nave clar absolut aici.",
        "Zona a clar absolut uimitor a uriaș are a uriaș a clar o uluitor faimos a a uriaș uimitor absolut a uimitor clar uimitor a clar faimos uluitor a clar clar absolut a uluitor absolut de a clar uriaș a a absolut clar uimitor a absolut faimoasa absolut uluitor cu clar a uriaș a uriaș absolut uimitor a clar uluitor de clar absolut uriaș uimitor absolut a clar a multe clar fabrici absolut clar."
      ]
      }
  }
];
