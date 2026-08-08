#!/usr/bin/env python3
"""Apply completed Azure sight-description batches to a compact override file."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--results", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    latest = {}
    for line in args.results.read_text(encoding="utf-8").splitlines():
        row = json.loads(line)
        latest[row.get("id")] = row
    translations = {}
    for row in latest.values():
        if row.get("status") == "completed":
            translations.update(row.get("translations") or {})

    expected = set(manifest["targets"])
    missing = expected - set(translations)
    if missing:
        raise SystemExit(
            f"Incomplete Azure result: missing={len(missing)}"
        )
    # The VPS result file is intentionally resumable across queue revisions.
    # Ignore completed keys from an older, larger audit queue.
    translations = {key: translations[key] for key in expected}

    output = {}
    skipped = 0
    for key, target in manifest["targets"].items():
        value = translations[key].strip()
        if value == "__SKIP__":
            skipped += 1
            continue
        poi_items = output.setdefault(target["poi"], [])
        while len(poi_items) <= target["index"]:
            poi_items.append({})
        item = poi_items[target["index"]]
        item["sourceName"] = target["sourceName"]
        item.setdefault("text", {})[target["lang"]] = value

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({
        "pois": len(output), "sights": sum(len(v) for v in output.values()),
        "strings": len(translations) - skipped, "skipped": skipped,
    }))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
