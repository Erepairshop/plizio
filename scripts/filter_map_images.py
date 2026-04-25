"""Detect and quarantine map-like images in public/geo-images/.

Heuristic: maps typically have:
- Low unique-color count (< 4000 distinct RGB values for a real photo, < 1500 for a map)
- High proportion of pastel beige/green/blue (map ink colors)
- Often present text/symbols (high entropy in narrow regions, but hard to measure)

Move suspicious images to public/geo-images-review/ for manual check.
Run: python scripts/filter_map_images.py [--dry-run]
"""
import os
import shutil
import sys
from collections import Counter
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
SRC_DIR = os.path.join(REPO, "public", "geo-images")
QUARANTINE = os.path.join(REPO, "public", "geo-images-review")

DRY_RUN = "--dry-run" in sys.argv
THRESHOLD_COLORS = 1500  # below = suspicious (limited palette)
SAMPLE_SIZE = 256  # downscale for speed


_OCR = None


def get_ocr():
    global _OCR
    if _OCR is None:
        from rapidocr_onnxruntime import RapidOCR
        _OCR = RapidOCR()
    return _OCR


def is_map_like(path: str) -> tuple[bool, str]:
    """OCR-based: maps contain many text labels (city names, region names).
    Real photos have 0-2 incidental text regions (signs); maps have 8+.
    """
    try:
        ocr = get_ocr()
        result, _ = ocr(path)
    except Exception as e:
        return False, f"ocr-fail:{e}"
    if not result:
        return False, "no-text"
    # result: list of [box, text, confidence]
    texts = [r for r in result if r[2] > 0.5 and len(r[1].strip()) >= 2]
    n = len(texts)
    if n >= 8:
        return True, f"map-text ({n} text regions)"
    return False, f"only-{n}-text"


def main():
    if not os.path.isdir(SRC_DIR):
        print(f"NOT FOUND: {SRC_DIR}")
        sys.exit(1)

    suspicious = []
    total = 0
    for root, _, files in os.walk(SRC_DIR):
        for f in files:
            if not f.lower().endswith((".webp", ".jpg", ".jpeg", ".png")):
                continue
            total += 1
            path = os.path.join(root, f)
            is_map, reason = is_map_like(path)
            if is_map:
                rel = os.path.relpath(path, SRC_DIR)
                suspicious.append((rel, path, reason))

    print(f"Scanned {total} images. Suspicious: {len(suspicious)}")
    for rel, _, reason in suspicious[:30]:
        print(f"  - {rel}  [{reason}]")
    if len(suspicious) > 30:
        print(f"  ... and {len(suspicious) - 30} more")

    if DRY_RUN:
        print("\n[DRY-RUN] Nothing moved. Re-run without --dry-run to quarantine.")
        return

    os.makedirs(QUARANTINE, exist_ok=True)
    moved = 0
    for rel, src, reason in suspicious:
        dst = os.path.join(QUARANTINE, rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        try:
            shutil.move(src, dst)
            moved += 1
        except Exception as e:
            print(f"  MOVE FAIL {rel}: {e}")
    print(f"\nMoved {moved} suspicious images to {QUARANTINE}")


if __name__ == "__main__":
    main()
