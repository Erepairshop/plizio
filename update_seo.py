import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraElsalvadorEconomicV2.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "sonzacate-factory-economic-v2": {
        "descriptionAdvanced": "Complexul de fabrici Sonzacate reprezintă un pilon fundamental al producției industriale din vestul El Salvadorului, fiind specializat într-o gamă largă de bunuri de larg consum. Situat strategic în apropierea orașului Sonsonate, acest centru facilitează accesul rapid către portul Acajutla, optimizând lanțurile de distribuție internațională. Unitățile de producție de aici integrează tehnologii avansate pentru fabricarea articolelor de uz casnic, a produselor din plastic și a materialelor de ambalare esențiale. Dezvoltarea constantă a complexului a atras numeroase investiții, contribuind la stabilitatea economică și la creșterea calității vieții în regiune. Prin modernizarea continuă a liniilor de asamblare, fabricile din Sonzacate reușesc să mențină un nivel ridicat de competitivitate pe piața din America Centrală.",
        "factsAdvanced": [
            "Este unul dintre principalii furnizori de ambalaje industriale pentru sectorul de export al țării.",
            "Complexul beneficiază de o locație logistică privilegiată la intersecția unor rute comerciale majore.",
            "Unitățile de producție utilizează standarde internaționale de calitate pentru bunurile de consum fabricate.",
            "Asigură locuri de muncă pentru mii de locuitori din departamentul Sonsonate și zonele limitrofe."
        ]
    },
    "santa-tecla-service-economic-v2": {
        "descriptionAdvanced": "Centrul de servicii Santa Tecla s-a impus ca un hub modern de inovație și tehnologie, reflectând tranziția economică a El Salvadorului către sectorul terțiar. Această zonă vibrantă găzduiește numeroase sedii de corporații multinaționale, centre de procesare a datelor și companii specializate în externalizarea proceselor de afaceri. Infrastructura digitală de ultimă generație și conectivitatea de mare viteză au transformat orașul într-o destinație preferată pentru startup-urile tehnologice regionale. Dezvoltarea urbană accelerată a fost acompaniată de crearea unor spații de birouri moderne care integrează facilități comerciale și recreative pentru angajați. Santa Tecla reprezintă astăzi inima administrativă și de servicii a zonei metropolitane, atrăgând forță de muncă înalt calificată din întreaga țară.",
        "factsAdvanced": [
            "Găzduiește cea mai mare concentrație de centre de tip BPO și Call Center din regiunea metropolitană.",
            "Zona este deservită de o infrastructură de fibră optică de mare capacitate pentru comunicații stabile.",
            "Include parcuri tehnologice moderne care facilitează colaborarea între sectorul academic și cel privat.",
            "Este considerat principalul motor de creștere pentru economia bazată pe servicii în El Salvador."
        ]
    },
    "quezaltepeque-industrial-economic-v2": {
        "descriptionAdvanced": "Zona industrială Quezaltepeque este un centru vital pentru industria grea și producția materialelor de construcții, valorificând resursele naturale din proximitatea zonei vulcanice. Aici funcționează unități masive de producție pentru ciment și beton, produse esențiale pentru dezvoltarea infrastructurii naționale și regionale. Facilitățile moderne din acest district sunt proiectate pentru a respecta reglementările ecologice stricte, reducând impactul asupra mediului înconjurător. Locația sa strategică în nord-vest facilitează distribuția eficientă a materialelor grele către marile șantiere din întreaga țară. Quezaltepeque joacă astfel un rol determinant în lanțul de aprovizionare pentru construcții, susținând boom-ul imobiliar din El Salvador.",
        "factsAdvanced": [
            "Găzduiește una dintre cele mai mari fabrici de ciment din întreaga regiune a Americii Centrale.",
            "Producția se bazează pe extracția sustenabilă a agregatelor minerale din carierele vulcanice locale.",
            "Districtul include terminale logistice specializate pentru transportul greu de materiale de construcții.",
            "Este un pilon de stabilitate economică pentru departamentul La Libertad prin crearea de locuri de muncă."
        ]
    },
    "apopa-industrial-economic-v2": {
        "descriptionAdvanced": "Centrul industrial Apopa reprezintă un pilon economic strategic situat la nord de capitala San Salvador, funcționând ca un nod vital pentru comerțul cu țările vecine. Această zonă este dominată de industria ușoară și de fabrici de prelucrare a metalelor, care produc o varietate de bunuri de larg consum și componente industriale. Datorită poziționării sale pe ruta principală către frontiera cu Honduras, districtul a devenit o locație preferată pentru hub-uri logistice și depozite de distribuție. Expansiunea continuă a parcurilor industriale de aici reflectă încrederea investitorilor în potențialul de creștere al regiunii metropolitane de nord. Apopa contribuie semnificativ la produsul intern brut prin diversitatea activităților de producție și asamblare desfășurate.",
        "factsAdvanced": [
            "Operează unități importante de reciclare și prelucrare a metalelor la scară industrială.",
            "Este un punct de tranzit esențial pentru mărfurile care circulă pe coridorul comercial nord-sud.",
            "Zona industrială beneficiază de conexiuni rutiere moderne care facilitează transportul de mare tonaj.",
            "Găzduiește numeroase centre de distribuție pentru lanțurile de retail naționale și internaționale."
        ]
    },
    "soyapango-industrial-economic-v2": {
        "descriptionAdvanced": "Zona industrială Soyapango este cel mai istoric și dinamic hub de producție din El Salvador, fiind considerată motorul principal al economiei metropolitane. În acest district dens populat funcționează o gamă vastă de fabrici textile, unități de procesare alimentară și facilități ale industriei chimice. Soyapango este renumit și pentru complexele sale comerciale masive, care servesc drept noduri centrale pentru distribuția produselor industriale către consumatori. Evoluția industrială a acestui oraș este strâns legată de ascensiunea economică a națiunii și de formarea clasei de mijloc salvadoriene. Rămâne un simbol al productivității urbane, oferind oportunități vaste de angajare și contribuind la inovația în procesele de fabricație.",
        "factsAdvanced": [
            "Este locația primelor parcuri industriale majore stabilite în El Salvador în secolul trecut.",
            "Găzduiește sedii centrale ale unor importante companii de producție alimentară din regiune.",
            "Dispune de o infrastructură logistică complexă ce include acces la rețeaua feroviară și rutieră.",
            "Reprezintă cea mai mare concentrare de forță de muncă industrială din întreaga țară."
        ]
    },
    "nechapa-industrial-economic-v2": {
        "descriptionAdvanced": "Districtul industrial Nejapa s-a impus ca unul dintre principalele hub-uri logistice și de distribuție din El Salvador, caracterizat prin depozite masive și unități de producție moderne. Poziția sa strategică la intersecția unor autostrăzi majore facilitează fluxul rapid de mărfuri între nordul și vestul țării. Zona găzduiește facilități de producție de talie mondială, inclusiv una dintre cele mai mari fabrici de băuturi răcoritoare din America Centrală. Infrastructura modernă și mediul curat din Nejapa au atras investiții străine directe semnificative în sectoarele farmaceutic și alimentar. Acest nod industrial este vital pentru aprovizionarea eficientă a pieței naționale cu produse esențiale de larg consum.",
        "factsAdvanced": [
            "Beneficiază de acces direct la resurse bogate de apă dulce, esențiale pentru industria băuturilor.",
            "Găzduiește un centru avansat de management al deșeurilor și reciclare, un model pentru regiune.",
            "Include facilități de depozitare la standarde internaționale pentru produse farmaceutice și chimice.",
            "Este un punct cheie în rețeaua națională de distribuție a produselor alimentare procesate."
        ]
    },
    "ilopango-industrial-economic-v2": {
        "descriptionAdvanced": "Zona industrială Ilopango este strâns legată de istoria aviației și a tehnologiei din El Salvador, evoluând într'un centru modern de producție. În prezent, districtul este dominat de parcuri industriale de ultimă generație, specializate în asamblarea componentelor electronice și în industria textilă de export. Proximitatea față de lacul Ilopango și vechiul aeroport internațional oferă avantaje logistice și un cadru geografic unic pentru desfășurarea afacerilor. Expansiunea acestui hub a fost crucială pentru modernizarea zonei de est a capitalei, generând locuri de muncă cu valoare adăugată ridicată. Ilopango reprezintă o punte între trecutul industrial al țării și viitorul său axat pe tehnologie și precizie.",
        "factsAdvanced": [
            "Include zona liberă San Bartolo, prima de acest fel stabilită în El Salvador pentru export.",
            "Găzduiește ateliere specializate în întreținerea aeronavelor și producția de componente aviatice.",
            "Zona industrială este un lider național în implementarea tehnologiilor de producție automatizate.",
            "Beneficiază de prezența unor instituții de învățământ tehnic ce asigură instruirea personalului."
        ]
    },
    "san-marcos-industrial-economic-v2": {
        "descriptionAdvanced": "Zona industrială San Marcos este situată la poarta de sud a capitalei, oferind o integrare armonioasă între zonele rezidențiale și unitățile de producție modernă. Fabricile care operează aici sunt specializate în principal în bunuri de consum, mase plastice și diverse materii prime textile pentru piața internă. În ciuda terenului muntos provocator, districtul menține o conectivitate rutieră excelentă care asigură livrarea promptă a mărfurilor către principalele centre comerciale. Industria din San Marcos este o componentă vitală a diversității economice a regiunii metropolitane San Salvador, susținând micile afaceri locale. Dezvoltarea sa reflectă capacitatea de adaptare a sectorului industrial la peisajul urban dens al zonei centrale.",
        "factsAdvanced": [
            "Este un centru important pentru producția de aparate electrocasnice și bunuri de uz durabil.",
            "Unitățile industriale de aici sunt recunoscute pentru standardele ridicate de siguranță a muncii.",
            "Găzduiește numeroase depozite logistice care deservesc regiunea de sud și zona de coastă.",
            "Creșterea industrială a districtului a impulsionat dezvoltarea infrastructurii urbane locale."
        ]
    },
    "mejicanos-industry-economic-v2": {
        "descriptionAdvanced": "Industria din Mejicanos se caracterizează prin predominanța întreprinderilor mici și mijlocii care deservesc în principal piețele locale și regionale. Districtul găzduiește numeroase brutării, ateliere de procesare alimentară și unități textile la scară mică, care combină rețetele ancestrale cu cerințele comerciale moderne. Moștenirea gastronomică bogată a orașului a favorizat în mod direct înflorirea acestor unități de producție artizanală, renumite în întreaga țară. Sectorul industrial din Mejicanos servește drept un exemplu remarcabil de antreprenoriat comunitar și producție sustenabilă în El Salvador. Rămâne o parte vitală a lanțului de aprovizionare local, păstrând identitatea culturală a regiunii prin produsele sale unice.",
        "factsAdvanced": [
            "Este faimos pentru producția artizanală de produse alimentare tradiționale care ajung la export.",
            "Găzduiește numeroase afaceri de familie specializate în textile lucrate manual și încălțăminte.",
            "Camera locală de comerț oferă programe active de susținere pentru micii producători industriali.",
            "Activitatea productivă este strâns integrată cu piețele locale vibrante din centrul orașului."
        ]
    },
    "delgado-industrial-economic-v2": {
        "descriptionAdvanced": "Zonele industriale din Ciudad Delgado sunt situate la marginea de nord-est a capitalei, servind ca o punte economică vitală între centrul urban și regiunile rurale. Districtul se concentrează în principal pe fabricarea ambalajelor, depozitarea materialelor de construcții și diverse ateliere de producție industrială mică. Creșterea economică a zonei este susținută de poziționarea favorabilă de-a lungul rutelor comerciale critice, făcând-o ideală pentru centrele de distribuție regională. Zona se adaptează continuu la provocările unui mediu urban în evoluție, creând noi locuri de muncă esențiale pentru comunitatea locală. Reprezintă un nod logistic cheie în coridorul de nord al San Salvadorului, facilitând schimbul de bunuri între oraș și provincie.",
        "factsAdvanced": [
            "Sectorul industrial local se bazează pe o forță de muncă calificată provenită din comunitate.",
            "Găzduiește mai multe fabrici specializate în prelucrarea și reciclarea hârtiei și a cartonului.",
            "Bazele moderne de depozitare din district deservesc eficient zonele de nord ale capitalei.",
            "Unitățile industriale sunt integrate organic în țesutul urban aflat în plină expansiune."
        ]
    },
    "cuscatancingo-industrial-economic-v2": {
        "descriptionAdvanced": "Caracterul industrial al orașului Cuscatancingo este definit de unități de producție și ateliere care deservesc în principal nevoile regionale ale zonei metropolitane. Orașul are o tradiție îndelungată în producția de materiale de construcții și prelucrarea lemnului, găzduind numeroase ateliere de tâmplărie și depozite specializate. Datorită densității urbane ridicate, aceste facilități industriale sunt adesea integrate direct în cartierele rezidențiale, formând legături strânse cu comunitatea locală. Această activitate industrială oferă o bază economică crucială pentru nordul San Salvadorului, susținând autosuficiența locală. Reprezintă un model de reziliență a producției tradiționale într-un cadru urban modern și dinamic.",
        "factsAdvanced": [
            "Este recunoscut pentru fabricarea de mobilier artizanal de înaltă calitate și articole din lemn.",
            "Găzduiește numeroase unități mici axate pe prelucrarea metalelor și repararea echipamentelor.",
            "Industria locală este un furnizor principal de materii prime pentru districtele învecinate.",
            "Atelierele din zonă joacă un rol important în formarea profesională a tinerilor ucenici."
        ]
    },
    "tonacatepeque-industrial-economic-v2": {
        "descriptionAdvanced": "Zona industrială Tonacatepeque a cunoscut o dezvoltare rapidă în ultimii ani, impulsionată de expansiunea spre nord a capitalei. Aici s-au stabilit în principal fabrici de procesare alimentară și tehnologie a ambalajelor, profitând de terenurile spațioase și de infrastructura rutieră în curs de îmbunătățire. Această creștere industrială ajută orașul să evolueze dincolo de rolul său tradițional de zonă rezidențială, devenind un centru economic de sine stătător. Zona reprezintă viitorul integrării industriale suburbane în regiunea metropolitană, oferind noi perspective de carieră locuitorilor săi. Contribuie semnificativ la diversificarea economiei departamentelor din nord prin atragerea de noi tehnologii de fabricație.",
        "factsAdvanced": [
            "Găzduiește una dintre cele mai moderne și mari fabrici de producție de paste făinoase din țară.",
            "Include facilități inovatoare specializate în producția de materiale de ambalare biodegradabile.",
            "Districtul oferă oportunități excelente pentru startup-urile din domeniul logisticii și tehnologiei.",
            "Expansiunea industrială este coordonată cu programe locale de protecție a mediului înconjurător."
        ]
    },
    "santiago-nonualco-industry-economic-v2": {
        "descriptionAdvanced": "Industria din Santiago Nonualco este profund înrădăcinată în resursele agricole ale regiunii, având prelucrarea trestiei de zahăr și a semințelor drept activități principale. Unitățile locale de producție formează o verigă critică între fermieri și consumatori, asigurând procesarea de înaltă calitate a materiilor prime. Mai multe mori mici și facilități de curățare a cerealelor operează în district, aprovizionând în principal piața internă cu produse de bază. Menținerea acestor activități industriale este fundamentală pentru autonomia economică a regiunii Nonualco și pentru conservarea tradițiilor locale. Santiago Nonualco demonstrează importanța conexiunii vitale dintre pământ și sectorul de fabricație pentru stabilitatea regională.",
        "factsAdvanced": [
            "Este faimos pentru producția tradițională de zahăr nerafinat sub formă de cuburi, numit 'panela'.",
            "Găzduiește unul dintre cele mai importante centre de curățare și depozitare a cerealelor din zonă.",
            "Numeroase ateliere de familie produc săpunuri artizanale și uleiuri naturale de calitate superioară.",
            "Strategiile de dezvoltare prioritizează implicarea comunităților indigene locale în procesul industrial."
        ]
    },
    "san-pedro-nonualco-industry-economic-v2": {
        "descriptionAdvanced": "Activitatea industrială din San Pedro Nonualco se concentrează în principal pe procesarea fructelor și crearea de produse alimentare tradiționale de înaltă calitate. Orașul este renumit în tot El Salvadorul pentru producția de băuturi spirtoase din fructe și fructe deshidratate, apreciate pentru aroma lor autentică. Deși majoritatea facilităților sunt afaceri de familie, introducerea tehnologiilor moderne le-a permis acestora să pătrundă pe piețele internaționale de export. Industria de aici nu este doar un factor economic, ci și o parte vitală a moștenirii culturale și a identității locale. Reprezintă o fuziune reușită între rețetele tradiționale și cerințele comerțului modern, susținând economia rurală.",
        "factsAdvanced": [
            "Este recunoscut la nivel internațional pentru lichiorurile de fructe artizanale produse local.",
            "Operează cea mai importantă unitate de deshidratare a fructelor tropicale din regiunea centrală.",
            "Producția se bazează pe recolte organice provenite de la plantațiile sustenabile din apropiere.",
            "Participă activ la promovarea modelelor de agricultură și procesare durabilă în El Salvador."
        ]
    },
    "el-trunco-maritime-economic-v2": {
        "descriptionAdvanced": "Portul mic El Tunco este o bază maritimă fermecătoare și funcțională care servește în principal pescuitului artizanal local și sectorului turistic în plină expansiune. Înconjurat de una dintre cele mai faimoase destinații de surf din El Salvador, infrastructura portului este adaptată atât nevoilor pescarilor, cât și ale vizitatorilor internaționali. Deși de dimensiuni reduse în comparație cu porturile industriale mari, importanța sa economică în turism și furnizarea de fructe de mare proaspete este remarcabilă. Zona combină armonios stilul de viață tradițional al pescarilor cu serviciile moderne de agrement și sporturi nautice. Este un hub vital pentru economia costieră locală, susținând numeroase mici afaceri de ospitalitate.",
        "factsAdvanced": [
            "Este renumit pentru sosirea zilnică a capturilor de pește și fructe de mare de înaltă calitate.",
            "Găzduiește unele dintre cele mai populare și profesioniste școli de surf din întreaga țară.",
            "Dispune de servicii de reparații pentru ambarcațiuni mici și închirieri de echipamente nautice.",
            "Joacă un rol cheie în protejarea și educarea comunității cu privire la ecosistemul costier."
        ]
    },
    "jiquilisco-port-economic-v2": {
        "descriptionAdvanced": "Portul Jiquilisco este situat în inima celui mai mare și important ecosistem de mangrove din El Salvador, în Golful Jiquilisco. Acest port este un nod vital pentru exploatarea durabilă a resurselor maritime, în special în ceea ce privește pescuitul și acvacultura de creveți la scară largă. Zona servește, de asemenea, ca un centru de prim rang pentru ecoturism, fiind punctul de plecare pentru numeroase excursii în teritoriile acvatice protejate. Infrastructura portuară evoluează constant pentru a echilibra sprijinul economic oferit comunităților locale cu obiectivele critice de conservare. Reprezintă un model de dezvoltare costieră sustenabilă, protejând biodiversitatea fragilă a regiunii.",
        "factsAdvanced": [
            "Servește ca poartă principală de acces către o vastă Rezervație a Biosferei protejată de UNESCO.",
            "Găzduiește una dintre cele mai importante și tradiționale flote de pescuit artizanal din țară.",
            "Este faimos pentru exporturile masive de creveți destinate piețelor internaționale exigente.",
            "Oferă acces către locurile critice de cuibărit pentru câteva specii rare de țestoase marine."
        ]
    },
    "metalio-port-economic-v2": {
        "descriptionAdvanced": "Portul Metalio este una dintre cele mai importante baze de pescuit de pe coasta de vest a El Salvadorului, aprovizionând cu fructe de mare proaspete populația departamentului Sonsonate. Portul este faimos pentru ambarcațiunile sale tradiționale tip 'panga', pe care pescarii locali le folosesc zilnic pentru a se aventura în apele deschise ale Pacificului. Facilități moderne de depozitare la rece și unități de procesare au fost stabilite aici pentru a asigura standarde ridicate de siguranță alimentară. Dincolo de rolul său economic, Metalio este un loc popular de excursie unde vizitatorii pot experimenta stilul de viață autentic de pe coastă. Este o piatră de temelie a economiei maritime regionale, susținând lanțul de aprovizionare local.",
        "factsAdvanced": [
            "Sute de tone de pește și diverse crustacee sunt descărcate anual în acest port strategic.",
            "Găzduiește cea mai influentă cooperativă de pescuit din regiunea de vest a țării.",
            "Este faimos pentru chioșcurile locale care servesc preparate tradiționale din fructe de mare proaspete.",
            "Funcționează ca un punct logistic cheie pentru rutele de transport costier către portul Acajutla."
        ]
    },
    "barras-santiago-port-economic-v2": {
        "descriptionAdvanced": "Portul Barra de Santiago este o formațiune naturală unică unde zonele umede cu apă dulce întâlnesc Oceanul Pacific, creând un ecosistem singular. Acest port natural este una dintre principalele destinații de ecoturism și pescuit din nord-vestul El Salvadorului. Zona este renumită pentru biodiversitatea sa imensă și pentru protecția pădurilor de mangrove vitale, care oferă mijloace de trai durabile comunităților locale. Pentru vizitatori, portul este un simbol al liniștii și al unei conexiuni profunde cu natura sălbatică. Demonstrează integrarea reușită a conservării mediului cu activitățile economice tradiționale ale locuitorilor zonei.",
        "factsAdvanced": [
            "Face parte dintr-o zonă umedă Ramsar de importanță internațională pentru conservarea apei.",
            "Găzduiește unul dintre cele mai critice și de succes programe de protecție a țestoaselor marine.",
            "Apele înconjurătoare sunt o destinație favorită pentru observatorii de păsări și pasionații de caiac.",
            "Pescarii locali folosesc tehnici specializate adaptate mediului unic al pădurilor de mangrove."
        ]
    }
}

# Split the content into POI blocks
# We use a non-greedy split that keeps the delimiters
poi_blocks = re.split(r'(\n\s*\{\n\s*id:\s*")', content)

new_content = [poi_blocks[0]]
for i in range(1, len(poi_blocks), 2):
    header = poi_blocks[i]
    block = poi_blocks[i+1]
    
    # Extract ID
    match_id = re.match(r'^([^"]+)"', block)
    if match_id:
        poi_id = match_id.group(1)
        if poi_id in updates:
            data = updates[poi_id]
            
            # Update descriptionAdvanced.ro
            # This regex targets the ro: "..." line within descriptionAdvanced block
            desc_pattern = r'(descriptionAdvanced:\s*\{[^}]*?ro:\s*").*?(")'
            block = re.sub(desc_pattern, r'\1' + data["descriptionAdvanced"] + r'\2', block, flags=re.DOTALL)
            
            # Update factsAdvanced.ro
            # This regex targets the ro: [...] block within factsAdvanced block
            facts_str = "[\n        " + ",\n        ".join([f'"{f}"' for f in data["factsAdvanced"]]) + "\n      ]"
            facts_pattern = r'(factsAdvanced:\s*\{[^}]*?ro:\s*).*?(\s*\]\s*,|\s*\]\s*\})'
            # Note: the replacement needs to be careful about the closing bracket
            block = re.sub(facts_pattern, r'\1' + facts_str + r'\2', block, flags=re.DOTALL)
    
    new_content.append(header)
    new_content.append(block)

final_output = "".join(new_content)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(final_output)
