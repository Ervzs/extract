import { Button } from "@/components/ui/button"
import { devices } from "@/data/devices"
import type { DeviceId } from "@/types"

interface DevicePickerProps {
  value: DeviceId | null
  onChange: (id: DeviceId) => void
}

export function DevicePicker({ value, onChange }: DevicePickerProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      {devices.map((device) => (
        <Button
          key={device.id}
          size="lg"
          variant={device.id === value ? "default" : "outline"}
          onClick={() => onChange(device.id)}
        >
          {device.name}
        </Button>
      ))}
    </div>
  )
}
