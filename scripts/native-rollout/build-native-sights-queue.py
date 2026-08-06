#!/usr/bin/env python3
"""Build a deterministic native sight-name and description translation queue."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


MAX_INPUT_CHARS = 18_000
MAX_ITEMS = 85


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8-sig"))


def data_root(repo: Path) -> Path:
    generated = repo / "public/data"
    return generated if generated.is_dir() else repo / "data"


def normalized(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", (value or "").lower())

def plain_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def extract_sights(page: Path) -> tuple[list[dict[str, str]], bool]:
    source = page.read_text(encoding="utf-8")
    section = re.search(r'<section class="plz-sights">.*?</section>', source, re.DOTALL)
    if not section:
        return [], False
    sights = []
    repaired_linked_name = False
    for article in re.findall(r'<article class="plz-sight".*?</article>', section.group(0), re.DOTALL):
        heading_match = re.search(r'<h3 itemprop="name">(.*?)</h3>', article, re.DOTALL)
        desc_match = re.search(r'<div itemprop="description"><p>(.*?)</p></div>', article, re.DOTALL)
        heading = heading_match.group(1) if heading_match else ""
        old_name_match = re.search(r'^(.*?)(?:<a |<span |$)', heading, re.DOTALL)
        old_name = plain_text(old_name_match.group(1)) if old_name_match else ""
        # The visible name can itself be an internal <a class="plz-sight-name-link">.
        # Keep that anchor text, but cut off the following Street View/category controls.
        name_part = re.split(r'<a class="plz-sight-sv|<span class="plz-sight-cat"', heading, maxsplit=1)[0]
        name = plain_text(name_part)
        if not old_name and name:
            repaired_linked_name = True
        description = plain_text(desc_match.group(1)) if desc_match else ""
        if name or description:
            sights.append({"sourceName": name, "name": name, "desc": description})
    return sights, repaired_linked_name


def make_batches(records: list[dict], prefix: str) -> list[dict]:
    batches, current, size = [], [], 0
    for item in records:
        item_size = len(item["key"]) + len(item["text"]) + 30
        if current and (len(current) >= MAX_ITEMS or size + item_size > MAX_INPUT_CHARS):
            batches.append(current)
            current, size = [], 0
        current.append(item)
        size += item_size
    if current:
        batches.append(current)
    return [
        {"id": f"{prefix}-b{number:04d}", "items": {item["key"]: item["text"] for item in batch}}
        for number, batch in enumerate(batches, 1)
    ]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--language", required=True, help="Native sidecar language, e.g. it, es or pt")
    parser.add_argument("--only-missing", action="store_true",
                        help="Queue only sight fields the sidecar has not translated yet")
    parser.add_argument("--sidecar-root", type=Path, default=None,
                        help="Directory holding the native sidecars; defaults to <repo>/data/i18n/<language>. Use it when the rendered pages and the sidecars live in different trees.")
    parser.add_argument("--repair-missing-name-pois", action="store_true",
                        help="Queue only POIs whose linked sight name was missed by the v1 parser")
    args = parser.parse_args()

    repo = args.repo.resolve()
    data = data_root(repo)
    sidecar_dir = args.sidecar_root.resolve() if args.sidecar_root else data / "i18n" / args.language
    url_index = load_json(data / "_poi-url-index.json", {})
    if not sidecar_dir.is_dir() or not url_index:
        raise SystemExit(f"Native sidecars or URL index missing under {data}")

    records, targets = [], {}
    poi_count = sight_count = 0
    missing_pages = []
    for sidecar_path in sorted(sidecar_dir.glob("*.json")):
        poi_id = sidecar_path.stem
        url = str((url_index.get(poi_id) or {}).get("en") or "")
        relative = url.removeprefix("https://plizio.com").strip("/")
        page = repo / relative / "index.html"
        if not relative or not page.exists():
            missing_pages.append(poi_id)
            continue
        sidecar = load_json(sidecar_path, {})
        existing = sidecar.get("sights") if isinstance(sidecar.get("sights"), list) else []
        existing_by_name = {
            normalized(item.get("sourceName")): item
            for item in existing
            if isinstance(item, dict) and item.get("sourceName")
        }
        sights, repaired_linked_name = extract_sights(page)
        if args.repair_missing_name_pois and not repaired_linked_name:
            continue
        if not sights:
            continue
        poi_count += 1
        sight_count += len(sights)
        for index, sight in enumerate(sights):
            for part in ("name", "desc"):
                text = sight[part]
                if not text:
                    continue
                if args.only_missing:
                    # Match on sourceName first: a newly inserted sight shifts every
                    # later index, and a stale index match would silently drop a
                    # still-untranslated field.
                    current = existing_by_name.get(normalized(sight["sourceName"]))
                    if current is None and index < len(existing):
                        current = existing[index]
                    if isinstance(current, dict) and str(current.get(part) or "").strip():
                        continue
                key = f"core::{poi_id}::sights::{index}::{part}"
                records.append({"key": key, "text": text})
                targets[key] = {
                    "kind": "core", "poi": poi_id, "field": "sights",
                    "index": index, "part": part, "sourceName": sight["sourceName"],
                }

    mode_tag = "v2repair" if args.repair_missing_name_pois else ("v2missing" if args.only_missing else "v2")
    prefix = f"{args.language}sights-{mode_tag}"
    batches = make_batches(records, prefix)
    summary = {
        "version": 1,
        "mode": "repair-missing-name-pois" if args.repair_missing_name_pois else ("only-missing" if args.only_missing else "full"),
        "language": args.language,
        "poiCount": poi_count,
        "sightCount": sight_count,
        "stringCount": len(records),
        "sourceCharacters": sum(len(item["text"]) for item in records),
        "batchCount": len(batches),
        "missingPageCount": len(missing_pages),
        "missingPageIds": missing_pages,
    }
    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "queue.json").write_text(json.dumps(batches, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "manifest.json").write_text(
        json.dumps({**summary, "targets": targets}, ensure_ascii=False), encoding="utf-8")
    (args.output_dir / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
