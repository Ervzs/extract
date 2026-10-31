import type { Box } from "@/types"
import type { Letterbox } from "./preprocess"

export function toBoxes(
  rows: Float32Array,
  box: Letterbox,
  labels: string[],
  minScore: number,
): Box[] {
  const boxes: Box[] = []
  for (let i = 0; i < rows.length; i += 6) {
    const score = rows[i + 4]
    if (score < minScore) continue
    boxes.push({
      x1: (rows[i] - box.padX) / box.scale,
      y1: (rows[i + 1] - box.padY) / box.scale,
      x2: (rows[i + 2] - box.padX) / box.scale,
      y2: (rows[i + 3] - box.padY) / box.scale,
      score,
      label: labels[rows[i + 5]],
    })
  }
  return boxes
}
