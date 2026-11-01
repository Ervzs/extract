import type { Box } from "@/types"

interface BoundingBoxesProps {
  boxes: Box[]
  width: number
  height: number
}

export function BoundingBoxes({ boxes, width, height }: BoundingBoxesProps) {
  return boxes.map((box, index) => (
    <div
      key={index}
      className="absolute border-2 border-yellow-400"
      style={{
        left: `${(box.x1 / width) * 100}%`,
        top: `${(box.y1 / height) * 100}%`,
        width: `${((box.x2 - box.x1) / width) * 100}%`,
        height: `${((box.y2 - box.y1) / height) * 100}%`,
      }}
    />
  ))
}
