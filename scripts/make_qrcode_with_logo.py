from pathlib import Path
from sys import argv

from PIL import Image, ImageDraw


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def main():
    if len(argv) != 4:
        raise SystemExit(
            "Usage: python scripts/make_qrcode_with_logo.py <qr.png> <logo.jpg> <out.png>"
        )

    qr_path = Path(argv[1])
    logo_path = Path(argv[2])
    out_path = Path(argv[3])

    qr = Image.open(qr_path).convert("RGBA")
    logo = Image.open(logo_path).convert("RGBA")

    qr_size = qr.size[0]
    logo_size = int(qr_size * 0.18)
    padding = int(qr_size * 0.025)
    box_size = logo_size + padding * 2

    logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)

    box = Image.new("RGBA", (box_size, box_size), (255, 255, 255, 255))
    box_mask = rounded_mask((box_size, box_size), int(box_size * 0.18))

    logo_canvas = Image.new("RGBA", (logo_size, logo_size), (255, 255, 255, 0))
    logo_canvas.alpha_composite(
        logo,
        ((logo_size - logo.width) // 2, (logo_size - logo.height) // 2),
    )
    logo_mask = rounded_mask((logo_size, logo_size), int(logo_size * 0.16))
    box.alpha_composite(logo_canvas, (padding, padding))

    position = ((qr.width - box_size) // 2, (qr.height - box_size) // 2)
    qr.paste(box, position, box_mask)

    border = ImageDraw.Draw(qr)
    border.rounded_rectangle(
        (
            position[0],
            position[1],
            position[0] + box_size - 1,
            position[1] + box_size - 1,
        ),
        radius=int(box_size * 0.18),
        outline=(255, 255, 255, 255),
        width=max(4, int(qr_size * 0.012)),
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    qr.save(out_path)


if __name__ == "__main__":
    main()
