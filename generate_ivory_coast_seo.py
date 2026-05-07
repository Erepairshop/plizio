import json
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/.seo_tmp/seo_extras_seoextra-poiextraivorycoasthistoryv2.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

new_items = [
    {
        "id": "seguela-diamond-trade-history-v2",
        "descriptionAdvanced": {
            "de": "Séguéla, die Hauptstadt der Region Worodougou im Westen der Elfenbeinküste, erlangte weltweite Bekanntheit als eines der wichtigsten Zentren für den Diamantenabbau. Die Geschichte des Diamantenhandels in Séguéla begann in den 1950er Jahren, als bedeutende Vorkommen in den umliegenden Flussbetten entdeckt wurden. Die Stadt entwickelte sich schnell zu einem Magneten für Händler und Bergleute aus ganz Westafrika, was zu einer tiefgreifenden sozialen und wirtschaftlichen Transformation führte. Neben dem Bergbau ist Séguéla ein wichtiges kulturelles Zentrum des Worodougou-Volkes, einer Untergruppe der Malinké, die für ihre starke islamische Tradition und ihre kriegerische Vergangenheit bekannt ist. In der Kolonialzeit diente die Stadt als wichtiger administrativer Außenposten. Heute ist Séguéla ein Symbol für den Rohstoffreichtum des Landes, aber auch für die Herausforderungen bei der Verwaltung wertvoller Ressourcen und die Bewahrung der traditionellen Lebensweise inmitten des wirtschaftlichen Wandels.",
            "hu": "Séguéla, Elefántcsontpart nyugati részén, a Worodougou régió fővárosa, világszerte a gyémántbányászat egyik legfontosabb központjaként vált ismertté. A séguélai gyémántkereskedelem története az 1950-es években kezdődött, amikor a környező folyómedrekben jelentős lelőhelyeket fedeztek fel. A város gyorsan mágnesként vonzotta a kereskedőket és bányászokat egész Nyugat-Afrikából, ami mélyreható társadalmi és gazdasági átalakuláshoz vezetett. A bányászat mellett Séguéla a malinké nép egyik alcsoportjának, a worodougou népnek a fontos kulturális központja, akik erős iszlám hagyományaikról és harcias múltjukról ismertek. A gyarmati időkben a város fontos közigazgatási előőrsként szolgált. Ma Séguéla az ország nyersanyag-gazdagságának szimbóluma, de egyben a tiszteletreméltó erőforrások kezelésének és a hagyományos életmód gazdasági változások közepette történő megőrzésének kihívásait is jelképezi.",
            "ro": "Séguéla, capitala regiunii Worodougou din vestul Coastei de Fildeș, a câștigat faima mondială ca unul dintre cele mai importante centre de extracție a diamantelor. Istoria comerțului cu diamante în Séguéla a început în anii 1950, când au fost descoperite zăcăminte semnificative în albiile râurilor din jur. Orașul a devenit rapid un magnet pentru comercianți și mineri din întreaga Africă de Vest, ceea ce a dus la o transformare socială și economică profundă. Pe lângă minerit, Séguéla este un centru cultural important al poporului Worodougou, un subgrup al populației Malinké, cunoscut pentru tradiția sa islamică puternică și trecutul său belicos. În perioada colonială, orașul a servit ca un avanpost administrativ important. Astăzi, Séguéla este un simbol al bogăției de materii prime a țării, dar și al provocărilor legate de gestionarea resurselor valoroase și păstrarea modului de viață tradițional în mijlocul schimbărilor economice.",
            "en": "Séguéla, the capital of the Worodougou region in western Ivory Coast, is globally recognized as a premier center for artisanal diamond mining. The narrative of Séguéla's diamond industry commenced in the 1950s following the discovery of high-quality alluvial deposits in the surrounding river basins. This discovery catalyzed a rapid influx of prospectors and merchants from across West Africa, precipitating a radical socio-economic metamorphosis of the settlement. Beyond its mineral wealth, Séguéla serves as the cultural heartland of the Worodougou people, a Malinké subgroup noted for their profound Islamic heritage and storied military history. During the colonial epoch, the town functioned as a vital administrative frontier post. Today, Séguéla stands as a potent symbol of Ivory Coast's diverse natural resources, reflecting both the prosperity brought by the diamond trade and the ongoing efforts to ensure sustainable resource management and cultural preservation in a fluctuating global market."
        },
        "factsAdvanced": {
            "de": [
                "Hauptzentrum für den Diamantenabbau seit den 1950er Jahren.",
                "Hauptstadt der Region Worodougou im Nordwesten.",
                "Wichtiges kulturelles Zentrum der Malinké-Bevölkerung.",
                "Strategischer Außenposten während der französischen Kolonialzeit.",
                "Bekannt für den Handel mit Alluvialdiamanten aus Flussbetten.",
                "Zentrum für die Produktion von Baumwolle und Cashewnüssen."
            ],
            "hu": [
                "A gyémántbányászat fő központja az 1950-es évek óta.",
                "Az északnyugati Worodougou régió fővárosa.",
                "A malinké lakosság fontos kulturális központja.",
                "Stratégiai előőrs a francia gyarmati időszakban.",
                "A folyómedrekből származó hordalékgyémántok kereskedelméről ismert.",
                "A gyapot- és kesudió-termelés központja."
            ],
            "ro": [
                "Centru principal pentru extracția diamantelor din anii 1950.",
                "Capitala regiunii Worodougou din nord-vest.",
                "Centru cultural important al populației Malinké.",
                "Avanpost strategic în timpul perioadei coloniale franceze.",
                "Cunoscut pentru comerțul cu diamante aluvionare din albiile râurilor.",
                "Centru pentru producția de bumbac și nuci caju."
            ],
            "en": [
                "Has served as the primary hub for diamond mining since the 1950s.",
                "Administrative capital of the Worodougou region.",
                "A major focal point for Malinké culture and Islamic tradition.",
                "Acted as a critical frontier administrative post during the colonial era.",
                "Specializes in the trade of high-quality alluvial diamonds.",
                "A significant regional center for cotton and cashew nut agribusiness."
            ]
        }
    },
    {
        "id": "grand-lahou-old-town-history-v2",
        "descriptionAdvanced": {
            "de": "Das historische Grand-Lahou, auch bekannt als Lahou-Kpanda, ist ein Ort von tragischer Schönheit und großer historischer Bedeutung. Gelegen an der Stelle, wo der Bandama-Fluss und die Ébrié-Lagune auf den Atlantik treffen, war Grand-Lahou im 19. und frühen 20. Jahrhundert ein blühender kolonialer Handelsposten. Die Stadt war berühmt für ihre elegante Architektur und ihre Rolle als Umschlagplatz für Palmöl, Gummi und Elfenbein. Doch die Natur schlägt zurück: Seit Jahrzehnten leidet der Ort unter massiver Küstenerosion, die dazu geführt hat, dass ein großer Teil der historischen Altstadt und ihrer kolonialen Prachtbauten im Meer versunken ist. Die verbliebenen Bewohner, hauptsächlich vom Volk der Avikam, kämpfen darum, ihr kulturelles Erbe und die Gräber ihrer Vorfahren vor den Fluten zu retten. Grand-Lahou ist heute ein mahnendes Beispiel für die Auswirkungen des Klimawandels und gleichzeitig ein faszinierendes Zeugnis einer versinkenden kolonialen Vergangenheit.",
            "hu": "A történelmi Grand-Lahou, más néven Lahou-Kpanda, tragikus szépségű és nagy történelmi jelentőségű hely. Ott található, ahol a Bandama-folyó és az Ébrié-lagúna találkozik az Atlanti-óceánnal. Grand-Lahou a 19. században és a 20. század elején virágzó gyarmati kereskedelmi állomás volt. A város híres volt elegáns építészetéről, valamint a pálmaolaj, a gumi és az elefántcsont elosztóhelyeként betöltött szerepéről. A természet azonban visszavág: a település évtizedek óta súlyos partmenti eróziótól szenved, aminek következtében a történelmi óváros nagy része és gyarmati díszépületei a tengerbe süllyedtek. A megmaradt lakosok, főként az avikam nép tagjai, küzdenek azért, hogy megmentsék kulturális örökségüket és őseik sírjait az áradástól. Grand-Lahou ma figyelmeztető példa az éghajlatváltozás hatásaira, ugyanakkor egy elsüllyedő gyarmati múlt lenyűgöző tanúja.",
            "ro": "Orașul istoric Grand-Lahou, cunoscut și sub numele de Lahou-Kpanda, este un loc de o frumusețe tragică și o mare importanță istorică. Situat în punctul în care râul Bandama și laguna Ébrié se întâlnesc cu Oceanul Atlantic, Grand-Lahou a fost un post comercial colonial înfloritor în secolul al XIX-lea și la începutul secolului al XX-lea. Orașul era faimos pentru arhitectura sa elegantă și rolul său de punct de tranzit pentru uleiul de palmier, cauciuc și fildeș. Cu toate acestea, natura ripostează: de decenii, locul suferă de o eroziune costieră masivă, care a dus la scufundarea în mare a unei mari părți din orașul vechi istoric și a clădirilor sale coloniale fastuoase. Locuitorii rămași, în principal din poporul Avikam, luptă pentru a-și salva moștenirea culturală și mormintele strămoșilor de furia apelor. Grand-Lahou este astăzi un exemplu avertizor al efectelor schimbărilor climatice și, în același timp, o mărturie fascinantă a unui trecut colonial care dispare.",
            "en": "Historic Grand-Lahou, also known as Lahou-Kpanda, is a site of haunting beauty and profound historical weight. Strategically positioned at the confluence of the Bandama River, the Ébrié Lagoon, and the Atlantic Ocean, it flourished during the 19th and early 20th centuries as a premier colonial entrepôt. The town was celebrated for its sophisticated architecture and its pivotal role in the export of palm oil, rubber, and ivory. However, in recent decades, Grand-Lahou has become a tragic symbol of environmental crisis; relentless coastal erosion has claimed a significant portion of the historic district, submerging colonial mansions and administrative buildings beneath the waves. The resilient local community, predominantly of Avikam descent, strives to preserve their cultural heritage and ancestral burial grounds against the encroaching tides. Today, Grand-Lahou stands as a poignant reminder of the impacts of climate change and a unique testament to a disappearing era of maritime history."
        },
        "factsAdvanced": {
            "de": [
                "Ehemals blühender Handelsposten an der Mündung des Bandama.",
                "Die Altstadt versinkt aufgrund massiver Küstenerosion im Meer.",
                "Zentrum des Avikam-Volkes mit reicher maritimer Geschichte.",
                "Bekannt für die Ruinen kolonialer Lagerhäuser und Wohnhäuser.",
                "Wichtiger Ort für den historischen Sklaven- und Palmölhandel.",
                "Oft als das 'versinkende Venedig Westafrikas' bezeichnet."
            ],
            "hu": [
                "Egykor virágzó kereskedelmi állomás a Bandama torkolatánál.",
                "Az óváros a súlyos partmenti erózió miatt a tengerbe süllyed.",
                "Az avikam nép központja gazdag tengeri múlttal.",
                "Gyarmati raktárak és lakóházak romjairól ismert.",
                "A történelmi rabszolga- és pálmaolaj-kereskedelem fontos helyszíne.",
                "Gyakran 'Nyugat-Afrika elsüllyedő Velencéjeként' emlegetik."
            ],
            "ro": [
                "Fost post comercial înfloritor la gura de vărsare a râului Bandama.",
                "Orașul vechi se scufundă în mare din cauza eroziunii costiere masive.",
                "Centrul poporului Avikam cu o bogată istorie maritimă.",
                "Cunoscut pentru ruinele depozitelor și locuințelor coloniale.",
                "Loc important pentru comerțul istoric cu sclavi și ulei de palmier.",
                "Supranumit adesea „Veneția scufundată a Africii de Vest”."
            ],
            "en": [
                "Formerly a preeminent commercial hub at the Bandama River mouth.",
                "A major portion of the historic center is now submerged due to erosion.",
                "Traditional heartland of the Avikam people and their seafaring culture.",
                "Features the skeletal remains of colonial-era warehouses and mansions.",
                "Historically significant for the international trade in palm oil and ivory.",
                "Poignantly nicknamed the 'Sinking Venice of West Africa'."
            ]
        }
    },
    {
        "id": "katiola-colonial-history-v2",
        "descriptionAdvanced": {
            "de": "Katiola, gelegen in der Mitte der Elfenbeinküste, ist weltberühmt für eine jahrhundertealte Tradition: die Töpferkunst der Mangoro-Frauen. Diese Kunstform, die von Generation zu Generation weitergegeben wird, macht die Stadt zu einem der bedeutendsten kunsthandwerklichen Zentren Westafrikas. Die Geschichte von Katiola ist jedoch auch durch die koloniale Expansion geprägt. Anfang des 20. Jahrhunderts wurde die Stadt zu einem wichtigen administrativen Posten der Franzosen und ein bedeutender Halt an der Eisenbahnlinie Abidjan-Niger. Das Volk der Tagwana, das die Region bewohnt, ist für seinen Widerstand und seine spätere Integration in das koloniale Wirtschaftssystem bekannt. Die Mischung aus traditioneller Handwerkskunst und kolonialem Erbe verleiht Katiola einen einzigartigen Charakter. Die Stadt dient als Bewahrerin der kulturellen Identität der Tagwana und ist gleichzeitig ein lebendiges Beispiel für die wirtschaftliche Transformation durch Infrastrukturprojekte wie die Eisenbahn.",
            "hu": "Az ország közepén fekvő Katiola egy évszázados hagyományról világhírű: a mangoro nők fazekasművészetéről. Ez a művészeti forma, amely nemzedékről nemzedékre öröklődik, a várost Nyugat-Afrika egyik legjelentősebb kézműves központjává teszi. Katiola történetét azonban a gyarmati terjeszkedés is meghatározta. A 20. század elején a város a franciák fontos közigazgatási posztjává és az Abidjan-Niger vasútvonal jelentős állomásává vált. A régiót lakó tagwana nép az ellenállásáról és a gyarmati gazdasági rendszerbe való későbbi integrációjáról ismert. A hagyományos kézművesség és a gyarmati örökség ötvözete egyedülálló karaktert kölcsönöz Katiolának. A város a tagwanák kulturális identitásának őrzőjeként szolgál, ugyanakkor élő példája az olyan infrastrukturális projektek által elindított gazdasági átalakulásnak, mint a vasút.",
            "ro": "Katiola, situat în centrul Coastei de Fildeș, este renumit în întreaga lume pentru o tradiție de secole: arta olăritului practicată de femeile Mangoro. Această formă de artă, transmisă din generație în generație, face din oraș unul dintre cele mai importante centre artizanale din Africa de Vest. Cu toate acestea, istoria orașului Katiola este marcată și de expansiunea colonială. La începutul secolului al XX-lea, orașul a devenit un post administrativ important pentru francezi și o stație semnificativă pe linia feroviară Abidjan-Niger. Poporul Tagwana, care locuiește în regiune, este cunoscut pentru rezistența sa și integrarea ulterioară în sistemul economic colonial. Amestecul de meșteșug tradițional și moștenire colonială oferă orașului Katiola un caracter unic. Orașul servește ca păstrător al identității culturale a poporului Tagwana și este, în același timp, un exemplu viu al transformării economice prin proiecte de infrastructură precum calea ferată.",
            "en": "Katiola, situated in the central region of Ivory Coast, is globally acclaimed for a heritage that spans centuries: the ancestral pottery of the Mangoro women. This artistic tradition, meticulously passed down through maternal lineages, has established the town as one of West Africa's preeminent ceramic centers. However, Katiola's historical trajectory is also defined by French colonial expansion. In the early 20th century, the town was developed as a key administrative headquarters and a vital transit station for the Abidjan-Niger railway. The indigenous Tagwana people, who inhabit the area, possess a legacy of initial resistance followed by strategic adaptation to the colonial economic framework. The synthesis of traditional craftsmanship and colonial-era development gives Katiola a unique identity. Today, it serves as a primary bastion for Tagwana cultural preservation while standing as a vibrant example of the economic metamorphosis catalyzed by transformative infrastructure projects like the national railway."
        },
        "factsAdvanced": {
            "de": [
                "Weltbekannt für die traditionelle Töpferkunst der Mangoro-Frauen.",
                "Zentrum des Tagwana-Volkes und ihrer kulturellen Identität.",
                "Wichtiger Bahnhof an der historischen Abidjan-Niger-Linie.",
                "Ehemaliger kolonialer Verwaltungs- und Militärposten.",
                "Berühmt für die Herstellung von hochwertiger Terrakotta-Keramik.",
                "Beherbergt eine bedeutende katholische Mission aus dem Jahr 1908."
            ],
            "hu": [
                "Világhírű a mangoro nők hagyományos fazekasművészetéről.",
                "A tagwana nép és kulturális identitásuk központja.",
                "Fontos vasútállomás a történelmi Abidjan-Niger vonalon.",
                "Egykori gyarmati közigazgatási és katonai poszt.",
                "Kiváló minőségű terrakotta kerámiák gyártásáról híres.",
                "Itt található egy jelentős katolikus misszió 1908-ból."
            ],
            "ro": [
                "Renumit în întreaga lume pentru arta olăritului tradițional a femeilor Mangoro.",
                "Centrul poporului Tagwana și al identității lor culturale.",
                "Gară importantă pe linia istorică Abidjan-Niger.",
                "Fost post administrativ și militar colonial.",
                "Faimos pentru producția de ceramică din teracotă de înaltă calitate.",
                "Găzduiește o misiune catolică importantă din anul 1908."
            ],
            "en": [
                "Global hub for the traditional Mangoro female pottery guilds.",
                "Primary cultural and spiritual center for the Tagwana ethnic group.",
                "A major logistical stop on the historic Abidjan-Niger railway line.",
                "Served as an essential French administrative and military headquarters.",
                "Renowned for the production of durable and ornate terracotta ware.",
                "Features a prominent Catholic mission established as early as 1908."
            ]
        }
    },
    {
        "id": "daloa-trading-post-history-v2",
        "descriptionAdvanced": {
            "de": "Daloa, im Herzen des 'Kakao-Gürtels' der Elfenbeinküste gelegen, blickt auf eine dynamische Geschichte als einer der wichtigsten Handelsposten der Kolonialzeit zurück. Die Stadt wurde 1905 von den Franzosen als administratives Zentrum gegründet, um die Region Haut-Sassandra zu kontrollieren und den Anbau von Exportgütern wie Kaffee und Kakao voranzutreiben. Daloa entwickelte sich schnell zum wirtschaftlichen Motor des Westens und zum Hauptort des Bété-Volkes. Die Bété sind bekannt für ihre reiche orale Tradition und ihre Rolle in der politischen Geschichte des Landes. Die koloniale Stadtplanung von Daloa mit ihren breiten Alleen und Regierungsgebäuden spiegelt die Bedeutung der Stadt als Verwaltungsknotenpunkt wider. Heute ist Daloa ein pulsierendes Handelszentrum, das die Geschichte des Kakao-Booms und die damit verbundene soziale Transformation Westafrikas verkörpert. Die Stadt bleibt ein kultureller Bezugspunkt für die Bété und ein Schlüsselort für das Verständnis der wirtschaftlichen Entwicklung der Elfenbeinküste.",
            "hu": "Az ország 'kakaó-övezetének' szívében fekvő Daloa dinamikus múltra tekint vissza a gyarmati korszak egyik legfontosabb kereskedelmi állomásaként. A várost 1905-ben alapították a franciák közigazgatási központként, hogy ellenőrizzék a Haut-Sassandra régiót, és ösztönözzék az olyan exportcikkek termesztését, mint a kávé és a kakaó. Daloa gyorsan a nyugat gazdasági motorjává és a bété nép fő központjává fejlődött. A bétékről köztudott gazdag szóbeli hagyományuk és az ország politikai történetében betöltött szerepük. Daloa gyarmati várostervezése széles sugárútjaival és kormányzati épületeivel tükrözi a város közigazgatási csomópontként betöltött jelentőségét. Ma Daloa egy lüktető kereskedelmi központ, amely a kakaó-boom történetét és a hozzá kapcsolódó nyugat-afrikai társadalmi átalakulást testesíti meg. A város továbbra is kulturális hivatkozási pont a bétéek számára, és kulcsfontosságú helyszín Elefántcsontpart gazdasági fejlődésének megértéséhez.",
            "ro": "Daloa, situat în inima „centurii de cacao” a Coastei de Fildeș, are o istorie dinamică ca unul dintre cele mai importante posturi comerciale din perioada colonială. Orașul a fost fondat în 1905 de francezi ca centru administrativ pentru a controla regiunea Haut-Sassandra și pentru a promova cultivarea produselor de export precum cafeaua și cacaoa. Daloa s-a dezvoltat rapid în motorul economic al vestului și în principalul oraș al poporului Bété. Populația Bété este cunoscută pentru bogata sa tradiție orală și rolul său în istoria politică a țării. Planificarea urbană colonială a orașului Daloa, cu bulevardele sale largi și clădirile guvernamentale, reflectă importanța orașului ca nod administrativ. Astăzi, Daloa este un centru comercial vibrant care întruchipează istoria boom-ului de cacao și transformarea socială asociată din Africa de Vest. Orașul rămâne un punct de referință cultural pentru poporul Bété și un loc cheie pentru înțelegerea dezvoltării economice a Coastei de Fildeș.",
            "en": "Daloa, anchored in the heart of Ivory Coast's legendary 'Cocoa Belt,' possesses a dynamic history as one of the preeminent commercial entrepôts of the colonial era. Established by French authorities in 1905 as an administrative capital, the town was designed to oversee the Haut-Sassandra region and accelerate the production of export commodities like coffee and cocoa. Daloa rapidly evolved into the economic engine of the west and the cultural capital of the Bété people. The Bété are distinguished by their elaborate oral histories and their significant influence on the nation's political evolution. The town's colonial urban design, featuring expansive boulevards and stately administrative quarters, mirrors its historical status as a pivotal government hub. Today, Daloa remains a bustling center of trade that epitomizes the mid-20th-century cocoa boom and the resulting societal transformations in West Africa. It continues to be a vital cultural touchstone for the Bété community and a critical site for understanding the modern economic development of the nation."
        },
        "factsAdvanced": {
            "de": [
                "Gegründet 1905 als Hauptort der Region Haut-Sassandra.",
                "Zentrum des Bété-Volkes und ihrer kulturellen Traditionen.",
                "Drittgrößte Stadt der Elfenbeinküste und wichtigster Agrarmarkt.",
                "Historischer Brennpunkt des Kakao- und Kaffee-Booms.",
                "Beherbergt bedeutende Bildungseinrichtungen wie die Jean Lorougnon Guédé Universität.",
                "Wichtiger Verkehrsknotenpunkt zwischen dem Westen und Abidjan."
            ],
            "hu": [
                "1905-ben alapították Haut-Sassandra régió székhelyeként.",
                "A bété nép és kulturális hagyományaik központja.",
                "Elefántcsontpart harmadik legnagyobb városa és legfontosabb agrárpiaca.",
                "A kakaó- és kávé-boom történelmi gyújtópontja.",
                "Olyan jelentős oktatási intézményeknek ad otthont, mint a Jean Lorougnon Guédé Egyetem.",
                "Fontos közlekedési csomópont a nyugat és Abidjan között."
            ],
            "ro": [
                "Fondat în 1905 ca reședință a regiunii Haut-Sassandra.",
                "Centrul poporului Bété și al tradițiilor lor culturale.",
                "Al treilea oraș ca mărime din Coasta de Fildeș și cea mai importantă piață agricolă.",
                "Punct istoric central al boom-ului de cacao și cafea.",
                "Găzduiește instituții de învățământ importante, cum ar fi Universitatea Jean Lorougnon Guédé.",
                "Nod rutier important între vestul țării și Abidjan."
            ],
            "en": [
                "Established in 1905 as the administrative seat of the Haut-Sassandra region.",
                "Cultural heartland of the Bété people and their traditional arts.",
                "Ranks as the third largest city and a premier agricultural market in Ivory Coast.",
                "Historically the epicenter of the nation's massive cocoa and coffee expansion.",
                "Home to prestigious academic institutions, including the Jean Lorougnon Guédé University.",
                "A vital geographic crossroads linking the western interior with Abidjan."
            ]
        }
    },
    {
        "id": "abengourou-indenie-kingdom-history-v2",
        "descriptionAdvanced": {
            "de": "Abengourou, dessen Name in der lokalen Sprache 'Ich mag keine langen Reden' bedeutet, ist die stolze Hauptstadt des Indénié-Königreichs der Agni. Die Stadt wurde im 18. Jahrhundert von Agni-Flüchtlingen aus dem heutigen Ghana gegründet, die ihre reiche Akan-Kultur mitbrachten. Das herausragendste historische Bauwerk ist der Königspalast, der 1882 während der Regierungszeit von König Nana Boa Kouassi I. erbaut wurde. Der Palast ist ein Symbol für die Beständigkeit der traditionellen Monarchie, die auch während der französischen Kolonialzeit ihre Autorität bewahren konnte. Abengourou ist berühmt für die 'Fête des Ignames' (Yamsfest), ein rituelles Ereignis, das die Ernte und die Verbindung zu den Ahnen feiert. Die Stadt war zudem ein frühes Zentrum für Bildung und Kunst, insbesondere für die Musik und die traditionellen Tänze der Agni. Heute verbindet Abengourou seine Rolle als modernes Verwaltungszentrum mit der tiefen Achtung vor seinen königlichen Wurzeln und bleibt ein kulturelles Juwel im Osten der Elfenbeinküste.",
            "hu": "Abengourou, amelynek neve a helyi nyelven azt jelenti: 'Nem szeretem a hosszú beszédeket', az agni nép Indénié Királyságának büszke fővárosa. A várost a 18. században alapították a mai Ghána területéről érkező agni menekültek, akik magukkal hozták gazdag akan kultúrájukat. A legkiemelkedőbb történelmi épület a királyi palota, amely 1882-ben, I. Nana Boa Kouassi király uralkodása alatt épült. A palota a hagyományos monarchia tartósságának szimbóluma, amely a francia gyarmati időszak alatt is meg tudta őrizni tekintélyét. Abengourou híres a 'Fête des Ignames'-ról (jamgyökér-ünnep), egy rituális eseményről, amely az aratást és az ősökhöz való kötődést ünnepli. A város korai oktatási és művészeti központ is volt, különösen az agni zene és hagyományos táncok terén. Ma Abengourou ötvözi modern közigazgatási szerepét a királyi gyökerek iránti mély tisztelettel, és továbbra is Elefántcsontpart keleti részének kulturális gyöngyszeme marad.",
            "ro": "Abengourou, al cărui nume în limba locală înseamnă „Nu-mi plac discursurile lungi”, este mândra capitală a regatului Indénié al poporului Agni. Orașul a fost fondat în secolul al XVIII-lea de refugiații Agni din actuala Ghana, care și-au adus cu ei bogata cultură Akan. Cea mai remarcabilă structură istorică este palatul regal, construit în 1882 în timpul domniei regelui Nana Boa Kouassi I. Palatul este un simbol al permanenței monarhiei tradiționale, care și-a putut păstra autoritatea chiar și în timpul perioadei coloniale franceze. Abengourou este renumit pentru „Fête des Ignames” (Festivalul Iamei), un eveniment ritualic care celebrează recolta și legătura cu strămoșii. Orașul a fost, de asemenea, un centru timpuriu pentru educație și artă, în special pentru muzica și dansurile tradiționale Agni. Astăzi, Abengourou își îmbină rolul de centru administrativ modern cu respectul profund pentru rădăcinile sale regale, rămânând o bijuterie culturală în estul Coastei de Fildeș.",
            "en": "Abengourou, whose name locally translates to 'I do not like long speeches,' stands as the venerable capital of the Agni Kingdom of Indénié. Established in the 18th century by Agni migrants fleeing conflict in present-day Ghana, the city became a sanctuary for the preservation of rich Akan traditions. Its most significant architectural landmark is the Royal Palace, erected in 1882 under the reign of King Nana Boa Kouassi I. This palace serves as a potent symbol of the enduring power of the traditional monarchy, which remarkably maintained its social authority throughout the French colonial period. Abengourou is celebrated for the 'Fête des Ignames' (Yam Festival), a major ritual event that consecrates the harvest and strengthens the bond with ancestral spirits. Historically, the town was also a pioneering center for education and the arts within the region, particularly noted for Agni musical heritage and ceremonial dance. Today, Abengourou harmonizes its role as a modern provincial capital with a deep-seated reverence for its royal ancestry, remaining a cultural cornerstone of eastern Ivory Coast."
        },
        "factsAdvanced": {
            "de": [
                "Hauptstadt des Indénié-Reiches der Agni-Bevölkerung.",
                "Der Königspalast wurde 1882 von Nana Boa Kouassi I. erbaut.",
                "Bekannt für das jährliche Yamsfest (Fête des Ignames).",
                "Beherbergt die bedeutende Schule der Komian-Priesterinnen.",
                "Eines der ältesten Zentren der Akan-Kultur im Osten des Landes.",
                "Zentrum für den Export von Kakao und Kaffee nach Ghana."
            ],
            "hu": [
                "Az agni lakosság Indénié Birodalmának fővárosa.",
                "A királyi palotát 1882-ben I. Nana Boa Kouassi építtette.",
                "Híres az évenkénti jamgyökér-ünnepről (Fête des Ignames).",
                "Itt található a Komian papnők jelentős iskolája.",
                "Az akan kultúra egyik legrégebbi központja az ország keleti részén.",
                "A Ghánába irányuló kakaó- és kávéexport központja."
            ],
            "ro": [
                "Capitala Imperiului Indénié al populației Agni.",
                "Palatul regal a fost construit în 1882 de Nana Boa Kouassi I.",
                "Cunoscut pentru festivalul anual al iamei (Fête des Ignames).",
                "Găzduiește școala importantă a preoteselor Komian.",
                "Unul dintre cele mai vechi centre ale culturii Akan din estul țării.",
                "Centru pentru exportul de cacao și cafea către Ghana."
            ],
            "en": [
                "Serves as the sovereign capital of the Agni Indénié Kingdom.",
                "Features the Royal Palace, commissioned by Nana Boa Kouassi I in 1882.",
                "Host of the prestigious annual Yam Festival (Fête des Ignames).",
                "Home to a famous traditional school for Komian priestesses.",
                "A primary bastion of Akan cultural heritage in eastern Ivory Coast.",
                "Acts as a major hub for the cross-border cocoa and coffee trade with Ghana."
            ]
        }
    },
    {
        "id": "ferkessedougou-historic-town-history-v2",
        "descriptionAdvanced": {
            "de": "Ferkessédougou, oft einfach Ferké genannt, ist das Tor zum Norden der Elfenbeinküste und blickt auf eine bedeutende Geschichte als Handelszentrum und Eisenbahnknotenpunkt zurück. Die Stadt ist das Zentrum des Niarafolo-Volkes, einer Untergruppe der Senufo, und liegt in einer Region, die historisch für ihren Rinder- und Agrarhandel bekannt ist. Die Entwicklung von Ferké wurde maßgeblich durch die Abidjan-Niger-Eisenbahn geprägt, die die Stadt mit dem Hafen von Abidjan und dem Binnenland von Burkina Faso verband. Während der Kolonialzeit war Ferké ein wichtiger administrativer Posten und ein Sammelpunkt für Ressourcen aus dem Norden. Die Stadt ist berühmt für ihren lebhaften Viehmarkt, einen der größten Westafrikas, der Händler aus der gesamten Sahelzone anzieht. Trotz moderner Entwicklungen bewahrt Ferkessédougou seine traditionellen Senufo-Wurzeln, was sich in der Architektur und den lokalen Märkten widerspiegelt, und bleibt ein unverzichtbarer Knotenpunkt für den transregionalen Handel.",
            "hu": "Ferkessédougou, amelyet gyakran egyszerűen Ferké-nek hívnak, Elefántcsontpart északi kapuja, és jelentős múltra tekint vissza kereskedelmi központként és vasúti csomópontként. A város a senufo nép egyik alcsoportjának, a niarafolo népnek a központja, és egy olyan régióban található, amely történelmileg a szarvasmarha- és agrárkereskedelméről ismert. Ferké fejlődését jelentősen meghatározta az Abidjan-Niger vasútvonal, amely összekötötte a várost Abidjan kikötőjével és Burkina Faso belsejével. A gyarmati időkben Ferké fontos közigazgatási poszt és az északi erőforrások gyűjtőhelye volt. A város híres élénk állatpiacáról, amely Nyugat-Afrika egyik legnagyobbja, és az egész Szahel-övezetből vonzza a kereskedőket. A modern fejlődés ellenére Ferkessédougou megőrzi hagyományos senufo gyökereit, ami az építészetben és a helyi piacokon is tükröződik, és továbbra is a régiók közötti kereskedelem nélkülözhetetlen csomópontja marad.",
            "ro": "Ferkessédougou, numit adesea pur și simplu Ferké, este poarta către nordul Coastei de Fildeș și are o istorie semnificativă ca centru comercial și nod feroviar. Orașul este centrul poporului Niarafolo, un subgrup al populației Senufo, și este situat într-o regiune cunoscută istoric pentru comerțul cu vite și produse agricole. Dezvoltarea orașului Ferké a fost marcată semnificativ de calea ferată Abidjan-Niger, care a legat orașul de portul Abidjan și de interiorul Burkinei Faso. În perioada colonială, Ferké a fost un post administrativ important și un punct de colectare a resurselor din nord. Orașul este faimos pentru piața sa vibrantă de vite, una dintre cele mai mari din Africa de Vest, care atrage comercianți din întreaga regiune Sahel. În ciuda dezvoltărilor moderne, Ferkessédougou își păstrează rădăcinile tradiționale Senufo, reflectate în arhitectură și piețele locale, rămânând un nod indispensabil pentru comerțul transregional.",
            "en": "Ferkessédougou, commonly abbreviated as Ferké, serves as the historic gateway to northern Ivory Coast and boasts a distinguished legacy as a commercial hub and strategic railway junction. The town is the cultural heartland of the Niarafolo people, a Senufo subgroup, and is situated in a territory historically renowned for livestock and agricultural trade. Its growth was fundamentally accelerated by the Abidjan-Niger railway, which positioned the town as a critical link between the Atlantic port of Abidjan and the landlocked regions of Burkina Faso. During the colonial era, Ferké functioned as a major administrative outpost and a central collection point for northern resources. The city is famous for its vibrant cattle market, one of the largest in West Africa, drawing merchants from across the Sudano-Sahelian belt. Despite modern expansion, Ferkessédougou meticulously preserves its Senufo foundations, visible in its traditional layout and market culture, continuing to serve as an indispensable artery for trans-regional commerce."
        },
        "factsAdvanced": {
            "de": [
                "Hauptstadt des Niarafolo-Volkes, einer Senufo-Untergruppe.",
                "Wichtiger Eisenbahnknotenpunkt der Linie Abidjan-Niger.",
                "Beherbergt einen der größten Viehmärkte in Westafrika.",
                "Zentrum der Zuckerproduktion durch den Konzern SUCAF.",
                "Historisch wichtiges Tor für den Handel mit Burkina Faso.",
                "Strategischer Militärposten während der französischen Kolonialzeit."
            ],
            "hu": [
                "A niarafolo nép, a senufo alcsoport fővárosa.",
                "Az Abidjan-Niger vasútvonal fontos csomópontja.",
                "Nyugat-Afrika egyik legnagyobb állatpiacának ad otthont.",
                "A cukortermelés központja a SUCAF konszern révén.",
                "Történelmileg fontos kapu a Burkina Fasóval folytatott kereskedelemben.",
                "Stratégiai katonai poszt a francia gyarmati időszakban."
            ],
            "ro": [
                "Capitala poporului Niarafolo, un subgrup al populației Senufo.",
                "Nod feroviar important pe linia Abidjan-Niger.",
                "Găzduiește una dintre cele mai mari piețe de vite din Africa de Vest.",
                "Centru al producției de zahăr prin concernul SUCAF.",
                "Poartă importantă istoric pentru comerțul cu Burkina Faso.",
                "Post militar strategic în timpul perioadei coloniale franceze."
            ],
            "en": [
                "Principal city of the Niarafolo Senufo community.",
                "Acts as a pivotal station on the historic Abidjan-Niger railway.",
                "Home to one of the most significant livestock markets in West Africa.",
                "Major industrial center for sugar production via the SUCAF complex.",
                "Historically the primary conduit for trade with Burkina Faso.",
                "Served as a strategic French military and administrative garrison."
            ]
        }
    },
    {
        "id": "jacqueville-colonial-history-v2",
        "descriptionAdvanced": {
            "de": "Jacqueville, auf einer Halbinsel zwischen der Ébrié-Lagune und dem Atlantik gelegen, ist ein Ort mit einer tiefen kolonialen Vergangenheit. Der Name geht auf den britischen Kapitän Jack zurück, der hier im 19. Jahrhundert einen Handelsposten errichtete. Jacqueville war früher als 'Half-Jack' bekannt und entwickelte sich zu einem der wichtigsten Zentren für den Export von Palmöl. Die Architektur der Stadt ist einzigartig durch die zahlreichen gut erhaltenen kolonialen Lagerhäuser und Wohnhäuser, die einst britischen und französischen Handelsfirmen gehörten. Das Volk der Alladian, das die Region bewohnt, spielte eine zentrale Rolle im Handel zwischen den europäischen Mächten und dem Hinterland. Jacqueville war auch ein bedeutender Ort während der Ära des Sklavenhandels. Heute ist die Stadt ein beliebtes Ausflugsziel, doch ihre historische Bausubstanz und die Geschichten der Händlerfamilien machen sie zu einem wertvollen Denkmal der maritimen und wirtschaftlichen Geschichte der Elfenbeinküste.",
            "hu": "Az Ébrié-lagúna és az Atlanti-óceán közötti félszigeten fekvő Jacqueville mély gyarmati múlttal rendelkező hely. Nevét Jack brit kapitányról kapta, aki a 19. században kereskedelmi állomást létesített itt. Jacqueville korábban 'Half-Jack' néven volt ismert, és a pálmaolaj-export egyik legfontosabb központjává fejlődött. A város építészete egyedülálló a számos jól megőrzött gyarmati raktárnak és lakóháznak köszönhetően, amelyek egykor brit és francia kereskedelmi cégek tulajdonában voltak. A régiót lakó alladian nép központi szerepet játszott az európai hatalmak és a hátország közötti kereskedelemben. Jacqueville a rabszolga-kereskedelem korszakában is jelentős helyszín volt. Ma a város népszerű kirándulóhely, de történelmi épületei és a kereskedőcsaládok történetei az elefántcsontparti tengeri és gazdasági múlt értékes műemlékévé teszik.",
            "ro": "Jacqueville, situat pe o peninsulă între laguna Ébrié și Oceanul Atlantic, este un loc cu un trecut colonial profund. Numele său provine de la căpitanul britanic Jack, care a înființat aici un post comercial în secolul al XIX-lea. Jacqueville era cunoscut anterior sub numele de „Half-Jack” și s-a dezvoltat într-unul dintre cele mai importante centre pentru exportul de ulei de palmier. Arhitectura orașului este unică datorită numeroaselor depozite și locuințe coloniale bine conservate, care au aparținut odinioară companiilor comerciale britanice și franceze. Poporul Alladian, care locuiește în regiune, a jucat un rol central în comerțul dintre puterile europene și interiorul țării. Jacqueville a fost, de asemenea, un loc semnificativ în timpul erei comerțului cu sclavi. Astăzi, orașul este o destinație populară, dar structura sa istorică și poveștile familiilor de comercianți îl fac un monument valoros al istoriei maritime și economice a Coastei de Fildeș.",
            "en": "Jacqueville, uniquely positioned on a narrow peninsula between the Ébrié Lagoon and the Atlantic Ocean, possesses a dense colonial history. Its name is derived from the 19th-century British sea captain Jack, who established a strategic trading post here. Historically referred to as 'Half-Jack,' the town evolved into a preeminent center for the lucrative palm oil trade. The urban landscape is distinguished by its remarkably preserved colonial-era warehouses and merchant houses, which once served as the headquarters for prominent British and French trading firms. The indigenous Alladian people were central intermediaries in the commerce between European powers and the hinterland groups. Jacqueville also served as a significant site during the transatlantic slave trade period. Today, while appreciated as a coastal retreat, its architectural integrity and the legacy of its trading dynasties render it an invaluable monument to Ivory Coast's maritime and economic evolution."
        },
        "factsAdvanced": {
            "de": [
                "Ursprünglicher Name 'Half-Jack' nach einem britischen Kapitän.",
                "Eines der wichtigsten Zentren des Palmölhandels im 19. Jh.",
                "Zentrum des Alladian-Volkes und ihrer Lagunenkultur.",
                "Gut erhaltene britische und französische Kolonialarchitektur.",
                "Historisch bedeutsamer Ort des frühen Sklavenhandels.",
                "Wurde erst 2015 durch eine Brücke mit dem Festland verbunden."
            ],
            "hu": [
                "Eredeti neve 'Half-Jack' egy brit kapitány után.",
                "A pálmaolaj-kereskedelem egyik legfontosabb központja a 19. században.",
                "Az alladian nép és lagúnakultúrájuk központja.",
                "Jól megőrzött brit és francia gyarmati építészet.",
                "A korai rabszolga-kereskedelem történelmileg jelentős helyszíne.",
                "Csak 2015-ben kapcsolták össze híddal a szárazfölddel."
            ],
            "ro": [
                "Numele original „Half-Jack”, după un căpitan britanic.",
                "Unul dintre cele mai importante centre ale comerțului cu ulei de palmier în sec. XIX.",
                "Centrul poporului Alladian și al culturii lor lagunare.",
                "Arhitectură colonială britanică și franceză bine conservată.",
                "Loc semnificativ din punct de vedere istoric al comerțului timpuriu cu sclavi.",
                "Conectat de continent printr-un pod abia în anul 2015."
            ],
            "en": [
                "Formerly known as 'Half-Jack' in honor of a British naval captain.",
                "Ranked as a premier West African hub for palm oil exports in the 1800s.",
                "Serves as the ancestral and cultural home of the Alladian people.",
                "Features an array of intact British and French mercantile architecture.",
                "Holds a somber history as a site of early transatlantic slave trading.",
                "Remained accessible only by ferry until the opening of its first bridge in 2015."
            ]
        }
    },
    {
        "id": "agboville-abbey-revolt-history-v2",
        "descriptionAdvanced": {
            "de": "Agboville, nordöstlich von Abidjan, ist ein Ort von großer symbolischer Bedeutung für den antikolonialen Kampf in der Elfenbeinküste. Die Stadt ist das Zentrum des Abbey-Volkes und wurde 1910 Schauplatz eines massiven Aufstands gegen die französische Kolonialverwaltung. Der Abbey-Aufstand war eine Reaktion auf die Einführung von Kopfsteuern, Zwangsarbeit und die Enteignung von Land für Kautschukplantagen. Die Rebellen unterbrachen die lebenswichtige Eisenbahnlinie Abidjan-Niger und griffen koloniale Außenposten an, was eine brutale militärische Reaktion der Franzosen zur Folge hatte. Agboville entwickelte sich dennoch zu einem wichtigen landwirtschaftlichen Zentrum, besonders für den Kaffee- und Kakaosektor. Die Geschichte der Stadt ist geprägt von diesem Geist des Widerstands und der Bewahrung der Abbey-Identität. Heute erinnern historische Plätze und die Erzählungen der Ältesten an diese mutige Episode der ivorischen Geschichte, die den Weg für spätere Unabhängigkeitsbewegungen ebnete.",
            "hu": "Az Abidjantól északkeletre fekvő Agboville nagy szimbolikus jelentőségű hely Elefántcsontpart gyarmatellenes küzdelmében. A város az abbey nép központja, és 1910-ben a francia gyarmati közigazgatás elleni masszív felkelés színhelye volt. Az Abbey-lázadás a fejadó bevezetése, a kényszermunka és a gumitermeléshez kapcsolódó földkisajátítások elleni válasz volt. A lázadók megszakították a létfontosságú Abidjan-Niger vasútvonalat és gyarmati előőrsöket támadtak meg, ami a franciák brutális katonai válaszát vonta maga után. Agboville ennek ellenére fontos mezőgazdasági központtá fejlődött, különösen a kávé- és kakaószektorban. A város történetét az ellenállás szelleme és az abbey identitás megőrzése határozza meg. Ma történelmi terek és az idősek elbeszélései emlékeztetnek az elefántcsontparti történelemnek erre a bátor epizódjára, amely kikövezte az utat a későbbi függetlenségi mozgalmak előtt.",
            "ro": "Agboville, situat la nord-est de Abidjan, este un loc de o mare importanță simbolică pentru lupta anticolonială din Coasta de Fildeș. Orașul este centrul poporului Abbey și a fost scena unei revolte masive împotriva administrației coloniale franceze în 1910. Revolta Abbey a fost o reacție la introducerea impozitelor pe cap de locuitor, a muncii forțate și a exproprierii terenurilor pentru plantațiile de cauciuc. Rebelii au întrerupt linia feroviară vitală Abidjan-Niger și au atacat avanposturile coloniale, ceea ce a dus la o reacție militară brutală din partea francezilor. Cu toate acestea, Agboville s-a dezvoltat într-un centru agricol important, în special pentru sectorul cafelei și cacauei. Istoria orașului este marcată de acest spirit de rezistență și de păstrarea identității Abbey. Astăzi, locurile istorice și poveștile bătrânilor amintesc de acest episod curajos din istoria ivoriană, care a deschis calea pentru mișcările de independență ulterioare.",
            "en": "Agboville, situated northeast of Abidjan, is a site of immense symbolic weight in the narrative of anti-colonial defiance in Ivory Coast. Serving as the heartland of the Abbey people, the town became the epicenter of a massive armed insurrection against French colonial rule in 1910. Known as the Abbey Revolt, this uprising was a direct response to the imposition of poll taxes, forced labor, and the seizure of ancestral lands for rubber plantations. Insurgents strategically sabotaged the Abidjan-Niger railway and launched assaults on colonial outposts, prompting a severe military retaliation from the French. Despite this period of turmoil, Agboville flourished as a major agricultural hub, particularly within the burgeoning cocoa and coffee sectors. The town's identity is indelibly shaped by this spirit of resistance and the preservation of Abbey cultural integrity. Today, its historical landmarks and oral traditions commemorate this courageous chapter, which laid the ideological groundwork for the nation's later independence movements."
        },
        "factsAdvanced": {
            "de": [
                "Hauptort des Abbey-Volkes und Zentrum ihres Widerstands.",
                "Schauplatz des Abbey-Aufstands gegen die Kolonialmacht im Jahr 1910.",
                "Wichtige Station der Eisenbahnlinie Abidjan-Niger seit 1904.",
                "Historisches Zentrum für den Kautschuk- und Holzhandel.",
                "Erste Region mit intensiver Kakao- und Kaffeeproduktion.",
                "Hauptstadt der Region Agnéby-Tiassa mit kolonialem Erbe."
            ],
            "hu": [
                "Az abbey nép fő települése és ellenállásuk központja.",
                "Az 1910-es gyarmatellenes Abbey-felkelés színhelye.",
                "Az Abidjan-Niger vasútvonal fontos állomása 1904 óta.",
                "A gumi- és faanyag-kereskedelem történelmi központja.",
                "Az intenzív kakaó- és kávétermelés első régiója.",
                "Agnéby-Tiassa régió fővárosa gyarmati örökséggel."
            ],
            "ro": [
                "Localitatea principală a poporului Abbey și centrul rezistenței lor.",
                "Scena revoltei Abbey împotriva puterii coloniale în anul 1910.",
                "Stație importantă pe linia feroviară Abidjan-Niger din 1904.",
                "Centru istoric pentru comerțul cu cauciuc și lemn.",
                "Prima regiune cu o producție intensă de cacao și cafea.",
                "Capitala regiunii Agnéby-Tiassa, cu o bogată moștenire colonială."
            ],
            "en": [
                "Primary cultural capital and stronghold of the Abbey people.",
                "The focal point of the historic 1910 Abbey Revolt against France.",
                "Established as a key railway stop on the Abidjan-Niger line in 1904.",
                "Historically significant for the early rubber and timber industries.",
                "Pioneering region for large-scale coffee and cocoa cultivation.",
                "Serves as the administrative capital of the Agnéby-Tiassa region."
            ]
        }
    },
    {
        "id": "dimbokro-historic-viaduct-history-v2",
        "descriptionAdvanced": {
            "de": "Dimbokro, am Ufer des N'Zi-Flusses gelegen, ist berühmt für sein beeindruckendes Eisenbahnviadukt, ein Meisterwerk kolonialer Ingenieurskunst aus dem Jahr 1910. Das Viadukt ist Teil der historischen Abidjan-Niger-Bahn und war entscheidend für die Erschließung des Landesinneren der Elfenbeinküste. Die Geschichte von Dimbokro ist jedoch nicht nur technischer Natur: Die Stadt wurde 1950 Schauplatz eines blutigen Ereignisses während des Unabhängigkeitskampfes. Bei einem Protest gegen die Verhaftung von Führern der RDA-Partei eröffneten die Kolonialbehörden das Feuer auf die Menge, was mehrere Todesopfer forderte. Dieses Ereignis machte Dimbokro zu einem heiligen Ort für die ivorische Nationalbewegung. Die Architektur der Stadt mit ihren alten Kolonialgebäuden und dem stählernen Viadukt erzählt von den Ambitionen der Vergangenheit, während die Denkmäler an die Opfer des Kampfes für die Freiheit erinnern. Dimbokro bleibt ein wichtiger Knotenpunkt, der die industrielle Entwicklung mit dem politischen Erwachen des Landes verbindet.",
            "hu": "Az N'Zi-folyó partján fekvő Dimbokro híres lenyűgöző vasúti viaduktjáról, amely az 1910-ből származó gyarmati mérnöki munka mesterműve. A viadukt a történelmi Abidjan-Niger vasútvonal része, és döntő fontosságú volt Elefántcsontpart belső területeinek feltárásában. Dimbokro története azonban nem csak technikai jellegű: a város 1950-ben a függetlenségi harc egyik véres eseményének színhelye volt. Az RDA párt vezetőinek letartóztatása elleni tüntetés során a gyarmati hatóságok tüzet nyitottak a tömegre, ami több halálos áldozatot követelt. Ez az esemény Dimbokrót az elefántcsontparti nemzeti mozgalom szent helyévé tette. A város építészete régi gyarmati épületeivel és az acél viadukttal a múlt ambícióiról mesél, míg a szabadságharc áldozatainak emlékművei a küzdelemre emlékeztetnek. Dimbokro továbbra is fontos csomópont, amely összeköti az ipari fejlődést az ország politikai ébredésével.",
            "ro": "Dimbokro, situat pe malul râului N'Zi, este faimos pentru viaductul său feroviar impresionant, o capodoperă a ingineriei coloniale din anul 1910. Viaductul face parte din linia istorică Abidjan-Niger și a fost crucial pentru deschiderea interiorului Coastei de Fildeș. Cu toate acestea, istoria orașului Dimbokro nu este doar una tehnică: orașul a fost scena unui eveniment sângeros în 1950, în timpul luptei pentru independență. În timpul unui protest împotriva arestării liderilor partidului RDA, autoritățile coloniale au deschis focul asupra mulțimii, provocând mai mulți morți. Acest eveniment a transformat Dimbokro într-un loc sacru pentru mișcarea națională ivoriană. Arhitectura orașului, cu vechile sale clădiri coloniale și viaductul din oțel, vorbește despre ambițiile trecutului, în timp ce monumentele amintesc de victimele luptei pentru libertate. Dimbokro rămâne un nod important care leagă dezvoltarea industrială de trezirea politică a țării.",
            "en": "Dimbokro, gracefully situated along the banks of the N'Zi River, is renowned for its spectacular railway viaduct, a landmark of colonial engineering completed in 1910. This steel structure is a vital link in the Abidjan-Niger railway line, which historically facilitated the integration of the Ivorian interior into the global economy. However, Dimbokro's significance extends far beyond its industrial heritage; the town is a sacred site in the history of the nation's struggle for sovereignty. In January 1950, during a protest against the unjust arrest of RDA (Rassemblement Démocratique Africain) leaders, colonial forces fired upon a crowd of demonstrators, resulting in several fatalities. This tragic event solidified Dimbokro's status as a bastion of Ivorian nationalism. The urban landscape, featuring early 20th-century colonial residences alongside the iconic viaduct, reflects the dual legacy of technological ambition and political awakening. Dimbokro remains a critical junction where the history of industrialization meets the courageous narrative of the fight for independence."
        },
        "factsAdvanced": {
            "de": [
                "Berühmt für das 1910 erbaute Eisenbahnviadukt über den N'Zi.",
                "Wichtige Station der historischen Abidjan-Niger-Bahn.",
                "Schauplatz des blutigen antikolonialen Protests von 1950.",
                "Geburtsort des Präsidenten Alassane Ouattara.",
                "Ehemaliges Zentrum der Textil- und Agrarindustrie.",
                "Strategischer Knotenpunkt im Zentrum der Elfenbeinküste."
            ],
            "hu": [
                "Híres az 1910-ben épült vasúti viaduktról az N'Zi folyó felett.",
                "A történelmi Abidjan-Niger vasútvonal fontos állomása.",
                "Az 1950-es véres gyarmatellenes tüntetés színhelye.",
                "Alassane Ouattara elnök szülőhelye.",
                "A textil- és agráripar egykori központja.",
                "Stratégiai csomópont Elefántcsontpart közepén."
            ],
            "ro": [
                "Faimos pentru viaductul feroviar construit în 1910 peste râul N'Zi.",
                "Stație importantă pe calea ferată istorică Abidjan-Niger.",
                "Scena protestului anticolonial sângeros din anul 1950.",
                "Locul de naștere al președintelui Alassane Ouattara.",
                "Fost centru al industriei textile și agricole.",
                "Nod strategic în centrul Coastei de Fildeș."
            ],
            "en": [
                "Famous for the iconic steel railway viaduct completed in 1910.",
                "Serves as a vital logistical stop on the Abidjan-Niger line.",
                "Site of a pivotal and tragic anti-colonial demonstration in 1950.",
                "Birthplace of the current President Alassane Ouattara.",
                "Once a major regional hub for the textile and cotton sectors.",
                "A strategic geographic crossroads in the nation's central district."
            ]
        }
    },
    {
        "id": "gagnoa-bete-center-history-v2",
        "descriptionAdvanced": {
            "de": "Gagnoa, gelegen im fruchtbaren Südwesten der Elfenbeinküste, ist das unangefochtene kulturelle Zentrum des Bété-Volkes. Die Geschichte der Stadt ist eng mit dem Aufstieg der Kakao- und Kaffeeproduktion verknüpft, die Gagnoa während der Kolonialzeit zu einem wirtschaftlichen Kraftzentrum machte. Die Stadt wurde 1912 von den Franzosen als administrativer Hauptort gegründet und entwickelte sich schnell zu einem Schmelztiegel für Migranten aus dem ganzen Land. Gagnoa hat jedoch auch eine bewegte politische Geschichte; es war das Zentrum mehrerer politischer Krisen und Widerstandsbewegungen in den 1970er Jahren, die die nationale Politik prägten. Die Bété-Kultur, bekannt für ihre ausdrucksstarken Tänze, die traditionelle Webkunst und die reiche orale Literatur, findet in Gagnoa ihren stärksten Ausdruck. Die Mischung aus kolonialer Verwaltungsarchitektur, pulsierenden Märkten und tief verwurzelten Traditionen macht Gagnoa zu einem Schlüsselort für das Verständnis der sozialen Dynamik und der kulturellen Identität der Elfenbeinküste.",
            "hu": "Az ország termékeny délnyugati részén fekvő Gagnoa a bété nép vitathatatlan kulturális központja. A város története szorosan összefonódik a kakaó- és kávétermelés felemelkedésével, amely Gagnoát a gyarmati korszak gazdasági központjává tette. A várost 1912-ben alapították a franciák közigazgatási székhelyként, és gyorsan az ország minden részéből érkező bevándorlók olvasztótégelyévé vált. Gagnoa azonban mozgalmas politikai múlttal is rendelkezik; az 1970-es években több olyan politikai válság és ellenállási mozgalom központja volt, amely meghatározta a nemzeti politikát. A bété kultúra, amely kifejező táncairól, hagyományos szövőművészetéről és gazdag szóbeli irodalmáról ismert, Gagnoában találja meg legerősebb kifejeződését. A gyarmati közigazgatási építészet, a lüktető piacok és a mélyen gyökerező hagyományok ötvözete Gagnoát Elefántcsontpart társadalmi dinamikájának és kulturális identitásának megértéséhez kulcsfontosságú helyszínné teszi.",
            "ro": "Gagnoa, situat în sud-vestul fertil al Coastei de Fildeș, este centrul cultural incontestabil al poporului Bété. Istoria orașului este strâns legată de ascensiunea producției de cacao și cafea, care a transformat Gagnoa într-un motor economic în timpul perioadei coloniale. Orașul a fost fondat în 1912 de francezi ca reședință administrativă și s-a dezvoltat rapid într-un creuzet pentru migranții din întreaga țară. Cu toate acestea, Gagnoa are și o istorie politică agitată; a fost centrul mai multor crize politice și mișcări de rezistență în anii 1970, care au modelat politica națională. Cultura Bété, cunoscută pentru dansurile sale expresive, arta tradițională a țesutului și literatura orală bogată, își găsește cea mai puternică exprimare în Gagnoa. Amestecul de arhitectură administrativă colonială, piețe vibrante și tradiții profund înrădăcinate face din Gagnoa un loc cheie pentru înțelegerea dinamicii sociale și a identității culturale a Coastei de Fildeș.",
            "en": "Gagnoa, nestled in the fertile southwestern landscapes of Ivory Coast, serves as the undisputed cultural heartland of the Bété people. Its history is inextricably linked to the massive expansion of cocoa and coffee production, which transformed Gagnoa into an economic powerhouse during the French colonial era. Officially established as an administrative capital in 1912, the town rapidly became a vibrant melting pot for migrants from across West Africa. However, Gagnoa also possesses a volatile political legacy; it was the epicenter of significant social unrest and political movements in the 1970s that left a lasting impact on national governance. Bété culture, renowned for its dynamic dance forms, traditional weaving techniques, and rich oral literature, finds its most profound expression here. The fusion of colonial-era administrative architecture, bustling commercial markets, and deeply anchored ancestral traditions renders Gagnoa a crucial site for understanding the social dynamics and cultural identity of the modern Ivorian state."
        },
        "factsAdvanced": {
            "de": [
                "Kulturelles und politisches Zentrum des Bété-Volkes.",
                "Gegründet 1912 als französischer Verwaltungsstützpunkt.",
                "Wichtiges Zentrum der Kakao- und Kaffeeindustrie.",
                "Bekannt für traditionelle Bété-Tänze und Webkunst.",
                "Schauplatz bedeutender politischer Krisen in den 1970ern.",
                "Wichtiger Marktplatz für Nahrungsmittel im Südwesten."
            ],
            "hu": [
                "A bété nép kulturális és politikai központja.",
                "1912-ben alapították francia közigazgatási bázisként.",
                "A kakaó- és kávéipar fontos központja.",
                "A hagyományos bété táncokról és szövőművészetről ismert.",
                "Jelentős politikai válságok színhelye az 1970-es években.",
                "Fontos élelmiszerpiac a délnyugati régióban."
            ],
            "ro": [
                "Centrul cultural și politic al poporului Bété.",
                "Fondat în 1912 ca bază administrativă franceză.",
                "Centru important al industriei de cacao și cafea.",
                "Cunoscut pentru dansurile tradiționale Bété și arta țesutului.",
                "Scena unor crize politice majore în anii 1970.",
                "Piață importantă pentru produse alimentare în sud-vest."
            ],
            "en": [
                "Sovereign cultural and political center of the Bété ethnic group.",
                "Established in 1912 as a primary French administrative headquarters.",
                "A major engine of the national cocoa and coffee economy.",
                "Renowned for expressive Bété ceremonial dances and textile arts.",
                "Site of critical political and social movements during the 1970s.",
                "Serves as a leading commercial hub for agricultural produce in the southwest."
            ]
        }
    }
]

data["items"].extend(new_items)

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
