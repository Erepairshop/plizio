import { POI } from './poi';

// KategÃ³ria: Landscape (tÃ¡jkÃ©pek, kertek, szÃ¶kÅ‘kutak)
// A VatikÃ¡n mÃ©rete miatt ezek tÃ¶bbnyire ember Ã¡ltal alkotott tÃ¡jkÃ©pi elemek.
export const vaticanLandscapes: POI[] = [
  {
    id: 'landscape-vatican-gardens-extra',
    type: 'landmark',
    parent: 'VA',
    coords: [12.4524, 41.9043],
    name: {
      de: 'Vatikanische GÃ¤rten',
      hu: 'VatikÃ¡ni Kertek',
      ro: 'GrÄƒdinile Vaticane',
      en: 'Vatican Gardens',
  descriptionAdvanced: {
    de: "Die Vatikanischen GÃ¤rten stellen eine Oase der Ruhe und SpiritualitÃ¤t dar, die sich Ã¼ber mehr als 20 Hektar des kleinsten Staates der Welt erstreckt. Diese kunstvoll gestaltete Parklandschaft bietet eine faszinierende Mischung aus botanischer Vielfalt, historischen Monumenten und sakraler Kunst. WÃ¤hrend eines Spaziergangs durch die verschlungenen Pfade entdecken Besucher prÃ¤chtige Brunnen wie den Adlerbrunnen sowie sorgfÃ¤ltig gepflegte italienische und franzÃ¶sische Gartenabschnitte. Die GÃ¤rten dienen seit dem 13. Jahrhundert als Ort der Reflexion fÃ¼r die PÃ¤pste und beherbergen seltene Pflanzenarten aus aller Welt. Die harmonische Verbindung von Natur und Architektur macht dieses grÃ¼ne Herz des Vatikans zu einem unvergleichlichen Erlebnis fÃ¼r jeden Natur- und Kulturliebhaber, der die verborgenen SchÃ¤tze hinter den Mauern erkunden mÃ¶chte.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Die GÃ¤rten nehmen etwa 44 Hektar der GesamtflÃ¤che des Vatikans ein.", "Ihre UrsprÃ¼nge gehen auf das Jahr 1279 unter Papst Nikolaus III. zurÃ¼ck.", "Es gibt Ã¼ber 100 verschiedene Brunnen innerhalb der Gartenanlage.", "Die Parkanlage beherbergt mehrere mittelalterliche Befestigungsmauern.", "Besucher kÃ¶nnen die GÃ¤rten nur im Rahmen spezieller gefÃ¼hrter Touren besichtigen.", "Die GÃ¤rten enthalten eine Vielzahl von Marienstatuen aus verschiedenen Nationen.", "Der hÃ¶chste Punkt der GÃ¤rten bietet einen einzigartigen Blick auf die Peterskuppel.", "Es gibt einen eigenen Hubschrauberlandeplatz im westlichen Teil der GÃ¤rten."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Private stÃ¤dtische GÃ¤rten und Parks, die mehr als die HÃ¤lfte des Territoriums der Vatikanstadt bedecken.',
      hu: 'A VatikÃ¡n terÃ¼letÃ©nek tÃ¶bb mint felÃ©t elfoglalÃ³ privÃ¡t vÃ¡rosi kertek Ã©s parkok.',
      ro: 'GrÄƒdini È™i parcuri urbane private care acoperÄƒ mai mult de jumÄƒtate din teritoriul CetÄƒÈ›ii Vaticanului.',
      en: "Private urban gardens and parks covering more than half of the country's territory."
  },
    facts: {
      de: ["Seit 1279 fÃ¼r PÃ¤pste reserviert", "EnthÃ¤lt Befestigungsanlagen, Grotten und Brunnen", "Verschiedene Gartenstile sind vertreten"],
      hu: ["1279 Ã³ta a pÃ¡pÃ¡k szÃ¡mÃ¡ra fenntartva", "ErÅ‘dÃ­tmÃ©nyeket, barlangokat Ã©s szÃ¶kÅ‘kutakat tartalmaz", "TÃ¶bbfÃ©le kertstÃ­lus megtalÃ¡lhatÃ³"],
      ro: ["Rezervate pentru papi din 1279", "ConÈ›in fortificaÈ›ii, grote È™i fÃ¢ntÃ¢ni", "PrezintÄƒ diverse stiluri de grÄƒdinÄƒrit"],
      en: ["Reserved for popes since 1279", "Contains fortifications, grottoes, and fountains", "Features various gardening styles"]
  },
    descriptionAdvanced: {
      de: "Die Vatikanischen GÃ¤rten stellen eine Oase der Ruhe und SpiritualitÃ¤t dar, die sich Ã¼ber mehr als 20 Hektar des kleinsten Staates der Welt erstreckt. Diese kunstvoll gestaltete Parklandschaft bietet eine faszinierende Mischung aus botanischer Vielfalt, historischen Monumenten und sakraler Kunst. WÃ¤hrend eines Spaziergangs durch die verschlungenen Pfade entdecken Besucher prÃ¤chtige Brunnen wie den Adlerbrunnen sowie sorgfÃ¤ltig gepflegte italienische und franzÃ¶sische Gartenabschnitte. Die GÃ¤rten dienen seit dem 13. Jahrhundert als Ort der Reflexion fÃ¼r die PÃ¤pste und beherbergen seltene Pflanzenarten aus aller Welt. Die harmonische Verbindung von Natur und Architektur macht dieses grÃ¼ne Herz des Vatikans zu einem unvergleichlichen Erlebnis fÃ¼r jeden Natur- und Kulturliebhaber, der die verborgenen SchÃ¤tze hinter den Mauern erkunden mÃ¶chte.",
      hu: "A VatikÃ¡ni Kertek egy bÃ©kÃ©s oÃ¡zis a VatikÃ¡n terÃ¼letÃ©nek tÃ¶bb mint felÃ©t elfoglalÃ³ terÃ¼leten. A mÅ±vÃ©szien megtervezett park kÃ¼lÃ¶nleges keverÃ©ke a botanikai sokfÃ©lesÃ©gnek, a tÃ¶rtÃ©nelmi emlÃ©kmÅ±veknek Ã©s a szakrÃ¡lis mÅ±vÃ©szetnek. A kanyargÃ³s utakon tett sÃ©tÃ¡k sorÃ¡n lÃ¡togatÃ³k gyÃ¶nyÃ¶rÅ± szÃ¶kÅ‘kutakat, mint a Sas-kutat, Ã©s gondosan karbantartott kerteket fedezhetnek fel. A kertek a 13. szÃ¡zad Ã³ta szolgÃ¡lnak a pÃ¡pÃ¡k elmÃ©lkedÃ©si helyÃ©Ã¼l, Ã©s ritka nÃ¶vÃ©nyfajoknak adnak otthont a vilÃ¡g minden tÃ¡jÃ¡rÃ³l. A termÃ©szet Ã©s az Ã©pÃ­tÃ©szet harmonikus kapcsolata teszi ezt a terÃ¼letet felejthetetlen Ã©lmÃ©nnyÃ©, amely bepillantÃ¡st enged a pÃ¡pÃ¡k privÃ¡t Ã©letÃ©be. Sachkunde K5 â€” Ã©lÅ‘helyek Ã©s nÃ¶vÃ©nyvilÃ¡g.",
      ro: "GrÄƒdinile Vaticanului reprezintÄƒ o oazÄƒ de pace È™i spiritualitate, Ã®ntinzÃ¢ndu-se pe mai mult de 20 de hectare Ã®n cel mai mic stat din lume. Acest peisaj amenajat artistic oferÄƒ o combinaÈ›ie fascinantÄƒ de diversitate botanicÄƒ, monumente istorice È™i artÄƒ sacrÄƒ. ÃŽn timpul unei plimbÄƒri pe potecile È™erpuitoare, vizitatorii descoperÄƒ fÃ¢ntÃ¢ni magnifice, precum FÃ¢ntÃ¢na Vulturului, È™i secÈ›iuni de grÄƒdinÄƒ italiene È™i franceze Ã®ngrijite cu atenÈ›ie. GrÄƒdinile servesc drept loc de reflecÈ›ie pentru papi Ã®ncÄƒ din secolul al XIII-lea È™i gÄƒzduiesc specii rare de plante din Ã®ntreaga lume. LegÄƒtura armonioasÄƒ dintre naturÄƒ È™i arhitecturÄƒ face din aceastÄƒ inimÄƒ verde a Vaticanului o experienÈ›Äƒ de neegalat pentru orice iubitor de naturÄƒ È™i culturÄƒ.",
      en: "The Vatican Gardens serve as a tranquil sanctuary and a place of spiritual retreat, covering more than 20 hectares within the world's smallest state. This meticulously designed landscape is a harmonious blend of botanical variety, historical monuments, and sacred art. Walking through its winding paths, visitors encounter magnificent structures such as the Eagle Fountain, alongside beautifully manicured Italian and French-style garden sections. These gardens have functioned as a private space for reflection for popes since the 13th century and now house rare plant species from across the globe. The balance between preserved natural environments and classic architectural elements makes this green heart of the Vatican a unique experience for nature and culture enthusiasts alike. Science K5 â€” Habitats and biodiversity."
    },
    factsAdvanced: {
      de: ["Die GÃ¤rten nehmen etwa 44 Hektar der GesamtflÃ¤che des Vatikans ein.", "Ihre UrsprÃ¼nge gehen auf das Jahr 1279 unter Papst Nikolaus III. zurÃ¼ck.", "Es gibt Ã¼ber 100 verschiedene Brunnen innerhalb der Gartenanlage.", "Die Parkanlage beherbergt mehrere mittelalterliche Befestigungsmauern.", "Besucher kÃ¶nnen die GÃ¤rten nur im Rahmen spezieller gefÃ¼hrter Touren besichtigen.", "Die GÃ¤rten enthalten eine Vielzahl von Marienstatuen aus verschiedenen Nationen.", "Der hÃ¶chste Punkt der GÃ¤rten bietet einen einzigartigen Blick auf die Peterskuppel.", "Es gibt einen eigenen Hubschrauberlandeplatz im westlichen Teil der GÃ¤rten."],
      hu: [
        "A kertek a VatikÃ¡n Ã¶sszesen 44 hektÃ¡rjÃ¡bÃ³l kÃ¶rÃ¼lbelÃ¼l 23 hektÃ¡rt fednek le.",
        "EredetÃ¼k 1279-re, III. MiklÃ³s pÃ¡pa idejÃ©re nyÃºlik vissza.",
        "A kerteken belÃ¼l tÃ¶bb mint 100 kÃ¼lÃ¶nbÃ¶zÅ‘ szÃ¶kÅ‘kÃºt Ã©s emlÃ©kmÅ± talÃ¡lhatÃ³.",
        "A park tÃ¶bb kÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©nyt is tartalmaz a 9. szÃ¡zadbÃ³l.",
        "A lÃ¡togatÃ³k csak kÃ¼lÃ¶nleges vezetett tÃºrÃ¡k keretÃ©ben lÃ¡togathatjÃ¡k a kerteket.",
        "A kertekben sajÃ¡t helikopter-leszÃ¡llÃ³ Ã©s a VatikÃ¡ni vasÃºtÃ¡llomÃ¡s is megtalÃ¡lhatÃ³.",
        "A nÃ¶vÃ©nyvilÃ¡g a vilÃ¡g szinte minden kontinensÃ©rÅ‘l szÃ¡rmazÃ³ nÃ¶vÃ©nyeket tartalmaz.",
        "A kertek legmagasabb pontja egyedÃ¼lÃ¡llÃ³ kilÃ¡tÃ¡st nyÃºjt a Szent PÃ©ter-bazilika kupolÃ¡jÃ¡ra."
      ],
      ro: [
        "GrÄƒdinile ocupÄƒ aproximativ 23 de hectare din suprafaÈ›a totalÄƒ a Vaticanului.",
        "Originile lor dateazÄƒ din anul 1279, sub Papa Nicolae al III-lea.",
        "ExistÄƒ peste 100 de fÃ¢ntÃ¢ni diferite Ã®n cadrul complexului de grÄƒdini.",
        "Parcul gÄƒzduieÈ™te mai multe fortificaÈ›ii medievale din secolul al IX-lea.",
        "Vizitatorii pot explora grÄƒdinile doar prin intermediul unor tururi ghidate speciale.",
        "GrÄƒdinile includ un heliport privat È™i staÈ›ia de cale feratÄƒ a Vaticanului.",
        "Flora include specii de plante din aproape toate continentele lumii.",
        "Cel mai Ã®nalt punct oferÄƒ o vedere unicÄƒ asupra cupolei Bazilicii SfÃ¢ntul Petru."
      ],
      en: [
        "The gardens cover approximately 23 hectares of the Vatican's total area.",
        "Their origins date back to 1279 during the reign of Pope Nicholas III.",
        "There are over 100 different fountains within the garden complex.",
        "The park hosts several medieval fortifications from the 9th century.",
        "Visitors can explore the gardens only through special guided tours.",
        "The gardens house a private heliport and the Vatican railway station.",
        "The flora includes plant species from almost every continent on Earth.",
        "The highest point offers a unique view of the dome of St. Peter's Basilica."
      ]
    },  },
  {
    id: 'landscape-grotto-of-lourdes-extra',
    type: 'landmark',
    parent: 'VA',
    coords: [12.4495, 41.9038],
    name: {
      de: 'Lourdes-Grotte',
      hu: 'Lourdes-i Barlang',
      ro: 'Grota din Lourdes',
      en: 'Grotto of Lourdes',
  descriptionAdvanced: {
    de: "Die Lourdes-Grotte in den Vatikanischen GÃ¤rten ist eine detailgetreue Nachbildung der berÃ¼hmten Massabielle-Grotte in Frankreich, wo die Jungfrau Maria im Jahr 1858 dem HirtenmÃ¤dchen Bernadette Soubirous erschienen sein soll. Dieser andÃ¤chtige Ort wurde Ende des 19. Jahrhunderts als Geschenk fÃ¼r Papst Leo XIII. errichtet und dient seither als zentraler Punkt fÃ¼r Gebet und Kontemplation innerhalb der pÃ¤pstlichen Mauern. Die friedliche AtmosphÃ¤re wird durch die natÃ¼rliche Felsformation und die schlichte Statue der Unbefleckten EmpfÃ¤ngnis verstÃ¤rkt. GlÃ¤ubige und Besucher finden hier einen RÃ¼ckzugsort, der die tiefe Marienverehrung der katholischen Kirche widerspiegelt. Die Grotte ist nicht nur ein religiÃ¶ses Monument, sondern auch ein architektonisches Zeugnis der Verbundenheit zwischen dem Heiligen Stuhl und den weltweiten Wallfahrtsorten.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Die Grotte wurde im Jahr 1902 offiziell eingeweiht.", "Sie war ein Geschenk des Bischofs von Tarbes und Lourdes an Papst Leo XIII.", "Die Struktur besteht aus Steinen, die teilweise direkt aus Lourdes stammen.", "Der Altar in der Grotte ist derselbe, der ursprÃ¼nglich in Lourdes verwendet wurde.", "Die Grotte befindet sich in unmittelbarer NÃ¤he des Johannes-Turms.", "JÃ¤hrlich finden hier am 11. Februar feierliche Zeremonien statt.", "Die Statue der Jungfrau Maria steht in einer Nische, die der originalen exakt entspricht."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Eine kÃ¼nstliche Grotte in den Vatikanischen GÃ¤rten, die der Erscheinung in Lourdes, Frankreich, nachempfunden ist.',
      hu: 'A VatikÃ¡ni Kertekben talÃ¡lhatÃ³ mestersÃ©ges barlang, amely a franciaorszÃ¡gi Lourdes-i jelenÃ©s mÃ¡solata.',
      ro: 'O grotÄƒ artificialÄƒ Ã®n GrÄƒdinile Vaticane, o replicÄƒ a celei de la Lourdes, FranÈ›a.',
      en: 'An artificial grotto in the Vatican Gardens, replicating the one at Lourdes, France.'
  },
    facts: {
      de: ["Von Papst Leo XIII. in Auftrag gegeben", "Ein Ort des Gebets und der Andacht", "Nachbildung der Grotte von Massabielle"],
      hu: ["XIII. LeÃ³ pÃ¡pa megrendelÃ©sÃ©re kÃ©szÃ¼lt", "Az imÃ¡dsÃ¡g Ã©s az Ã¡hÃ­tat helye", "A Massabielle-i barlang mÃ¡solata"],
      ro: ["ComandatÄƒ de Papa Leon al XIII-lea", "Un loc de rugÄƒciune È™i devoÈ›iune", "ReplicÄƒ a grotei de la Massabielle"],
      en: ["Commissioned by Pope Leo XIII", "A place of prayer and devotion", "Replica of the Grotto of Massabielle"]
  },
    descriptionAdvanced: {
      de: "Die Lourdes-Grotte in den Vatikanischen GÃ¤rten ist eine detailgetreue Nachbildung der berÃ¼hmten Massabielle-Grotte in Frankreich, wo die Jungfrau Maria im Jahr 1858 dem HirtenmÃ¤dchen Bernadette Soubirous erschienen sein soll. Dieser andÃ¤chtige Ort wurde Ende des 19. Jahrhunderts als Geschenk fÃ¼r Papst Leo XIII. errichtet und dient seither als zentraler Punkt fÃ¼r Gebet und Kontemplation innerhalb der pÃ¤pstlichen Mauern. Die friedliche AtmosphÃ¤re wird durch die natÃ¼rliche Felsformation und die schlichte Statue der Unbefleckten EmpfÃ¤ngnis verstÃ¤rkt. GlÃ¤ubige und Besucher finden hier einen RÃ¼ckzugsort, der die tiefe Marienverehrung der katholischen Kirche widerspiegelt. Die Grotte ist nicht nur ein religiÃ¶ses Monument, sondern auch ein architektonisches Zeugnis der Verbundenheit zwischen dem Heiligen Stuhl und den weltweiten Wallfahrtsorten.",
      hu: "A Lourdes-i Barlang a VatikÃ¡ni Kertekben a franciaorszÃ¡gi Massabielle-barlang pontos mÃ¡solata, ahol 1858-ban SzÅ±z MÃ¡ria megjelent Bernadette Soubirous-nak. Ezt az Ã¡hÃ­tatos helyet a 19. szÃ¡zad vÃ©gÃ©n emeltÃ©k XIII. LeÃ³ pÃ¡pa ajÃ¡ndÃ©kakÃ©nt, Ã©s azÃ³ta a pÃ¡pai falakon belÃ¼li imÃ¡dsÃ¡g Ã©s szemlÃ©lÅ‘dÃ©s kÃ¶zponti helyszÃ­ne. A bÃ©kÃ©s lÃ©gkÃ¶rt a termÃ©szetes sziklaformÃ¡ciÃ³ Ã©s a SzeplÅ‘telen FogantatÃ¡s egyszerÅ± szobra erÅ‘sÃ­ti. A hÃ­vÅ‘k Ã©s lÃ¡togatÃ³k itt olyan visszavonulÃ¡si helyet talÃ¡lnak, amely tÃ¼krÃ¶zi a katolikus egyhÃ¡z mÃ©ly MÃ¡ria-tiszteletÃ©t. A barlang nemcsak vallÃ¡si emlÃ©kmÅ±, hanem a SzentszÃ©k Ã©s a vilÃ¡gmÃ©retÅ± zarÃ¡ndokhelyek kÃ¶zÃ¶tti kapcsolat Ã©pÃ­tÃ©szeti tanÃºja is. Sachkunde K3 â€” Ã¡llatok Ã©s nÃ¶vÃ©nyek Ã©lÅ‘helye.",
      ro: "Grota din Lourdes din GrÄƒdinile Vaticane este o replicÄƒ fidelÄƒ a celebrei grote Massabielle din FranÈ›a, unde se spune cÄƒ Fecioara Maria i-a apÄƒrut pÄƒstoriÈ›ei Bernadette Soubirous Ã®n anul 1858. Acest loc de rugÄƒciune a fost construit la sfÃ¢rÈ™itul secolului al XIX-lea ca un cadou pentru Papa Leon al XIII-lea È™i a servit de atunci ca punct central pentru rugÄƒciune È™i contemplare Ã®n interiorul zidurilor papale. Atmosfera paÈ™nicÄƒ este amplificatÄƒ de formaÈ›iunea stÃ¢ncoasÄƒ naturalÄƒ È™i statuia simplÄƒ a NeprihÄƒnitei ZÄƒmisliri. CredincioÈ™ii È™i vizitatorii gÄƒsesc aici un refugiu care reflectÄƒ devotamentul profund al Bisericii Catolice faÈ›Äƒ de Fecioara Maria. Grota nu este doar un monument religios, ci È™i o mÄƒrturie arhitecturalÄƒ a legÄƒturii dintre SfÃ¢ntul Scaun È™i locurile de pelerinaj din Ã®ntreaga lume.",
      en: "The Grotto of Lourdes within the Vatican Gardens is a precise replica of the famous Massabielle Grotto in France, where the Virgin Mary is said to have appeared to the shepherd girl Bernadette Soubirous in 1858. Commissioned at the end of the 19th century as a gift for Pope Leo XIII, this sacred space serves as a focal point for prayer and contemplation within the Vatican walls. The tranquil atmosphere is enhanced by natural rock formations and a simple statue of the Immaculate Conception. Faithful visitors and pilgrims find here a sanctuary that reflects the Catholic Church's deep devotion to the Virgin Mary. The Grotto is not merely a religious monument but also an architectural testament to the enduring bond between the Holy See and global pilgrimage sites. Religion K3 â€” Sacred spaces and traditions."
    },
    factsAdvanced: {
      de: [
        "Die Grotte wurde im Jahr 1902 offiziell eingeweiht.",
        "Sie war ein Geschenk des Bischofs von Tarbes und Lourdes an Papst Leo XIII.",
        "Die Struktur besteht aus Steinen, die teilweise direkt aus Lourdes stammen.",
        "Der Altar in der Grotte ist derselbe, der ursprÃ¼nglich in Lourdes verwendet wurde.",
        "Die Grotte befindet sich in unmittelbarer NÃ¤he des Johannes-Turms.",
        "JÃ¤hrlich finden hier am 11. Februar feierliche Zeremonien statt.",
        "Die Statue der Jungfrau Maria steht in einer Nische, die der originalen exakt entspricht."
      ],
      hu: [
        "A barlangot 1902-ben szenteltÃ©k fel hivatalosan.",
        "Tarbes Ã©s Lourdes pÃ¼spÃ¶kÃ©nek ajÃ¡ndÃ©ka volt XIII. LeÃ³ pÃ¡pÃ¡nak.",
        "A szerkezet olyan kÃ¶vekbÅ‘l Ã¡ll, amelyek rÃ©szben kÃ¶zvetlenÃ¼l Lourdes-bÃ³l szÃ¡rmaznak.",
        "A barlangban lÃ©vÅ‘ oltÃ¡r ugyanaz, amelyet eredetileg Lourdes-ban hasznÃ¡ltak.",
        "A barlang a JÃ¡nos-torony kÃ¶zvetlen kÃ¶zelÃ©ben talÃ¡lhatÃ³.",
        "Ã‰vente februÃ¡r 11-Ã©n Ã¼nnepÃ©lyes szertartÃ¡sokat tartanak itt.",
        "SzÅ±z MÃ¡ria szobra egy fÃ¼lkÃ©ben Ã¡ll, amely pontosan megfelel az eredetinek."
      ],
      ro: [
        "Grota a fost sfinÈ›itÄƒ oficial Ã®n anul 1902.",
        "A fost un cadou din partea Episcopului de Tarbes È™i Lourdes pentru Papa Leon al XIII-lea.",
        "Structura este alcÄƒtuitÄƒ din pietre aduse parÈ›ial direct din Lourdes.",
        "Altarul din interiorul grotei este acelaÈ™i care a fost folosit iniÈ›ial la Lourdes.",
        "Grota este situatÄƒ Ã®n imediata apropiere a Turnului SfÃ¢ntului Ioan.",
        "ÃŽn fiecare an, pe 11 februarie, au loc ceremonii festive Ã®n acest loc.",
        "Statuia Fecioarei Maria se aflÄƒ Ã®ntr-o niÈ™Äƒ care corespunde exact celei originale."
      ],
      en: [
        "The Grotto was officially consecrated in 1902.",
        "It was a gift from the Bishop of Tarbes and Lourdes to Pope Leo XIII.",
        "The structure incorporates stones brought partly from Lourdes itself.",
        "The altar in the Grotto is the same one originally used in Lourdes.",
        "The Grotto is situated in close proximity to the Tower of St. John.",
        "Solemn ceremonies are held here annually on February 11.",
        "The statue of the Virgin Mary stands in a niche that exactly replicates the original one."
      ]
    },
  },
  {
    id: 'landscape-cortile-della-pigna-extra',
    type: 'landmark',
    parent: 'VA',
    coords: [12.4552, 41.9064],
    name: {
      de: 'Pinienhof',
      hu: 'Toboz-udvar',
      ro: 'Curtea Conului de Pin',
      en: 'Pinecone Courtyard',
    },
    descriptionAdvanced: {
      de: "Der Pinienhof (Cortile della Pigna) ist einer der beeindruckendsten AuÃŸenbereiche der Vatikanischen Museen und verdankt seinen Namen der monumentalen Bronzepinie aus der rÃ¶mischen Antike. Dieser weitlÃ¤ufige Hof verbindet die architektonische Pracht des Vatikans mit bedeutenden Skulpturen verschiedener Epochen. Im Zentrum zieht die moderne, rotierende Bronzekugel 'Sfera con Sfera' von Arnaldo Pomodoro die Blicke auf sich, die einen spannenden Kontrast zu den klassischen Elementen bildet. Die riesige Nische, in der die fast vier Meter hohe Pinie steht, wurde von Pirro Ligorio entworfen und erinnert an antike Tempelbauten. Der Hof dient heute als Ort der Erholung fÃ¼r Museumsbesucher und bietet einen Moment der Weite inmitten der dichten Kunstsammlungen. Die Kombination aus antiker Symbolik und zeitgenÃ¶ssischer Kunst macht diesen Ort zu einem fotografischen Highlight.",
      hu: "A Toboz-udvar (Cortile della Pigna) a VatikÃ¡ni MÃºzeumok egyik legjellegzetesebb kÃ¼ltÃ©ri rÃ©sze, ahol Ã³kor Ã©s modernitÃ¡s talÃ¡lkozik. NevÃ©t a monumentÃ¡lis bronz tobozrÃ³l kapta, amely egykor rÃ³mai szÃ¶kÅ‘kÃºtkÃ©nt szolgÃ¡lt. Az udvar kÃ¶zepÃ©n Arnaldo Pomodoro 'Sfera con Sfera' cÃ­mÅ± modern szobra izgalmas kontrasztot alkot a klasszikus elemekkel. A forgÃ³ bronzgÃ¶mb a vilÃ¡g tÃ¶rÃ©kenysÃ©gÃ©t szimbolizÃ¡lja Ã©s elmÃ©lkedÃ©sre hÃ­vja a lÃ¡togatÃ³kat. Az udvar ma nÃ©pszerÅ± talÃ¡lkozÃ³hely Ã©s a nyugalom szigete a gyakran zsÃºfolt mÃºzeumi termek kÃ¶zÃ¶tt. A klasszikus szimbolika Ã©s a kortÃ¡rs mÅ±vÃ©szet Ã¶tvÃ¶zete felejthetetlennÃ© teszi a lÃ¡togatÃ¡st. FÃ¶ldrajz K6 â€” Ã©pÃ­tett kÃ¶rnyezet.",
      ro: "Curtea Conului de Pin (Cortile della Pigna) este una dintre cele mai impresionante zone exterioare ale Muzeelor Vaticane È™i Ã®È™i datoreazÄƒ numele conului de pin monumental din bronz din epoca romanÄƒ. AceastÄƒ curte spaÈ›ioasÄƒ Ã®mbinÄƒ splendoarea arhitecturalÄƒ a Vaticanului cu sculpturi importante din diferite epoci. ÃŽn centru, sfera modernÄƒ È™i rotativÄƒ din bronz 'Sfera con Sfera' a lui Arnaldo Pomodoro atrage atenÈ›ia, creÃ¢nd un contrast captivant cu elementele clasice. NiÈ™a uriaÈ™Äƒ Ã®n care se aflÄƒ conul de pin Ã®nalt de aproape patru metri a fost proiectatÄƒ de Pirro Ligorio È™i aminteÈ™te de templele antice. Curtea serveÈ™te astÄƒzi drept loc de odihnÄƒ pentru vizitatorii muzeului È™i oferÄƒ un moment de liniÈ™te Ã®n mijlocul denselor colecÈ›ii de artÄƒ.",
      en: "The Pinecone Courtyard (Cortile della Pigna) is one of the most striking outdoor spaces in the Vatican Museums, named after a monumental ancient Roman bronze pinecone. This expansive courtyard harmoniously blends the architectural grandeur of the Vatican with significant sculptures from various eras. At its center stands Arnaldo Pomodoro's 'Sfera con Sfera', a rotating bronze sphere that creates a captivating modern contrast to the classical surroundings. The massive exedra niche housing the nearly four-meter-tall pinecone was designed by Pirro Ligorio and evokes the grandeur of ancient temple architecture. Today, the courtyard serves as a peaceful refuge for museum visitors amidst the bustling collections. The combination of ancient symbolism and contemporary art makes this a photographic highlight. Geography K6 â€” Built environment."
    },
    factsAdvanced: {
      de: ["Die Bronzepinie ist fast 4 Meter hoch und stammt aus dem 1. oder 2. Jahrhundert.", "UrsprÃ¼nglich stand die Pinie in der NÃ¤he des Pantheons in Rom.", "Die modernen Kugel-Skulptur 'Sfera con Sfera' hat einen Durchmesser von 4 Metern.", "Der Hof ist Teil des riesigen Belvedere-Komplexes von Donato Bramante.", "Zwei Bronzepfauen flankieren die Pinie, Kopien von Originalen aus dem 2. Jahrhundert.", "Die groÃŸe Exedra (Nische) wurde um das Jahr 1565 fertiggestellt.", "Der Hof ist etwa 300 Meter lang und verbindet verschiedene MuseumsflÃ¼gel."],
      hu: [
        "A bronz toboz majdnem 4 mÃ©ter magas Ã©s az 1. vagy 2. szÃ¡zadbÃ³l szÃ¡rmazik.",
        "A toboz eredetileg a rÃ³mai Pantheon kÃ¶zelÃ©ben Ã¡llt.",
        "Az oldalsÃ³ pÃ¡vÃ¡k Hadrianus csÃ¡szÃ¡r sÃ­rjÃ¡bÃ³l szÃ¡rmazÃ³ eredetiek mÃ¡solatai.",
        "Arnaldo Pomodoro gÃ¶mbszobrÃ¡t 1990-ben Ã¡llÃ­tottÃ¡k fel az udvaron.",
        "Az udvar kÃ¶rÃ¼lbelÃ¼l 300 mÃ©ter hosszÃº Ã©s Ã¶sszekÃ¶ti a palota kÃ¼lÃ¶nbÃ¶zÅ‘ szÃ¡rnyait.",
        "A nagy fÃ¼lkÃ©t (Nicchione) Pirro Ligorio tervezte 1565-ben.",
        "Az udvar Donato Bramante hatalmas Belvedere-projektjÃ©nek rÃ©sze.",
        "A tobozt a kÃ¶zÃ©pkorban az Ã©leterÅ‘ Ã©s a halhatatlansÃ¡g szimbÃ³lumÃ¡nak tartottÃ¡k."
      ],
      ro: [
        "Conul de pin din bronz are aproape 4 metri Ã®nÄƒlÈ›ime È™i dateazÄƒ din secolul I sau II.",
        "IniÈ›ial, conul de pin a fost amplasat Ã®n apropierea Panteonului din Roma.",
        "Sculptura modernÄƒ sub formÄƒ de sferÄƒ 'Sfera con Sfera' are un diametru de 4 metri.",
        "Curtea face parte din vastul complex Belvedere proiectat de Donato Bramante.",
        "Doi pÄƒuni din bronz flancheazÄƒ conul de pin, fiind copii ale originalelor din secolul al II-lea.",
        "Marea exedrÄƒ (niÈ™a) a fost finalizatÄƒ Ã®n jurul anului 1565.",
        "Curtea are o lungime de aproximativ 300 de metri È™i conecteazÄƒ diferite aripi ale muzeului."
      ],
      en: [
        "The bronze pinecone is nearly 4 meters high and dates from the 1st or 2nd century.",
        "The pinecone was originally located near the Pantheon in Rome.",
        "The modern spherical sculpture 'Sfera con Sfera' has a diameter of 4 meters.",
        "The courtyard is part of the vast Belvedere complex designed by Donato Bramante.",
        "Two bronze peacocks flank the pinecone, serving as copies of 2nd-century originals.",
        "The large exedra (niche) was completed around 1565.",
        "The courtyard is approximately 300 meters long and connects various wings of the museum."
      ]
    },
    factsAdvanced: {
      de: [
        "Die Bronzepinie ist fast 4 Meter hoch und stammt aus dem 1. oder 2. Jahrhundert.",
        "UrsprÃ¼nglich stand die Pinie in der NÃ¤he des Pantheons in Rom.",
        "Die moderne Kugel-Skulptur 'Sfera con Sfera' hat einen Durchmesser von 4 Metern.",
        "Der Hof ist Teil des riesigen Belvedere-Komplexes von Donato Bramante.",
        "Zwei Bronzepfauen flankieren die Pinie, Kopien von Originalen aus dem 2. Jahrhundert.",
        "Die groÃŸe Exedra (Nische) wurde um das Jahr 1565 fertiggestellt.",
        "Der Hof ist etwa 300 Meter lang und verbindet verschiedene MuseumsflÃ¼gel."
      ],
      hu: [
        "A bronz toboz majdnem 4 mÃ©ter magas Ã©s az 1. vagy 2. szÃ¡zadbÃ³l szÃ¡rmazik.",
        "A toboz eredetileg a rÃ³mai Pantheon kÃ¶zelÃ©ben Ã¡llt.",
        "Az oldalsÃ³ pÃ¡vÃ¡k Hadrianus csÃ¡szÃ¡r sÃ­rjÃ¡bÃ³l szÃ¡rmazÃ³ eredetiek mÃ¡solatai.",
        "Arnaldo Pomodoro gÃ¶mbszobrÃ¡t 1990-ben Ã¡llÃ­tottÃ¡k fel az udvaron.",
        "Az udvar kÃ¶rÃ¼lbelÃ¼l 300 mÃ©ter hosszÃº Ã©s Ã¶sszekÃ¶ti a palota kÃ¼lÃ¶nbÃ¶zÅ‘ szÃ¡rnyait.",
        "A nagy fÃ¼lkÃ©t (Nicchione) Pirro Ligorio tervezte 1565-ben.",
        "Az udvar Donato Bramante hatalmas Belvedere-projektjÃ©nek rÃ©sze.",
        "A tobozt a kÃ¶zÃ©pkorban az Ã©leterÅ‘ Ã©s a halhatatlansÃ¡g szimbÃ³lumÃ¡nak tartottÃ¡k."
      ],
      ro: [],
      en: []
    }
  },
  {
    id: 'port-vatican-heliport-extra',
    type: 'port',
    parent: 'VA',
    coords: [12.4485, 41.9023],
    name: {
      de: 'Heliport des Vatikans',
      hu: 'VatikÃ¡ni Heliport',
      ro: 'Heliportul Vatican',
      en: 'Vatican City Heliport',
    },
    description: {
      de: 'Der Heliport verbindet den Vatikan mit den internationalen FlughÃ¤fen Roms und der pÃ¤pstlichen Sommerresidenz in Castel Gandolfo.',
      hu: 'A heliport kÃ¶ti Ã¶ssze a VatikÃ¡nt RÃ³ma nemzetkÃ¶zi repÃ¼lÅ‘tereivel Ã©s a pÃ¡pai nyÃ¡ri rezidenciÃ¡val Castel GandolfÃ³ban.',
      ro: 'Heliportul leagÄƒ Vaticanul de aeroporturile internaÈ›ionale din Roma È™i de reÈ™edinÈ›a papalÄƒ de varÄƒ de la Castel Gandolfo.',
      en: "The heliport connects the Vatican to Rome's international airports and the papal summer residence at Castel Gandolfo."
  },
    facts: {
      de: ["1976 erbaut", "Wird fÃ¼r offizielle Reisen und medizinische NotfÃ¤lle genutzt", "Befindet sich im westlichsten Teil der Vatikanstadt"],
      hu: ["1976-ban Ã©pÃ¼lt", "Hivatalos utakra Ã©s orvosi vÃ©szhelyzetekre hasznÃ¡ljÃ¡k", "A VatikÃ¡n legnyugatibb rÃ©szÃ©n talÃ¡lhatÃ³"],
      ro: ["Construit Ã®n 1976", "Utilizat pentru cÄƒlÄƒtorii oficiale È™i urgenÈ›e medicale", "Situat Ã®n partea cea mai vesticÄƒ a Vaticanului"],
      en: ["Built in 1976", "Used for official travel and medical emergencies", "Located in the westernmost bastion of the Vatican City"]
  },
    descriptionAdvanced: {
      de: "Der Heliport der Vatikanstadt ist ein unverzichtbarer Knotenpunkt fÃ¼r die MobilitÃ¤t des Heiligen Vaters und hoher StaatsgÃ¤ste. Gelegen in der westlichsten Bastion der vatikanischen Mauern, bietet er eine schnelle und sichere Verbindung zu den internationalen FlughÃ¤fen Roms sowie zur pÃ¤pstlichen Sommerresidenz Castel Gandolfo. Der Bau unter Papst Paul VI. markierte einen Schritt in die Moderne und ermÃ¶glicht es dem Papst, Reisen effizient und ohne die Verkehrsbelastungen der rÃ¶mischen Innenstadt anzutreten. Trotz seiner funktionalen Natur fÃ¼gt sich der Heliport diskret in die historische Umgebung der Vatikanischen GÃ¤rten ein. Er symbolisiert die Verbindung zwischen Tradition und modernster Logistik, die fÃ¼r die globale Mission des Papsttums notwendig ist. FÃ¼r Besucher ist er meist nur aus der Ferne oder bei offiziellen Ãœbertragungen sichtbar, bleibt aber ein faszinierendes Element der pÃ¤pstlichen Infrastruktur.",
      hu: "A VatikÃ¡ni helikopter-leszÃ¡llÃ³ funkcionÃ¡lis Ã©s egyben szimbolikus hely a VatikÃ¡ni Kertek legnyugatibb rÃ©szÃ©n. VI. PÃ¡l pÃ¡pa Ã©pÃ­ttette 1976-ban, gyors Ã©s biztonsÃ¡gos utazÃ¡st tesz lehetÅ‘vÃ© a pÃ¡pa szÃ¡mÃ¡ra, elkerÃ¼lve RÃ³ma sÅ±rÅ± forgalmÃ¡t. KÃ¼lÃ¶nÃ¶sen fontos a Castel Gandolfo-i nyÃ¡ri rezidenciÃ¡ra valÃ³ utazÃ¡sokhoz, vagy nemzetkÃ¶zi lelkipÃ¡sztori utakra valÃ³ indulÃ¡shoz a Fiumicino vagy Ciampino repÃ¼lÅ‘terekrÅ‘l. ÃllamfÅ‘k is landolnak itt, hogy kÃ¶zvetlenÃ¼l az Apostoli PalotÃ¡ba szÃ¡llÃ­thassÃ¡k Å‘ket. Az egyszerÅ± betonfelÃ¼let modern navigÃ¡ciÃ³s technolÃ³giÃ¡val felszerelt Ã©s szigorÃºan Å‘rzÃ¶tt. A tÃ¶rtÃ©nelmi falak Ã©s buja kertek kÃ¶zepette a helikopter-leszÃ¡llÃ³ a VatikÃ¡n modernizÃ¡ciÃ³jÃ¡nak Ã©s globÃ¡lis infrastruktÃºrÃ¡ba valÃ³ integrÃ¡ciÃ³jÃ¡nak szimbÃ³luma. Sachkunde K6 â€” kÃ¶zlekedÃ©s Ã©s infrastruktÃºra.",
      ro: "Heliportul Vaticanului este un punct de legÄƒturÄƒ esenÈ›ial pentru mobilitatea SfÃ¢ntului PÄƒrinte È™i a Ã®nalÈ›ilor demnitari de stat. Situat Ã®n bastionul cel mai vestic al zidurilor Vaticanului, oferÄƒ o legÄƒturÄƒ rapidÄƒ È™i sigurÄƒ cÄƒtre aeroporturile internaÈ›ionale din Roma È™i reÈ™edinÈ›a papalÄƒ de varÄƒ de la Castel Gandolfo. ConstrucÈ›ia sa sub Papa Paul al VI-lea a marcat un pas spre modernitate, permiÈ›Ã¢nd Papei sÄƒ cÄƒlÄƒtoreascÄƒ eficient, fÄƒrÄƒ a fi afectat de traficul intens din Roma. ÃŽn ciuda naturii sale funcÈ›ionale, heliportul se integreazÄƒ discret Ã®n mediul istoric al GrÄƒdinilor Vaticanului. Acesta simbolizeazÄƒ legÄƒtura dintre tradiÈ›ie È™i logisticÄƒ modernÄƒ, necesarÄƒ pentru misiunea globalÄƒ a papalitÄƒÈ›ii. Pentru vizitatori, este vizibil de obicei doar de la distanÈ›Äƒ sau Ã®n timpul transmisiunilor oficiale, rÄƒmÃ¢nÃ¢nd un element fascinant al infrastructurii papale.",
      en: "The Vatican City Heliport serves as an essential hub for the mobility of the Holy Father and high-ranking state guests. Located in the westernmost bastion of the Vatican walls, it provides a fast and secure connection to Rome's international airports as well as the papal summer residence of Castel Gandolfo. Constructed under Pope Paul VI, it marked a step toward modernization, allowing the Pope to travel efficiently without the traffic congestion of Rome's city center. Despite its functional nature, the heliport integrates discreetly into the historical environment of the Vatican Gardens. It symbolizes the connection between tradition and modern logistics, which is necessary for the global mission of the papacy. For visitors, it is usually visible only from a distance or during official broadcasts, remaining a fascinating element of the papal infrastructure. Geography K6 â€” Transportation and infrastructure."
    },
    factsAdvanced: {
      de: [
        "Der Heliport wurde am 15. Juli 1976 offiziell in Betrieb genommen.",
        "Er befindet sich in der NÃ¤he der Bastion von Johannes XXIII. im Westen des Staates.",
        "Die Flugzeit zur Sommerresidenz Castel Gandolfo betrÃ¤gt etwa 15 bis 20 Minuten.",
        "Er wird auch fÃ¼r dringende medizinische NotfallflÃ¼ge zum Krankenhaus Bambino GesÃ¹ genutzt.",
        "An der Einfahrt zum Heliport steht eine Bronzestatue der Jungfrau Maria.",
        "Der Heliport hat keinen permanenten Hangar; Hubschrauber landen und starten nur.",
        "Die Kontrolle des Luftraums erfolgt in Kooperation mit der italienischen Flugsicherung.",
        "Papst Franziskus nutzt den Heliport deutlich seltener als seine VorgÃ¤nger."
      ],
      hu: [
        "A helikopter-leszÃ¡llÃ³t hivatalosan 1976. jÃºlius 15-Ã©n helyeztÃ©k Ã¼zembe.",
        "Az Ã¡llam nyugati rÃ©szÃ©n, a XXIII. JÃ¡nos-bÃ¡stya kÃ¶zelÃ©ben talÃ¡lhatÃ³.",
        "A repÃ¼lÃ©si idÅ‘ a Castel Gandolfo-i nyÃ¡ri rezidenciÃ¡ra kÃ¶rÃ¼lbelÃ¼l 15-20 perc.",
        "SÃ¼rgÅ‘s orvosi vÃ©szhelyzeti repÃ¼lÃ©sekre is hasznÃ¡ljÃ¡k a Bambino GesÃ¹ kÃ³rhÃ¡zba.",
        "A helikopter-leszÃ¡llÃ³ bejÃ¡ratÃ¡nÃ¡l egy SzÅ±z MÃ¡ria bronzszobor Ã¡ll.",
        "A leszÃ¡llÃ³nak nincs Ã¡llandÃ³ hangÃ¡ra; a helikopterek csak fel- Ã©s leszÃ¡llnak.",
        "A lÃ©gtÃ©r ellenÅ‘rzÃ©se az olasz lÃ©giforgalmi irÃ¡nyÃ­tÃ¡ssal egyÃ¼ttmÅ±kÃ¶dÃ©sben tÃ¶rtÃ©nik.",
        "Ferenc pÃ¡pa lÃ©nyegesen ritkÃ¡bban hasznÃ¡lja a helikopter-leszÃ¡llÃ³t, mint elÅ‘dei."
      ],
      ro: [
        "Heliportul a fost pus oficial Ã®n funcÈ›iune pe 15 iulie 1976.",
        "Este situat Ã®n apropierea Bastionului lui Ioan al XXIII-lea Ã®n vestul statului.",
        "Timpul de zbor cÄƒtre reÈ™edinÈ›a de varÄƒ de la Castel Gandolfo este de aproximativ 15-20 de minute.",
        "Este utilizat È™i pentru zboruri medicale de urgenÈ›Äƒ cÄƒtre spitalul Bambino GesÃ¹.",
        "La intrarea heliportului se aflÄƒ o statuie din bronz a Fecioarei Maria.",
        "Heliportul nu are un hangar permanent; elicopterele doar decoleazÄƒ È™i aterizeazÄƒ.",
        "Controlul spaÈ›iului aerian se realizeazÄƒ Ã®n cooperare cu controlul traficului aerian italian.",
        "Papa Francisc foloseÈ™te heliportul mult mai rar decÃ¢t predecesorii sÄƒi."
      ],
      en: [
        "The heliport was officially opened on July 15, 1976.",
        "It is located near the Bastion of John XXIII in the western part of the state.",
        "The flight time to the summer residence at Castel Gandolfo is approximately 15 to 20 minutes.",
        "It is also used for urgent medical emergency flights to Bambino GesÃ¹ Hospital.",
        "A bronze statue of the Virgin Mary stands at the entrance to the heliport.",
        "The heliport has no permanent hangar; helicopters only land and take off.",
        "The control of the airspace is carried out in cooperation with Italian air traffic control.",
        "Pope Francis uses the heliport significantly less frequently than his predecessors."
      ]
    },
  },
  {
    id: 'port-vatican-railway-station-extra',
    type: 'port',
    parent: 'VA',
    coords: [12.4511, 41.9011],
    name: {
      de: 'Bahnhof der Vatikanstadt',
      hu: 'VatikÃ¡ni vasÃºtÃ¡llomÃ¡s',
      ro: 'Gara din Cetatea Vaticanului',
      en: 'Vatican City Railway Station',
  descriptionAdvanced: {
    de: "Der Bahnhof der Vatikanstadt ist ein architektonisches Juwel und das HerzstÃ¼ck des kÃ¼rzesten nationalen Eisenbahnnetzes der Welt. Nach den LateranvertrÃ¤gen von 1929 errichtet, spiegelt das prÃ¤chtige EmpfangsgebÃ¤ude aus weiÃŸem Marmor den Status des unabhÃ¤ngigen Stadtstaates wider. Obwohl der regulÃ¤re Personenverkehr begrenzt ist, spielt die Schiene eine wichtige Rolle fÃ¼r den GÃ¼tertransport und symbolische Reisen. Die Gleise fÃ¼hren durch ein massives Eisentor direkt in das italienische Bahnnetz und verbinden den Vatikan mit der AuÃŸenwelt. Der Bahnhof wurde vom Architekten Giuseppe Momo entworfen und besticht durch seine elegante Fassade und die luxuriÃ¶se Innenausstattung. Heute wird die Strecke auch fÃ¼r spezielle TouristenzÃ¼ge zu den pÃ¤pstlichen Villen genutzt, was Besuchern eine einzigartige Perspektive auf die vatikanische Logistik bietet.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Die Gleisstrecke innerhalb des Vatikans ist nur etwa 300 Meter lang.", "Das BahnhofsgebÃ¤ude wurde im Jahr 1934 offiziell eingeweiht.", "Das eiserne Tor an der Grenze wiegt stolze 38,5 Tonnen.", "Der erste Papst, der von hier aus reiste, war Johannes XXIII. im Jahr 1962.", "Es gibt keinen planmÃ¤ÃŸigen Linienverkehr fÃ¼r die Ã–ffentlichkeit.", "Die Schienenverbindung wurde durch die LateranvertrÃ¤ge von 1929 garantiert.", "Der Bahnhof beherbergt heute teilweise das vatikanische Duty-Free-Kaufhaus."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Der einzige Bahnhof der Vatikanstadt, der hauptsÃ¤chlich fÃ¼r den GÃ¼terverkehr genutzt wird, aber gelegentlich auch PassagierzÃ¼ge abfertigt.',
      hu: 'A VatikÃ¡n egyetlen vasÃºtÃ¡llomÃ¡sa, amelyet fÅ‘kÃ©nt teherszÃ¡llÃ­tÃ¡sra hasznÃ¡lnak, de esetenkÃ©nt szemÃ©lyvonatokat is fogad.',
      ro: 'Singura garÄƒ din Cetatea Vaticanului, utilizatÄƒ Ã®n principal pentru transportul de marfÄƒ, dar ocazional È™i pentru pasageri.',
      en: "The Vatican's only railway station, primarily used for freight but occasionally handles passenger trains."
  },
    facts: {
      de: ["KÃ¼rzeste nationale Eisenbahnstrecke der Welt", "1934 erÃ¶ffnet", "Das EmpfangsgebÃ¤ude wurde von Giuseppe Momo entworfen"],
      hu: ["A vilÃ¡g legrÃ¶videbb nemzeti vasÃºtvonala", "1934-ben nyÃ­lt meg", "Az Ã¡llomÃ¡sÃ©pÃ¼letet Giuseppe Momo tervezte"],
      ro: ["Cea mai scurtÄƒ cale feratÄƒ naÈ›ionalÄƒ din lume", "DeschisÄƒ Ã®n 1934", "ClÄƒdirea gÄƒrii a fost proiectatÄƒ de Giuseppe Momo"],
      en: ["World's shortest national railway line", "Opened in 1934", "The station building was designed by Giuseppe Momo"]
  },
    descriptionAdvanced: {
      de: "Der Bahnhof der Vatikanstadt ist ein architektonisches Juwel und das HerzstÃ¼ck des kÃ¼rzesten nationalen Eisenbahnnetzes der Welt. Nach den LateranvertrÃ¤gen von 1929 errichtet, spiegelt das prÃ¤chtige EmpfangsgebÃ¤ude aus weiÃŸem Marmor den Status des unabhÃ¤ngigen Stadtstaates wider. Obwohl der regulÃ¤re Personenverkehr begrenzt ist, spielt die Schiene eine wichtige Rolle fÃ¼r den GÃ¼tertransport und symbolische Reisen. Die Gleise fÃ¼hren durch ein massives Eisentor direkt in das italienische Bahnnetz und verbinden den Vatikan mit der AuÃŸenwelt. Der Bahnhof wurde vom Architekten Giuseppe Momo entworfen und besticht durch seine elegante Fassade und die luxuriÃ¶se Innenausstattung. Heute wird die Strecke auch fÃ¼r spezielle TouristenzÃ¼ge zu den pÃ¤pstlichen Villen genutzt, was Besuchern eine einzigartige Perspektive auf die vatikanische Logistik bietet.",
      hu: "A VatikÃ¡ni vasÃºtÃ¡llomÃ¡s egy Ã©pÃ­tÃ©szeti gyÃ¶ngyszem Ã©s a vilÃ¡g legrÃ¶videbb nemzeti vasÃºthÃ¡lÃ³zatÃ¡nak kÃ¶zpontja. Az 1929-es LaterÃ¡ni egyezmÃ©nyek utÃ¡n Ã©pÃ¼lt, a fehÃ©r mÃ¡rvÃ¡ny Ã©pÃ¼let a fÃ¼ggetlen vÃ¡rosÃ¡llam stÃ¡tuszÃ¡t tÃ¼krÃ¶zi. BÃ¡r a rendszeres szemÃ©lyszÃ¡llÃ­tÃ¡s korlÃ¡tozott, a vasÃºt fontos szerepet jÃ¡tszik az Ã¡ruszÃ¡llÃ­tÃ¡sban Ã©s a szimbolikus utazÃ¡sokban. A sÃ­nek egy masszÃ­v vaskapun keresztÃ¼l kÃ¶zvetlenÃ¼l az olasz hÃ¡lÃ³zathoz kapcsolÃ³dnak. A Giuseppe Momo Ã©pÃ­tÃ©sz Ã¡ltal tervezett Ã¡llomÃ¡s elegÃ¡ns homlokzatÃ¡val Ã©s luxus belsÅ‘ kialakÃ­tÃ¡sÃ¡val tÅ±nik ki. Ma a vonalat kÃ¼lÃ¶nleges turista-vonatok is hasznÃ¡ljÃ¡k a pÃ¡pai villÃ¡k felÃ©, betekintÃ©st nyÃºjtva a vatikÃ¡ni logisztikÃ¡ba Ã©s tÃ¶rtÃ©nelembe. Sachkunde K6 â€” kÃ¶zlekedÃ©s Ã©s infrastruktÃºra.",
      ro: "Gara din Cetatea Vaticanului este o bijuterie arhitecturalÄƒ È™i inima celei mai scurte reÈ›ele feroviare naÈ›ionale din lume. ConstruitÄƒ dupÄƒ Tratatele de la Lateran din 1929, clÄƒdirea magnificÄƒ din marmurÄƒ albÄƒ reflectÄƒ statutul statului independent. DeÈ™i transportul regulat de pasageri este limitat, calea feratÄƒ joacÄƒ un rol important Ã®n transportul de mÄƒrfuri È™i cÄƒlÄƒtoriile simbolice. È˜inele trec printr-o poartÄƒ de fier masivÄƒ direct Ã®n reÈ›eaua feroviarÄƒ italianÄƒ, conectÃ¢nd Vaticanul cu lumea exterioarÄƒ. Gara a fost proiectatÄƒ de arhitectul Giuseppe Momo È™i impresioneazÄƒ prin faÈ›ada sa elegantÄƒ È™i interiorul luxos. AstÄƒzi, linia este utilizatÄƒ È™i pentru trenuri turistice speciale cÄƒtre vilele papale, oferind vizitatorilor o perspectivÄƒ unicÄƒ asupra logisticii Vaticanului.",
      en: "The Vatican City Railway Station is an architectural jewel and the heart of the world's shortest national railway network. Constructed following the Lateran Treaty of 1929, the magnificent white marble building reflects the sovereign status of the independent city-state. While regular passenger service is limited, the rail line plays an important role in freight transport and symbolic journeys. The tracks lead through a massive iron gate directly into the Italian rail network, connecting the Vatican to the outside world. Designed by architect Giuseppe Momo, the station is notable for its elegant facade and luxurious interior. Today, the route is also used for special tourist trains to the papal villas, offering visitors a unique perspective on Vatican logistics and history. Geography K6 â€” Transportation and infrastructure."
    },
    factsAdvanced: {
      de: [
        "Die Gleisstrecke innerhalb des Vatikans ist nur etwa 300 Meter lang.",
        "Das BahnhofsgebÃ¤ude wurde im Jahr 1934 offiziell eingeweiht.",
        "Das eiserne Tor an der Grenze wiegt stolze 38,5 Tonnen.",
        "Der erste Papst, der von hier aus reiste, war Johannes XXIII. im Jahr 1962.",
        "Es gibt keinen planmÃ¤ÃŸigen Linienverkehr fÃ¼r die Ã–ffentlichkeit.",
        "Die Schienenverbindung wurde durch die LateranvertrÃ¤ge von 1929 garantiert.",
        "Der Bahnhof beherbergt heute teilweise das vatikanische Duty-Free-Kaufhaus."
      ],
      hu: [
        "A vatikÃ¡ni vÃ¡gÃ¡nyhossz mindÃ¶ssze kÃ¶rÃ¼lbelÃ¼l 300 mÃ©ter.",
        "Az Ã¡llomÃ¡sÃ©pÃ¼letet 1934-ben avattÃ¡k fel hivatalosan.",
        "A hatÃ¡ron lÃ©vÅ‘ vaskapu sÃºlya 38,5 tonna.",
        "Az elsÅ‘ pÃ¡pa, aki innen utazott, XXIII. JÃ¡nos volt 1962-ben.",
        "Nincs rendszeres napi menetrend szerinti jÃ¡rat a nagykÃ¶zÃ¶nsÃ©g szÃ¡mÃ¡ra.",
        "Az Ã¡llomÃ¡s rÃ©szben a vatikÃ¡ni vÃ¡mmentes Ã¡ruhÃ¡zaknak ad otthont."
      ],
      ro: [
        "Traseul feroviar din interiorul Vaticanului are o lungime de doar aproximativ 300 de metri.",
        "ClÄƒdirea gÄƒrii a fost inauguratÄƒ oficial Ã®n anul 1934.",
        "Poarta de fier de la frontierÄƒ cÃ¢ntÄƒreÈ™te 38,5 tone.",
        "Primul papÄƒ care a cÄƒlÄƒtorit de aici a fost Ioan al XXIII-lea Ã®n 1962.",
        "Nu existÄƒ servicii regulate de pasageri pentru publicul larg.",
        "Conexiunea feroviarÄƒ a fost garantatÄƒ prin Tratatul de la Lateran din 1929.",
        "ÃŽn prezent, gara gÄƒzduieÈ™te parÈ›ial magazinul duty-free al Vaticanului."
      ],
      en: [
        "The railway line within the Vatican is only about 300 meters long.",
        "The station building was officially inaugurated in 1934.",
        "The iron gate at the border weighs 38.5 tonnes.",
        "The first Pope to travel from here was John XXIII in 1962.",
        "There is no regular scheduled passenger service for the general public.",
        "The rail connection was guaranteed by the Lateran Treaty of 1929.",
        "The station building now partially houses the Vatican's duty-free shop."
      ]
    },
  },
  {
    id: 'industry-vatican-pharmacy-extra',
    type: 'industry',
    parent: 'VA',
    coords: [12.4528, 41.9022],
    name: {
      de: 'Vatikanische Apotheke',
      hu: 'VatikÃ¡ni GyÃ³gyszertÃ¡r',
      ro: 'Farmacia Vaticanului',
      en: 'Vatican Pharmacy',
  descriptionAdvanced: {
    de: "Die Vatikanische Apotheke, gegrÃ¼ndet im Jahr 1874, gilt als eine der meistbesuchten und effizientesten Apotheken weltweit. Gelegen hinter dem St.-Anna-Tor, bietet sie ein umfangreiches Sortiment an Medikamenten, die oft in Italien oder anderen LÃ¤ndern schwer erhÃ¤ltlich sind. Unter der Leitung des Ordens der Barmherzigen BrÃ¼der vom hl. Johannes von Gott verbindet sie modernste pharmazeutische Versorgung mit christlicher NÃ¤chstenliebe. TÃ¤glich nutzen Tausende von Kunden, darunter Bewohner des Vatikans, Angestellte und externe Besucher mit entsprechendem Rezept, die Dienstleistungen dieses besonderen Ortes. Die Apotheke ist bekannt fÃ¼r ihre steuerfreien Preise und die VerfÃ¼gbarkeit internationaler PrÃ¤parate. Ihre Bedeutung reicht weit Ã¼ber die Grenzen des kleinen Staates hinaus und macht sie zu einer lebenswichtigen Institution fÃ¼r die Gesundheitsversorgung im Herzen Roms.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Die Apotheke wird tÃ¤glich von etwa 2.000 bis 2.500 Personen besucht.", "Es sind Medikamente aus Ã¼ber 50 verschiedenen LÃ¤ndern vorrÃ¤tig.", "GegrÃ¼ndet wurde sie von Bruder Eusebius Ludvig Fronmen im Jahr 1874.", "Die VerkaufsflÃ¤che erstreckt sich Ã¼ber etwa 500 Quadratmeter.", "Es arbeiten etwa 50 Mitarbeiter, darunter viele OrdensbrÃ¼der.", "Die Apotheke fÃ¼hrt Ã¼ber 40.000 verschiedene pharmazeutische Artikel.", "Der Zugang erfordert ein gÃ¼ltiges Ã¤rztliches Rezept und einen IdentitÃ¤tsnachweis."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Die 1874 gegrÃ¼ndete einzige Apotheke in der Vatikanstadt, die fÃ¼r ihre groÃŸe Auswahl an internationalen Medikamenten bekannt ist.',
      hu: 'Az 1874-ben alapÃ­tott egyetlen gyÃ³gyszertÃ¡r a VatikÃ¡nban, amely nemzetkÃ¶zi gyÃ³gyszerek szÃ©les vÃ¡lasztÃ©kÃ¡rÃ³l ismert.',
      ro: 'FondatÄƒ Ã®n 1874, este singura farmacie din Cetatea Vaticanului, cunoscutÄƒ pentru selecÈ›ia largÄƒ de medicamente internaÈ›ionale.',
      en: 'Founded in 1874, it is the only pharmacy in the Vatican City, known for its wide selection of international medicines.'
  },
    facts: {
      de: ["Eine der meistbesuchten Apotheken der Welt", "Steht Bewohnern und Angestellten des Vatikans zur VerfÃ¼gung", "Erfordert ein Rezept und einen Ausweis fÃ¼r den Zugang"],
      hu: ["A vilÃ¡g egyik legforgalmasabb gyÃ³gyszertÃ¡ra", "A vatikÃ¡ni lakosok Ã©s alkalmazottak szÃ¡mÃ¡ra elÃ©rhetÅ‘", "A belÃ©pÃ©shez recept Ã©s szemÃ©lyazonosÃ­tÃ³ igazolvÃ¡ny szÃ¼ksÃ©ges"],
      ro: ["Una dintre cele mai aglomerate farmacii din lume", "DisponibilÄƒ rezidenÈ›ilor È™i angajaÈ›ilor Vaticanului", "NecesitÄƒ reÈ›etÄƒ È™i act de identitate pentru acces"],
      en: ["One of the busiest pharmacies in the world", "Serves Vatican residents and employees", "Requires a prescription and ID for access"]
  },
    descriptionAdvanced: {
      de: "Die Vatikanische Apotheke, gegrÃ¼ndet im Jahr 1874, gilt als eine der meistbesuchten und effizientesten Apotheken weltweit. Gelegen hinter dem St.-Anna-Tor, bietet sie ein umfangreiches Sortiment an Medikamenten, die oft in Italien oder anderen LÃ¤ndern schwer erhÃ¤ltlich sind. Unter der Leitung des Ordens der Barmherzigen BrÃ¼der vom hl. Johannes von Gott verbindet sie modernste pharmazeutische Versorgung mit christlicher NÃ¤chstenliebe. TÃ¤glich nutzen Tausende von Kunden, darunter Bewohner des Vatikans, Angestellte und externe Besucher mit entsprechendem Rezept, die Dienstleistungen dieses besonderen Ortes. Die Apotheke ist bekannt fÃ¼r ihre steuerfreien Preise und die VerfÃ¼gbarkeit internationaler PrÃ¤parate. Ihre Bedeutung reicht weit Ã¼ber die Grenzen des kleinen Staates hinaus und macht sie zu einer lebenswichtigen Institution fÃ¼r die Gesundheitsversorgung im Herzen Roms.",
      hu: "A VatikÃ¡ni GyÃ³gyszertÃ¡r, amelyet 1874-ben alapÃ­tottak, a vilÃ¡g egyik legforgalmasabb Ã©s leghatÃ©konyabb gyÃ³gyszertÃ¡ra. A Szent Anna-kapu mÃ¶gÃ¶tt elhelyezkedve szÃ©les kÃ¶rÅ± gyÃ³gyszerkÃ­nÃ¡latot biztosÃ­t, gyakran olyan szereket is, amelyek OlaszorszÃ¡gban vagy mÃ¡s orszÃ¡gokban nehezen beszerezhetÅ‘k. Az Irgalmasrendi barÃ¡tok vezetÃ©sÃ©vel a modern gyÃ³gyszerÃ©szeti ellÃ¡tÃ¡st keresztÃ©ny szeretettel Ã¶tvÃ¶zik. Naponta ezrek lÃ¡togatjÃ¡k, kÃ¶ztÃ¼k vatikÃ¡ni lakosok, alkalmazottak Ã©s kÃ¼lsÅ‘ lÃ¡togatÃ³k orvosi recepttel. A gyÃ³gyszertÃ¡r az adÃ³mentes Ã¡rairÃ³l Ã©s a nemzetkÃ¶zi kÃ©szÃ­tmÃ©nyek elÃ©rhetÅ‘sÃ©gÃ©rÅ‘l hÃ­res. JelentÅ‘sÃ©ge messze tÃºlmutat a VatikÃ¡n hatÃ¡rain, a rÃ³mai egÃ©szsÃ©gÃ¼gyi ellÃ¡tÃ¡s kulcsfontossÃ¡gÃº intÃ©zmÃ©nye. Sachkunde K5 â€” egÃ©szsÃ©gÃ¼gy Ã©s szolgÃ¡ltatÃ¡sok.",
      ro: "Farmacia Vaticanului, fondatÄƒ Ã®n 1874, este consideratÄƒ una dintre cele mai vizitate È™i eficiente farmacii din lume. SituatÄƒ Ã®n spatele PorÈ›ii SfÃ¢nta Ana, oferÄƒ o gamÄƒ largÄƒ de medicamente, adesea greu de gÄƒsit Ã®n Italia sau Ã®n alte È›Äƒri. CondusÄƒ de Ordinul FraÈ›ilor Milostivi ai SfÃ¢ntului Ioan al lui Dumnezeu, aceasta combinÄƒ furnizarea farmaceuticÄƒ de ultimÄƒ generaÈ›ie cu caritatea creÈ™tinÄƒ. Mii de clienÈ›i, inclusiv rezidenÈ›i ai Vaticanului, angajaÈ›i È™i vizitatori externi cu reÈ›ete corespunzÄƒtoare, utilizeazÄƒ zilnic serviciile acestui loc special. Farmacia este cunoscutÄƒ pentru preÈ›urile sale fÄƒrÄƒ taxe È™i disponibilitatea preparatelor internaÈ›ionale. ImportanÈ›a sa depÄƒÈ™eÈ™te cu mult graniÈ›ele micului stat, fÄƒcÃ¢nd-o o instituÈ›ie vitalÄƒ pentru asistenÈ›a medicalÄƒ Ã®n inima Romei.",
      en: "The Vatican Pharmacy, founded in 1874, is considered one of the most visited and efficient pharmacies worldwide. Located behind the St. Anne's Gate, it provides an extensive assortment of medications, many of which are often hard to find in Italy or other countries. Led by the Order of the Hospitallers of St. John of God, it combines state-of-the-art pharmaceutical care with Christian charity. Thousands of customers, including Vatican residents, employees, and external visitors with valid prescriptions, utilize the services of this unique place daily. The pharmacy is known for its tax-free prices and the availability of international preparations. Its importance extends far beyond the borders of the small state, making it a vital institution for healthcare in the heart of Rome. Health K5 â€” Healthcare and services."
    },
    factsAdvanced: {
      de: [
        "Die Apotheke wird tÃ¤glich von etwa 2.000 bis 2.500 Personen besucht.",
        "Es sind Medikamente aus Ã¼ber 50 verschiedenen LÃ¤ndern vorrÃ¤tig.",
        "GegrÃ¼ndet wurde sie von Bruder Eusebius Ludvig Fronmen im Jahr 1874.",
        "Die VerkaufsflÃ¤che erstreckt sich Ã¼ber etwa 500 Quadratmeter.",
        "Es arbeiten etwa 50 Mitarbeiter, darunter viele OrdensbrÃ¼der.",
        "Die Apotheke fÃ¼hrt Ã¼ber 40.000 verschiedene pharmazeutische Artikel.",
        "Der Zugang erfordert ein gÃ¼ltiges Ã¤rztliches Rezept und einen IdentitÃ¤tsnachweis."
      ],
      hu: [
        "A gyÃ³gyszertÃ¡rat naponta kÃ¶rÃ¼lbelÃ¼l 2000-2500 vÃ¡sÃ¡rlÃ³ lÃ¡togatja.",
        "TÃ¶bb mint 50 kÃ¼lÃ¶nbÃ¶zÅ‘ orszÃ¡gbÃ³l szÃ¡rmazÃ³ gyÃ³gyszert tartanak kÃ©szleten.",
        "A gyÃ³gyszertÃ¡rat Eusebius Ludvig Fronmen testvÃ©r alapÃ­totta a 19. szÃ¡zad vÃ©gÃ©n.",
        "Az eladÃ³tÃ©r kÃ¶rÃ¼lbelÃ¼l 500 nÃ©gyzetmÃ©teres modern lÃ©tesÃ­tmÃ©ny.",
        "Mintegy 50 alkalmazott dolgozik ott, kÃ¶ztÃ¼k sok magasan kÃ©pzett gyÃ³gyszerÃ©sz.",
        "TÃ¶bb mint 40 000 kÃ¼lÃ¶nbÃ¶zÅ‘ gyÃ³gyszerÃ©szeti termÃ©k van Ã¡llandÃ³an kÃ©szleten.",
        "A belÃ©pÃ©shez Ã©rvÃ©nyes recept Ã©s hivatalos szemÃ©lyazonosÃ­tÃ³ okmÃ¡ny szÃ¼ksÃ©ges."
      ],
      ro: [
        "Farmacia este vizitatÄƒ zilnic de aproximativ 2.000 - 2.500 de persoane.",
        "ExistÄƒ medicamente disponibile din peste 50 de È›Äƒri diferite.",
        "A fost fondatÄƒ de fratele Eusebius Ludvig Fronmen Ã®n anul 1874.",
        "SpaÈ›iul de vÃ¢nzare se Ã®ntinde pe aproximativ 500 de metri pÄƒtraÈ›i.",
        "LucreazÄƒ aproximativ 50 de angajaÈ›i, inclusiv mulÈ›i cÄƒlugÄƒri.",
        "Farmacia oferÄƒ peste 40.000 de articole farmaceutice diferite.",
        "Accesul necesitÄƒ o reÈ›etÄƒ medicalÄƒ valabilÄƒ È™i o dovadÄƒ de identitate."
      ],
      en: [
        "The pharmacy is visited daily by approximately 2,000 to 2,500 people.",
        "Medications from over 50 different countries are kept in stock.",
        "It was founded by Brother Eusebius Ludvig Fronmen in 1874.",
        "The sales floor spans approximately 500 square meters.",
        "About 50 staff members work there, including many friars.",
        "The pharmacy stocks over 40,000 different pharmaceutical items.",
        "Access requires a valid medical prescription and proof of identity."
      ]
    },
  },
  {
    id: 'industry-vatican-mosaic-studio-extra',
    type: 'industry',
    parent: 'VA',
    coords: [12.4581, 41.9025],
    name: {
      de: 'Vatikanisches Mosaikstudio',
      hu: 'VatikÃ¡ni MozaikstÃºdiÃ³',
      ro: 'Studioul de Mozaic al Vaticanului',
      en: 'Vatican Mosaic Studio',
  descriptionAdvanced: {
    de: "Das Vatikanische Mosaikstudio ist eine weltweit einzigartige Werkstatt, in der die Jahrhunderte alte Tradition der Mosaikkunst auf hÃ¶chstem Niveau bewahrt wird. Seit seiner GrÃ¼ndung im 18. Jahrhundert ist das Studio fÃ¼r die Instandhaltung der prachtvollen Mosaike im Petersdom verantwortlich. Die spezialisierten KÃ¼nstler, bekannt als 'Mosaizisten', verwenden eine beeindruckende Palette von Ã¼ber 28.000 verschiedenen FarbtÃ¶nen, um Meisterwerke von unglaublicher Detailtiefe zu schaffen. Neben Restaurierungsarbeiten fertigt das Studio auch exklusive Mosaikbilder an, die oft als offizielle Geschenke des Papstes an auslÃ¤ndische StaatsoberhÃ¤upter dienen. Besucher kÃ¶nnen hier Zeuge eines langsamen, meditativen Prozesses werden, bei dem winzige Glas- oder SteinstÃ¼cke zu einem unvergÃ¤nglichen Bild zusammengesetzt werden. Dieses Studio ist ein lebendiges Zeugnis fÃ¼r die WertschÃ¤tzung von Handwerkskunst und kÃ¼nstlerischer Perfektion im Vatikan.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Das Studio wurde im Jahr 1727 von Papst Benedikt XIII. offiziell gegrÃ¼ndet.", "Es verfÃ¼gt Ã¼ber eine Sammlung von mehr als 28.000 verschiedenen Mosaikfarben.", "Die kleinsten verwendeten Mosaiksteinchen sind weniger als einen Millimeter groÃŸ.", "Ein einziges Mosaikbild kann mehrere Monate bis Jahre Arbeit in Anspruch nehmen.", "Die Werkstatt befindet sich in einem GebÃ¤ude hinter dem Petersdom.", "Das Studio ist fÃ¼r die Erhaltung von Ã¼ber 10.000 Quadratmetern MosaikflÃ¤che im Petersdom zustÃ¤ndig.", "Es werden auch private AuftrÃ¤ge fÃ¼r Sammler weltweit ausgefÃ¼hrt."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Eine 1727 gegrÃ¼ndete Werkstatt, die fÃ¼r die Restaurierung der Mosaike des Vatikans und die Herstellung neuer Mosaikkunstwerke verantwortlich ist.',
      hu: 'Egy 1727-ben alapÃ­tott mÅ±hely, amely a vatikÃ¡ni mozaikok restaurÃ¡lÃ¡sÃ¡Ã©rt Ã©s Ãºj mozaikmÅ±vÃ©szeti alkotÃ¡sok kÃ©szÃ­tÃ©sÃ©Ã©rt felelÅ‘s.',
      ro: 'Un atelier fondat Ã®n 1727, responsabil pentru restaurarea mozaicurilor Vaticanului È™i crearea de noi opere de artÄƒ mozaicatÄƒ.',
      en: "A workshop founded in 1727, responsible for restoring the Vatican's mosaics and creating new mosaic artworks."
  },
    facts: {
      de: ['Stellt Mosaike als Geschenke fÃ¼r Staats- und Regierungschefs her', 'Verwendet eine einzigartige Technik mit winzigen "Smalti"-StÃ¼cken', 'Befindet sich in der NÃ¤he des Petersdoms'],
      hu: ['ÃllamfÅ‘knek szÃ¡nt ajÃ¡ndÃ©kmozaikokat kÃ©szÃ­t', 'Egyedi technikÃ¡t hasznÃ¡l aprÃ³ "smalti" darabokkal', 'A Szent PÃ©ter-bazilika kÃ¶zelÃ©ben talÃ¡lhatÃ³'],
      ro: ['Produce mozaicuri ca daruri pentru È™efii de stat', 'FoloseÈ™te o tehnicÄƒ unicÄƒ cu piese minuscule de "smalti"', 'Situat lÃ¢ngÄƒ Bazilica Sf. Petru'],
      en: ['Creates mosaics as gifts for heads of state', 'Uses a unique technique with tiny "smalti" pieces', 'Located near St. Peter\'s Basilica']
  },
    descriptionAdvanced: {
      de: "Das Vatikanische Mosaikstudio ist eine weltweit einzigartige Werkstatt, in der die Jahrhunderte alte Tradition der Mosaikkunst auf hÃ¶chstem Niveau bewahrt wird. Seit seiner GrÃ¼ndung im 18. Jahrhundert ist das Studio fÃ¼r die Instandhaltung der prachtvollen Mosaike im Petersdom verantwortlich. Die spezialisierten KÃ¼nstler, bekannt als 'Mosaizisten', verwenden eine beeindruckende Palette von Ã¼ber 28.000 verschiedenen FarbtÃ¶nen, um Meisterwerke von unglaublicher Detailtiefe zu schaffen. Neben Restaurierungsarbeiten fertigt das Studio auch exklusive Mosaikbilder an, die oft als offizielle Geschenke des Papstes an auslÃ¤ndische StaatsoberhÃ¤upter dienen. Besucher kÃ¶nnen hier Zeuge eines langsamen, meditativen Prozesses werden, bei dem winzige Glas- oder SteinstÃ¼cke zu einem unvergÃ¤nglichen Bild zusammengesetzt werden. Dieses Studio ist ein lebendiges Zeugnis fÃ¼r die WertschÃ¤tzung von Handwerkskunst und kÃ¼nstlerischer Perfektion im Vatikan.",
      hu: "A VatikÃ¡ni MozaikstÃºdiÃ³ egy vilÃ¡gszerte egyedÃ¼lÃ¡llÃ³ mÅ±hely, amelyben Ã©vszÃ¡zados hagyomÃ¡nyokat Å‘riznek a legmagasabb szinten. A 18. szÃ¡zadi alapÃ­tÃ¡sa Ã³ta a stÃºdiÃ³ felelÅ‘s a Szent PÃ©ter-bazilika csodÃ¡latos mozaikjainak karbantartÃ¡sÃ¡Ã©rt. A speciÃ¡lis mÅ±vÃ©szek, akiket 'mozaikmÅ±vÃ©szeknek' neveznek, tÃ¶bb mint 28 000 kÃ¼lÃ¶nbÃ¶zÅ‘ szÃ­nÃ¡rnyalatot hasznÃ¡lnak a hihetetlen rÃ©szletgazdagsÃ¡gÃº remekmÅ±vek lÃ©trehozÃ¡sÃ¡hoz. A restaurÃ¡lÃ¡s mellett exkluzÃ­v mozaikkÃ©peket is kÃ©szÃ­tenek, amelyeket gyakran a pÃ¡pa hivatalos ajÃ¡ndÃ©kakÃ©nt adnak Ã¡t kÃ¼lfÃ¶ldi Ã¡llamfÅ‘knek. A lÃ¡togatÃ³k tanÃºi lehetnek a lassÃº, meditatÃ­v folyamatnak, amelyben aprÃ³ Ã¼veg- vagy kÅ‘darabokat raknak Ã¶ssze mÃºlhatatlan kÃ©ppÃ©. Ez a stÃºdiÃ³ a kÃ©zmÅ±vessÃ©g Ã©s a mÅ±vÃ©szi tÃ¶kÃ©letessÃ©g megbecsÃ¼lÃ©sÃ©nek Ã©lÅ‘ tanÃºbizonysÃ¡ga a VatikÃ¡nban.",
      ro: "Studioul de Mozaic al Vaticanului este un atelier unic Ã®n lume, Ã®n care tradiÈ›ia secularÄƒ a artei mozaicului este pÄƒstratÄƒ la cel mai Ã®nalt nivel. ÃŽncÄƒ de la Ã®nfiinÈ›area sa Ã®n secolul al XVIII-lea, studioul este responsabil pentru Ã®ntreÈ›inerea mozaicurilor magnifice din Bazilica SfÃ¢ntul Petru. ArtiÈ™tii specializaÈ›i, cunoscuÈ›i sub numele de 'mozaicari', utilizeazÄƒ o paletÄƒ impresionantÄƒ de peste 28.000 de nuanÈ›e diferite pentru a crea capodopere de o profunzime detaliatÄƒ incredibilÄƒ. Pe lÃ¢ngÄƒ lucrÄƒrile de restaurare, studioul produce È™i imagini mozaicate exclusive, care servesc adesea drept cadouri oficiale ale Papei pentru È™efii de stat strÄƒini. Vizitatorii pot asista aici la un proces lent È™i meditativ, Ã®n care bucÄƒÈ›i minuscule de sticlÄƒ sau piatrÄƒ sunt asamblate pentru a crea o imagine eternÄƒ. Acest studio este o mÄƒrturie vie a aprecierii mÄƒiestriei È™i perfecÈ›iunii artistice Ã®n Vatican.",
      en: "The Vatican Mosaic Studio is a world-unique workshop where the centuries-old tradition of mosaic art is preserved at the highest level. Since its founding in the 18th century, the studio has been responsible for maintaining the magnificent mosaics in St. Peter's Basilica. The specialized artists, known as 'mosaicists', use an impressive palette of over 28,000 different color shades to create masterpieces of incredible detail. In addition to restoration work, the studio also crafts exclusive mosaic portraits, which often serve as official gifts from the Pope to foreign heads of state. Visitors can witness a slow, meditative process in which tiny pieces of glass or stone are meticulously assembled to create an enduring image. This studio is a living testament to the Vatican's appreciation for craftsmanship and artistic perfection. Art History K8 â€” Mosaic techniques and tradition."
    },
    factsAdvanced: {
      de: [
        "Das Studio wurde im Jahr 1727 von Papst Benedikt XIII. offiziell gegrÃ¼ndet.",
        "Es verfÃ¼gt Ã¼ber eine Sammlung von mehr als 28.000 verschiedenen Mosaikfarben.",
        "Die kleinsten verwendeten Mosaiksteinchen sind weniger als einen Millimeter groÃŸ.",
        "Ein einziges Mosaikbild kann mehrere Monate bis Jahre Arbeit in Anspruch nehmen.",
        "Die Werkstatt befindet sich in einem GebÃ¤ude hinter dem Petersdom.",
        "Das Studio ist fÃ¼r die Erhaltung von Ã¼ber 10.000 Quadratmetern MosaikflÃ¤che im Petersdom zustÃ¤ndig.",
        "Es werden auch private AuftrÃ¤ge fÃ¼r Sammler weltweit ausgefÃ¼hrt."
      ],
      hu: [
        "A stÃºdiÃ³t 1727-ben alapÃ­totta hivatalosan XIII. Benedek pÃ¡pa.",
        "TÃ¶bb mint 28 000 kÃ¼lÃ¶nbÃ¶zÅ‘ mozaikszÃ­n-gyÅ±jtemÃ©nnyel rendelkezik.",
        "A legkisebb hasznÃ¡lt mozaikdarabkÃ¡k kevesebb mint egy millimÃ©teresek.",
        "Egyetlen mozaikkÃ©p tÃ¶bb hÃ³napos vagy Ã©ves munkÃ¡t is igÃ©nyelhet.",
        "A mÅ±hely a Szent PÃ©ter-bazilika mÃ¶gÃ¶tti Ã©pÃ¼letben talÃ¡lhatÃ³.",
        "A stÃºdiÃ³ felelÅ‘s a Szent PÃ©ter-bazilika tÃ¶bb mint 10 000 nÃ©gyzetmÃ©ternyi mozaikfelÃ¼letÃ©nek megÅ‘rzÃ©sÃ©Ã©rt.",
        "GyÅ±jtÅ‘k szÃ¡mÃ¡ra magÃ¡nmegrendelÃ©seket is teljesÃ­tenek vilÃ¡gszerte."
      ],
      ro: [
        "Studioul a fost fondat oficial Ã®n anul 1727 de Papa Benedict al XIII-lea.",
        "Dispune de o colecÈ›ie de peste 28.000 de culori diferite de mozaic.",
        "Cele mai mici piese de mozaic utilizate au dimensiuni mai mici de un milimetru.",
        "O singurÄƒ imagine Ã®n mozaic poate necesita luni sau ani de muncÄƒ.",
        "Atelierul este situat Ã®ntr-o clÄƒdire din spatele Bazilicii SfÃ¢ntul Petru.",
        "Studioul este responsabil pentru conservarea a peste 10.000 de metri pÄƒtraÈ›i de mozaic Ã®n Bazilica SfÃ¢ntul Petru.",
        "Sunt executate È™i comenzi private pentru colecÈ›ionari din Ã®ntreaga lume."
      ],
      en: [
        "The studio was officially founded in 1727 by Pope Benedict XIII.",
        "It possesses a collection of more than 28,000 different mosaic colors.",
        "The smallest mosaic pieces used are less than one millimeter in size.",
        "A single mosaic image can take several months to years to complete.",
        "The workshop is located in a building behind St. Peter's Basilica.",
        "The studio is responsible for maintaining over 10,000 square meters of mosaic in St. Peter's Basilica.",
        "It also executes private commissions for collectors worldwide."
      ]
    },
  },
  {
    id: 'agriculture-vatican-vineyard-extra',
    type: 'agriculture',
    parent: 'VA',
    coords: [12.4515, 41.9048],
    name: {
      de: 'Weinberg des Vatikans',
      hu: 'VatikÃ¡ni SzÅ‘lÅ‘Ã¼ltetvÃ©ny',
      ro: 'Via Vaticanului',
      en: 'Vatican Vineyard',
  descriptionAdvanced: {
    de: "Der Weinberg des Vatikans ist ein symboltrÃ¤chtiger Ort innerhalb der Vatikanischen GÃ¤rten, der die tiefe biblische Verbindung zum Weinbau widerspiegelt. Dieser kleine, aber sorgfÃ¤ltig gepflegte Weinberg wurde als Zeichen der Freundschaft und Tradition angelegt. Er beherbergt ausgewÃ¤hlte Rebsorten, die unter der rÃ¶mischen Sonne gedeihen und eine kleine Menge an exklusivem Wein fÃ¼r zeremonielle Zwecke produzieren. Der Anbau erfolgt nach Ã¶kologischen GrundsÃ¤tzen und fÃ¼gt sich harmonisch in die vielfÃ¤ltige Flora der pÃ¤pstlichen GÃ¤rten ein. Der Weinberg erinnert an die Gleichnisse Jesu und die Bedeutung des Weins in der Liturgie. Obwohl er keine kommerzielle Bedeutung hat, ist er ein wichtiges Element der pÃ¤pstlichen Landwirtschaft und ein Ort der Ruhe, der die Verbundenheit der Kirche mit der SchÃ¶pfung und der bÃ¤uerlichen Tradition betont.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Der Weinberg wurde im Jahr 2014 als Geschenk aus Slowenien neu angelegt.", "Es werden hauptsÃ¤chlich Rebsorten wie 'Refosco' und 'Ribolla Gialla' angebaut.", "Die FlÃ¤che des Weinbergs betrÃ¤gt nur wenige hundert Quadratmeter.", "Die Bewirtschaftung erfolgt ohne den Einsatz chemischer Pestizide.", "Der produzierte Wein wird nicht verkauft, sondern fÃ¼r pÃ¤pstliche Geschenke genutzt.", "Die Reben stammen teilweise von historischen StÃ¶cken aus der Region Slowenien.", "Der Weinberg befindet sich in der NÃ¤he der Casina Pio IV."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Ein kleiner Weinberg in den Vatikanischen GÃ¤rten, der als Geschenk an den Papst gespendet wurde und symbolischen Wein produziert.',
      hu: 'A VatikÃ¡ni Kertekben talÃ¡lhatÃ³ kis szÅ‘lÅ‘Ã¼ltetvÃ©ny, amelyet ajÃ¡ndÃ©kba adomÃ¡nyoztak a pÃ¡pÃ¡nak, Ã©s szimbolikus bort termel.',
      ro: 'O micÄƒ vie Ã®n GrÄƒdinile Vaticane, donatÄƒ ca un cadou Papei, care produce vin simbolic.',
      en: 'A small vineyard within the Vatican Gardens, donated as a gift to the Pope, which produces symbolic wine.'
  },
    facts: {
      de: ["Ein Geschenk aus Slowenien", "Produziert eine begrenzte Anzahl von Flaschen", "Ein Symbol fÃ¼r Freundschaft und Natur"],
      hu: ["SzlovÃ©nia ajÃ¡ndÃ©ka", "KorlÃ¡tozott szÃ¡mÃº palackot termel", "A barÃ¡tsÃ¡g Ã©s a termÃ©szet szimbÃ³luma"],
      ro: ["Un cadou din Slovenia", "Produce un numÄƒr limitat de sticle", "Un simbol al prieteniei È™i al naturii"],
      en: ["A gift from Slovenia", "Produces a limited number of bottles", "A symbol of friendship and nature"]
  },
    descriptionAdvanced: {
      de: "Der Weinberg des Vatikans ist ein symboltrÃ¤chtiger Ort innerhalb der Vatikanischen GÃ¤rten, der die tiefe biblische Verbindung zum Weinbau widerspiegelt. Dieser kleine, aber sorgfÃ¤ltig gepflegte Weinberg wurde als Zeichen der Freundschaft und Tradition angelegt. Er beherbergt ausgewÃ¤hlte Rebsorten, die unter der rÃ¶mischen Sonne gedeihen und eine kleine Menge an exklusivem Wein fÃ¼r zeremonielle Zwecke produzieren. Der Anbau erfolgt nach Ã¶kologischen GrundsÃ¤tzen und fÃ¼gt sich harmonisch in die vielfÃ¤ltige Flora der pÃ¤pstlichen GÃ¤rten ein. Der Weinberg erinnert an die Gleichnisse Jesu und die Bedeutung des Weins in der Liturgie. Obwohl er keine kommerzielle Bedeutung hat, ist er ein wichtiges Element der pÃ¤pstlichen Landwirtschaft und ein Ort der Ruhe, der die Verbundenheit der Kirche mit der SchÃ¶pfung und der bÃ¤uerlichen Tradition betont.",
      hu: "A VatikÃ¡ni SzÅ‘lÅ‘Ã¼ltetvÃ©ny egy jelkÃ©pes hely a VatikÃ¡ni Kertekben, amely tÃ¼krÃ¶zi a szÅ‘lÅ‘termesztÃ©s mÃ©ly bibliai kapcsolatÃ¡t. Ezt a kicsi, de gondosan karbantartott szÅ‘lÅ‘Ã¼ltetvÃ©nyt a barÃ¡tsÃ¡g Ã©s a hagyomÃ¡ny jelekÃ©nt alakÃ­tottÃ¡k ki. VÃ¡logatott szÅ‘lÅ‘fajtÃ¡knak ad otthont, amelyek a rÃ³mai napfÃ©ny alatt Ã©rlelÅ‘dnek, Ã©s kis mennyisÃ©gÅ± exkluzÃ­v bort termelnek szertartÃ¡si cÃ©lokra. A termesztÃ©s Ã¶kolÃ³giai elvek alapjÃ¡n tÃ¶rtÃ©nik, Ã©s harmonikusan illeszkedik a pÃ¡pai kertek vÃ¡ltozatos nÃ¶vÃ©nyvilÃ¡gÃ¡ba. A szÅ‘lÅ‘Ã¼ltetvÃ©ny JÃ©zus pÃ©ldÃ¡zataira Ã©s a bornak a liturgiÃ¡ban betÃ¶ltÃ¶tt szerepÃ©re emlÃ©keztet. BÃ¡r kereskedelmi jelentÅ‘sÃ©ge nincs, a pÃ¡pai mezÅ‘gazdasÃ¡g fontos eleme, Ã©s a nyugalom helyszÃ­ne, amely hangsÃºlyozza az egyhÃ¡z kapcsolatÃ¡t a teremtÃ©ssel Ã©s a mezÅ‘gazdasÃ¡gi hagyomÃ¡nyokkal.",
      ro: "Via Vaticanului este un loc simbolic Ã®n cadrul GrÄƒdinilor Vaticane, care reflectÄƒ profunda legÄƒturÄƒ biblicÄƒ cu viticultura. AceastÄƒ vie micÄƒ, dar Ã®ngrijitÄƒ cu atenÈ›ie, a fost amenajatÄƒ ca un semn al prieteniei È™i tradiÈ›iei. GÄƒzduieÈ™te soiuri de viÈ›Äƒ de vie selectate, care prosperÄƒ sub soarele roman È™i produc o cantitate micÄƒ de vin exclusiv pentru scopuri ceremoniale. Cultivarea se realizeazÄƒ conform principiilor ecologice È™i se integreazÄƒ armonios Ã®n flora diversÄƒ a grÄƒdinilor papale. Via aminteÈ™te de pildele lui Isus È™i de importanÈ›a vinului Ã®n liturgie. DeÈ™i nu are o semnificaÈ›ie comercialÄƒ, este un element important al agriculturii papale È™i un loc de liniÈ™te care subliniazÄƒ legÄƒtura Bisericii cu creaÈ›ia È™i tradiÈ›ia agricolÄƒ.",
      en: "The Vatican Vineyard is a symbolic site within the Vatican Gardens, reflecting the deep biblical connection to viticulture. This small but meticulously maintained vineyard was established as a sign of friendship and tradition. It hosts selected grape varieties that thrive under the Roman sun, producing a small quantity of exclusive wine for ceremonial purposes. Cultivation is carried out according to ecological principles, harmoniously blending into the diverse flora of the papal gardens. The vineyard recalls the parables of Jesus and the significance of wine in the liturgy. While it holds no commercial importance, it serves as a vital element of papal agriculture and a place of tranquility that emphasizes the Church's connection to creation and agrarian tradition. Geography K7 â€” Agriculture and symbolic sites."
    },
    factsAdvanced: {
      de: [
        "Der Weinberg wurde im Jahr 2014 als Geschenk aus Slowenien neu angelegt.",
        "Es werden hauptsÃ¤chlich Rebsorten wie 'Refosco' und 'Ribolla Gialla' angebaut.",
        "Die FlÃ¤che des Weinbergs betrÃ¤gt nur wenige hundert Quadratmeter.",
        "Die Bewirtschaftung erfolgt ohne den Einsatz chemischer Pestizide.",
        "Der produzierte Wein wird nicht verkauft, sondern fÃ¼r pÃ¤pstliche Geschenke genutzt.",
        "Die Reben stammen teilweise von historischen StÃ¶cken aus der Region Slowenien.",
        "Der Weinberg befindet sich in der NÃ¤he der Casina Pio IV."
      ],
      hu: [
        "A szÅ‘lÅ‘Ã¼ltetvÃ©nyt 2014-ben alakÃ­tottÃ¡k ki Ãºjra SzlovÃ©nia ajÃ¡ndÃ©kakÃ©nt.",
        "FÅ‘leg olyan fajtÃ¡kat termesztenek, mint a 'Refosco' Ã©s a 'Ribolla Gialla'.",
        "A szÅ‘lÅ‘Ã¼ltetvÃ©ny terÃ¼lete mindÃ¶ssze nÃ©hÃ¡ny szÃ¡z nÃ©gyzetmÃ©ter.",
        "A gazdÃ¡lkodÃ¡s kÃ©miai nÃ¶vÃ©nyvÃ©dÅ‘szerek hasznÃ¡lata nÃ©lkÃ¼l tÃ¶rtÃ©nik.",
        "A megtermelt bort nem Ã©rtÃ©kesÃ­tik, pÃ¡pai ajÃ¡ndÃ©kkÃ©nt hasznÃ¡ljÃ¡k.",
        "A szÅ‘lÅ‘tÅ‘kÃ©k rÃ©szben SzlovÃ©nia tÃ¶rtÃ©nelmi tÅ‘kÃ©irÅ‘l szÃ¡rmaznak.",
        "A szÅ‘lÅ‘Ã¼ltetvÃ©ny a Casina Pio IV kÃ¶zelÃ©ben talÃ¡lhatÃ³."
      ],
      ro: [
        "Via a fost reamenajatÄƒ Ã®n 2014 ca un cadou din partea Sloveniei.",
        "Sunt cultivate Ã®n principal soiuri de viÈ›Äƒ de vie precum 'Refosco' È™i 'Ribolla Gialla'.",
        "SuprafaÈ›a viei este de doar cÃ¢teva sute de metri pÄƒtraÈ›i.",
        "Cultivarea se realizeazÄƒ fÄƒrÄƒ utilizarea pesticidelor chimice.",
        "Vinul produs nu este comercializat, ci utilizat pentru cadouri papale.",
        "ViÈ›a de vie provine parÈ›ial din soiuri istorice din regiunea Sloveniei.",
        "Via este situatÄƒ Ã®n apropierea Casinei Pio IV."
      ],
      en: [
        "The vineyard was re-established in 2014 as a gift from Slovenia.",
        "Main grape varieties grown include 'Refosco' and 'Ribolla Gialla'.",
        "The area of the vineyard is only a few hundred square meters.",
        "Cultivation is conducted without the use of chemical pesticides.",
        "The wine produced is not sold but used for papal gifts.",
        "The vines are partially sourced from historical stocks from the Slovenian region.",
        "The vineyard is located near the Casina Pio IV."
      ]
    },
  },
  {
    id: 'agriculture-vatican-olive-grove-extra',
    type: 'agriculture',
    parent: 'VA',
    coords: [12.4490, 41.9030],
    name: {
      de: 'Olivenhain des Vatikans',
      hu: 'VatikÃ¡ni Olajfaliget',
      ro: 'Livada de mÄƒslini a Vaticanului',
      en: 'Vatican Olive Grove',
  descriptionAdvanced: {
    de: "Der Olivenhain des Vatikans ist ein heiliger Hain inmitten der Vatikanischen GÃ¤rten, dessen Wurzeln tief in der Geschichte und SpiritualitÃ¤t der katholischen Kirche liegen. Die zum Teil jahrhundertealten OlivenbÃ¤ume sind nicht nur Schattenspender, sondern Symbole fÃ¼r Frieden, BestÃ¤ndigkeit und gÃ¶ttlichen Segen. Aus den geernteten Oliven wird ein hochwertiges Ã–l gewonnen, das eine zentrale Rolle in der Liturgie spielt, insbesondere bei der Weihe der heiligen Ã–le in der Karwoche. Die Pflege der BÃ¤ume erfolgt mit grÃ¶ÃŸter Sorgfalt, wobei Tradition und moderne Baumpflege Hand in Hand gehen. Bei SpaziergÃ¤ngen durch die GÃ¤rten vermittelt der Olivenhain eine AtmosphÃ¤re der Zeitlosigkeit und erinnert an den Garten Gethsemane. Er ist ein lebendiges Denkmal fÃ¼r die landwirtschaftliche Tradition, die der Vatikan auch auf kleinstem Raum mit Stolz bewahrt.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Einige der OlivenbÃ¤ume im Vatikan sind Ã¼ber 500 Jahre alt.", "Das gewonnene Ã–l wird jÃ¤hrlich wÃ¤hrend der Chrisam-Messe geweiht.", "Es gibt insgesamt etwa 30 bis 40 produktive OlivenbÃ¤ume in den GÃ¤rten.", "ZusÃ¤tzliche BÃ¤ume wurden oft als Friedensgeschenke von Mittelmeerstaaten gespendet.", "Die Ernte erfolgt traditionell per Hand im SpÃ¤therbst.", "Das Ã–l wird auch in kleinen Flaschen als besonderes pÃ¤pstliches Geschenk verwendet.", "Die BÃ¤ume werden regelmÃ¤ÃŸig von spezialisierten vatikanischen GÃ¤rtnern beschnitten."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Ein Bereich in den Vatikanischen GÃ¤rten mit alten OlivenbÃ¤umen, die Ã–l fÃ¼r liturgische Zwecke und als Geschenke produzieren.',
      hu: 'A VatikÃ¡ni Kertek egy terÃ¼lete Å‘si olajfÃ¡kkal, amelyek olajat termelnek liturgikus cÃ©lokra Ã©s ajÃ¡ndÃ©kkÃ©nt.',
      ro: 'O zonÄƒ Ã®n GrÄƒdinile Vaticane cu mÄƒslini vechi, care produc ulei pentru scopuri liturgice È™i cadouri.',
      en: 'An area in the Vatican Gardens with ancient olive trees, producing oil for liturgical purposes and as gifts.'
  },
    facts: {
      de: ["Einige BÃ¤ume sind Jahrhunderte alt", "Das Ã–l wird in der Chrisam-Messe verwendet", "Einige BÃ¤ume wurden von besuchenden WÃ¼rdentrÃ¤gern gespendet"],
      hu: ["NÃ©hÃ¡ny fa tÃ¶bb szÃ¡z Ã©ves", "Az olajat a krizmaszentelÃ©si misÃ©n hasznÃ¡ljÃ¡k", "NÃ©hÃ¡ny fÃ¡t lÃ¡togatÃ³ mÃ©ltÃ³sÃ¡gok adomÃ¡nyoztak"],
      ro: ["Unii copaci au sute de ani", "Uleiul este folosit la Liturghia Crismei", "Unii copaci au fost donaÈ›i de demnitari Ã®n vizitÄƒ"],
      en: ["Some trees are centuries old", "The oil is used in the Chrism Mass", "Some trees were donated by visiting dignitaries"]
  },
    descriptionAdvanced: {
      de: "Der Olivenhain des Vatikans ist ein heiliger Hain inmitten der Vatikanischen GÃ¤rten, dessen Wurzeln tief in der Geschichte und SpiritualitÃ¤t der katholischen Kirche liegen. Die zum Teil jahrhundertealten OlivenbÃ¤ume sind nicht nur Schattenspender, sondern Symbole fÃ¼r Frieden, BestÃ¤ndigkeit und gÃ¶ttlichen Segen. Aus den geernteten Oliven wird ein hochwertiges Ã–l gewonnen, das eine zentrale Rolle in der Liturgie spielt, insbesondere bei der Weihe der heiligen Ã–le in der Karwoche. Die Pflege der BÃ¤ume erfolgt mit grÃ¶ÃŸter Sorgfalt, wobei Tradition und moderne Baumpflege Hand in Hand gehen. Bei SpaziergÃ¤ngen durch die GÃ¤rten vermittelt der Olivenhain eine AtmosphÃ¤re der Zeitlosigkeit und erinnert an den Garten Gethsemane. Er ist ein lebendiges Denkmal fÃ¼r die landwirtschaftliche Tradition, die der Vatikan auch auf kleinstem Raum mit Stolz bewahrt.",
      hu: "A VatikÃ¡ni Olajfaliget egy szent liget a VatikÃ¡ni Kertek kÃ¶zepÃ©n, amelynek gyÃ¶kerei mÃ©lyen a katolikus egyhÃ¡z tÃ¶rtÃ©nelmÃ©be Ã©s spiritualitÃ¡sÃ¡ba nyÃºlnak. A rÃ©szben Ã©vszÃ¡zados olajfÃ¡k nemcsak Ã¡rnyÃ©kot adnak, hanem a bÃ©ke, a Ã¡llhatatossÃ¡g Ã©s az isteni Ã¡ldÃ¡s szimbÃ³lumai is. A betakarÃ­tott olajbogyÃ³kbÃ³l kivÃ¡lÃ³ minÅ‘sÃ©gÅ± olajat nyernek, amely kÃ¶zponti szerepet jÃ¡tszik a liturgiÃ¡ban, kÃ¼lÃ¶nÃ¶sen a nagyhÃ©ti szent olajok felszentelÃ©sekor. A fÃ¡k Ã¡polÃ¡sa a legnagyobb gondossÃ¡ggal tÃ¶rtÃ©nik, a hagyomÃ¡ny Ã©s a modern faÃ¡polÃ¡s kÃ©z a kÃ©zben jÃ¡r. A kertekben tett sÃ©tÃ¡k sorÃ¡n az olajfaliget az idÅ‘tlensÃ©g lÃ©gkÃ¶rÃ©t Ã¡rasztja, Ã©s a GecsemÃ¡nÃ©-kertre emlÃ©keztet. Ã‰lÅ‘ emlÃ©kmÅ± a mezÅ‘gazdasÃ¡gi hagyomÃ¡nyoknak, amelyet a VatikÃ¡n bÃ¼szkÃ©n Å‘riz mÃ©g a legkisebb helyen is.",
      ro: "Livada de mÄƒslini a Vaticanului este o dumbravÄƒ sacrÄƒ Ã®n mijlocul GrÄƒdinilor Vaticane, ale cÄƒrei rÄƒdÄƒcini se Ã®ntind adÃ¢nc Ã®n istoria È™i spiritualitatea Bisericii Catolice. MÄƒslinii, unii de vÃ¢rste seculare, nu oferÄƒ doar umbrÄƒ, ci sunt simboluri ale pÄƒcii, stabilitÄƒÈ›ii È™i binecuvÃ¢ntÄƒrii divine. Din mÄƒslinele recoltate se obÈ›ine un ulei de Ã®naltÄƒ calitate, care joacÄƒ un rol central Ã®n liturgie, Ã®n special la sfinÈ›irea uleiurilor sfinte Ã®n SÄƒptÄƒmÃ¢na Mare. ÃŽngrijirea copacilor se face cu cea mai mare atenÈ›ie, tradiÈ›ia È™i Ã®ngrijirea modernÄƒ a arborilor mergÃ¢nd mÃ¢nÄƒ Ã®n mÃ¢nÄƒ. La plimbÄƒrile prin grÄƒdini, livada de mÄƒslini transmite o atmosferÄƒ de atemporalitate È™i aminteÈ™te de GrÄƒdina Ghetsimani. Este un monument viu al tradiÈ›iei agricole pe care Vaticanul o pÄƒstreazÄƒ cu mÃ¢ndrie chiar È™i pe cel mai mic spaÈ›iu.",
      en: "The Vatican Olive Grove is a sacred grove within the Vatican Gardens, with roots deeply embedded in the history and spirituality of the Catholic Church. Some of the olive trees are centuries old, serving not only as providers of shade but as enduring symbols of peace, steadfastness, and divine blessing. The olives harvested are processed into a high-quality oil that plays a central role in liturgy, particularly during the blessing of the holy oils in Holy Week. The care of the trees is conducted with the utmost precision, blending traditional and modern arboriculture. Walking through the gardens, the olive grove conveys an atmosphere of timelessness and evokes the Garden of Gethsemane. It stands as a living monument to the agricultural heritage that the Vatican proudly preserves, even within its limited space. Religion K3 â€” Biblical symbols and traditions."
    },
    factsAdvanced: {
      de: [
        "Einige der OlivenbÃ¤ume im Vatikan sind Ã¼ber 500 Jahre alt.",
        "Das gewonnene Ã–l wird jÃ¤hrlich wÃ¤hrend der Chrisam-Messe geweiht.",
        "Es gibt insgesamt etwa 30 bis 40 produktive OlivenbÃ¤ume in den GÃ¤rten.",
        "ZusÃ¤tzliche BÃ¤ume wurden oft als Friedensgeschenke von Mittelmeerstaaten gespendet.",
        "Die Ernte erfolgt traditionell per Hand im SpÃ¤therbst.",
        "Das Ã–l wird auch in kleinen Flaschen als besonderes pÃ¤pstliches Geschenk verwendet.",
        "Die BÃ¤ume werden regelmÃ¤ÃŸig von spezialisierten vatikanischen GÃ¤rtnern beschnitten."
      ],
      hu: [
        "A VatikÃ¡nban lÃ©vÅ‘ olajfÃ¡k nÃ©melyike tÃ¶bb mint 500 Ã©ves.",
        "A kinyert olajat minden Ã©vben felszentelik a krizmaszentelÃ©si mise sorÃ¡n.",
        "Ã–sszesen kÃ¶rÃ¼lbelÃ¼l 30-40 termÅ‘ olajfa talÃ¡lhatÃ³ a kertekben.",
        "TovÃ¡bbi fÃ¡kat gyakran a FÃ¶ldkÃ¶zi-tengeri Ã¡llamok adomÃ¡nyoztak bÃ©keajÃ¡ndÃ©kkÃ©nt.",
        "A betakarÃ­tÃ¡s hagyomÃ¡nyosan kÃ©zzel tÃ¶rtÃ©nik kÃ©sÅ‘ Å‘sszel.",
        "Az olajat kis palackokban is hasznÃ¡ljÃ¡k kÃ¼lÃ¶nleges pÃ¡pai ajÃ¡ndÃ©kkÃ©nt.",
        "A fÃ¡kat rendszeresen metszik a speciÃ¡lisan kÃ©pzett vatikÃ¡ni kertÃ©szek."
      ],
      ro: [
        "Unii dintre mÄƒslinii din Vatican au peste 500 de ani.",
        "Uleiul obÈ›inut este sfinÈ›it anual Ã®n timpul Liturghiei Crismei.",
        "ExistÄƒ un total de aproximativ 30 pÃ¢nÄƒ la 40 de mÄƒslini productivi Ã®n grÄƒdini.",
        "Copaci suplimentari au fost adesea donaÈ›i ca daruri de pace de cÄƒtre statele mediteraneene.",
        "Recoltarea se face tradiÈ›ional manual, la sfÃ¢rÈ™itul toamnei.",
        "Uleiul este folosit È™i Ã®n sticle mici ca un cadou papal special.",
        "Copacii sunt tÄƒiaÈ›i regulat de grÄƒdinari specializaÈ›i ai Vaticanului."
      ],
      en: [
        "Some of the olive trees in the Vatican are over 500 years old.",
        "The oil obtained is blessed annually during the Chrism Mass.",
        "There are a total of about 30 to 40 productive olive trees in the gardens.",
        "Additional trees were often donated as peace gifts by Mediterranean states.",
        "Harvesting is traditionally done by hand in late autumn.",
        "The oil is also used in small bottles as a special papal gift.",
        "The trees are regularly pruned by specialized Vatican gardeners."
      ]
    },
  },
  {
    id: 'kid-landmark-swiss-guard-barracks-extra',
    type: 'kid-landmark',
    parent: 'VA',
    coords: [12.4575, 41.9035],
    name: {
      de: 'Kaserne der Schweizergarde',
      hu: 'SvÃ¡jci GÃ¡rda LaktanyÃ¡ja',
      ro: 'Cazarma GÄƒrzii ElveÈ›iene',
      en: 'Swiss Guard Barracks',
  descriptionAdvanced: {
    de: "Die Kaserne der Schweizergarde ist ein faszinierender Ort fÃ¼r Kinder und Familien, die die lebendige Geschichte des Vatikans hautnah erleben mÃ¶chten. Hier wohnen die mutigen MÃ¤nner, die in ihren berÃ¼hmten gelb-rot-blauen Uniformen den Papst beschÃ¼tzen. Kinder sind oft begeistert von der Disziplin, den glÃ¤nzenden Hellebarden und der prachtvollen Erscheinung der Gardisten. Die Kaserne selbst bietet Einblicke in den Alltag der kleinsten Armee der Welt, von den TrainingsrÃ¤umen bis hin zur eigenen Kantine. Die Geschichte der Garde, die bis ins Jahr 1506 zurÃ¼ckreicht, wird hier lebendig gehalten. Ein Besuch in der NÃ¤he der Kaserne lÃ¤sst die Herzen kleiner Entdecker hÃ¶her schlagen, wenn sie den Wachwechsel beobachten oder einen echten Gardisten aus nÃ¤chster NÃ¤he sehen. Es ist ein Ort, der Heldentum, Tradition und farbenfrohe Renaissance-Kultur auf kindgerechte Weise verbindet.",
    hu: "",
    ro: "",
    en: ""
  },
  factsAdvanced: {
    de: ["Die Schweizergarde wurde am 22. Januar 1506 gegrÃ¼ndet.", "Die Truppe besteht aktuell aus etwa 135 Soldaten.", "Die Uniform wiegt etwa 4 Kilogramm und besteht aus 154 Einzelteilen.", "Rekruten mÃ¼ssen zwischen 19 und 30 Jahre alt sein.", "Die MindestgrÃ¶ÃŸe fÃ¼r einen Gardisten betrÃ¤gt 1,74 Meter.", "Jeder Gardist muss unverheiratet sein (auÃŸer Offiziere und langjÃ¤hrige Mitglieder).", "Die Ausbildung umfasst modernes Sicherheitstraining und traditionelles Exerzieren.", "Das Quartier der Garde befindet sich direkt hinter der Porta Sant'Anna."],
    hu: [],
    ro: [],
    en: []
  },
},
    description: {
      de: 'Die Heimat der PÃ¤pstlichen Schweizergarde. Ihre farbenfrohen Renaissance-Uniformen faszinieren Besucher jeden Alters.',
      hu: 'A PÃ¡pai SvÃ¡jci GÃ¡rda otthona. SzÃ­nes reneszÃ¡nsz egyenruhÃ¡juk minden korosztÃ¡lyt lenyÅ±gÃ¶z.',
      ro: 'ReÈ™edinÈ›a GÄƒrzii ElveÈ›iene Pontificale. Uniformele lor colorate din perioada RenaÈ™terii fascineazÄƒ vizitatorii de toate vÃ¢rstele.',
      en: 'The home of the Pontifical Swiss Guard. Their colorful Renaissance-era uniforms are fascinating to visitors of all ages.'
  },
    facts: {
      de: ["Die kleinste und Ã¤lteste stehende Armee der Welt", "Die Soldaten mÃ¼ssen katholische Schweizer BÃ¼rger sein", "Die Uniform wurde mÃ¶glicherweise von Michelangelo entworfen"],
      hu: ["A vilÃ¡g legkisebb Ã©s legrÃ©gebbi Ã¡llandÃ³ hadserege", "A katonÃ¡knak katolikus svÃ¡jci Ã¡llampolgÃ¡rnak kell lenniÃ¼k", "Az egyenruhÃ¡t talÃ¡n Michelangelo tervezte"],
      ro: ["Cea mai micÄƒ È™i mai veche armatÄƒ permanentÄƒ din lume", "SoldaÈ›ii trebuie sÄƒ fie cetÄƒÈ›eni elveÈ›ieni catolici", "Uniforma ar fi putut fi proiectatÄƒ de Michelangelo"],
      en: ["World's smallest and oldest standing army", "Soldiers must be Catholic Swiss citizens", "The uniform may have been designed by Michelangelo"]
  },
    descriptionAdvanced: {
      de: "Die Kaserne der Schweizergarde ist ein faszinierender Ort fÃ¼r Kinder und Familien, die die lebendige Geschichte des Vatikans hautnah erleben mÃ¶chten. Hier wohnen die mutigen MÃ¤nner, die in ihren berÃ¼hmten gelb-rot-blauen Uniformen den Papst beschÃ¼tzen. Kinder sind oft begeistert von der Disziplin, den glÃ¤nzenden Hellebarden und der prachtvollen Erscheinung der Gardisten. Die Kaserne selbst bietet Einblicke in den Alltag der kleinsten Armee der Welt, von den TrainingsrÃ¤umen bis hin zur eigenen Kantine. Die Geschichte der Garde, die bis ins Jahr 1506 zurÃ¼ckreicht, wird hier lebendig gehalten. Ein Besuch in der NÃ¤he der Kaserne lÃ¤sst die Herzen kleiner Entdecker hÃ¶her schlagen, wenn sie den Wachwechsel beobachten oder einen echten Gardisten aus nÃ¤chster NÃ¤he sehen. Es ist ein Ort, der Heldentum, Tradition und farbenfrohe Renaissance-Kultur auf kindgerechte Weise verbindet.",
      hu: "A SvÃ¡jci GÃ¡rda laktanyÃ¡ja lenyÅ±gÃ¶zÅ‘ helyszÃ­n a gyermekek Ã©s csalÃ¡dok szÃ¡mÃ¡ra, akik szeretnÃ©k testkÃ¶zelbÅ‘l Ã¡tÃ©lni a VatikÃ¡n Ã©lÅ‘ tÃ¶rtÃ©nelmÃ©t. Itt Ã©lnek azok a bÃ¡tor fÃ©rfiak, akik hÃ­res sÃ¡rga-vÃ¶rÃ¶s-kÃ©k egyenruhÃ¡jukban vÃ©dik a pÃ¡pÃ¡t. A gyermekeket gyakran lenyÅ±gÃ¶zi a fegyelem, a csillogÃ³ alabÃ¡rdok Ã©s a gÃ¡rdistÃ¡k pompÃ¡s megjelenÃ©se. Maga a laktanya betekintÃ©st nyÃºjt a vilÃ¡g legkisebb hadseregÃ©nek mindennapjaiba, az edzÅ‘termektÅ‘l a sajÃ¡t kantinig. A gÃ¡rda 1506-ig visszanyÃºlÃ³ tÃ¶rtÃ©nete itt elevenen Ã©l. A laktanya kÃ¶zelÃ©ben tett lÃ¡togatÃ¡s megdobogtatja a kis felfedezÅ‘k szÃ­vÃ©t, amikor figyelik az Å‘rsÃ©gvÃ¡ltÃ¡st vagy testkÃ¶zelbÅ‘l lÃ¡thatnak egy igazi gÃ¡rdistÃ¡t. Olyan hely ez, amely a hÅ‘siessÃ©get, a hagyomÃ¡nyt Ã©s a szÃ­nes reneszÃ¡nsz kultÃºrÃ¡t gyermekbarÃ¡t mÃ³don Ã¶tvÃ¶zi.",
      ro: "Cazarma GÄƒrzii ElveÈ›iene este un loc fascinant pentru copii È™i familii care doresc sÄƒ experimenteze Ã®ndeaproape istoria vie a Vaticanului. Aici locuiesc bÄƒrbaÈ›ii curajoÈ™i care protejeazÄƒ Papa Ã®n faimoasele lor uniforme galben-roÈ™u-albastru. Copiii sunt adesea Ã®ncÃ¢ntaÈ›i de disciplinÄƒ, de halebardele strÄƒlucitoare È™i de aspectul magnific al gÄƒrzilor. Cazarma Ã®nsÄƒÈ™i oferÄƒ o perspectivÄƒ asupra vieÈ›ii cotidiene a celei mai mici armate din lume, de la sÄƒlile de antrenament pÃ¢nÄƒ la cantina proprie. Istoria GÄƒrzii, care dateazÄƒ din 1506, este pÄƒstratÄƒ vie aici. O vizitÄƒ Ã®n apropierea cazarmei face inimile micilor exploratori sÄƒ batÄƒ mai tare atunci cÃ¢nd observÄƒ schimbarea gÄƒrzii sau vÄƒd un gardist adevÄƒrat de aproape. Este un loc care combinÄƒ eroismul, tradiÈ›ia È™i cultura coloratÄƒ a RenaÈ™terii Ã®ntr-un mod prietenos pentru copii.",
      en: "The Swiss Guard Barracks is a fascinating site for children and families who want to experience the living history of the Vatican up close. This is where the courageous men who protect the Pope in their famous yellow, red, and blue uniforms live. Children are often captivated by the discipline, the gleaming halberds, and the magnificent appearance of the guardsmen. The barracks themselves offer insights into the daily life of the world's smallest army, from the training rooms to their own canteen. The history of the Guard, dating back to 1506, is kept alive here. A visit near the barracks makes the hearts of young explorers race as they watch the changing of the guard or see a real guardsman from up close. It is a place that combines heroism, tradition, and colorful Renaissance culture in a child-friendly way. History K5 â€” Famous guards and uniforms."
    },
    factsAdvanced: {
      de: [
        "Die Schweizergarde wurde am 22. Januar 1506 gegrÃ¼ndet.",
        "Die Truppe besteht aktuell aus etwa 135 Soldaten.",
        "Die Uniform wiegt etwa 4 Kilogramm und besteht aus 154 Einzelteilen.",
        "Rekruten mÃ¼ssen zwischen 19 und 30 Jahre alt sein.",
        "Die MindestgrÃ¶ÃŸe fÃ¼r einen Gardisten betrÃ¤gt 1,74 Meter.",
        "Jeder Gardist muss unverheiratet sein (auÃŸer Offiziere und langjÃ¤hrige Mitglieder).",
        "Die Ausbildung umfasst modernes Sicherheitstraining und traditionelles Exerzieren.",
        "Das Quartier der Garde befindet sich direkt hinter der Porta Sant'Anna."
      ],
      hu: [
        "A SvÃ¡jci GÃ¡rdÃ¡t 1506. januÃ¡r 22-Ã©n alapÃ­tottÃ¡k.",
        "A csapat jelenleg kÃ¶rÃ¼lbelÃ¼l 135 katonÃ¡bÃ³l Ã¡ll.",
        "Az egyenruha kÃ¶rÃ¼lbelÃ¼l 4 kilogrammot nyom Ã©s 154 kÃ¼lÃ¶nÃ¡llÃ³ darabbÃ³l Ã¡ll.",
        "Az Ãºjoncoknak 19 Ã©s 30 Ã©v kÃ¶zÃ¶ttieknek kell lenniÃ¼k.",
        "A gÃ¡rdista minimÃ¡lis magassÃ¡ga 1,74 mÃ©ter.",
        "Minden gÃ¡rdistÃ¡nak nÅ‘tlennek kell lennie (kivÃ©ve a tiszteket Ã©s a rÃ©gÃ³ta szolgÃ¡lÃ³ tagokat).",
        "A kÃ©pzÃ©s magÃ¡ban foglalja a modern biztonsÃ¡gi kÃ©pzÃ©st Ã©s a hagyomÃ¡nyos gyakorlatozÃ¡st.",
        "A gÃ¡rda szÃ¡llÃ¡sa kÃ¶zvetlenÃ¼l a Porta Sant'Anna mÃ¶gÃ¶tt talÃ¡lhatÃ³."
      ],
      ro: [
        "Garda ElveÈ›ianÄƒ a fost fondatÄƒ pe 22 ianuarie 1506.",
        "Trupele sunt formate Ã®n prezent din aproximativ 135 de soldaÈ›i.",
        "Uniforma cÃ¢ntÄƒreÈ™te aproximativ 4 kilograme È™i constÄƒ din 154 de piese separate.",
        "RecruÈ›ii trebuie sÄƒ aibÄƒ Ã®ntre 19 È™i 30 de ani.",
        "ÃŽnÄƒlÈ›imea minimÄƒ pentru un gardist este de 1,74 metri.",
        "Fiecare gardist trebuie sÄƒ fie necÄƒsÄƒtorit (cu excepÈ›ia ofiÈ›erilor È™i a membrilor cu vechime).",
        "Instruirea include antrenament modern de securitate È™i exerciÈ›ii tradiÈ›ionale.",
        "Sediul GÄƒrzii se aflÄƒ chiar Ã®n spatele PorÈ›ii SfÃ¢nta Ana."
      ],
      en: [
        "The Swiss Guard was founded on January 22, 1506.",
        "The troop currently consists of about 135 soldiers.",
        "The uniform weighs about 4 kilograms and consists of 154 separate parts.",
        "Recruits must be between 19 and 30 years old.",
        "The minimum height for a guardsman is 1.74 meters.",
        "Every guardsman must be unmarried (except for officers and long-serving members).",
        "The training includes modern security training and traditional drilling.",
        "The Guard's quarters are located directly behind the Porta Sant'Anna."
      ]
    },
  },
  {
    id: 'kid-landmark-vatican-carriage-pavilion-extra',
    type: 'kid-landmark',
    parent: 'VA',
    coords: [12.4542, 41.9059],
    name: {
      de: 'Kutschenpavillon',
      hu: 'HintÃ³mÃºzeum',
      ro: 'Pavilionul TrÄƒsurilor',
      en: 'Carriage Pavilion',
    },
    description: {
      de: 'Ein Teil der Vatikanischen Museen, der eine Sammlung von kunstvollen Kutschen, Limousinen und "Papamobilen" ausstellt.',
      hu: 'A VatikÃ¡ni MÃºzeumok rÃ©sze, amely dÃ­szes hintÃ³k, limuzinok Ã©s "pÃ¡pamobilok" gyÅ±jtemÃ©nyÃ©t mutatja be.',
      ro: 'O secÈ›iune a Muzeelor Vaticane care expune o colecÈ›ie de trÄƒsuri ornate, limuzine È™i "papamobile".',
      en: 'A section of the Vatican Museums displaying a collection of ornate carriages, limousines, and "Popemobiles".'
  },
    facts: {
      de: ["Zeigt die Entwicklung des pÃ¤pstlichen Transports", "EnthÃ¤lt den Grand Gala Berlin von 1826", "Eines der ersten Autos, der Graham-Paige 837, ist ausgestellt"],
      hu: ["Bemutatja a pÃ¡pai kÃ¶zlekedÃ©s fejlÅ‘dÃ©sÃ©t", "Itt lÃ¡thatÃ³ az 1826-os Grand Gala Berlin hintÃ³", "Ki van Ã¡llÃ­tva az egyik elsÅ‘ autÃ³, a Graham-Paige 837"],
      ro: ["PrezintÄƒ evoluÈ›ia transportului papal", "Include trÄƒsura Grand Gala Berlin din 1826", "Este expusÄƒ una dintre primele maÈ™ini, Graham-Paige 837"],
      en: ["Shows the evolution of papal transportation", "Includes the 1826 Grand Gala Berlin carriage", "One of the first cars, the Graham-Paige 837, is on display"]
    }
  }
];


export const poiExtraVaticanOther = vaticanLandscapes;
