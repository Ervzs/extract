import * as ort from "onnxruntime-web/webgpu"

import labels from "@/data/labels.json"
import type { Box, Device } from "@/types"
import { toBoxes } from "./postprocess"
import { letterbox, SIZE, toPixels } from "./preprocess"

const MIN_SCORE = 0.25

export async function loadModel(device: Device) {
  const response = await fetch(`${import.meta.env.BASE_URL}models/${device.model}`)
  if (!response.ok) throw new Error(`Model download failed (${response.status})`)
  const bytes = await response.arrayBuffer()

  const executionProviders = "gpu" in navigator ? ["webgpu", "wasm"] : ["wasm"]
  return ort.InferenceSession.create(bytes, { executionProviders })
}

export async function loadImage(url: string) {
  const image = new Image()
  image.src = url
  await image.decode()
  return image
}

export async function detect(
  session: ort.InferenceSession,
  device: Device,
  image: HTMLImageElement,
): Promise<Box[]> {
  const box = letterbox(image.naturalWidth, image.naturalHeight)
  const input = new ort.Tensor("float32", toPixels(image, box), [1, 3, SIZE, SIZE])
  const output = await session.run({ images: input })
  return toBoxes(output.output0.data as Float32Array, box, labels[device.id], MIN_SCORE)
}
