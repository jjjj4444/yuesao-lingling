#!/usr/bin/env python3
from pathlib import Path
from sys import argv

from PIL import Image, ImageChops


def main():
    if len(argv) not in (3, 4):
        raise SystemExit("Usage: python scripts/trim_qrcode_margin.py <input.png> <output.png> [padding_px]")

    input_path = Path(argv[1])
    output_path = Path(argv[2])
    padding = int(argv[3]) if len(argv) == 4 else 8

    image = Image.open(input_path).convert("RGBA")
    rgb = image.convert("RGB")
    white = Image.new("RGB", rgb.size, (255, 255, 255))
    bbox = ImageChops.difference(rgb, white).getbbox()
    if not bbox:
      image.save(output_path)
      return

    left, top, right, bottom = bbox
    left = max(left - padding, 0)
    top = max(top - padding, 0)
    right = min(right + padding, image.width)
    bottom = min(bottom + padding, image.height)

    cropped = image.crop((left, top, right, bottom))
    if padding > 0:
        canvas = Image.new("RGBA", (cropped.width + padding * 2, cropped.height + padding * 2), (255, 255, 255, 255))
        canvas.alpha_composite(cropped, (padding, padding))
        cropped = canvas
    output_path.parent.mkdir(parents=True, exist_ok=True)
    cropped.save(output_path)


if __name__ == "__main__":
    main()
