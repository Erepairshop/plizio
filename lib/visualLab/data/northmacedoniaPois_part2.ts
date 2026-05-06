// @ts-nocheck
import type { POI } from "./poi";

export const mkPoisPart2: POI[] = [
  // MK-011: Dojran
  {
    id: "MK-011-dojran-lake",
    type: "lake",
    parent: "MK-011",
    coords: [22.7447, 41.2181],
    name: { de: "Dojran-See", hu: "Dojrani-tó", ro: "Lacul Dojran", en: "Dojran Lake" },
    description: {
      de: "Ein See an der Grenze zu Griechenland, bekannt für seine traditionellen Fangmethoden.",
      hu: "Tó a görög határon, hagyományos halászati módszereiről ismert.",
      ro: "Un lac la granița cu Grecia, cunoscut pentru metodele sale tradiționale de pescuit.",
      en: "A lake on the border with Greece, known for its traditional fishing methods."
    },
    descriptionAdvanced: {
      de: "Der Dojran-See ist einer der flachsten und wärmsten Seen der Region. Er zeichnet sich durch eine einzigartige biologische Vielfalt aus. Berühmt ist er besonders für seine traditionelle, von der UNESCO als Immaterielles Kulturerbe anerkannte Kormoran-Fischerei. Das Wasser besitzt zudem einen hohen Mineralgehalt. Geografie K7 — Ökosysteme und Traditionen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Kormoran-Fischerei ist einzigartig weltweit.",
        "Der See wird als heilend eingestuft.",
        "Er ist von großer ökologischer Bedeutung.",
        "Die Region hat ein mildes mediterranes Klima.",
        "Die Wassertemperatur ist im Sommer sehr angenehm.",
        "Er war Schauplatz wichtiger historischer Ereignisse."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Bekannt für das Fischen mit Kormoranen.", "Das Wasser hat heilende Eigenschaften.", "Ein wichtiger Ort an der Saloniki-Front im Ersten Weltkrieg."],
      hu: ["Híres a kormoránokkal való halászatról.", "Vize gyógyhatású.", "Fontos helyszín volt a szaloniki fronton az első világháborúban."],
      ro: ["Cunoscut pentru pescuitul cu cormorani.", "Apa are proprietăți curative.", "Un loc important pe frontul din Salonic în Primul Război Mondial."],
      en: ["Known for fishing with cormorants.", "The water has medicinal properties.", "Significant site on the Salonika Front in WWI."]
    }
  },
  {
    id: "MK-011-st-elijah-church",
    type: "historical",
    parent: "MK-011",
    coords: [22.7214, 41.1864],
    name: { de: "Kirche des hl. Elias", hu: "Szent Illés-templom", ro: "Biserica Sf. Ilie", en: "Church of Saint Elijah" },
    description: {
      de: "Eine zerstörte Kirche in Alt-Dojran, die als Mahnmal an den Ersten Weltkrieg steht.",
      hu: "Romos templom Ó-Dojranban, amely az első világháború mementójaként áll.",
      ro: "O biserică distrusă în Vechiul Dojran, care servește ca monument al Primului Război Mondial.",
      en: "A ruined church in Old Dojran, standing as a memorial to World War I."
    },
    descriptionAdvanced: {
      de: "Die Ruine der St.-Elias-Kirche ist ein bewegendes Zeugnis der Verwüstungen des Ersten Weltkriegs, als die gesamte Stadt Dojran fast vollständig zerstört wurde. Heute erinnert sie als Mahnmal an die Sinnlosigkeit des Krieges. Die Lage bietet zudem eine weite Aussicht über den Dojran-See. Geschichte K8 — Erster Weltkrieg am Balkan.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Gebäude ist ein kulturelles Mahnmal.",
        "Es steht in der historischen Altstadt.",
        "Die Anlage ist ein wichtiger Ort des Gedenkens.",
        "Architektonisch sind noch Teile der Struktur erhalten.",
        "Es wurde nie vollständig rekonstruiert.",
        "Die Lage bietet einen tollen Ausblick."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Wurde während des Ersten Weltkriegs schwer beschädigt.", "Bietet einen Blick auf den See.", "Ein Symbol für die Zerstörung der Stadt."],
      hu: ["Súlyosan megsérült az első világháború alatt.", "Kilátást nyújt a tóra.", "A város pusztulásának szimbóluma."],
      ro: ["A fost grav avariată în timpul Primului Război Mondial.", "Oferă o vedere asupra lacului.", "Un simbol al distrugerii orașului."],
      en: ["Heavily damaged during World War I.", "Offers a view of the lake.", "A symbol of the town's destruction."]
    }
  },
  // MK-012: Valandovo
  {
    id: "MK-012-isari-marvinci",
    type: "historical",
    parent: "MK-012",
    coords: [22.4833, 41.2833],
    name: { de: "Isar-Marvinci", hu: "Isar-Marvinci", ro: "Isar-Marvinci", en: "Isar-Marvinci" },
    description: {
      de: "Eine bedeutende archäologische Stätte einer antiken Stadt in der Region Valandovo.",
      hu: "Egy ókori város jelentős régészeti lelőhelye Valandovo régiójában.",
      ro: "Un sit arheologic important al unui oraș antic din regiunea Valandovo.",
      en: "A significant archaeological site of an ancient city in the Valandovo region."
    },
    descriptionAdvanced: {
      de: "Isar-Marvinci ist einer der wichtigsten antiken Standorte in Südost-Mazedonien. Die Ausgrabungen haben gezeigt, dass die Stadt über Jahrhunderte ein blühendes Zentrum für Handel und Handwerk war. Sie bietet tiefgehende Einblicke in die paeonische und spätere römische Kultur. Sachkunde K6 — Archäologie.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stätte wurde über viele Jahre erforscht.",
        "Münzfunde weisen auf regen Handel hin.",
        "Die Architekturreste belegen eine komplexe Stadtplanung.",
        "Es ist ein wichtiges Ziel für Historiker.",
        "Der Standort wurde bisher nur teilweise ausgegraben.",
        "Die Umgebung bietet einen schönen Ausblick."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["War eine wichtige Stadt im antiken Paeonien.", "Zahlreiche Artefakte wie Münzen und Keramik wurden gefunden.", "Zeigt Kontinuität von der Eisenzeit bis zur Spätantike."],
      hu: ["Fontos város volt az antik Paeoniában.", "Számos műtárgyat, például érméket és kerámiákat találtak itt.", "A vaskortól a késő antik korig tartó folytonosságot mutat."],
      ro: ["A fost un oraș important în antica Paeonia.", "Au fost găsite numeroase artefacte, precum monede și ceramică.", "Prezintă o continuitate din epoca fierului până în antichitatea târzie."],
      en: ["An important city in ancient Paeonia.", "Numerous artifacts like coins and ceramics were found.", "Shows continuity from the Iron Age to Late Antiquity."]
    }
  },
  {
    id: "MK-012-pluzana-waterfall",
    type: "nature",
    parent: "MK-012",
    coords: [22.5667, 41.3500],
    name: { de: "Plužana-Wasserfall", hu: "Plužana-vízesés", ro: "Cascada Plužana", en: "Plužana Waterfall" },
    description: {
      de: "Ein verstecktes Naturjuwel im Plavush-Gebirge nahe Valandovo.",
      hu: "Rejtett természeti kincs a Plavus-hegységben, Valandovo közelében.",
      ro: "O bijuterie naturală ascunsă în Munții Plavush, lângă Valandovo.",
      en: "A hidden natural gem in the Plavush mountain range near Valandovo."
    },
    descriptionAdvanced: {
      de: "Der Plužana-Wasserfall ist ein beeindruckendes Beispiel für die unberührte Natur der Plavush-Berge. Er bietet besonders im Frühjahr ein spektakuläres Naturschauspiel. Der Pfad dorthin führt durch dichte Wälder, was ihn zu einem idealen Ort für Naturliebhaber macht. Sachkunde K5 — Geografie.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Wasserfall liegt abseits der üblichen Routen.",
        "Die Umgebung ist für ihre Biodiversität bekannt.",
        "Er bietet ein erholsames Mikroklima.",
        "Die Anreise erfordert eine kleine Wanderung.",
        "Das Wasser ist von hoher Reinheit.",
        "Der Ort wird oft als Ruheoase geschätzt."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Umgeben von unberührter Natur.", "Ein beliebtes Ziel für lokale Wanderer.", "Besonders wasserreich im Frühjahr."],
      hu: ["Érintetlen természet veszi körül.", "A helyi túrázók kedvelt célpontja.", "Tavasszal különösen bővizű."],
      ro: ["Înconjurată de natură virgină.", "O destinație populară pentru drumeții locali.", "Deosebit de bogată în apă primăvara."],
      en: ["Surrounded by untouched nature.", "A favorite destination for local hikers.", "Particularly abundant in water during spring."]
    }
  },
  // MK-013: Strumitsa
  {
    id: "MK-013-carevi-kuli",
    type: "historical",
    parent: "MK-013",
    coords: [22.6375, 41.4331],
    name: { de: "Carevi Kuli (Zarentürme)", hu: "Carevi Kuli (Cári tornyok)", ro: "Carevi Kuli (Turnurile Țarului)", en: "Carevi Kuli (Tsar's Towers)" },
    description: {
      de: "Die Ruinen einer mittelalterlichen Festung, die über Strumica thront.",
      hu: "Középkori erődromok, amelyek Sztrumica fölé magasodnak.",
      ro: "Ruinele unei cetăți medievale care domină orașul Strumica.",
      en: "The ruins of a medieval fortress overlooking Strumica."
    },
    descriptionAdvanced: {
      de: "Die Carevi Kuli (Zarentürme) sind eines der bedeutendsten archäologischen Denkmäler der Region. Die Anlage bot aufgrund ihrer strategischen Höhe über dem Tal Schutz und militärische Kontrolle. Von hier aus lässt sich die historische Bedeutung der Stadt Strumica im Kontext der regionalen Verteidigung gut nachvollziehen. Geschichte K8 — Burgenbau.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Mauern sind noch teilweise sichtbar.",
        "Die Aussicht ist ideal zur Orientierung.",
        "Archäologische Untersuchungen dauern an.",
        "Das Gelände ist für Wanderer gut zugänglich.",
        "Es ist ein wichtiges Denkmal der regionalen Geschichte.",
        "Die Festung hatte im Mittelalter große Bedeutung."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Bietet einen Panoramablick über das Strumica-Tal.", "Genutzt von der Antike bis zum Mittelalter.", "Wichtige Verteidigungsanlage in der Region."],
      hu: ["Panorámás kilátást nyújt a Sztrumica-völgyre.", "Az ókortól a középkorig használták.", "A régió fontos védelmi létesítménye volt."],
      ro: ["Oferă o vedere panoramică asupra văii Strumica.", "Utilizată din antichitate până în evul mediu.", "O fortificație importantă în regiune."],
      en: ["Offers a panoramic view over the Strumica valley.", "Used from antiquity through the Middle Ages.", "Significant defensive structure in the region."]
    }
  },
  {
    id: "MK-013-monastery-veljusa",
    type: "historical",
    parent: "MK-013",
    coords: [22.5683, 41.4764],
    name: { de: "Kloster Veljusa", hu: "Veljusai kolostor", ro: "Mănăstirea Veljusa", en: "Veljusa Monastery" },
    description: {
      de: "Ein byzantinisches Kloster aus dem 11. Jahrhundert, gewidmet der Gottesmutter Eleusa.",
      hu: "11. századi bizánci kolostor, amelyet az Irgalmas Szűzanyának szenteltek.",
      ro: "O mănăstire bizantină din secolul al XI-lea, dedicată Maicii Domnului Eleusa.",
      en: "An 11th-century Byzantine monastery dedicated to the Virgin Mary Eleusa."
    },
    descriptionAdvanced: {
      de: "Das Kloster Veljusa ist ein herausragendes Beispiel für byzantinische Sakralarchitektur. Die sorgfältig erhaltenen Mosaike und Fresken machen es zu einer Kunstschatzkammer. Es zeugt von der kulturellen Blüte unter byzantinischem Einfluss im 11. Jahrhundert. Geschichte K8 — Kunstgeschichte.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Es gehört zu den am besten erhaltenen Denkmälern.",
        "Die Fresken zeigen hohe handwerkliche Kunst.",
        "Die religiöse Bedeutung bleibt bis heute erhalten.",
        "Das Kloster liegt in einer sehr friedlichen Umgebung.",
        "Architektonisch sind viele Details bemerkenswert.",
        "Besucher schätzen die Ruhe des Ortes."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Bekannt für seine originalen Fresken und Mosaikböden.", "Ein Meisterwerk der mittelalterlichen Architektur.", "Befindet sich im Dorf Veljusa nahe Strumica."],
      hu: ["Eredeti freskóiról és mozaikpadlóiról ismert.", "A középkori építészet remekműve.", "Veljusa faluban található, Sztrumica közelében."],
      ro: ["Cunoscută pentru frescele sale originale și pardoselile din mozaic.", "O capodoperă a arhitecturii medievale.", "Situată în satul Veljusa, lângă Strumica."],
      en: ["Known for its original frescoes and mosaic floors.", "A masterpiece of medieval architecture.", "Located in the village of Veljusa near Strumica."]
    }
  },
  // MK-014: Bogdanci
  {
    id: "MK-014-bogdanci-wind-park",
    type: "landmark",
    parent: "MK-014",
    coords: [22.5500, 41.1667],
    name: { de: "Windpark Bogdanci", hu: "Bogdanci szélerőműpark", ro: "Parcul eolian Bogdanci", en: "Bogdanci Wind Park" },
    description: {
      de: "Der erste Windpark in Nordmazedonien, ein Symbol für erneuerbare Energien.",
      hu: "Észak-Macedónia első szélerőműparkja, a megújuló energia szimbóluma.",
      ro: "Primul parc eolian din Macedonia de Nord, un simbol al energiei regenerabile.",
      en: "The first wind park in North Macedonia, a symbol of renewable energy."
    },
    descriptionAdvanced: {
      de: "Der Windpark Bogdanci ist ein Pionierprojekt in Nordmazedonien und markiert den Beginn eines neuen Zeitalters in der Energieversorgung. Mit modernen Anlagen trägt er signifikant zur Reduktion von Emissionen bei. Die Anlage ist ein technologischer Meilenstein in einer Region, die stark von traditionellen Energiequellen abhängig war. Sachkunde K6 — Erneuerbare Energien.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Er wurde in mehreren Phasen gebaut.",
        "Das Projekt wird ständig optimiert.",
        "Die Turbinen sind weithin sichtbar.",
        "Die Region eignet sich ideal für Windkraft.",
        "Er liefert Strom für Tausende von Haushalten.",
        "Die Technologie ist auf dem neuesten Stand."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Besteht aus 16 Windturbinen.", "Trägt signifikant zur Stromversorgung bei.", "Liegt auf den Hügeln um Bogdanci."],
      hu: ["16 szélturbinából áll.", "Jelentősen hozzájárul az áramellátáshoz.", "A Bogdanci körüli dombokon található."],
      ro: ["Format din 16 turbine eoliene.", "Contribuie semnificativ la alimentarea cu energie electrică.", "Situat pe dealurile din jurul orașului Bogdanci."],
      en: ["Consists of 16 wind turbines.", "Contributes significantly to the electricity supply.", "Located on the hills surrounding Bogdanci."]
    }
  },
  {
    id: "MK-014-st-athanasius-church",
    type: "historical",
    parent: "MK-014",
    coords: [22.5750, 41.2031],
    name: { de: "Kirche des hl. Athanasius", hu: "Szent Atanáz-templom", ro: "Biserica Sf. Atanasie", en: "Church of Saint Athanasius" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche in Bogdanci mit schöner Architektur.",
      hu: "Jelentős ortodox templom Bogdanciban, szép építészettel.",
      ro: "O biserică ortodoxă importantă în Bogdanci, cu o arhitectură frumoasă.",
      en: "An important Orthodox church in Bogdanci with beautiful architecture."
    },
    descriptionAdvanced: {
      de: "Die Athanasius-Kirche ist ein wichtiger sakraler Ort für die Stadt und ihre Bewohner. Ihre Architektur vereint traditionelle orthodoxe Stile mit lokalen Anpassungen. Sie spielt eine zentrale Rolle im kulturellen und religiösen Leben vor Ort. Sachkunde K5 — Religion und Architektur.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Kirche ist sehr gepflegt.",
        "Ikonen in der Kirche sind von hoher Qualität.",
        "Sie ist ein wichtiger Ort für Hochzeiten und Taufen.",
        "Das Gebäude ist architektonisch harmonisch.",
        "Es ist ein Treffpunkt für die Gläubigen.",
        "Die Kirche hat eine lange Geschichte in Bogdanci."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Zentrum des religiösen Lebens in der Stadt.", "Bekannt für seine Ikonen.", "Regelmäßig für Gottesdienste genutzt."],
      hu: ["A város hitéletének központja.", "Ikonjairól ismert.", "Rendszeresen tartanak benne istentiszteleteket."],
      ro: ["Centrul vieții religioase din oraș.", "Cunoscută pentru icoanele sale.", "Utilizată regulat pentru servicii religioase."],
      en: ["Center of religious life in the town.", "Known for its icons.", "Regularly used for worship services."]
    }
  },
  // MK-015: Gevgelija
  {
    id: "MK-015-vardarski-rid",
    type: "historical",
    parent: "MK-015",
    coords: [22.5050, 41.1550],
    name: { de: "Vardarski Rid", hu: "Vardarski Rid", ro: "Vardarski Rid", en: "Vardarski Rid" },
    description: {
      de: "Eine archäologische Stätte mit Überresten einer antiken Stadt nahe Gevgelija.",
      hu: "Régészeti helyszín egy ókori város maradványaival Gevgelija közelében.",
      ro: "Un sit arheologic cu rămășițele unui oraș antic lângă Gevgelija.",
      en: "An archaeological site with remains of an ancient city near Gevgelija."
    },
    descriptionAdvanced: {
      de: "Vardarski Rid ist eine der spannendsten archäologischen Anlagen im Vardar-Tal. Die Siedlung zeugt von der strategischen Bedeutung der Lage für die antiken Kulturen. Die Funde geben Auskunft über die soziale Struktur und den Handel der Stadt. Geschichte K8 — Archäologie.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Viele Funde sind heute in Museen zu sehen.",
        "Die Stadtplanung zeigt römische Einflüsse.",
        "Es gab hier reges städtisches Leben.",
        "Die Stätte wird intensiv wissenschaftlich untersucht.",
        "Sie bietet einen weiten Blick über die Vardar-Ebene.",
        "Es ist ein wichtiger Fundort für die Antike."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Strategische Lage am Fluss Vardar.", "Funde stammen aus der hellenistischen Zeit.", "Wichtig für das Verständnis der Geschichte der Region."],
      hu: ["Stratégiai fekvés a Vardar folyó mentén.", "A leletek a hellenisztikus korból származnak.", "Fontos a régió történelmének megértéséhez."],
      ro: ["Poziție strategică pe râul Vardar.", "Descoperirile datează din perioada elenistică.", "Important pentru înțelegerea istoriei regiunii."],
      en: ["Strategic location on the Vardar river.", "Finds date back to the Hellenistic period.", "Key to understanding the region's history."]
    }
  },
  {
    id: "MK-015-smrdliva-voda",
    type: "nature",
    parent: "MK-015",
    coords: [22.2833, 41.1833],
    name: { de: "Smrdliva Voda", hu: "Smrdliva Voda", ro: "Smrdliva Voda", en: "Smrdliva Voda" },
    description: {
      de: "Ein Kurort am Kožuf-Gebirge, bekannt für sein schwefelhaltiges Mineralwasser.",
      hu: "Gyógyüdülőhely a Kozsuf-hegységben, kénes ásványvizéről ismert.",
      ro: "O stațiune balneară în Munții Kožuf, cunoscută pentru apa sa minerală sulfuroasă.",
      en: "A spa resort on Kožuf mountain, known for its sulfurous mineral water."
    },
    descriptionAdvanced: {
      de: "Smrdliva Voda ist seit langem für seine heilenden Mineralquellen bekannt. Die Lage in den Wäldern des Kožuf-Gebirges sorgt für ein gesundes Klima. Es ist eine Oase für Erholungssuchende, die von der heilsamen Wirkung der Quellen profitieren möchten. Erdkunde K7 — Kurorte.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Quellen werden seit Generationen genutzt.",
        "Das Wasser soll gut bei Hautproblemen helfen.",
        "Die Umgebung bietet eine Ruhe, die selten ist.",
        "Die Infrastruktur ist einfach gehalten.",
        "Das Klima in den Bergen ist sehr angenehm.",
        "Es ist ein idealer Ort zur Regeneration."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Der Name bedeutet 'stinkendes Wasser' wegen des Schwefelgeruchs.", "Bietet Erholung in dichter Waldumgebung.", "Das Wasser wird für Heilzwecke genutzt."],
      hu: ["A név 'büdös vizet' jelent a kénszag miatt.", "Pihenést kínál sűrű erdei környezetben.", "A vizet gyógyászati célokra használják."],
      ro: ["Numele înseamnă 'apă urât mirositoare' din cauza mirosului de sulf.", "Oferă relaxare într-un mediu forestier dens.", "Apa este folosită în scopuri terapeutice."],
      en: ["The name means 'stinking water' due to the sulfur smell.", "Offers relaxation in a dense forest environment.", "The water is used for healing purposes."]
    }
  },
  // MK-016: Kavadartsi
  {
    id: "MK-016-tikves-lake",
    type: "lake",
    parent: "MK-016",
    coords: [21.9333, 41.3667],
    name: { de: "Tikveš-See", hu: "Tikveši-tó", ro: "Lacul Tikveš", en: "Tikveš Lake" },
    description: {
      de: "Der größte künstliche See des Landes, gelegen im Tikveš-Becken.",
      hu: "Az ország legnagyobb mesterséges tava, a Tikveši-medencében található.",
      ro: "Cel mai mare lac artificial din țară, situat în bazinul Tikveš.",
      en: "The largest artificial lake in the country, located in the Tikveš basin."
    },
    descriptionAdvanced: {
      de: "Der Tikveš-See ist ein unverzichtbarer Teil der lokalen Wirtschaft. Er speichert Wasser für die ausgedehnten Weinberge und bietet zugleich einen Lebensraum für seltene Vogelarten. Er ist ein Herzstück des Tikveš-Beckens, das für seine Weinkultur bekannt ist. Erdkunde K6 — Wasserressourcen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Wasserqualität ist gut.",
        "Der See bietet viele Freizeitaktivitäten.",
        "Das Gebiet ist ein wichtiges Ziel für umweltbewusste Besucher.",
        "Die Vögel im Uferbereich sind vielfältig.",
        "Die landschaftliche Umgebung ist sehr harmonisch.",
        "Der See ist ein wichtiger Stausee."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Ein wichtiges Vogelschutzgebiet.", "Genutzt zur Bewässerung der umliegenden Weinberge.", "Beliebt für Wassersport und Angeln."],
      hu: ["Fontos madárvédelmi terület.", "A környező szőlőültetvények öntözésére használják.", "Népszerű a vízi sportok és a horgászat körében."],
      ro: ["O zonă importantă de protecție a păsărilor.", "Utilizat pentru irigarea podgoriilor din jur.", "Popular pentru sporturi nautice și pescuit."],
      en: ["An important bird sanctuary.", "Used for irrigating the surrounding vineyards.", "Popular for water sports and fishing."]
    }
  },
  {
    id: "MK-016-kavadarci-wine",
    type: "landmark",
    parent: "MK-016",
    coords: [22.0114, 41.4331],
    name: { de: "Weingut Tikveš", hu: "Tikveš borászat", ro: "Crama Tikveš", en: "Tikveš Winery" },
    description: {
      de: "Das größte und älteste Weingut Nordmazedoniens und Südosteuropas.",
      hu: "Észak-Macedónia és Délkelet-Európa legnagyobb és legrégebbi borászata.",
      ro: "Cea mai mare și mai veche cramă din Macedonia de Nord și Europa de Sud-Est.",
      en: "The largest and oldest winery in North Macedonia and Southeast Europe."
    },
    descriptionAdvanced: {
      de: "Das Weingut Tikveš ist das Aushängeschild der mazedonischen Weinkultur. Seit Jahrzehnten prägt es den Ruf des Weins aus dieser Region auf dem internationalen Markt. Die Kombination aus exzellenten Böden, Klima und langer Tradition sorgt für die hohe Qualität. Sachkunde K5 — Weinbau.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Vranec ist eine preisgekrönte Sorte.",
        "Die modernen Produktionsanlagen sind beeindruckend.",
        "Das Weingut bietet ein breites Portfolio.",
        "Die Weinkultur ist tief in der Region verwurzelt.",
        "Die Kellereiführungen sind sehr beliebt.",
        "Weinbau ist der wichtigste Wirtschaftszweig."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Produziert weltberühmte Weine wie Vranec.", "Herz der mazedonischen Weinregion.", "Bietet Verkostungen und Kellerführungen an."],
      hu: ["Világhírű borokat termel, mint például a Vranec.", "A macedón borvidék szíve.", "Kóstolókat és pincetúrákat kínál."],
      ro: ["Produce vinuri renumite la nivel mondial, precum Vranec.", "Inima regiunii viticole macedonene.", "Oferă degustări și tururi în cramă."],
      en: ["Produces world-famous wines like Vranec.", "Heart of the Macedonian wine region.", "Offers tastings and cellar tours."]
    }
  },
  // MK-017: Novaci
  {
    id: "MK-017-kajmakcalan",
    type: "mountain",
    parent: "MK-017",
    coords: [21.7833, 40.9167],
    name: { de: "Kajmakčalan", hu: "Kajmakcsalan", ro: "Kajmakčalan", en: "Kajmakčalan" },
    description: {
      de: "Ein Berggipfel an der Grenze zu Griechenland, Schauplatz einer blutigen Schlacht im Ersten Weltkrieg.",
      hu: "Hegycsúcs a görög határon, egy véres első világháborús csata helyszíne.",
      ro: "Un vârf muntos la granița cu Grecia, locul unei bătălii sângeroase în Primul Război Mondial.",
      en: "A mountain peak on the border with Greece, site of a bloody battle in WWI."
    },
    descriptionAdvanced: {
      de: "Der Kajmakčalan ist ein historischer Berg, der für seine Rolle in der Schlacht um den Durchbruch an der Saloniki-Front im Ersten Weltkrieg bekannt ist. Heute ist der Gipfel ein Ort des Gedenkens. Zudem bietet er eine beeindruckende Aussicht auf die gesamte umliegende Gebirgslandschaft. Geschichte K8 — Erster Weltkrieg.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Kämpfe auf dem Gipfel waren besonders hart.",
        "Ein Denkmal erinnert an die Soldaten.",
        "Die Aussicht ist bei klarem Wetter spektakulär.",
        "Der Ort ist heute ein bedeutendes Mahnmal.",
        "Die Geschichte des Berges wird respektvoll bewahrt.",
        "Wanderer besuchen den Ort aus historischem Interesse."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Beherbergt eine Kapelle mit dem Herz von Archibald Reiss.", "Teil der Nidže-Berge.", "Wichtige historische Gedenkstätte."],
      hu: ["Itt található egy kápolna Archibald Reiss szívével.", "A Nidzse-hegység része.", "Fontos történelmi emlékhely."],
      ro: ["Găzduiește o capelă care conține inima lui Archibald Reiss.", "Parte a munților Nidže.", "Un sit istoric de comemorare important."],
      en: ["Houses a chapel containing the heart of Archibald Reiss.", "Part of the Nidže mountain range.", "Significant historical memorial site."]
    }
  },
  {
    id: "MK-017-suvodol-monastery",
    type: "historical",
    parent: "MK-017",
    coords: [21.5333, 41.0667],
    name: { de: "Kloster Suvodol", hu: "Suvodoli kolostor", ro: "Mănăstirea Suvodol", en: "Suvodol Monastery" },
    description: {
      de: "Ein malerisches Kloster in der Nähe der Suvodol-Mine.",
      hu: "Festői kolostor a Suvodol-bánya közelében.",
      ro: "O mănăstire pitorească în apropierea minei Suvodol.",
      en: "A scenic monastery located near the Suvodol mine."
    },
    descriptionAdvanced: {
      de: "Das Kloster Suvodol ist ein spiritueller Ruhepol, der heute in einer von Industrie geprägten Umgebung liegt. Es bewahrt Traditionen und bietet Besuchern einen Einblick in die religiöse Lebensweise der Region. Es dient als ein wichtiger Ort des Gebets für die Einheimischen. Sachkunde K5 — Religion.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Klosterkirche ist architektonisch interessant.",
        "Es ist ein Ort der Besinnung.",
        "Die Umgebung bietet eine unerwartete Ruhe.",
        "Besucher schätzen die Einfachheit des Klosters.",
        "Das spirituelle Leben wird hier sehr aktiv gepflegt.",
        "Es ist ein Ort der kulturellen Identität."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Gewidmet der Geburt der Gottesmutter.", "Umgeben von schöner ländlicher Landschaft.", "Ein Ort der Ruhe und des Gebets."],
      hu: ["Mária születésének szentelve.", "Szép vidéki táj veszi körül.", "A nyugalom és az ima helye."],
      ro: ["Dedicată Nașterii Maicii Domnului.", "Înconjurată de un peisaj rural frumos.", "Un loc de liniște și rugăciune."],
      en: ["Dedicated to the Nativity of the Mother of God.", "Surrounded by beautiful rural landscape.", "A place of peace and prayer."]
    }
  },
  // MK-018: Prilep
  {
    id: "MK-018-markos-towers",
    type: "historical",
    parent: "MK-018",
    coords: [21.5369, 41.3603],
    name: { de: "Markos Türme", hu: "Marko tornyai", ro: "Turnurile lui Marko", en: "Marko's Towers" },
    description: {
      de: "Mittelalterliche Festungsruinen über der Stadt Prilep, benannt nach König Marko.",
      hu: "Középkori erődromok Prilep városa felett, Marko királyról elnevezve.",
      ro: "Ruinele unei cetăți medievale deasupra orașului Prilep, numite după Regele Marko.",
      en: "Medieval fortress ruins above the city of Prilep, named after King Marko."
    },
    descriptionAdvanced: {
      de: "Markos Türme sind ein beeindruckendes Beispiel mittelalterlicher Wehrarchitektur. Die strategische Lage auf den markanten Felsformationen bot dem Herrscher Marko Kraljević eine uneinnehmbare Festung. Heute sind sie ein Symbol der historischen Identität von Prilep. Geschichte K8 — Mittelalter.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Ruinen sind weit über die Stadt sichtbar.",
        "Man hat einen exzellenten Ausblick über das Umland.",
        "Es ist ein beliebter Ort für Wanderer.",
        "Die Anlage ist ein archäologisches Denkmal.",
        "Viele Sagen ranken sich um den König Marko.",
        "Die Umgebung bietet eine einzigartige Felslandschaft."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Das Wahrzeichen von Prilep.", "Befindet sich auf markanten Granitfelsen.", "Teil des kulturellen Erbes der UNESCO-Tentativliste."],
      hu: ["Prilep legismertebb jelképe.", "Jellegzetes gránitsziklákon fekszik.", "Szerepel az UNESCO világörökségi javaslati listáján."],
      ro: ["Simbolul orașului Prilep.", "Situat pe stânci de granit distinctive.", "Parte a patrimoniului cultural de pe lista tentativă UNESCO."],
      en: ["The landmark of Prilep.", "Located on distinctive granite rocks.", "Part of the cultural heritage on the UNESCO tentative list."]
    }
  },
  {
    id: "MK-018-monastery-treskavec",
    type: "historical",
    parent: "MK-018",
    coords: [21.5336, 41.3986],
    name: { de: "Kloster Treskavec", hu: "Treskavec-kolostor", ro: "Mănăstirea Treskavec", en: "Treskavec Monastery" },
    description: {
      de: "Ein einsames Kloster auf dem Berg Zlatovrv mit atemberaubender Aussicht.",
      hu: "Magányos kolostor a Zlatovrv-hegyen, lélegzetelállító kilátással.",
      ro: "O mănăstire izolată pe muntele Zlatovrv, cu vederi uluitoare.",
      en: "A secluded monastery on Zlatovrv mountain with breathtaking views."
    },
    descriptionAdvanced: {
      de: "Treskavec ist ein Ort der absoluten Stille und Abgeschiedenheit. Die Lage hoch oben auf dem Felsplateau bietet nicht nur ein spirituelles Erlebnis, sondern auch einen der spektakulärsten Ausblicke des ganzen Landes. Die Geschichte des Klosters ist eng mit der monastischen Tradition verknüpft. Sachkunde K5 — Abgeschiedenheit.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Anreise erfordert eine Wanderung.",
        "Die Fresken im Inneren sind sehr alt.",
        "Es ist ein Ort der spirituellen Ruhe.",
        "Der Ausblick auf die Umgebung ist grandios.",
        "Das Kloster bewahrt viele wertvolle Manuskripte.",
        "Die Umgebung ist ein Eldorado für Naturfreunde."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Gegründet im 12. Jahrhundert.", "Bekannt für seine exzellente Akustik.", "Wurde nach mehreren Bränden restauriert."],
      hu: ["A 12. században alapították.", "Kiváló akusztikájáról ismert.", "Több tűzvész után restaurálták."],
      ro: ["Fondată în secolul al XII-lea.", "Cunoscută pentru acustica sa excelentă.", "A fost restaurată după mai multe incendii."],
      en: ["Founded in the 12th century.", "Known for its excellent acoustics.", "Restored after several fires."]
    }
  },
  // MK-019: Bitola
  {
    id: "MK-019-heraclea-lyncestis",
    type: "historical",
    parent: "MK-019",
    coords: [21.3425, 41.0111],
    name: { de: "Heraclea Lyncestis", hu: "Heraclea Lyncestis", ro: "Heraclea Lyncestis", en: "Heraclea Lyncestis" },
    description: {
      de: "Eine antike Stadt gegründet von Philipp II. von Makedonien.",
      hu: "II. Philipposz makedón király által alapított antik város.",
      ro: "Un oraș antic fondat de Filip al II-lea al Macedoniei.",
      en: "An ancient city founded by Philip II of Macedon."
    },
    descriptionAdvanced: {
      de: "Heraclea Lyncestis ist ein bedeutendes Zeugnis der makedonischen Geschichte. Die Mosaiken, die in den religiösen Bauten gefunden wurden, sind von außergewöhnlicher handwerklicher Qualität und gehören zu den schönsten der Antike. Sie bieten einen spannenden Einblick in die visuelle Welt der spätantiken Gesellschaft. Geschichte K8 — Antike.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Mosaikböden wurden sorgfältig geschützt.",
        "Das Theater ist auch heute für Aufführungen nutzbar.",
        "Die Stätte ist international sehr renommiert.",
        "Die Stadt war ein wichtiges religiöses Zentrum.",
        "Es gibt ein Besucherzentrum zur Information.",
        "Die Ausgrabungsgeschichte ist sehr umfangreich."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Berühmt für seine gut erhaltenen Mosaike.", "Beherbergt ein römisches Theater.", "Wichtige Station an der Via Egnatia."],
      hu: ["Híres a jól megőrzött mozaikjairól.", "Római színháznak ad otthont.", "Fontos állomás volt a Via Egnatia mentén."],
      ro: ["Faimos pentru mozaicurile sale bine conservate.", "Găzduiește un teatru roman.", "Stație importantă pe Via Egnatia."],
      en: ["Famous for its well-preserved mosaics.", "Houses a Roman theater.", "Important stop on the Via Egnatia."]
    }
  },
  {
    id: "MK-019-sirok-sokak",
    type: "landmark",
    parent: "MK-019",
    coords: [21.3361, 41.0294],
    name: { de: "Širok Sokak", hu: "Sirok Szokak", ro: "Širok Sokak", en: "Shirok Sokak" },
    description: {
      de: "Die berühmte Fußgängerzone von Bitola, bekannt für ihre Architektur.",
      hu: "Bitola híres sétálóutcája, építészetéről ismert.",
      ro: "Faimoasa stradă pietonală din Bitola, cunoscută pentru arhitectura sa.",
      en: "The famous pedestrian street of Bitola, known for its architecture."
    },
    descriptionAdvanced: {
      de: "Širok Sokak ist das gesellschaftliche Herz von Bitola. Die Pracht der neoklassizistischen Gebäude spiegelt den Wohlstand und die kosmopolitische Geschichte der Stadt als einstiges diplomatisches Zentrum wider. Die Straße ist heute voller Leben und lädt zum Bummeln ein. Sachkunde K5 — Städtebau.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Atmosphäre ist einzigartig entspannt.",
        "Viele Gebäude haben eine bewegte Geschichte.",
        "Die Straße ist ein Treffpunkt für alle Generationen.",
        "Abends ist die Promenade besonders belebt.",
        "Die Konsulatsgebäude zeugen vom Stolz der Stadt.",
        "Architekturinteressierte finden hier viele Details."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Herz des sozialen Lebens der Stadt.", "Gesäumt von neoklassizistischen Gebäuden.", "Bekannt als 'Straße der Konsulate'."],
      hu: ["A város társadalmi életének szíve.", "Neoklasszicista épületek szegélyezik.", "A 'konzulátusok utcájaként' is ismerik."],
      ro: ["Inima vieții sociale a orașului.", "Mărginită de clădiri neoclasice.", "Cunoscută sub numele de 'Strada Consulatelor'."],
      en: ["Heart of the city's social life.", "Lined with Neoclassical buildings.", "Known as the 'Street of the Consulates'."]
    }
  },
  // MK-020: Lipkovo
  {
    id: "MK-020-lipkovo-lake",
    type: "lake",
    parent: "MK-020",
    coords: [21.5750, 42.1667],
    name: { de: "Lipkovo-See", hu: "Lipkovói-tó", ro: "Lacul Lipkovo", en: "Lipkovo Lake" },
    description: {
      de: "Ein künstlicher See im Norden, umgeben von schöner Berglandschaft.",
      hu: "Mesterséges tó északon, szép hegyvidéki tájjal körülvéve.",
      ro: "Un lac artificial în nord, înconjurat de un peisaj montan frumos.",
      en: "An artificial lake in the north, surrounded by beautiful mountain scenery."
    },
    descriptionAdvanced: {
      de: "Der Lipkovo-See ist ein wichtiger Wasserspeicher für die nördliche Region. Er bietet eine harmonische Kulisse aus Gebirge und Wasser. Die Umgebung ist ein beliebtes Ziel für Tagesausflüge und naturverbundene Erholung. Erdkunde K6 — Seen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Wasser wird zur Bewässerung genutzt.",
        "Die Berge im Hintergrund sind beeindruckend.",
        "Die Ruhe der Region ist ein Markenzeichen.",
        "Der See wird auch von Anglern geschätzt.",
        "Die Zufahrtswege führen durch eine schöne Landschaft.",
        "Er ist ein Symbol für die lokale Infrastruktur."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Dient der Wasserversorgung und Bewässerung.", "Entstanden durch den Bau einer Talsperre.", "Beliebt für Ausflüge in die Natur."],
      hu: ["Vízellátást és öntözést szolgál.", "Gát megépítésével jött létre.", "Népszerű a természetbe vágyók körében."],
      ro: ["Servește pentru alimentarea cu apă și irigații.", "Creat prin construcția unui baraj.", "Popular pentru excursii în natură."],
      en: ["Serves for water supply and irrigation.", "Created by the construction of a dam.", "Popular for nature excursions."]
    }
  },
  {
    id: "MK-020-matejce-monastery",
    type: "historical",
    parent: "MK-020",
    coords: [21.6083, 42.1250],
    name: { de: "Kloster Matejče", hu: "Matejcséi kolostor", ro: "Mănăstirea Matejče", en: "Matejče Monastery" },
    description: {
      de: "Ein bedeutendes mittelalterliches Kloster auf den Hängen von Skopska Crna Gora.",
      hu: "Jelentős középkori kolostor a Szkopszka Crna Gora lejtőin.",
      ro: "O mănăstire medievală importantă pe versanții muntelui Skopska Crna Gora.",
      en: "A significant medieval monastery on the slopes of Skopska Crna Gora."
    },
    descriptionAdvanced: {
      de: "Das Kloster Matejče ist eine bedeutende monumentale Anlage, die die religiöse Macht im 14. Jahrhundert unterstreicht. Seine Architektur und die Reste der Wandmalereien sind von hohem kunsthistorischem Rang. Es thront über der Landschaft der Skopska Crna Gora und bietet ein beeindruckendes Panorama. Geschichte K8 — Mittelalter.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Monumentalität ist für die Zeit bezeichnend.",
        "Die Geschichte ist von großen Persönlichkeiten geprägt.",
        "Das Kloster liegt sehr abgeschieden.",
        "Die architektonischen Details sind sehr fein.",
        "Das Gebäude ist ein Denkmal von nationalem Rang.",
        "Es ist ein wichtiges Ziel für Kulturtourismus."
      ],
      hu: [],
      ro: [],
      en: []
    },
    facts: {
      de: ["Gewidmet der Entschlafung der Gottesmutter.", "Gegründet im 14. Jahrhundert.", "Bekannt für seine monumentalen Ausmaße."],
      hu: ["Mária elszenderülésének szentelve.", "A 14. században alapították.", "Monumentális méreteiről ismert."],
      ro: ["Dedicată Adormirii Maicii Domnului.", "Fondată în secolul al XIV-lea.", "Cunoscută pentru dimensiunile sale monumentale."],
      en: ["Dedicated to the Dormition of the Mother of God.", "Founded in the 14th century.", "Known for its monumental size."]
    }
  }
];

