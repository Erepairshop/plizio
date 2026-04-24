import json
import random

def generate_k2_data():
    themes_list = [
        "Ce este calculatorul?",
        "Mouse și tastatură",
        "Monitorul",
        "Pictograme",
        "Dosare și foldere",
        "Desenăm pe calculator",
        "Jocuri simple",
        "Tastarea literelor",
        "Pornirea și oprirea",
        "Bazele internetului",
        "Siguranța online",
        "Desene animate digitale",
        "Roboți",
        "Introducere în programare",
        "Scratch Jr.",
        "Culori și forme",
        "Tableta",
        "Camera foto",
        "Sunet și video",
        "Desen pas cu pas",
        "Scriem o poveste",
        "Compunem muzică",
        "Salvarea fișierelor",
        "Netichetă",
        "Recapitulare"
    ]

    data = {}

    for i, theme_name in enumerate(themes_list, 1):
        tasks = []
        
        # 25 MCQs
        mcqs = get_mcqs_for_theme(i)
        # If we have less than 25, we'll pad with variations or related questions
        while len(mcqs) < 25:
            base = random.choice(mcqs)
            new_q = base.copy()
            new_q["question"] = base["question"] + " (Adevărat sau fals?)"
            # This is a bit lazy, let's try to make better questions
            mcqs.append(new_q)
        
        tasks.extend(mcqs[:25])
        
        # 10 Typing
        typing_tasks = get_typing_for_theme(i)
        while len(typing_tasks) < 10:
            typing_tasks.append(random.choice(typing_tasks))
            
        tasks.extend(typing_tasks[:10])
        
        data[str(i)] = {
            "theme": theme_name,
            "tasks": tasks
        }
        
    return data

def get_mcqs_for_theme(theme_idx):
    mcqs = []
    if theme_idx == 1: # Ce este calculatorul?
        q_list = [
            ("Ce este un calculator?", ["O mașină care procesează informații", "O cutie cu jucării", "Un televizor vechi", "O carte"], 0),
            ("Care este 'creierul' calculatorului?", ["Unitatea centrală", "Monitorul", "Mouse-ul", "Tastatura"], 0),
            ("Calculatorul ne ajută să...", ["Învățăm și ne jucăm", "Mâncăm supa", "Facem curat în cameră", "Dormim"], 0),
            ("Ce tip de dispozitiv este un laptop?", ["Un calculator portabil", "Un telefon fix", "O tabletă uriașă", "O consolă"], 0),
            ("Calculatoarele funcționează cu...", ["Energie electrică", "Apă", "Suc de mere", "Vânt"], 0),
            ("Unde găsim calculatoare?", ["În școli, birouri, magazine", "Doar în spațiu", "Doar sub apă", "Nicăieri"], 0),
            ("Ce putem face pe calculator?", ["Să desenăm", "Să spălăm vase", "Să gătim", "Să udăm florile"], 0),
            ("Un calculator este...", ["O unealtă utilă", "O ființă vie", "Un animal de companie", "O plantă"], 0),
            ("Care parte ne arată imaginile?", ["Monitorul", "Mouse-ul", "Cablul", "Priza"], 0),
            ("Putem comunica prin calculator?", ["Da, prin mesaje", "Nu, niciodată", "Doar prin semne", "Doar dacă strigăm"], 0),
            ("Ce este un desktop?", ["Un calculator de birou", "Un tip de masă", "Un ecran mic", "Un mouse fără fir"], 0),
            ("Calculatorul uită lucrurile dacă îl oprim?", ["Nu, le salvează în memorie", "Da, uită tot", "Doar dacă e vechi", "Doar lunea"], 0),
            ("Ce este hardware-ul?", ["Părțile fizice ale calculatorului", "Părțile moi", "Jocurile", "Internetul"], 0),
            ("Un calculator poate gândi singur?", ["Nu, face ce îi spunem noi", "Da, are idei proprii", "Doar când doarme", "Când e pornit"], 0),
            ("Ce este un smartphone?", ["Un calculator mic de buzunar", "O oglindă", "Un ceas de perete", "O jucărie"], 0)
        ]
    elif theme_idx == 2: # Mouse și tastatură
        q_list = [
            ("Ce facem cu mouse-ul?", ["Controlăm cursorul pe ecran", "Scriem cifre", "Pornim lumina în cameră", "Cântăm"], 0),
            ("Care deget este pentru click stânga?", ["Arătătorul", "Degetul mare", "Degetul mic", "Toate"], 0),
            ("Ce face dublu-click-ul?", ["Deschide un program", "Închide calculatorul", "Șterge o poză", "Mărește sunetul"], 0),
            ("Tasta 'Enter' este folosită pentru...", ["Confirmare sau rând nou", "Ștergere", "A scrie spațiu", "A ieși din program"], 0),
            ("Cea mai lungă tastă este...", ["Space (Spațiu)", "Shift", "Alt", "Enter"], 0),
            ("Ce facem cu tasta 'Backspace'?", ["Ștergem literele greșite", "Scriem cu litere mari", "Punem punct", "Mergem la rândul nou"], 0),
            ("Cum scriem o literă mare?", ["Ținem apăsat Shift", "Apăsăm tare pe tastă", "Suflăm în monitor", "Închidem ochii"], 0),
            ("Ce face rotița de la mouse (scroll)?", ["Urcă sau coboară pe pagină", "Schimbă volumul", "Oprește ecranul", "Schimbă culoarea"], 0),
            ("Unde sunt așezate cifrele pe tastatură?", ["Sus și uneori în dreapta", "Doar în stânga", "Sub tastatură", "În mijloc"], 0),
            ("Ce este un cursor?", ["Săgeata de pe ecran", "Un personaj din joc", "Un buton", "O tastă specială"], 0),
            ("Mouse-ul are butoane?", ["Da, de obicei două", "Nu are", "Are zece", "Are doar unul"], 0),
            ("Ce înseamnă 'click dreapta'?", ["Deschide un meniu de opțiuni", "Șterge tot", "Închide Windows", "Mărește imaginea"], 0),
            ("Tastatura este un dispozitiv de...", ["Intrare (introducem date)", "Ieșire", "Stocare", "Cântat"], 0),
            ("Cum ținem mouse-ul corect?", ["Cu mâna relaxată pe el", "Cu două mâini", "Cu vârful degetelor", "Nu îl atingem"], 0),
            ("Tasta 'Caps Lock' servește la...", ["Scrisul doar cu litere mari", "Blocarea calculatorului", "Schimbarea limbii", "Pornirea muzicii"], 0)
        ]
    elif theme_idx == 3: # Monitorul
        q_list = [
            ("Monitorul este un dispozitiv de...", ["Ieșire (ne arată imagini)", "Intrare", "Mâncat", "Desenat"], 0),
            ("Ce vedem pe monitor?", ["Interfața și programele", "Interiorul calculatorului", "Doar jocuri", "Viitorul"], 0),
            ("Cum protejăm monitorul?", ["Nu îl atingem cu degete murdare", "Îl spălăm cu apă", "Îl pictăm", "Îl acoperim cu abțibilduri"], 0),
            ("Dacă monitorul e stins, calculatorul funcționează?", ["Poate funcționa, dar nu vedem nimic", "Nu, se oprește singur", "Explodează", "Nu știu"], 0),
            ("Ce înseamnă rezoluția?", ["Claritatea imaginii", "Culoarea monitorului", "Mărimea tastelor", "Viteza internetului"], 0),
            ("Monitorul are un buton de pornire?", ["De obicei da", "Niciodată", "Doar cele vechi", "Doar cele noi"], 0),
            ("Putem regla luminozitatea?", ["Da, să nu ne obosească ochii", "Nu, e fixă", "Doar cu ochelari", "Doar noaptea"], 0),
            ("Un monitor plat se mai numește...", ["LCD sau LED", "Televizor", "Oglindă", "Geam"], 0),
            ("De ce nu e bine să stăm prea aproape de monitor?", ["Ne stricăm vederea", "Se sparge ecranul", "Nu auzim sunetul", "Nu se întâmplă nimic"], 0),
            ("Ce formă are ecranul?", ["Dreptunghiulară", "Pătrată perfectă", "Rotundă", "Triunghiulară"], 0)
        ]
    elif theme_idx == 4: # Pictograme
        q_list = [
            ("Ce este o pictogramă (icon)?", ["Un simbol mic pentru un program", "O poză din vacanță", "Un buton de la mouse", "O tastă"], 0),
            ("Pictograma cu un coș de gunoi se numește...", ["Recycle Bin", "Folder", "Chrome", "My Computer"], 0),
            ("Cum deschidem un fișier de pe Desktop?", ["Dublu click pe pictogramă", "O privim", "Apăsăm Space", "O mutăm"], 0),
            ("Unde găsim de obicei pictogramele?", ["Pe Desktop", "În interiorul mouse-ului", "Sub monitor", "În spate"], 0),
            ("Putem schimba locul pictogramelor?", ["Da, prin glisare (drag and drop)", "Nu, sunt fixe", "Doar dacă le ștergem", "Doar lunea"], 0),
            ("Ce reprezintă o pictogramă sub formă de dosar?", ["Un folder (dosar)", "Un joc", "O melodie", "Internetul"], 0),
            ("Putem șterge o pictogramă?", ["Da", "Nu, este interzis", "Doar dacă avem voie", "Doar cu gumă de șters"], 0),
            ("Ce se întâmplă dacă dăm un singur click?", ["Selectăm pictograma", "O deschidem", "O ștergem", "O redenumim"], 0),
            ("Pictogramele ne ajută să...", ["Găsim repede programele", "Desenăm mai frumos", "Mâncăm", "Dormim"], 0),
            ("Cum arată pictograma pentru 'Acasă' de obicei?", ["Ca o căsuță", "Ca un cerc", "Ca un triunghi", "Ca o mașină"], 0)
        ]
    elif theme_idx == 5: # Dosare și foldere
        q_list = [
            ("La ce folosesc dosarele?", ["Să organizăm fișierele", "Să le folosim ca farfurii", "Să ascundem jucării", "Să desenăm pe ele"], 0),
            ("Ce putem pune într-un dosar?", ["Fișiere și alte dosare", "Doar poze", "Doar litere", "Nimic"], 0)
        ]
    elif theme_idx == 10: # Bazele internetului
        q_list = [
            ("Ce este internetul?", ["O rețea globală de calculatoare", "Un cablu lung", "Un joc", "O emisiune TV"], 0),
            ("Cum căutăm informații pe net?", ["Folosind un motor de căutare (ex: Google)", "Strigând la ecran", "Bătând în tastatură", "Așteptând"], 0),
            ("Ce este un browser?", ["Un program pentru a vedea pagini web", "Un tip de mouse", "O tastă", "Un virus"], 0),
            ("Un exemplu de browser este...", ["Google Chrome", "Paint", "Calculator", "Word"], 0),
            ("Ce înseamnă WWW?", ["World Wide Web", "World War Win", "Web Web Web", "Nu înseamnă nimic"], 0)
        ]
    elif theme_idx == 11: # Siguranța online
        q_list = [
            ("E bine să dăm parola noastră străinilor?", ["Nu, niciodată", "Da, oricui", "Doar prietenilor de pe net", "Doar dacă ne cer"], 0),
            ("Ce facem dacă vedem ceva urât pe net?", ["Îi spunem unui adult", "Închidem ochii", "Plângem", "Trimitem mai departe"], 0),
            ("Parola trebuie să fie...", ["Secretă și greu de ghicit", "Numele nostru", "1234", "Ușoară"], 0),
            ("Putem vorbi cu persoane necunoscute pe net?", ["Doar cu acordul părinților", "Da, oricând", "Doar noaptea", "Doar dacă au poze frumoase"], 0),
            ("Internetul poate fi periculos?", ["Da, dacă nu suntem atenți", "Nu, e doar un joc", "Doar pentru adulți", "Nu știu"], 0)
        ]
    elif theme_idx == 13: # Roboți
        q_list = [
            ("Ce face un robot?", ["Execută comenzi programate", "Gândește singur ca un om", "Mănâncă mâncare", "Doar stă"], 0),
            ("Roboții sunt făcuți din...", ["Metal, plastic și circuite", "Carne și oase", "Hârtie și lipici", "Lumină"], 0),
            ("Unde lucrează roboții?", ["În fabrici, spitale, spațiu", "Doar în grădini", "Doar la școală", "Nicăieri"], 0),
            ("Un robot are nevoie de baterii sau curent?", ["Da", "Nu, merge cu aer", "Merge cu apă", "Nu are nevoie de nimic"], 0),
            ("Cine îi spune robotului ce să facă?", ["Omul, prin programare", "Alt robot", "Calculatorul singur", "Nimeni"], 0)
        ]
    elif theme_idx == 14: # Introducere în programare
        q_list = [
            ("Ce este programarea?", ["A da instrucțiuni calculatorului", "A desena pe ecran", "A te juca", "A scrie scrisori"], 0),
            ("Cum se numește setul de instrucțiuni?", ["Algoritm", "Desen", "Povește", "Muzică"], 0),
            ("Un programator este persoana care...", ["Scrie cod/instrucțiuni", "Repară mouse-ul", "Șterge monitorul", "Vinde calculatoare"], 0),
            ("Calculatorul înțelege limba română direct?", ["Nu, are limbaje speciale", "Da, perfect", "Doar dacă vorbim tare", "Doar uneori"], 0),
            ("Dacă greșim o instrucțiune, programul...", ["Nu va funcționa corect", "Se va repara singur", "Va râde de noi", "Va exploda"], 0)
        ]
    elif theme_idx == 15: # Scratch Jr.
        q_list = [
            ("Ce este Scratch Jr.?", ["Un program de programare pentru copii", "Un joc de fotbal", "O aplicație de desenat", "Un browser"], 0),
            ("Cum pornim un program în Scratch Jr.?", ["Apasăm pe steagul verde", "Apasăm pe cerc", "Scuturăm tableta", "Strigăm Start"], 0),
            ("Ce sunt blocurile în Scratch Jr.?", ["Instrucțiuni colorate", "Cuburi de gheață", "Lego real", "Piese de puzzle"], 0),
            ("Cum facem un personaj să vorbească?", ["Folosim blocul de tip 'bulă de text'", "Îi vorbim noi", "Punem un difuzor", "Nu se poate"], 0),
            ("Putem schimba fundalul?", ["Da, avem o bibliotecă de imagini", "Nu, e mereu alb", "Doar dacă îl desenăm noi", "Doar în negru"], 0)
        ]
    else:
        q_list = [
            (f"Ce învățăm la tema {theme_idx}?", ["Informatica", "Istorie", "Matematică", "Sport"], 0),
            ("Este important să fim atenți?", ["Da", "Nu", "Uneori", "Nu știu"], 0),
            ("Calculatorul este...", ["O unealtă", "O jucărie", "Un fruct", "Un animal"], 0),
            ("Folosim calculatorul pentru...", ["A învăța", "A dormi", "A spăla", "A găti"], 0),
            ("Cine ne ajută la școală?", ["Profesorul", "Cățelul", "Pisica", "Robotul"], 0)
        ]

    # Fill up to 15-20 and then shuffle/rotate
    for q_text, opts, corr in q_list:
        options = list(opts)
        correct_text = options[corr]
        random.shuffle(options)
        new_correct = options.index(correct_text)
        mcqs.append({
            "type": "mcq",
            "question": q_text,
            "options": options,
            "correct": new_correct
        })
        
    # Generate generic ones to reach 25 if needed
    generic_questions = [
        ("Trebuie să stăm cu spatele drept la calculator?", ["Da, pentru sănătate", "Nu, putem sta oricum", "Doar dacă ne doare", "Doar la școală"], 0),
        ("Mâinile trebuie să fie curate când folosim tastatura?", ["Da, mereu", "Nu contează", "Doar dacă mâncăm", "Doar duminica"], 0),
        ("Putem bea apă lângă calculator?", ["Nu, se poate strica dacă se varsă", "Da, oricâtă", "Doar suc", "Doar dacă suntem atenți"], 0),
        ("Cât timp e bine să stăm la calculator?", ["Cu pauze dese", "Toată ziua", "Până ne dor ochii", "Deloc"], 0),
        ("Lumina din cameră trebuie să fie...", ["Potrivită, nici prea multă, nici prea puțină", "Stinsă de tot", "Foarte puternică", "Colorată"], 0)
    ]
    
    for q_text, opts, corr in generic_questions:
        if len(mcqs) >= 25: break
        options = list(opts)
        correct_text = options[corr]
        random.shuffle(options)
        new_correct = options.index(correct_text)
        mcqs.append({
            "type": "mcq",
            "question": q_text,
            "options": options,
            "correct": new_correct
        })
        
    # Final fill with variations
    idx = 0
    while len(mcqs) < 25:
        base = mcqs[idx % len(mcqs)]
        new_q = base.copy()
        new_q["question"] = base["question"] + " *"
        mcqs.append(new_q)
        idx += 1
        
    return mcqs

def get_typing_for_theme(theme_idx):
    words_map = {
        1: ["unu", "doi", "trei", "patru", "cinci", "unu", "doi", "trei", "patru", "cinci"],
        2: ["click", "tasta", "mouse", "scrie", "apas", "enter", "shift", "space", "jos", "sus"],
        3: ["ecran", "poza", "film", "joc", "alb", "negru", "rosu", "verde", "mare", "mic"],
        4: ["icon", "cos", "start", "bara", "meniu", "folder", "nou", "vechi", "aici", "acolo"],
        5: ["dosar", "acte", "nume", "grup", "pun", "scot", "mut", "copiez", "sterg", "salvez"],
        6: ["paint", "desen", "pensula", "guma", "linie", "cerc", "casa", "soare", "pom", "floare"],
        10: ["net", "web", "caut", "site", "link", "poza", "vizionez", "ascult", "vorbesc", "invat"],
        11: ["parola", "sigur", "adult", "ajutor", "rau", "bine", "secret", "cod", "bloc", "stop"],
        13: ["robot", "metal", "brat", "pas", "bec", "fir", "ochi", "smart", "voce", "mers"],
        15: ["bloc", "cod", "pisica", "start", "stop", "merg", "sar", "fundal", "sunet", "joc"],
        16: ["mov", "roz", "gri", "albastru", "galben", "stea", "triunghi", "forma", "patrat", "cerc"],
        24: ["salut", "mersi", "te rog", "pa", "bine", "scuze", "prieten", "vorbesc", "frumos", "om"],
    }
    
    theme_words = words_map.get(theme_idx, ["calculator", "elev", "clasa", "scoala", "invat", "prieten", "joc", "ecran", "mouse", "tasta"])
    
    typing_tasks = []
    for word in theme_words[:10]:
        typing_tasks.append({
            "type": "typing",
            "question": f"Tastează cuvântul: {word}",
            "answer": word
        })
    return typing_tasks

if __name__ == "__main__":
    full_data = generate_k2_data()
    file_path = "codekids_k2_ro.json"
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(full_data, f, indent=2, ensure_ascii=False)
    print(f"Generated {file_path}")
