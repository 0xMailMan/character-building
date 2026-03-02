"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { TraitGrid, SelectedTraitInfo } from "@/components/trait-grid"
import { ColorPicker } from "@/components/color-picker"
import {
  TRAIT_CATEGORIES,
  SKIN_COLORS,
  HAIR_COLORS,
  CLOTHING_COLORS,
  type CharacterState,
} from "@/lib/traits"

interface TraitPanelProps {
  activeCategory: string
  character: CharacterState
  onTraitChange: (categoryId: string, traitId: string) => void
  onColorChange: (colorKey: keyof CharacterState, color: string) => void
}

const COLOR_MAP: Record<string, { key: keyof CharacterState; colors: string[] }> = {
  skin: { key: "skinColor", colors: SKIN_COLORS },
  hair: { key: "hairColor", colors: HAIR_COLORS },
  top: { key: "topColor", colors: CLOTHING_COLORS },
  bottom: { key: "bottomColor", colors: CLOTHING_COLORS },
  shoes: { key: "shoesColor", colors: CLOTHING_COLORS },
}

const TRAIT_KEY_MAP: Record<string, keyof CharacterState> = {
  face: "face",
  hair: "hair",
  cosmetics: "cosmetic",
  top: "top",
  bottom: "bottom",
  shoes: "shoes",
}

export function TraitPanel({
  activeCategory,
  character,
  onTraitChange,
  onColorChange,
}: TraitPanelProps) {
  const category = TRAIT_CATEGORIES.find((c) => c.id === activeCategory)
  if (!category) return null

  const traitKey = TRAIT_KEY_MAP[activeCategory]
  const selectedTraitId = traitKey ? character[traitKey] : undefined
  const selectedOption = category.options.find((o) => o.id === selectedTraitId)
  const colorConfig = COLOR_MAP[activeCategory]

  return (
    <div className="flex flex-col gap-4">
      {/* Current selection info */}
      {selectedOption && <SelectedTraitInfo option={selectedOption} />}

      {/* Color picker (if category supports it) */}
      {category.hasColorPicker && colorConfig && (
        <ColorPicker
          colors={colorConfig.colors}
          selectedColor={character[colorConfig.key]}
          onColorSelect={(color) => onColorChange(colorConfig.key, color)}
          label={`${category.label} Color`}
        />
      )}

      {/* Trait grid */}
      {category.options.length > 1 && (
        <ScrollArea className="h-[320px] pr-2">
          <TraitGrid
            options={category.options}
            selectedId={selectedTraitId || ""}
            onSelect={(id) => onTraitChange(activeCategory, id)}
          />
        </ScrollArea>
      )}
    </div>
  )
}
