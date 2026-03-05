"use client"

import { TraitGrid, SelectedTraitInfo } from "@/components/trait-grid"
import {
  TRAIT_CATEGORIES,
  type CharacterState,
} from "@/lib/traits"

interface TraitPanelProps {
  activeCategory: string
  character: CharacterState
  onTraitChange: (categoryId: string, traitId: string) => void
}

const TRAIT_KEY_MAP: Record<string, keyof CharacterState> = {
  background: "backgroundId",
  body: "bodyId",
  head: "headId",
  accessory: "accessoryId",
  noggles: "nogglesId",
}

export function TraitPanel({
  activeCategory,
  character,
  onTraitChange,
}: TraitPanelProps) {
  const category = TRAIT_CATEGORIES.find((c) => c.id === activeCategory)
  if (!category) return null

  const traitKey = TRAIT_KEY_MAP[activeCategory]
  const selectedTraitId = traitKey ? character[traitKey] : undefined
  const selectedOption = category.options.find((o) => o.id === selectedTraitId)

  return (
    <div className="flex flex-col gap-4">
      {/* Current selection info */}
      {selectedOption && <SelectedTraitInfo option={selectedOption} />}

      {/* Trait grid: horizontal scroll when narrow, vertical when many rows */}
      {category.options.length > 1 && (
        <div className="overflow-auto max-h-[320px] min-w-0">
          <TraitGrid
            options={category.options}
            selectedId={selectedTraitId || ""}
            onSelect={(id) => onTraitChange(activeCategory, id)}
          />
        </div>
      )}
    </div>
  )
}
