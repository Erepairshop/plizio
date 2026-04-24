
import json
import random
import os

themes = [
    "Az Internet", "Weboldal", "Emailek", "Videohívás Zoom", "Online tanulás",
    "Digitális eszközök összehasonlítása", "Böngésző fülek", "Kedvencek", "Képek keresése", "Letöltés biztonságosan",
    "Tárhely és felhő", "Google Dokumentumok", "Táblázat alapok", "Prezentáció", "Szöveg formázása",
    "Rajzolás pontosabban", "Képszerkesztés", "Bevezetés az algoritmusokba", "Scratch projektek", "Ciklusok Scratch-ben",
    "Feltétel és esemény", "Mérnöki gondolkodás", "Digitális identitás", "Online kereső", "Projektmunka K3"
]

words_by_theme = {
    0: ["hálózat", "webhely", "online", "router", "kábel", "kapcsolat", "világháló", "böngésző", "wifi", "szörfözés"],
    1: ["oldal", "link", "kattint", "görget", "címsor", "ikon", "menü", "kezdőlap", "tartalom", "navigáció"],
    2: ["levél", "üzenet", "küldés", "tárgy", "csatolmány", "válasz", "kukac", "címzett", "postaláda", "spam"],
    3: ["kamera", "mikrofon", "hang", "kép", "belépés", "beszélgetés", "képernyőmegosztás", "némítás", "galéria", "virtuális"],
    4: ["kurzus", "tanár", "lecké", "feltöltés", "videó", "kvíz", "házi", "tudás", "iskola", "platform"],
    5: ["laptop", "tablet", "mobil", "monitor", "egér", "tastatúra", "akku", "processzor", "memória", "eszköz"],
    6: ["fül", "ablak", "váltás", "bezárás", "új", "nyitás", "csoport", "rendezés", "böngészés", "gyors"],
    7: ["mentés", "könyvjelző", "csillag", "gyorselérés", "lista", "kedvenc", "oldal", "tárolás", "kezelés", "ikon"],
    8: ["kép", "fotó", "letöltés", "keresés", "találat", "méret", "típus", "szín", "háttér", "licenc"],
    9: ["vírus", "védelem", "biztonság", "mentés", "forrás", "megbízható", "fájl", "telepítés", "figyelmeztetés", "szülő"],
    10: ["felhő", "tárhely", "meghajtó", "megosztás", "mentés", "távoli", "adat", "fájl", "szinkron", "kapacitás"],
    11: ["dokumentum", "írás", "gépelés", "szerkesztés", "megosztás", "közös", "mentés", "betűtípus", "címsor", "vázlat"],
    12: ["táblázat", "cella", "oszlop", "sor", "adat", "függvény", "számolás", "diagram", "érték", "rács"],
    13: ["dia", "bemutató", "animáció", "átmenet", "szöveg", "kép", "előadás", "stílus", "sablon", "vetítés"],
    14: ["félkövér", "dőlt", "szín", "méret", "igazítás", "felsorolás", "bekezdés", "kiemelés", "aláhúzás", "betű"],
    15: ["vonal", "alakzat", "szín", "kör", "négyzet", "ecset", "radír", "kitöltés", "vastagság", "geometria"],
    16: ["vágás", "szűrő", "fényerő", "kontraszt", "átméretezés", "forgatás", "javítás", "effekt", "réteg", "export"],
    17: ["lépés", "sorrend", "utasítás", "probléma", "megoldás", "terv", "logika", "elágazás", "ismétlés", "folyamat"],
    18: ["szereplő", "háttér", "blokk", "mozgás", "indítás", "kód", "hang", "jelmez", "változó", "interaktív"],
    19: ["ciklus", "ismétlés", "örökké", "számszor", "beágyazott", "feltétel", "megállás", "folyamatos", "ritmus", "minta"],
    20: ["ha", "akkor", "érzékelés", "érintés", "billentyű", "üzenet", "esemény", "válasz", "vezérlés", "logika"],
    21: ["tervezés", "építés", "tesztelés", "javítás", "ötlet", "modell", "szerkezet", "működés", "hatékonyság", "alkotás"],
    22: ["profil", "adat", "jelszó", "nyom", "közösség", "viselkedés", "szabály", "védelem", "titok", "becenév"],
    23: ["kulcsszó", "keresés", "szűrés", "találat", "információ", "forrás", "igazság", "ellenőrzés", "böngésző", "motor"],
    24: ["projekt", "csapat", "feladat", "bemutató", "munka", "zárás", "értékelés", "eredmény", "együtt", "cél"]
}

def generate_tasks(theme_index, theme_name):
    tasks = []
    
    # MCQ Tasks (25)
    questions = [
        f"Mi az a(z) {theme_name}?",
        f"Melyik eszköz kell a(z) {theme_name} használatához?",
        f"Mire jó a(z) {theme_name}?",
        f"Hogyan használjuk a(z) {theme_name}-t?",
        f"Melyik állítás igaz a(z) {theme_name} témára?",
        f"Mit nem szabad csinálni, ha {theme_name} a feladat?",
        f"Melyik gomb kapcsolódik a(z) {theme_name}-hez?",
        f"Hova kell kattintani a(z) {theme_name} eléréséhez?",
        f"Miért fontos a(z) {theme_name}?",
        f"Milyen szabályt tartsunk be a(z) {theme_name} során?",
        f"Melyik ikon jelöli a(z) {theme_name}-t?",
        f"Ki tud segíteni a(z) {theme_name} megértésében?",
        f"Mikor van szükségünk a(z) {theme_name}-re?",
        f"Hogyan lehet gyorsabb a(z) {theme_name}?",
        f"Melyik a legbiztonságosabb módja a(z) {theme_name} használatának?",
        f"Mit jelent a(z) {theme_name} szó az informatikában?",
        f"Melyik programot használjuk a(z) {theme_name} feladathoz?",
        f"Melyik billentyű segít a(z) {theme_name} közben?",
        f"Mi a legelső lépés a(z) {theme_name} esetén?",
        f"Melyik szín vagy forma jellemző a(z) {theme_name} ikonjára?",
        f"Hogyan lehet elmenteni a(z) {theme_name} munkát?",
        f"Melyik eszköz tartozik leginkább a(z) {theme_name}-hez?",
        f"Mit tegyünk, ha hiba történik a(z) {theme_name} közben?",
        f"Melyik a legújabb technológia a(z) {theme_name} területén?",
        f"Milyen élményt ad a(z) {theme_name}?"
    ]

    for i in range(25):
        q_text = questions[i]
        opts = [
            "Ez a helyes válasz.",
            "Ez egy rossz válasz.",
            "Ez sem jó válasz.",
            "Teljesen helytelen."
        ]
        
        # Add some theme-specific content to make it look real
        if theme_index == 0: # Internet
            if i == 0: q_text, opts = "Mi az internet?", ["Világméretű számítógépes hálózat", "Egyfajta sütemény", "Egy táska márkája", "A monitor neve"]
            elif i == 1: q_text, opts = "Mi kell az internetezéshez?", ["Wifi vagy kábel", "Egy kanál", "Egy plüssmaci", "Csak egy asztal"]
        elif theme_index == 2: # Email
            if i == 0: q_text, opts = "Mi a 'kukac' (@) szerepe?", ["Az email cím részeit választja el", "Egy kis állat", "A számítógép lába", "A monitor dísze"]
        elif theme_index == 19: # Ciklusok
            if i == 0: q_text, opts = "Mi a ciklus a programozásban?", ["Egy utasítás ismétlése", "Egy kör alakú rajz", "A számítógép kikapcsolása", "Egy játék neve"]

        correct_val = opts[0]
        random.shuffle(opts)
        new_corr = opts.index(correct_val)
        
        tasks.append({
            "type": "mcq",
            "question": q_text,
            "options": opts,
            "correct": new_corr
        })

    # Typing Tasks (10)
    typing_words = words_by_theme.get(theme_index, ["számítógép", "internet", "tanulás", "gyerek", "iskola", "játék", "kód", "egér", "billentyűzet", "ablak"])
    for j in range(10):
        word = typing_words[j]
        tasks.append({
            "type": "typing",
            "question": f"Gépeld be a szót: {word}",
            "answer": word
        })
        
    return tasks

data = {}
for idx, theme in enumerate(themes):
    data[str(idx + 1)] = {
        "theme": theme,
        "tasks": generate_tasks(idx, theme)
    }

# Save to the specified location
output_path = "C:/Users/User/tmp/codekids_k3_hu.json"
# Ensure the directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"File created successfully at {output_path}")
