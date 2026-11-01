import type { Box } from "@/types"

export function crop(image: HTMLImageElement, box: Box): string {
  const width = Math.max(1, Math.round(box.x2 - box.x1))
  const height = Math.max(1, Math.round(box.y2 - box.y1))
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  canvas.getContext("2d")!.drawImage(image, box.x1, box.y1, width, height, 0, 0, width, height)
  return canvas.toDataURL("image/jpeg")
}
