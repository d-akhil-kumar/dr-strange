/** A styled span of text inside a paragraph, heading or list item. */
export interface Run {
  t: string
  /** bold */
  b?: 1
  /** italic */
  i?: 1
  /** underline */
  u?: 1
  /** text colour (omitted = default ink) */
  c?: string
  /** link target */
  a?: string
}

export interface ListBlock {
  type: 'list'
  ordered: boolean
  start?: number
  items: ListItem[]
}

export interface ListItem {
  runs: Run[]
  /** number of blank lines rendered after the item */
  gap?: number
  children?: ListBlock[]
}

export interface CollageItem {
  src: string
  alt?: string
  /** position and size as a percentage of the collage frame */
  x: number
  y: number
  w: number
  h: number
  radius?: number
  shadow?: string
}

export type Block =
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5; runs: Run[]; align?: 'center' }
  | { type: 'text'; runs: Run[]; align?: 'center'; gap?: number; size?: 'xs' | 'lg' }
  | { type: 'spacer' }
  | ListBlock
  | { type: 'image'; src: string; alt?: string; w: number; h: number }
  /** autoplaying, muted screen recording; `frame` draws a thick coloured border */
  | { type: 'video'; src: string; w: number; h: number; frame?: string }
  /** bordered note with an optional illustration on the left */
  | { type: 'callout'; blocks: Block[]; icon?: { src: string; size: number }; gap?: number; iconGap?: number }
  | { type: 'embed'; src: string; title: string; w: number; h: number }
  | { type: 'divider' }
  | { type: 'collage'; bg: string; w: number; h: number; items: CollageItem[] }
  | { type: 'tile'; src: string; size: number; icon: number }
  | { type: 'columns'; cols: { width: number; blocks: Block[] }[]; gap: number; variant?: 'cards' | 'meta' | 'split' }
  | { type: 'stack'; gap: number; blocks: Block[]; align?: 'center' }

export interface CaseStudy {
  slug: string
  /** short label used in navigation and document title */
  name: string
  title: Run[]
  accent: string
  blocks: Block[]
  next: string
}
