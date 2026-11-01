interface PhotoPickerProps {
  onPhoto: (url: string) => void
}

export function PhotoPicker({ onPhoto }: PhotoPickerProps) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(event) => {
        const file = event.target.files?.[0]
        if (file) onPhoto(URL.createObjectURL(file))
      }}
    />
  )
}
