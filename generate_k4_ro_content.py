import json
import os

themes_ro = [
    "Introducere în Scratch",
    "Scripturi și blocuri",
    "Sprite-uri (Personaje)",
    "Comenzi de mișcare",
    "Animație",
    "Evenimente",
    "Variabile",
    "Liste",
    "Funcții în Scratch",
    "Condiții (Dacă... atunci)",
    "Cicluri (Repetări)",
    "Numere aleatorii",
    "Sunet și muzică în programe",
    "Bazele dezvoltării jocurilor",
    "Jocul Labirint",
    "Depanare (Debugging)",
    "Sarcini de prezentare",
    "Bazele creării paginilor web (HTML)",
    "Cercetare online",
    "Securitatea site-urilor web",
    "Munca digitală",
    "Probleme de etică",
    "Volumul de date",
    "Recapitulare K4",
    "Proiect Final"
]

def generate_mcqs(theme_idx, theme_name):
    mcqs = []
    # Base questions related to the theme
    base_questions = [
        f"Ce este cel mai important în {theme_name}?",
        f"Cum activăm un element în {theme_name}?",
        f"Care este rolul principal al {theme_name}?",
        f"Unde găsim instrumentele pentru {theme_name}?",
        f"Ce bloc folosim pentru {theme_name}?",
        f"Cum putem modifica setările în {theme_name}?",
        f"De ce este util să folosim {theme_name}?",
        f"Care este primul pas în {theme_name}?",
        f"Ce se întâmplă dacă ignorăm {theme_name}?",
        f"Cum salvăm progresul în {theme_name}?"
    ]
    
    for i in range(1, 26):
        q_text = f"Întrebarea {i} despre {theme_name}: "
        if i <= len(base_questions):
            q_text += base_questions[i-1]
        else:
            q_text += f"Care este funcția elementului {i} în acest context?"
            
        mcqs.append({
            "question": q_text,
            "options": [
                f"Opțiunea corectă pentru {theme_name}",
                "Opțiune greșită A",
                "Opțiune greșită B",
                "Opțiune greșită C"
            ],
            "answer": f"Opțiunea corectă pentru {theme_name}"
        })
    return mcqs

def generate_typing(theme_idx, theme_name):
    words = [
        theme_name.split()[0],
        "programare",
        "blocuri",
        "cod",
        "algoritm",
        "informatică",
        "tehnologie",
        "proiect",
        "ecran",
        "tastatură"
    ]
    return words

data = {}
for idx, theme in enumerate(themes_ro):
    data[str(idx + 1)] = {
        "theme": theme,
        "tasks": {
            "mcq": generate_mcqs(idx, theme),
            "typing": generate_typing(idx, theme)
        }
    }

output_path = r"C:/Users/User/tmp/codekids_k4_ro.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Generated {len(data)} themes in {output_path}")
