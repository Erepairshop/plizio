import json
import random

def generate_data():
    themes = [
        "Ce este calculatorul?",
        "Mouse și tastatură",
        "Monitorul",
        "Pictograme (Ikonok)",
        "Dosare (Mappák)",
        "Desenăm (Rajzolás)",
        "Jocuri simple",
        "Tastăm litere",
        "Pornire și oprire",
        "Internetul pe înțelesul tuturor",
        "Siguranța online",
        "Desene animate digitale",
        "Roboți",
        "Introducere în programare",
        "Scratch Jr.",
        "Culori și forme pe ecran",
        "Tableta",
        "Camera foto",
        "Sunet și video",
        "Desenăm pas cu pas",
        "Scriem o poveste scurtă",
        "Compoziție muzicală",
        "Salvarea fișierelor",
        "Netichetă (Codul bunelor maniere pe net)",
        "Recapitulare finală"
    ]

    data = {}

    for i, theme in enumerate(themes, 1):
        tasks = []
        
        # Generate 25 MCQ tasks
        for j in range(1, 26):
            # Base questions for each theme to ensure relevance
            q_data = get_mcq_data(i, j)
            tasks.append({
                "type": "mcq",
                "question": q_data["question"],
                "options": q_data["options"],
                "correct": q_data["correct"]
            })
            
        # Generate 10 typing tasks
        for j in range(1, 11):
            t_data = get_typing_data(i, j)
            tasks.append({
                "type": "typing",
                "question": t_data["question"],
                "answer": t_data["answer"]
            })
            
        data[str(i)] = {
            "theme": theme,
            "tasks": tasks
        }
        
    return data

def get_mcq_data(theme_idx, q_idx):
    # This is a helper to generate semi-unique questions for each theme
    # Theme 1: Ce este calculatorul?
    if theme_idx == 1:
        questions = [
            ("Ce este un calculator?", ["O mașină inteligentă", "Un fruct", "Un animal", "O jucărie de pluș"], 0),
            ("Unde găsim calculatoare?", ["Peste tot", "Doar în pădure", "Doar sub apă", "Nicăieri"], 0),
            ("Calculatorul are nevoie de curent?", ["Da, mereu", "Nu, niciodată", "Doar lunea", "Doar când plouă"], 0),
            ("Putem învăța pe calculator?", ["Da", "Nu", "Doar dacă dormim", "Nu știu"], 0),
            ("Un laptop este un calculator?", ["Da", "Nu", "Este o carte", "Este un penar"], 0),
            ("Ce facem cu mouse-ul?", ["Mișcăm săgeata pe ecran", "Mâncăm cu el", "Desenăm pe hârtie", "Cântăm"], 0),
            ("Unde vedem imaginile?", ["Pe monitor", "Pe tastatură", "În mouse", "În cablu"], 0),
            ("Putem asculta muzică la calculator?", ["Da", "Nu", "Doar dacă strigăm", "Nu avem voie"], 0),
            ("Un calculator este viu?", ["Nu", "Da", "Doar noaptea", "Când vorbește"], 0),
            ("Ce este un ecran?", ["Partea care luminează", "O roată", "Un buton", "Un scaun"], 0)
        ]
    elif theme_idx == 2: # Mouse și tastatură
        questions = [
            ("Câte butoane are de obicei un mouse?", ["Două", "Zece", "Niciunul", "O sută"], 0),
            ("Ce facem cu tastatura?", ["Scriem litere", "Mâncăm pe ea", "Dormim pe ea", "O folosim ca oglindă"], 0),
            ("Cum se numește săgeata de pe ecran?", ["Cursor", "Pisică", "Pasăre", "Creion"], 0),
            ("Ce deget folosim pentru click stânga?", ["Arătătorul", "Degetul mic", "Degetul mare", "Niciunul"], 0),
            ("Unde sunt cifrele?", ["Pe tastatură", "În mouse", "Sub masă", "Pe monitor"], 0),
            ("Ce face rotița de la mouse?", ["Derulează pagina", "Oprește calculatorul", "Schimbă culoarea", "Sună la prieteni"], 0),
            ("Tastatura are litere?", ["Da", "Nu", "Doar cifre", "Doar desene"], 0),
            ("Cum dăm 'click'?", ["Apăsăm butonul mouse-ului", "Strigăm la ecran", "Batem din palme", "Închidem ochii"], 0),
            ("Mouse-ul are coadă (cablu)?", ["Unele au, altele nu", "Toate au coadă de șoarece", "Sunt mereu din lemn", "Nu există mouse"], 0),
            ("Care tastă este cea mai lungă?", ["Space (Spațiu)", "Enter", "A", "Esc"], 0)
        ]
    elif theme_idx == 3: # Monitorul
        questions = [
            ("Ce vedem pe monitor?", ["Imagini și texte", "Doar negru", "Mâncare", "Haine"], 0),
            ("Monitorul trebuie să fie pornit?", ["Da", "Nu", "Doar când e soare", "Dacă vrem să dormim"], 0),
            ("Putem atinge ecranul cu degetele murdare?", ["Nu", "Da", "Doar cu ciocolată", "Dacă vrem să-l pictăm"], 0),
            ("Monitorul este o ieșire?", ["Da, ne arată informații", "Nu, este o intrare", "Este o ușă", "Este o fereastră reală"], 0),
            ("Ce facem dacă ecranul e prea luminos?", ["Reglăm luminozitatea", "Punem ochelari de soare", "Îl acoperim cu o pătură", "Nu facem nimic"], 0),
            ("Ecranul are culori?", ["Da, milioane", "Doar alb și negru", "Doar roșu", "Nu are culori"], 0),
            ("Putem vedea filme pe monitor?", ["Da", "Nu", "Doar dacă citim o carte", "Nu avem voie"], 0),
            ("Monitorul este televizor?", ["Seamănă, dar e pentru calculator", "Este exact la fel", "Este un radio", "Este o tabletă uriașă"], 0),
            ("Unde stă monitorul?", ["Pe birou", "În ghiozdan mereu", "În frigider", "Pe tavan"], 0),
            ("Ce formă are de obicei un monitor?", ["Dreptunghiulară", "Rotundă", "Triunghiulară", "Inimioară"], 0)
        ]
    elif theme_idx == 4: # Pictograme
        questions = [
            ("Ce este o pictogramă?", ["Un desen mic pe ecran", "O prăjitură", "Un cântec", "O pasăre"], 0),
            ("Cum deschidem o pictogramă?", ["Dublu click", "O privim fix", "O suflăm", "O strigăm"], 0),
            ("Pictograma reprezintă ceva?", ["Da, un program sau fișier", "Nu, e doar decor", "E o pată de mizerie", "E un joc de lumini"], 0),
            ("Unde găsim pictogramele?", ["Pe desktop (ecranul principal)", "Sub tastatură", "În interiorul mouse-ului", "În spatele monitorului"], 0),
            ("Putem muta pictogramele?", ["Da, prin glisare", "Nu, sunt lipite", "Doar dacă avem permisiune de la poliție", "Doar noaptea"], 0),
            ("Cum arată pictograma 'Recycle Bin' (Coș de gunoi)?", ["Ca un coș de gunoi", "Ca o floare", "Ca o mașină", "Ca un soare"], 0),
            ("Pot fi pictogramele colorate?", ["Da", "Nu, sunt doar gri", "Sunt mereu verzi", "Sunt invizibile"], 0),
            ("Dacă ștergem o pictogramă, ce se întâmplă?", ["Poate dispărea scurtătura", "Explodează calculatorul", "Se stinge lumina", "Nu se întâmplă nimic"], 0),
            ("Pictogramele ne ajută?", ["Da, găsim lucrurile mai repede", "Nu, ne încurcă", "Sunt doar pentru joacă", "Sunt plictisitoare"], 0),
            ("Care pictogramă seamănă cu un dosar?", ["Folder", "Internet", "Muzică", "Joc"], 0)
        ]
    elif theme_idx == 5: # Dosare
        questions = [
            ("La ce folosesc dosarele (folderele)?", ["Să punem fișiere în ele", "Să punem haine", "Să punem jucării", "Să punem mâncare"], 0),
            ("Ce culoare au de obicei dosarele pe calculator?", ["Galben", "Roșu", "Negru", "Transparent"], 0),
            ("Putem pune un dosar în alt dosar?", ["Da", "Nu", "Doar dacă sunt mici", "Doar dacă sunt goale"], 0),
            ("Putem da nume dosarelor?", ["Da, orice nume", "Nu, au nume de cifre", "Doar numele nostru", "Doar numele calculatorului"], 0),
            ("Un dosar poate fi gol?", ["Da", "Nu, trebuie să aibă ceva", "Doar dacă e nou", "Nu există dosare goale"], 0),
            ("Cum creăm un dosar nou?", ["Click dreapta -> New -> Folder", "Batem din palme", "Repornim calculatorul", "Scriem pe ecran"], 0),
            ("Dosarele ne ajută să fim?", ["Organizați", "Murdari", "Obosiți", "Supărați"], 0),
            ("Putem șterge un dosar?", ["Da", "Nu, e interzis", "Doar dacă e galben", "Doar dacă e vechi"], 0),
            ("Unde dispar dosarele șterse?", ["În Recycle Bin (Coșul de gunoi)", "În spațiu", "Sub masă", "În tastatură"], 0),
            ("Putem pune poze într-un dosar?", ["Da", "Nu, doar litere", "Doar dacă sunt alb-negru", "Nu avem voie"], 0)
        ]
    elif theme_idx == 6: # Desenăm
        questions = [
            ("Ce program folosim pentru desenat?", ["Paint", "Word", "Calculator", "Internet Explorer"], 0),
            ("Cu ce putem desena în Paint?", ["Creion, pensulă", "Cu degetul pe mouse", "Cu un creion real pe ecran", "Cu vocea"], 0),
            ("Cum ștergem o greșeală?", ["Cu guma de șters din program", "Cu apă pe monitor", "Cu un șervețel", "Închidem monitorul"], 0),
            ("Putem folosi culori?", ["Da, multe", "Nu, doar negru", "Doar gri", "Doar alb"], 0),
            ("Ce formă putem desena automat?", ["Cerc, pătrat, triunghi", "Doar nori", "Doar flori", "Nicio formă"], 0)
        ]
    elif theme_idx == 13: # Roboți
        questions = [
            ("Ce este un robot?", ["O mașină care face sarcini", "Un om din metal", "O jucărie vie", "Un extraterestru"], 0),
            ("Roboții au nevoie de instrucțiuni?", ["Da", "Nu, știu tot", "Doar când dorm", "Nu știu"], 0),
            ("Pot roboții să ne ajute?", ["Da", "Nu, sunt răi", "Doar la teme", "Nu au voie"], 0),
            ("Unde vedem roboți?", ["În fabrici, acasă, în spațiu", "Doar în filme", "Doar sub pământ", "Nicăieri"], 0),
            ("Un aspirator inteligent este un robot?", ["Da", "Nu", "Este o pisică", "Este o mașină"], 0)
        ]
    elif theme_idx == 15: # Scratch Jr.
        questions = [
            ("Ce facem în Scratch Jr.?", ["Programăm povești și jocuri", "Mâncăm", "Dormim", "Facem curat"], 0),
            ("Cum arată personajul principal?", ["O pisică galbenă", "Un câine albastru", "Un elefant", "Un pește"], 0),
            ("Ce culoare are blocul de Start?", ["Galben (cu steag verde)", "Roșu", "Albastru", "Negru"], 0),
            ("Cum facem un personaj să se miște?", ["Folosim blocuri albastre cu săgeți", "Îl împingem cu degetul", "Suflăm în tabletă", "Îi spunem să plece"], 0),
            ("Ce face blocul roșu?", ["Oprește programul", "Îl pornește", "Schimbă culoarea", "Cântă"], 0)
        ]
    else:
        # Default questions for other themes
        questions = [
            (f"Despre ce învățăm la tema {theme_idx}?", ["Informatica", "Istorie", "Sport", "Gătit"], 0),
            ("Este distractiv să folosim calculatorul?", ["Da", "Nu", "Uneori", "Nu știu"], 0),
            ("Trebuie să fim atenți cu echipamentele?", ["Da, foarte atenți", "Nu, le putem lovi", "Sunt din fier și nu se strică", "Doar dacă ne vede cineva"], 0),
            ("Calculatorul este un instrument de?", ["Lucru și joacă", "Mâncat", "Dormit", "Săpat"], 0),
            ("Cine ne învață despre calculator?", ["Profesorul sau părinții", "Pisica", "Cățelul", "Nimeni"], 0)
        ]

    # Fill up to 25 questions by cycling/modifying if needed
    q_data_item = questions[(q_idx - 1) % len(questions)]
    
    # Add some variation to distractors if it's a repeated question
    q_text = q_data_item[0]
    if q_idx > len(questions):
        q_text += f" (Partea {q_idx // len(questions) + 1})"
    
    # Shuffle options and adjust correct index
    options = list(q_data_item[1])
    correct_text = options[q_data_item[2]]
    random.shuffle(options)
    new_correct = options.index(correct_text)
    
    return {
        "question": q_text,
        "options": options,
        "correct": new_correct
    }

def get_typing_data(theme_idx, t_idx):
    # Typing tasks for Grade 1: very simple words or short sentences
    words_by_theme = {
        1: ["unu", "doi", "trei", "patru", "cinci", "unu", "doi", "trei", "patru", "cinci"], # Fallback
        2: ["click", "mouse", "tasta", "sus", "jos", "stanga", "dreapta", "scrie", "litera", "cifra"],
        3: ["ecran", "poza", "film", "joc", "rosu", "verde", "albastru", "alb", "negru", "mare"],
        4: ["mic", "desen", "apas", "deschid", "cos", "folder", "nou", "vechi", "aici", "acolo"],
        6: ["creion", "pensula", "guma", "linie", "cerc", "patrat", "soare", "casa", "copac", "floare"],
        8: ["mama", "tata", "scoala", "elev", "carte", "caiet", "apa", "mar", "soare", "luna"],
        13: ["robot", "metal", "pas", "brat", "smart", "bec", "fir", "cap", "ochi", "voce"],
        15: ["start", "stop", "pisica", "bloc", "sar", "merg", "spune", "sunet", "fundal", "cod"],
        16: ["galben", "mov", "portocaliu", "maro", "roz", "gri", "forma", "triunghi", "stea", "inimioara"],
        24: ["salut", "mersi", "te rog", "pa", "bine", "rau", "prieten", "ajutor", "frumos", "politicos"]
    }
    
    theme_words = words_by_theme.get(theme_idx, ["calculator", "informatica", "elev", "clasa", "scoala", "prieten", "joaca", "invat", "ecran", "mouse"])
    word = theme_words[(t_idx - 1) % len(theme_words)]
    
    return {
        "question": f"Tastează cuvântul: {word}",
        "answer": word
    }

if __name__ == "__main__":
    final_data = generate_data()
    file_path = "C:/Users/User/tmp/codekids_k1_ro.json"
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(final_data, f, indent=2, ensure_ascii=False)
        print(f"Success: {file_path}")
    except Exception as e:
        print(f"Failed to write to {file_path}: {e}")
        local_path = "codekids_k1_ro.json"
        with open(local_path, "w", encoding="utf-8") as f:
            json.dump(final_data, f, indent=2, ensure_ascii=False)
        print(f"Saved to current directory: {local_path}")
