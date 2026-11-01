import { CircleAlert } from "lucide-react"
import { useMemo, useState } from "react"

import { DetectionView } from "@/components/DetectionView"
import { DevicePicker } from "@/components/DevicePicker"
import { PhotoPicker } from "@/components/PhotoPicker"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { devices } from "@/data/devices"
import { useDetect } from "@/hooks/useDetect"
import { useModel } from "@/hooks/useModel"
import type { DeviceId } from "@/types"

export default function App() {
  const [deviceId, setDeviceId] = useState<DeviceId | null>(null)
  const [photo, setPhoto] = useState<string | null>(null)
  const [minScore, setMinScore] = useState(0.55)

  const device = devices.find((d) => d.id === deviceId)
  const model = useModel(device)
  const detection = useDetect(device, model.data, photo)

  const boxes = useMemo(
    () => detection.data?.boxes.filter((box) => box.score >= minScore) ?? [],
    [detection.data, minScore],
  )

  const error = model.error ?? detection.error

  return (
    <main className="mx-auto max-w-5xl space-y-4 p-4 sm:space-y-6 sm:p-6">
      <h1 className="text-2xl font-semibold sm:text-3xl">e-Xtract</h1>

      <Card>
        <CardHeader>
          <CardTitle>1. Pick a device</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <DevicePicker value={deviceId} onChange={setDeviceId} />
          {model.isFetching && <p className="text-muted-foreground">Loading model...</p>}
        </CardContent>
      </Card>

      {model.data && (
        <Card>
          <CardHeader>
            <CardTitle>2. Pick a photo</CardTitle>
          </CardHeader>
          <CardContent>
            <PhotoPicker onPhoto={setPhoto} />
          </CardContent>
        </Card>
      )}

      {error && (
        <Alert variant="destructive">
          <CircleAlert />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      {detection.isFetching && <p className="text-muted-foreground">Finding parts...</p>}

      {detection.data && (
        <Card>
          <CardHeader>
            <CardTitle>3. Parts found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm">Minimum confidence: {Math.round(minScore * 100)}%</p>
              <Slider
                min={0.25}
                max={0.95}
                step={0.05}
                value={[minScore]}
                onValueChange={([value]) => setMinScore(value)}
              />
            </div>
            <DetectionView image={detection.data.image} boxes={boxes} />
          </CardContent>
        </Card>
      )}
    </main>
  )
}
