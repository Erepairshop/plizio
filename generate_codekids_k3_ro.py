import json
import random
import os

themes = [
    "Internetul", "Pagina Web", "E-mailul", "Apeluri Video (Zoom)", "Învățarea Online",
    "Dispozitive Digitale", "File de Browser", "Bookmark-uri (Favorite)", "Căutarea Imaginilor", "Siguranța Descărcărilor",
    "Stocarea în Cloud", "Google Docs", "Tabele (Google Sheets)", "Prezentări (Google Slides)", "Formatarea Textului",
    "Desen Digital", "Editare Foto", "Algoritmi de Bază", "Proiecte Scratch", "Bucle în Scratch",
    "Condiții și Evenimente", "Gândire Inginerească", "Identitate Digitală", "Motoare de Căutare", "Proiect Final K3"
]

words_by_theme = {
    0: ["rețea", "site", "online", "router", "cablu", "conexiune", "web", "browser", "wifi", "navigare"],
    1: ["pagină", "link", "click", "scroll", "bară", "pictogramă", "meniu", "acasă", "conținut", "navigare"],
    2: ["scrisoare", "mesaj", "trimitere", "subiect", "atașament", "răspuns", "arond", "destinatar", "poștă", "spam"],
    3: ["cameră", "microfon", "sunet", "imagine", "logare", "conversație", "partajare", "mut", "galerie", "virtual"],
    4: ["curs", "profesor", "lecție", "încărcare", "video", "test", "temă", "cunoștințe", "școală", "platformă"],
    5: ["laptop", "tabletă", "mobil", "monitor", "mouse", "tastatură", "baterie", "procesor", "memorie", "dispozitiv"],
    6: ["filă", "fereastră", "comutare", "închidere", "nou", "deschidere", "grup", "sortare", "navigare", "rapid"],
    7: ["salvare", "favorit", "stea", "acces", "listă", "semn", "pagină", "stocare", "gestionare", "pictogramă"],
    8: ["imagine", "poză", "descărcare", "căutare", "rezultat", "mărime", "tip", "culoare", "fundal", "licență"],
    9: ["virus", "protecție", "siguranță", "salvare", "sursă", "încredere", "fișier", "instalare", "avertisment", "părinte"],
    10: ["cloud", "stocare", "drive", "partajare", "salvare", "distanță", "date", "fișier", "sincronizare", "capacitate"],
    11: ["document", "scriere", "tastare", "editare", "partajare", "comun", "salvare", "font", "titlu", "schiță"],
    12: ["tabel", "celulă", "coloană", "rând", "date", "funcție", "calcul", "diagramă", "valoare", "grilă"],
    13: ["diapozitiv", "prezentare", "animație", "tranziție", "text", "imagine", "discurs", "stil", "șablon", "proiecție"],
    14: ["îngroșat", "cursiv", "culoare", "mărime", "aliniere", "listă", "paragraf", "evidențiere", "subliniere", "literă"],
    15: ["linie", "formă", "culoare", "cerc", "pătrat", "pensulă", "radieră", "umplere", "grosime", "geometrie"],
    16: ["tăiere", "filtru", "luminozitate", "contrast", "redimensionare", "rotire", "corecție", "efect", "strat", "export"],
    17: ["pas", "ordine", "instrucțiune", "problemă", "soluție", "plan", "logică", "ramificare", "repetiție", "proces"],
    18: ["personaj", "fundal", "bloc", "mișcare", "pornire", "cod", "sunet", "costum", "variabilă", "interactiv"],
    19: ["buclă", "repetiție", "mereu", "ori", "inclus", "condiție", "oprire", "continuu", "ritm", "model"],
    20: ["dacă", "atunci", "detectare", "atingere", "tastă", "mesaj", "eveniment", "răspuns", "control", "logică"],
    21: ["proiectare", "construcție", "testare", "reparare", "idee", "model", "structură", "funcționare", "eficiență", "creație"],
    22: ["profil", "date", "parolă", "urmă", "comunitate", "comportament", "regulă", "protecție", "secret", "poreclă"],
    23: ["cuvânt", "căutare", "filtrare", "rezultat", "informație", "sursă", "adevăr", "verificare", "browser", "motor"],
    24: ["proiect", "echipă", "sarcină", "prezentare", "muncă", "încheiere", "evaluare", "rezultat", "împreună", "scop"]
}

def get_mcq_content(theme_idx, theme_name, q_idx):
    # Base questions adapted for Romanian
    base_questions = [
        f"Ce este {theme_name}?",
        f"Care dispozitiv este necesar pentru a folosi {theme_name}?",
        f"La ce este bun {theme_name}?",
        f"Cum folosim {theme_name} corect?",
        f"Care afirmație este adevărată despre {theme_name}?",
        f"Ce nu ar trebui să faci când folosești {theme_name}?",
        f"Ce buton este legat de {theme_name}?",
        f"Unde trebuie să dai click pentru {theme_name}?",
        f"De ce este important {theme_name}?",
        f"Ce regulă trebuie să respectăm în {theme_name}?",
        f"Care pictogramă reprezintă {theme_name}?",
        f"Cine ne poate ajuta cu {theme_name}?",
        f"Când avem nevoie de {theme_name}?",
        f"Cum putem lucra mai rapid cu {theme_name}?",
        f"Care este modul sigur de a folosi {theme_name}?",
        f"Ce înseamnă {theme_name} în informatică?",
        f"Ce program folosim pentru {theme_name}?",
        f"Ce tastă ne ajută în timpul {theme_name}?",
        f"Care este primul pas pentru {theme_name}?",
        f"Ce formă are de obicei simbolul pentru {theme_name}?",
        f"Cum salvăm munca noastră în {theme_name}?",
        f"Ce dispozitiv aparține cel mai mult de {theme_name}?",
        f"Ce facem dacă apare o eroare în {theme_name}?",
        f"Care este o noutate în domeniul {theme_name}?",
        f"Ce am învățat astăzi despre {theme_name}?"
    ]
    
    q_text = base_questions[q_idx % 25]
    
    # Specific content for some themes to make it more realistic
    options = ["Varianta corectă", "O variantă greșită", "Altă variantă incorectă", "Total greșit"]
    
    if theme_idx == 0: # Internetul
        if q_idx == 0: q_text, options = "Ce este internetul?", ["O rețea globală de calculatoare", "Un tip de mâncare", "O marcă de pantofi", "Numele ecranului"]
        elif q_idx == 1: q_text, options = "Ce avem nevoie pentru a naviga pe internet?", ["O conexiune Wifi sau cablu", "O lingură", "Un ursuleț de pluș", "Doar o masă"]
    elif theme_idx == 2: # E-mail
        if q_idx == 0: q_text, options = "Care este rolul simbolului 'arond' (@)?", ["Separă numele de utilizator de domeniu", "Este un mic animal", "Este piciorul calculatorului", "Este un decor pentru monitor"]
    elif theme_idx == 18: # Scratch
        if q_idx == 0: q_text, options = "Ce este Scratch?", ["Un limbaj de programare pentru copii", "Un joc de fotbal", "O aplicație de gătit", "Un program de muzică"]
    elif theme_idx == 19: # Bucle
        if q_idx == 0: q_text, options = "Ce este o buclă în programare?", ["O instrucțiune care se repetă", "Un desen rotund", "Oprirea calculatorului", "Numele unui personaj"]

    correct_val = options[0]
    random.shuffle(options)
    new_corr = options.index(correct_val)
    
    return q_text, options, new_corr

def generate_tasks(theme_index, theme_name):
    tasks = []
    
    # MCQ Tasks (25)
    for i in range(25):
        q_text, opts, corr = get_mcq_content(theme_index, theme_name, i)
        tasks.append({
            "type": "mcq",
            "question": q_text,
            "options": opts,
            "correct": corr
        })

    # Typing Tasks (10)
    typing_words = words_by_theme.get(theme_index, ["calculator", "internet", "elev", "copil", "școală", "joacă", "cod", "mouse", "tastatură", "fereastră"])
    for j in range(10):
        word = typing_words[j]
        tasks.append({
            "type": "typing",
            "question": f"Tastează cuvântul: {word}",
            "answer": word
        })
        
    return tasks

data = {}
for idx, theme in enumerate(themes):
    data[str(idx + 1)] = {
        "theme": theme,
        "tasks": generate_tasks(idx, theme)
    }

output_path = "C:/Users/User/tmp/codekids_k3_ro.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"File created successfully at {output_path}")
