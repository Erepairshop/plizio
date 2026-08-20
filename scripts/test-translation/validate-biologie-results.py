#!/usr/bin/env python3
"""Validate exact-key biology translation result files."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def load_rows(path: Path) -> tuple[dict[str, str], list[str]]:
    values: dict[str, str] = {}
    errors: list[str] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        row = json.loads(line)
        if row.get("status") != "completed":
            errors.append(f"{path.name}: {row.get('id')} {row.get('error', 'not completed')}")
            continue
        for key, value in row["translations"].items():
            if key in values:
                errors.append(f"{path.name}: duplicate {key}")
            values[key] = value
    return values, errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--result", type=Path, action="append", required=True)
    args = parser.parse_args()
    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    expected = set(manifest)
    all_errors: list[str] = []
    for path in args.result:
        values, errors = load_rows(path)
        errors.extend(f"{path.name}: missing {key}" for key in sorted(expected - set(values)))
        errors.extend(f"{path.name}: extra {key}" for key in sorted(set(values) - expected))
        errors.extend(
            f"{path.name}: blank {key}"
            for key, value in values.items()
            if not isinstance(value, str) or not value.strip()
        )
        all_errors.extend(errors)
        print(json.dumps({"file": path.name, "translations": len(values), "errors": len(errors)}))
    if all_errors:
        print("\n".join(all_errors[:100]))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
