
import json

pois = {
    "ro-poi-balta-dracului": {
        "name": "Balta Dracului",
        "location": "Covasna",
        "type": "o emanație de noroi vulcanic",
        "gender": "f",
        "details": "Monument al naturii în centrul orașului, rezultat al activității post-vulcanice."
    },
    "ro-poi-pestera-ialomitei": {
        "name": "Peștera Ialomiței",
        "location": "Munții Bucegi",
        "type": "o peșteră cu mănăstire",
        "gender": "f",
        "details": "Situată pe versantul drept al Cheilor Ialomiței, găzduiește un schit la intrare."
    },
    "ro-poi-parcul-romanescu": {
        "name": "Parcul Nicolae Romanescu",
        "location": "Craiova",
        "type": "un parc natural",
        "gender": "m",
        "details": "Cel mai mare parc natural din estul Europei, proiectat de arhitectul francez Edouard Redont."
    },
    "ro-poi-muzeul-arta-craiova": {
        "name": "Muzeul de Artă Craiova",
        "location": "Palatul Jean Mihail, Craiova",
        "type": "un muzeu de artă",
        "gender": "m",
        "details": "Găzduiește opere celebre ale lui Constantin Brâncuși, inclusiv 'Sărutul'."
    },
    "ro-poi-faleza-dunarii": {
        "name": "Faleza Dunării Galați",
        "location": "Galați",
        "type": "o promenadă",
        "gender": "f",
        "details": "Cea mai lungă faleză de pe malul Dunării din România, loc de recreere și evenimente."
    },
    "ro-poi-turnul-tv-galati": {
        "name": "Turnul de Televiziune Galați",
        "location": "Galați",
        "type": "un turn de televiziune",
        "gender": "m",
        "details": "Are o înălțime de 110 metri și dispune de un restaurant circular în vârf."
    },
    "ro-poi-giurgiu": {
        "name": "Giurgiu",
        "location": "județul Giurgiu",
        "type": "un oraș port",
        "gender": "m",
        "details": "Oraș situat pe malul Dunării, punct important de trecere a frontierei către Bulgaria."
    },
    "ro-poi-podul-prieteniei": {
        "name": "Podul Prieteniei",
        "location": "Giurgiu - Ruse",
        "type": "un pod rutier și feroviar",
        "gender": "m",
        "details": "Pod peste Dunăre care leagă orașele Giurgiu (România) și Ruse (Bulgaria)."
    },
    "ro-poi-parcul-comana": {
        "name": "Parcul Natural Comana",
        "location": "județul Giurgiu",
        "type": "un parc natural",
        "gender": "m",
        "details": "Arie protejată cunoscută pentru Delta Neajlovului și Mănăstirea Comana."
    },
    "ro-poi-manastirea-tismana": {
        "name": "Mănăstirea Tismana",
        "location": "județul Gorj",
        "type": "o mănăstire ortodoxă",
        "gender": "f",
        "details": "Cea mai veche mănăstire de zid din Țara Românească, ctitorită de Sfântul Nicodim."
    },
    "ro-poi-cheile-oltetului": {
        "name": "Cheile Oltețului",
        "location": "Munții Parâng/Căpățânii",
        "type": "niște chei carstice",
        "gender": "fp",
        "details": "Sunt considerate cele mai înguste chei din Europa, situate lângă Peștera Polovragi."
    },
    "ro-poi-slobozia": {
        "name": "Slobozia",
        "location": "județul Ialomița",
        "type": "un oraș",
        "gender": "m",
        "details": "Reședința județului Ialomița, situată în inima Bărăganului."
    },
    "ro-poi-lacul-amara": {
        "name": "Lacul Amara",
        "location": "lângă Slobozia",
        "type": "un lac terapeutic",
        "gender": "m",
        "details": "Cunoscut pentru proprietățile curative ale nămolului sapropelic și ale apei sărate."
    },
    "ro-poi-biserica-poiana": {
        "name": "Biserica de lemn din Poiana",
        "location": "Slobozia (Muzeul Național al Agriculturii)",
        "type": "un monument istoric",
        "gender": "m",
        "details": "O biserică veche din lemn, strămutată pentru conservare în Slobozia."
    },
    "ro-poi-parcul-copou": {
        "name": "Parcul Copou",
        "location": "Iași",
        "type": "o grădină publică",
        "gender": "f",
        "details": "Cel mai vechi parc din Iași, unde se află Teiul lui Eminescu și Obeliscul cu Lei."
    },
    "ro-poi-palatul-mogosoaia": {
        "name": "Palatul Mogoșoaia",
        "location": "lângă București",
        "type": "un palat istoric",
        "gender": "m",
        "details": "Construit de Constantin Brâncoveanu în stil brâncovenesc, cu grădini superbe."
    },
    "ro-poi-manastirea-snagov": {
        "name": "Mănăstirea Snagov",
        "location": "Insula Snagov",
        "type": "o mănăstire istorică",
        "gender": "f",
        "details": "Situată pe o insulă, este locul unde se crede că este înmormântat Vlad Țepeș."
    },
    "ro-poi-padurea-cernica": {
        "name": "Pădurea Cernica",
        "location": "lângă București",
        "type": "o zonă de agrement",
        "gender": "f",
        "details": "O destinație populară pentru weekend, situată pe malul lacului Cernica."
    },
    "ro-poi-portile-de-fier": {
        "name": "Porțile de Fier",
        "location": "Dunăre, la granița cu Serbia",
        "type": "un defileu și hidrocentrală",
        "gender": "m",
        "details": "Unul dintre cele mai mari defilee ale Europei, găzduiește un sistem hidroenergetic major."
    },
    "ro-poi-chipul-decebal": {
        "name": "Chipul lui Decebal",
        "location": "Cazanele Dunării",
        "type": "o sculptură în stâncă",
        "gender": "f",
        "details": "Cea mai înaltă sculptură în piatră din Europa, reprezentându-l pe ultimul rege dac."
    },
    "ro-poi-slatina": {
        "name": "Slatina",
        "location": "județul Olt",
        "type": "un oraș industrial",
        "gender": "m",
        "details": "Reședința județului Olt, cunoscută pentru industria aluminiului și centrul istoric."
    },
    "ro-poi-manastirea-brancoveni": {
        "name": "Mănăstirea Brâncoveni",
        "location": "comuna Brâncoveni, Olt",
        "type": "o mănăstire istorică",
        "gender": "f",
        "details": "Important monument de arhitectură, legat de familia Brâncoveanu."
    },
    "ro-poi-zalau": {
        "name": "Zalău",
        "location": "județul Sălaj",
        "type": "un oraș",
        "gender": "m",
        "details": "Reședința județului Sălaj, situată la poalele Munților Meseș."
    },
    "ro-poi-porolissum": {
        "name": "Porolissum",
        "location": "lângă Zalău",
        "type": "un castru roman",
        "gender": "m",
        "details": "Unul dintre cele mai mari și bine conservate situri arheologice romane din România."
    },
    "ro-poi-gradina-zmeilor": {
        "name": "Grădina Zmeilor",
        "location": "județul Sălaj",
        "type": "o rezervație geologică",
        "gender": "f",
        "details": "Cunoscută pentru formațiunile stâncoase bizare, modelate de eroziune."
    },
    "ro-poi-castelul-karolyi": {
        "name": "Castelul Károlyi",
        "location": "Carei",
        "type": "un castel istoric",
        "gender": "m",
        "details": "Un castel impunător în stil neogotic-neobaroc, înconjurat de un parc dendrologic."
    },
    "ro-poi-turnul-pompierilor": {
        "name": "Turnul Pompierilor",
        "location": "Satu Mare",
        "type": "un turn de observație",
        "gender": "m",
        "details": "Construit la începutul secolului XX, oferă o panoramă superbă asupra orașului."
    },
    "ro-poi-alexandria": {
        "name": "Alexandria",
        "location": "județul Teleorman",
        "type": "un oraș",
        "gender": "m",
        "details": "Reședința județului Teleorman, un oraș cu plan urbanistic modern (străzi ortogonale)."
    },
    "ro-poi-cetatea-turnu": {
        "name": "Cetatea Turnu",
        "location": "Turnu Măgurele",
        "type": "niște ruine de cetate",
        "gender": "fp",
        "details": "Veche cetate de apărare la Dunăre, construită pe vremea lui Mircea cel Bătrân."
    },
    "ro-poi-padurea-troianu": {
        "name": "Pădurea Troianu",
        "location": "lângă Alexandria",
        "type": "o rezervație naturală",
        "gender": "f",
        "details": "Cunoscută pentru protejarea bujorului românesc sălbatic."
    },
    "ro-poi-catedrala-mitropolitana": {
        "name": "Catedrala Mitropolitană din Iași",
        "location": "Iași",
        "type": "o catedrală ortodoxă",
        "gender": "f",
        "details": "Găzduiește moaștele Sfintei Parascheva, fiind un important loc de pelerinaj."
    },
    "ro-poi-vaslui": {
        "name": "Vaslui",
        "location": "județul Vaslui",
        "type": "un oraș",
        "gender": "m",
        "details": "Oraș cu o istorie bogată, legat de bătălia de la Podul Înalt a lui Ștefan cel Mare."
    },
    "ro-poi-curtea-domneasca-vaslui": {
        "name": "Curtea Domnească din Vaslui",
        "location": "Vaslui",
        "type": "un sit istoric",
        "gender": "m",
        "details": "Ruinele reședinței domnești din perioada lui Ștefan cel Mare."
    },
    "ro-poi-muzeul-stefan": {
        "name": "Muzeul Județean 'Ștefan cel Mare'",
        "location": "Vaslui",
        "type": "un muzeu",
        "gender": "m",
        "details": "Prezintă istoria și cultura regiunii, cu accent pe epoca lui Ștefan cel Mare."
    },
    "ro-poi-manastirea-cozia": {
        "name": "Mănăstirea Cozia",
        "location": "Călimănești",
        "type": "o mănăstire medievală",
        "gender": "f",
        "details": "Ctitorită de Mircea cel Bătrân, este un simbol al arhitecturii muntenești."
    },
    "ro-poi-salina-ocnele-mari": {
        "name": "Salina Ocnele Mari",
        "location": "județul Vâlcea",
        "type": "o salină turistică",
        "gender": "f",
        "details": "Una dintre cele mai vechi exploatări de sare, amenajată pentru vizitare și tratament."
    },
    "ro-poi-focsani": {
        "name": "Focșani",
        "location": "județul Vrancea",
        "type": "un oraș",
        "gender": "m",
        "details": "Cunoscut drept 'Orașul Unirii', fiind situat pe vechea graniță dintre Moldova și Muntenia."
    },
    "ro-poi-mausoleul-marasesti": {
        "name": "Mausoleul de la Mărășești",
        "location": "Mărășești",
        "type": "un monument de război",
        "gender": "m",
        "details": "Dedicat eroilor din Primul Război Mondial, este unul dintre cele mai importante din Europa."
    },
    "ro-poi-rezervatia-putna": {
        "name": "Rezervația Putna-Vrancea",
        "location": "Munții Vrancei",
        "type": "un parc natural",
        "gender": "m",
        "details": "Arie protejată cu peisaje montane spectaculoase și biodiversitate bogată."
    },
    "ro-poi-oradea-unirii": {
        "name": "Piața Unirii din Oradea",
        "location": "Oradea",
        "type": "o piață centrală",
        "gender": "f",
        "details": "Centrul istoric al orașului, faimos pentru arhitectura Art Nouveau și palatele sale."
    },
    "ro-poi-timisoara-unirii": {
        "name": "Piața Unirii din Timișoara",
        "location": "Timișoara",
        "type": "o piață centrală",
        "gender": "f",
        "details": "Cea mai veche piață din oraș, în stil baroc, înconjurată de palate colorate."
    },
    "ro-poi-constanta-casino": {
        "name": "Cazinoul din Constanța",
        "location": "Constanța",
        "type": "o clădire istorică",
        "gender": "f",
        "details": "Simbolul orașului, o capodoperă a stilului Art Nouveau situată pe faleza mării."
    },
    "ro-poi-targu-mures-trandafirilor": {
        "name": "Piața Trandafirilor",
        "location": "Târgu Mureș",
        "type": "o piață centrală",
        "gender": "f",
        "details": "Centrul orașului, flancat de edificii culturale importante precum Palatul Culturii."
    },
    "ro-poi-pitesti-trivale": {
        "name": "Parcul Trivale",
        "location": "Pitești",
        "type": "un parc forestier",
        "gender": "m",
        "details": "O oază de verdeață în Pitești, oferind trasee de plimbare și un cadru natural relaxant."
    },
    "ro-poi-craiova-viteazul": {
        "name": "Piața Mihai Viteazul",
        "location": "Craiova",
        "type": "o piață centrală",
        "gender": "f",
        "details": "Punctul central al Craiovei, renumit pentru fântânile arteziene și evenimentele publice."
    },
    "ro-poi-galati-gradina-botanica": {
        "name": "Grădina Botanică Galați",
        "location": "Galați",
        "type": "o grădină botanică",
        "gender": "f",
        "details": "Parte a Complexului Muzeal de Științele Naturii, cu colecții variate de plante."
    },
    "ro-poi-parang": {
        "name": "Munții Parâng",
        "location": "Carpații Meridionali",
        "type": "un masiv muntos",
        "gender": "m",
        "details": "Al doilea masiv ca înălțime din România (vârful Parângul Mare - 2519 m)."
    },
    "ro-poi-danube-delta-biosphere": {
        "name": "Rezervația Biosferei Delta Dunării",
        "location": "Dobrogea",
        "type": "o rezervație naturală",
        "gender": "f",
        "details": "Arie UNESCO protejată, cea mai bine conservată deltă din Europa."
    },
    "ro-poi-cozia-np": {
        "name": "Parcul Național Cozia",
        "location": "Vâlcea",
        "type": "un parc național",
        "gender": "m",
        "details": "Rezervație muntoasă spectaculoasă, cu relief carstic și biodiversitate ridicată."
    },
    "ro-poi-maramures-mountains": {
        "name": "Munții Maramureșului",
        "location": "Maramureș",
        "type": "un masiv muntos",
        "gender": "m",
        "details": "Munți sălbatici la granița cu Ucraina, ideali pentru drumeții și aventură."
    }
}

faq_data = {}

for poi_id, info in pois.items():
    name = info["name"]
    loc = info["location"]
    typ = info["type"]
    det = info["details"]
    gender = info["gender"]
    
    adj = "situat"
    if gender == "f": adj = "situată"
    elif gender == "fp": adj = "situate"
    elif gender == "mp": adj = "situați"

    faqs = [
        {
            "q": f"Ce este {name}?",
            "a": f"{name} este {typ} {adj} în {loc}."
        },
        {
            "q": f"Unde se află {name}?",
            "a": f"Se află în {loc}, fiind un punct de interes important din zonă."
        },
        {
            "q": f"Prin ce se remarcă {name}?",
            "a": f"{det}"
        }
    ]
    
    # Add a 4th question for variety
    if "mănăstire" in typ.lower() or "catedrală" in typ.lower() or "biserică" in typ.lower():
        faqs.append({"q": "Care este importanța sa spirituală?", "a": "Este un important lăcaș de cult, atrăgând numeroși credincioși și turiști prin istoria și arhitectura sa deosebită."})
    elif "parc" in typ.lower() or "rezervație" in typ.lower():
        faqs.append({"q": "Este accesibil vizitatorilor?", "a": "Da, zona este deschisă publicului și oferă numeroase posibilități de recreere și observare a naturii."})
    elif "oraș" in typ.lower():
        faqs.append({"q": "Care este rolul administrativ al orașului?", "a": f"Orașul {name} este un centru administrativ și cultural important al județului respectiv."})
    else:
        faqs.append({"q": "Se pot face fotografii în zonă?", "a": "Da, locația este extrem de fotogenică și oferă perspective deosebite pentru pasionații de fotografie."})

    faq_data[poi_id] = {"ro": faqs}

print(json.dumps(faq_data, indent=2, ensure_ascii=False))
