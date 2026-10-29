import { Button } from "@/components/ui/button"
import labels from "@/data/labels.json"
import { parts } from "./data/parts"

console.log(
  Object.values(labels)
    .flat()
    .filter((label) => !parts[label]),
)

export default function App() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Button onClick={() => alert("It works")}>Click me</Button>
    </main>
  )
}
