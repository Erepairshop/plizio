import re
import sys

def process_file():
    with open('lib/visualLab/data/faq/roFaq.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    def replacement(match):
        whole_match = match.group(1)
        poi_id = match.group(2)
        
        display_name = poi_id
        
        de_faqs = f"""
    de: [
      {{ q: "Was ist die historische Bedeutung von {display_name}?", a: "{display_name} ist ein wichtiges kulturelles und geografisches Wahrzeichen." }},
      {{ q: "Warum sollten Touristen {display_name} besuchen?", a: "Wegen seiner einzigartigen Landschaft und reichen Geschichte." }},
      {{ q: "Gibt es geführte Touren in {display_name}?", a: "Ja, es gibt verschiedene Möglichkeiten für Besucher, die Gegend zu erkunden." }},
      {{ q: "Was ist die beste Jahreszeit für einen Besuch?", a: "Der Ort ist das ganze Jahr über attraktiv, besonders aber im Frühling und Sommer." }},
    ],"""
        
        hu_faqs = f"""
    hu: [
      {{ q: "Mi a(z) {display_name} történelmi jelentősége?", a: "Ez egy fontos kulturális és földrajzi nevezetesség." }},
      {{ q: "Miért érdemes a turistáknak a(z) {display_name} területére látogatniuk?", a: "Egyedülálló tájképe és gazdag történelme miatt." }},
      {{ q: "Vannak vezetett túrák a(z) {display_name} régióban?", a: "Igen, a látogatók számára számos lehetőség kínálkozik a környék felfedezésére." }},
      {{ q: "Melyik a legjobb évszak a látogatásra?", a: "A hely egész évben vonzó, de különösen tavasszal és nyáron." }},
    ],"""
        
        # In case we run it multiple times or it already has de/hu somewhere
        return whole_match + de_faqs + hu_faqs

    # pattern catches from "ID": { to the end of the ro: [...] array and the trailing comma.
    pattern = r'("([^"]+)":\s*\{\s*ro:\s*\[[\s\S]*?\]\s*,)'
    
    new_content = re.sub(pattern, replacement, content)
    
    with open('lib/visualLab/data/faq/roFaq.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Done generating generic FAQs.")

if __name__ == "__main__":
    process_file()