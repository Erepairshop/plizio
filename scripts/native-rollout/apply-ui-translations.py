#!/usr/bin/env python3
"""Validate and atomically apply exact-key POI HTML UI translations."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


PLACEHOLDER = re.compile(r"\{[A-Za-z][A-Za-z0-9_]*\}")


def placeholders(value: str) -> list[str]:
    return sorted(PLACEHOLDER.findall(value))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--catalog-dir", type=Path, default=Path("lib/seo/poi-html-ui/catalogs"))
    parser.add_argument("--language", required=True)
    parser.add_argument("--language-name", required=True)
    parser.add_argument("--work-dir", type=Path, required=True)
    args = parser.parse_args()

    language = args.language.lower()
    source = json.loads((args.catalog_dir / "en.json").read_text(encoding="utf-8"))
    target_path = args.catalog_dir / f"{language}.json"
    target = json.loads(target_path.read_text(encoding="utf-8")) if target_path.exists() else {}
    queue = json.loads((args.work_dir / "queue.json").read_text(encoding="utf-8"))
    manifest = json.loads((args.work_dir / "manifest.json").read_text(encoding="utf-8"))

    latest = {}
    results_path = args.work_dir / "results.jsonl"
    if results_path.exists():
        for line in results_path.read_text(encoding="utf-8").splitlines():
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                continue
            latest[row.get("id")] = row

    expected_batches = {batch["id"] for batch in queue}
    completed_batches = {key for key, row in latest.items() if row.get("status") == "completed"}
    missing_batches = expected_batches - completed_batches
    if missing_batches:
        raise SystemExit(f"Refusing partial apply; missing batches: {sorted(missing_batches)}")

    merged = dict(target.get("strings", {}))
    for batch in queue:
        translated = latest[batch["id"]]["translations"]
        if set(translated) != set(batch["items"]):
            raise SystemExit(f"{batch['id']}: exact key validation failed")
        for key, value in translated.items():
            if placeholders(value) != placeholders(source["strings"][key]):
                raise SystemExit(f"{key}: placeholder validation failed")
            merged[key] = value.strip()

    source_keys = set(source["strings"])
    if set(merged) != source_keys:
        raise SystemExit(f"Target catalog mismatch: missing={len(source_keys-set(merged))}, extra={len(set(merged)-source_keys)}")
    result = {
        "meta": {
            "language": language,
            "languageName": args.language_name,
            "sourceLanguage": "en",
            "sourceVersion": manifest["sourceVersion"],
            "sourceHashes": manifest["sourceHashes"],
        },
        "strings": {key: merged[key] for key in source["strings"]},
    }
    temporary = target_path.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(target_path)
    print(json.dumps({"language": language, "applied": len(queue), "keys": len(merged), "target": str(target_path)}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
