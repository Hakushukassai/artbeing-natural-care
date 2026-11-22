"""写真の元データ(社内のSSD)から、サイト用に縮小した WebP を書き出す。

使い方: python scripts/export-photos.py [SSDのドライブ 例 I:/]
元データはリポジトリに入れない(公開リポジトリのため)。書き出した WebP だけを入れる。
"""
import os
import sys

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None
SRC = sys.argv[1] if len(sys.argv) > 1 else "I:/"
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "assets", "photo")

# 出力名: (元ファイル, 切り出しの縦横比 または None, 書き出す横幅)
PHOTOS = {
    "hero-herbal-color": ("products/maharani/HerbalColor/HCR/HCR_all.tif", None, [2400, 1200]),
    "care-dye": ("products/maharani/henna/2019/gat/DSC06074.JPG", 4 / 5, [1200, 600]),
    "care-wash": ("products/maharani/KK_shampoo/kko/DSC07268.JPG", 4 / 5, [1200, 600]),
    "care-head": ("1_products/AT/hairoil/DSC00586.JPG", 4 / 5, [1200, 600]),
    "care-skin": ("1_products/AT/cream/DSC09763.JPG", 4 / 5, [1200, 600]),
    "about-leaves": ("2025/sojat S/20.21/IMG_3703.JPG", 4 / 5, [1200, 600]),
}


def crop_to(im, ratio):
    w, h = im.size
    if w / h > ratio:
        nw = int(h * ratio)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / ratio)
    y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))


os.makedirs(OUT, exist_ok=True)
for name, (path, ratio, widths) in PHOTOS.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, path))).convert("RGB")
    if ratio:
        im = crop_to(im, ratio)
    for w in widths:
        out = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        dest = os.path.join(OUT, f"{name}-{w}.webp")
        out.save(dest, "WEBP", quality=80, method=6)
        print(f"{name}-{w}.webp {out.size} {os.path.getsize(dest) // 1024}KB")
