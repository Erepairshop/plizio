import json

pois = [
    {
        "name": "Camp de la Transportation",
        "coords": [-54.0286, 5.5033],
        "desc_en": "The main penal colony facility where prisoners arrived in French Guiana before being distributed.",
        "desc_de": "Die Hauptstrafkolonie-Einrichtung, in der Gefangene in Französisch-Guayana ankamen, bevor sie verteilt wurden.",
        "desc_hu": "A fő büntetőgyarmati létesítmény, ahol a foglyok megérkeztek Francia Guyanába, mielőtt szétosztották volna őket.",
        "desc_ro": "Principala facilitate a coloniei penale unde deținuții soseau în Guyana Franceză înainte de a fi distribuiți.",
        "facts_en": ["Built in 1852.", "Housed famous prisoners like Papillon."],
        "facts_de": ["Erbaut im Jahr 1852.", "Beherbergte berühmte Gefangene wie Papillon."],
        "facts_hu": ["1852-ben épült.", "Olyan híres foglyoknak adott otthont, mint Pillangó."],
        "facts_ro": ["Construit în 1852.", "A găzduit prizonieri celebri precum Papillon."]
    },
    {
        "name": "Îles du Salut",
        "coords": [-52.5833, 5.2833],
        "desc_en": "A group of small islands known for their infamous penal colonies, including Devil's Island.",
        "desc_de": "Eine Gruppe kleiner Inseln, die für ihre berüchtigten Strafkolonien bekannt sind, einschließlich der Teufelsinsel.",
        "desc_hu": "Kis szigetek csoportja, amelyek hírhedt büntetőgyarmataikról, köztük az Ördög-szigetről ismertek.",
        "desc_ro": "Un grup de insule mici cunoscute pentru infamele lor colonii penale, inclusiv Insula Diavolului.",
        "facts_en": ["Used as a prison from 1852 to 1953.", "Consists of three main islands."],
        "facts_de": ["Von 1852 bis 1953 als Gefängnis genutzt.", "Besteht aus drei Hauptinseln."],
        "facts_hu": ["1852 és 1953 között börtönként használták.", "Három fő szigetből áll."],
        "facts_ro": ["Folosit ca închisoare din 1852 până în 1953.", "Este format din trei insule principale."]
    },
    {
        "name": "Île Royale",
        "coords": [-52.5830, 5.2850],
        "desc_en": "The largest of the Salvation's Islands, serving as the administrative headquarters for the penal colony.",
        "desc_de": "Die größte der Îles du Salut, die als Verwaltungszentrum für die Strafkolonie diente.",
        "desc_hu": "Az Üdvösség-szigetek legnagyobbika, amely a büntetőgyarmat közigazgatási központjaként szolgált.",
        "desc_ro": "Cea mai mare dintre Insulele Salvării, servind drept sediu administrativ pentru colonia penală.",
        "facts_en": ["Housed the general population of prisoners.", "Features a restored church and hospital."],
        "facts_de": ["Beherbergte die allgemeine Gefangenenpopulation.", "Verfügt über eine restaurierte Kirche und ein Krankenhaus."],
        "facts_hu": ["Itt helyezték el az általános foglyokat.", "Egy felújított templommal és kórházzal rendelkezik."],
        "facts_ro": ["Găzduia populația generală de prizonieri.", "Dispune de o biserică și un spital restaurate."]
    },
    {
        "name": "Île Saint-Joseph",
        "coords": [-52.5835, 5.2800],
        "desc_en": "The southernmost island of the group, known as the 'silent island' where solitary confinement was enforced.",
        "desc_de": "Die südlichste Insel der Gruppe, bekannt als die 'stille Insel', auf der Einzelhaft durchgesetzt wurde.",
        "desc_hu": "A csoport legdélibb szigete, amelyet 'csendes szigetként' ismertek, ahol a magánzárkát alkalmazták.",
        "desc_ro": "Cea mai sudică insulă a grupului, cunoscută sub numele de 'insula tăcută', unde era impusă izolarea.",
        "facts_en": ["Reserved for the most dangerous inmates.", "Prisoners were forbidden to speak."],
        "facts_de": ["Für die gefährlichsten Insassen reserviert.", "Den Gefangenen war das Sprechen verboten."],
        "facts_hu": ["A legveszélyesebb raboknak volt fenntartva.", "A foglyoknak tilos volt beszélniük."],
        "facts_ro": ["Rezervat pentru cei mai periculoși deținuți.", "Deținuților le era interzis să vorbească."]
    },
    {
        "name": "Île du Diable",
        "coords": [-52.5780, 5.2880],
        "desc_en": "Famous penal colony island where political prisoners like Alfred Dreyfus were held.",
        "desc_de": "Berühmte Strafkolonie-Insel, auf der politische Gefangene wie Alfred Dreyfus festgehalten wurden.",
        "desc_hu": "Híres büntetőgyarmat-sziget, ahol olyan politikai foglyokat tartottak fogva, mint Alfred Dreyfus.",
        "desc_ro": "Celebră insulă colonie penală unde au fost ținuți prizonieri politici precum Alfred Dreyfus.",
        "facts_en": ["Notorious for harsh conditions.", "Strong ocean currents made escape impossible."],
        "facts_de": ["Berüchtigt für harte Bedingungen.", "Starke Meeresströmungen machten eine Flucht unmöglich."],
        "facts_hu": ["Hírhedt volt a kemény körülményekről.", "Az erős óceáni áramlatok lehetetlenné tették a menekülést."],
        "facts_ro": ["Renumit pentru condițiile aspre.", "Curenții oceanici puternici făceau evadarea imposibilă."]
    },
    {
        "name": "Fort Cépérou",
        "coords": [-52.3333, 4.9333],
        "desc_en": "Historic 17th-century fort ruins overlooking the city of Cayenne.",
        "desc_de": "Historische Festungsruinen aus dem 17. Jahrhundert mit Blick auf die Stadt Cayenne.",
        "desc_hu": "A 17. századi történelmi erőd romjai, kilátással Cayenne városára.",
        "desc_ro": "Ruinele unui fort istoric din secolul al XVII-lea cu vedere spre orașul Cayenne.",
        "facts_en": ["Built in 1643 by Charles Poncet de Brétigny.", "Destroyed and rebuilt several times."],
        "facts_de": ["Erbaut 1643 von Charles Poncet de Brétigny.", "Mehrmals zerstört und wieder aufgebaut."],
        "facts_hu": ["1643-ban építette Charles Poncet de Brétigny.", "Többször lerombolták és újjáépítették."],
        "facts_ro": ["Construit în 1643 de Charles Poncet de Brétigny.", "Distrus și reconstruit de mai multe ori."]
    },
    {
        "name": "Place des Palmistes",
        "coords": [-52.3300, 4.9350],
        "desc_en": "The main square in Cayenne, surrounded by historic colonial buildings and towering palm trees.",
        "desc_de": "Der Hauptplatz in Cayenne, umgeben von historischen Kolonialgebäuden und hoch aufragenden Palmen.",
        "desc_hu": "Cayenne főtere, amelyet történelmi gyarmati épületek és tornyosuló pálmafák vesznek körül.",
        "desc_ro": "Piața principală din Cayenne, înconjurată de clădiri coloniale istorice și palmieri falnici.",
        "facts_en": ["Created in 1821.", "Classified as a historic monument in 1999."],
        "facts_de": ["Erbaut im Jahr 1821.", "1999 als historisches Denkmal klassifiziert."],
        "facts_hu": ["1821-ben hozták létre.", "1999-ben történelmi műemlékké nyilvánították."],
        "facts_ro": ["Creată în 1821.", "Clasificată ca monument istoric în 1999."]
    },
    {
        "name": "Cathédrale Saint-Sauveur de Cayenne",
        "coords": [-52.3315, 4.9360],
        "desc_en": "The primary Catholic cathedral of French Guiana, featuring colonial architecture.",
        "desc_de": "Die primäre katholische Kathedrale von Französisch-Guayana, mit kolonialer Architektur.",
        "desc_hu": "Francia Guyana elsődleges katolikus katedrálisa, gyarmati építészettel.",
        "desc_ro": "Principala catedrală catolică din Guyana Franceză, cu arhitectură colonială.",
        "facts_en": ["Consecrated in 1833.", "Replaced an older church from the 17th century."],
        "facts_de": ["Geweiht im Jahr 1833.", "Ersetzte eine ältere Kirche aus dem 17. Jahrhundert."],
        "facts_hu": ["1833-ban szentelték fel.", "Egy régebbi, 17. századi templomot helyettesített."],
        "facts_ro": ["Sfințită în 1833.", "A înlocuit o biserică mai veche din secolul al XVII-lea."]
    },
    {
        "name": "Musée Départemental Alexandre-Franconie",
        "coords": [-52.3320, 4.9355],
        "desc_en": "A museum showcasing the natural history, archaeology, and ethnology of French Guiana.",
        "desc_de": "Ein Museum, das die Naturgeschichte, Archäologie und Ethnologie von Französisch-Guayana zeigt.",
        "desc_hu": "Francia Guyana természettörténetét, régészetét és néprajzát bemutató múzeum.",
        "desc_ro": "Un muzeu care prezintă istoria naturală, arheologia și etnologia Guyanei Franceze.",
        "facts_en": ["Housed in a traditional Creole house.", "Founded in 1901."],
        "facts_de": ["Untergebracht in einem traditionellen kreolischen Haus.", "Gegründet im Jahr 1901."],
        "facts_hu": ["Egy hagyományos kreol házban található.", "1901-ben alapították."],
        "facts_ro": ["Găzduit într-o casă tradițională creolă.", "Fondat în 1901."]
    },
    {
        "name": "Maison de Félix Éboué",
        "coords": [-52.3340, 4.9370],
        "desc_en": "The historic birthplace of Félix Éboué, a prominent French Guianese colonial administrator.",
        "desc_de": "Das historische Geburtshaus von Félix Éboué, einem prominenten französisch-guayanischen Kolonialverwalter.",
        "desc_hu": "Félix Éboué, a kiemelkedő francia guyanai gyarmati adminisztrátor történelmi szülőháza.",
        "desc_ro": "Locul de naștere istoric al lui Félix Éboué, un proeminent administrator colonial din Guyana Franceză.",
        "facts_en": ["Built in the mid-19th century.", "Félix Éboué was a hero of the Free French Forces."],
        "facts_de": ["Erbaut Mitte des 19. Jahrhunderts.", "Félix Éboué war ein Held der Freien Französischen Streitkräfte."],
        "facts_hu": ["A 19. század közepén épült.", "Félix Éboué a Szabad Francia Erők hőse volt."],
        "facts_ro": ["Construită la mijlocul secolului al XIX-lea.", "Félix Éboué a fost un erou al Forțelor Franceze Libere."]
    },
    {
        "name": "Bagne des Annamites",
        "coords": [-52.6833, 5.0167],
        "desc_en": "Ruins of a former penal colony built specifically to hold Indochinese prisoners.",
        "desc_de": "Ruinen einer ehemaligen Strafkolonie, die speziell für indochinesische Gefangene gebaut wurde.",
        "desc_hu": "Egykori büntetőgyarmat romjai, amelyet kifejezetten indokínai foglyok őrzésére építettek.",
        "desc_ro": "Ruinele unei foste colonii penale construite special pentru a deține prizonieri indochinezi.",
        "facts_en": ["Established in 1930.", "Prisoners were brought from French Indochina."],
        "facts_de": ["Gegründet im Jahr 1930.", "Gefangene wurden aus Französisch-Indochina gebracht."],
        "facts_hu": ["1930-ban hozták létre.", "A foglyokat Francia Indokínából hozták."],
        "facts_ro": ["Înființată în 1930.", "Prizonierii erau aduși din Indochina Franceză."]
    },
    {
        "name": "Roches Gravées de la Carapa",
        "coords": [-52.6500, 5.1667],
        "desc_en": "An archaeological site featuring ancient pre-Columbian petroglyphs carved into rocks.",
        "desc_de": "Eine archäologische Stätte mit antiken präkolumbianischen Petroglyphen, die in Felsen gehauen sind.",
        "desc_hu": "Régészeti lelőhely, amely ősi kolumbusz előtti, sziklákba vésett petroglifákat tartalmaz.",
        "desc_ro": "Un sit arheologic cu petroglife antice precolumbiene sculptate în stânci.",
        "facts_en": ["Contains over 200 rock carvings.", "Dating back thousands of years."],
        "facts_de": ["Enthält über 200 Felsritzungen.", "Gehen Jahrtausende zurück."],
        "facts_hu": ["Több mint 200 sziklarajzot tartalmaz.", "Több ezer éves múltra tekintenek vissza."],
        "facts_ro": ["Conține peste 200 de sculpturi în piatră.", "Datând de mii de ani."]
    },
    {
        "name": "Habitation Loyola",
        "coords": [-52.2833, 4.9000],
        "desc_en": "The remains of a massive 17th-century Jesuit plantation that was crucial to the local economy.",
        "desc_de": "Die Überreste einer massiven Jesuitenplantage aus dem 17. Jahrhundert, die für die lokale Wirtschaft von entscheidender Bedeutung war.",
        "desc_hu": "Egy hatalmas 17. századi jezsuita ültetvény maradványai, amely kulcsfontosságú volt a helyi gazdaság számára.",
        "desc_ro": "Rămășițele unei masive plantații iezuite din secolul al XVII-lea, esențială pentru economia locală.",
        "facts_en": ["Produced sugar, coffee, and cocoa.", "Operated by enslaved people and Jesuits."],
        "facts_de": ["Produzierte Zucker, Kaffee und Kakao.", "Betrieben von versklavten Menschen und Jesuiten."],
        "facts_hu": ["Cukrot, kávét és kakaót termelt.", "Rabszolgák és jezsuiták működtették."],
        "facts_ro": ["Produce zahăr, cafea și cacao.", "Operat de sclavi și iezuiți."]
    },
    {
        "name": "Église Saint-Joseph d'Iracoubo",
        "coords": [-53.2000, 5.4833],
        "desc_en": "A historic church famous for its intricate interior frescoes painted by a convict.",
        "desc_de": "Eine historische Kirche, die für ihre kunstvollen Innenfresken bekannt ist, die von einem Sträfling gemalt wurden.",
        "desc_hu": "Egy történelmi templom, amely híres az elítélt által festett bonyolult belső freskóiról.",
        "desc_ro": "O biserică istorică faimoasă pentru frescele sale interioare complicate pictate de un condamnat.",
        "facts_en": ["Decorated by convict Pierre Huguet.", "Classified as a historic monument."],
        "facts_de": ["Verziert vom Sträfling Pierre Huguet.", "Als historisches Denkmal klassifiziert."],
        "facts_hu": ["Pierre Huguet fegyenc díszítette.", "Történelmi műemlékké nyilvánítva."],
        "facts_ro": ["Decorată de condamnatul Pierre Huguet.", "Clasificată ca monument istoric."]
    },
    {
        "name": "Fort Diamant",
        "coords": [-52.2667, 4.8667],
        "desc_en": "A 19th-century coastal battery built to protect the entrance to the Mahury River.",
        "desc_de": "Eine Küstenbatterie aus dem 19. Jahrhundert, die zum Schutz der Einfahrt in den Mahury-Fluss gebaut wurde.",
        "desc_hu": "Egy 19. századi part menti üteg, amelyet a Mahury-folyó bejáratának védelmére építettek.",
        "desc_ro": "O baterie de coastă din secolul al XIX-lea construită pentru a proteja intrarea în râul Mahury.",
        "facts_en": ["Constructed between 1840 and 1849.", "Built from basalt and brick."],
        "facts_de": ["Erbaut zwischen 1840 und 1849.", "Aus Basalt und Backstein gebaut."],
        "facts_hu": ["1840 és 1849 között épült.", "Bazaltból és téglából készült."],
        "facts_ro": ["Construită între 1840 și 1849.", "Construită din bazalt și cărămidă."]
    },
    {
        "name": "Phare de l'Enfant Perdu",
        "coords": [-52.3667, 5.0333],
        "desc_en": "A historic lighthouse located on a small rocky islet off the coast of Macouria.",
        "desc_de": "Ein historischer Leuchtturm auf einer kleinen Felseninsel vor der Küste von Macouria.",
        "desc_hu": "Történelmi világítótorony, amely Macouria partjainál, egy kis sziklás szigeten található.",
        "desc_ro": "Un far istoric situat pe o mică insuliță stâncoasă în largul coastei Macouria.",
        "facts_en": ["Inaugurated in 1868.", "Automated in the mid-20th century."],
        "facts_de": ["Eingeweiht im Jahr 1868.", "Mitte des 20. Jahrhunderts automatisiert."],
        "facts_hu": ["1868-ban avatták fel.", "A 20. század közepén automatizálták."],
        "facts_ro": ["Inaugurat în 1868.", "Automatizat la mijlocul secolului al XX-lea."]
    },
    {
        "name": "Bagne de Saint-Jean-du-Maroni",
        "coords": [-54.0833, 5.4000],
        "desc_en": "Also known as Camp de la Relégation, it was a penal colony for repeat offenders.",
        "desc_de": "Auch bekannt als Camp de la Relégation, war es eine Strafkolonie für Wiederholungstäter.",
        "desc_hu": "A Camp de la Relégation néven is ismert létesítmény a visszaesők büntetőgyarmata volt.",
        "desc_ro": "Cunoscută și sub numele de Camp de la Relégation, a fost o colonie penală pentru recidiviști.",
        "facts_en": ["Created for the 'relegated' prisoners.", "Many inmates worked in nearby forests."],
        "facts_de": ["Geschaffen für die 'relegierten' Gefangenen.", "Viele Insassen arbeiteten in den nahegelegenen Wäldern."],
        "facts_hu": ["A 'száműzött' foglyok számára hozták létre.", "Sok rab a közeli erdőkben dolgozott."],
        "facts_ro": ["Creată pentru prizonierii 'retrogradați'.", "Mulți deținuți au lucrat în pădurile din apropiere."]
    },
    {
        "name": "Camp Crique Anguille",
        "coords": [-52.5333, 4.8333],
        "desc_en": "A penal camp located in Tonnegrande, known for its harsh working conditions in the jungle.",
        "desc_de": "Ein in Tonnegrande gelegenes Strafgefangenenlager, bekannt für seine harten Arbeitsbedingungen im Dschungel.",
        "desc_hu": "Tonnegrande-ban található büntetőtábor, amely a dzsungelben végzett kemény munkakörülményekről ismert.",
        "desc_ro": "O tabără penală situată în Tonnegrande, cunoscută pentru condițiile aspre de muncă din junglă.",
        "facts_en": ["Also called the Annamite camp.", "Prisoners built a railway line here."],
        "facts_de": ["Auch Annamiten-Lager genannt.", "Gefangene bauten hier eine Eisenbahnlinie."],
        "facts_hu": ["Annamita tábornak is nevezték.", "A rabok egy vasútvonalat építettek itt."],
        "facts_ro": ["Numită și tabăra annamită.", "Prizonierii au construit aici o linie de cale ferată."]
    },
    {
        "name": "Puits des Orpailleurs",
        "coords": [-53.1500, 4.8333],
        "desc_en": "Historic gold mining shafts in Saint-Élie, reflecting the region's 19th-century gold rush.",
        "desc_de": "Historische Goldbergbauschächte in Saint-Élie, die den Goldrausch der Region im 19. Jahrhundert widerspiegeln.",
        "desc_hu": "Történelmi aranybányászati aknák Saint-Élie-ben, amelyek a régió 19. századi aranylázát tükrözik.",
        "desc_ro": "Puțuri istorice de exploatare a aurului în Saint-Élie, reflectând goana după aur din secolul al XIX-lea a regiunii.",
        "facts_en": ["Gold was discovered here in 1873.", "Led to a massive influx of prospectors."],
        "facts_de": ["Gold wurde hier 1873 entdeckt.", "Führte zu einem massiven Zustrom von Goldsuchern."],
        "facts_hu": ["Az aranyat 1873-ban fedezték fel itt.", "Az aranyásók hatalmas beáramlásához vezetett."],
        "facts_ro": ["Aurul a fost descoperit aici în 1873.", "A dus la un aflux masiv de prospectori."]
    },
    {
        "name": "Hôpital de l'Île Royale",
        "coords": [-52.5835, 5.2860],
        "desc_en": "The ruins of the hospital built to serve the penal colony staff and inmates on Île Royale.",
        "desc_de": "Die Ruinen des Krankenhauses, das gebaut wurde, um das Personal der Strafkolonie und die Insassen auf der Île Royale zu versorgen.",
        "desc_hu": "A kórház romjai, amelyet a büntetőgyarmat személyzetének és foglyainak ellátására építettek az Île Royale-on.",
        "desc_ro": "Ruinele spitalului construit pentru a servi personalul coloniei penale și deținuții de pe Île Royale.",
        "facts_en": ["Suffered from tropical disease outbreaks.", "Only limited medical care was available."],
        "facts_de": ["Litt unter Ausbrüchen tropischer Krankheiten.", "Es gab nur begrenzte medizinische Versorgung."],
        "facts_hu": ["Trópusi betegségek kitöréseitől szenvedett.", "Csak korlátozott orvosi ellátás állt rendelkezésre."],
        "facts_ro": ["A suferit de focare de boli tropicale.", "Era disponibilă doar asistență medicală limitată."]
    },
    {
        "name": "Poudrière de Cayenne",
        "coords": [-52.3345, 4.9350],
        "desc_en": "A 19th-century gunpowder magazine used by the French military to store explosives.",
        "desc_de": "Ein Pulvermagazin aus dem 19. Jahrhundert, das vom französischen Militär zur Lagerung von Sprengstoff genutzt wurde.",
        "desc_hu": "19. századi lőporraktár, amelyet a francia hadsereg használt robbanóanyagok tárolására.",
        "desc_ro": "O magazie de praf de pușcă din secolul al XIX-lea, folosită de armata franceză pentru a depozita explozibili.",
        "facts_en": ["Constructed to supply local forts.", "Features thick walls for blast protection."],
        "facts_de": ["Gebaut, um lokale Festungen zu versorgen.", "Verfügt über dicke Wände zum Explosionsschutz."],
        "facts_hu": ["A helyi erődök ellátására épült.", "Vastag falakkal rendelkezik a robbanásvédelem érdekében."],
        "facts_ro": ["Construit pentru a aproviziona forturile locale.", "Dispune de pereți groși pentru protecție împotriva exploziei."]
    },
    {
        "name": "Cimetière des Relégués",
        "coords": [-54.0840, 5.4010],
        "desc_en": "A somber cemetery in Saint-Jean-du-Maroni where many exiled prisoners were buried.",
        "desc_de": "Ein düsterer Friedhof in Saint-Jean-du-Maroni, auf dem viele verbannte Gefangene begraben wurden.",
        "desc_hu": "Egy komor temető Saint-Jean-du-Maroni-ban, ahová sok száműzött foglyot temettek el.",
        "desc_ro": "Un cimitir sumbru în Saint-Jean-du-Maroni unde au fost îngropați mulți prizonieri exilați.",
        "facts_en": ["Most graves are unmarked.", "Reflects the high mortality rate of the camps."],
        "facts_de": ["Die meisten Gräber sind nicht markiert.", "Spiegelt die hohe Sterblichkeitsrate der Lager wider."],
        "facts_hu": ["A legtöbb sír jelöletlen.", "A táborok magas halálozási arányát tükrözi."],
        "facts_ro": ["Majoritatea mormintelor sunt nemarcate.", "Reflectă rata ridicată a mortalității din lagăre."]
    },
    {
        "name": "Gisement archéologique de l'Inini",
        "coords": [-53.8000, 3.8000],
        "desc_en": "An inland archaeological site revealing artifacts from pre-Columbian indigenous populations.",
        "desc_de": "Eine archäologische Stätte im Landesinneren, die Artefakte von präkolumbianischen indigenen Bevölkerungsgruppen offenbart.",
        "desc_hu": "Egy szárazföldi régészeti lelőhely, amely kolumbusz előtti őslakos populációk tárgyi emlékeit tárja fel.",
        "desc_ro": "Un sit arheologic interior care dezvăluie artefacte de la populațiile indigene precolumbiene.",
        "facts_en": ["Pottery and tools were discovered here.", "Sheds light on early Amazonian cultures."],
        "facts_de": ["Hier wurden Töpferwaren und Werkzeuge entdeckt.", "Wirft Licht auf frühe amazonische Kulturen."],
        "facts_hu": ["Kerámiákat és eszközöket fedeztek fel itt.", "Rávilágít a korai amazóniai kultúrákra."],
        "facts_ro": ["Aici au fost descoperite ceramică și unelte.", "Făce lumină asupra culturilor amazoniene timpurii."]
    },
    {
        "name": "Vestiges de Guisanbourg",
        "coords": [-52.0167, 4.3833],
        "desc_en": "The abandoned remains of a 19th-century agricultural town that once thrived on sugar cane.",
        "desc_de": "Die verlassenen Überreste einer landwirtschaftlichen Stadt aus dem 19. Jahrhundert, die einst durch Zuckerrohr blühte.",
        "desc_hu": "Egy 19. századi mezőgazdasági város elhagyatott maradványai, amely egykor a cukornádtól virágzott.",
        "desc_ro": "Rămășițele abandonate ale unui oraș agricol din secolul al XIX-lea care a prosperat cândva pe baza trestiei de zahăr.",
        "facts_en": ["Named after Jean Samuel Guisan.", "Slowly reclaimed by the jungle."],
        "facts_de": ["Benannt nach Jean Samuel Guisan.", "Langsam vom Dschungel zurückerobert."],
        "facts_hu": ["Jean Samuel Guisan-ról nevezték el.", "A dzsungel lassan visszahódítja."],
        "facts_ro": ["Numit după Jean Samuel Guisan.", "Recuperat încet de junglă."]
    },
    {
        "name": "Église de Saint-Laurent-du-Maroni",
        "coords": [-54.0290, 5.5020],
        "desc_en": "A prominent church in the border city, built in the early 20th century by convicts.",
        "desc_de": "Eine markante Kirche in der Grenzstadt, die Anfang des 20. Jahrhunderts von Sträflingen erbaut wurde.",
        "desc_hu": "Egy kiemelkedő templom a határvárosban, amelyet a 20. század elején építettek fegyencek.",
        "desc_ro": "O biserică proeminentă din orașul de graniță, construită la începutul secolului al XX-lea de condamnați.",
        "facts_en": ["Dedicated to Saint Lawrence.", "Features beautiful stained glass."],
        "facts_de": ["Dem Heiligen Laurentius gewidmet.", "Verfügt über wunderschöne Buntglasfenster."],
        "facts_hu": ["Szent Lőrincnek szentelték.", "Gyönyörű ólomüveg ablakokkal rendelkezik."],
        "facts_ro": ["Dedicată Sfântului Laurențiu.", "Are vitralii frumoase."]
    },
    {
        "name": "Chapelle de l'Île Royale",
        "coords": [-52.5830, 5.2855],
        "desc_en": "A small restored chapel on Île Royale used by the prison administration and sometimes prisoners.",
        "desc_de": "Eine kleine restaurierte Kapelle auf der Île Royale, die von der Gefängnisverwaltung und gelegentlich von Gefangenen genutzt wurde.",
        "desc_hu": "Egy kis, felújított kápolna az Île Royale-on, amelyet a börtönigazgatóság és alkalmanként a foglyok használtak.",
        "desc_ro": "O mică capelă restaurată pe Île Royale folosită de administrația închisorii și uneori de prizonieri.",
        "facts_en": ["Built with bricks from the mainland.", "One of the few restored buildings on the island."],
        "facts_de": ["Erbaut mit Ziegeln vom Festland.", "Eines der wenigen restaurierten Gebäude auf der Insel."],
        "facts_hu": ["A szárazföldről származó téglákból épült.", "A sziget kevés felújított épületének egyike."],
        "facts_ro": ["Construită cu cărămizi de pe continent.", "Una dintre puținele clădiri restaurate de pe insulă."]
    },
    {
        "name": "Site archéologique de Mont Grand Matoury",
        "coords": [-52.3500, 4.8667],
        "desc_en": "Archaeological site in a nature reserve showing evidence of Amerindian settlement before colonization.",
        "desc_de": "Archäologische Stätte in einem Naturschutzgebiet, die Beweise für indianische Besiedlung vor der Kolonialisierung zeigt.",
        "desc_hu": "Természetvédelmi területen található régészeti lelőhely, amely a gyarmatosítás előtti indián települések nyomait mutatja.",
        "desc_ro": "Sit arheologic într-o rezervație naturală care prezintă dovezi ale așezărilor amerindiene înainte de colonizare.",
        "facts_en": ["Pottery shards were found here.", "Located on the highest hill near Cayenne."],
        "facts_de": ["Hier wurden Tonscherben gefunden.", "Befindet sich auf dem höchsten Hügel in der Nähe von Cayenne."],
        "facts_hu": ["Kerámiacserepeket találtak itt.", "Cayenne közelében a legmagasabb dombon található."],
        "facts_ro": ["Aici s-au găsit cioburi de ceramică.", "Situat pe cel mai înalt deal de lângă Cayenne."]
    },
    {
        "name": "Monument aux Morts de Cayenne",
        "coords": [-52.3310, 4.9340],
        "desc_en": "A memorial monument dedicated to the soldiers from French Guiana who fell in the World Wars.",
        "desc_de": "Ein Gedenkmonument für die Soldaten aus Französisch-Guayana, die in den Weltkriegen gefallen sind.",
        "desc_hu": "Emlékmű a világháborúkban elesett francia guyanai katonák emlékére.",
        "desc_ro": "Un monument memorial dedicat soldaților din Guyana Franceză căzuți în Războaiele Mondiale.",
        "facts_en": ["Features a typical French memorial design.", "Located near Place des Palmistes."],
        "facts_de": ["Weist ein typisch französisches Denkmaldesign auf.", "Befindet sich in der Nähe des Place des Palmistes."],
        "facts_hu": ["Jellemzően francia emlékmű-dizájnnal rendelkezik.", "A Place des Palmistes közelében található."],
        "facts_ro": ["Prezintă un design tipic memorial francez.", "Situat lângă Place des Palmistes."]
    },
    {
        "name": "L'Auberge des Orpailleurs",
        "coords": [-52.5500, 4.4167],
        "desc_en": "A historic inn near Roura that served prospectors during the region's gold rushes.",
        "desc_de": "Ein historisches Gasthaus in der Nähe von Roura, das Goldsuchern während der Goldräusche der Region diente.",
        "desc_hu": "Egy történelmi fogadó Roura közelében, amely az aranyásókat szolgálta ki a régió aranylázai idején.",
        "desc_ro": "Un han istoric lângă Roura care a servit prospectorii în timpul goanei după aur din regiune.",
        "facts_en": ["Preserves the pioneer atmosphere.", "Located along a traditional transport route."],
        "facts_de": ["Bewahrt die Pionieratmosphäre.", "Befindet sich entlang einer traditionellen Transportroute."],
        "facts_hu": ["Megőrzi a pionír hangulatot.", "Egy hagyományos szállítási útvonal mentén található."],
        "facts_ro": ["Păstrează atmosfera de pionierat.", "Situat de-a lungul unei rute tradiționale de transport."]
    },
    {
        "name": "Ancienne Mairie de Cayenne",
        "coords": [-52.3325, 4.9365],
        "desc_en": "The old city hall of Cayenne, showcasing classical colonial administration architecture.",
        "desc_de": "Das alte Rathaus von Cayenne, das klassische koloniale Verwaltungsarchitektur zeigt.",
        "desc_hu": "Cayenne régi városházája, amely bemutatja a klasszikus gyarmati közigazgatási építészetet.",
        "desc_ro": "Vechea primărie din Cayenne, prezentând arhitectura clasică a administrației coloniale.",
        "facts_en": ["Built in the late 19th century.", "Reflects the prosperity of the era."],
        "facts_de": ["Erbaut im späten 19. Jahrhundert.", "Spiegelt den Wohlstand der Epoche wider."],
        "facts_hu": ["A 19. század végén épült.", "A korszak jólétét tükrözi."],
        "facts_ro": ["Construită la sfârșitul secolului al XIX-lea.", "Reflectă prosperitatea epocii."]
    }
]

import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

out_lines = [
    'import type { POI } from "./poi";',
    '',
    'export const poiExtraFrenchguianaHistoryV2: POI[] = ['
]

for i, p in enumerate(pois):
    slug = slugify(p['name'])
    poi_id = f"gf-{slug}-history-v2"
    
    out_lines.append('  {')
    out_lines.append(f'    id: "{poi_id}",')
    out_lines.append(f'    type: "historical",')
    out_lines.append(f'    parent: "GF-XX",')
    out_lines.append(f'    coords: [{p["coords"][0]}, {p["coords"][1]}],')
    
    # Names
    out_lines.append('    name: {')
    out_lines.append(f'      de: "{p["name"]}",')
    out_lines.append(f'      hu: "{p["name"]}",')
    out_lines.append(f'      ro: "{p["name"]}",')
    out_lines.append(f'      en: "{p["name"]}"')
    out_lines.append('    },')
    
    # Descriptions
    out_lines.append('    description: {')
    out_lines.append(f'      de: "{p["desc_de"]}",')
    out_lines.append(f'      hu: "{p["desc_hu"]}",')
    out_lines.append(f'      ro: "{p["desc_ro"]}",')
    out_lines.append(f'      en: "{p["desc_en"]}"')
    out_lines.append('    },')
    
    # Facts
    out_lines.append('    facts: {')
    out_lines.append(f'      de: ["{p["facts_de"][0]}", "{p["facts_de"][1]}"],')
    out_lines.append(f'      hu: ["{p["facts_hu"][0]}", "{p["facts_hu"][1]}"],')
    out_lines.append(f'      ro: ["{p["facts_ro"][0]}", "{p["facts_ro"][1]}"],')
    out_lines.append(f'      en: ["{p["facts_en"][0]}", "{p["facts_en"][1]}"]')
    out_lines.append('    }')
    
    if i == len(pois) - 1:
        out_lines.append('  }')
    else:
        out_lines.append('  },')

out_lines.append('];')

with open('lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines) + '\n')

print(f"Generated {len(pois)} historical POIs.")
