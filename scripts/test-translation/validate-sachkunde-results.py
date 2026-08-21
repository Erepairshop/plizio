#!/usr/bin/env python3
import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--result", type=Path, action="append", required=True)
    args = parser.parse_args()
    expected = set(json.loads(args.manifest.read_text(encoding="utf-8")))
    all_errors = []
    for path in args.result:
        values = {}
        errors = []
        for line in path.read_text(encoding="utf-8").splitlines():
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
        errors.extend(f"blank {key}" for key, value in values.items() if not isinstance(value, str) or not value.strip())
        all_errors.extend(f"{path.name}: {error}" for error in errors)
        print(json.dumps({"file": path.name, "translations": len(values), "errors": len(errors)}))
    if all_errors:
        print("\n".join(all_errors[:100]))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
