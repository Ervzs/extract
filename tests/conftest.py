from pathlib import Path

import onnxruntime as ort
import pytest

ROOT = Path(__file__).resolve().parent.parent


@pytest.fixture(scope="session")
def sessions():
    models = ROOT / "public" / "models"
    return {path.stem: ort.InferenceSession(path) for path in models.glob("*.onnx")}
