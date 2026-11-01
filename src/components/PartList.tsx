import { TriangleAlert } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { parts } from "@/data/parts"
import type { Box } from "@/types"

export interface FoundPart {
  box: Box
  crop: string
}

interface PartListProps {
  found: FoundPart[]
}

export function PartList({ found }: PartListProps) {
  return (
    <Accordion type="multiple">
      {found.map(({ box, crop }) => {
        const part = parts[box.label]
        return (
          <AccordionItem key={box.label} value={box.label}>
            <AccordionTrigger>
              <span className="flex items-center gap-3">
                <img src={crop} alt="" className="size-10 rounded object-cover" />
                {part.name}
                <Badge variant="secondary">{Math.round(box.score * 100)}%</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3">
              <p>{part.note}</p>
              {part.hazard && (
                <Alert variant="destructive">
                  <TriangleAlert />
                  <AlertDescription>{part.hazard}</AlertDescription>
                </Alert>
              )}
              <ol className="list-decimal space-y-1 pl-5">
                {part.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
