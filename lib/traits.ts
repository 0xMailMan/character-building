export type Rarity = "Common" | "Uncommon" | "Rare" | "Legendary"

export interface TraitOption {
  id: string
  name: string
  rarity: Rarity
  preview: string // SVG path or color reference
}

export interface TraitCategory {
  id: string
  label: string
  hasColorPicker: boolean
  options: TraitOption[]
}

export const SKIN_COLORS = [
  "#FFDBB4", "#E8B88A", "#D4956B", "#C47D52",
  "#A0673A", "#8B5E3C", "#6B4226", "#4A2C17",
  "#F5D0B0", "#E0A880", "#CC9060", "#B87848",
]

export const HAIR_COLORS = [
  "#1A1A1A", "#3D2B1F", "#6B3E26", "#8B4513",
  "#A0522D", "#CD853F", "#DAA520", "#FFD700",
  "#B22222", "#8B0000", "#FF6347", "#FF69B4",
  "#4B0082", "#6A5ACD", "#4169E1", "#00CED1",
  "#228B22", "#90EE90", "#F5F5DC", "#FFFFFF",
]

export const CLOTHING_COLORS = [
  "#1A1A1A", "#333333", "#666666", "#999999",
  "#FFFFFF", "#8B0000", "#FF4444", "#FF6347",
  "#FF8C00", "#FFD700", "#228B22", "#32CD32",
  "#1E90FF", "#4169E1", "#4B0082", "#9370DB",
  "#FF69B4", "#DDA0DD", "#D2691E", "#F5DEB3",
]

export const TRAIT_CATEGORIES: TraitCategory[] = [
  {
    id: "skin",
    label: "Skin",
    hasColorPicker: true,
    options: [
      { id: "skin-default", name: "Classic", rarity: "Common", preview: "default" },
    ],
  },
  {
    id: "face",
    label: "Face",
    hasColorPicker: false,
    options: [
      { id: "face-happy", name: "Happy", rarity: "Common", preview: "happy" },
      { id: "face-fierce", name: "Fierce", rarity: "Uncommon", preview: "fierce" },
      { id: "face-chill", name: "Chill", rarity: "Common", preview: "chill" },
      { id: "face-sultry", name: "Sultry", rarity: "Rare", preview: "sultry" },
      { id: "face-wink", name: "Wink", rarity: "Uncommon", preview: "wink" },
      { id: "face-surprised", name: "Surprised", rarity: "Common", preview: "surprised" },
      { id: "face-angry", name: "Angry", rarity: "Rare", preview: "angry" },
      { id: "face-smirk", name: "Smirk", rarity: "Legendary", preview: "smirk" },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    hasColorPicker: true,
    options: [
      { id: "hair-short", name: "Short Crop", rarity: "Common", preview: "short" },
      { id: "hair-medium", name: "Medium Wave", rarity: "Common", preview: "medium" },
      { id: "hair-long", name: "Long Flow", rarity: "Uncommon", preview: "long" },
      { id: "hair-spiky", name: "Spiky Edge", rarity: "Uncommon", preview: "spiky" },
      { id: "hair-curly", name: "Curly Bounce", rarity: "Rare", preview: "curly" },
      { id: "hair-ponytail", name: "High Ponytail", rarity: "Common", preview: "ponytail" },
      { id: "hair-twin", name: "Twin Tails", rarity: "Rare", preview: "twin" },
      { id: "hair-mohawk", name: "Mohawk", rarity: "Legendary", preview: "mohawk" },
      { id: "hair-bun", name: "Top Bun", rarity: "Uncommon", preview: "bun" },
      { id: "hair-buzz", name: "Buzz Cut", rarity: "Common", preview: "buzz" },
      { id: "hair-elegance", name: "Streak of Elegance", rarity: "Legendary", preview: "elegance" },
      { id: "hair-bob", name: "Classic Bob", rarity: "Common", preview: "bob" },
    ],
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    hasColorPicker: false,
    options: [
      { id: "cosmetic-none", name: "None", rarity: "Common", preview: "none" },
      { id: "cosmetic-bandage", name: "Rascal Bandage", rarity: "Uncommon", preview: "bandage" },
      { id: "cosmetic-scar", name: "Battle Scar", rarity: "Rare", preview: "scar" },
      { id: "cosmetic-freckles", name: "Freckles", rarity: "Common", preview: "freckles" },
      { id: "cosmetic-blush", name: "Rosy Cheeks", rarity: "Common", preview: "blush" },
      { id: "cosmetic-tattoo", name: "Tribal Mark", rarity: "Legendary", preview: "tattoo" },
    ],
  },
  {
    id: "top",
    label: "Top",
    hasColorPicker: true,
    options: [
      { id: "top-tshirt", name: "Basic Tee", rarity: "Common", preview: "tshirt" },
      { id: "top-hoodie", name: "Cozy Hoodie", rarity: "Common", preview: "hoodie" },
      { id: "top-jacket", name: "Leather Jacket", rarity: "Uncommon", preview: "jacket" },
      { id: "top-armor", name: "Knight Armor", rarity: "Rare", preview: "armor" },
      { id: "top-robe", name: "Mystic Robe", rarity: "Rare", preview: "robe" },
      { id: "top-stealth", name: "Stealth Vest", rarity: "Uncommon", preview: "stealth" },
      { id: "top-royal", name: "Royal Garb", rarity: "Legendary", preview: "royal" },
      { id: "top-tank", name: "Tank Top", rarity: "Common", preview: "tank" },
    ],
  },
  {
    id: "bottom",
    label: "Bottom",
    hasColorPicker: true,
    options: [
      { id: "bottom-pants", name: "Classic Pants", rarity: "Common", preview: "pants" },
      { id: "bottom-shorts", name: "Cargo Shorts", rarity: "Common", preview: "shorts" },
      { id: "bottom-skirt", name: "Pleated Skirt", rarity: "Uncommon", preview: "skirt" },
      { id: "bottom-armor", name: "Armored Greaves", rarity: "Rare", preview: "armor" },
      { id: "bottom-robe", name: "Flowing Robe", rarity: "Rare", preview: "robe" },
      { id: "bottom-stealth", name: "Stealth Pants", rarity: "Uncommon", preview: "stealth" },
      { id: "bottom-royal", name: "Royal Slacks", rarity: "Legendary", preview: "royal" },
    ],
  },
  {
    id: "shoes",
    label: "Shoes",
    hasColorPicker: true,
    options: [
      { id: "shoes-sneakers", name: "Sneakers", rarity: "Common", preview: "sneakers" },
      { id: "shoes-boots", name: "Combat Boots", rarity: "Uncommon", preview: "boots" },
      { id: "shoes-sandals", name: "Sandals", rarity: "Common", preview: "sandals" },
      { id: "shoes-armor", name: "Iron Sabatons", rarity: "Rare", preview: "armor" },
      { id: "shoes-wraps", name: "Stealth Wraps", rarity: "Uncommon", preview: "wraps" },
      { id: "shoes-royal", name: "Royal Boots", rarity: "Legendary", preview: "royal" },
    ],
  },
]

export const RARITY_COLORS: Record<Rarity, string> = {
  Common: "#9CA3AF",
  Uncommon: "#34D399",
  Rare: "#60A5FA",
  Legendary: "#FBBF24",
}

export interface CharacterState {
  skinColor: string
  face: string
  hair: string
  hairColor: string
  cosmetic: string
  top: string
  topColor: string
  bottom: string
  bottomColor: string
  shoes: string
  shoesColor: string
}

export const DEFAULT_CHARACTER: CharacterState = {
  skinColor: SKIN_COLORS[0],
  face: "face-happy",
  hair: "hair-medium",
  hairColor: HAIR_COLORS[2],
  cosmetic: "cosmetic-none",
  top: "top-tshirt",
  topColor: CLOTHING_COLORS[5],
  bottom: "bottom-pants",
  bottomColor: CLOTHING_COLORS[0],
  shoes: "shoes-sneakers",
  shoesColor: CLOTHING_COLORS[4],
}
