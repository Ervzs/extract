import json
from pathlib import Path

from ultralytics import YOLO

MODELS = {
    "smartphone": "Models/Smartphone/best.pt",
    "laptop": "Models/Laptop/best_laptop.pt",
    "computer": "Models/Computer/best.pt",
    "router": "Models/Router/best_router-1.pt",
}

OUT = Path("public/models")
LABELS = Path("src/data/labels.json")

OUT.mkdir(parents=True, exist_ok=True)
LABELS.parent.mkdir(parents=True, exist_ok=True)
labels = {}

for device, path in MODELS.items():
    model = YOLO(path)
    onnx_path = model.export(format="onnx", imgsz=1280, nms=True)
    Path(onnx_path).replace(OUT / f"{device}.onnx")
    labels[device] = list(model.names.values())
    print(f"{device}: {labels[device]}")

LABELS.write_text(json.dumps(labels, indent=2))