
import re

file_path = r'C:\Users\User\plizio-repo\lib\visualLab\data\francePoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

faqs = {
    "FR": {
        "de": [
            {"q": "Was ist die offizielle Landessprache Frankreichs?", "a": "Die offizielle Landessprache ist Französisch, wobei es zahlreiche regionale Dialekte und Sprachen wie Bretonisch oder Okzitanisch gibt."},
            {"q": "Wie viele Nachbarländer hat Frankreich auf dem europäischen Festland?", "a": "Frankreich grenzt an acht Länder: Belgien, Luxemburg, Deutschland, Schweiz, Italien, Monaco, Spanien und Andorra."},
            {"q": "Welches ist der höchste Punkt Frankreichs?", "a": "Der höchste Punkt ist der Mont Blanc in den Alpen mit einer Höhe von etwa 4.807 Metern."},
            {"q": "Wann ist der Nationalfeiertag in Frankreich?", "a": "Der Nationalfeiertag ist der 14. Juli, der an den Sturm auf die Bastille im Jahr 1789 erinnert."},
            {"q": "Wie groß ist die Gesamtfläche Frankreichs?", "a": "Frankreich ist mit einer Fläche von etwa 551.695 km² das größte Land in der Europäischen Union (ohne Überseegebiete)."}
        ],
        "hu": [
            {"q": "Mi Franciaország hivatalos nyelve?", "a": "A hivatalos nyelv a francia, de számos regionális nyelv és dialektus létezik, mint például a breton vagy az okcitán."},
            {"q": "Hány szomszédos országa van Franciaországnak az európai szárazföldön?", "a": "Franciaország nyolc országgal határos: Belgiummal, Luxemburggal, Németországgal, Svájccal, Olaszországgal, Monacóval, Spanyolországgal és Andorrával."},
            {"q": "Melyik Franciaország legmagasabb pontja?", "a": "A legmagasabb pont az Alpokban található Mont Blanc, amely körülbelül 4807 méter magas."},
            {"q": "Mikor van a francia nemzeti ünnep?", "a": "A nemzeti ünnep július 14-én van, amely a Bastille 1789-es ostromára emlékeztet."},
            {"q": "Mekkora Franciaország teljes területe?", "a": "Franciaország körülbelül 551 695 km²-es területével az Európai Unió legnagyobb országa (a tengerentúli területek nélkül)."}
        ],
        "ro": [
            {"q": "Care este limba oficială a Franței?", "a": "Limba oficială este franceza, deși există numeroase dialecte și limbi regionale, cum ar fi bretona sau occitana."},
            {"q": "Câte țări vecine are Franța pe continentul european?", "a": "Franța se învecinează cu opt țări: Belgia, Luxemburg, Germania, Elveția, Italia, Monaco, Spania și Andorra."},
            {"q": "Care este cel mai înalt punct din Franța?", "a": "Cel mai înalt punct este Mont Blanc din Alpi, cu o înălțime de aproximativ 4.807 metri."},
            {"q": "Când este ziua națională a Franței?", "a": "Ziua națională este 14 iulie, comemorând căderea Bastiliei în anul 1789."},
            {"q": "Care este suprafața totală a Franței?", "a": "Franța este cea mai mare țară din Uniunea Europeană, cu o suprafață de aproximativ 551.695 km² (fără teritoriile de peste mări)."}
        ],
        "en": [
            {"q": "What is the official language of France?", "a": "The official language is French, although there are numerous regional dialects and languages such as Breton or Occitan."},
            {"q": "How many neighboring countries does France have on the European mainland?", "a": "France borders eight countries: Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and Andorra."},
            {"q": "What is the highest point in France?", "a": "The highest point is Mont Blanc in the Alps, with an elevation of approximately 4,807 meters."},
            {"q": "When is the national holiday in France?", "a": "The national holiday is July 14th, commemorating the Storming of the Bastille in 1789."},
            {"q": "What is the total area of France?", "a": "France is the largest country in the European Union, with an area of about 551,695 km² (excluding overseas territories)."}
        ]
    },
    "FR-ARA": {
        "de": [
            {"q": "Welche bedeutende Stadt ist das Verwaltungszentrum von Auvergne-Rhône-Alpes?", "a": "Lyon ist das administrative Zentrum und die größte Stadt der Region."},
            {"q": "Welche Gebirgszüge prägen die Landschaft dieser Region?", "a": "Die Region wird maßgeblich von den Alpen im Osten und dem Zentralmassiv mit seinen Vulkanen im Westen geprägt."},
            {"q": "Für welche sportlichen Großereignisse ist die Region bekannt?", "a": "Die Region war bereits dreimal Gastgeber der Olympischen Winterspiele: Chamonix (1924), Grenoble (1968) und Albertville (1992)."},
            {"q": "Welches berühmte Mineralwasser stammt aus dieser Region?", "a": "Das weltweit bekannte Mineralwasser Evian stammt aus der Stadt Évian-les-Bains am Genfersee."},
            {"q": "Was ist der Nationalpark Vanoise?", "a": "Es ist der älteste Nationalpark Frankreichs, gegründet 1963, und liegt im Hochgebirge der Savoyer Alpen."}
        ],
        "hu": [
            {"q": "Melyik jelentős város az Auvergne-Rhône-Alpes régió közigazgatási központja?", "a": "Lyon a régió közigazgatási központja és legnagyobb városa."},
            {"q": "Mely hegyláncok határozzák meg a régió tájképét?", "a": "A régiót keleten az Alpok, nyugaton pedig a Francia-középhegység (Massif Central) vulkánjai határozzák meg."},
            {"q": "Milyen jelentős sporteseményekről ismert a régió?", "a": "A régió eddig háromszor adott otthont téli olimpiai játékoknak: Chamonix (1924), Grenoble (1968) és Albertville (1992)."},
            {"q": "Melyik híres ásványvíz származik ebből a régióból?", "a": "A világszerte ismert Evian ásványvíz a Genfi-tó partján fekvő Évian-les-Bains városából származik."},
            {"q": "Mi az a Vanoise Nemzeti Park?", "a": "Ez Franciaország legrégebbi nemzeti parkja, amelyet 1963-ban alapítottak a Savoyai-Alpokban."}
        ],
        "ro": [
            {"q": "Care este centrul administrativ al regiunii Auvergne-Rhône-Alpes?", "a": "Lyon este centrul administrativ și cel mai mare oraș al regiunii."},
            {"q": "Ce lanțuri muntoase definesc peisajul acestei regiuni?", "a": "Regiunea este marcată de Alpi în est și de Masivul Central cu vulcanii săi în vest."},
            {"q": "Pentru ce evenimente sportive majore este cunoscută regiunea?", "a": "Regiunea a găzduit de trei ori Jocurile Olimpice de iarnă: Chamonix (1924), Grenoble (1968) și Albertville (1992)."},
            {"q": "Ce apă minerală faimoasă provine din această regiune?", "a": "Apa minerală Evian, cunoscută la nivel mondial, provine din orașul Évian-les-Bains de pe malul lacului Geneva."},
            {"q": "Ce este Parcul Național Vanoise?", "a": "Este cel mai vechi parc național din Franța, fondat în 1963, situat în munții înalți ai Alpilor Savoiei."}
        ],
        "en": [
            {"q": "Which major city is the administrative center of Auvergne-Rhône-Alpes?", "a": "Lyon is the administrative center and the largest city of the region."},
            {"q": "What mountain ranges define the landscape of this region?", "a": "The region is significantly shaped by the Alps in the east and the Massif Central with its volcanoes in the west."},
            {"q": "For which major sporting events is the region known?", "a": "The region has hosted the Winter Olympics three times: Chamonix (1924), Grenoble (1968), and Albertville (1992)."},
            {"q": "Which famous mineral water originates from this region?", "a": "The world-famous Evian mineral water comes from the town of Évian-les-Bains on Lake Geneva."},
            {"q": "What is the Vanoise National Park?", "a": "It is the oldest national park in France, founded in 1963, located in the high mountains of the Savoy Alps."}
        ]
    },
    "FR-BFC": {
        "de": [
            {"q": "Wofür ist die Region Bourgogne-Franche-Comté gastronomisch besonders bekannt?", "a": "Neben den weltberühmten Burgunderweinen ist die Region vor allem für den Senf aus Dijon und den Comté-Käse bekannt."},
            {"q": "Welches architektonische Wahrzeichen findet man in Beaune?", "a": "Die Hospices de Beaune (Hôtel-Dieu) sind ein Meisterwerk der flämisch-gotischen Architektur aus dem 15. Jahrhundert."},
            {"q": "Welche Bedeutung hat die Stadt Besançon für die Technikgeschichte?", "a": "Besançon ist das historische Zentrum der französischen Uhrmacherkunst und Feinmechanik."},
            {"q": "Was zeichnet den Naturpark Morvan aus?", "a": "Der Morvan ist ein wasserreiches Mittelgebirge mit dichten Wäldern und großen Stauseen, ideal für Outdoor-Aktivitäten."},
            {"q": "Welche Rolle spielte die Abtei von Cluny im Mittelalter?", "a": "Die Abtei von Cluny war das Zentrum einer bedeutenden Klosterreform und zeitweise das größte Gotteshaus der Christenheit."}
        ],
        "hu": [
            {"q": "Miről híres gasztronómiailag Bourgogne-Franche-Comté régió?", "a": "A világhírű burgundi borok mellett a régió elsősorban a dijoni mustárról és a Comté sajtról ismert."},
            {"q": "Milyen építészeti nevezetesség található Beaune-ban?", "a": "A Hospices de Beaune (Hôtel-Dieu) a 15. századi flamand gótikus építészet remekműve."},
            {"q": "Milyen jelentősége van Besançon városának a technikatörténetben?", "a": "Besançon a francia óragyártás és finommechanika történelmi központja."},
            {"q": "Mi jellemzi a Morvan Natúrparkot?", "a": "A Morvan egy vizekben gazdag középhegység sűrű erdőkkel és nagy víztározókkal, ideális a szabadtéri tevékenységekhez."},
            {"q": "Milyen szerepet játszott a Clunyi apátság a középkorban?", "a": "A Clunyi apátság egy jelentős kolostori reformközpont volt, és egy időben a keresztény világ legnagyobb templomának számított."}
        ],
        "ro": [
            {"q": "Prin ce este renumită gastronomic regiunea Bourgogne-Franche-Comté?", "a": "Pe lângă vinurile de Burgundia renumite mondial, regiunea este cunoscută în special pentru muștarul de Dijon și brânza Comté."},
            {"q": "Ce reper arhitectural se află în Beaune?", "a": "Hospices de Beaune (Hôtel-Dieu) este o capodoperă a arhitecturii flamand-gotice din secolul al XV-lea."},
            {"q": "Ce importanță are orașul Besançon pentru istoria tehnologiei?", "a": "Besançon este centrul istoric al orologeriei franceze și al mecanicii de precizie."},
            {"q": "Ce caracterizează Parcul Natural Morvan?", "a": "Morvan este o zonă muntoasă joasă, bogată în ape, cu păduri dese și lacuri mari de acumulare, ideală pentru activități în aer liber."},
            {"q": "Ce rol a jucat Abația Cluny în Evul Mediu?", "a": "Abația Cluny a fost centrul unei importante reforme monahale și, pentru o perioadă, cel mai mare lăcaș de cult al creștinătății."}
        ],
        "en": [
            {"q": "What is the region of Bourgogne-Franche-Comté particularly known for gastronomically?", "a": "In addition to world-famous Burgundy wines, the region is primarily known for Dijon mustard and Comté cheese."},
            {"q": "Which architectural landmark can be found in Beaune?", "a": "The Hospices de Beaune (Hôtel-Dieu) is a 15th-century masterpiece of Flemish Gothic architecture."},
            {"q": "What significance does the city of Besançon have in the history of technology?", "a": "Besançon is the historical center of French watchmaking and precision mechanics."},
            {"q": "What characterizes the Morvan Natural Park?", "a": "The Morvan is a water-rich low mountain range with dense forests and large reservoirs, ideal for outdoor activities."},
            {"q": "What role did Cluny Abbey play in the Middle Ages?", "a": "Cluny Abbey was the center of a major monastic reform and was at one time the largest place of worship in Christendom."}
        ]
    },
    "FR-BRE": {
        "de": [
            {"q": "Welche prähistorische Stätte ist in der Bretagne besonders berühmt?", "a": "Carnac ist weltberühmt für seine Steinreihen (Menhire) aus der Jungsteinzeit."},
            {"q": "Welche Sprache wird neben Französisch traditionell in der Region gesprochen?", "a": "Bretonisch (Brezhoneg), eine keltische Sprache, wird von vielen Einheimischen gepflegt."},
            {"q": "Was ist eine 'Galette' in der bretonischen Küche?", "a": "Eine Galette ist ein herzhafter Buchweizenpfannkuchen, der meist mit Schinken, Ei und Käse gefüllt wird."},
            {"q": "Warum wird Saint-Malo oft als Korsarenstadt bezeichnet?", "a": "Die befestigte Hafenstadt war im 17. und 18. Jahrhundert eine Hochburg staatlich legitimierter Piraten (Korsaren)."},
            {"q": "Welches Wetterphänomen ist für die bretonische Küste charakteristisch?", "a": "Die Region ist bekannt für ihren starken Tidenhub, den Gezeitenunterschied, der zu den stärksten in Europa gehört."}
        ],
        "hu": [
            {"q": "Melyik prehisztorikus helyszín különösen híres Bretagne-ban?", "a": "Carnac világhírű az újkőkorszaki kősorairól (menhirjeiről)."},
            {"q": "Milyen nyelvet beszélnek hagyományosan a francia mellett a régióban?", "a": "A bretont (Brezhoneg), amely egy kelta nyelv, és sok helyi lakos ápolja."},
            {"q": "Mi az a 'galette' a breton konyhában?", "a": "A galette egy sós hajdinalisztből készült palacsinta, amelyet általában sonkával, tojással és sajttal töltenek."},
            {"q": "Miért nevezik Saint-Malo-t gyakran a kalózok városának?", "a": "Az erődített kikötőváros a 17. és 18. században az államilag engedélyezett kalózok (korszárok) fellegvára volt."},
            {"q": "Milyen időjárási jelenség jellemző a breton tengerpartra?", "a": "A régió híres az erős árapály-ingadozásáról, amely Európában az egyik legjelentősebb."}
        ],
        "ro": [
            {"q": "Ce sit preistoric este deosebit de faimos în Bretania?", "a": "Carnac este renumit la nivel mondial pentru aliniamentele sale de pietre (menhire) din perioada neolitică."},
            {"q": "Ce limbă se vorbește tradițional în regiune, pe lângă franceză?", "a": "Bretona (Brezhoneg), o limbă celtică, este păstrată de mulți localnici."},
            {"q": "Ce este o 'galette' în bucătăria bretonă?", "a": "O galette este o clătită sărată din hrișcă, umplută de obicei cu șuncă, ou și brânză."},
            {"q": "De ce este Saint-Malo numit adesea orașul corsarilor?", "a": "Orașul-port fortificat a fost o fortăreață a piraților legitimați de stat (corsari) în secolele XVII și XVIII."},
            {"q": "Ce fenomen meteorologic este caracteristic coastei bretone?", "a": "Regiunea este cunoscută pentru amplitudinea mare a mareelor, care sunt printre cele mai puternice din Europa."}
        ],
        "en": [
            {"q": "Which prehistoric site is particularly famous in Brittany?", "a": "Carnac is world-famous for its alignments of stones (menhirs) dating from the Neolithic period."},
            {"q": "What language is traditionally spoken in the region besides French?", "a": "Breton (Brezhoneg), a Celtic language, is preserved by many locals."},
            {"q": "What is a 'galette' in Breton cuisine?", "a": "A galette is a savory buckwheat pancake, usually filled with ham, egg, and cheese."},
            {"q": "Why is Saint-Malo often called a corsair city?", "a": "The fortified port city was a stronghold of state-sanctioned pirates (corsairs) in the 17th and 18th centuries."},
            {"q": "What weather phenomenon is characteristic of the Breton coast?", "a": "The region is known for its high tidal range, which is among the strongest in Europe."}
        ]
    },
    "FR-CVL": {
        "de": [
            {"q": "Wie viele Schlösser gibt es etwa im Loiretal?", "a": "Es gibt über 300 Schlösser im Loiretal, von denen etwa 50 für die Öffentlichkeit zugänglich sind."},
            {"q": "Welche berühmte historische Persönlichkeit befreite Orléans im 15. Jahrhundert?", "a": "Jeanne d'Arc (Johanna von Orléans) befreite die Stadt 1429 während des Hundertjährigen Krieges."},
            {"q": "Was ist das Besondere am Schloss Chenonceau?", "a": "Es ist auf Brückenpfeilern direkt über den Fluss Cher gebaut und wird auch 'Schloss der Damen' genannt."},
            {"q": "Welche Stadt in der Region ist für ihre perfekt erhaltene gotische Kathedrale mit berühmten Glasfenstern bekannt?", "a": "Chartres ist weltberühmt für seine Kathedrale Notre-Dame und das 'Chartres-Blau' ihrer Fenster."},
            {"q": "In welchem Schloss verbrachte Leonardo da Vinci seinen Lebensabend?", "a": "Leonardo da Vinci lebte und arbeitete bis zu seinem Tod im Schloss Clos Lucé in Amboise."}
        ],
        "hu": [
            {"q": "Körülbelül hány kastély található a Loire-völgyben?", "a": "A Loire-völgyben több mint 300 kastély található, amelyek közül mintegy 50 látogatható a nagyközönség számára."},
            {"q": "Melyik híres történelmi személy szabadította fel Orléans-t a 15. században?", "a": "Jeanne d'Arc (az orléans-i szűz) szabadította fel a várost 1429-ben a százéves háború idején."},
            {"q": "Mi a különleges a Chenonceau-i kastélyban?", "a": "Közvetlenül a Cher folyó feletti hidakra épült, és 'hölgyek kastélyának' is nevezik."},
            {"q": "Melyik város híres a tökéletesen megőrzött gótikus katedrálisáról és annak híres üvegablakairól?", "a": "Chartres világhírű a Notre-Dame székesegyházáról és az üvegablakok jellegzetes 'Chartres-i kék' színéről."},
            {"q": "Melyik kastélyban töltötte utolsó éveit Leonardo da Vinci?", "a": "Leonardo da Vinci az amboise-i Clos Lucé kastélyban élt és dolgozott haláláig."}
        ],
        "ro": [
            {"q": "Aproximativ câte castele există în Valea Loarei?", "a": "Există peste 300 de castele în Valea Loarei, dintre care aproximativ 50 sunt deschise publicului."},
            {"q": "Ce personalitate istorică celebră a eliberat Orléans în secolul al XV-lea?", "a": "Ioana d'Arc a eliberat orașul în 1429, în timpul Războiului de o sută de ani."},
            {"q": "Ce este special la Castelul Chenonceau?", "a": "Este construit pe piloni de pod direct peste râul Cher și este supranumit „Castelul Doamnelor”."},
            {"q": "Ce oraș din regiune este cunoscut pentru catedrala sa gotică perfect conservată, cu vitralii celebre?", "a": "Chartres este renumit în întreaga lume pentru Catedrala Notre-Dame și pentru „albastrul de Chartres” al vitraliilor sale."},
            {"q": "În ce castel și-a petrecut Leonardo da Vinci ultimii ani de viață?", "a": "Leonardo da Vinci a locuit și a lucrat până la moartea sa în Castelul Clos Lucé din Amboise."}
        ],
        "en": [
            {"q": "Approximately how many castles are there in the Loire Valley?", "a": "There are over 300 castles in the Loire Valley, about 50 of which are open to the public."},
            {"q": "Which famous historical figure liberated Orléans in the 15th century?", "a": "Joan of Arc liberated the city in 1429 during the Hundred Years' War."},
            {"q": "What is unique about the Château de Chenonceau?", "a": "It is built on bridge piers directly across the River Cher and is also known as the 'Ladies' Castle'."},
            {"q": "Which city in the region is known for its perfectly preserved Gothic cathedral with famous stained-glass windows?", "a": "Chartres is world-famous for its Notre-Dame Cathedral and the 'Chartres blue' of its windows."},
            {"q": "In which castle did Leonardo da Vinci spend the final years of his life?", "a": "Leonardo da Vinci lived and worked at the Château du Clos Lucé in Amboise until his death."}
        ]
    },
    "FR-COR": {
        "de": [
            {"q": "Warum wird Korsika auch 'Insel der Schönheit' genannt?", "a": "Den Namen verdankt sie ihrer enormen landschaftlichen Vielfalt auf engem Raum, von Sandstränden bis zu schneebedeckten Gipfeln."},
            {"q": "Welche kulinarische Spezialität ist typisch für die korsische Bergwelt?", "a": "Typisch sind Wurstwaren aus Schweinefleisch (wie Lonzu oder Coppa) und Käse aus Schaf- oder Ziegenmilch (Brocciu)."},
            {"q": "Was ist der 'GR 20'?", "a": "Der GR 20 ist ein legendärer Fernwanderweg, der Korsika diagonal von Nord nach Süd durchquert und als härtester Trek Europas gilt."},
            {"q": "Welche historische Verbindung besteht zwischen Ajaccio und Napoleon Bonaparte?", "a": "Napoleon Bonaparte wurde 1769 in Ajaccio geboren; sein Geburtshaus, die Maison Bonaparte, ist heute ein Museum."},
            {"q": "Was sind die 'Calanques de Piana'?", "a": "Es sind bizarre, rot leuchtende Felsformationen an der Westküste, die zum UNESCO-Weltnaturerbe gehören."}
        ],
        "hu": [
            {"q": "Miért nevezik Korzikát a 'szépség szigetének'?", "a": "Ezt a nevet a kis területen tapasztalható rendkívüli táji változatosságnak köszönheti, a homokos tengerpartoktól a hófödte csúcsokig."},
            {"q": "Milyen kulináris specialitás jellemző a korzikai hegyvidékre?", "a": "Jellemzőek a sertéshúsból készült felvágottak (mint a Lonzu vagy a Coppa) és a juh- vagy kecsketejből készült sajtok (Brocciu)."},
            {"q": "Mi az a 'GR 20'?", "a": "A GR 20 egy legendás hosszú távú túraútvonal, amely átlósan szeli át Korzikát és Európa legnehezebb túrájának tartják."},
            {"q": "Milyen történelmi kapcsolat van Ajaccio és Napóleon Bonaparte között?", "a": "Napóleon Bonaparte 1769-ben született Ajaccióban; szülőháza, a Maison Bonaparte, ma múzeum."},
            {"q": "Mik azok a 'Calanques de Piana'?", "a": "Ezek különleges, vörösen izzó sziklaképződmények a nyugati parton, amelyek az UNESCO természeti világörökségéhez tartoznak."}
        ],
        "ro": [
            {"q": "De ce este Corsica numită și „Insula Frumuseții”?", "a": "Își datorează numele diversității peisagistice enorme pe un spațiu restrâns, de la plaje cu nisip până la vârfuri înzăpezite."},
            {"q": "Ce specialitate culinară este tipică pentru zona montană din Corsica?", "a": "Sunt tipice preparatele din carne de porc (precum Lonzu sau Coppa) și brânzeturile din lapte de oaie sau capră (Brocciu)."},
            {"q": "Ce este „GR 20”?", "a": "GR 20 este un traseu legendar de drumeție care traversează Corsica pe diagonală de la nord la sud și este considerat cel mai dificil traseu din Europa."},
            {"q": "Ce legătură istorică există între Ajaccio și Napoleon Bonaparte?", "a": "Napoleon Bonaparte s-a născut la Ajaccio în 1769; casa sa natală, Maison Bonaparte, este astăzi muzeu."},
            {"q": "Ce sunt „Calanques de Piana”?", "a": "Sunt formațiuni stâncoase bizare, de culoare roșie, pe coasta de vest, care fac parte din Patrimoniul Mondial UNESCO."}
        ],
        "en": [
            {"q": "Why is Corsica also called the 'Island of Beauty'?", "a": "It owes this name to its enormous landscape diversity in a small area, from sandy beaches to snow-capped peaks."},
            {"q": "What culinary specialty is typical of the Corsican mountains?", "a": "Typical are pork charcuterie (such as Lonzu or Coppa) and cheeses made from sheep or goat milk (Brocciu)."},
            {"q": "What is the 'GR 20'?", "a": "The GR 20 is a legendary long-distance hiking trail that crosses Corsica diagonally from north to south and is considered the toughest trek in Europe."},
            {"q": "What historical connection exists between Ajaccio and Napoleon Bonaparte?", "a": "Napoleon Bonaparte was born in Ajaccio in 1769; his birthplace, Maison Bonaparte, is now a museum."},
            {"q": "What are the 'Calanques de Piana'?", "a": "They are bizarre, glowing red rock formations on the west coast that are part of the UNESCO World Natural Heritage."}
        ]
    },
    "FR-GES": {
        "de": [
            {"q": "Was ist das bekannteste Exportprodukt der Region Grand Est?", "a": "Der Champagner, der ausschließlich in der gleichnamigen Weinbauregion rund um Reims und Épernay produziert werden darf."},
            {"q": "Welche europäische Bedeutung hat Straßburg?", "a": "Straßburg ist einer der Hauptsitze der Europäischen Union und beherbergt das Europäische Parlament sowie den Europarat."},
            {"q": "Welche Gebirgsregion bietet ideale Bedingungen für Wandern und Skifahren?", "a": "Die Vogesen (Les Vosges) sind ein Mittelgebirge im Osten der Region mit zahlreichen Seen und markierten Wanderwegen."},
            {"q": "Warum wird Colmar oft als 'Klein-Venedig' bezeichnet?", "a": "Das Viertel 'La Petite Venise' besticht durch seine Fachwerkhäuser direkt am Fluss Lauch, die man mit kleinen Booten befahren kann."},
            {"q": "Welche historische Bedeutung hat die Stadt Reims für die französische Monarchie?", "a": "In der Kathedrale von Reims wurden über Jahrhunderte hinweg fast alle französischen Könige gekrönt."}
        ],
        "hu": [
            {"q": "Mi a Grand Est régió legismertebb exportterméke?", "a": "A pezsgő (Champagne), amelyet kizárólag az azonos nevű borvidéken, Reims és Épernay környékén szabad előállítani."},
            {"q": "Milyen európai jelentősége van Strasbourgnak?", "a": "Strasbourg az Európai Unió egyik fő székhelye, itt található az Európai Parlament és az Európa Tanács is."},
            {"q": "Melyik hegyvidék kínál ideális feltételeket a túrázáshoz és a síeléshez?", "a": "A Vogézek (Les Vosges) egy középhegység a régió keleti részén, számos tóval és jelzett túraúttal."},
            {"q": "Miért nevezik Colmart gyakran 'Kis Velencének'?", "a": "A 'La Petite Venise' negyed a Lauch folyó partján álló favázas házaival bűvöli el a látogatókat, ahol csónakázni is lehet."},
            {"q": "Milyen történelmi jelentősége van Reims városának a francia monarchia számára?", "a": "A reimsi katedrálisban évszázadokon keresztül szinte minden francia királyt megkoronáztak."}
        ],
        "ro": [
            {"q": "Care este cel mai cunoscut produs de export al regiunii Grand Est?", "a": "Șampania, care poate fi produsă exclusiv în regiunea viticolă cu același nume, din jurul orașelor Reims și Épernay."},
            {"q": "Ce importanță europeană are Strasbourg?", "a": "Strasbourg este unul dintre sediile principale ale Uniunii Europene și găzduiește Parlamentul European și Consiliul Europei."},
            {"q": "Ce regiune muntoasă oferă condiții ideale pentru drumeții și schi?", "a": "Munții Vosgi (Les Vosges) sunt un lanț muntos în estul regiunii, cu numeroase lacuri și trasee marcate."},
            {"q": "De ce este Colmar supranumit adesea „Mica Veneție”?", "a": "Cartierul „La Petite Venise” impresionează prin casele cu bârne de lemn situate direct pe râul Lauch, pe care se poate naviga cu barca."},
            {"q": "Ce importanță istorică are orașul Reims pentru monarhia franceză?", "a": "În Catedrala din Reims au fost încoronați, timp de secole, aproape toți regii Franței."}
        ],
        "en": [
            {"q": "What is the most famous export product of the Grand Est region?", "a": "Champagne, which may only be produced in the wine region of the same name around Reims and Épernay."},
            {"q": "What European significance does Strasbourg have?", "a": "Strasbourg is one of the main seats of the European Union and houses the European Parliament and the Council of Europe."},
            {"q": "Which mountain region offers ideal conditions for hiking and skiing?", "a": "The Vosges (Les Vosges) are a low mountain range in the east of the region with numerous lakes and marked trails."},
            {"q": "Why is Colmar often called 'Little Venice'?", "a": "The 'La Petite Venise' district charms with its half-timbered houses directly on the Lauch River, which can be explored by small boats."},
            {"q": "What historical significance does the city of Reims have for the French monarchy?", "a": "For centuries, almost all French kings were crowned in Reims Cathedral."}
        ]
    },
    "FR-HDF": {
        "de": [
            {"q": "Wie heißt der Tunnel, der die Region mit England verbindet?", "a": "Der Eurotunnel (Kanaltunnel) verbindet Coquelles bei Calais direkt mit Folkestone in England."},
            {"q": "Was ist die 'Grande Braderie de Lille'?", "a": "Es ist der größte Flohmarkt Europas, der jedes Jahr am ersten Septemberwochenende Millionen Besucher nach Lille lockt."},
            {"q": "Welche kulinarische Spezialität ist typisch für den Norden Frankreichs?", "a": "Typisch sind 'Moules-frites' (Muscheln mit Pommes) und die flämisch inspirierten Eintöpfe (Carbonnade flamande)."},
            {"q": "Welche architektonische Besonderheit weisen viele Rathäuser im Norden auf?", "a": "Viele Städte besitzen prachtvolle Belfriede (Beffrois), historische Wachtürme, die zum UNESCO-Weltkulturerbe gehören."},
            {"q": "Warum ist die Somme-Bucht (Baie de Somme) ökologisch bedeutend?", "a": "Sie ist eines der schönsten Ästuare der Welt und ein wichtiges Schutzgebiet für Robben und Zugvögel."}
        ],
        "hu": [
            {"q": "Hogy hívják az alagutat, amely a régiót összeköti Angliával?", "a": "Az Eurotunnel (Csatorna-alagút) közvetlenül köti össze a Calais melletti Coquelles-t az angliai Folkestone-nal."},
            {"q": "Mi az a 'Grande Braderie de Lille'?", "a": "Ez Európa legnagyobb bolhapiaca, amely minden év szeptember első hétvégéjén látogatók millióit vonzza Lille-be."},
            {"q": "Milyen kulináris specialitás jellemző Észak-Franciaországra?", "a": "Jellemzőek a 'Moules-frites' (kagyló sült krumplival) és a flamand ihletésű pörköltek (Carbonnade flamande)."},
            {"q": "Milyen építészeti sajátossággal rendelkezik sok északi városháza?", "a": "Sok városban találhatók pompás harangtornyok (beffrois), történelmi őrtornyok, amelyek az UNESCO világörökség részét képezik."},
            {"q": "Miért ökológiailag jelentős a Somme-öböl (Baie de Somme)?", "a": "Ez a világ egyik legszebb torkolata, és fontos védett terület a fókák és költöző madarak számára."}
        ],
        "ro": [
            {"q": "Cum se numește tunelul care leagă regiunea de Anglia?", "a": "Eurotunelul (Tunelul Canalului Mânecii) leagă Coquelles, lângă Calais, direct de Folkestone în Anglia."},
            {"q": "Ce este „Grande Braderie de Lille”?", "a": "Este cea mai mare piață de vechituri din Europa, care atrage milioane de vizitatori la Lille în fiecare an, în primul weekend din septembrie."},
            {"q": "Ce specialitate culinară este tipică pentru nordul Franței?", "a": "Tipice sunt „Moules-frites” (midii cu cartofi prăjiți) și tocănițele de inspirație flamandă (Carbonnade flamande)."},
            {"q": "Ce particularitate arhitecturală au multe primării din nord?", "a": "Multe orașe au clopotnițe superbe (beffrois), turnuri istorice de veghe care fac parte din Patrimoniul Mondial UNESCO."},
            {"q": "De ce este Golful Somme (Baie de Somme) important din punct de vedere ecologic?", "a": "Este unul dintre cele mai frumoase estuare din lume și o arie protejată importantă pentru foci și păsări migratoare."}
        ],
        "en": [
            {"q": "What is the name of the tunnel that connects the region to England?", "a": "The Channel Tunnel (Eurotunnel) connects Coquelles near Calais directly with Folkestone in England."},
            {"q": "What is the 'Grande Braderie de Lille'?", "a": "It is the largest flea market in Europe, attracting millions of visitors to Lille every year on the first weekend of September."},
            {"q": "Which culinary specialty is typical of northern France?", "a": "Typical are 'moules-frites' (mussels with fries) and Flemish-inspired stews (carbonnade flamande)."},
            {"q": "What architectural feature do many town halls in the north have?", "a": "Many cities have magnificent belfries (beffrois), historic watchtowers that are part of the UNESCO World Heritage."},
            {"q": "Why is the Somme Bay (Baie de Somme) ecologically significant?", "a": "It is one of the most beautiful estuaries in the world and an important sanctuary for seals and migratory birds."}
        ]
    },
    "FR-IDF": {
        "de": [
            {"q": "Was bedeutet der Name 'Île-de-France'?", "a": "Wörtlich bedeutet es 'Insel von Frankreich', was sich auf das Gebiet zwischen den Flüssen Seine, Marne und Oise bezieht."},
            {"q": "Welches ist das größte Geschäftsviertel der Region?", "a": "La Défense, westlich von Paris gelegen, ist das größte speziell errichtete Business-Viertel in Europa."},
            {"q": "Welches berühmte Schloss war die Hauptresidenz der französischen Könige vor der Revolution?", "a": "Das Schloss Versailles (Château de Versailles) war das Machtzentrum unter Ludwig XIV. bis zur Revolution."},
            {"q": "Wo befindet sich das französische Disneyland?", "a": "Disneyland Paris liegt in Marne-la-Vallée, etwa 32 Kilometer östlich vom Zentrum von Paris."},
            {"q": "Welcher Wald in der Region ist ein weltbekanntes Klettergebiet?", "a": "Der Wald von Fontainebleau (Forêt de Fontainebleau) ist berühmt für seine Sandsteinfelsen und das Bouldern."}
        ],
        "hu": [
            {"q": "Mit jelent az 'Île-de-France' név?", "a": "Szó szerint 'Franciaország szigete', ami a Szajna, Marne és Oise folyók közötti területre utal."},
            {"q": "Melyik a régió legnagyobb üzleti negyede?", "a": "La Défense, amely Párizstól nyugatra található, Európa legnagyobb, kifejezetten üzleti célra épült negyede."},
            {"q": "Melyik híres kastély volt a francia királyok fő rezidenciája a forradalom előtt?", "a": "A versailles-i kastély (Château de Versailles) volt a hatalom központja XIV. Lajostól a forradalomig."},
            {"q": "Hol található a francia Disneyland?", "a": "A Disneyland Paris Marne-la-Vallée-ben található, körülbelül 32 kilométerre keletre Párizs központjától."},
            {"q": "A régió melyik erdője világhírű sziklamászó hely?", "a": "A fontainebleau-i erdő (Forêt de Fontainebleau) híres homokkő szikláiról és a boulderezésről."}
        ],
        "ro": [
            {"q": "Ce înseamnă numele „Île-de-France”?", "a": "Literal înseamnă „Insula Franței”, referindu-se la teritoriul cuprins între râurile Sena, Marne și Oise."},
            {"q": "Care este cel mai mare cartier de afaceri din regiune?", "a": "La Défense, situat la vest de Paris, este cel mai mare cartier de afaceri construit special din Europa."},
            {"q": "Care faimos castel a fost reședința principală a regilor Franței înainte de Revoluție?", "a": "Castelul Versailles a fost centrul puterii sub Ludovic al XIV-lea până la Revoluție."},
            {"q": "Unde se află Disneyland-ul francez?", "a": "Disneyland Paris se află în Marne-la-Vallée, la aproximativ 32 de kilometri est de centrul Parisului."},
            {"q": "Care pădure din regiune este o zonă de escaladă renumită mondial?", "a": "Pădurea Fontainebleau (Forêt de Fontainebleau) este faimoasă pentru stâncile sale de gresie și pentru bouldering."}
        ],
        "en": [
            {"q": "What does the name 'Île-de-France' mean?", "a": "Literally it means 'Island of France', referring to the territory between the rivers Seine, Marne, and Oise."},
            {"q": "What is the largest business district in the region?", "a": "La Défense, located west of Paris, is the largest purpose-built business district in Europe."},
            {"q": "Which famous palace was the main residence of the French kings before the Revolution?", "a": "The Palace of Versailles (Château de Versailles) was the center of power under Louis XIV until the Revolution."},
            {"q": "Where is the French Disneyland located?", "a": "Disneyland Paris is located in Marne-la-Vallée, about 32 kilometers east of central Paris."},
            {"q": "Which forest in the region is a world-famous climbing area?", "a": "The Forest of Fontainebleau (Forêt de Fontainebleau) is famous for its sandstone rocks and bouldering."}
        ]
    },
    "FR-NOR": {
        "de": [
            {"q": "Was geschah am 6. Juni 1944 an den Küsten der Normandie?", "a": "Die Landung der Alliierten (D-Day), der Beginn der Befreiung Westeuropas im Zweiten Weltkrieg."},
            {"q": "Welches weltbekannte kulinarische Produkt stammt aus der Normandie?", "a": "Der Camembert-Käse, ursprünglich aus dem kleinen Dorf Camembert in der Basse-Normandie."},
            {"q": "Welches Kunstwerk zeigt die normannische Eroberung Englands von 1066?", "a": "Der Teppich von Bayeux, eine fast 70 Meter lange Stickerei aus dem 11. Jahrhundert."},
            {"q": "Welche beeindruckende Gezeiteninsel liegt im Südwesten der Normandie?", "a": "Der Mont-Saint-Michel mit seiner berühmten mittelalterlichen Abtei."},
            {"q": "Warum ist die Stadt Rouen kunstgeschichtlich bedeutend?", "a": "Wegen ihrer Kathedrale, die Claude Monet zu einer berühmten Serie von Impressionismus-Gemälden inspirierte."}
        ],
        "hu": [
            {"q": "Mi történt 1944. június 6-án Normandia partjainál?", "a": "A szövetségesek partraszállása (D-nap), amely megkezdte Nyugat-Európa felszabadítását a második világháborúban."},
            {"q": "Melyik világhírű gasztronómiai termék származik Normandiából?", "a": "A Camembert sajt, amely eredetileg az alsó-normandiai Camembert faluból származik."},
            {"q": "Melyik műalkotás mutatja be Anglia 1066-os normann meghódítását?", "a": "A bayeux-i faliszőnyeg, egy majdnem 70 méter hosszú hímzés a 11. századból."},
            {"q": "Melyik lenyűgöző árapály-sziget található Normandia délnyugati részén?", "a": "A Mont-Saint-Michel a híres középkori apátságával."},
            {"q": "Miért jelentős Rouen városa a művészettörténetben?", "a": "A katedrálisa miatt, amely Claude Monet-t egy híres impresszionista festménysorozat elkészítésére ihlette."}
        ],
        "ro": [
            {"q": "Ce s-a întâmplat la 6 iunie 1944 pe coastele Normandiei?", "a": "Debarcarea Aliaților (Ziua Z), începutul eliberării Europei de Vest în Al Doilea Război Mondial."},
            {"q": "Ce produs culinar renumit mondial provine din Normandia?", "a": "Brânza Camembert, originară din micul sat Camembert din Normandia de Jos."},
            {"q": "Ce operă de artă înfățișează cucerirea normandă a Angliei din 1066?", "a": "Tapițeria de la Bayeux, o broderie lungă de aproape 70 de metri din secolul al XI-lea."},
            {"q": "Ce insulă mareică impresionantă se află în sud-vestul Normandiei?", "a": "Mont-Saint-Michel, cu celebra sa abație medievală."},
            {"q": "De ce este orașul Rouen important în istoria artei?", "a": "Datorită catedralei sale, care l-a inspirat pe Claude Monet pentru o faimoasă serie de picturi impresioniste."}
        ],
        "en": [
            {"q": "What happened on June 6, 1944, on the coast of Normandy?", "a": "The Allied landings (D-Day), marking the beginning of the liberation of Western Europe in World War II."},
            {"q": "Which world-famous culinary product originates from Normandy?", "a": "Camembert cheese, originally from the small village of Camembert in Lower Normandy."},
            {"q": "Which artwork depicts the Norman conquest of England in 1066?", "a": "The Bayeux Tapestry, a nearly 70-meter-long embroidery from the 11th century."},
            {"q": "Which impressive tidal island is located in the southwest of Normandy?", "a": "Mont-Saint-Michel with its famous medieval abbey."},
            {"q": "Why is the city of Rouen significant in art history?", "a": "Because of its cathedral, which inspired Claude Monet to create a famous series of Impressionist paintings."}
        ]
    },
    "FR-NAQ": {
        "de": [
            {"q": "Welches ist die höchste Sanddüne Europas in dieser Region?", "a": "Die Dune du Pilat am Eingang zum Bassin d'Arcachon, die über 100 Meter hoch ist."},
            {"q": "Welcher weltberühmte Weinbrand wird im Norden der Region produziert?", "a": "Der Cognac, benannt nach der gleichnamigen Stadt in der Charente."},
            {"q": "Wofür ist das Dorf Lascaux bekannt?", "a": "Lascaux ist berühmt für seine jungpaläolithischen Höhlenmalereien, die zu den bedeutendsten der Welt gehören."},
            {"q": "Warum ist Biarritz ein bedeutender Ort für den Sport?", "a": "Biarritz gilt als die Wiege des Surfens in Europa und ist ein bekannter mondäner Badeort."},
            {"q": "Welche Rolle spielt die Stadt Bordeaux für die globale Weinwirtschaft?", "a": "Bordeaux ist das wirtschaftliche Zentrum der gleichnamigen Weinregion und Austragungsort der Weltleitmesse Vinexpo."}
        ],
        "hu": [
            {"q": "Melyik Európa legmagasabb homokdűnéje ebben a régióban?", "a": "A Dune du Pilat az Arcachon-öböl bejáratánál, amely több mint 100 méter magas."},
            {"q": "Melyik világhírű borpárlatot állítják elő a régió északi részén?", "a": "A konyakot (Cognac), amelyet a Charente megyében található azonos nevű városról neveztek el."},
            {"q": "Miről ismert Lascaux faluja?", "a": "Lascaux híres a felső paleolitikumból származó barlangrajzairól, amelyek a világ legjelentősebbjei közé tartoznak."},
            {"q": "Miért jelentős sporthelyszín Biarritz?", "a": "Biarritz az európai szörfözés bölcsőjeként ismert és egy neves, elegáns tengerparti üdülőhely."},
            {"q": "Milyen szerepet játszik Bordeaux városa a globális borgazdaságban?", "a": "Bordeaux az azonos nevű borvidék gazdasági központja és a Vinexpo világkiállítás házigazdája."}
        ],
        "ro": [
            {"q": "Care este cea mai înaltă dună de nisip din Europa situată în această regiune?", "a": "Duna lui Pilat, la intrarea în Bazinul Arcachon, care are o înălțime de peste 100 de metri."},
            {"q": "Ce coniac renumit mondial este produs în nordul regiunii?", "a": "Cognac, numit după orașul cu același nume din departamentul Charente."},
            {"q": "Pentru ce este cunoscut satul Lascaux?", "a": "Lascaux este faimos pentru picturile sale rupestre din paleoliticul superior, printre cele mai importante din lume."},
            {"q": "De ce este Biarritz un loc important pentru sport?", "a": "Biarritz este considerat leagănul surfingului în Europa și este o stațiune balneară elegantă renumită."},
            {"q": "Ce rol joacă orașul Bordeaux pentru industria mondială a vinului?", "a": "Bordeaux este centrul economic al regiunii viticole omonime și gazda târgului mondial Vinexpo."}
        ],
        "en": [
            {"q": "What is the highest sand dune in Europe located in this region?", "a": "The Dune du Pilat at the entrance to the Bassin d'Arcachon, which is over 100 meters high."},
            {"q": "Which world-famous brandy is produced in the north of the region?", "a": "Cognac, named after the town of the same name in Charente."},
            {"q": "What is the village of Lascaux known for?", "a": "Lascaux is famous for its Upper Paleolithic cave paintings, which are among the most significant in the world."},
            {"q": "Why is Biarritz a significant place for sports?", "a": "Biarritz is considered the cradle of surfing in Europe and is a well-known elegant seaside resort."},
            {"q": "What role does the city of Bordeaux play in the global wine economy?", "a": "Bordeaux is the economic center of the wine region of the same name and host of the world-leading trade fair Vinexpo."}
        ]
    },
    "FR-OCC": {
        "de": [
            {"q": "Was ist die 'Cité de Carcassonne'?", "a": "Es ist eine der besterhaltenen mittelalterlichen Festungsstädte Europas mit einer doppelten Ringmauer."},
            {"q": "Welches römische Aquädukt ist ein Wahrzeichen der Region?", "a": "Der Pont du Gard, ein dreistöckiges Aquädukt aus dem 1. Jahrhundert n. Chr."},
            {"q": "Warum heißt Toulouse 'die rosa Stadt' (La Ville Rose)?", "a": "Wegen der charakteristischen rötlichen Terrakotta-Ziegel, aus denen viele Gebäude der Altstadt erbaut wurden."},
            {"q": "Welches Gebirge bildet die Grenze zu Spanien im Süden Okzitaniens?", "a": "Die Pyrenäen (Les Pyrénées) erstrecken sich entlang der gesamten südlichen Grenze der Region."},
            {"q": "Was ist der Canal du Midi?", "a": "Ein 240 km langer Kanal aus dem 17. Jahrhundert, der das Mittelmeer mit der Garonne verbindet."}
        ],
        "hu": [
            {"q": "Mi az a 'Cité de Carcassonne'?", "a": "Európa egyik legjobb állapotban fennmaradt középkori erődített városa kettős várfallal."},
            {"q": "Melyik római vízvezeték a régió egyik jelképe?", "a": "A Pont du Gard, egy háromszintes vízvezeték az i. sz. 1. századból."},
            {"q": "Miért hívják Toulouse-t 'rózsaszín városnak' (La Ville Rose)?", "a": "A jellegzetes vöröses terrakotta téglák miatt, amelyekből az óváros számos épülete készült."},
            {"q": "Melyik hegység alkotja a határt Spanyolországgal Okcitánia déli részén?", "a": "A Pireneusok (Les Pyrénées) húzódnak a régió teljes déli határa mentén."},
            {"q": "Mi az a Canal du Midi?", "a": "Egy 17. századi, 240 km hosszú csatorna, amely a Földközi-tengert köti össze a Garonne folyóval."}
        ],
        "ro": [
            {"q": "Ce este „Cité de Carcassonne”?", "a": "Este una dintre cele mai bine conservate cetăți medievale din Europa, având o centură dublă de ziduri."},
            {"q": "Care apeduct roman este un simbol al regiunii?", "a": "Pont du Gard, un apeduct pe trei niveluri din secolul I d.Hr."},
            {"q": "De ce este supranumit Toulouse „orașul roz” (La Ville Rose)?", "a": "Datorită cărămizilor de teracotă roșiatice caracteristice din care au fost construite multe clădiri din centrul istoric."},
            {"q": "Ce munți formează granița cu Spania în sudul Occitaniei?", "a": "Munții Pirinei (Les Pyrénées) se întind de-a lungul întregii granițe de sud a regiunii."},
            {"q": "Ce este Canal du Midi?", "a": "Un canal de 240 km lungime din secolul al XVII-lea, care leagă Marea Mediterană de fluviul Garonne."}
        ],
        "en": [
            {"q": "What is the 'Cité de Carcassonne'?", "a": "It is one of the best-preserved medieval fortified cities in Europe, featuring a double ring of defensive walls."},
            {"q": "Which Roman aqueduct is a landmark of the region?", "a": "The Pont du Gard, a three-tiered aqueduct dating from the 1st century AD."},
            {"q": "Why is Toulouse called 'the pink city' (La Ville Rose)?", "a": "Because of the characteristic reddish terracotta bricks used to build many of the old town's buildings."},
            {"q": "Which mountain range forms the border with Spain in the south of Occitania?", "a": "The Pyrenees (Les Pyrénées) stretch along the entire southern border of the region."},
            {"q": "What is the Canal du Midi?", "a": "A 240 km long 17th-century canal that connects the Mediterranean Sea with the Garonne River."}
        ]
    },
    "FR-PDL": {
        "de": [
            {"q": "Was ist die Hauptattraktion auf der Insel von Nantes?", "a": "Die 'Machines de l'île', eine fantastische Welt aus mechanischen Strukturen, darunter ein riesiger begehbarer Elefant."},
            {"q": "Für welche Sportveranstaltung ist Le Mans weltweit bekannt?", "a": "Für das '24-Stunden-Rennen von Le Mans', das bedeutendste Langstreckenrennen im Motorsport."},
            {"q": "Was wird in Guérande traditionell gewonnen?", "a": "Das berühmte Meersalz 'Fleur de Sel', das in den dortigen Salzgärten per Hand geerntet wird."},
            {"q": "Welches Schloss in der Region war der Hauptwohnsitz der bretonischen Herzöge?", "a": "Das Château des ducs de Bretagne in Nantes."},
            {"q": "Was ist der 'Puy du Fou'?", "a": "Ein weltweit mehrfach ausgezeichneter historischer Themenpark, der für seine spektakulären Shows bekannt ist."}
        ],
        "hu": [
            {"q": "Mi a fő látványosság Nantes szigetén?", "a": "A 'Machines de l'île', a mechanikus szerkezetek fantasztikus világa, benne egy óriási, sétáló elefánttal."},
            {"q": "Milyen sporteseményről világhírű Le Mans?", "a": "A 'Le Mans-i 24 órás versenyről', amely a motorsport legjelentősebb hosszú távú versenye."},
            {"q": "Mit termelnek hagyományosan Guérande-ban?", "a": "A híres 'Fleur de Sel' tengeri sót, amelyet a helyi sólepárlókban kézzel gyűjtenek be."},
            {"q": "Melyik kastély volt a régióban a breton hercegek fő székhelye?", "a": "A nantes-i breton hercegek kastélya (Château des ducs de Bretagne)."},
            {"q": "Mi az a 'Puy du Fou'?", "a": "Egy világszerte többszörösen díjazott történelmi tematikus park, amely látványos előadásairól ismert."}
        ],
        "ro": [
            {"q": "Care este principala atracție de pe insula Nantes?", "a": "„Machines de l'île”, o lume fantastică de structuri mecanice, inclusiv un elefant uriaș pe care te poți plimba."},
            {"q": "Pentru ce eveniment sportiv este cunoscut Le Mans în întreaga lume?", "a": "Pentru „Cursa de 24 de ore de la Le Mans”, cea mai importantă cursă de anduranță din motorsport."},
            {"q": "Ce se extrage tradițional în Guérande?", "a": "Faimoasa sare de mare „Fleur de Sel”, care este recoltată manual în salinele de acolo."},
            {"q": "Care castel din regiune a fost reședința principală a ducilor de Bretania?", "a": "Château des ducs de Bretagne din Nantes."},
            {"q": "Ce este „Puy du Fou”?", "a": "Un parc tematic istoric premiat de mai multe ori la nivel mondial, cunoscut pentru spectacolele sale grandioase."}
        ],
        "en": [
            {"q": "What is the main attraction on the Island of Nantes?", "a": "The 'Machines de l'île', a fantastic world of mechanical structures, including a giant walkable elephant."},
            {"q": "For which sporting event is Le Mans world-famous?", "a": "For the '24 Hours of Le Mans', the most important endurance race in motorsport."},
            {"q": "What is traditionally harvested in Guérande?", "a": "The famous sea salt 'Fleur de Sel', which is harvested by hand in the local salt pans."},
            {"q": "Which castle in the region was the main residence of the Dukes of Brittany?", "a": "The Château des ducs de Bretagne in Nantes."},
            {"q": "What is the 'Puy du Fou'?", "a": "A world-renowned historical theme park famous for its spectacular shows."}
        ]
    },
    "FR-PAC": {
        "de": [
            {"q": "Was ist die 'Côte d'Azur'?", "a": "Die französische Riviera, ein sonnenverwöhnter Küstenabschnitt am Mittelmeer, bekannt für Orte wie Nizza, Cannes und Saint-Tropez."},
            {"q": "Wann blüht der Lavendel in der Provence am schönsten?", "a": "Die Lavendelblüte findet meist von Mitte Juni bis Mitte August statt, je nach Höhenlage."},
            {"q": "Was sind die 'Verdon-Schluchten' (Gorges du Verdon)?", "a": "Es ist ein spektakulärer Canyon, oft als 'Grand Canyon Europas' bezeichnet, ideal für Kajak und Wandern."},
            {"q": "Welche Stadt gilt als die Welthauptstadt des Parfüms?", "a": "Grasse, im Hinterland der Côte d'Azur, ist das historische Zentrum der Parfümherstellung."},
            {"q": "Warum war Avignon im 14. Jahrhundert bedeutend?", "a": "Avignon war von 1309 bis 1377 Sitz der Päpste und damit das Machtzentrum der katholischen Kirche."}
        ],
        "hu": [
            {"q": "Mi az a 'Côte d'Azur'?", "a": "A Francia Riviéra, a Földközi-tenger napsütötte partvidéke, amely olyan helyekről ismert, mint Nizza, Cannes és Saint-Tropez."},
            {"q": "Mikor a legszebb a levendulavirágzás Provence-ban?", "a": "A levendulavirágzás általában június közepétől augusztus közepéig tart, a tengerszint feletti magasságtól függően."},
            {"q": "Mik azok a 'Verdon-szurdokok' (Gorges du Verdon)?", "a": "Ez egy látványos kanyon, amelyet gyakran 'Európa Grand Canyonjának' neveznek, ideális kajakozáshoz és túrázáshoz."},
            {"q": "Melyik város számít a parfüm világfővárosának?", "a": "Grasse, a Côte d'Azur hátországában, a parfümgyártás történelmi központja."},
            {"q": "Miért volt jelentős Avignon a 14. században?", "a": "Avignon 1309 és 1377 között a pápák székhelye, és így a katolikus egyház hatalmi központja volt."}
        ],
        "ro": [
            {"q": "Ce este „Côte d'Azur”?", "a": "Riviera Franceză, o porțiune de coastă însorită la Marea Mediterană, cunoscută pentru locuri precum Nisa, Cannes și Saint-Tropez."},
            {"q": "Când înflorește lavanda în Provence cel mai frumos?", "a": "Înflorirea lavandei are loc de obicei de la mijlocul lunii iunie până la mijlocul lunii august, în funcție de altitudine."},
            {"q": "Ce sunt „Cheile Verdonului” (Gorges du Verdon)?", "a": "Este un canion spectaculos, adesea supranumit „Marele Canion al Europei”, ideal pentru caiac și drumeții."},
            {"q": "Care oraș este considerat capitala mondială a parfumului?", "a": "Grasse, situat în zona colinară din spatele Coastei de Azur, este centrul istoric al producției de parfumuri."},
            {"q": "De ce a fost Avignon important în secolul al XIV-lea?", "a": "Avignon a fost sediul papilor între 1309 și 1377, devenind astfel centrul puterii bisericii catolice."}
        ],
        "en": [
            {"q": "What is the 'Côte d'Azur'?", "a": "The French Riviera, a sun-drenched stretch of the Mediterranean coast famous for places like Nice, Cannes, and Saint-Tropez."},
            {"q": "When does the lavender bloom most beautifully in Provence?", "a": "The lavender bloom usually takes place from mid-June to mid-August, depending on the altitude."},
            {"q": "What are the 'Verdon Gorges' (Gorges du Verdon)?", "a": "It is a spectacular canyon, often called the 'Grand Canyon of Europe', ideal for kayaking and hiking."},
            {"q": "Which city is considered the perfume capital of the world?", "a": "Grasse, in the hinterland of the Côte d'Azur, is the historical center of perfume production."},
            {"q": "Why was Avignon significant in the 14th century?", "a": "Avignon was the seat of the Popes from 1309 to 1377, making it the center of power for the Catholic Church."}
        ]
    }
}

import json

def add_faq(poi_id, faq_data):
    global content
    # Find the POI object by ID
    pattern = r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\}\s*\}'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        obj_content = match.group(0)
        # Check if faq already exists to avoid duplication
        if 'faq:' in obj_content:
            return
            
        faq_json = json.dumps(faq_data, ensure_ascii=False, indent=4)
        # Convert JSON to TS-like format (no quotes around keys in nested objects if needed, but JSON is fine for TS)
        faq_ts = "faq: " + faq_json + ","
        
        # Insert before the last '}'
        new_obj_content = obj_content[:-1] + "    " + faq_ts + "\n  }"
        content = content.replace(obj_content, new_obj_content)

for poi_id, faq_data in faqs.items():
    add_faq(poi_id, faq_data)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
