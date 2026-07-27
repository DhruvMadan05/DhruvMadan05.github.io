#!/usr/bin/env python3
"""Strip EXIF/IPTC/XMP metadata (GPS, camera info, timestamps, etc.) from images.

Usage:
    python3 scripts/strip_metadata.py [directory ...]

If no directory is given, defaults to ./Photography
Rewrites each .jpg/.jpeg/.png in place, keeping only pixel data.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

EXTENSIONS = {".jpg", ".jpeg", ".png"}


def strip_file(path: Path) -> None:
    with Image.open(path) as img:
        img.load()
        img = ImageOps.exif_transpose(img)  # bake in rotation before dropping EXIF
        clean = Image.frombytes(img.mode, img.size, img.tobytes())
        if path.suffix.lower() in (".jpg", ".jpeg"):
            clean.save(path, quality=95)
        else:
            clean.save(path)


def main() -> None:
    dirs = [Path(d) for d in sys.argv[1:]] or [Path("Photography")]
    changed = 0
    for d in dirs:
        if not d.is_dir():
            print(f"skip (not a directory): {d}")
            continue
        for path in sorted(d.iterdir()):
            if path.suffix.lower() not in EXTENSIONS:
                continue
            strip_file(path)
            print(f"stripped: {path}")
            changed += 1
    print(f"done. {changed} file(s) processed.")


if __name__ == "__main__":
    main()
