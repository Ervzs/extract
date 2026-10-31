import { skipToken, useQuery } from "@tanstack/react-query"

import { loadModel } from "@/lib/model"
import type { Device } from "@/types"

export function useModel(device: Device | undefined) {
  return useQuery({
    queryKey: ["model", device?.id],
    queryFn: device ? () => loadModel(device) : skipToken,
    staleTime: Infinity,
  })
}
