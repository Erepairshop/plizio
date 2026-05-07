import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/denmarkPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    'nat-skagen': {
        'desc_ro': 'Skagen este cel mai nordic punct al Danemarcei, un loc fascinant unde apele Mării Nordului și ale Mării Baltice se întâlnesc în mod spectaculos la Grenen. Această peninsulă de nisip oferă un spectacol natural unic, vizibil prin valurile care se ciocnesc din direcții opuse. Orașul este celebru pentru lumina sa specială, care a atras în secolul al XIX-lea grupul de "Pictori din Skagen", maeștri ai impresionismului nordic. Peisajul este dominat de dune de nisip mișcătoare, plaje nesfârșite și case galbene pitorești cu acoperișuri roșii. Este o destinație esențială pentru cei care caută frumusețea sălbatică a naturii și istoria artistică a peninsulei Iutlanda.',
        'facts_ro': [
            'Grenen este punctul exact unde Skagerrak și Kattegat se unesc, fiind interzis înotul din cauza curenților extrem de puternici.',
            'Biserica Îngropată (Den Tilsandede Kirke) a fost abandonată în 1795 din cauza dunelor de nisip care o acopereau constant.',
            'Skagen primește cea mai mare cantitate de lumină solară din Danemarca, fapt ce explică popularitatea sa istorică printre artiști.',
            'Farul Gri din Skagen este al doilea cel mai înalt far din țară, oferind o panoramă vastă asupra celor două mări.'
        ]
    },
    'nat-mons-klint': {
        'desc_ro': 'Møns Klint reprezintă unul dintre cele mai dramatice și spectaculoase peisaje naturale din Danemarca, cu faleze de cretă albă care se ridică vertical până la 128 de metri deasupra Mării Baltice. Aceste formațiuni geologice s-au format acum milioane de ani din scheletele unor organisme microscopice marine, fiind ulterior modelate de ghețarii din ultima eră glaciară. Contrastul dintre albul strălucitor al cretei, pădurile verzi de fag de deasupra și albastrul intens al mării creează un tablou vizual de neuitat. Vizitatorii pot coborî pe plajă pe scări lungi pentru a căuta fosile sau pot parcurge traseele de drumeție de-a lungul marginii falezei. Este un sit de o importanță geologică excepțională și o destinație de top pentru ecoturism.',
        'facts_ro': [
            'Falezele se întind pe o distanță de aproximativ 6 kilometri de-a lungul coastei estice a insulei Møn.',
            'GeoCenter Møns Klint este un muzeu modern situat lângă faleze, unde pot fi văzute fosile de dinozauri marini și alte creaturi antice.',
            'Punctul cel mai înalt, Store Klint, atinge 128 de metri deasupra nivelului mării.',
            'Zona este un habitat rar pentru mai multe specii de orhidee sălbatice, protejate prin lege.'
        ]
    },
    'nat-wadden-sea': {
        'desc_ro': 'Marea Wadden (Vadehavet) este cel mai mare sistem neîntrerupt de zone intertidale de nisip și nămol din lume, inclus în Patrimoniul Mondial UNESCO pentru valoarea sa ecologică inestimabilă. Această zonă unică se întinde de-a lungul coastei de vest a Danemarcei și este modelată de fluxul și refluxul zilnic, care creează un peisaj mereu schimbător. Este un punct de oprire critic pentru milioane de păsări migratoare care traversează ruta est-atlantică pentru a se hrăni și a se odihni. Parcul Național Vadehavet oferă oportunități fascinante de explorare, de la safari cu foci până la observarea fenomenului "Soarele Negru" (Sort Sol). Este un loc unde natura își demonstrează forța brută și fragilitatea în același timp.',
        'facts_ro': [
            'Fenomenul Sort Sol implică sute de mii de grauri care zboară în formațiuni coordonate, întunecând cerul la apus.',
            'În timpul refluxului, vizitatorii pot merge direct pe fundul mării pentru a culege stridii proaspete sau a observa micile creaturi marine.',
            'Marea Wadden este casa celei mai mari populații de foci din Danemarca, vizibile adesea pe bancurile de nisip.',
            'Zona este esențială pentru peste 10 milioane de păsări migratoare în fiecare an, fiind o resursă vitală de hrană.'
        ]
    },
    'nat-mollehøj': {
        'desc_ro': 'Møllehøj este recunoscut oficial ca fiind cel mai înalt punct natural din Danemarca, situat în dealurile line Ejerbjerge din estul Iutlandei. Cu o înălțime modestă de exact 170,86 metri deasupra nivelului mării, acest vârf ilustrează perfect topografia plată caracteristică peisajului danez. Locul este marcat de o piatră de moară simbolică, rest al unei mori de vânt care a funcționat aici până în 1917. Deși nu oferă drama vârfurilor montane din alte țări, peisajul înconjurător oferă vederi senine și largi peste terenurile agricole fertile. Identificarea sa ca punct culminant real în 2005 a pus capăt unei lungi dezbateri geografice în Danemarca.',
        'facts_ro': [
            'Møllehøj a fost confirmat ca cel mai înalt punct natural al țării abia în 2005, în urma unor măsurători laser de precizie.',
            'Numele se traduce prin "Dealul Morii", referindu-se la moara de vânt care a stat aici timp de aproape 80 de ani.',
            'Se află la doar câțiva metri de Ejer Bavnehøj, un alt punct înalt marcat de un turn de observație istoric.',
            'Datorită reliefului plat, în zilele senine, vizibilitatea de pe acest "vârf" poate ajunge până la 40-50 de kilometri.'
        ]
    },
    'nat-himmelbjerget': {
        'desc_ro': 'Himmelbjerget, care se traduce prin "Muntele Cerului", este unul dintre cele mai faimoase și îndrăgite locuri de belvedere din Danemarca, situat lângă Silkeborg. Deși are doar 147 de metri înălțime, pantele sale abrupte care se ridică deasupra lacului Julsø îi conferă un aspect mult mai impunător decât sugerează cifrele. Din punct de vedere istoric, dealul a devenit un punct central al romantismului național danez în secolul al XIX-lea, găzduind mari întâlniri publice pentru a celebra democrația. Vârful este dominat de un turn de cărămidă roșie, ridicat în onoarea regelui Frederik al VII-lea pentru rolul său în stabilirea constituției. Este o destinație clasică pentru drumeții, picnicuri și admirarea frumuseții naturale a centrului Iutlandei.',
        'facts_ro': [
            'Până la mijlocul secolului al XIX-lea, s-a crezut în mod eronat că Himmelbjerget este cel mai înalt punct din Danemarca.',
            'Turnul de pe vârf are 25 de metri înălțime și a fost finalizat în 1875 prin subscripție publică.',
            'Se poate ajunge la baza dealului cu Hjejlen, cel mai vechi vapor cu aburi din lume care încă mai funcționează.',
            'Zona este renumită pentru "Lacurile Silkeborg", un sistem complex de ape și păduri ideale pentru canotaj.'
        ]
    },
    'nat-arreso': {
        'desc_ro': 'Arresø este cel mai mare lac din Danemarca după suprafață, întinzându-se pe aproximativ 40 de kilometri pătrați în nordul insulei Zealand. Inițial, acesta a fost un fjord deschis conectat la mare, dar ridicarea solului după ultima eră glaciară l-a izolat, transformându-l într-un lac cu apă dulce. Malurile sale sunt neregulate și împădurite, oferind un habitat crucial pentru numeroase specii de păsări, inclusiv vulturi codalb. Lacul face parte din Parcul Național "Kongernes Nordsjælland" (Nordul Zealandului al Regilor), fiind o zonă protejată de o frumusețe liniștită. Este o destinație ideală pentru observarea păsărilor, plimbări cu barca și explorarea naturii neatinse din apropierea capitalei.',
        'facts_ro': [
            'Arresø are o adâncime medie de doar 3 metri, în ciuda suprafeței sale impresionante.',
            'Un canal săpat de soldați în secolul al XVIII-lea, Canalul Frederiksværk, leagă lacul de Fjordul Roskilde.',
            'Lacul este un sit Ramsar de importanță internațională pentru protecția zonelor umede și a păsărilor migratoare.',
            'Vulturii codalb sunt o prezență constantă aici, fiind una dintre cele mai bune zone din țară pentru a-i vedea în libertate.'
        ]
    },
    'nat-fureso': {
        'desc_ro': 'Furesø este cel mai adânc lac din Danemarca, situat într-un peisaj pitoresc la nord de Copenhaga. Cu o adâncime maximă de aproape 38 de metri, lacul este o destinație foarte populară pentru navigație, caiac și înot recreativ. Zona înconjurătoare este caracterizată de păduri bogate de fag, domenii istorice mari și trasee de drumeție șerpuite, fiind refugiul preferat al locuitorilor din capitală. Lacul este conectat la un sistem complex de căi navigabile, reflectând originile sale glaciare. Furesø încapsulează perfect natura liniștită și curată care se află la doar o scurtă distanță de agitația orașului, fiind o bijuterie a regiunii Zealand.',
        'facts_ro': [
            'Adâncimea maximă a lacului este de 37,7 metri, o raritate în topografia predominant joasă a Danemarcei.',
            'Lacul face parte din sistemul de apă Mølleåen, care a fost vital pentru industrializarea timpurie a zonei.',
            'Calitatea apei este monitorizată strict, fiind una dintre cele mai bune locații pentru înot în aer liber din apropierea Copenhagăi.',
            'Malul sudic găzduiește pădurea Nørreskov, unde se găsesc unii dintre cei mai bătrâni fagi din Danemarca.'
        ]
    },
    'nat-gudenaen': {
        'desc_ro': 'Gudenå este cel mai lung râu din Danemarca, șerpuind pe o distanță de peste 150 de kilometri prin inima peninsulei Iutlanda. Acesta își începe cursul în dealurile din Tinnet Krat și curge spre nord, traversând regiunea pitorească a lacurilor din Silkeborg înainte de a se vărsa în Fjordul Randers. Din punct de vedere istoric, râul a fost o arteră vitală pentru transport și comerț, fiind folosit pentru transportul lemnului și al produselor agricole. Astăzi, Gudenå este celebrat ca un paradis recreativ, fiind extrem de popular pentru excursii de mai multe zile cu canoea, pescuit și camping în natură. Apele sale liniștite traversează unele dintre cele mai idilice și neatinse peisaje din țară.',
        'facts_ro': [
            'Gudenå este singurul curs de apă din Danemarca care poate fi considerat cu adevărat un râu mare, având o lungime de 158 km.',
            'Pe cursul său se află centrala hidroelectrică Tangeværket, cea mai mare de acest tip din Danemarca.',
            'Râul găzduiește o diversitate incredibilă de pești, fiind una dintre cele mai bune destinații pentru pescuitul la păstrăv și somon.',
            'Traseul "Pramdragerstien" de-a lungul râului a fost folosit istoric de bărbații care trăgeau bărcile cu funii împotriva curentului.'
        ]
    },
    'nat-skern-aa': {
        'desc_ro': 'Skjern Å este râul cu cel mai mare volum de apă din Danemarca, curgând spre vest prin Iutlanda până la Fjordul Ringkøbing. În anii 1960, râul a fost canalizat și îndreptat în scopuri agricole, ceea ce a afectat grav ecosistemul său delicat. Cu toate acestea, la începutul anilor 2000, a avut loc unul dintre cele mai mari proiecte de restaurare a naturii din Europa de Nord, prin care meandrele naturale ale râului și zonele umede înconjurătoare au fost recreate. Astăzi, valea Skjern Å este un habitat natural vibrant, celebrat pentru revenirea spectaculoasă a faunei sălbatice, inclusiv a somonului sălbatic și a speciilor rare de păsări. Este un testament al succesului conservării mediului în Danemarca.',
        'facts_ro': [
            'Proiectul de restaurare a costat aproximativ 280 de milioane de coroane daneze și a redat naturii peste 2.200 de hectare.',
            'Somonul de Skjern Å este o specie nativă unică, celebră pentru dimensiunile sale impresionante, atrăgând pescari din toată lumea.',
            'În deltă există un feribot cu cablu operat manual, care permite turiștilor și bicicliștilor să traverseze râul într-un mod inedit.',
            'Zona este acum un Parc Național, fiind un punct esențial pentru biodiversitatea din vestul Iutlandei.'
        ]
    },
    'nat-aero': {
        'desc_ro': 'Ærø este o insulă daneză de o frumusețe excepțională, situată în arhipelagul de sud al insulei Funen. Neatinsă de dezvoltările moderne la scară largă sau de poduri rutiere, insula oferă o atmosferă senină, care pare încremenită în timp. Orașul Ærøskøbing este adesea considerat cel mai pitoresc oraș de poveste din Danemarca, faimos pentru casele sale din lemn din secolul al XVIII-lea perfect conservate și străzile pietruite. Peisajul ondulat al insulei este punctat de mori de vânt istorice, ferme vechi și trasee de coastă vibrante. Ærø este renumită pentru moștenirea sa maritimă și pentru atmosfera romantică, fiind una dintre cele mai populare destinații de nuntă din Europa de Nord.',
        'facts_ro': [
            'Ærø este complet independentă de poduri, accesul fiind posibil exclusiv cu feribotul din localitățile învecinate.',
            'Orașul Ærøskøbing a primit premiul Europa Nostra pentru conservarea remarcabilă a patrimoniului său arhitectural.',
            'Insula este un pionier în energia regenerabilă, operând unul dintre cele mai mari sisteme de încălzire solară din lume.',
            'Datorită cadrului său idilic, Ærø găzduiește anual mii de nunți internaționale, fiind supranumită "Las Vegas-ul Europei".'
        ]
    },
    'nat-gribskov': {
        'desc_ro': 'Gribskov este una dintre cele mai mari și mai istorice păduri din Danemarca, situată în nordul insulei Zealand, chiar la nord de Hillerød. Servind inițial ca teren de vânătoare regal pentru regii danezi, pădurea este bogată în istorie și folclor. Peisajul include păduri adânci de foioase, mlaștini ascunse și Lacul Esrum pe marginea sa vestică. Face parte din "Peisajul de vânătoare par force din Nordul Zealandului", un sit al Patrimoniului Mondial UNESCO recunoscut pentru rețeaua sa geometrică de drumuri concepută pentru vânătoarea cu câini. Astăzi, Gribskov oferă un sanctuar vast și liniștit pentru fauna sălbatică și oportunități nelimitate pentru drumeții și explorare.',
        'facts_ro': [
            'Gribskov este a patra cea mai mare pădure din Danemarca, acoperind o suprafață de aproximativ 5.600 de hectare.',
            'Pădurea găzduiește cea mai mare populație de căpriori sălbatici din țară, vizibili adesea în zorii zilei.',
            'În interiorul pădurii se află ruinele mănăstirii Esrum, un centru religios important din perioada medievală.',
            'Sistemul de drumuri în formă de stea a fost creat în secolul al XVII-lea pentru a facilitar vânătoarea regală de tip "par force".'
        ]
    }
}

# Regex to find POI blocks
poi_blocks = re.split(r'(\s+\{\s+id:\s+"[^"]+",)', content)

new_content = [poi_blocks[0]]

for i in range(1, len(poi_blocks), 2):
    header = poi_blocks[i]
    body = poi_blocks[i+1]
    
    poi_id_match = re.search(r'id:\s+"([^"]+)"', header)
    if poi_id_match:
        poi_id = poi_id_match.group(1)
        if poi_id in updates:
            upd = updates[poi_id]
            # Replace descriptionAdvanced.ro
            body = re.sub(r'(descriptionAdvanced:\s*\{[^}]*ro:\s*")([^"]*)(")', r'\1' + upd['desc_ro'].replace('\\', '\\\\').replace('"', '\\"') + r'\3', body)
            # Replace factsAdvanced.ro
            facts_str = ',\n        '.join(['"' + f.replace('"', '\\"') + '"' for f in upd['facts_ro']])
            body = re.sub(r'(factsAdvanced:\s*\{[^}]*ro:\s*\[)([^\]]*)(\])', r'\1\n        ' + facts_str + r'\n      \3', body)
            
    new_content.append(header)
    new_content.append(body)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(''.join(new_content))
