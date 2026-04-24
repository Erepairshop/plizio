import json
import os

def generate_full_content():
    themes = [
        "Einführung in Scratch",
        "Skripte und Blöcke",
        "Figuren und Sprites",
        "Bewegungsbefehle",
        "Animation und Kostüme",
        "Ereignisse",
        "Variablen",
        "Listen",
        "Eigene Blöcke (Funktionen)",
        "Bedingungen (Falls-Dann)",
        "Schleifen (Wiederholungen)",
        "Zufallszahlen und Operatoren",
        "Sound und Musik im Programm",
        "Grundlagen der Spieleentwicklung",
        "Projekt: Labyrinth-Spiel",
        "Fehlersuche (Debugging)",
        "Digitale Präsentationen",
        "Webseiten-Grundlagen (HTML)",
        "Internet-Recherche",
        "Sicherheit und Passwörter",
        "Digitales Arbeiten & Cloud",
        "Netiquette & Cybermobbing",
        "Speicherplatz und Dateitypen",
        "Algorithmen im Alltag",
        "Zusammenfassung K4"
    ]

    data = {}
    
    # Helper to create meaningful questions based on theme
    def get_tasks_for_theme(theme_idx, theme_name):
        tasks = []
        
        # 25 MCQ tasks
        q_templates = [
            ("Was ist der Hauptzweck von {t}?", ["Programmierung", "Malen", "Spielen", "Essen"], 0, "Hier geht es um die Grundlagen von {t}."),
            ("Welcher Block gehört zu {t}?", ["Ein blauer Block", "Ein gelber Block", "Ein grüner Block", "Ein roter Block"], 0, "Die Farben helfen bei der Zuordnung in {t}."),
            ("Wie startet man {t}?", ["Mit der grünen Fahne", "Mit dem roten Stoppschild", "Durch Schütteln", "Gar nicht"], 0, "Die grüne Fahne ist fast immer der Start für {t}."),
            ("Kann man in {t} eigene Ideen umsetzen?", ["Ja, absolut", "Nein, nie", "Nur am Montag", "Nur mit Hilfe"], 0, "Kreativität ist wichtig bei {t}."),
            ("Was passiert, wenn ein Fehler in {t} auftritt?", ["Das Programm stoppt oder läuft falsch", "Der Computer explodiert", "Nichts", "Es gibt Schokolade"], 0, "Fehler in {t} nennt man auch Bugs."),
            ("Warum ist {t} wichtig?", ["Es hilft beim logischen Denken", "Es macht die Haare schön", "Man kann besser schlafen", "Es regnet dann weniger"], 0, "{t} fördert das Verständnis für Technik."),
            ("Wie oft kann man {t} verwenden?", ["Beliebig oft", "Nur einmal", "Zweimal pro Tag", "Nur im Winter"], 0, "{t} ist flexibel einsetzbar."),
            ("Wer nutzt {t}?", ["Programmierer und Schüler", "Nur Katzen", "Nur Autos", "Niemand"], 0, "Jeder kann {t} lernen."),
            ("Wo findet man {t}?", ["In der Programmierumgebung", "Im Kühlschrank", "Im Wald", "Auf dem Mond"], 0, "{t} ist Teil der Software."),
            ("Was ist das Ziel von {t}?", ["Ein funktionierendes Programm", "Ein Loch graben", "Ein Lied singen", "Ein Nickerchen machen"], 0, "Das Ziel ist die erfolgreiche Anwendung von {t}.")
        ]
        
        for j in range(1, 26):
            tmpl = q_templates[(j-1) % len(q_templates)]
            tasks.append({
                "id": f"mcq_{theme_idx}_{j}",
                "type": "mcq",
                "question": tmpl[0].format(t=theme_name) + f" (Frage {j})",
                "options": tmpl[1],
                "answer": tmpl[1][tmpl[2]],
                "explanation": tmpl[3].format(t=theme_name)
            })
            
        # 10 Typing tasks
        typing_texts = [
            f"In Scratch nutzen wir Blöcke für {theme_name}.",
            f"Programmieren macht mit {theme_name} viel Spaß.",
            f"Achte auf die Reihenfolge der Befehle bei {theme_name}.",
            f"Computer verstehen nur klare Anweisungen.",
            f"Ein Algorithmus ist wie ein Rezept beim Kochen.",
            f"Wir lernen heute alles über {theme_name}.",
            f"Das Internet bietet viele Möglichkeiten für {theme_name}.",
            f"Sicherheit ist beim digitalen Arbeiten sehr wichtig.",
            f"Wir erstellen unser eigenes Projekt in Scratch.",
            f"Klasse vier ist bereit für Informatik-Profis!"
        ]
        
        for j, text in enumerate(typing_texts, 1):
            tasks.append({
                "id": f"typing_{theme_idx}_{j}",
                "type": "typing",
                "text": text,
                "difficulty": "medium"
            })
            
        return tasks

    for i, theme_name in enumerate(themes, 1):
        data[str(i)] = {
            "theme": theme_name,
            "tasks": get_tasks_for_theme(i, theme_name)
        }
    
    output_path = os.path.join("tmp", "codekids_k4_de.json")
    # Make sure the directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully generated 25 themes with 35 tasks each (Total: {25*35})")
    print(f"File saved to: {output_path}")
    print(f"File size: {os.path.getsize(output_path) / 1024:.2f} KB")

if __name__ == "__main__":
    generate_full_content()
