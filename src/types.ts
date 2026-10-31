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

export interface Box {
  x1: number
  y1: number
  x2: number
  y2: number
  score: number
  label: string
}