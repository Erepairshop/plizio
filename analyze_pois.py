import re
import json

def analyze():
    with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Match POI objects. This is a bit tricky with regex for nested objects, 
    # but since the structure is consistent, we can try to find id and the fields.
    
    # Let's find all POI blocks. They start with { and end with }, (with some indentation)
    # Actually, it's easier to find the IDs and check their hu fields.
    
    poi_matches = re.finditer(r'\{[^{]*?id:\s*"([^"]+)"[^{]*?descriptionAdvanced:\s*\{[^{]*?hu:\s*(?P<desc_hu>""|\[\]|"[^"]*")[^}]*?\}[^{]*?factsAdvanced:\s*\{[^{]*?hu:\s*(?P<fact_hu>""|\[\]|"[^"]*")[^}]*?\}', content, re.DOTALL)
    
    # Wait, factsAdvanced.hu is often [], not ""
    # Let's refine the regex.
    
    results = []
    # Simplified approach: find all occurrences of "id: ..." and then look ahead for descriptionAdvanced and factsAdvanced
    ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    # To be more precise, I'll use a state machine or more careful regex.
    # But for now, let's just grep for the empty ones.
    pass

# Let's just use grep to see how many empty ones there are.
