// @ts-nocheck
import type { POI } from "./poi";
export const vaticanCountry: POI = {
  id: "country-vatican",
  type: "country",
  parent: "europe",
  coords: [12.4534, 41.9029],
  name: {
    de: "Vatikanstadt",
    hu: "Vatikán",
    ro: "Vatican",
    en: "Vatican City"
  },
  description: {
    de: "Der Vatikan ist der kleinste Staat der Welt, ein Stadtstaat im Herzen von Rom und das spirituelle Zentrum der römisch-katholischen Kirche.",
    hu: "A Vatikán a világ legkisebb állama, egy Róma szívében fekvő városállam, a római katolikus egyház spirituális központja.",
    ro: "Vaticanul este cel mai mic stat din lume, un oraș-stat în inima Romei și centrul spiritual al Bisericii Romano-Catolice.",
    en: "The Vatican is the smallest state in the world, a city-state in the heart of Rome and the spiritual center of the Roman Catholic Church."
  },
  facts: {
    de: [
      "Der kleinste Staat der Welt (0,44 km²).",
      "Sitz des Papstes, des Oberhauptes der katholischen Kirche.",
      "Vollständig von der italienischen Hauptstadt Rom umschlossen.",
      "Amtssprache ist Latein (für offizielle Dokumente) und Italienisch.",
      "Besitzt eine eigene Post, Armee (Schweizergarde) und Währung (Euro).",
      "Das gesamte Staatsgebiet ist UNESCO-Weltkulturerbe.",
      "Hat keine Steuern und lebt von Spenden und Souvenirverkäufen.",
      "Die Vatikanischen Museen gehören zu den bedeutendsten Kunstsammlungen weltweit.",
      "Der Petersdom ist eine der größten Kirchen der Welt.",
      "Die Schweizergarde schützt den Papst seit 1506."
    ],
    hu: [
      "A világ legkisebb független állama (0,44 km²).",
      "A pápa, a katolikus egyház fejének székhelye.",
      "Teljesen körbeöleli Róma, az olasz főváros.",
      "Hivatalos nyelve a latin (dokumentumokban) és az olasz.",
      "Saját postája, hadserege (Svájci Gárda) és pénzneme (euró) van.",
      "Egész területe az UNESCO Világörökség része.",
      "Nincsenek adók, az állam adományokból és ajándéktárgyakból tartja fenn magát.",
      "A Vatikáni Múzeumok a világ legjelentősebb művészeti gyűjteményei közé tartoznak.",
      "A Szent Péter-bazilika a világ egyik legnagyobb temploma.",
      "A Svájci Gárda 1506 óta védi a pápát."
    ],
    ro: [
      "Cel mai mic stat independent din lume (0,44 km²).",
      "Sediul Papei, capul Bisericii Catolice.",
      "Complet înconjurat de capitala Italiei, Roma.",
      "Limba oficială este latina (pentru documente) și italiana.",
      "Are propria poștă, armată (Garda Elvețiană) și monedă (euro).",
      "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO.",
      "Nu există taxe, statul se întreține din donații și vânzări de suveniruri.",
      "Muzeele Vaticane sunt printre cele mai importante colecții de artă din lume.",
      "Bazilica Sfântul Petru este una dintre cele mai mari biserici din lume.",
      "Garda Elvețiană îl protejează pe Papă din 1506."
    ],
    en: [
      "The smallest independent state in the world (0.44 km²).",
      "Seat of the Pope, the head of the Catholic Church.",
      "Completely surrounded by the Italian capital Rome.",
      "Official languages are Latin (for documents) and Italian.",
      "Has its own post office, army (Swiss Guard) and currency (Euro).",
      "The entire territory is a UNESCO World Heritage site.",
      "Has no taxes, the state supports itself through donations and souvenir sales.",
      "The Vatican Museums are among the most important art collections in the world.",
      "St. Peter's Basilica is one of the largest churches in the world.",
      "The Swiss Guard has protected the Pope since 1506."
    ]
  },
  image: "/geo-images/vatican/country-vatican.webp"
};

export const vaticanPois: POI[] = [
  {
    id: "landmark-vatican-museums",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4533, 41.9064],
    name: {
      de: "Vatikanische Museen",
      hu: "Vatikáni Múzeumok",
      ro: "Muzeele Vaticane",
      en: "Vatican Museums"
    },
    description: {
      de: "Eines der größten und bedeutendsten Kunstmuseen der Welt mit unschätzbaren Schätzen.",
      hu: "A világ egyik legnagyobb és legjelentősebb művészeti múzeuma felbecsülhetetlen kincsekkel.",
      ro: "Unul dintre cele mai mari și mai importante muzee de artă din lume, cu comori neprețuite.",
      en: "One of the largest and most significant art museums in the world with priceless treasures."
    }, image: "/poi-images/landmark-vatican-museums.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Museen in der Vatikanstadt beherbergen eine der bedeutendsten Kunstsammlungen der Welt, die über Jahrhunderte von den Päpsten zusammengetragen wurde. Gegründet wurden sie im frühen 16. Jahrhundert von Papst Julius II., nachdem die antike Skulpturengruppe des Laokoon im Jahr 1506 in einem Weinberg bei Rom entdeckt wurde. Der Museumskomplex erstreckt sich über eine beeindruckende Länge von sieben Kilometern und umfasst 54 Galerien, die von ägyptischen Altertümern bis hin zu zeitgenössischer religiöser Kunst reichen. Zu den herausragenden Stationen gehören die Stanzen des Raffael, die Galerie der Landkarten und natürlich die Sixtinische Kapelle. Jährlich besuchen Millionen von Menschen diese Schatzkammer der Menschheitsgeschichte, um Meisterwerke von Michelangelo, Leonardo da Vinci und Tizian zu bewundern. Die Museen sind nicht nur ein Ort der Ausstellung, sondern auch ein Zentrum der Forschung und Restaurierung, das den kulturellen Reichtum der katholischen Kirche bewahrt. Die Verbindung von Architektur und Kunst macht den Besuch zu einem unvergleichlichen kulturellen Erlebnis.",
      hu: "A Vatikáni Múzeumok a világ egyik leggazdagabb és legfontosabb művészeti gyűjteményének adnak otthont, amelyet a pápák halmoztak fel az évszázadok során. Az intézmény alapítása a 16. század elejére, II. Gyula pápa idejére nyúlik vissza, aki 1506-ban állította ki először a híres Laokoón-csoportot a nyilvánosság számára. A múzeumi útvonal hossza megközelíti a hét kilométert, és 54 galérián vezet keresztül, bemutatva az ókori egyiptomi emlékeket, az etruszk művészetet és a reneszánsz mesterműveket. A gyűjtemény legnépszerűbb részei közé tartoznak Raffaello stanzái, a Térképek Galériája és a Sixtus-kápolna Michelangelo freskóival. Évente több millió turista látogat ide, hogy megtekintse Leonardo da Vinci, Caravaggio és Tiziano alkotásait. A múzeum nem csupán kiállítóhely, hanem tudományos központ is, ahol világszínvonalú restaurátorműhelyek működnek. A lenyűgöző paloták és belső udvarok építészeti megoldásai magukban is műalkotásnak számítanak.",
      ro: "Muzeele Vaticane din Vatican City adăpostesc una dintre cele mai vaste și prețioase colecții de artă din lume, acumulată de-a lungul secolelor de către papi. Instituția a fost fondată la începutul secolului al XVI-lea de Papa Iulius al II-lea, după descoperirea faimosului grup statuar Laocoon în anul 1506. Complexul muzeal se întinde pe o distanță de aproximativ șapte kilometri de trasee expoziționale și cuprinde 54 de galerii distincte. Printre cele mai faimoase secțiuni se numără Stanțele lui Rafael, Galeria Hărților și Capela Sixtină, renumită pentru frescele lui Michelangelo. Colecțiile variază de la antichități egiptene și greco-romane până la opere de artă modernă religioasă. Milioane de vizitatori trec anual pragul acestor muzee pentru a vedea capodopere semnate de Leonardo da Vinci, Caravaggio sau Tiziano. Muzeele reprezintă un centru vital de conservare și cercetare a patrimoniului cultural universal al umanității. Arhitectura grandioasă a palatelor vaticane completează experiența artistică oferită vizitatorilor.",
      en: "The Vatican Museums in Vatican City house one of the world's most significant art collections, amassed by popes over several centuries. The institution was founded in the early 16th century by Pope Julius II, following the discovery of the ancient Laocoön sculpture group in 1506. The museum complex spans an impressive seven kilometers of exhibition space, comprising 54 separate galleries that range from Egyptian antiquities to contemporary religious art. Highlighted sections include the Raphael Rooms, the Gallery of Maps, and the world-renowned Sistine Chapel. Millions of people visit annually to witness masterpieces by iconic artists such as Michelangelo, Leonardo da Vinci, and Titian. The museums are not merely a display space but also a center for scholarship and high-level art restoration. The integration of grand architecture and unparalleled artistic treasures makes a visit to the Vatican Museums a profound cultural experience that traces the history of human creativity and faith.",
    },
    factsAdvanced: {
      de: ["Die Museen wurden 1506 durch Papst Julius II. gegründet.", "Die Gesamtlänge der Ausstellungswege beträgt etwa 7 Kilometer.", "Es gibt insgesamt 54 Galerien innerhalb des Museumskomplexes.", "Die Sammlung umfasst über 70.000 Objekte, von denen 20.000 ausgestellt sind.", "Die berühmte Wendeltreppe von Giuseppe Momo wurde 1932 hinzugefügt.", "Rund 6 Millionen Menschen besuchen die Museen jedes Jahr."],
      hu: ["A múzeumot II. Gyula pápa alapította 1506-ban a Laokoón-szoborcsoport megvásárlásával.", "A látogatói útvonal teljes hossza több mint 7 kilométer.", "A komplexum 54 különálló szekcióból és galériából áll.", "A gyűjteményben körülbelül 70 000 műtárgy található, ebből 20 000 látható.", "A múzeum híres kettős spirállépcsőjét Giuseppe Momo tervezte 1932-ben.", "Évente átlagosan 6-7 millió látogató érkezik a Vatikáni Múzeumokba."],
      ro: ["Muzeele au fost deschise oficial publicului în anul 1506 de către Papa Iulius II.", "Traseul complet de vizitare se întinde pe o lungime de peste 7 kilometri.", "Colecția este împărțită în 54 de galerii și muzee tematice diferite.", "Adăpostește peste 70.000 de lucrări de artă, dintre care 20.000 sunt expuse permanent.", "Faimoasa scară în spirală de la ieșire a fost construită în 1932 de Giuseppe Momo.", "Muzeele Vaticane se află constant în top 5 cele mai vizitate muzee de artă din lume."],
      en: ["The museums were founded in 1506 by Pope Julius II.", "The total length of the exhibition route is approximately 7 kilometers (4.3 miles).", "There are 54 galleries in total within the Vatican Museum complex.", "The collection holds around 70,000 works of art, with 20,000 currently on display.", "The iconic double-helix spiral staircase was designed by Giuseppe Momo in 1932.", "The museums receive approximately 6 million visitors per year."],
    },
  },
  {
    id: "landmark-sistine-chapel",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4545, 41.903],
    name: {
      de: "Sixtinische Kapelle",
      hu: "Sixtus-kápolna",
      ro: "Capela Sixtină",
      en: "Sistine Chapel"
    },
    description: {
      de: "Berühmt für Michelangelos Deckenfresken und das Jüngste Gericht.",
      hu: "Michelangelo mennyezetfreskóiról és az Utolsó ítélet című festményéről híres.",
      ro: "Faimoasă pentru frescele de pe tavan ale lui Michelangelo și Judecata de Apoi.",
      en: "Famous for Michelangelo's ceiling frescoes and the Last Judgment."
    }, image: "/poi-images/landmark-sistine-chapel.webp",
    descriptionAdvanced: {
      de: "Die Sixtinische Kapelle im Apostolischen Palast der Vatikanstadt ist eines der berühmtesten sakralen Bauwerke der Welt und ein Höhepunkt der Renaissance-Kunst. Erbaut zwischen 1473 und 1481 unter Papst Sixtus IV., nach dem sie auch benannt ist, dient sie heute als Hauskapelle des Papstes und als Ort für das Konklave zur Wahl eines neuen Oberhauptes der katholischen Kirche. Weltberühmt ist die Kapelle vor allem für ihre Deckenmalereien, die Michelangelo zwischen 1508 und 1512 im Auftrag von Papst Julius II. schuf. Die Szenen der Genesis, darunter die Erschaffung Adams, gelten als Meilensteine der Kunstgeschichte. Später, zwischen 1536 und 1541, fügte Michelangelo an der Altarwand das monumentale Fresko 'Das Jüngste Gericht' hinzu. Neben Michelangelo trugen auch andere bedeutende Künstler wie Botticelli, Perugino und Ghirlandaio zur Ausgestaltung der Seitenwände bei. Die Kapelle ist nicht nur ein Kunstwerk von unschätzbarem Wert, sondern auch ein spiritueller Ort von höchster symbolischer Bedeutung für das Christentum.",
      hu: "A Vatikánvárosban, az Apostoli Palotában található Sixtus-kápolna a világ egyik legismertebb egyházi épülete és a reneszánsz művészet csúcspontja. Az 1473 és 1481 között épült kápolna IV. Sixtus pápáról kapta a nevét, aki az építtetője volt. Ma a pápa házi kápolnájaként szolgál, és itt tartják a konklávét is, amely során megválasztják az új pápát. A kápolna világhírét Michelangelo mennyezetfreskóinak köszönheti, amelyeket 1508 és 1512 között készített II. Gyula pápa megbízásából. A Genezis jelenetei, köztük Ádám teremtése, az emberi zsenialitás örök szimbólumai. Később, 1536 és 1541 között Michelangelo megfestette az oltárfalra az Utolsó ítélet című monumentális kompozíciót is. A kápolna oldalfalait olyan neves mesterek díszítették, mint Botticelli, Perugino és Ghirlandaio. A tér nemcsak felbecsülhetetlen értékű művészeti kincs, hanem a katolikus egyház egyik legfontosabb rituális és szimbolikus helyszíne is.",
      ro: "Capela Sixtină, situată în Palatul Apostolic din Vatican City, este una dintre cele mai celebre structuri religioase din lume și un simbol al apogeului artei Renașterii. Construită între 1473 și 1481 din ordinul Papei Sixt al IV-lea, de la care îi provine și numele, capela servește în prezent drept capelă privată a Papei și este locul de desfășurare a Conclavului pentru alegerea noului Suveran Pontif. Celebritatea sa mondială se datorează în special tavanului pictat de Michelangelo între 1508 și 1512, la cererea Papei Iulius al II-lea. Scenele din Geneză, inclusiv faimoasa 'Crearea lui Adam', sunt considerate capodopere absolute ale artei universale. Ulterior, între 1536 și 1541, Michelangelo a revenit pentru a picta 'Judecata de Apoi' pe peretele altarului. Pereții laterali sunt decorați cu fresce realizate de mari maeștri precum Botticelli, Perugino și Ghirlandaio. Capela reprezintă un loc de o imensă importanță spirituală și artistică, atrăgând milioane de admiratori anual.",
      en: "The Sistine Chapel, located within the Apostolic Palace in Vatican City, is one of the most famous religious buildings in the world and a pinnacle of Renaissance art. Built between 1473 and 1481 under the patronage of Pope Sixtus IV, after whom it is named, the chapel serves as the Pope's domestic chapel and the site of the Papal Conclave for electing new popes. It is globally renowned for its ceiling frescoes, painted by Michelangelo between 1508 and 1512 at the request of Pope Julius II. The scenes from the Book of Genesis, including the iconic 'Creation of Adam,' are considered milestones in Western art history. Later, between 1536 and 1541, Michelangelo returned to paint 'The Last Judgment' on the altar wall. The chapel's side walls also feature significant works by masters such as Botticelli, Perugino, and Ghirlandaio. Beyond its artistic wealth, the Sistine Chapel remains a place of profound spiritual and symbolic significance for the Catholic Church and Christianity worldwide.",
    },
    factsAdvanced: {
      de: ["Die Kapelle wurde nach Papst Sixtus IV. benannt, der den Bau 1473 in Auftrag gab.", "Michelangelo benötigte vier Jahre (1508-1512), um das Deckengewölbe zu bemalen.", "Das Deckenfresko umfasst eine Fläche von etwa 1.100 Quadratmetern.", "Die Kapelle ist der offizielle Ort für das Konklave zur Papstwahl.", "An den Wänden befinden sich Fresken von Botticelli, Perugino und Ghirlandaio.", "Fotografieren und Filmen ist im Inneren der Kapelle strengstens verboten."],
      hu: ["A kápolna IV. Sixtus pápáról kapta a nevét, aki 1473-ban rendelte el az építését.", "Michelangelo 1508 és 1512 között, négy év alatt festette meg a mennyezetet.", "A mennyezetfreskó több mint 300 alakot ábrázol a Biblia történeteiből.", "Az oltárfalon látható Az utolsó ítélet freskó 25 évvel a mennyezet után készült el.", "A kápolna belső méretei megegyeznek a salamoni templom bibliai méreteivel.", "A pápaválasztó konklávé idején két kályhát állítanak fel a szavazólapok elégetéséhez."],
      ro: ["Capela a fost sfințită în 1483 și poartă numele Papei Sixt al IV-lea.", "Michelangelo a pictat peste 300 de figuri pe tavanul capelei într-un interval de 4 ani.", "Suprafața pictată a tavanului este de aproximativ 40 de metri lungime pe 13 metri lățime.", "Este locația oficială unde se adună cardinalii pentru alegerea unui nou papă.", "Faimoasa frescă 'Judecata de Apoi' ocupă întregul perete de deasupra altarului.", "A fost restaurată extensiv între 1980 și 1994 pentru a curăța secolele de funingine."],
      en: ["The chapel was named after Pope Sixtus IV, who commissioned its construction in 1473.", "Michelangelo spent four years (1508-1512) painting the ceiling while standing on scaffolding.", "The ceiling fresco covers over 1,100 square meters and features nine scenes from Genesis.", "It is the exclusive site for the Papal Conclave where new popes are elected.", "The chapel's dimensions were built to match those of the Temple of Solomon in the Bible.", "Photography and filming are strictly prohibited to preserve the integrity of the frescoes."],
    },
  },
  {
    id: "landmark-vatican-gardens",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.903],
    name: {
      de: "Vatikanische Gärten",
      hu: "Vatikáni kertek",
      ro: "Grădinile Vaticane",
      en: "Vatican Gardens"
    },
    description: {
      de: "Eine ausgedehnte Parkanlage, die mehr als die Hälfte des Staatsgebietes einnimmt.",
      hu: "Hatalmas parkrendszer, amely az állam területének több mint felét elfoglalja.",
      ro: "Un vast complex de parcuri care ocupă mai mult de jumătate din teritoriul statului.",
      en: "An extensive park system that occupies more than half of the state's territory."
    }, image: "/poi-images/landmark-vatican-gardens.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Gärten erstrecken sich über etwa 23 Hektar und nehmen damit mehr als die Hälfte der Gesamtfläche der Vatikanstadt ein. Ihre Ursprünge gehen auf das Jahr 1279 zurück, als Papst Nikolaus III. seine Residenz vom Lateran zurück in den Vatikan verlegte und das Gelände mit Mauern einfrieden ließ. Innerhalb dieser Anlage legte er einen Obstgarten, einen Rasen und einen Garten an. Während der Renaissance und des Barocks wurde das Areal unter Architekten wie Donato Bramante und Pirro Ligorio umfassend umgestaltet, wobei zahlreiche Brunnen, Statuen und Tempel hinzugefügt wurden. Heute präsentieren sich die Gärten als komplexe Parklandschaft, die verschiedene Stile wie den italienischen, französischen und englischen Garten vereint. Neben ihrer Funktion als Ort der Meditation für die Päpste beherbergen die Gärten auch wichtige administrative Gebäude wie das Governatorat und den Radio Vatikan.",
      hu: "A Vatikáni Kertek mintegy 23 hektáron terülnek el, ami a Vatikán teljes területének több mint felét teszi ki. Történetük 1279-ig nyúlik vissza, amikor III. Miklós pápa a Lateránból a Vatikánba helyezte át székhelyét, és a területet falakkal vétette körül. Ekkor létesítettek itt gyümölcsöskertet, pázsitot és pihenőkertet. A reneszánsz és a barokk korban olyan neves építészek alakították át a területet, mint Donato Bramante és Pirro Ligorio, számos kutat, szobrot és pavilont emelve. A kertek mai arculata különböző kertépítészeti stílusokat ötvöz, megtalálható benne az olasz, a francia és az angol kertépítészet eleme is. A kertek nemcsak a pápák elmélyülését szolgálják, hanem itt találhatók olyan fontos épületek is, mint a Kormányzósági Palota és a Vatikáni Rádió adótornyai.",
      ro: "Grădinile Vaticanului se întind pe aproximativ 23 de hectare, ocupând mai mult de jumătate din suprafața totală a Statului Cetății Vaticanului. Originile lor datează din anul 1279, când Papa Nicolae al III-lea și-a mutat reședința de la Lateran înapoi la Vatican și a împrejmuit zona cu ziduri. În cadrul acestei incinte, el a înființat o livadă, o peluză și o grădină propriu-zisă. În timpul Renașterii și al Barocului, zona a fost transformată radical de arhitecți precum Donato Bramante și Pirro Ligorio, care au adăugat numeroase fântâni, statui și temple. Astăzi, grădinile reprezintă un peisaj complex care îmbină diverse stiluri, cum ar fi cel italian, francez și englez. Pe lângă rolul lor de spațiu de meditație pentru pontifi, grădinile găzduiesc și clădiri administrative importante, inclusiv Palatul Guvernatoratului și sediul Radio Vatican.",
      en: "The Vatican Gardens cover approximately 23 hectares, accounting for more than half of the total area of Vatican City. Their origins date back to 1279 when Pope Nicholas III moved the papal residence from the Lateran back to the Vatican and enclosed the area with walls. Within this perimeter, he established an orchard, a lawn, and a formal garden. During the Renaissance and Baroque periods, the area was extensively redesigned by architects such as Donato Bramante and Pirro Ligorio, who added numerous fountains, statues, and small temples. Today, the gardens present a complex park landscape that combines various styles, including Italian, French, and English garden design. In addition to serving as a place of meditation for the Popes, the gardens also house important administrative buildings such as the Governorate Palace and the towers of Vatican Radio.",
    },
    factsAdvanced: {
      de: ["Die Gärten umfassen etwa 23 Hektar Landfläche.", "Papst Nikolaus III. begründete die Anlage im Jahr 1279.", "Der Casina Pio IV wurde 1558 als päpstliches Gartenhaus errichtet.", "In den Gärten befinden sich mehrere Mariengrotten, darunter eine Kopie von Lourdes.", "Das Governatorat im Zentrum der Gärten wurde 1927 bis 1931 erbaut.", "Die Gärten beherbergen den Hubschrauberlandeplatz des Vatikans seit 1976."],
      hu: ["A kertek területe körülbelül 23 hektár, a Vatikán 57%-a.", "III. Miklós pápa alapította a kertet a 13. század végén.", "A Casina Pio IV épülete 1558-ban készült el nyári lakként.", "A kertekben található a lourdes-i barlang hű másolata.", "A Kormányzósági Palota 1927 és 1931 között épült fel.", "A vatikáni helikopter-leszálló 1976 óta üzemel a kertekben."],
      ro: ["Grădinile acoperă aproximativ 23 de hectare de teren.", "Papa Nicolae al III-lea a fondat grădinile în anul 1279.", "Casina Pio IV a fost construită în 1558 ca reședință de vară.", "Grădinile adăpostesc o replică a Grotei de la Lourdes.", "Palatul Guvernatoratului a fost construit între anii 1927 și 1931.", "Heliportul Vaticanului este situat în aceste grădini din 1976."],
      en: ["The gardens span approximately 23 hectares of land.", "Pope Nicholas III established the area in the year 1279.", "The Casina Pio IV was built in 1558 as a papal villa.", "The gardens contain several grottoes, including a replica of Lourdes.", "The Governorate Palace was constructed between 1927 and 1931.", "The Vatican Heliport has been operational in the gardens since 1976."],
    },
  },
  {
    id: "landmark-apostolic-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.904],
    name: {
      de: "Apostolischer Palast",
      hu: "Apostoli Palota",
      ro: "Palatul Apostolic",
      en: "Apostolic Palace"
    },
    description: {
      de: "Die offizielle Residenz des Papstes im Vatikan.",
      hu: "A pápa hivatalos rezidenciája a Vatikánban.",
      ro: "Reședința oficială a Papei în Vatican.",
      en: "The official residence of the Pope in the Vatican."
    }, image: "/poi-images/landmark-apostolic-palace.webp",
    descriptionAdvanced: {
      de: "Der Apostolische Palast, auch Papstpalast genannt, ist die offizielle Residenz des Papstes in der Vatikanstadt. Das heutige Gebäudeensemble entstand größtenteils ab dem späten 16. Jahrhundert unter Papst Sixtus V., wobei ältere Strukturen integriert wurden. Der Palast umfasst mehr als 1.000 Räume, darunter die päpstlichen Appartements, Regierungsbüros der römischen Kurie, Kapellen und Teile der Vatikanischen Museen. Zu den bekanntesten Bestandteilen gehören die Sixtinische Kapelle mit den Fresken Michelangelos und die Raffael-Stanzen. Die Architektur ist durch verschiedene Epochen geprägt, von mittelalterlichen Verteidigungsanlagen bis hin zu hochrenaissancistischen Prachtbauten. Während die meisten Päpste hier residierten, wählte Papst Franziskus nach seiner Wahl das Gästehaus Santa Marta als ständigen Wohnsitz, nutzt den Palast jedoch weiterhin für offizielle Audienzen und das wöchentliche Angelusgebet vom Fenster des Arbeitszimmers aus.",
      hu: "Az Apostoli Palota, más néven Pápai Palota, a pápa hivatalos rezidenciája a Vatikánban. A mai épületegyüttes nagy része a 16. század végén, V. Szixtusz pápa idején nyerte el formáját, korábbi épületrészek integrálásával. A palota több mint 1000 helyiséget foglal magában, köztük a pápai lakosztályokat, a Római Kúria kormányzati irodáit, kápolnákat és a Vatikáni Múzeumok bizonyos részeit. Legismertebb részei közé tartozik a Michelangelo freskóival díszített Sixtus-kápolna és a Raffaello-stanziák. Építészete különböző korszakokat tükröz, a középkori erődítményektől a magasreneszánsz palotákig. Bár a legtöbb pápa itt lakott, Ferenc pápa megválasztása után a Szent Márta-házat választotta állandó lakhelyéül, de a palotát továbbra is használja hivatalos audienciákra és a vasárnapi Úrangyala imádságra.",
      ro: "Palatul Apostolic, cunoscut și sub numele de Palatul Papal, este reședința oficială a Papei în Cetatea Vaticanului. Complexul actual de clădiri a luat formă în mare parte începând cu sfârșitul secolului al XVI-lea sub Papa Sixtus al V-lea, integrând structuri mai vechi. Palatul cuprinde peste 1.000 de camere, inclusiv apartamentele papale, birourile guvernamentale ale Curiei Romane, capele și părți ale Muzeelor Vaticane. Printre cele mai renumite componente se numără Capela Sixtină, cu frescele lui Michelangelo, și Stanze di Raffaello. Arhitectura sa este marcată de diverse epoci, de la fortificații medievale la edificii somptuoase din perioada înaltei Renașteri. Deși majoritatea papilor au locuit aici, Papa Francisc a ales după alegerea sa Casa Sfânta Marta ca reședință permanentă, dar continuă să folosească palatul pentru audiențe oficiale și rugăciunea Angelus.",
      en: "The Apostolic Palace, also known as the Papal Palace, is the official residence of the Pope in Vatican City. The current complex of buildings was largely constructed starting in the late 16th century under Pope Sixtus V, incorporating older structures. The palace contains more than 1,000 rooms, including the papal apartments, government offices of the Roman Curia, chapels, and parts of the Vatican Museums. Among its most famous components are the Sistine Chapel with Michelangelo's frescoes and the Raphael Rooms. The architecture reflects various periods, from medieval fortifications to High Renaissance splendor. While most Popes resided here, Pope Francis chose the Saint Martha House as his permanent residence after his election, though he still uses the palace for official audiences and the weekly Angelus prayer from the study window.",
    },
    factsAdvanced: {
      de: ["Der Palast beherbergt insgesamt über 1.000 Räume.", "Papst Sixtus V. beauftragte 1589 den Bau des heutigen Haupttraktes.", "Die Sixtinische Kapelle wurde zwischen 1473 und 1481 erbaut.", "Die Scala Regia von Bernini verbindet den Palast mit dem Petersdom.", "Die berühmten Loggien wurden von Raffael und seinen Schülern dekoriert.", "Der Palast ist der Ort, an dem das Konklave zur Papstwahl stattfindet."],
      hu: ["A palota összesen több mint 1000 helyiséget tartalmaz.", "V. Szixtusz pápa 1589-ben rendelte meg a mai főszárny építését.", "A Sixtus-kápolna 1473 és 1481 között épült fel.", "A Bernini által tervezett Scala Regia köti össze a palotát a bazilikával.", "A híres loggiákat Raffaello és tanítványai díszítették freskókkal.", "A palota ad otthont a pápaválasztó konklávénak."],
      ro: ["Palatul găzduiește în total peste 1.000 de camere.", "Papa Sixtus al V-lea a comandat construcția aripii principale în 1589.", "Capela Sixtină a fost construită între anii 1473 și 1481.", "Scala Regia, proiectată de Bernini, leagă palatul de Bazilica Sf. Petru.", "Loggiile celebre au fost decorate de Rafael și elevii săi.", "Palatul este locul unde se desfășoară conclavul pentru alegerea papei."],
      en: ["The palace houses a total of over 1,000 rooms.", "Pope Sixtus V commissioned the current main wing in 1589.", "The Sistine Chapel was constructed between 1473 and 1481.", "The Scala Regia by Bernini connects the palace to St. Peter's Basilica.", "The famous Loggias were decorated by Raphael and his pupils.", "The palace is the location where the conclave for papal elections is held."],
    },
  },
  {
    id: "landmark-swiss-guard-barracks",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.905],
    name: {
      de: "Kaserne der Schweizergarde",
      hu: "Svájci Gárda laktanyája",
      ro: "Cazarma Gărzii Elvețiene",
      en: "Swiss Guard Barracks"
    },
    description: {
      de: "Der Ort, an dem die kleinste Armee der Welt stationiert ist.",
      hu: "A hely, ahol a világ legkisebb hadserege állomásozik.",
      ro: "Locul unde este staționată cea mai mică armată din lume.",
      en: "The place where the smallest army in the world is stationed."
    },
    descriptionAdvanced: {
      de: "Die Kaserne der Päpstlichen Schweizergarde befindet sich im nordöstlichen Teil der Vatikanstadt, in der Nähe des Eingangs Sant'Anna. Diese militärische Einrichtung dient als Unterkunft und Ausbildungsstätte für die kleinste Armee der Welt, die seit 1506 für den Schutz des Papstes verantwortlich ist. Die Kaserne umfasst Wohnbereiche für die Gardisten, Verwaltungsräume, eine eigene Kantine sowie eine Waffenkammer, in der sowohl historische Hellebarden als auch moderne Schusswaffen gelagert werden. Der Gebäudekomplex stammt teilweise aus dem 19. Jahrhundert, ist jedoch aufgrund der gestiegenen Anforderungen und der Vergrößerung der Garde auf 135 Mann an seine Kapazitätsgrenzen gestoßen. Aktuell gibt es Pläne für einen umfassenden Neubau der Kaserne, um modernere Standards und Unterbringungsmöglichkeiten für Gardisten mit Familien zu schaffen, wobei die historische Fassade zum Vatikan hin respektiert werden soll.",
      hu: "A Pápai Svájci Gárda kaszárnyája a Vatikán északkeleti részén, a Szent Anna-kapu közelében található. Ez a katonai létesítmény szolgál a világ legkisebb hadseregének szálláshelyeként és kiképzőközpontjaként, amely 1506 óta felelős a pápa biztonságáért. A kaszárnya magában foglalja a gárdisták lakrészeit, adminisztrációs irodákat, egy saját étkezdét és a fegyvertárat, ahol a történelmi bárdok mellett modern lőfegyvereket is őriznek. Az épületegyüttes részben a 19. századból származik, de a gárda létszámának 135 főre emelése miatt mára szűkössé vált. Jelenleg tervek vannak a kaszárnya teljes újjáépítésére, hogy modern szállást biztosítsanak a gárdistáknak és családjaiknak, miközben tiszteletben tartják a Vatikán felé néző történelmi homlokzatot.",
      ro: "Cazarma Gărzii Elvețiene Pontificale este situată în partea de nord-est a Cetății Vaticanului, lângă intrarea Sant'Anna. Această facilitate militară servește drept locuință și centru de instruire pentru cea mai mică armată din lume, care este responsabilă pentru protecția Papei încă din 1506. Cazarma cuprinde zone rezidențiale pentru gardiști, birouri administrative, o cantină proprie și o armurărie unde sunt depozitate atât halebarde istorice, cât și arme de foc moderne. Complexul de clădiri datează parțial din secolul al XIX-lea, dar a ajuns la limitele capacității sale din cauza creșterii efectivelor gărzii la 135 de oameni. În prezent, există planuri pentru o reconstrucție completă a cazarmei pentru a oferi standarde moderne și locuințe pentru gardiștii cu familii, respectând în același timp fațada istorică orientată spre Vatican.",
      en: "The barracks of the Pontifical Swiss Guard are located in the northeastern part of Vatican City, near the Sant'Anna entrance. This military facility serves as the housing and training center for the world's smallest army, which has been responsible for the protection of the Pope since 1506. The barracks include residential areas for the guardsmen, administrative offices, a dedicated canteen, and an armory where both historical halberds and modern firearms are stored. Parts of the building complex date back to the 19th century, but it has reached its capacity limits due to the increase of the guard's strength to 135 men. Currently, there are plans for a comprehensive reconstruction of the barracks to provide modern standards and accommodation for guardsmen with families, while respecting the historic facade facing the Vatican.",
    },
    factsAdvanced: {
      de: ["Die Schweizergarde wurde am 22. Januar 1506 offiziell gegründet.", "Die aktuelle Sollstärke der Garde beträgt 135 Mann.", "Gardisten müssen Schweizer Bürger und katholisch sein.", "Die Kaserne befindet sich direkt hinter der Porta Sant'Anna.", "Ein umfassendes Neubauprojekt der Kaserne ist für ca. 2026-2030 geplant.", "Die Waffenkammer beherbergt Rüstungen aus dem 16. Jahrhundert."],
      hu: ["A Svájci Gárdát hivatalosan 1506. január 22-én alapították.", "A gárda jelenlegi engedélyezett létszáma 135 fő.", "A gárdistáknak svájci állampolgárnak és katolikusnak kell lenniük.", "A kaszárnya közvetlenül a Szent Anna-kapu mögött található.", "A kaszárnya teljes újjáépítését 2026 és 2030 közé tervezik.", "A fegyvertárban 16. századi páncélokat is őriznek."],
      ro: ["Garda Elvețiană a fost fondată oficial la 22 ianuarie 1506.", "Efectivul actual al gărzii este stabilit la 135 de oameni.", "Gardiștii trebuie să fie cetățeni elvețieni și catolici.", "Cazarma este situată direct în spatele Porții Sant'Anna.", "Un proiect major de reconstrucție este planificat pentru 2026-2030.", "Armurăria găzduiește armuri care datează din secolul al XVI-lea."],
      en: ["The Swiss Guard was officially founded on January 22, 1506.", "The current authorized strength of the guard is 135 men.", "Guardsmen must be Swiss citizens and Roman Catholic.", "The barracks are located immediately behind the Porta Sant'Anna.", "A major reconstruction project is planned for approximately 2026-2030.", "The armory houses suits of armor dating back to the 16th century."],
    },
    image: "/poi-images/landmark-swiss-guard-barracks.webp",
  },
  {
    id: "landmark-vatican-library",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.905],
    name: {
      de: "Vatikanische Bibliothek",
      hu: "Vatikáni Könyvtár",
      ro: "Biblioteca Vaticană",
      en: "Vatican Library"
    },
    description: {
      de: "Eine der ältesten Bibliotheken der Welt mit extrem wertvollen Manuskripten.",
      hu: "A világ egyik legrégebbi könyvtára rendkívül értékes kéziratokkal.",
      ro: "Una dintre cele mai vechi biblioteci din lume, cu manuscrise extrem de valoroase.",
      en: "One of the oldest libraries in the world with extremely valuable manuscripts."
    }, image: "/poi-images/landmark-vatican-library.webp",
    descriptionAdvanced: {
      de: "Die Vatikanische Apostolische Bibliothek (Biblioteca Apostolica Vaticana) ist eine der bedeutendsten wissenschaftlichen Bibliotheken der Welt. Sie wurde 1475 von Papst Sixtus IV. offiziell begründet, obwohl ihre Sammlungen bis in die Frühzeit der Kirche zurückreichen. Die Bibliothek beherbergt etwa 1,1 Millionen gedruckte Bücher, 150.000 Manuskripte und über 8.000 Inkunabeln (Wiegendrucke). Zu ihren kostbarsten Schätzen gehört der Codex Vaticanus, eine der ältesten fast vollständig erhaltenen Handschriften der griechischen Bibel aus dem 4. Jahrhundert. Die Räumlichkeiten sind für ihre prachtvolle Dekoration bekannt, insbesondere der Salone Sistino, der von Domenico Fontana Ende des 16. Jahrhunderts entworfen wurde. Als Forschungsbibliothek steht sie qualifizierten Wissenschaftlern zur Verfügung und spielt eine zentrale Rolle in der Bewahrung des globalen kulturellen Erbes durch modernste Digitalisierungsprojekte.",
      hu: "A Vatikáni Apostoli Könyvtár (Biblioteca Apostolica Vaticana) a világ egyik legjelentősebb tudományos gyűjteménye. Hivatalosan IV. Szixtusz pápa alapította 1475-ben, bár gyökerei az egyház korai időszakáig nyúlnak vissza. A könyvtár körülbelül 1,1 millió nyomtatott könyvet, 150 000 kéziratot és több mint 8000 ősnyomtatványt (inkunábulumot) őriz. Legértékesebb kincsei közé tartozik a Codex Vaticanus, a görög nyelvű Biblia egyik legrégebbi, a 4. századból származó kézirata. Az épület belső terei lenyűgözőek, különösen a Domenico Fontana által a 16. század végén tervezett Szixtusz-terem. Kutatókönyvtárként csak képzett szakemberek számára látogatható, és központi szerepet játszik a világ kulturális örökségének megőrzésében a legmodernebb digitalizációs eljárások révén.",
      ro: "Biblioteca Apostolică Vaticană (Biblioteca Apostolica Vaticana) este una dintre cele mai importante biblioteci științifice din lume. A fost fondată oficial în 1475 de Papa Sixtus al IV-lea, deși colecțiile sale datează din primele secole ale Bisericii. Biblioteca găzduiește aproximativ 1,1 milioane de cărți tipărite, 150.000 de manuscrise și peste 8.000 de incunabule (cărți tipărite înainte de 1501). Printre cele mai prețioase comori se numără Codex Vaticanus, unul dintre cele mai vechi manuscrise aproape complete ale Bibliei grecești, datând din secolul al IV-lea. Sălile sale sunt renumite pentru decorațiunile magnifice, în special Salone Sistino, proiectat de Domenico Fontana la sfârșitul secolului al XVI-lea. Ca bibliotecă de cercetare, este deschisă cercetătorilor calificați și joacă un rol central în conservarea patrimoniului cultural global prin proiecte avansate de digitalizare.",
      en: "The Vatican Apostolic Library (Biblioteca Apostolica Vaticana) is one of the world's most significant research libraries. It was officially established in 1475 by Pope Sixtus IV, though its collections date back to the early days of the Church. The library houses approximately 1.1 million printed books, 150,000 manuscripts, and over 8,000 incunabula (books printed before 1501). Among its most precious treasures is the Codex Vaticanus, one of the oldest nearly complete manuscripts of the Greek Bible, dating from the 4th century. The premises are known for their magnificent decoration, particularly the Salone Sistino, designed by Domenico Fontana in the late 16th century. As a research library, it is available to qualified scholars and plays a central role in preserving global cultural heritage through state-of-the-art digitization projects.",
    },
    factsAdvanced: {
      de: ["Die Bibliothek wurde am 15. Juni 1475 offiziell gegründet.", "Der Bestand umfasst über 1,1 Millionen gedruckte Bände.", "Es werden dort ca. 150.000 wertvolle Manuskripte aufbewahrt.", "Der Salone Sistino ist 70 Meter lang und 15 Meter breit.", "Die Bibliothek besitzt eine eigene Restaurierungswerkstatt.", "Seit 2010 läuft ein Projekt zur Digitalisierung aller Manuskripte."],
      hu: ["A könyvtárat hivatalosan 1475. június 15-én alapították.", "A gyűjtemény több mint 1,1 millió nyomtatott kötetet tartalmaz.", "Körülbelül 150 000 értékes kéziratot őriznek a falai között.", "A Szixtusz-terem 70 méter hosszú és 15 méter széles.", "A könyvtár saját restauráló műhellyel rendelkezik.", "2010 óta zajlik a kéziratok teljes körű digitalizálása."],
      ro: ["Biblioteca a fost fondată oficial la 15 iunie 1475.", "Colecția cuprinde peste 1,1 milioane de volume tipărite.", "Aproximativ 150.000 de manuscrise valoroase sunt păstrate aici.", "Salone Sistino are o lungime de 70 de metri și o lățime de 15 metri.", "Biblioteca deține propriul laborator de restaurare.", "Din 2010, se desfășoară un proiect de digitalizare a tuturor manuscriselor."],
      en: ["The library was officially established on June 15, 1475.", "The collection includes over 1.1 million printed volumes.", "Approximately 150,000 precious manuscripts are stored here.", "The Salone Sistino is 70 meters long and 15 meters wide.", "The library maintains its own restoration workshop.", "A project to digitize all manuscripts has been ongoing since 2010."],
    },
  },
  {
    id: "landmark-vatican-grottoes",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4539, 41.9022],
    name: {
      de: "Vatikanische Grotten",
      hu: "Vatikáni barlangok",
      ro: "Grotele Vaticane",
      en: "Vatican Grottoes"
    },
    description: {
      de: "Unterirdische Grabanlagen unter dem Petersdom mit Papstgräbern.",
      hu: "Föld alatti sírrendszer a Szent Péter-bazilika alatt pápai sírokkal.",
      ro: "Ansamblu subteran de morminte sub Bazilica Sfântul Petru cu morminte papale.",
      en: "Underground tomb complexes under St. Peter's Basilica with papal tombs."
    }, image: "/poi-images/landmark-vatican-grottoes.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Grotten befinden sich unterhalb des Hauptschiffes des Petersdoms und bilden ein weitläufiges System von Grabkapellen und Gängen. Sie liegen auf dem Niveau der ursprünglichen konstantinischen Basilika aus dem 4. Jahrhundert, etwa drei Meter unter dem heutigen Boden des Doms. Die Grotten beherbergen die Gräber zahlreicher Päpste, darunter Johannes Paul II. (bis zu seiner Heiligsprechung), Benedikt XVI. und Paul VI., sowie bedeutender historischer Persönlichkeiten wie Kaiser Otto II. Neben den Grabstätten finden sich hier wertvolle Kunstwerke aus der alten Basilika, antike Sarkophage und die klementinische Kapelle, die sich direkt über dem vermuteten Grab des Apostels Petrus befindet. Diese Anlage dient nicht nur als Nekropole, sondern auch als wichtiger Ort des Gebets und der historischen Dokumentation der päpstlichen Geschichte über zwei Jahrtausende hinweg.",
      hu: "A Vatikáni Grották a Szent Péter-bazilika főhajója alatt helyezkednek el, és sírkápolnák, valamint folyosók kiterjedt rendszerét alkotják. A 4. századi eredeti konstantini bazilika szintjén találhatók, körülbelül három méterrel a jelenlegi templompadló alatt. A grották számos pápa sírhelyének adnak otthont, köztük II. János Pálnak (szentté avatásáig), XVI. Benedeknek és VI. Pálnak, valamint olyan történelmi személyiségeknek, mint II. Ottó német-római császár. A sírokon kívül az épületegyüttesben a régi bazilikából származó értékes műalkotások, ókori szarkofágok és a Kelemen-kápolna is megtalálható, amely közvetlenül Szent Péter apostol feltételezett sírja felett helyezkedik el. Ez a terület nemcsak nekropoliszként szolgál, hanem az imádság és a pápaság kétezer éves történelmének fontos helyszíne is.",
      ro: "Grotele Vaticane sunt situate sub nava principală a Bazilicii Sfântul Petru și formează un sistem vast de capele funerare și coridoare. Acestea se află la nivelul bazilicii constantiniene originale din secolul al IV-lea, la aproximativ trei metri sub podeaua actuală a bazilicii. Grotele adăpostesc mormintele a numeroși papi, printre care Ioan Paul al II-lea (până la canonizarea sa), Benedict al XVI-lea și Paul al VI-lea, precum și personalități istorice importante, cum ar fi împăratul Otto al II-lea. Pe lângă locurile de veșnică odihnă, aici se găsesc opere de artă valoroase din vechea bazilică, sarcofage antice și Capela Clementină, situată direct deasupra mormântului presupus al Sfântului Apostol Petru. Acest complex servește nu doar ca necropolă, ci și ca loc important de rugăciune și documentare istorică a succesiunii papale de-a lungul a două milenii.",
      en: "The Vatican Grottoes are located beneath the main nave of St. Peter's Basilica and form an extensive system of burial chapels and corridors. They sit at the level of the original Constantinian basilica from the 4th century, about three meters below the current floor of the basilica. The grottoes house the tombs of numerous Popes, including John Paul II (until his canonization), Benedict XVI, and Paul VI, as well as significant historical figures such as Emperor Otto II. Besides the tombs, the complex contains valuable artworks from the old basilica, ancient sarcophagi, and the Clementine Chapel, which is situated directly above the presumed tomb of St. Peter the Apostle. This area serves not only as a necropolis but also as an important place of prayer and historical documentation of papal history across two millennia.",
    },
    factsAdvanced: {
      de: ["Die Grotten liegen ca. 3 Meter unter dem Boden des Petersdoms.", "Über 90 Päpste sind in den Grotten oder der Basilika bestattet.", "Kaiser Otto II. ist der einzige deutsche Kaiser, der dort ruht.", "Die klementinische Kapelle wurde von Papst Clemens VIII. gestiftet.", "Die Grotten folgen dem Grundriss der alten konstantinischen Basilika.", "Der Zugang erfolgt meist über die Pfeiler der Kuppel im Dom."],
      hu: ["A grották kb. 3 méterrel a bazilika padlószintje alatt vannak.", "Több mint 90 pápát temettek el a grottákban vagy a bazilikában.", "II. Ottó az egyetlen német-római császár, aki itt nyugszik.", "A Kelemen-kápolnát VIII. Kelemen pápa alapította.", "A grották alaprajza a régi konstantini bazilikát követi.", "A lejárat általában a kupolát tartó pillérek egyikénél található."],
      ro: ["Grotele se află la cca. 3 metri sub podeaua Bazilicii Sf. Petru.", "Peste 90 de papi sunt înmormântați în grote sau în bazilică.", "Împăratul Otto al II-lea este singurul împărat german înmormântat aici.", "Capela Clementină a fost ctitorită de Papa Clement al VIII-lea.", "Grotele urmează planul vechii bazilici constantiniene.", "Accesul se face de obicei prin pilonii cupolei din bazilică."],
      en: ["The grottoes lie about 3 meters below the floor of the basilica.", "Over 90 Popes are buried in the grottoes or the main basilica.", "Emperor Otto II is the only German Emperor buried there.", "The Clementine Chapel was donated by Pope Clement VIII.", "The grottoes follow the floor plan of the old Constantinian basilica.", "Access is usually through the pillars of the dome in the basilica."],
    },
  },
  {
    id: "landmark-pope-paul-vi-audience-hall",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.453, 41.901],
    name: {
      de: "Audienzhalle Papst Paul VI.",
      hu: "VI. Pál pápa auditóriuma",
      ro: "Aula Papa Paul al VI-lea",
      en: "Pope Paul VI Audience Hall"
    },
    description: {
      de: "Ein modernes Gebäude für päpstliche Generalaudienzen.",
      hu: "Modern épület a pápai általános kihallgatások számára.",
      ro: "O clădire modernă pentru audiențele papale generale.",
      en: "A modern building for papal general audiences."
    }, image: "/poi-images/landmark-pope-paul-vi-audience-hall.webp",
    descriptionAdvanced: {
      de: "Die Audienzhalle Papst Paul VI., auch Aula Nervi genannt, ist ein markantes Bauwerk der Moderne, das teilweise auf dem Territorium des Vatikans und teilweise auf italienischem Staatsgebiet liegt. Sie wurde zwischen 1966 und 1971 nach Plänen des italienischen Architekten Pier Luigi Nervi errichtet. Die Halle ist berühmt für ihre skulpturale Stahlbetonkonstruktion und das wellenförmige Dach, das ohne stützende Säulen im Innenraum auskommt, um allen bis zu 6.300 Besuchern eine uneingeschränkte Sicht auf den Papst zu ermöglichen. Hinter dem päpstlichen Thron befindet sich die monumentale Bronzeskulptur 'La Resurrezione' (Die Auferstehung) von Pericle Fazzini, die die Auferstehung Christi aus einem Atompilz darstellt. Die Halle wird hauptsächlich für Generalaudienzen am Mittwoch während der Wintermonate oder bei schlechtem Wetter genutzt und ist zudem mit einer großen Orgel ausgestattet.",
      hu: "A VI. Pál pápa audiencia-terem, más néven Aula Nervi, a modern építészet kiemelkedő alkotása, amely részben vatikáni, részben olasz területen fekszik. 1966 és 1971 között épült Pier Luigi Nervi olasz építész tervei alapján. A csarnok híres különleges vasbeton szerkezetéről és hullámzó tetejéről, amely belső tartóoszlopok nélkül készült, így mind a 6300 látogató számára zavartalan kilátást biztosít a pápára. A pápai trón mögött található Pericle Fazzini monumentális bronzszobra, a 'La Resurrezione' (A feltámadás), amely Krisztus feltámadását ábrázolja egy atomfelhőből. A termet elsősorban a szerdai általános audienciákra használják a téli hónapokban vagy rossz idő esetén, emellett egy hatalmas orgonával is rendelkezik.",
      ro: "Aula Paul al VI-lea, cunoscută și sub numele de Aula Nervi, este o structură proeminentă a arhitecturii moderne, situată parțial pe teritoriul Vaticanului și parțial pe cel al Italiei. A fost construită între 1966 și 1971 după planurile arhitectului italian Pier Luigi Nervi. Sala este celebră pentru construcția sa sculpturală din beton armat și acoperișul ondulat care nu necesită coloane de susținere în interior, oferind o vizibilitate neobstrucționată papei pentru toți cei până la 6.300 de vizitatori. În spatele tronului papal se află sculptura monumentală din bronz „La Resurrezione” (Învierea) de Pericle Fazzini, care înfățișează învierea lui Hristos dintr-un nor atomic. Sala este utilizată în principal pentru audiențele generale de miercuri în lunile de iarnă sau în caz de vreme nefavorabilă și este dotată cu o orgă de mari dimensiuni.",
      en: "The Pope Paul VI Audience Hall, also known as the Aula Nervi, is a prominent work of modern architecture situated partly in Vatican territory and partly in Italy. It was built between 1966 and 1971 according to the designs of Italian architect Pier Luigi Nervi. The hall is famous for its sculptural reinforced concrete construction and undulating roof, which functions without internal supporting columns to provide an unobstructed view of the Pope for all up to 6,300 visitors. Behind the papal throne stands the monumental bronze sculpture 'La Resurrezione' (The Resurrection) by Pericle Fazzini, depicting Christ rising from an atomic explosion. The hall is primarily used for General Audiences on Wednesdays during winter months or inclement weather and is also equipped with a large pipe organ.",
    },
    factsAdvanced: {
      de: ["Die Halle wurde am 30. Juni 1971 eingeweiht.", "Sie bietet Platz für maximal 6.300 sitzende Personen.", "Die Bronzeskulptur 'La Resurrezione' wiegt ca. 80 Tonnen.", "Auf dem Dach befinden sich 2.400 Solarpaneele zur Energiegewinnung.", "Das Gebäude ist exterritoriales Eigentum des Heiligen Stuhls.", "Der Architekt Pier Luigi Nervi war ein Pionier des Betonbaus."],
      hu: ["A termet 1971. június 30-án avatták fel.", "Maximum 6300 ülőhelyet kínál a látogatók számára.", "A 'La Resurrezione' bronzszobor súlya kb. 80 tonna.", "A tetőn 2400 napelem biztosítja az épület energiaellátását.", "Az épület a Szentszék területenkívüli tulajdonát képezi.", "Pier Luigi Nervi a modern vasbeton építészet úttörője volt."],
      ro: ["Aula a fost inaugurată la 30 iunie 1971.", "Oferă spațiu pentru maximum 6.300 de persoane pe scaune.", "Sculptura din bronz 'La Resurrezione' cântărește cca. 80 de tone.", "Pe acoperiș sunt instalate 2.400 de panouri solare pentru energie.", "Clădirea este proprietate extrateritorială a Sfântului Scaun.", "Arhitectul Pier Luigi Nervi a fost un pionier al betonului armat."],
      en: ["The hall was inaugurated on June 30, 1971.", "It provides seating for a maximum of 6,300 people.", "The bronze sculpture 'La Resurrezione' weighs about 80 tons.", "The roof features 2,400 solar panels for energy production.", "The building is extraterritorial property of the Holy See.", "Architect Pier Luigi Nervi was a pioneer of concrete construction."],
    },
  },
  {
    id: "landmark-vatican-post-office",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.903],
    name: {
      de: "Vatikanische Post",
      hu: "Vatikáni posta",
      ro: "Poșta Vaticană",
      en: "Vatican Post Office"
    },
    description: {
      de: "Der Postdienst des Vatikans, bekannt für seine eigenen Briefmarken.",
      hu: "A Vatikán postai szolgáltatása, mely saját bélyegeiről ismert.",
      ro: "Serviciul poștal al Vaticanului, cunoscut pentru propriile sale timbre.",
      en: "The postal service of the Vatican, known for its own stamps."
    }, image: "/poi-images/landmark-vatican-post-office.webp",
    descriptionAdvanced: {
      de: "Die Vatikanische Post (Poste Vaticane) ist die staatliche Postverwaltung der Vatikanstadt und gilt als eines der effizientesten Postsysteme der Welt. Sie wurde nach der Unterzeichnung der Lateranverträge im Jahr 1929 gegründet und trat im selben Jahr dem Weltpostverein bei. Die Post betreibt mehrere Schalter, wobei sich der Hauptsitz direkt neben dem Petersdom befindet. Ein besonderes Merkmal sind die eigenen Briefmarken des Vatikans, die bei Sammlern weltweit hoch begehrt sind und nur für Post verwendet werden dürfen, die innerhalb der Vatikanstadt aufgegeben wird. Jährlich werden Millionen von Briefen und Postkarten über das vatikanische System verschickt, oft von Touristen, welche die Zuverlässigkeit und den besonderen Stempel schätzen. Trotz der geringen Größe des Staates verfügt die Post über eine eigene Fahrzeugflotte und gelbe Briefkästen, die sich optisch von den roten Kästen Italiens abheben.",
      hu: "A Vatikáni Posta (Poste Vaticane) a Vatikán állami postaszolgálata, amelyet a világ egyik leghatékonyabb postai rendszereként tartanak számon. 1929-ben, a lateráni egyezmény aláírása után alapították, és még ugyanabban az évben csatlakozott az Egyetemes Postaegyesülethez. A posta több ügyfélszolgálati hellyel rendelkezik, főhadiszállása közvetlenül a Szent Péter-bazilika mellett található. Különlegessége a saját vatikáni postabélyegek kibocsátása, amelyek a gyűjtők körében világszerte rendkívül népszerűek, és csak a Vatikán területén feladott küldeményekhez használhatók fel. Évente több millió levelet és képeslapot továbbítanak a vatikáni rendszeren keresztül, főként turisták, akik nagyra értékelik a megbízhatóságot és a különleges postai bélyegzőt. A törpeállam ellenére a posta saját járműparkkal és sárga postaládákkal rendelkezik.",
      ro: "Poșta Vaticană (Poste Vaticane) este serviciul poștal de stat al Cetății Vaticanului și este considerat unul dintre cele mai eficiente sisteme poștale din lume. A fost fondată după semnarea Tratatelor de la Lateran în 1929 și a aderat la Uniunea Poștală Universală în același an. Poșta operează mai multe ghișee, sediul central fiind situat chiar lângă Bazilica Sfântul Petru. O caracteristică specială este emiterea propriilor mărci poștale ale Vaticanului, care sunt foarte căutate de colecționari din întreaga lume și pot fi utilizate doar pentru corespondența expediată din interiorul Vaticanului. Anual, milioane de scrisori și cărți poștale sunt trimise prin sistemul vatican, în special de turiști care apreciază fiabilitatea și ștampila poștală distinctivă. În ciuda dimensiunii reduse a statului, poșta dispune de propria flotă de vehicule și cutii poștale galbene.",
      en: "The Vatican Post (Poste Vaticane) is the state postal administration of Vatican City and is considered one of the most efficient postal systems in the world. It was founded following the signing of the Lateran Treaty in 1929 and joined the Universal Postal Union in the same year. The post office operates several counters, with the headquarters located right next to St. Peter's Basilica. A special feature is the issuance of the Vatican's own postage stamps, which are highly sought after by collectors worldwide and can only be used for mail posted within Vatican City. Millions of letters and postcards are sent annually through the Vatican system, often by tourists who appreciate the reliability and the unique postmark. Despite the small size of the state, the post office maintains its own fleet of vehicles and distinctive yellow mailboxes.",
    },
    factsAdvanced: {
      de: ["Die erste vatikanische Briefmarke erschien am 1. August 1929.", "Der Vatikan verschickt pro Kopf mehr Post als jedes andere Land.", "Es gibt vier Postfilialen innerhalb der Vatikanstadt.", "Die Briefkästen im Vatikan sind gelb, in Italien rot.", "Die Post ist seit 1929 Mitglied des Weltpostvereins (UPU).", "Es gibt eine mobile Postfiliale auf dem Petersplatz."],
      hu: ["Az első vatikáni bélyeg 1929. augusztus 1-jén jelent meg.", "Vatikán egy főre vetítve több postát küld, mint bármely más ország.", "A Vatikán területén összesen négy postafiók működik.", "A vatikáni postaládák sárgák, szemben az olasz pirosakkal.", "A posta 1929 óta tagja az Egyetemes Postaegyesületnek (UPU).", "A Szent Péter téren egy mozgó postahivatal is üzemel."],
      ro: ["Primul timbru vatican a fost emis la 1 august 1929.", "Vaticanul trimite mai multă corespondență pe cap de locuitor decât orice țară.", "Există patru oficii poștale în interiorul Cetății Vaticanului.", "Cutiile poștale din Vatican sunt galbene, spre deosebire de cele roșii italiene.", "Poșta este membră a Uniunii Poștale Universale (UPU) din 1929.", "Există un oficiu poștal mobil situat în Piața Sfântul Petru."],
      en: ["The first Vatican stamp was issued on August 1, 1929.", "Vatican City sends more mail per capita than any other country.", "There are four post office branches within Vatican City.", "Mailboxes in the Vatican are yellow, while in Italy they are red.", "The post has been a member of the Universal Postal Union since 1929.", "A mobile post office is frequently located in St. Peter's Square."],
    },
  },
  {
    id: "landmark-vatican-pharmacy",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.456, 41.906],
    name: {
      de: "Vatikanische Apotheke",
      hu: "Vatikáni patika",
      ro: "Farmacia Vaticană",
      en: "Vatican Pharmacy"
    },
    description: {
      de: "Die meistbesuchte Apotheke der Welt.",
      hu: "A világ leglátogatottabb gyógyszertára.",
      ro: "Cea mai vizitată farmacie din lume.",
      en: "The most visited pharmacy in the world."
    },
    descriptionAdvanced: {
      de: "Die Vatikanische Apotheke (Farmacia Vaticana) ist die einzige Apotheke in der Vatikanstadt und gilt als die meistbesuchte Apotheke der Welt. Sie wurde 1874 von Eusebio Ludvig Munnier, einem Mitglied des Ordens der Barmherzigen Brüder (Fatebenefratelli), auf Wunsch von Kardinal Giacomo Antonelli gegründet. Die Apotheke befindet sich in der Nähe des Sant'Anna-Eingangs und erstreckt sich über eine Fläche von etwa 500 Quadratmetern. Sie bietet ein breites Sortiment an Medikamenten aus der ganzen Welt an, von denen viele in Italien nicht erhältlich sind, was sie zu einer wichtigen Anlaufstelle für Patienten aus Rom macht. Jährlich werden etwa 200.000 Rezepte bearbeitet. Neben pharmazeutischen Produkten führt die Apotheke auch eine Auswahl an Parfüms und Kosmetika, die teilweise nach traditionellen Rezepturen hergestellt werden. Der Zugang erfordert ein gültiges Rezept und einen Identitätsnachweis an der Vatikanpforte.",
      hu: "A Vatikáni Patika (Farmacia Vaticana) az egyetlen gyógyszertár a Vatikánban, és a világ legforgalmasabb patikájaként tartják számon. 1874-ben alapította Eusebio Ludvig Munnier, az Irgalmasrend (Fatebenefratelli) tagja, Giacomo Antonelli bíboros kérésére. A gyógyszertár a Szent Anna-kapu közelében található, és körülbelül 500 négyzetméteren terül el. Világszerte gyártott gyógyszerek széles választékát kínálja, amelyek közül sok Olaszországban nem érhető el, így a római lakosok számára is fontos beszerzési forrás. Évente mintegy 200 000 receptet dolgoznak fel. A gyógyszerek mellett a patika saját márkás parfümöket és kozmetikumokat is árul, amelyek részben hagyományos receptek alapján készülnek. A belépéshez érvényes receptre és személyazonossági igazolványra van szükség a vatikáni kapunál.",
      ro: "Farmacia Vaticană (Farmacia Vaticana) este singura farmacie din Cetatea Vaticanului și este considerată cea mai frecventată farmacie din lume. A fost fondată în 1874 de Eusebio Ludvig Munnier, un membru al Ordinului Ospitalier al Sfântului Ioan al lui Dumnezeu (Fatebenefratelli), la cererea cardinalului Giacomo Antonelli. Farmacia este situată lângă intrarea Sant'Anna și se întinde pe o suprafață de aproximativ 500 de metri pătrați. Oferă o gamă largă de medicamente din întreaga lume, multe dintre acestea nefiind disponibile în Italia, ceea ce o face un punct de referință important pentru pacienții din Roma. Anual sunt procesate aproximativ 200.000 de rețete. Pe lângă produsele farmaceutice, farmacia comercializează și o selecție de parfumuri și cosmetice, unele fabricate după rețete tradiționale. Accesul necesită o rețetă valabilă și un act de identitate la poarta Vaticanului.",
      en: "The Vatican Pharmacy (Farmacia Vaticana) is the only pharmacy in Vatican City and is considered the busiest pharmacy in the world. It was founded in 1874 by Eusebio Ludvig Munnier, a member of the Hospitaller Order of St. John of God (Fatebenefratelli), at the request of Cardinal Giacomo Antonelli. The pharmacy is located near the Sant'Anna entrance and covers an area of approximately 500 square meters. It offers a wide range of medications from around the world, many of which are not available in Italy, making it an important resource for patients from Rome. Approximately 200,000 prescriptions are processed annually. In addition to pharmaceutical products, the pharmacy also stocks a selection of perfumes and cosmetics, some produced according to traditional recipes. Access requires a valid prescription and identity verification at the Vatican gate.",
    },
    factsAdvanced: {
      de: ["Die Apotheke wurde im Jahr 1874 offiziell eröffnet.", "Sie wird vom Orden der Barmherzigen Brüder geleitet.", "Täglich besuchen etwa 2.000 Kunden die Apotheke.", "Das Sortiment umfasst rund 42.000 verschiedene Produkte.", "Die Apotheke ist steuerfrei, was Medikamente oft günstiger macht.", "Sie befindet sich im Palazzo Belvedere im Vatikan."],
      hu: ["A gyógyszertárat hivatalosan 1874-ben nyitották meg.", "Az Irgalmasrend (Fatebenefratelli) szerzetesei vezetik.", "Naponta körülbelül 2000 vásárló keresi fel a patikát.", "A termékkínálat mintegy 42 000 különböző cikkből áll.", "A patika adómentes, így a gyógyszerek gyakran olcsóbbak.", "Az épület a vatikáni Belvedere-palotában található."],
      ro: ["Farmacia a fost deschisă oficial în anul 1874.", "Este administrată de Ordinul Ospitalier (Fatebenefratelli).", "Aproximativ 2.000 de clienți vizitează farmacia zilnic.", "Sortimentul cuprinde în jur de 42.000 de produse diferite.", "Farmacia este scutită de taxe, medicamentele fiind adesea mai ieftine.", "Se află situată în Palazzo Belvedere din incinta Vaticanului."],
      en: ["The pharmacy was officially opened in the year 1874.", "It is managed by the Hospitaller Order of St. John of God.", "Approximately 2,000 customers visit the pharmacy every day.", "The inventory includes around 42,000 different products.", "The pharmacy is tax-free, which often makes medications cheaper.", "It is located within the Palazzo Belvedere in the Vatican."],
    },
    image: "/poi-images/landmark-vatican-pharmacy.webp",
  },
  {
    id: "landmark-st-martha-house",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.901],
    name: {
      de: "Gästehaus Santa Marta",
      hu: "Szent Márta-ház",
      ro: "Casa Sfânta Marta",
      en: "Saint Martha's House"
    },
    description: {
      de: "Die derzeitige Residenz von Papst Franziskus.",
      hu: "Ferenc pápa jelenlegi rezidenciája.",
      ro: "Reședința actuală a Papei Francisc.",
      en: "The current residence of Pope Francis."
    }, image: "/poi-images/landmark-st-martha-house.webp",
    descriptionAdvanced: {
      de: "Das Gästehaus Santa Marta (Domus Sanctae Marthae) ist ein modernes Gebäude in der Vatikanstadt, das primär als Unterkunft für Kleriker dient, die den Heiligen Stuhl besuchen oder dort tätig sind. Es wurde 1996 unter Papst Johannes Paul II. fertiggestellt und ersetzte das alte Hospiz Santa Marta. Das Gebäude verfügt über 106 Suiten und 22 Einzelzimmer, die während eines Konklaves als Unterbringung für die wahlberechtigten Kardinäle dienen, um ihnen mehr Komfort als in den improvisierten Quartieren des Apostolischen Palastes zu bieten. Besondere weltweite Bekanntheit erlangte das Haus durch Papst Franziskus, der nach seiner Wahl im Jahr 2013 entschied, dauerhaft in der Suite 201 zu wohnen, statt in die offiziellen päpstlichen Appartements im Apostolischen Palast umzuziehen. Er nutzt den Speisesaal und die Kapelle des Hauses für sein tägliches Gemeinschaftsleben und Frühmessen.",
      hu: "A Szent Márta-ház (Domus Sanctae Marthae) egy modern épület a Vatikánban, amely elsősorban a Szentszékhez látogató vagy ott dolgozó klerikusok szálláshelyeként szolgál. 1996-ban készült el II. János Pál pápa idején, a régi Szent Márta-ispotály helyén. Az épület 106 lakosztállyal és 22 egyágyas szobával rendelkezik, amelyeket a konklávé idején a pápaválasztó bíborosok szállásaként használnak, nagyobb kényelmet biztosítva, mint az Apostoli Palota korábbi ideiglenes szállásai. Világszerte azután vált ismertté, hogy Ferenc pápa 2013-as megválasztása után úgy döntött, állandó jelleggel a 201-es lakosztályban marad, ahelyett, hogy az Apostoli Palota hivatalos pápai lakosztályába költözne. A ház étkezőjét és kápolnáját használja napi közösségi életéhez és reggeli miséihez.",
      ro: "Casa Sfânta Marta (Domus Sanctae Marthae) este o clădire modernă din Cetatea Vaticanului, care servește în principal ca reședință pentru clericii care vizitează sau lucrează pentru Sfântul Scaun. A fost finalizată în 1996 sub Papa Ioan Paul al II-lea, înlocuind vechiul ospiciu Sfânta Marta. Clădirea dispune de 106 apartamente și 22 de camere individuale, care sunt folosite în timpul unui conclav ca locuințe pentru cardinalii electori, oferindu-le mai mult confort decât vechile spații improvizate din Palatul Apostolic. Casa a devenit faimoasă la nivel mondial datorită Papei Francisc care, după alegerea sa în 2013, a decis să locuiască permanent în apartamentul 201, în loc să se mute în apartamentele papale oficiale. El folosește sala de mese și capela casei pentru viața sa comunitară zilnică și liturghiile de dimineață.",
      en: "The Saint Martha House (Domus Sanctae Marthae) is a modern building in Vatican City that primarily serves as a residence for clergy visiting or working for the Holy See. It was completed in 1996 under Pope John Paul II, replacing the old Saint Martha hospice. The building features 106 suites and 22 single rooms, which serve as accommodation for cardinal electors during a conclave, providing them with more comfort than the improvised quarters previously used in the Apostolic Palace. The house gained global fame when Pope Francis decided, following his election in 2013, to live permanently in Suite 201 instead of moving into the official papal apartments in the Apostolic Palace. He utilizes the house's dining room and chapel for his daily communal life and early morning masses.",
    },
    factsAdvanced: {
      de: ["Das Gebäude wurde im Jahr 1996 fertiggestellt.", "Es umfasst insgesamt 106 Suiten und 22 Einzelzimmer.", "Papst Franziskus bewohnt die Suite 201 im zweiten Stock.", "Während des Konklaves ist das Haus für die Außenwelt isoliert.", "Die Kapelle des Hauses ist dem Heiligen Geist gewidmet.", "Es befindet sich direkt neben dem Petersdom und der Audienzhalle."],
      hu: ["Az épületet 1996-ban adták át rendeltetésének.", "Összesen 106 lakosztályt és 22 egyágyas szobát tartalmaz.", "Ferenc pápa a második emeleti 201-es lakosztályban lakik.", "A konklávé alatt a házat teljesen elszigetelik a külvilágtól.", "A ház kápolnáját a Szentlélek tiszteletére szentelték.", "Közvetlenül a Szent Péter-bazilika és az audencia-terem mellett áll."],
      ro: ["Clădirea a fost finalizată în anul 1996.", "Cuprinde în total 106 apartamente și 22 de camere single.", "Papa Francisc locuiește în apartamentul 201 de la etajul doi.", "În timpul conclavului, casa este izolată de lumea exterioară.", "Capela casei este dedicată Sfântului Duh.", "Este situată chiar lângă Bazilica Sf. Petru și Aula Paul al VI-lea."],
      en: ["The building was completed in the year 1996.", "It contains a total of 106 suites and 22 single rooms.", "Pope Francis occupies Suite 201 on the second floor.", "During a conclave, the house is isolated from the outside world.", "The chapel of the house is dedicated to the Holy Spirit.", "It is located adjacent to St. Peter's Basilica and the Audience Hall."],
    },
  },
  {
    id: "landmark-vatican-bank",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.905],
    name: {
      de: "Vatikanbank (IOR)",
      hu: "Vatikáni Bank (IOR)",
      ro: "Banca Vaticanului (IOR)",
      en: "Vatican Bank (IOR)"
    },
    description: {
      de: "Das Institut für die religiösen Werke.",
      hu: "A Vallási Művek Intézete.",
      ro: "Institutul pentru Lucrări Religioase.",
      en: "The Institute for the Works of Religion."
    }, image: "/poi-images/landmark-vatican-bank.webp",
    descriptionAdvanced: {
      de: "Das Institut für die religiösen Werke (Istituto per le Opere di Religione, kurz IOR), allgemein bekannt als Vatikanbank, ist ein privates Finanzinstitut mit Sitz im Torrione di Niccolò IV innerhalb der Vatikanstadt. Es wurde 1942 von Papst Pius XII. gegründet, um Vermögenswerte zu verwalten, die für religiöse oder karitative Zwecke bestimmt sind. Das IOR ist keine Zentralbank, sondern dient primär der Verwaltung von Konten für Orden, kirchliche Institutionen und Angestellte des Vatikans. In den letzten Jahrzehnten durchlief die Bank umfangreiche Reformen, um internationale Standards der Transparenz und der Bekämpfung von Geldwäsche zu erfüllen. Das Institut unterliegt der Aufsicht durch eine Kardinalskommission und einen Aufsichtsrat aus Finanzexperten. Gewinne der Bank werden regelmäßig für die weltweite Arbeit der Kirche und wohltätige Projekte des Papstes zur Verfügung gestellt.",
      hu: "A Vallási Művek Intézete (Istituto per le Opere di Religione, röviden IOR), közismert nevén a Vatikáni Bank, egy magán pénzintézet, amelynek székhelye a vatikáni V. Miklós-toronyban található. 1942-ben alapította XII. Pius pápa azzal a céllal, hogy kezelje a vallási vagy jótékonysági célokra szánt vagyoni eszközöket. Az IOR nem központi bank, hanem elsősorban szerzetesrendek, egyházi intézmények és vatikáni alkalmazottak számláit kezeli. Az elmúlt évtizedekben a bank jelentős reformokon ment keresztül, hogy megfeleljen az átláthatóságra és a pénzmosás elleni küzdelemre vonatkozó nemzetközi szabványoknak. Az intézetet egy bíborosi bizottság és pénzügyi szakértőkből álló felügyelőbizottság ellenőrzi. A bank nyereségét rendszeresen az egyház világszintű munkájára és a pápa jótékonysági projektjeire fordítják.",
      ro: "Institutul pentru Operele de Religie (Istituto per le Opere di Religione, pe scurt IOR), cunoscut sub numele de Banca Vaticanului, este o instituție financiară privată cu sediul în Torrione di Niccolò V din Cetatea Vaticanului. A fost fondat în 1942 de Papa Pius al XII-lea pentru a gestiona activele destinate activităților religioase sau de caritate. IOR nu este o bancă centrală, ci servește în principal la administrarea conturilor ordinelor religioase, instituțiilor bisericești și angajaților Vaticanului. În ultimele decenii, banca a trecut prin reforme extinse pentru a îndeplini standardele internaționale de transparență și combatere a spălării banilor. Institutul este supravegheat de o comisie de cardinali și de un consiliu de supraveghere format din experți financiari. Profiturile băncii sunt utilizate în mod regulat pentru susținerea misiunii globale a Bisericii și a proiectelor caritabile ale Papei.",
      en: "The Institute for the Works of Religion (Istituto per le Opere di Religione, abbreviated as IOR), commonly known as the Vatican Bank, is a private financial institution based in the Bastion of Nicholas V within Vatican City. It was founded in 1942 by Pope Pius XII to manage assets intended for religious or charitable purposes. The IOR is not a central bank; instead, it primarily manages accounts for religious orders, church institutions, and Vatican employees. In recent decades, the bank has undergone extensive reforms to meet international standards for transparency and anti-money laundering. The institute is supervised by a Commission of Cardinals and a Board of Superintendence consisting of financial experts. The bank's profits are regularly allocated to the Church's worldwide mission and the Pope's various charitable projects.",
    },
    factsAdvanced: {
      de: ["Das IOR wurde am 27. Juni 1942 offiziell gegründet.", "Der Hauptsitz befindet sich in einem Turm aus dem 15. Jahrhundert.", "Die Bank beschäftigt etwa 100 Mitarbeiter.", "Sie verwaltet Vermögenswerte in Milliardenhöhe.", "Kunden müssen Kleriker, Orden oder Vatikan-Angestellte sein.", "Das IOR veröffentlicht seit 2013 jährliche Geschäftsberichte."],
      hu: ["Az IOR-t hivatalosan 1942. június 27-én alapították.", "Főhadiszállása egy 15. századi bástyatoronyban található.", "A bank körülbelül 100 alkalmazottat foglalkoztat.", "Milliárdos nagyságrendű vagyont kezel világszerte.", "Ügyfelei csak klerikusok, rendek vagy vatikáni dolgozók lehetnek.", "Az IOR 2013 óta tesz közzé éves üzleti jelentéseket."],
      ro: ["IOR a fost fondat oficial la 27 iunie 1942.", "Sediul central se află într-un turn din secolul al XV-lea.", "Banca are aproximativ 100 de angajați.", "Gestionează active în valoare de ordinul miliardelor de euro.", "Clienții trebuie să fie clerici, ordine religioase sau angajați.", "IOR publică rapoarte anuale de activitate începând din 2013."],
      en: ["The IOR was officially established on June 27, 1942.", "Its headquarters is located in a 15th-century bastion tower.", "The bank employs approximately 100 staff members.", "It manages assets worth several billion euros.", "Customers must be clergy, religious orders, or Vatican staff.", "The IOR has published annual financial reports since 2013."],
    },
  },
  {
    id: "landmark-governors-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.904],
    name: {
      de: "Palast des Governatorats",
      hu: "Kormányzósági palota",
      ro: "Palatul Guvernoratului",
      en: "Governor's Palace"
    },
    description: {
      de: "Der Sitz der Regierung der Vatikanstadt.",
      hu: "A Vatikánváros kormányának székhelye.",
      ro: "Sediul guvernului Vaticanului.",
      en: "The seat of the government of Vatican City."
    }, image: "/poi-images/landmark-governors-palace.webp",
    descriptionAdvanced: {
      de: "Das Palazzo del Governatorato ist der administrative Sitz des Staates der Vatikanstadt und beherbergt die zentrale Verwaltung sowie das Postamt und das Gesundheitszentrum. Das imposante Gebäude wurde zwischen 1927 und 1931 im eklektischen Stil von Giuseppe Momo entworfen, kurz nachdem die Lateranverträge den Vatikan als souveränen Staat anerkannten. Es befindet sich in den vatikanischen Gärten direkt hinter der Peterskirche und ist durch seine symmetrische Fassade und die Verwendung von Travertinstein geprägt. Vor dem Palast liegt ein prächtiger Garten mit dem Wappen des regierenden Papstes, das oft in Blumenarrangements dargestellt wird. Als Sitz des Kardinal-Präsidenten der Päpstlichen Kommission ist es das politische Herzstück der weltlichen Verwaltung des Heiligen Stuhls. Die Architektur spiegelt die Monumentalität und den Stolz des neugegründeten Kleinstaates in der ersten Hälfte des 20. Jahrhunderts wider, wobei funktionale Büroräume mit repräsentativen Sälen kombiniert wurden.",
      hu: "A Kormányzói Palota (Palazzo del Governatorato) a Vatikán közigazgatási központja, amely az állam irányításáért felelős intézményeknek ad otthont. Az épület Giuseppe Momo tervei alapján készült 1927 és 1931 között, közvetlenül a vatikáni szuverenitást rögzítő lateráni egyezmény aláírását követően. A monumentális, eklektikus stílusú építmény a vatikáni kertek szívében, a Szent Péter-bazilika mögött helyezkedik el, és homlokzata travertin mészkővel díszített. Itt található a vatikáni posta központja, az egészségügyi szolgálat és a csendőrség parancsnoksága is. A palota előtti téren gyakran látható a mindenkori pápa virágokból kirakott címere, amely a kertépítészet egyik mesterműve. Mint a Pápai Bizottság elnökének székhelye, ez az épület a Vatikán mint világi állam működésének legfontosabb szimbóluma és operatív bázisa, ahol a diplomáciai és adminisztratív tevékenységek nagy része zajlik.",
      ro: "Palatul Guvernatoratului este sediul administrativ al Statului Cetății Vaticanului și adăpostește principalele birouri ale guvernului, poșta centrală și centrul medical. Clădirea impunătoare a fost proiectată de arhitectul Giuseppe Momo între 1927 și 1931, fiind finalizată la scurt timp după semnarea Tratatelor de la Lateran care au stabilit suveranitatea Vaticanului. Situat în inima Grădinilor Vaticane, chiar în spatele Bazilicii Sfântul Petru, palatul se remarcă prin fațada sa monumentală realizată din travertin și stilul eclectic caracteristic epocii. În fața edificiului se află o grădină simetrică unde blazonul Papei în funcție este adesea reprodus prin aranjamente florale elaborate. În calitate de sediu al Comisiei Pontificale pentru Statul Cetății Vaticanului, clădirea reprezintă inima politică a administrării laice a Sfântului Scaun, reflectând tranziția către un stat modern și organizat în secolul al XX-lea.",
      en: "The Governor's Palace (Palazzo del Governatorato) serves as the administrative headquarters of Vatican City State, housing the primary governmental offices, the central post office, and medical services. Designed by architect Giuseppe Momo, the massive building was constructed between 1927 and 1931, immediately following the Lateran Treaty which established Vatican City as a sovereign state. Located within the Vatican Gardens directly behind St. Peter's Basilica, its architecture is a blend of Renaissance and Baroque styles, featuring a prominent central clock and extensive use of travertine. The square in front of the palace often displays the current Pope's coat of arms, meticulously crafted from flowers and hedges. As the seat of the Pontifical Commission for Vatican City State, it is the center of secular administration for the Holy See. The building stands as a symbol of the Vatican's institutional identity and its operational independence in the modern era.",
    },
    factsAdvanced: {
      de: ["Erbaut zwischen 1927 und 1931 nach den Lateranverträgen.", "Architekt Giuseppe Momo entwarf das Gebäude im eklektischen Stil.", "Sitz der Päpstlichen Kommission für den Staat der Vatikanstadt.", "Beherbergt das zentrale Postamt und das Gesundheitszentrum des Vatikans.", "Die Fassade besteht hauptsächlich aus hellem italienischem Travertin.", "Die Gärten davor zeigen oft das päpstliche Wappen in floraler Form."],
      hu: ["1927 és 1931 között épült a lateráni egyezmény aláírása után.", "Az épületet Giuseppe Momo tervezte eklektikus stílusban.", "A Vatikánvárosi Állam Pápai Bizottságának székhelye.", "Itt működik a vatikáni posta és az állam központi orvosi rendelője.", "A palota homlokzatát értékes travertin mészkő borítja.", "A palota előtti parkban található a pápa virágokból készült címere."],
      ro: ["Construit între 1927 și 1931 sub îndrumarea arhitectului Giuseppe Momo.", "Edificiul a apărut ca urmare a recunoașterii suveranității prin Tratatul de la Lateran.", "Este sediul oficial al Comisiei Pontificale pentru Statul Cetății Vaticanului.", "Găzduiește serviciile poștale centrale și direcția de sănătate publică.", "Arhitectura sa îmbină elemente neoclasice cu decorațiuni baroce.", "Grădina frontală este renumită pentru reprezentările florale ale stemelor papale."],
      en: ["Constructed from 1927 to 1931 by architect Giuseppe Momo.", "Established following the 1929 Lateran Treaty's recognition of sovereignty.", "Functions as the seat of the Pontifical Commission for Vatican City State.", "Houses the central administrative offices, post office, and pharmacy.", "Built using a significant amount of travertine stone from local quarries.", "The current Pope's coat of arms is traditionally displayed in the front lawn."],
    },
  },
  {
    id: "landmark-vatican-observatory",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.448, 41.905],
    name: {
      de: "Vatikanische Sternwarte",
      hu: "Vatikáni Csillagvizsgáló",
      ro: "Observatorul Vaticanului",
      en: "Vatican Observatory"
    },
    description: {
      de: "Eines der ältesten astronomischen Forschungsinstitute der Welt.",
      hu: "A világ egyik legrégebbi csillagászati kutatóintézete.",
      ro: "Unul dintre cele mai vechi institute de cercetare astronomică din lume.",
      en: "One of the oldest astronomical research institutes in the world."
    }, image: "/poi-images/landmark-vatican-observatory.webp",
    descriptionAdvanced: {
      de: "Die Vatikanische Sternwarte, bekannt als Specola Vaticana, ist eines der ältesten astronomischen Forschungsinstitute der Welt und blickt auf eine Tradition bis ins 16. Jahrhundert zurück. Ihre Gründung ist eng mit der Kalenderreform von Papst Gregor XIII. im Jahr 1582 verbunden, für die präzise astronomische Beobachtungen notwendig waren. Ursprünglich im Turm der Winde im Vatikan untergebracht, zog sie später in den Apostolischen Palast und 1935 aufgrund der zunehmenden Lichtverschmutzung Roms nach Castel Gandolfo um. Heute betreibt die Sternwarte moderne Forschungseinrichtungen, darunter das Vatican Advanced Technology Telescope (VATT) in Arizona, USA. Die Jesuiten-Astronomen des Instituts forschen in Bereichen wie Kosmologie, Planetenwissenschaften und Astrobiologie. Die Sternwarte symbolisiert das jahrhundertelange Engagement der katholischen Kirche für die Wissenschaft und den Dialog zwischen Glauben und Vernunft. Ihre Bibliothek beherbergt seltene Erstausgaben von Werken von Kopernikus, Galilei und Newton.",
      hu: "A Vatikáni Csillagvizsgáló (Specola Vaticana) a világ egyik legrégebbi csillagászati kutatóintézete, amelynek gyökerei a 16. századig nyúlnak vissza. Alapítása szorosan kötődik XIII. Gergely pápa 1582-es naptárreformjához, amelyhez pontos égi megfigyelésekre volt szükség. Az intézmény eredetileg a Vatikánon belüli Szelek Tornyában működött, majd később az Apostoli Palotába költözött, 1935-ben pedig Róma fényszennyezése miatt Castel Gandolfóba helyezték át a központját. Napjainkban a csillagvizsgáló modern kutatásokat folytat, többek között az arizonai Mount Graham-en található VATT távcsővel. A jezsuita csillagászok olyan területeken dolgoznak, mint a kozmológia, a bolygótudományok és az asztrobiológia. A Specola Vaticana a katolikus egyház tudomány iránti elkötelezettségének jelképe, amely hidat képez a hit és a racionális megismerés között. Könyvtára olyan ritkaságokat őriz, mint Kopernikusz, Galilei és Newton eredeti művei.",
      ro: "Observatorul Vaticanului, cunoscut sub numele de Specola Vaticana, este una dintre cele mai vechi instituții de cercetare astronomică din lume, cu o istorie ce începe în secolul al XVI-lea. Fondarea sa este legată de reforma calendarului gregorian din 1582, inițiată de Papa Grigore al XIII-lea, care a necesitat măsurători astronomice extrem de precise. Inițial amplasat în Turnul Vânturilor din Vatican, observatorul a fost mutat în 1935 la Castel Gandolfo din cauza poluării luminoase tot mai mari din Roma. În prezent, instituția colaborează la proiecte internaționale majore și operează Telescopul de Tehnologie Avansată al Vaticanului (VATT) în Arizona, SUA. Astronomii iezuiți care activează aici cercetează domenii precum cosmologia, evoluția stelară și astrobiologia. Observatorul reprezintă un punct crucial de dialog între știința modernă și credință, demonstrând interesul istoric al Bisericii pentru înțelegerea universului. Colecția sa de cărți vechi include ediții princeps ale unor lucrări semnate de Copernic și Newton.",
      en: "The Vatican Observatory, or Specola Vaticana, is one of the world's oldest astronomical research institutions, with roots dating back to the late 16th century. Its origin is tied to the Gregorian calendar reform of 1582, commissioned by Pope Gregory XIII, which required sophisticated astronomical calculations. Originally based in the Tower of the Winds within the Vatican, it moved to the Apostolic Palace and later, in 1935, to Castel Gandolfo to escape Rome's urban light pollution. Today, the observatory maintains its headquarters in Italy while operating the Vatican Advanced Technology Telescope (VATT) in Arizona, USA. Jesuit astronomers at the institute conduct research in diverse fields such as cosmology, planetary sciences, and stellar evolution. The observatory stands as a testament to the Catholic Church's long-standing support for scientific inquiry and the harmony between faith and reason. Its archives contain invaluable historical manuscripts and rare early editions of works by Copernicus, Galileo, and Newton.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1582 zur Vorbereitung der gregorianischen Kalenderreform.", "Wurde 1935 von Papst Pius XI. nach Castel Gandolfo verlegt.", "Wird seit 1906 offiziell von Mitgliedern des Jesuitenordens geleitet.", "Betreibt das VATT-Teleskop auf dem Mount Graham in Arizona (USA).", "Besitzt eine Sammlung von über 1.000 wertvollen Meteoritenproben.", "Die Bibliothek enthält Originalwerke von Kopernikus und Isaac Newton."],
      hu: ["1582-ben alapították a Gergely-naptár csillagászati megalapozásához.", "1935-ben költözött Castel Gandolfóba a római fényszennyezés miatt.", "1906 óta a jezsuita rend tagjai irányítják a tudományos munkát.", "Saját távcsöve van az arizonai Mount Graham hegyen (VATT).", "Több mint 1000 darabból álló értékes meteoritgyűjteménnyel rendelkezik.", "Könyvtárában megtalálható Kopernikusz 'De revolutionibus' című műve."],
      ro: ["Fondat oficial în 1582 pentru a fundamenta reforma calendarului gregorian.", "Transferat la Castel Gandolfo în 1935 pentru vizibilitate astronomică mai bună.", "Administrat de ordinul Iezuit începând cu anul 1906.", "Operează un telescop avansat în Arizona, finalizat în anul 1993.", "Găzduiește o colecție rară de peste 1.000 de specimene de meteoriți.", "Biblioteca deține ediții originale din secolul al XVII-lea ale lui Galileo Galilei."],
      en: ["Established in 1582 to assist in the creation of the Gregorian calendar.", "Relocated to Castel Gandolfo in 1935 due to Rome's increasing light pollution.", "Managed by the Jesuit Order since 1906, producing numerous scientific papers.", "Operates the VATT telescope in Arizona, which saw first light in 1993.", "Houses a world-class collection of over 1,000 meteorite fragments.", "The archives include a rare 1543 first edition of Copernicus's major work."],
    },
  },
  {
    id: "landmark-belvedere-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.906],
    name: {
      de: "Belvedere-Hof",
      hu: "Belvedere-udvar",
      ro: "Curtea Belvedere",
      en: "Belvedere Courtyard"
    },
    description: {
      de: "Ein architektonisch bedeutender Innenhof im Vatikan.",
      hu: "Építészetileg jelentős belső udvar a Vatikánban.",
      ro: "O curte interioară arhitecturală importantă din Vatican.",
      en: "An architecturally significant courtyard in the Vatican."
    }, image: "/poi-images/landmark-belvedere-courtyard.webp",
    descriptionAdvanced: {
      de: "Der Cortile del Belvedere, entworfen von Donato Bramante im Jahr 1505, ist ein Meisterwerk der Renaissance-Architektur im Herzen des Vatikans. Ursprünglich wurde er konzipiert, um den Vatikanpalast mit der Villa Belvedere zu verbinden und gleichzeitig einen monumentalen Raum für Feste und Turniere zu schaffen. Die terrassierte Anlage erstreckt sich über drei Ebenen und war wegweisend für die Gestaltung barocker Gärten in ganz Europa. Bramante nutzte perspektivische Verkürzungen, um die enorme Länge des Hofes von etwa 300 Metern optisch zu gliedern. Im 16. Jahrhundert beherbergte der Hof den berühmten 'Antikenhof', in dem Statuen wie der Laokoon und der Apollo von Belvedere aufgestellt wurden. Durch spätere Erweiterungen der Vatikanischen Museen, insbesondere den Bau des Braccio Nuovo, wurde der riesige Hof architektonisch in zwei Teile getrennt. Heute bildet er den zentralen Zugangsbereich zu einigen der bedeutendsten Kunstsammlungen der Welt und beeindruckt durch seine harmonischen Proportionen.",
      hu: "A Belvedere-udvar (Cortile del Belvedere) Donato Bramante egyik legfontosabb reneszánsz építészeti alkotása, amelyet 1505-ben kezdett el tervezni II. Gyula pápa megbízásából. Az udvar célja az volt, hogy összekösse az Apostoli Palotát a távolabb fekvő Belvedere-villával, miközben egy hatalmas, teraszos közösségi teret hoz létre. A közel 300 méter hosszú építmény három szintre tagolódik, és jelentős hatást gyakorolt az európai kertművészet és palotaépítészet fejlődésére. A 16. században itt őrizték a pápák legértékesebb antik szobrait, köztük a Laokoón-csoportot és a Belvedere-i Apolló-szobrot. Később a Vatikáni Múzeumok bővítése, különösen a könyvtári szárny és az Új Szárny (Braccio Nuovo) felépítése két részre osztotta az eredetileg egybefüggő udvart. Ma az udvar északi része a Pigna-udvarként ismert, míg az épületegyüttes egésze a világ egyik leggazdagabb művészeti gyűjteményének ad otthont, lenyűgözve a látogatókat monumentális léptékével.",
      ro: "Curtea Belvedere (Cortile del Belvedere) este o capodoperă a arhitecturii renascentiste, proiectată de Donato Bramante în 1505 la comanda Papei Iuliu al II-lea. Proiectul inițial a fost conceput pentru a uni Palatul Apostolic cu Villa Belvedere printr-o serie de terase monumentale, creând un spațiu vast pentru spectacole și evenimente oficiale. Cu o lungime de aproximativ 300 de metri, curtea a introdus elemente de perspectivă și simetrie care au devenit standard în designul grădinilor baroce europene. În secolul al XVI-lea, aici au fost expuse cele mai faimoase sculpturi antice ale Vaticanului, precum Grupul Laocoon și Apollo Belvedere. De-a lungul timpului, spațiul a fost divizat prin construcția unor noi aripi ale Muzeelor Vaticane, transformând curtea dintr-un spațiu deschis într-o serie de curți interioare conectate. Astăzi, Belvedere rămâne un element central al complexului muzeal, fiind traversat zilnic de mii de vizitatori care admiră echilibrul formelor clasice și ingeniozitatea structurii etajate.",
      en: "The Belvedere Courtyard (Cortile del Belvedere) is a landmark of Renaissance architecture designed by Donato Bramante starting in 1505. Commissioned by Pope Julius II, its purpose was to link the Apostolic Palace with the Villa Belvedere located on a nearby hill, creating a unified architectural ensemble. The courtyard originally spanned three levels connected by grand staircases and was roughly 300 meters long, setting a precedent for monumental palace gardens throughout Europe. In the 16th century, it housed the papal collection of classical antiquities, including the Laocoön and the Apollo Belvedere. Over the centuries, the original layout was altered by the construction of the Vatican Library and the New Wing (Braccio Nuovo), which effectively split the vast space into two distinct sections. Today, it serves as a central artery for the Vatican Museums, showcasing the grandeur of 16th-century planning and housing some of the most significant artistic treasures of Western civilization.",
    },
    factsAdvanced: {
      de: ["Entworfen von Donato Bramante im Jahr 1505 für Papst Julius II.", "Die Gesamtlänge der Anlage betrug ursprünglich etwa 300 Meter.", "War der erste Ort, an dem die Laokoon-Gruppe 1506 öffentlich ausgestellt wurde.", "Die terrassierte Bauweise beeinflusste die barocke Gartenkunst maßgeblich.", "Wurde im 16. Jahrhundert durch den Bau der Bibliothek in zwei Höfe geteilt.", "Beherbergt heute Teile der Vatikanischen Museen und der Bibliothek."],
      hu: ["1505-ben tervezte Donato Bramante II. Gyula pápa megbízásából.", "Eredetileg egyetlen hatalmas, 300 méter hosszú udvarként funkcionált.", "Itt állították fel először a híres Laokoón-szoborcsoportot 1506-ban.", "A teraszos elrendezés mintaként szolgált az európai barokk kertekhez.", "V. Szixtusz pápa idején a könyvtár építésével osztották ketté az udvart.", "Ma a Vatikáni Múzeumok és a könyvtár fontos gyűjteményei találhatók itt."],
      ro: ["Proiectată de Donato Bramante în 1505, fiind o inovație a Renașterii.", "Măsura inițial aproximativ 300 de metri lungime, pe trei niveluri.", "Găzduia faimoasa statuie 'Apollo Belvedere', descoperită la sfârșitul sec. XV.", "Arhitectura a fost inspirată de sanctuarele antice din apropierea Romei.", "Divizată în secolul al XVI-lea prin adăugarea aripii Bibliotecii Vaticane.", "Este locul unde se află faimoasa scară spiralată a lui Bramante."],
      en: ["Designed by Donato Bramante in 1505 to connect the palace and the villa.", "The original courtyard extended nearly 300 meters across three terraces.", "It was the first permanent home for the Laocoön group after 1506.", "The design influenced the gardens of Fontainebleau and the Villa d'Este.", "Separated into two distinct areas during the reign of Pope Sixtus V.", "Currently forms part of the exhibition space for the Vatican Museums."],
    },
  },
  {
    id: "landmark-casina-pio-iv",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.905],
    name: {
      de: "Casina Pio IV",
      hu: "Casina Pio IV",
      ro: "Casina Pio IV",
      en: "Casina Pio IV"
    },
    description: {
      de: "Sitz der Päpstlichen Akademie der Wissenschaften.",
      hu: "A Pápai Tudományos Akadémia székhelye.",
      ro: "Sediul Academiei Pontificale de Științe.",
      en: "The seat of the Pontifical Academy of Sciences."
    }, image: "/poi-images/landmark-casina-pio-iv.webp",
    descriptionAdvanced: {
      de: "Die Casina Pio IV, auch bekannt als Villa Pia, ist ein prachtvolles Gartenhaus in den Vatikanischen Gärten und gilt als Juwel der späten Renaissance-Architektur. Das zwischen 1558 und 1561 für Papst Paul IV. begonnene und unter seinem Nachfolger Pius IV. von Pirro Ligorio vollendete Bauwerk besticht durch seine aufwendigen Stuckfassaden und Mosaike. Die Anlage besteht aus zwei gegenüberliegenden Gebäuden, die durch einen ovalen Hof mit Brunnen verbunden sind. Die Dekoration ist reich an mythologischen und allegorischen Motiven, die den Geist der Gegenreformation und den Humanismus widerspiegeln. Seit 1936 ist die Casina der Sitz der Päpstlichen Akademie der Wissenschaften, einer der angesehensten wissenschaftlichen Institutionen weltweit. Hier kommen regelmäßig Nobelpreisträger und führende Forscher zusammen, um über globale Themen wie Ethik, Umwelt und technologischen Fortschritt zu diskutieren. Die ruhige Lage inmitten der Gärten bietet eine ideale Atmosphäre für wissenschaftliche Reflexion und interdisziplinären Dialog.",
      hu: "A Casina Pio IV, más néven Villa Pia, a vatikáni kertek egyik legszebb épülete, a késő reneszánsz és a manierizmus építészetének remekműve. Az építkezést 1558-ban kezdték el IV. Pál pápa idején, de a befejezés Pirro Ligorio tervei alapján már IV. Piusz pápa alatt történt 1561-ben. Az épületegyüttes két szemközti pavilonból és egy ovális udvarból áll, amelyet díszes kutak és gazdag stukkódíszítés tesz egyedivé. A homlokzatokat mitológiai jelenetek, mozaikok és allegorikus figurák díszítik, amelyek a korszak humanista műveltségét tükrözik. 1936 óta itt székel a Pápai Tudományos Akadémia, ahol a világ legkiválóbb tudósai, köztük számos Nobel-díjas kutató gyűlik össze. Az akadémia célja a tudomány és az etika közötti párbeszéd elősegítése, különös tekintettel a globális környezeti és társadalmi kihívásokra. A Casina Pio IV így egyszerre művészettörténeti kincs és a modern tudományos gondolkodás egyik vatikáni bástyája.",
      ro: "Casina Pio IV, cunoscută și sub numele de Villa Pia, este un edificiu spectaculos situat în Grădinile Vaticane, considerat o bijuterie a arhitecturii manieriste din secolul al XVI-lea. Construcția a fost începută în 1558 pentru Papa Paul al IV-lea și finalizată în 1561 de arhitectul Pirro Ligorio sub pontificatul lui Pius al IV-lea. Complexul este format din două pavilioane opuse, unite printr-o curte ovală decorată cu mozaicuri și fântâni elegante. Fațadele sunt bogat ornamentate cu stucaturi ce înfățișează teme mitologice și alegorice, reflectând erudiția umanistă a perioadei. Din anul 1936, Casina servește drept sediu al Academiei Pontificale de Științe, o instituție de prestigiu care reunește savanți de renume mondial, inclusiv numeroși laureați ai Premiului Nobel. Aici au loc discuții fundamentale despre etică, schimbări climatice și progrese tehnologice, clădirea fiind un simbol al angajamentului Bisericii față de cercetarea științifică modernă într-un cadru istoric protejat.",
      en: "The Casina Pio IV, also known as Villa Pia, is an exquisite garden villa located within the Vatican Gardens, celebrated as a masterpiece of late Renaissance and Mannerist architecture. Commissioned in 1558 by Pope Paul IV and completed by Pirro Ligorio for Pope Pius IV in 1561, the complex consists of two facing buildings connected by an oval courtyard with decorative fountains. Its facades are densely covered with elaborate stucco reliefs, mosaics, and mythological allegories, representing the pinnacle of 16th-century decorative art. Since 1936, the Casina has been the official seat of the Pontifical Academy of Sciences, one of the world's most distinguished scientific bodies. This prestigious institution hosts conferences where Nobel laureates and leading experts address global issues such as environmental sustainability, bioethics, and human development. The Casina Pio IV thus represents a unique intersection of classical artistic heritage and cutting-edge intellectual discourse under the aegis of the Holy See.",
    },
    factsAdvanced: {
      de: ["Erbaut zwischen 1558 und 1561 unter dem Architekten Pirro Ligorio.", "Besteht aus zwei pavillonartigen Gebäuden und einem ovalen Innenhof.", "Gilt als eines der bedeutendsten Beispiele der manieristischen Architektur.", "Sitz der Päpstlichen Akademie der Wissenschaften seit 1936.", "Beherbergt auch die Päpstliche Akademie der Sozialwissenschaften.", "Die Fassaden sind mit filigranen Stuckarbeiten und Mosaiken geschmückt."],
      hu: ["1558 és 1561 között épült Pirro Ligorio tervei alapján.", "Az épület két pavilonból és egy gyönyörű ovális udvarból áll.", "A manierista építészet egyik legfontosabb vatikáni példája.", "1936 óta a Pápai Tudományos Akadémia hivatalos székhelye.", "A homlokzatokat gazdag stukkók és mitológiai mozaikok díszítik.", "Rendszeresen otthont ad nemzetközi tudományos konferenciáknak."],
      ro: ["Proiectată de Pirro Ligorio și finalizată în anul 1561.", "Este alcătuită dintr-un ansamblu de patru structuri în jurul unei curți ovale.", "Reprezintă unul dintre cele mai bine conservate exemple de design manierist.", "Găzduiește Academia Pontificală de Științe începând cu 1936.", "Fațadele includ reprezentări ale muzelor și figurilor alegorice clasice.", "Locul a fost transformat într-un centru de cercetare sub Papa Pius al XI-lea."],
      en: ["Constructed between 1558 and 1561 by architect Pirro Ligorio.", "Features a distinctive oval courtyard with twin monumental fountains.", "Renowned for its intricate Mannerist stucco work and tile mosaics.", "Became the headquarters of the Pontifical Academy of Sciences in 1936.", "Named after Pope Pius IV, who oversaw the completion of the project.", "Serves as a venue for high-level meetings involving Nobel Prize winners."],
    },
  },
  {
    id: "landmark-pigna-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.907],
    name: {
      de: "Pinienhof",
      hu: "Toboz-udvar",
      ro: "Curtea Pigna",
      en: "Pigna Courtyard"
    },
    description: {
      de: "Bekannt für die riesige bronzene Pinienzapfen-Skulptur.",
      hu: "Hatalmas bronz fenyőtoboz-szobráról ismert.",
      ro: "Cunoscut pentru imensa sculptură din bronz a unui con de pin.",
      en: "Known for the huge bronze pine cone sculpture."
    }, image: "/poi-images/landmark-pigna-courtyard.webp",
    descriptionAdvanced: {
      de: "Der Cortile della Pigna, auch Pinienhof genannt, ist ein großer öffentlicher Raum innerhalb der Vatikanischen Museen und verdankt seinen Namen der riesigen antiken Bronzepinie. Diese über vier Meter hohe Skulptur stammt ursprünglich aus dem 1. oder 2. Jahrhundert und stand einst in der Nähe des Pantheons in Rom, bevor sie im Mittelalter in den Vorhof der alten Peterskirche und schließlich hierher gebracht wurde. Die Pigna wird von zwei bronzenen Pfauen flankiert, die Kopien antiker Originale aus dem Grabmal Kaiser Hadrians sind. Der Hof wurde im Rahmen von Bramantes Belvedere-Projekt entworfen und zeichnet sich durch seine monumentale Nische aus, die von Pirro Ligorio im 16. Jahrhundert vollendet wurde. Ein markantes modernes Element in der Mitte des Hofes ist die Skulptur 'Sfera con Sfera' von Arnaldo Pomodoro aus dem Jahr 1990, die eine goldene Erdkugel zeigt, die eine weitere im Inneren offenbart. Dieser Kontrast zwischen antiker Monumentalität und zeitgenössischer Kunst macht den Hof zu einem der meistfotografierten Orte im Vatikan.",
      hu: "A Pigna-udvar (Cortile della Pigna), vagyis a Fenyőtoboz-udvar a Vatikáni Múzeumok egyik leglátványosabb nyitott tere, amely nevét egy hatalmas antik bronz fenyőtobozról kapta. A több mint négy méter magas szobor az 1. vagy 2. századból származik, és eredetileg a Pantheon közelében állt, majd a középkorban a régi Szent Péter-bazilika előcsarnokába, végül a 17. században jelenlegi helyére került. A tobozt két bronzpáva szegélyezi, amelyek Hadrianus császár síremlékéből származó antik darabok másolatai. Az udvar építészetileg a Bramante által tervezett Belvedere-komplexum északi része, amelyet Pirro Ligorio monumentális fülkéje zár le. Az udvar közepén látható Arnaldo Pomodoro 1990-es modern alkotása, a 'Sfera con Sfera' (Gömb a gömbben), amely az emberiség és a világ törékenységét szimbolizálja. Ez az udvar tökéletesen példázza a Vatikán azon képességét, hogy harmonikusan ötvözze az ókori örökséget, a reneszánsz építészetet és a modern művészetet.",
      ro: "Curtea Pigna (Cortile della Pigna) este unul dintre cele mai faimoase spații deschise ale Muzeelor Vaticane, numit după uriașul con de pin din bronz situat în capătul său nordic. Această sculptură antică, ce măsoară peste patru metri înălțime, datează din secolul I sau II și a fost găsită inițial lângă Panteonul din Roma, fiind mutată în actuala locație în secolul al XVII-lea. Conul de pin este flancat de doi păuni din bronz, copii ale unor piese antice care decorau odinioară mormântul împăratului Hadrian. Arhitectura curții face parte din proiectul original al lui Bramante pentru Belvedere, fiind dominată de o nișă colosală proiectată de Pirro Ligorio. În centrul curții se află sculptura modernă 'Sfera con Sfera' a artistului Arnaldo Pomodoro, instalată în 1990, care oferă un contrast vizual puternic cu antichitățile din jur. Curtea Pigna servește ca punct principal de adunare pentru vizitatorii muzeelor, oferind o perspectivă unică asupra evoluției artei de-a lungul a două milenii.",
      en: "The Pigna Courtyard (Cortile della Pigna), or Pinecone Courtyard, is a prominent open space within the Vatican Museums complex, named after a colossal ancient bronze pinecone. Standing over four meters tall, the sculpture dates back to the 1st or 2nd century and originally stood near the Pantheon before being moved to the atrium of the Old St. Peter's Basilica and finally here in the 17th century. The pinecone is flanked by two bronze peacocks, which are replicas of 2nd-century originals from Hadrian's Mausoleum. Architecturally, the courtyard represents the northernmost part of Bramante's massive Belvedere project, capped by a grand semicircular niche designed by Pirro Ligorio. In the center of the courtyard stands Arnaldo Pomodoro's 1990 modern masterpiece, 'Sfera con Sfera' (Sphere within a Sphere), symbolizing the complexity and fragility of the world. This juxtaposition of ancient artifacts, Renaissance architecture, and contemporary sculpture makes the Pigna Courtyard one of the most culturally significant and frequently visited spots in the Vatican.",
    },
    factsAdvanced: {
      de: ["Benannt nach einer über 4 Meter hohen Bronzepinie aus der römischen Antike.", "Die Pinie stand im Mittelalter im Atrium der alten Peterskirche.", "Flankiert von zwei Bronzepfauen aus dem 2. Jahrhundert n. Chr.", "Die monumentale Nische am Ende des Hofes wurde von Pirro Ligorio entworfen.", "Beherbergt die moderne Skulptur 'Sfera con Sfera' von Arnaldo Pomodoro (1990).", "Der Hof ist Teil des ursprünglich von Bramante geplanten Belvedere-Projekts."],
      hu: ["Nevét egy 4 méter magas, ókori római bronz fenyőtobozról kapta.", "A fenyőtoboz eredetileg a Pantheon közelében, a Mars-mezőn állt.", "A toboz melletti bronzpávák Hadrianus császár mauzóleumából származnak.", "A monumentális félköríves fülkét Pirro Ligorio építette 1562-ben.", "Az udvar közepén Arnaldo Pomodoro aranyozott gömbszobra áll.", "Ez az udvar képezi a Vatikáni Múzeumok egyik fő pihenőhelyét."],
      ro: ["Conul de pin din bronz are o înălțime de aproximativ 4 metri.", "Piesa centrală a fost găsită în cartierul Pigna din Roma antică.", "Păunii de bronz simbolizează nemurirea în tradiția creștină timpurie.", "Nișa monumentală a fost inspirată de arhitectura termelor romane.", "Sculptura 'Sfera con Sfera' de Pomodoro a fost adăugată în 1990.", "Curtea a fost divizată de restul Belvedere prin aripa Braccio Nuovo."],
      en: ["Named for the 4-meter-tall bronze pinecone dating to the 1st century AD.", "The pinecone originally served as a fountain in ancient Rome.", "Flanked by 2nd-century bronze peacocks from the Tomb of Hadrian.", "Features a massive architectural niche designed by Pirro Ligorio in 1562.", "Houses Arnaldo Pomodoro's famous rotating bronze sphere sculpture.", "The courtyard is a key highlight of the tour through the Vatican Museums."],
    },
  },
  {
    id: "landmark-vatican-heliport",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.446, 41.902],
    name: {
      de: "Vatikanischer Heliport",
      hu: "Vatikáni helikopter-leszálló",
      ro: "Heliportul Vaticanului",
      en: "Vatican Heliport"
    },
    description: {
      de: "Der Hubschrauberlandeplatz des Papstes im westlichsten Teil des Vatikans.",
      hu: "A pápa helikopter-leszállóhelye a Vatikán legnyugatibb részén.",
      ro: "Heliportul Papei în partea cea mai vestică a Vaticanului.",
      en: "The Pope's heliport in the westernmost part of the Vatican."
    }, image: "/poi-images/landmark-vatican-heliport.webp",
    descriptionAdvanced: {
      de: "Der vatikanische Heliport befindet sich in der südwestlichsten Ecke der Vatikanstadt, direkt an den Mauern der Vatikanischen Gärten. Er wurde 1976 unter Papst Paul VI. eingeweiht, um die Reisen des Papstes, insbesondere zu seiner Sommerresidenz in Castel Gandolfo, zu erleichtern und den Verkehr in Rom zu entlasten. Die Anlage ist schlicht gehalten und besteht aus einer Start- und Landebahn sowie einem kleinen Kontrollbereich. In Notfällen dient der Heliport auch als strategischer Punkt für den Transport von Patienten zum Kinderkrankenhaus Bambino Gesù, das unter der Gerichtsbarkeit des Vatikans steht. Der Heliport wird von der vatikanischen Gendarmerie gesichert und unterliegt strengen Protokollen. Er ist ein Zeichen für die Modernisierung der päpstlichen Mobilität im 20. Jahrhundert und ermöglicht es dem Heiligen Vater, schnell und sicher internationale Flughäfen oder Ziele innerhalb Italiens zu erreichen. Trotz seiner funktionalen Natur fügt er sich diskret in die historische Umgebung der päpstlichen Gärten ein.",
      hu: "A vatikáni helikopter-leszállóhely a Vatikánvárosi Állam legnyugatibb részén, a vatikáni kertek sarka mellett található. A létesítményt 1976-ban avatták fel VI. Pál pápa idején, elsősorban azért, hogy megkönnyítsék a pápa utazásait a Castel Gandolfo-i nyári rezidenciára, elkerülve a római közlekedési dugókat. A leszállóhely egy egyszerű betonfelületből és egy hozzá tartozó irányító épületből áll, amelyet a Vatikáni Csendőrség felügyel. Az utóbbi évtizedekben a heliport fontos humanitárius szerepet is kapott: vészhelyzet esetén ide érkeznek a vatikáni fennhatóságú Bambino Gesù gyermekkórházba szállított betegek. A leszállóhely a pápai diplomácia és mobilitás modernizációjának egyik kulcsfontosságú eleme, amely lehetővé teszi a gyors és biztonságos mozgást a nemzetközi repülőterek és a Vatikán között. Bár szigorúan funkcionális építmény, elhelyezkedése miatt nem zavarja a történelmi kertek és műemlékek látványát.",
      ro: "Heliportul Vaticanului este situat în extremitatea sud-vestică a Statului Cetății Vaticanului, la baza zidurilor fortificate ale Grădinilor Vaticane. Inaugurat în anul 1976 sub pontificatul Papei Paul al VI-lea, heliportul a fost creat pentru a facilita deplasările rapide ale Suveranului Pontif către reședința de vară de la Castel Gandolfo și către aeroporturile internaționale din Roma. Instalația este de dimensiuni reduse, fiind compusă dintr-o platformă de aterizare și un sistem minimal de control al traficului aerian. Pe lângă utilizarea oficială pentru călătoriile papale, heliportul joacă un rol vital în cazuri de urgență medicală, permițând transportul rapid al pacienților către spitalul de pediatrie Bambino Gesù. Securitatea zonei este asigurată de Jandarmeria Vaticanului, iar accesul este strict restricționat. Existența acestui heliport reflectă necesitatea adaptării unui stat antic la cerințele logistice și de securitate ale lumii moderne, asigurând o conexiune aeriană directă și privată.",
      en: "The Vatican City Heliport is located in the southwestern corner of the Vatican State, situated within the perimeter of the Vatican Gardens. It was officially inaugurated in 1976 by Pope Paul VI to streamline the Pope's travels, particularly for his frequent trips to the summer residence at Castel Gandolfo, thereby bypassing Rome's heavy ground traffic. The facility is functional and modest, consisting of a circular landing pad and a small support building monitored by the Vatican Gendarmerie. In addition to its diplomatic use, the heliport serves a critical humanitarian function, acting as a terminal for emergency medical flights transporting children to the Vatican-owned Bambino Gesù Pediatric Hospital. The site is strictly off-limits to tourists and is protected by the Leonine Walls, blending into the lush greenery of the gardens. Its establishment marked a significant step in the modernization of papal logistics and international protocol during the late 20th century.",
    },
    factsAdvanced: {
      de: ["Eingeweiht im Jahr 1976 von Papst Paul VI.", "Befindet sich am südwestlichen Rand der Vatikanischen Gärten.", "Dient primär für Flüge zur Sommerresidenz Castel Gandolfo.", "Wird in medizinischen Notfällen für das Kinderkrankenhaus Bambino Gesù genutzt.", "Unterliegt der direkten Aufsicht der vatikanischen Gendarmerie.", "Besteht aus einer einfachen Betonplattform ohne permanente Hangar-Gebäude."],
      hu: ["1976-ban adták át VI. Pál pápa uralkodása alatt.", "A vatikáni kertek délnyugati sarkában, a falak mellett helyezkedik el.", "Fő célja a pápa Castel Gandolfóba való eljutásának biztosítása.", "Sürgősségi mentőszállítást is fogad a Bambino Gesù gyermekkórház számára.", "A Vatikáni Csendőrség felügyeli a biztonsági protokollokat.", "A helikopter-leszállóhely jele egy nagy fehér 'H' a betonon."],
      ro: ["Inaugurat oficial în anul 1976 pentru a moderniza transportul papal.", "Localizat în colțul de sud-vest al grădinilor, lângă zidurile Leonine.", "Utilizat frecvent pentru deplasarea Papei la Castel Gandolfo în timpul verii.", "Servește ca punct de transfer pentru urgențele pediatrice ale spitalului Vaticanului.", "Controlul traficului este coordonat în colaborare cu autoritățile italiene.", "Este singura facilitate de transport aerian direct din interiorul Vaticanului."],
      en: ["Opened in 1976 during the pontificate of Pope Paul VI.", "Situated at the southwestern-most point of the Vatican City State.", "Provides a direct link to the papal summer residence at Castel Gandolfo.", "Designated for emergency medical use by the Bambino Gesù Hospital.", "The facility is managed and secured by the Vatican Gendarmerie.", "It consists of a simple asphalt pad within the secure garden area."],
    },
  },
  {
    id: "VA-001",
    type: "region",
    parent: "country-vatican",
    coords: [12.4534, 41.9029],
    name: {
      de: "Vatikan",
      hu: "Vatikán",
      ro: "Vatican",
      en: "Vatican"
    },
    description: {
      de: "Der historische Kern und das gesamte Gebiet des Staates Vatikanstadt.",
      hu: "Vatikánváros történelmi magja és az állam teljes területe.",
      ro: "Nucleul istoric și întregul teritoriu al statului Cetatea Vaticanului.",
      en: "The historical core and entire territory of the Vatican City State."
    },
    facts: {
      de: [
        "Umfasst den gesamten souveränen Staat Vatikanstadt.",
        "Das kleinste Land der Welt nach Fläche und Bevölkerung.",
        "Enthält den Petersdom, die Vatikanischen Gärten und Museen.",
        "Wurde 1929 durch die Lateranverträge unabhängig.",
        "Ganzes Gebiet ist als UNESCO-Weltkulturerbe gelistet."
      ],
      hu: [
        "Magában foglalja a teljes szuverén Vatikán Államot.",
        "Terület és népesség alapján a világ legkisebb országa.",
        "Itt található a Szent Péter-bazilika, a Vatikáni kertek és múzeumok.",
        "1929-ben lett független a lateráni egyezmény révén.",
        "Teljes területe az UNESCO Világörökség része."
      ],
      ro: [
        "Cuprinde întregul stat suveran Cetatea Vaticanului.",
        "Cea mai mică țară din lume după suprafață și populație.",
        "Conține Bazilica Sfântul Petru, Grădinile Vaticane și Muzeele.",
        "A devenit independent în 1929 prin Tratatele de la Lateran.",
        "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO."
      ],
      en: [
        "Includes the entire sovereign Vatican City State.",
        "The smallest country in the world by area and population.",
        "Contains St. Peter's Basilica, the Vatican Gardens and Museums.",
        "Became independent in 1929 through the Lateran Treaties.",
        "The entire territory is listed as a UNESCO World Heritage site."
      ]
    }, image: "/poi-images/VA-001.webp"},
  {
    id: "VA-001-teutonic-cemetery",
    type: "landmark",
    parent: "VA-001",
    coords: [12.4542, 41.9015],
    name: {
      de: "Teutonischer Friedhof",
      hu: "Teuton temető",
      ro: "Cimitirul Teuton",
      en: "Teutonic Cemetery"
    },
    description: {
      de: "Der deutsche Friedhof im Schatten des Petersdoms.",
      hu: "Német temető a Szent Péter-bazilika árnyékában.",
      ro: "Cimitirul german din umbra Bazilicii Sfântul Petru.",
      en: "The German cemetery in the shadow of St. Peter's Basilica."
    },
    facts: {
      de: [
        "Ältester deutscher Friedhof in Rom.",
        "Liegt rechtlich auf italienischem Boden, ist aber exterritoriales Gebiet des Vatikans.",
        "Ursprünglich für Pilger aus dem Heiligen Römischen Reich gegründet.",
        "Wird von der Erzbruderschaft zur Schmerzhaften Muttergottes verwaltet.",
        "Beherbergt das Campo Santo Teutonico Kolleg."
      ],
      hu: [
        "A legrégebbi német temető Rómában.",
        "Jogilag olasz területen fekszik, de a Vatikán exterritoriális része.",
        "Eredetileg a Német-római Birodalom zarándokai számára alapították.",
        "A Fájdalmas Szűzanya Testvérisége kezeli.",
        "Itt található a Campo Santo Teutonico kollégium is."
      ],
      ro: [
        "Cel mai vechi cimitir german din Roma.",
        "Din punct de vedere juridic se află pe pământ italian, dar este teritoriu extrateritorial al Vaticanului.",
        "Fondat inițial pentru pelerinii din Sfântul Imperiu Roman.",
        "Administrat de Arhiconfraternitatea Maicii Domnului a Îndureratei.",
        "Găzduiește colegiul Campo Santo Teutonico."
      ],
      en: [
        "The oldest German cemetery in Rome.",
        "Legally on Italian soil but is extraterritorial territory of the Vatican.",
        "Originally founded for pilgrims from the Holy Roman Empire.",
        "Managed by the Archconfraternity of the Sorrowful Mother of God.",
        "Houses the Campo Santo Teutonico college."
      ]
    }, image: "/poi-images/VA-001-teutonic-cemetery.webp",
    descriptionAdvanced: {
      de: "Der Campo Santo dei Teutonici e dei Fiamminghi ist der historische Friedhof der deutschsprachigen Länder und der Flamen im Vatikan. Er befindet sich unmittelbar neben dem Petersdom auf einem Gelände, das der Legende nach bereits von Kaiser Karl dem Großen im Jahr 799 gestiftet wurde. Der Friedhof ist Teil einer päpstlichen Stiftung, zu der auch das Priesterkolleg Collegio Teutonico gehört. Da er sich auf exterritorialem Gebiet befindet, ist der Zugang nur über den Vatikan unter Einhaltung von Sicherheitskontrollen möglich. Die dazugehörige Kirche Santa Maria della Pietà wurde im 15. Jahrhundert errichtet und dient als religiöses Zentrum für die Erzbruderschaft zur Schmerzhaften Muttergottes. Zahlreiche Persönlichkeiten aus Religion, Kunst und Wissenschaft mit Bezug zum deutschen Kulturraum haben hier ihre letzte Ruhestätte gefunden. Das Recht auf Beisetzung ist bis heute auf Mitglieder der Erzbruderschaft und Personen deutscher oder flämischer Abstammung beschränkt. Der Friedhof gilt als bedeutendes Denkmal der deutschen Präsenz im Herzen der Kirche und als eine Oase der Stille inmitten des Vatikans.",
      hu: "A Campo Santo dei Teutonici e dei Fiamminghi a Vatikán területén található történelmi temető, amely a német nyelvű népek és a flamandok nyughelyeként szolgál. Közvetlenül a Szent Péter-bazilika szomszédságában helyezkedik el, egy olyan területen, amelyet a hagyomány szerint Nagy Károly császár adományozott 799-ben. A temető egy pápai alapítvány része, amelyhez a Collegio Teutonico papi kollégium is tartozik, és központi szerepet játszik a német katolikus közösség életében. Mivel a terület exterritoriális státuszú, a látogatók csak a vatikáni biztonsági ellenőrzéseken keresztül juthatnak be a sírkertbe. A temetőhöz tartozó Santa Maria della Pietà-templom a 15. században épült, és a Fájdalmas Anya tiszteletére alapított főtestvérület székhelyeként működik. A sírkertben a vallás, a művészet és a tudomány számos neves német nyelvű képviselője nyugszik, akiknek élete szorosan kötődött Rómához. A temetkezési jog ma is korlátozott: csak a testvérület tagjai, illetve német vagy flamand származású személyek helyezhetők itt nyugalomra. A helyszín a csend szigete a Vatikán központjában.",
      ro: "Campo Santo dei Teutonici e dei Fiamminghi este cimitirul istoric al popoarelor de limbă germană și al flamanzilor, situat în Vatican. Acesta se află lângă Bazilica Sfântul Petru, pe un teren care, conform tradiției, a fost donat de împăratul Carol cel Mare în anul 799. Cimitirul face parte dintr-o fundație pontificală care include și colegiul preoțesc Collegio Teutonico. Deși situat pe un teritoriu extrateritorial, accesul publicului este permis doar prin punctele de control ale statului Vatican. Biserica Santa Maria della Pietà, adiacentă cimitirului, a fost construită în secolul al XV-lea și servește drept centru spiritual pentru Arhiconfraternitatea Maicii Domnului a Îndurerate. Numeroase personalități din domeniul teologiei, artei și științei din spațiul germanic au fost înmormântate aici de-a lungul secolelor. Dreptul de înhumare este menținut exclusiv pentru membrii arhiconfraternității și pentru persoanele de origine germană sau flamandă. Locul este considerat o oază de liniște și un simbol al prezenței germane îndelungate în centrul creștinătății.",
      en: "The Campo Santo dei Teutonici e dei Fiamminghi, commonly known as the Teutonic Cemetery, is a historic burial ground for German-speaking people and Flemings located within the Vatican. It is situated adjacent to St. Peter's Basilica on land traditionally believed to have been granted by Emperor Charlemagne in 799 AD. The site is managed by a pontifical foundation that also oversees the Collegio Teutonico, a priestly college dedicated to German-speaking clergy. Due to its location within extraterritorial Vatican territory, public access is regulated through the state's security checkpoints, ensuring a serene atmosphere for reflection. The annexed church, Santa Maria della Pietà, was built in the 15th century and serves as a gathering place for the Teutonic Archconfraternity of Our Lady of Sorrows. Many prominent figures in religion, science, and the arts from the German cultural sphere are interred here, reflecting centuries of historical ties to Rome. Burial rights remain strictly limited to members of the archconfraternity and individuals of German or Flemish descent. The cemetery stands as a peaceful sanctuary and a significant monument to the German presence in the heart of the Catholic Church.",
    },
    factsAdvanced: {
      de: ["Der Friedhof wurde der Legende nach um 799 von Kaiser Karl dem Großen gegründet.", "Es ist der älteste deutsche Bestattungsort in der Stadt Rom.", "Das Gelände liegt auf exterritorialem Gebiet, das dem Heiligen Stuhl gehört.", "Die Erzbruderschaft, die den Friedhof verwaltet, wurde im Jahr 1454 gegründet.", "Die Kirche Santa Maria della Pietà am Friedhof stammt aus dem 15. Jahrhundert.", "Nur Personen deutscher oder flämischer Herkunft dürfen hier bestattet werden."],
      hu: ["A temetőt a legenda szerint Nagy Károly császár alapította 799 körül.", "Ez a legrégebbi német temetkezési hely Róma városában.", "A terület a Szentszékhez tartozó exterritoriális övezetben fekszik.", "A temetőt kezelő főtestvérületet 1454-ben alapították.", "A sírkert melletti Santa Maria della Pietà-templom a 15. századból származik.", "Kizárólag német vagy flamand származású személyek temetkezhetnek ide."],
      ro: ["Cimitirul a fost fondat, conform legendei, în jurul anului 799 de împăratul Carol cel Mare.", "Este cel mai vechi loc de înmormântare german din orașul Roma.", "Terenul se află într-o zonă extrateritorială aparținând Sfântului Scaun.", "Arhiconfraternitatea care administrează cimitirul a fost fondată în anul 1454.", "Biserica Santa Maria della Pietà de lângă cimitir datează din secolul al XV-lea.", "Numai persoanele de origine germană sau flamandă pot fi înmormântate aici."],
      en: ["The cemetery was traditionally founded around 799 AD by Emperor Charlemagne.", "It is the oldest German burial ground in the city of Rome.", "The site is located in an extraterritorial zone belonging to the Holy See.", "The Archconfraternity that manages the cemetery was founded in 1454.", "The church of Santa Maria della Pietà at the site dates back to the 15th century.", "Only people of German or Flemish descent are permitted to be buried here."],
    },
  },
  {
    id: "VA-001-leonine-wall",
    type: "historical",
    parent: "VA-001",
    coords: [12.4480, 41.9030],
    name: {
      de: "Leoninische Mauer",
      hu: "Leó-fal",
      ro: "Zidul Leonin",
      en: "Leonine Wall"
    },
    description: {
      de: "Die mittelalterliche Befestigung, die den Vatikanhügel umschließt.",
      hu: "A Vatikán-dombot körülvevő középkori erődítmény.",
      ro: "Fortificația medievală care înconjoară dealul Vaticanului.",
      en: "The medieval fortification surrounding the Vatican Hill."
    },
    facts: {
      de: [
        "Erbaut von Papst Leo IV. im 9. Jahrhundert nach dem Überfall der Sarazenen.",
        "Bildete ursprünglich den Schutz für die 'Leoninische Stadt'.",
        "Die Mauern sind heute Teil der vatikanischen Befestigungsanlagen.",
        "Der Passetto di Borgo verbindet den Vatikan über die Mauer mit der Engelsburg.",
        "Umfasst markante Türme wie den Torre di San Giovanni."
      ],
      hu: [
        "IV. Leó pápa építtette a 9. században a szaracén támadások után.",
        "Eredetileg a 'Leó-város' védelmét szolgálta.",
        "A falak ma a vatikáni erődrendszer részét képezik.",
        "A Passetto di Borgo a falon keresztül köti össze a Vatikánt az Angyalvárral.",
        "Magában foglal olyan jellegzetes tornyokat, mint a Torre di San Giovanni."
      ],
      ro: [
        "Construit de Papa Leon al IV-lea în secolul al IX-lea după raidul sarazinilor.",
        "A format inițial protecția pentru 'Orașul Leonin'.",
        "Zidurile fac parte astăzi din fortificațiile Vaticanului.",
        "Passetto di Borgo leagă Vaticanul de Castel Sant'Angelo prin zid.",
        "Include turnuri proeminente, cum ar fi Torre di San Giovanni."
      ],
      en: [
        "Built by Pope Leo IV in the 9th century after the Saracen raid.",
        "Originally formed the protection for the 'Leonine City'.",
        "The walls are now part of the Vatican fortifications.",
        "The Passetto di Borgo connects the Vatican with Castel Sant'Angelo via the wall.",
        "Includes prominent towers such as the Torre di San Giovanni."
      ]
    },
    descriptionAdvanced: {
      de: "Die Leoninische Mauer ist ein bedeutendes Befestigungswerk in Rom, das zwischen 848 und 852 unter Papst Leo IV. zum Schutz des Vatikans errichtet wurde. Anlass für den Bau war der Überfall der Sarazenen auf die Basiliken St. Peter und St. Paul im Jahr 846. Die etwa drei Kilometer lange Mauer umschloss das Viertel Borgo und schuf damit die Civitas Leonina, eine vom restlichen Stadtgebiet Roms getrennte Papststadt. Im Laufe der Jahrhunderte wurde die Struktur mehrfach verstärkt und an militärische Anforderungen angepasst, insbesondere durch die Päpste der Renaissance. Ein bekanntes Element der Mauer ist der Passetto di Borgo, ein befestigter Fluchtweg, der den Apostolischen Palast mit der Engelsburg verbindet. Dieser Gang rettete unter anderem Papst Clemens VII. während der Plünderung Roms im Jahr 1527 das Leben. Heute sind große Teile der Mauer in die äußeren Begrenzungen des Vatikans integriert und dienen als Zeugnis der Verteidigungsarchitektur. Die Mauerreste prägen noch immer das Stadtbild und erzählen von der bewegten Geschichte des Vatikans und des Kirchenstaates.",
      hu: "A Leoninus-fal egy római erődítményrendszer, amelyet IV. Leó pápa építtetett 848 és 852 között a Vatikán védelmére. Az építkezést a szaracénok 846-os támadása tette szükségessé, amely során kifosztották a Szent Péter- és Szent Pál-bazilikákat. A három kilométer hosszú fal körülzárta a Borgo negyedet, létrehozva ezzel a Civitas Leoninát, amely különálló pápai várost alkotott Róma többi részétől. Az évszázadok során a falat többször megerősítették és átalakították, különösen a reneszánsz pápák uralkodása alatt. A fal legismertebb része a Passetto di Borgo, egy titkos folyosó, amely összeköti az Apostoli Palotát az Angyalvárral. Ez a védelmi útvonal biztosított menekülést többek között VII. Kelemen pápának az 1527-es támadás idején. Napjainkban a fal maradványai a Vatikánváros határának részét képezik, és fontos emlékei a középkori védelmi építészetnek. A falak nemcsak fizikai védelmet nyújtottak, hanem szimbolizálták a pápaság függetlenségét is a történelem során.",
      ro: "Zidul Leonin este o structură de fortificație din Roma, construită între anii 848 și 852 din ordinul Papei Leon al IV-lea pentru protecția Vaticanului. Construcția a fost inițiată ca răspuns la atacul sarazinilor din anul 846, care au prădat bazilicile Sfântul Petru și Sfântul Paul. Zidul, cu o lungime de aproximativ trei kilometri, a înconjurat cartierul Borgo, creând Civitas Leonina, un oraș papal separat de restul Romei. De-a lungul secolelor, fortificațiile au fost consolidate și modernizate de numeroși pontifi, în special în perioada Renașterii. Un element celebru al acestui zid este Passetto di Borgo, un coridor fortificat care permite legătura între Palatul Apostolic și Castelul Sant'Angelo. Această rută a fost utilizată de Papa Clement al VII-lea pentru a scăpa în timpul jafului Romei din 1527. Astăzi, porțiuni ale zidului sunt integrate în limitele actuale ale statului Vatican, fiind mărturii ale istoriei defensive a sediului papal. Zidul Leonin rămâne un monument remarcabil al arhitecturii militare medievale, vizibil și în prezent pentru pelerini și turiști.",
      en: "The Leonine Wall is a significant defensive structure in Rome, built between 848 and 852 under Pope Leo IV to protect the Vatican. The project was launched in response to the Saracen raid of 846, during which the basilicas of St. Peter and St. Paul were ransacked. Stretching approximately three kilometers, the wall enclosed the Borgo district, establishing the Leonine City (Civitas Leonina) as a distinct entity from the rest of Rome. Over the centuries, the walls were repeatedly reinforced and modified by various popes, particularly during the Renaissance, to adapt to military threats. A notable feature of the wall is the Passetto di Borgo, a fortified elevated corridor linking the Apostolic Palace with the Castel Sant'Angelo. This passage famously provided an escape route for Pope Clement VII during the Sack of Rome in 1527. Today, substantial sections of the wall remain as part of the Vatican City's boundaries, serving as a reminder of the papacy's historical need for security. The structure is recognized as a key monument of medieval military architecture and continues to shape the urban landscape.",
    },
    factsAdvanced: {
      de: ["Die Mauer wurde zwischen 848 und 852 unter Papst Leo IV. errichtet.", "Sie diente der Verteidigung des Vatikans gegen Angriffe der Sarazenen.", "In ihrer ursprünglichen Form war die Mauer etwa drei Kilometer lang.", "Das befestigte Gebiet erhielt den Namen Leoninische Stadt (Civitas Leonina).", "Der Passetto di Borgo ist ein erhöhter Geheimgang innerhalb der Mauerstruktur.", "Teile der Mauer bilden heute die offizielle Staatsgrenze der Vatikanstadt."],
      hu: ["A falat IV. Leó pápa építtette 848 és 852 között.", "A védmű feladata a Vatikán megvédése volt a szaracén támadások ellen.", "Eredeti formájában a fal körülbelül három kilométer hosszú volt.", "A megerősített terület a Leoninus-város (Civitas Leonina) nevet kapta.", "A Passetto di Borgo egy emelt szintű titkos folyosó a falszerkezeten belül.", "A fal részei ma Vatikánváros hivatalos államhatárát alkotják."],
      ro: ["Zidul a fost construit între anii 848 și 852 sub Papa Leon al IV-lea.", "A servit la apărarea Vaticanului împotriva atacurilor sarazinilor.", "În forma sa originală, zidul avea o lungime de aproximativ trei kilometri.", "Zona fortificată a primit numele de Orașul Leonin (Civitas Leonina).", "Passetto di Borgo este un pasaj secret suspendat în structura zidului.", "Părți ale zidului formează astăzi granița oficială a statului Vatican."],
      en: ["The wall was built between 848 and 852 under Pope Leo IV.", "It served to defend the Vatican against attacks by Saracens.", "In its original form, the wall was approximately three kilometers long.", "The fortified area was named the Leonine City (Civitas Leonina).", "The Passetto di Borgo is a fortified elevated passage within the wall structure.", "Parts of the wall today form the official boundary of Vatican City."],
    },
    image: "/poi-images/VA-001-leonine-wall.webp",
  }
];

export const vaticanAll: POI[] = [
  vaticanCountry,
  ...vaticanPois
];

