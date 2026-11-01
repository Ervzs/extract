import { useMemo } from "react"

import { crop } from "@/lib/crop"
import type { Box } from "@/types"
import { BoundingBoxes } from "./BoundingBoxes"
import { PartList } from "./PartList"

interface DetectionViewProps {
  image: HTMLImageElement
  boxes: Box[]
}

export function DetectionView({ image, boxes }: DetectionViewProps) {
  const found = useMemo(() => {
    const best = new Map<string, Box>()
    for (const box of boxes) {
      const current = best.get(box.label)
      if (!current || box.score > current.score) best.set(box.label, box)
    }
    return [...best.values()].map((box) => ({ box, crop: crop(image, box) }))
  }, [image, boxes])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative">
        <img src={image.src} alt="Your device" className="w-full rounded-lg" />
        <BoundingBoxes boxes={boxes} width={image.naturalWidth} height={image.naturalHeight} />
      </div>
      {found.length > 0 ? (
        <PartList found={found} />
      ) : (
        <p className="text-muted-foreground">No parts above this confidence.</p>
      )}
    </div>
  )
}
