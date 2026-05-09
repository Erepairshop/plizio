"""Fill descriptionAdvanced.de + factsAdvanced.de for empty Zimbabwe city POIs.

After audit, only `shangani-cities-v2` had no advanced fields and no image.
The other 59 POIs already have descriptionAdvanced.de filled.

Strategy:
  - Iterate DATA entries
  - For each POI: locate id block, check if descriptionAdvanced exists
  - If missing: insert advanced fields just before the POI's closing `}` brace
  - Skip filled ones
"""
from __future__ import annotations

import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraZimbabweCitiesV2.ts"

# (id, descriptionAdvanced.de [80-150 Wörter], factsAdvanced.de [6-8])
DATA: dict[str, tuple[str, list[str]]] = {
    "shangani": (
        "Shangani ist eine kleine Stadt in der Provinz Matabeleland Nord etwa 70 Kilometer nordöstlich von Bulawayo mit rund 2.500 Einwohnern. Der Ort liegt am gleichnamigen Fluss und wurde während der britischen Kolonialzeit Rhodesien als Eisenbahnstation und Bergbausiedlung gegründet. Eine besondere historische Bedeutung hat Shangani durch die Schlacht am Shangani-Fluss von 1893 – hier kämpften britische Pioniere unter Major Allan Wilson gegen die Ndebele unter König Lobengula im sogenannten Ersten Matabeleland-Krieg. Die Patrouille Wilsons wurde dabei vollständig vernichtet, die Schlacht gilt als einer der wichtigsten Momente der rhodesischen Kolonialgeschichte. Heute lebt die Region von Goldbergbau und Rinderzucht. Erdkunde K7 – Kolonialkriege und historisches Gedenken.",
        [
            "Kleinstadt in Matabeleland Nord.",
            "Etwa 70 Kilometer nordöstlich von Bulawayo.",
            "Bevölkerung von rund 2.500 Einwohnern.",
            "Liegt am Shangani-Fluss.",
            "Schauplatz der Schlacht von 1893.",
            "Erster Matabeleland-Krieg gegen König Lobengula.",
            "Wilsons Patrouille wurde vernichtet.",
            "Heute Goldbergbau und Rinderzucht in der Region.",
        ],
    ),
}


def find_poi_block(src: str, full_id: str) -> tuple[int, int] | None:
    """Return (start, end_of_object) where end_of_object is index of the
    closing `}` that ends this POI object."""
    id_pat = re.compile(r'id:\s*"' + re.escape(full_id) + r'"')
    m = id_pat.search(src)
    if not m:
        return None
    # Walk from the opening `{` of the object back, then forward to find matching close.
    # The object opens with `  {` before the id. We can simply scan forward from id
    # and balance braces starting at depth 1 (we are inside the object).
    depth = 1
    i = m.end()
    in_string = False
    string_char = ""
    while i < len(src) and depth > 0:
        c = src[i]
        if in_string:
            if c == "\\":
                i += 2
                continue
            if c == string_char:
                in_string = False
        else:
            if c in ('"', "'", "`"):
                in_string = True
                string_char = c
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    return (m.start(), i)
        i += 1
    return None


def build_insertion(desc: str, facts: list[str]) -> str:
    facts_repr = ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts)
    return (
        ',\n    descriptionAdvanced: {\n'
        f'      de: "{desc}"\n'
        '    },\n'
        '    factsAdvanced: {\n'
        f'      de: [{facts_repr}]\n'
        '    }\n  '
    )


def main() -> None:
    src = FILE.read_text(encoding="utf-8")
    inserted = 0
    skipped = 0

    for poi_id, (desc, facts) in DATA.items():
        full_id = f"{poi_id}-cities-v2"
        bounds = find_poi_block(src, full_id)
        if bounds is None:
            print(f"NOT_FOUND: {full_id}")
            skipped += 1
            continue
        start, end = bounds
        block = src[start:end + 1]
        if "descriptionAdvanced" in block:
            print(f"SKIP (already filled): {full_id}")
            skipped += 1
            continue

        # Find the trailing `,\n  }` or `\n  }` of the POI object — the `}` is at `end`.
        # We need to splice in the insertion just before that `}`.
        # Look back from `end` for the last meaningful comma or `}` of facts.
        # Simpler: replace the last few chars `\n  }` with insertion + `\n  }`.
        # We'll trim trailing whitespace before `end` and insert there.
        before = src[:end]
        # Strip trailing whitespace immediately before `}` so we can append cleanly.
        stripped = before.rstrip(" \n")
        # If the last non-ws char is `,`, drop it (we'll re-add a comma in insertion).
        if stripped.endswith(","):
            stripped = stripped[:-1]
        insertion = build_insertion(desc, facts)
        new_text = stripped + insertion + "}"
        src = new_text + src[end + 1:]
        inserted += 1
        print(f"OK: {full_id}")

    FILE.write_text(src, encoding="utf-8")
    print(f"\nDone. Inserted: {inserted}, Skipped: {skipped}, Total DATA: {len(DATA)}")


if __name__ == "__main__":
    main()
