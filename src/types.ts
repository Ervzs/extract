export type DeviceId = "smartphone" | "laptop" | "computer" | "router"

export interface Device {
  id: DeviceId
  name: string
  model: string
}

export interface Part {
  name: string
  note: string
  hazard?: string
  steps: string[]
}
