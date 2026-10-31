import { devices } from "@/data/devices"
import { useDetect } from "@/hooks/useDetect"
import { useModel } from "@/hooks/useModel"

const device = devices[1]
const photo = `${import.meta.env.BASE_URL}samples/${device.id}.jpg`

export default function App() {
  const model = useModel(device)
  const detection = useDetect(device, model.data, photo)

  if (detection.data) console.log(detection.data.boxes)

  return (
    <main className="space-y-2 p-6">
      <p>Model: {model.status}</p>
      <p>Detection: {detection.status}</p>
      {model.error && <p>{model.error.message}</p>}
    </main>
  )
}
