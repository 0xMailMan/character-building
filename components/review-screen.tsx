"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CharacterPreview } from "@/components/character-preview"
import {
  TRAIT_CATEGORIES,
  RARITY_COLORS,
  type CharacterState,
  type Rarity,
} from "@/lib/traits"
import { ArrowLeft, Sparkles, Check, Loader2 } from "lucide-react"

interface ReviewScreenProps {
  character: CharacterState
  onBack: () => void
  onMint: () => void
  isMinting: boolean
}

function getSelectedTraitName(categoryId: string, character: CharacterState): { name: string; rarity: Rarity } | null {
  const category = TRAIT_CATEGORIES.find((c) => c.id === categoryId)
  if (!category) return null

  const keyMap: Record<string, keyof CharacterState> = {
    face: "face",
    hair: "hair",
    cosmetics: "cosmetic",
    top: "top",
    bottom: "bottom",
    shoes: "shoes",
  }

  const traitKey = keyMap[categoryId]
  if (!traitKey) return null

  const selectedId = character[traitKey]
  const option = category.options.find((o) => o.id === selectedId)
  return option ? { name: option.name, rarity: option.rarity } : null
}

function getColorSwatch(categoryId: string, character: CharacterState): string | null {
  const colorMap: Record<string, keyof CharacterState> = {
    skin: "skinColor",
    hair: "hairColor",
    top: "topColor",
    bottom: "bottomColor",
    shoes: "shoesColor",
  }

  const key = colorMap[categoryId]
  return key ? character[key] : null
}

export function ReviewScreen({ character, onBack, onMint, isMinting }: ReviewScreenProps) {
  // Compute rarity score
  const rarityOrder: Record<Rarity, number> = {
    Common: 1,
    Uncommon: 2,
    Rare: 3,
    Legendary: 4,
  }

  const traitCategories = ["face", "hair", "cosmetics", "top", "bottom", "shoes"]
  const traits = traitCategories
    .map((id) => ({ id, ...(getSelectedTraitName(id, character) || { name: "None", rarity: "Common" as Rarity }) }))
    .filter((t) => t.name !== "None")

  const avgRarity = traits.length > 0
    ? traits.reduce((sum, t) => sum + rarityOrder[t.rarity], 0) / traits.length
    : 1

  const overallRarity: Rarity =
    avgRarity >= 3.5 ? "Legendary" : avgRarity >= 2.5 ? "Rare" : avgRarity >= 1.5 ? "Uncommon" : "Common"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-6">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        {/* Character */}
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative rounded-2xl border-2 border-primary/30 bg-card p-6">
            <CharacterPreview character={character} size={280} />
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-20 blur-xl -z-10"
              style={{ backgroundColor: RARITY_COLORS[overallRarity] }}
            />
          </div>
          <Badge
            className="text-sm px-4 py-1"
            style={{
              backgroundColor: RARITY_COLORS[overallRarity],
              color: overallRarity === "Legendary" || overallRarity === "Uncommon" ? "#000" : "#fff",
            }}
          >
            {overallRarity} Character
          </Badge>
        </div>

        {/* Trait summary */}
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground text-balance">Review Your Character</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Confirm your trait selections before minting your unique NFT on Gnosis Chain.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {TRAIT_CATEGORIES.map((cat) => {
              const trait = getSelectedTraitName(cat.id, character)
              const color = getColorSwatch(cat.id, character)

              return (
                <div
                  key={cat.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground w-20">
                      {cat.label}
                    </span>
                    {color && (
                      <span
                        className="size-4 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    )}
                    <span className="text-sm font-medium text-card-foreground">
                      {trait?.name || "Default"}
                    </span>
                  </div>
                  {trait && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: RARITY_COLORS[trait.rarity] }}
                    >
                      {trait.rarity}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Uniqueness check (simulated) */}
          <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3">
            <Check className="size-4 text-primary" />
            <span className="text-sm text-foreground">
              This combination is unique. Ready to mint.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onBack} className="gap-2">
              <ArrowLeft className="size-4" />
              Edit
            </Button>
            <Button
              onClick={onMint}
              disabled={isMinting}
              className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              {isMinting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Minting...
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  Mint NFT (Gasless)
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Gasless mint on Gnosis Chain. No wallet fees required.
          </p>
        </div>
      </div>
    </div>
  )
}
