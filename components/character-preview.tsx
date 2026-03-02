"use client"

import type { CharacterState } from "@/lib/traits"

// SVG-based chibi character renderer
// Each trait is a layer that composites on top of each other

function SkinLayer({ color }: { color: string }) {
  return (
    <g id="skin">
      {/* Head */}
      <ellipse cx="150" cy="100" rx="55" ry="60" fill={color} />
      {/* Neck */}
      <rect x="138" y="150" width="24" height="20" rx="4" fill={color} />
      {/* Arms */}
      <rect x="72" y="185" width="20" height="55" rx="10" fill={color} />
      <rect x="208" y="185" width="20" height="55" rx="10" fill={color} />
      {/* Hands */}
      <circle cx="82" cy="244" r="11" fill={color} />
      <circle cx="218" cy="244" r="11" fill={color} />
      {/* Legs */}
      <rect x="115" y="300" width="22" height="50" rx="8" fill={color} />
      <rect x="163" y="300" width="22" height="50" rx="8" fill={color} />
    </g>
  )
}

function FaceLayer({ faceId }: { faceId: string }) {
  const faceType = faceId.replace("face-", "")

  const eyes: Record<string, React.ReactNode> = {
    happy: (
      <>
        <ellipse cx="130" cy="95" rx="8" ry="9" fill="#2D1B0E" />
        <ellipse cx="170" cy="95" rx="8" ry="9" fill="#2D1B0E" />
        <ellipse cx="132" cy="92" rx="3" ry="3" fill="white" />
        <ellipse cx="172" cy="92" rx="3" ry="3" fill="white" />
        <path d="M130 112 Q150 125 170 112" stroke="#2D1B0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </>
    ),
    fierce: (
      <>
        <path d="M120 88 L140 93" stroke="#2D1B0E" strokeWidth="3" strokeLinecap="round" />
        <path d="M180 88 L160 93" stroke="#2D1B0E" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="130" cy="98" rx="7" ry="8" fill="#2D1B0E" />
        <ellipse cx="170" cy="98" rx="7" ry="8" fill="#2D1B0E" />
        <ellipse cx="132" cy="96" rx="2.5" ry="2.5" fill="#FF4444" />
        <ellipse cx="172" cy="96" rx="2.5" ry="2.5" fill="#FF4444" />
        <path d="M135 115 L150 112 L165 115" stroke="#2D1B0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </>
    ),
    chill: (
      <>
        <path d="M122 96 Q130 92 138 96" stroke="#2D1B0E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M162 96 Q170 92 178 96" stroke="#2D1B0E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M140 114 Q150 118 160 114" stroke="#2D1B0E" strokeWidth="2" fill="none" strokeLinecap="round" />
      </>
    ),
    sultry: (
      <>
        <path d="M120 90 L138 92" stroke="#2D1B0E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M180 90 L162 92" stroke="#2D1B0E" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="130" cy="97" rx="8" ry="6" fill="#2D1B0E" />
        <ellipse cx="170" cy="97" rx="8" ry="6" fill="#2D1B0E" />
        <ellipse cx="131" cy="95" rx="3" ry="2.5" fill="#4FC3F7" />
        <ellipse cx="171" cy="95" rx="3" ry="2.5" fill="#4FC3F7" />
        <path d="M138 114 Q150 120 162 114" stroke="#C0392B" strokeWidth="2.5" fill="#C0392B" strokeLinecap="round" />
      </>
    ),
    wink: (
      <>
        <ellipse cx="130" cy="95" rx="8" ry="9" fill="#2D1B0E" />
        <ellipse cx="132" cy="92" rx="3" ry="3" fill="white" />
        <path d="M162 95 Q170 90 178 95" stroke="#2D1B0E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M135 112 Q150 122 165 112" stroke="#2D1B0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </>
    ),
    surprised: (
      <>
        <ellipse cx="130" cy="93" rx="10" ry="11" fill="#2D1B0E" />
        <ellipse cx="170" cy="93" rx="10" ry="11" fill="#2D1B0E" />
        <ellipse cx="132" cy="90" rx="4" ry="4" fill="white" />
        <ellipse cx="172" cy="90" rx="4" ry="4" fill="white" />
        <ellipse cx="150" cy="118" rx="7" ry="9" fill="#2D1B0E" />
      </>
    ),
    angry: (
      <>
        <path d="M118 85 L140 95" stroke="#2D1B0E" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M182 85 L160 95" stroke="#2D1B0E" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="130" cy="100" rx="7" ry="6" fill="#2D1B0E" />
        <ellipse cx="170" cy="100" rx="7" ry="6" fill="#2D1B0E" />
        <ellipse cx="131" cy="99" rx="2" ry="2" fill="#FF0000" />
        <ellipse cx="171" cy="99" rx="2" ry="2" fill="#FF0000" />
        <path d="M135 118 Q150 110 165 118" stroke="#2D1B0E" strokeWidth="3" fill="none" strokeLinecap="round" />
      </>
    ),
    smirk: (
      <>
        <ellipse cx="130" cy="95" rx="7" ry="8" fill="#2D1B0E" />
        <ellipse cx="170" cy="95" rx="7" ry="8" fill="#2D1B0E" />
        <ellipse cx="132" cy="93" rx="3" ry="3" fill="white" />
        <ellipse cx="172" cy="93" rx="3" ry="3" fill="white" />
        <path d="M140 113 Q155 120 168 110" stroke="#2D1B0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </>
    ),
  }

  return <g id="face">{eyes[faceType] || eyes.happy}</g>
}

function HairLayer({ hairId, color }: { hairId: string; color: string }) {
  const hairType = hairId.replace("hair-", "")
  const darkerColor = color // Use same color for simplicity

  const hairs: Record<string, React.ReactNode> = {
    short: (
      <>
        <ellipse cx="150" cy="72" rx="58" ry="38" fill={color} />
        <path d="M95 85 Q95 55 150 48 Q205 55 205 85" fill={color} />
      </>
    ),
    medium: (
      <>
        <ellipse cx="150" cy="68" rx="60" ry="42" fill={color} />
        <path d="M92 80 Q92 48 150 40 Q208 48 208 80" fill={color} />
        <path d="M92 90 Q88 130 95 155" stroke={darkerColor} strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M208 90 Q212 130 205 155" stroke={darkerColor} strokeWidth="18" fill="none" strokeLinecap="round" />
      </>
    ),
    long: (
      <>
        <ellipse cx="150" cy="68" rx="60" ry="42" fill={color} />
        <path d="M92 80 Q92 48 150 40 Q208 48 208 80" fill={color} />
        <path d="M92 85 Q82 160 88 230" stroke={darkerColor} strokeWidth="22" fill="none" strokeLinecap="round" />
        <path d="M208 85 Q218 160 212 230" stroke={darkerColor} strokeWidth="22" fill="none" strokeLinecap="round" />
        <path d="M95 85 Q90 180 95 240" stroke={color} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M205 85 Q210 180 205 240" stroke={color} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.8" />
      </>
    ),
    spiky: (
      <>
        <ellipse cx="150" cy="72" rx="56" ry="36" fill={color} />
        <polygon points="110,55 120,20 135,55" fill={color} />
        <polygon points="135,50 148,10 158,50" fill={color} />
        <polygon points="155,52 172,15 182,55" fill={color} />
        <polygon points="100,70 92,35 115,65" fill={color} />
        <polygon points="192,70 205,35 188,65" fill={color} />
      </>
    ),
    curly: (
      <>
        <ellipse cx="150" cy="68" rx="62" ry="44" fill={color} />
        <circle cx="98" cy="78" r="18" fill={color} />
        <circle cx="202" cy="78" r="18" fill={color} />
        <circle cx="92" cy="100" r="15" fill={color} />
        <circle cx="208" cy="100" r="15" fill={color} />
        <circle cx="95" cy="125" r="14" fill={color} />
        <circle cx="205" cy="125" r="14" fill={color} />
        <circle cx="100" cy="148" r="12" fill={color} />
        <circle cx="200" cy="148" r="12" fill={color} />
        <circle cx="120" cy="48" r="12" fill={color} />
        <circle cx="150" cy="42" r="12" fill={color} />
        <circle cx="180" cy="48" r="12" fill={color} />
      </>
    ),
    ponytail: (
      <>
        <ellipse cx="150" cy="70" rx="58" ry="40" fill={color} />
        <path d="M92 80 Q92 50 150 42 Q208 50 208 80" fill={color} />
        <path d="M178 50 Q200 45 210 70 Q215 120 200 180" stroke={darkerColor} strokeWidth="20" fill="none" strokeLinecap="round" />
        <circle cx="195" cy="182" r="10" fill={color} />
      </>
    ),
    twin: (
      <>
        <ellipse cx="150" cy="70" rx="58" ry="40" fill={color} />
        <path d="M92 80 Q92 50 150 42 Q208 50 208 80" fill={color} />
        <path d="M105 60 Q85 55 78 80 Q72 140 80 200" stroke={darkerColor} strokeWidth="18" fill="none" strokeLinecap="round" />
        <path d="M195 60 Q215 55 222 80 Q228 140 220 200" stroke={darkerColor} strokeWidth="18" fill="none" strokeLinecap="round" />
        <circle cx="78" cy="202" r="9" fill={color} />
        <circle cx="222" cy="202" r="9" fill={color} />
      </>
    ),
    mohawk: (
      <>
        <path d="M95 90 Q95 55 150 50 Q205 55 205 90" fill={color} />
        <polygon points="130,55 140,0 150,55" fill={color} />
        <polygon points="145,50 155,-5 165,50" fill={color} />
        <polygon points="158,55 168,5 175,55" fill={color} />
        <rect x="136" y="45" width="28" height="12" rx="4" fill={color} />
      </>
    ),
    bun: (
      <>
        <ellipse cx="150" cy="72" rx="58" ry="38" fill={color} />
        <path d="M95 85 Q95 55 150 48 Q205 55 205 85" fill={color} />
        <circle cx="150" cy="35" r="22" fill={color} />
        <circle cx="150" cy="32" r="18" fill={darkerColor} opacity="0.3" />
      </>
    ),
    buzz: (
      <>
        <ellipse cx="150" cy="76" rx="56" ry="34" fill={color} />
        <path d="M98 88 Q98 60 150 55 Q202 60 202 88" fill={color} />
      </>
    ),
    elegance: (
      <>
        <ellipse cx="150" cy="66" rx="62" ry="44" fill={color} />
        <path d="M90 78 Q90 45 150 38 Q210 45 210 78" fill={color} />
        <path d="M90 85 Q82 150 88 220 Q90 240 100 250" stroke={darkerColor} strokeWidth="24" fill="none" strokeLinecap="round" />
        <path d="M210 85 Q215 110 210 130" stroke={darkerColor} strokeWidth="20" fill="none" strokeLinecap="round" />
        {/* Highlight streak */}
        <path d="M125 42 Q120 80 118 120" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.4" />
      </>
    ),
    bob: (
      <>
        <ellipse cx="150" cy="68" rx="62" ry="42" fill={color} />
        <path d="M90 80 Q90 48 150 40 Q210 48 210 80" fill={color} />
        <path d="M90 85 Q85 110 90 135 Q98 145 110 145" stroke={darkerColor} strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M210 85 Q215 110 210 135 Q202 145 190 145" stroke={darkerColor} strokeWidth="20" fill="none" strokeLinecap="round" />
      </>
    ),
  }

  return <g id="hair">{hairs[hairType] || hairs.short}</g>
}

function CosmeticLayer({ cosmeticId }: { cosmeticId: string }) {
  const type = cosmeticId.replace("cosmetic-", "")

  if (type === "none") return null

  const cosmetics: Record<string, React.ReactNode> = {
    bandage: (
      <g>
        <rect x="158" y="86" width="22" height="10" rx="2" fill="#F5DEB3" transform="rotate(15, 169, 91)" />
        <line x1="162" y1="87" x2="162" y2="95" stroke="#D2B48C" strokeWidth="0.5" transform="rotate(15, 169, 91)" />
        <line x1="166" y1="87" x2="166" y2="95" stroke="#D2B48C" strokeWidth="0.5" transform="rotate(15, 169, 91)" />
        <line x1="170" y1="87" x2="170" y2="95" stroke="#D2B48C" strokeWidth="0.5" transform="rotate(15, 169, 91)" />
        <line x1="174" y1="87" x2="174" y2="95" stroke="#D2B48C" strokeWidth="0.5" transform="rotate(15, 169, 91)" />
      </g>
    ),
    scar: (
      <g>
        <path d="M165 85 L172 100 L168 98 L175 112" stroke="#C0392B" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      </g>
    ),
    freckles: (
      <g opacity="0.5">
        <circle cx="125" cy="108" r="1.5" fill="#8B6914" />
        <circle cx="130" cy="112" r="1.5" fill="#8B6914" />
        <circle cx="121" cy="113" r="1.5" fill="#8B6914" />
        <circle cx="127" cy="116" r="1.5" fill="#8B6914" />
        <circle cx="170" cy="108" r="1.5" fill="#8B6914" />
        <circle cx="175" cy="112" r="1.5" fill="#8B6914" />
        <circle cx="179" cy="113" r="1.5" fill="#8B6914" />
        <circle cx="173" cy="116" r="1.5" fill="#8B6914" />
      </g>
    ),
    blush: (
      <g opacity="0.35">
        <ellipse cx="122" cy="112" rx="12" ry="7" fill="#FF6B8A" />
        <ellipse cx="178" cy="112" rx="12" ry="7" fill="#FF6B8A" />
      </g>
    ),
    tattoo: (
      <g opacity="0.7">
        <path d="M175 95 L182 88 L189 95 L182 102 Z" stroke="#4B0082" strokeWidth="1.5" fill="none" />
        <line x1="182" y1="88" x2="182" y2="82" stroke="#4B0082" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="189" y1="95" x2="195" y2="95" stroke="#4B0082" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ),
  }

  return <g id="cosmetics">{cosmetics[type]}</g>
}

function TopLayer({ topId, color }: { topId: string; color: string }) {
  const type = topId.replace("top-", "")

  const tops: Record<string, React.ReactNode> = {
    tshirt: (
      <g>
        <path d="M100 170 L90 185 L72 185 L72 195 L92 195 L100 192 L100 280 L200 280 L200 192 L208 195 L228 195 L228 185 L210 185 L200 170 Q175 160 150 162 Q125 160 100 170 Z" fill={color} />
        {/* Collar */}
        <path d="M125 165 Q150 175 175 165" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
      </g>
    ),
    hoodie: (
      <g>
        <path d="M96 168 L82 185 L68 185 L68 198 L88 198 L96 194 L96 280 L204 280 L204 194 L212 198 L232 198 L232 185 L218 185 L204 168 Q175 155 150 158 Q125 155 96 168 Z" fill={color} />
        {/* Hood */}
        <path d="M110 165 Q110 148 150 142 Q190 148 190 165" fill={color} stroke={color} strokeWidth="2" />
        <path d="M118 168 Q118 155 150 150 Q182 155 182 168" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
        {/* Pocket */}
        <path d="M125 240 L175 240 L175 265 Q150 272 125 265 Z" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
      </g>
    ),
    jacket: (
      <g>
        <path d="M98 168 L85 185 L70 185 L70 196 L90 196 L98 192 L98 280 L202 280 L202 192 L210 196 L230 196 L230 185 L215 185 L202 168 Q175 158 150 160 Q125 158 98 168 Z" fill={color} />
        {/* Zipper */}
        <line x1="150" y1="168" x2="150" y2="278" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        {/* Collar */}
        <path d="M120 168 L140 180 L150 172 L160 180 L180 168" fill={color} stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
      </g>
    ),
    armor: (
      <g>
        <path d="M96 168 L80 185 L68 188 L68 198 L88 198 L96 194 L96 280 L204 280 L204 194 L212 198 L232 198 L232 188 L220 185 L204 168 Q175 155 150 158 Q125 155 96 168 Z" fill={color} />
        {/* Shoulder pads */}
        <ellipse cx="88" cy="185" rx="22" ry="12" fill={color} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <ellipse cx="212" cy="185" rx="22" ry="12" fill={color} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        {/* Chest plate */}
        <path d="M120 185 L150 195 L180 185 L180 240 L150 250 L120 240 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      </g>
    ),
    robe: (
      <g>
        <path d="M95 168 L80 185 L70 188 L70 198 L88 195 L92 280 L208 280 L212 195 L230 198 L230 188 L220 185 L205 168 Q175 155 150 158 Q125 155 95 168 Z" fill={color} />
        {/* V-neck */}
        <path d="M125 168 L150 205 L175 168" fill="rgba(0,0,0,0.1)" />
        {/* Belt */}
        <rect x="105" y="235" width="90" height="8" rx="2" fill="rgba(0,0,0,0.2)" />
      </g>
    ),
    stealth: (
      <g>
        <path d="M100 170 L88 185 L72 185 L72 196 L90 196 L100 192 L100 280 L200 280 L200 192 L210 196 L228 196 L228 185 L212 185 L200 170 Q175 158 150 160 Q125 158 100 170 Z" fill={color} />
        {/* Cross straps */}
        <path d="M115 175 L185 260" stroke="rgba(0,0,0,0.2)" strokeWidth="6" />
        <path d="M185 175 L115 260" stroke="rgba(0,0,0,0.2)" strokeWidth="6" />
      </g>
    ),
    royal: (
      <g>
        <path d="M95 168 L82 185 L68 188 L68 200 L88 198 L95 194 L95 280 L205 280 L205 194 L212 198 L232 200 L232 188 L218 185 L205 168 Q175 155 150 158 Q125 155 95 168 Z" fill={color} />
        {/* Gold trim */}
        <path d="M95 168 Q125 155 150 158 Q175 155 205 168" stroke="#FFD700" strokeWidth="3" fill="none" />
        <path d="M95 280 L205 280" stroke="#FFD700" strokeWidth="3" />
        {/* Medallion */}
        <circle cx="150" cy="190" r="8" fill="#FFD700" />
        <circle cx="150" cy="190" r="5" fill={color} />
      </g>
    ),
    tank: (
      <g>
        <path d="M110 170 L108 185 L108 280 L192 280 L192 185 L190 170 Q175 162 150 162 Q125 162 110 170 Z" fill={color} />
      </g>
    ),
  }

  return <g id="top">{tops[type] || tops.tshirt}</g>
}

function BottomLayer({ bottomId, color }: { bottomId: string; color: string }) {
  const type = bottomId.replace("bottom-", "")

  const bottoms: Record<string, React.ReactNode> = {
    pants: (
      <g>
        <path d="M100 275 L100 350 L137 350 L137 298 L163 298 L163 350 L200 350 L200 275 Z" fill={color} />
      </g>
    ),
    shorts: (
      <g>
        <path d="M100 275 L100 320 L137 320 L137 298 L163 298 L163 320 L200 320 L200 275 Z" fill={color} />
      </g>
    ),
    skirt: (
      <g>
        <path d="M98 275 L90 345 L210 345 L202 275 Z" fill={color} />
        {/* Pleats */}
        <line x1="120" y1="275" x2="115" y2="345" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <line x1="150" y1="275" x2="150" y2="345" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <line x1="180" y1="275" x2="185" y2="345" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      </g>
    ),
    armor: (
      <g>
        <path d="M100 275 L100 350 L137 350 L137 298 L163 298 L163 350 L200 350 L200 275 Z" fill={color} />
        {/* Knee guards */}
        <ellipse cx="118" cy="340" rx="14" ry="10" fill={color} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <ellipse cx="182" cy="340" rx="14" ry="10" fill={color} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      </g>
    ),
    robe: (
      <g>
        <path d="M95 275 L85 355 L215 355 L205 275 Z" fill={color} />
        <line x1="150" y1="275" x2="150" y2="355" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </g>
    ),
    stealth: (
      <g>
        <path d="M100 275 L100 350 L137 350 L137 298 L163 298 L163 350 L200 350 L200 275 Z" fill={color} />
        {/* Side stripes */}
        <rect x="100" y="290" width="6" height="60" fill="rgba(0,0,0,0.2)" />
        <rect x="194" y="290" width="6" height="60" fill="rgba(0,0,0,0.2)" />
      </g>
    ),
    royal: (
      <g>
        <path d="M100 275 L100 350 L137 350 L137 298 L163 298 L163 350 L200 350 L200 275 Z" fill={color} />
        <path d="M100 350 L137 350" stroke="#FFD700" strokeWidth="3" />
        <path d="M163 350 L200 350" stroke="#FFD700" strokeWidth="3" />
      </g>
    ),
  }

  return <g id="bottom">{bottoms[type] || bottoms.pants}</g>
}

function ShoesLayer({ shoesId, color }: { shoesId: string; color: string }) {
  const type = shoesId.replace("shoes-", "")

  const shoes: Record<string, React.ReactNode> = {
    sneakers: (
      <g>
        <path d="M108 345 L108 360 Q108 368 116 368 L140 368 Q145 368 145 363 L145 345 Z" fill={color} rx="4" />
        <path d="M155 345 L155 360 Q155 368 163 368 L188 368 Q193 368 193 363 L193 345 Z" fill={color} rx="4" />
        {/* Sole */}
        <path d="M108 363 L145 363" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        <path d="M155 363 L193 363" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
      </g>
    ),
    boots: (
      <g>
        <path d="M105 330 L105 362 Q105 370 113 370 L142 370 Q147 370 147 365 L147 330 Z" fill={color} />
        <path d="M153 330 L153 362 Q153 370 161 370 L190 370 Q195 370 195 365 L195 330 Z" fill={color} />
        {/* Boot top */}
        <path d="M105 335 L147 335" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <path d="M153 335 L195 335" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      </g>
    ),
    sandals: (
      <g>
        <path d="M112 352 L112 362 Q112 368 118 368 L138 368 Q142 368 142 362 L142 352 Z" fill={color} />
        <path d="M158 352 L158 362 Q158 368 164 368 L184 368 Q188 368 188 362 L188 352 Z" fill={color} />
        {/* Straps */}
        <path d="M115 352 L139 352" stroke={color} strokeWidth="3" />
        <path d="M127 345 L127 355" stroke={color} strokeWidth="3" />
        <path d="M161 352 L185 352" stroke={color} strokeWidth="3" />
        <path d="M173 345 L173 355" stroke={color} strokeWidth="3" />
      </g>
    ),
    armor: (
      <g>
        <path d="M103 330 L103 365 Q103 373 112 373 L142 373 Q150 373 150 365 L150 330 Z" fill={color} />
        <path d="M150 330 L150 365 Q150 373 158 373 L190 373 Q198 373 198 365 L198 330 Z" fill={color} />
        {/* Metal plates */}
        <path d="M103 345 L150 345" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M150 345 L198 345" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M103 358 L150 358" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M150 358 L198 358" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      </g>
    ),
    wraps: (
      <g>
        <path d="M110 340 L110 362 Q110 368 118 368 L138 368 Q142 368 142 362 L142 340 Z" fill={color} />
        <path d="M158 340 L158 362 Q158 368 166 368 L186 368 Q190 368 190 362 L190 340 Z" fill={color} />
        {/* Wrap lines */}
        <path d="M112 345 L140 348" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M112 352 L140 355" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M160 345 L188 348" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        <path d="M160 352 L188 355" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
      </g>
    ),
    royal: (
      <g>
        <path d="M105 332 L105 362 Q105 372 114 372 L142 372 Q150 372 150 362 L150 332 Z" fill={color} />
        <path d="M150 332 L150 362 Q150 372 158 372 L190 372 Q198 372 198 362 L198 332 Z" fill={color} />
        {/* Gold trim */}
        <path d="M105 335 L150 335" stroke="#FFD700" strokeWidth="2" />
        <path d="M150 335 L198 335" stroke="#FFD700" strokeWidth="2" />
        <path d="M105 372 L150 372" stroke="#FFD700" strokeWidth="2" />
        <path d="M150 372 L198 372" stroke="#FFD700" strokeWidth="2" />
      </g>
    ),
  }

  return <g id="shoes">{shoes[type] || shoes.sneakers}</g>
}

interface CharacterPreviewProps {
  character: CharacterState
  className?: string
  size?: number
}

export function CharacterPreview({ character, className, size = 400 }: CharacterPreviewProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 300 400"
        width={size}
        height={size * (400 / 300)}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Character preview"
      >
        {/* Layers render bottom to top */}
        <ShoesLayer shoesId={character.shoes} color={character.shoesColor} />
        <BottomLayer bottomId={character.bottom} color={character.bottomColor} />
        <SkinLayer color={character.skinColor} />
        <TopLayer topId={character.top} color={character.topColor} />
        <FaceLayer faceId={character.face} />
        <CosmeticLayer cosmeticId={character.cosmetic} />
        <HairLayer hairId={character.hair} color={character.hairColor} />
      </svg>
    </div>
  )
}
