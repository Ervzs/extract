import { skipToken, useQuery } from "@tanstack/react-query"
import type { InferenceSession } from "onnxruntime-web/webgpu"

import { detect, loadImage } from "@/lib/model"
import type { Device } from "@/types"

export function useDetect(
  device: Device | undefined,
  session: InferenceSession | undefined,
  photo: string | null,
) {
  return useQuery({
    queryKey: ["detect", device?.id, photo],
    queryFn:
      device && session && photo
        ? async () => {
            const image = await loadImage(photo)
            const boxes = await detect(session, device, image)
            return { image, boxes }
          }
        : skipToken,
    staleTime: Infinity,
  })
}
