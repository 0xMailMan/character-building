"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface ColorPickerProps {
  colors: string[]
  selectedColor: string
  onColorSelect: (color: string) => void
  label?: string
}

export function ColorPicker({ colors, selectedColor, onColorSelect, label }: ColorPickerProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
      )}
      <div className="flex flex-wrap gap-1.5">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onColorSelect(color)}
            className={cn(
              "size-7 rounded-md border-2 transition-all flex items-center justify-center",
              "hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              selectedColor === color
                ? "border-primary ring-1 ring-primary/50 scale-110"
                : "border-transparent"
            )}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
          >
            {selectedColor === color && (
              <Check
                className="size-3.5"
                style={{
                  color: isLightColor(color) ? "#000" : "#fff",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5
}
