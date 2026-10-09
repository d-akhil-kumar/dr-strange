import type { CSSProperties } from 'react'
import type { Block, ListBlock } from '../content/types'
import RichText from './RichText'
import Collage from './Collage'
import LazyVideo from './LazyVideo'
import './Blocks.css'

const DESIGN_WIDTH = 1036

function List({ block, depth = 0 }: { block: ListBlock; depth?: number }) {
  const Tag = block.ordered ? 'ol' : 'ul'
  return (
    <Tag className={`list list--${block.ordered ? 'ol' : 'ul'} list--d${Math.min(depth, 2)}`} start={block.start}>
      {block.items.map((it, i) => (
        <li
          key={i}
          className={it.runs.length ? undefined : 'list__wrapper'}
          style={it.gap ? { marginBottom: `calc(var(--line) * ${it.gap})` } : undefined}
        >
          {it.runs.length > 0 && <RichText runs={it.runs} />}
          {it.children?.map((c, j) => <List key={j} block={c} depth={depth + 1} />)}
        </li>
      ))}
    </Tag>
  )
}

/** Width of a media block relative to the 1036px design column. */
const mediaStyle = (w: number): CSSProperties => ({ width: `min(100%, ${w}px)` })

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level}` as 'h1'
      return (
        <Tag className={`h h--${block.level}`} style={block.align ? { textAlign: block.align } : undefined}>
          <RichText runs={block.runs} />
        </Tag>
      )
    }
    case 'text':
      return (
        <p
          className={`text${block.size ? ` text--${block.size}` : ''}`}
          style={{
            textAlign: block.align,
            marginBottom: block.gap ? `calc(var(--line) * ${block.gap})` : undefined,
          }}
        >
          <RichText runs={block.runs} />
        </p>
      )
    case 'spacer':
      return <div className="spacer" aria-hidden="true" />
    case 'list':
      return <List block={block} />
    case 'image':
      return (
        <figure className="media-wrap" style={mediaStyle(block.w)}>
          <img
            className="media"
            src={block.src}
            alt={block.alt ?? ''}
            width={block.w}
            height={block.h}
            loading="lazy"
            decoding="async"
          />
        </figure>
      )
    case 'video':
      return (
        <figure
          className={`media-wrap${block.frame ? ' media-wrap--framed' : ''}`}
          style={{ ...mediaStyle(block.w), ...(block.frame ? { '--frame': block.frame } : {}) } as CSSProperties}
        >
          <LazyVideo src={block.src} w={block.w} h={block.h} label="Screen recording of the design" />
        </figure>
      )
    case 'embed':
      return (
        <figure className="media-wrap embed" style={mediaStyle(block.w)}>
          <iframe
            src={block.src}
            title={block.title}
            loading="lazy"
            allowFullScreen
            style={{ aspectRatio: `${block.w} / ${block.h}` }}
          />
          <figcaption className="embed__caption">
            <a href={block.src.replace('embed.figma.com', 'www.figma.com').replace('&embed-host=share', '')} target="_blank" rel="noreferrer">
              Open prototype in Figma ↗
            </a>
          </figcaption>
        </figure>
      )
    case 'divider':
      return <hr className="divider" />
    case 'collage':
      return <Collage items={block.items} w={block.w} h={block.h} bg={block.bg} />
    case 'tile':
      return (
        <div className="tile">
          <img src={block.src} alt="" width={block.icon} height={block.icon} loading="lazy" decoding="async" />
        </div>
      )
    case 'callout':
      return (
        <aside className="callout" style={block.iconGap ? ({ '--icon-gap': `${block.iconGap}px` } as CSSProperties) : undefined}>
          {block.icon && (
            <img
              className="callout__icon"
              src={block.icon.src}
              alt=""
              width={block.icon.size}
              height={block.icon.size}
              loading="lazy"
              style={{ '--icon': `${block.icon.size}px` } as CSSProperties}
            />
          )}
          <div className="callout__body" style={{ gap: block.gap ?? 10 }}>
            {block.blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </aside>
      )
    case 'columns': {
      const total = block.cols.reduce((s, c) => s + c.width, 0)
      const gapPct = (block.gap / DESIGN_WIDTH) * 100
      return (
        <div
          className={`cols${block.variant ? ` cols--${block.variant}` : ''}`}
          style={
            {
              '--cols': block.cols.length,
              columnGap: `min(${block.gap}px, ${gapPct.toFixed(2)}%)`,
            } as CSSProperties
          }
        >
          {block.cols.map((c, i) => (
            <div key={i} className="cols__col" style={{ flexGrow: c.width / total }}>
              {c.blocks.map((b, j) => (
                <BlockView key={j} block={b} />
              ))}
            </div>
          ))}
        </div>
      )
    }
    case 'stack':
      return (
        <div
          className={`stack${block.gap ? '' : ' stack--flow'}`}
          style={{ gap: block.gap || undefined, textAlign: block.align }}
        >
          {block.blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
        </div>
      )
  }
}

/** Top-level sections of a case study, each revealed as it scrolls into view. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="blocks">
      {blocks.map((b, i) => (
        <section key={i} className={`blocks__section blocks__section--${b.type}`} data-reveal={i > 1 ? '' : undefined}>
          <BlockView block={b} />
        </section>
      ))}
    </div>
  )
}
