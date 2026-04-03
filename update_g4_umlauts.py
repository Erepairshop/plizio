import os
import re

files = [
  'app/astromath/games/AngleExplorer4.tsx',
  'app/astromath/games/AreaExplorer4.tsx',
  'app/astromath/games/DivisionExplorer4.tsx',
  'app/astromath/games/FractionExplorer4.tsx',
  'app/astromath/games/MultiplicationExplorer4.tsx',
  'app/astromath/games/PlaceValueExplorer4.tsx',
  'app/astromath/games/UnitExplorer4.tsx',
  'app/astromath/games/WordProblemExplorer4.tsx'
]

replacements = [
    (r'groess', r'größ'),
    (r'Groess', r'Größ'),
    (r'gehoer', r'gehör'),
    (r'Gehoer', r'Gehör'),
    (r'Waerme', r'Wärme'),
    (r'waerm', r'wärm'),
    (r'veraender', r'veränder'),
    (r'Veraender', r'Veränder'),
    (r'fliess', r'fließ'),
    (r'Fliess', r'Fließ'),
    (r'staerke', r'stärke'),
    (r'Staerke', r'Stärke'),
    (r'spaeter', r'später'),
    (r'aender', r'änder'),
    (r'Aender', r'Änder'),
    (r'Ergaenzung', r'Ergänzung'),
    (r'ergaenz', r'ergänz'),
    (r'Ergaenz', r'Ergänz'),
    (r'Gluehlampe', r'Glühlampe'),
    (r'Geraet', r'Gerät'),
    (r'traeg', r'träg'),
    (r'Traeg', r'Träg'),
    (r'flaech', r'fläch'),
    (r'Flaech', r'Fläch'),
    (r'Molekuel', r'Molekül'),
    (r'zusaetz', r'zusätz'),
    (r'zulaess', r'zuläss'),
    (r'gleichmaess', r'gleichmäß'),
    (r'Kraefte', r'Kräfte'),
    (r'waehl', r'wähl'),
    (r'Waehl', r'Wähl'),
    (r'verknuepf', r'verknüpf'),
    (r'fuehr', r'führ'),
    (r'Zaehler', r'Zähler'),
    (r'zaehler', r'zähler'),
    (r'Nenner', r'Nenner'), # No change needed
    (r'Brueche', r'Brüche'),
    (r'brueche', r'brüche'),
    (r'Bruch', r'Bruch'),
    (r'Kuerzen', r'Kürzen'),
    (r'kuerzen', r'kürzen'),
    (r'Erweitern', r'Erweitern'),
    (r'auszudruecken', r'auszudrücken'),
    (r'drueck', r'drück'),
    (r'Drueck', r'Drück'),
    (r'Rueck', r'Rück'),
    (r'rueck', r'rück'),
    (r'schliessen', r'schließen'),
    (r'Schliessen', r'Schließen'),
    (r'stossen', r'stoßen'),
    (r'Stossen', r'Stoßen'),
    (r'aeusser', r'äußer'),
    (r'Aeusser', r'Äußer'),
    (r'Loesung', r'Lösung'),
    (r'loesung', r'lösung'),
    (r'Uebung', r'Übung'),
    (r'uebung', r'übung'),
    (r'Ueber', r'Über'),
    (r'ueber', r'über')
]

for f in files:
    path = os.path.join('/home/borota25/Desktop/plizio', f)
    if not os.path.exists(path): continue
    
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    for bad, good in replacements:
        content = re.sub(r'\b' + bad, good, content)
        
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Fixed umlauts in {f}")
