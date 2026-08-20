#!/usr/bin/env python3
"""Validate exact coverage of one language-specific informatics translation result."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--result", type=Path, required=True)
    args = parser.parse_args()
    expected = set(json.loads(args.manifest.read_text(encoding="utf-8")))
    values: dict[str, str] = {}
    errors: list[str] = []
    for line in args.result.read_text(encoding="utf-8").splitlines():
        row = json.loads(line)
        if row.get("status") != "completed":
            errors.append(f"{row.get('id')}: {row.get('error', 'not completed')}")
            continue
        for key, value in row["translations"].items():
            if key in values:
                errors.append(f"duplicate {key}")
            values[key] = value
    errors.extend(f"missing {key}" for key in sorted(expected - set(values)))
    errors.extend(f"extra {key}" for key in sorted(set(values) - expected))
    errors.extend(
        f"blank {key}" for key, value in values.items() if not isinstance(value, str) or not value.strip()
    )
    print(json.dumps({"expected": len(expected), "translations": len(values), "errors": len(errors)}))
    if errors:
        print("\n".join(errors[:100]))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
