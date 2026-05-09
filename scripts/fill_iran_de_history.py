# -*- coding: utf-8 -*-
"""
Fill missing German `descriptionAdvanced.de` and `factsAdvanced.de`
in lib/visualLab/data/poiExtraIranHistoryV2.ts.

Skip POIs already filled (only target id has empty fields).
"""
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TARGET = REPO / "lib" / "visualLab" / "data" / "poiExtraIranHistoryV2.ts"

# Hardcoded German history content (80-150 words descriptions, 6-8 facts)
DATA = {
    "iran-naqsh-e-jahan-history-v2": {
        "description": (
            "Der Meidan-e Emam, auch Naqsh-e Jahan-Platz („Abbild der Welt“) genannt, "
            "liegt im Herzen der iranischen Stadt Isfahan und ist ein architektonisches "
            "Meisterwerk der Safawiden-Dynastie. Die Safawiden hatten 1501 unter Schah "
            "Ismail I. ein neues persisches Großreich gegründet, das den schiitischen "
            "Islam zur Staatsreligion erhob. Schah Abbas I. ließ den monumentalen Platz "
            "ab dem Jahr 1598 anlegen, nachdem er Isfahan zur Hauptstadt erkoren hatte. "
            "Mit einer Länge von 512 Metern war er einer der größten urbanen Plätze "
            "der damaligen Welt. Eingerahmt wird die Anlage von vier Glanzstücken: "
            "der Schah-Moschee, der Scheich-Lotfollah-Moschee, dem Ali-Qapu-Palast und "
            "dem Eingang des Großen Basars. Hier fanden Paraden, religiöse Feste und "
            "Polospiele statt. Trotz späterer Umbrüche bis zur Islamischen Revolution "
            "von 1979 blieb der Platz ein Sinnbild persischer Hochkultur. "
            "Geschichte K8 — Safawidenreich und persische Stadtkultur."
        ),
        "facts": [
            "Der Platz wurde zwischen 1598 und 1629 unter Schah Abbas I. errichtet",
            "Mit 512 Metern Länge und 163 Metern Breite zählt er zu den größten der Welt",
            "Die türkisfarbene Hauptkuppel der Schah-Moschee erreicht eine Höhe von 52 Metern",
            "Die Safawiden-Dynastie regierte Persien von 1501 bis 1736",
            "Die ursprünglichen steinernen Polotore aus dem 17. Jahrhundert sind heute noch sichtbar",
            "Vom hölzernen Balkon des Ali-Qapu-Palastes verfolgten die Schahs die Zeremonien",
            "Die Scheich-Lotfollah-Moschee diente als private Gebetsstätte der königlichen Familie",
            "Seit 1979 steht der Platz auf der UNESCO-Welterbeliste"
        ],
    }
}


def fill_poi(text: str, poi_id: str, desc: str, facts: list[str]) -> tuple[str, bool]:
    # Find the POI block
    id_pattern = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
    m = id_pattern.search(text)
    if not m:
        print(f"  [WARN] POI not found: {poi_id}")
        return text, False

    # Search forward from POI start for descriptionAdvanced.de empty
    start = m.start()
    # Find the closing brace of this POI object — search next "  },\n"
    # We'll just operate forward by searching nearby.
    # Empty description: descriptionAdvanced: { ... de: "",
    desc_pat = re.compile(r'(descriptionAdvanced:\s*\{\s*\n\s*de:\s*)""(,)')
    facts_pat = re.compile(r'(factsAdvanced:\s*\{\s*\n\s*de:\s*)\[\](,)')

    # Localize search to this POI block (until next id: or end)
    next_id = id_pattern.search(text, m.end())
    block_end = next_id.start() if next_id else len(text)
    block = text[start:block_end]

    new_block = block
    changed = False

    if desc_pat.search(new_block):
        # Escape for JS double-quoted string
        esc = desc.replace('\\', '\\\\').replace('"', '\\"')
        new_block = desc_pat.sub(lambda mm: mm.group(1) + '"' + esc + '"' + mm.group(2), new_block, count=1)
        changed = True
    else:
        print(f"  [skip-desc] {poi_id}: descriptionAdvanced.de not empty")

    if facts_pat.search(new_block):
        items = ", ".join('"' + f.replace('\\', '\\\\').replace('"', '\\"') + '"' for f in facts)
        new_block = facts_pat.sub(lambda mm: mm.group(1) + '[' + items + ']' + mm.group(2), new_block, count=1)
        changed = True
    else:
        print(f"  [skip-facts] {poi_id}: factsAdvanced.de not empty")

    if changed:
        return text[:start] + new_block + text[block_end:], True
    return text, False


def main():
    text = TARGET.read_text(encoding="utf-8")
    total_changed = 0
    for poi_id, payload in DATA.items():
        text, changed = fill_poi(text, poi_id, payload["description"], payload["facts"])
        if changed:
            total_changed += 1
            print(f"  [OK] filled: {poi_id}")
    if total_changed:
        TARGET.write_text(text, encoding="utf-8")
        print(f"Wrote {TARGET} ({total_changed} POI(s) updated)")
    else:
        print("No changes.")


if __name__ == "__main__":
    main()
