#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PYTHON_BIN="${PYTHON_BIN:-/Users/min4/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3}"
URL="${1:-https://yuesao-lingling.pages.dev/}"

npx --yes qrcode \
  -o "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-plain.png" \
  -w 1200 \
  -q 0 \
  -e H \
  "$URL"

"$PYTHON_BIN" "$ROOT_DIR/scripts/make_qrcode_with_logo.py" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-plain.png" \
  "$ROOT_DIR/website/assets/qrcode/pages-qrcode-logo.jpg" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-with-logo.png"

"$PYTHON_BIN" "$ROOT_DIR/scripts/trim_qrcode_margin.py" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-plain.png" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-plain.png" \
  8

"$PYTHON_BIN" "$ROOT_DIR/scripts/trim_qrcode_margin.py" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-with-logo.png" \
  "$ROOT_DIR/website/assets/qrcode/yuesao-lingling-pages-with-logo.png" \
  8
