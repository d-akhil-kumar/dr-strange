import type { CSSProperties } from 'react'
import type { CollageItem } from '../content/types'
import './Collage.css'

interface Props {
  items: CollageItem[]
  /** frame size in design pixels, used for the aspect ratio */
  w: number
  h: number
  bg?: string
  className?: string
}

/**
 * Overlapping screenshots positioned in percentages of the frame, so the
 * composition scales with the viewport exactly like the Figma layout.
 */
export default function Collage({ items, w, h, bg, className = '' }: Props) {
  return (
    <div className={`collage ${className}`} style={{ aspectRatio: `${w} / ${h}`, background: bg }}>
      {items.map((it, i) => {
        // direction each piece drifts on hover: away from the frame centre
        const cx = it.x + it.w / 2 - 50
        const cy = it.y + it.h / 2 - 50
        const style = {
          left: `${it.x}%`,
          top: `${it.y}%`,
          width: `${it.w}%`,
          height: `${it.h}%`,
          borderRadius: it.radius,
          boxShadow: it.shadow,
          '--dx': `${Math.sign(cx) * Math.min(Math.abs(cx) / 4, 10)}px`,
          '--dy': `${Math.sign(cy) * Math.min(Math.abs(cy) / 4, 10)}px`,
        } as CSSProperties
        return (
          <img
            key={i}
            className="collage__item"
            src={it.src}
            alt={it.alt ?? ''}
            style={style}
            loading={i < 2 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        )
      })}
    </div>
  )
}
