from pathlib import Path

import numpy as np
import pytest
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DEVICES = ["smartphone", "laptop", "computer", "router"]
SIZE = 1280


def letterbox(path):
    photo = Image.open(path).convert("RGB")
    scale = min(SIZE / photo.width, SIZE / photo.height)
    width, height = round(photo.width * scale), round(photo.height * scale)
    canvas = Image.new("RGB", (SIZE, SIZE), (114, 114, 114))
    canvas.paste(photo.resize((width, height)), ((SIZE - width) // 2, (SIZE - height) // 2))
    pixels = np.asarray(canvas, dtype=np.float32) / 255
    return pixels.transpose(2, 0, 1)[np.newaxis]


@pytest.mark.parametrize("device", DEVICES)
def test_sample_photo_finds_a_part(sessions, device):
    image = letterbox(ROOT / "public" / "samples" / f"{device}.jpg")

    rows = sessions[device].run(["output0"], {"images": image})[0][0]

    assert (rows[:, 4] > 0.55).sum() >= 1
