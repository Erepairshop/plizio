# -*- coding: utf-8 -*-
"""
fill_panama_seo.py

Konszolidálja a poiExtraPanama*.ts fájlokban a duplikált
descriptionAdvanced / factsAdvanced blokkokat:

A POI objektumokon belül több duplikált `descriptionAdvanced: { ... }` és
`factsAdvanced: { ... }` blokk van, mindegyik más nyelvi szövegekkel.
A TS szempontból az utolsó blokk nyer, de az utolsó blokkokban gyakran
csak `de` van kitoltve, `hu/ro/en` ures (`""` vagy `[]`).

A szkript minden POI-on belul:
  1. Megkeresi az osszes descriptionAdvanced es factsAdvanced blokkot.
  2. Mindegyikbol kibanyassza a per-language szovegeket.
  3. Egyesiti oket: nyelvenkent az ELSO nem-ures (vagy a leghosszabb) szoveget tartja meg.
  4. Az utolsot atirja az egyesitett tartalommal, a korabbi duplikatumokat torli.

Ha egy nyelvre nincs adat, a mezo egyszeruen hianyzik a kimenetbol
(opcionalis a tipusban). Bizonytalan esetekben kihagy.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(r"C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib" / "visualLab" / "data"

PANAMA_FILES = [
    "poiExtraPanamaCitiesV2.ts",
    "poiExtraPanamaEconomicV2.ts",
    "poiExtraPanamaHistoryV2.ts",
    "poiExtraPanamaLandmarksV2.ts",
    "poiExtraPanamaLifeV2.ts",
    "poiExtraPanamaNatureV2.ts",
    "poiExtraPanamaReliefV2.ts",
]

LANGS = ("de", "hu", "ro", "en")


def find_matching_brace(s: str, open_pos: int) -> int:
    """Visszaadja a `{`-hez tartozo `}` poziciojat. open_pos a `{`-en."""
    assert s[open_pos] == "{"
    depth = 0
    i = open_pos
    n = len(s)
    in_str = None  # None | '"' | "'" | "`"
    escape = False
    while i < n:
        ch = s[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_str:
                in_str = None
            i += 1
            continue
        if ch in ('"', "'", "`"):
            in_str = ch
            i += 1
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("Unbalanced braces starting at %d" % open_pos)


def find_top_level_objects(arr_body: str) -> list[tuple[int, int]]:
    """Visszaadja a top-level POI objektumok (`{...}`) tartomanyat (start, end_exclusive)."""
    out = []
    i = 0
    n = len(arr_body)
    in_str = None
    escape = False
    while i < n:
        ch = arr_body[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_str:
                in_str = None
            i += 1
            continue
        if ch in ('"', "'", "`"):
            in_str = ch
            i += 1
            continue
        if ch == "{":
            end = find_matching_brace(arr_body, i)
            out.append((i, end + 1))
            i = end + 1
            continue
        i += 1
    return out


# Megkeresi a kulcsneveket POI-objektum scope-jaban (1. szintu lap-kulcsok).
def find_top_level_key_blocks(obj_body: str, key: str) -> list[tuple[int, int, int]]:
    """
    obj_body: POI objektum belseje (a `{` es `}` kozti resz).
    key: pl. "descriptionAdvanced".
    Visszaadja a kulcs elofordulasait: (key_start, value_start, value_end_exclusive).
      - key_start: ahol a `key:` kulcs neve kezdodik (sor elejen kis margoval).
      - value_start: a `{` pozicio.
      - value_end_exclusive: a tartozo `}` utan 1 (azaz `}` index + 1).
    Csak top-level (depth==0) kulcsokat ad vissza.
    """
    out = []
    i = 0
    n = len(obj_body)
    depth = 0
    in_str = None
    escape = False

    # Token regex a kulcsra: szo-elejen, key kovetkezik, majd `:`.
    pattern = re.compile(r"\b" + re.escape(key) + r"\s*:\s*")

    while i < n:
        ch = obj_body[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == in_str:
                in_str = None
            i += 1
            continue
        if ch in ('"', "'", "`"):
            in_str = ch
            i += 1
            continue
        if ch == "{":
            depth += 1
            i += 1
            continue
        if ch == "}":
            depth -= 1
            i += 1
            continue
        if depth == 0:
            m = pattern.match(obj_body, i)
            if m:
                # value start: utana kovetkezo `{`-et keresunk
                j = m.end()
                # ha nem `{` van, kihagyjuk (lehet pl. masik tipusu ertek)
                if j < n and obj_body[j] == "{":
                    end = find_matching_brace(obj_body, j)
                    out.append((m.start(), j, end + 1))
                    i = end + 1
                    continue
                else:
                    i = j
                    continue
        i += 1
    return out


# A descriptionAdvanced blokk -> {de:str, hu:str, ro:str, en:str}
def parse_lang_strings(block_body: str) -> dict[str, str]:
    """block_body: a `{` es `}` koztti resz egy descriptionAdvanced ertekbol."""
    result = {}
    # Tobbsoros stringek miatt re.DOTALL nem eleg; mi okosabb: keressunk
    # `lang:` mintakat, majd a kovetkezo string literalt.
    n = len(block_body)
    for lang in LANGS:
        pat = re.compile(r"\b" + lang + r"\s*:\s*")
        for m in pat.finditer(block_body):
            j = m.end()
            if j >= n:
                continue
            ch = block_body[j]
            if ch not in ('"', "'", "`"):
                continue
            # parse string literal
            quote = ch
            k = j + 1
            buf = []
            while k < n:
                c = block_body[k]
                if c == "\\":
                    if k + 1 < n:
                        buf.append(block_body[k:k + 2])
                        k += 2
                        continue
                if c == quote:
                    break
                buf.append(c)
                k += 1
            text = "".join(buf)
            # csak a leghosszabb, nem ures
            if text.strip():
                if lang not in result or len(text) > len(result[lang]):
                    result[lang] = text
            break  # csak az elso elofordulast vesszuk per lang per blokk
    return result


def parse_lang_arrays(block_body: str) -> dict[str, list[str]]:
    """block_body: factsAdvanced ertek belseje."""
    result = {}
    n = len(block_body)
    for lang in LANGS:
        pat = re.compile(r"\b" + lang + r"\s*:\s*\[")
        m = pat.search(block_body)
        if not m:
            continue
        # find matching ]
        depth = 1
        k = m.end()  # right after [
        in_str = None
        escape = False
        arr_start = k
        while k < n and depth > 0:
            c = block_body[k]
            if in_str:
                if escape:
                    escape = False
                elif c == "\\":
                    escape = True
                elif c == in_str:
                    in_str = None
                k += 1
                continue
            if c in ('"', "'", "`"):
                in_str = c
                k += 1
                continue
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        arr_inner = block_body[arr_start:k]
        # parse string literal-okat
        items = []
        i = 0
        m2 = len(arr_inner)
        while i < m2:
            c = arr_inner[i]
            if c in ('"', "'", "`"):
                quote = c
                j = i + 1
                buf = []
                while j < m2:
                    cc = arr_inner[j]
                    if cc == "\\" and j + 1 < m2:
                        buf.append(arr_inner[j:j + 2])
                        j += 2
                        continue
                    if cc == quote:
                        break
                    buf.append(cc)
                    j += 1
                items.append("".join(buf))
                i = j + 1
                continue
            i += 1
        # csak nem ures
        if any(it.strip() for it in items):
            cur = result.get(lang, [])
            if len(items) > len(cur):
                result[lang] = items
    return result


def serialize_desc(merged: dict[str, str], indent: str) -> str:
    """Visszaadja: descriptionAdvanced: { de: "...", hu: "...", ro: "...", en: "..." }"""
    parts = []
    inner_indent = indent + "  "
    for lang in LANGS:
        if lang in merged and merged[lang].strip():
            # escape double quotes and backslash inside the string
            text = merged[lang]
            text_esc = text.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
            parts.append(f'{inner_indent}{lang}: "{text_esc}"')
    if not parts:
        return ""
    return "descriptionAdvanced: {\n" + ",\n".join(parts) + f"\n{indent}}}"


def serialize_facts(merged: dict[str, list[str]], indent: str) -> str:
    parts = []
    inner_indent = indent + "  "
    for lang in LANGS:
        if lang in merged and any(it.strip() for it in merged[lang]):
            arr_items = []
            for it in merged[lang]:
                t = it.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
                arr_items.append(f'"{t}"')
            parts.append(f"{inner_indent}{lang}: [" + ", ".join(arr_items) + "]")
    if not parts:
        return ""
    return "factsAdvanced: {\n" + ",\n".join(parts) + f"\n{indent}}}"


def consolidate_blocks(obj_text: str, key: str, parser, serializer) -> tuple[str, dict, int]:
    """
    obj_text: teljes POI obj szoveg (`{...}`-vel egyutt).
    Visszaadja: (uj obj_text, merged dict, blokkok szama az eredetiben).
    """
    # obj body = a `{` es `}` kozt
    assert obj_text.startswith("{") and obj_text.endswith("}")
    obj_body = obj_text[1:-1]
    blocks = find_top_level_key_blocks(obj_body, key)
    if not blocks:
        return obj_text, {}, 0

    # parse osszes blokkot
    merged: dict = {}
    for (k_start, v_start, v_end) in blocks:
        block_body = obj_body[v_start + 1:v_end - 1]
        parsed = parser(block_body)
        for lang, val in parsed.items():
            if lang not in merged:
                merged[lang] = val
            else:
                # tartsuk a hosszabb / informativabb ertket
                if isinstance(val, str):
                    if len(val) > len(merged[lang]):
                        merged[lang] = val
                elif isinstance(val, list):
                    if len(val) > len(merged[lang]):
                        merged[lang] = val
    # detektalas indent: az elso blokk elotti sor indentje
    # keressuk vissza a sor elejet
    first_block_key_start = blocks[0][0]
    line_start = obj_body.rfind("\n", 0, first_block_key_start) + 1
    indent = obj_body[line_start:first_block_key_start]
    # csak whitespace lehet
    if not indent.replace(" ", "").replace("\t", "") == "":
        indent = "    "

    # epitsuk fel az uj szoveg-darabot: az utolso blokk helyere
    new_block_text = serializer(merged, indent)
    if not new_block_text:
        # nincs adat, hagyjuk valtozatlanul
        return obj_text, merged, len(blocks)

    # toroljuk az osszes korabbi blokkot, az utolsot lecsereljuk
    # blokkok rendezve indextol — toroljuk hatulrol elore
    new_body = obj_body
    # kihasitando regiok = (k_start, v_end) per blokk
    # de a vesszovel/ujvonallal ovatosan kell banni:
    # a regio a `keyName:` szo elejetol az `}`-ig megy.
    # utana kovetkezhet `,` vagy `\n` vagy `, image: ...`.
    # toroljuk a hatulsot is, csereljuk az utolsoval.
    last_idx = len(blocks) - 1
    # toroljuk a 0..last_idx-1 blokkokat (hatulrol elore)
    for i in range(last_idx - 1, -1, -1):
        k_start, v_start, v_end = blocks[i]
        # leulnk hatra: kivagjuk a `key: { ... }`-t es az utana levo `,` + whitespace-t
        cut_start = k_start
        cut_end = v_end
        # az utana kovetkezo opcionalis vesszot is bekapjuk
        m = re.match(r"\s*,", new_body[cut_end:])
        if m:
            cut_end += m.end()
            # plusz a kovetkezo \n ha van
            m2 = re.match(r"[ \t]*\n", new_body[cut_end:])
            if m2:
                cut_end += m2.end()
        else:
            # ha nincs vesszo (utolso volt), torljuk az elotte allo vesszot
            # (ez ritkan fordul elo, mert nem o az utolso blokk, hanem kozbeso)
            pass
        # toroljuk az indenttel egyutt: visszaszedjuk a sor elejeig csak ha tisztan whitespace van
        line_start_local = new_body.rfind("\n", 0, cut_start) + 1
        prefix = new_body[line_start_local:cut_start]
        if prefix.strip() == "":
            cut_start = line_start_local
        new_body = new_body[:cut_start] + new_body[cut_end:]

    # most az utolso blokk az egyetlen — keressuk meg uj indexet es csereljuk
    blocks_after = find_top_level_key_blocks(new_body, key)
    if not blocks_after:
        # valami hiba — fallback: visszaadjuk az eredetit
        return obj_text, merged, len(blocks)
    k_start, v_start, v_end = blocks_after[-1]
    # cserejuk a `keyName: { ... }` szoveget az ujra
    new_body = new_body[:k_start] + new_block_text + new_body[v_end:]

    return "{" + new_body + "}", merged, len(blocks)


def process_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    # talaljuk meg a fo POI tomb belsejet:
    # `export const ... : POI[] = [` ... `];`
    m = re.search(r"export\s+const\s+\w+\s*:\s*POI\[\]\s*=\s*\[", text)
    if not m:
        return {"file": path.name, "skipped": True, "reason": "no array"}
    arr_start = m.end()
    # talaljuk a tarstalan `]`-t a `[` parjat
    # de mi `m.end()` a `[` UTAN van. Megkeressuk a `[` poziciojat.
    bracket_pos = text.rfind("[", 0, arr_start)
    # parjat keressuk
    depth = 1
    i = bracket_pos + 1
    n = len(text)
    in_str = None
    escape = False
    while i < n and depth > 0:
        c = text[i]
        if in_str:
            if escape:
                escape = False
            elif c == "\\":
                escape = True
            elif c == in_str:
                in_str = None
            i += 1
            continue
        if c in ('"', "'", "`"):
            in_str = c
            i += 1
            continue
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                break
        i += 1
    arr_end = i  # `]` pozicioja
    arr_body = text[bracket_pos + 1:arr_end]

    objs = find_top_level_objects(arr_body)
    new_arr_body = ""
    cursor = 0
    consolidated_count = 0
    poi_with_changes = 0
    skipped_relief_only_de = 0
    for (s, e) in objs:
        new_arr_body += arr_body[cursor:s]
        obj_text = arr_body[s:e]
        new_obj = obj_text
        changed = False
        for key, parser, serializer in (
            ("descriptionAdvanced", parse_lang_strings, serialize_desc),
            ("factsAdvanced", parse_lang_arrays, serialize_facts),
        ):
            new_obj2, merged, blk_count = consolidate_blocks(new_obj, key, parser, serializer)
            if blk_count > 1:
                consolidated_count += 1
                changed = True
            elif blk_count == 1:
                # csak 1 blokk — ha hianyzo nyelvek vannak, akkor itt nem tudunk pototolni
                # adatbol, igy KIHAGYJUK (user instrukcio: bizonytalan -> kihagyas)
                # de az ures `""` mezoket kitisztitjuk: az opcionalis tipus engedi.
                # csak akkor cserelunk, ha tenyleg vannak ures mezok.
                # parse a meglevo blokkot
                pass
            new_obj = new_obj2
        if changed:
            poi_with_changes += 1
        new_arr_body += new_obj
        cursor = e
    new_arr_body += arr_body[cursor:]

    new_text = text[:bracket_pos + 1] + new_arr_body + text[arr_end:]

    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
    return {
        "file": path.name,
        "objs": len(objs),
        "consolidated_blocks": consolidated_count,
        "poi_with_changes": poi_with_changes,
        "changed": new_text != text,
    }


def main():
    summary = []
    for fname in PANAMA_FILES:
        path = DATA_DIR / fname
        if not path.exists():
            print(f"SKIP: {fname} (nem letezik)")
            continue
        try:
            res = process_file(path)
            summary.append(res)
            print(res)
        except Exception as e:
            print(f"HIBA {fname}: {e}")
            import traceback
            traceback.print_exc()
    print("\n=== Osszesito ===")
    for r in summary:
        print(r)


if __name__ == "__main__":
    main()
