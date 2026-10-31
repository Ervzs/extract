export const SIZE = 1280

export interface Letterbox {
  scale: number
  padX: number
  padY: number
}

export function letterbox(width: number, height: number): Letterbox {
  const scale = Math.min(SIZE / width, SIZE / height)
  const padX = (SIZE - Math.round(width * scale)) / 2
  const padY = (SIZE - Math.round(height * scale)) / 2
  return { scale, padX, padY }
}

export function toPixels(image: HTMLImageElement, box: Letterbox): Float32Array {
  const canvas = document.createElement("canvas")
  canvas.width = SIZE
  canvas.height = SIZE
  const context = canvas.getContext("2d")!
  context.fillStyle = "rgb(114, 114, 114)"
  context.fillRect(0, 0, SIZE, SIZE)
  context.drawImage(
    image,
    box.padX,
    box.padY,
    Math.round(image.naturalWidth * box.scale),
    Math.round(image.naturalHeight * box.scale),
  )

  const rgba = context.getImageData(0, 0, SIZE, SIZE).data
  const area = SIZE * SIZE
  const pixels = new Float32Array(3 * area)
  for (let i = 0; i < area; i++) {
    pixels[i] = rgba[i * 4] / 255
    pixels[i + area] = rgba[i * 4 + 1] / 255
    pixels[i + area * 2] = rgba[i * 4 + 2] / 255
  }
  return pixels
}
