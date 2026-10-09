import type { CaseStudy, CollageItem, Run } from './types'
import moveInPlace from './moveInPlace'
import accessibleMove from './accessibleMove'
import flowDeployment from './flowDeployment'

export const caseStudies: Record<string, CaseStudy> = {
  [moveInPlace.slug]: moveInPlace,
  [accessibleMove.slug]: accessibleMove,
  [flowDeployment.slug]: flowDeployment,
}

/** A card on the Work grid. Collage coordinates are % of the artwork area below the title. */
export interface ProjectCard {
  slug: string
  title: Run[]
  bg: string
  /** card size in design pixels (1036 × 559 for the wide card, 518 × 500 for halves) */
  w: number
  h: number
  /** height reserved for the title at desktop size, in design pixels */
  titleHeight: number
  /** title padding in design pixels */
  pad: number
  art: CollageItem[]
  wide?: boolean
}

const pct = (v: number, of: number) => Math.round((v / of) * 10000) / 100

/** Converts absolute design coordinates (relative to the card) into collage percentages. */
function place(card: { w: number; h: number; titleHeight: number }, items: (Omit<CollageItem, 'x' | 'y' | 'w' | 'h'> & { box: [number, number, number, number] })[]): CollageItem[] {
  const artH = card.h - card.titleHeight
  return items.map(({ box: [x, y, w, h], ...rest }) => ({
    ...rest,
    x: pct(x, card.w),
    y: pct(y - card.titleHeight, artH),
    w: pct(w, card.w),
    h: pct(h, artH),
  }))
}

const SOFT = 'rgba(0, 0, 0, 0.1)'
const POP = 'rgba(0, 0, 0, 0.25)'

const wideCard = { w: 1036, h: 559, titleHeight: 109 }
const halfCard = { w: 518, h: 500, titleHeight: 90 }

export const projects: ProjectCard[] = [
  {
    slug: moveInPlace.slug,
    wide: true,
    bg: '#a0d5b1',
    pad: 30,
    ...wideCard,
    title: [
      { t: 'Designing for ' },
      { t: 'Zero-Touch Trust', c: '#0e4e25' },
      { t: ': Converting Live Infrastructure\n' },
      { t: 'Without the Panic', c: '#0e4e25' },
    ],
    art: place(wideCard, [
      { src: '/assets/img/c4a24dcf05.webp', alt: 'Cluster conversion home screen', box: [291, 256, 541, 338] },
      { src: '/assets/img/bcdd16c03b.webp', alt: 'Stage table with selected VMs', box: [49, 129, 327, 174], shadow: `4px 4px 4px ${SOFT}` },
      { src: '/assets/img/bfc953ffc7.webp', alt: "“What's this?” explainer dialog", box: [762, 146, 224, 279], shadow: `-4px 4px 10px ${SOFT}` },
      { src: '/assets/img/070332f2ad.webp', alt: 'Move stage popover', box: [176, 399, 130, 165] },
    ]),
  },
  {
    slug: flowDeployment.slug,
    bg: '#ffde85',
    pad: 20,
    ...halfCard,
    title: [
      { t: 'From ' },
      { t: 'Powerful', c: '#7a5200' },
      { t: ' to ' },
      { t: 'Practical', c: '#7a5200' },
      { t: ': Redesigning Nutanix Flow’s Deployment Experience' },
    ],
    art: place(halfCard, [
      { src: '/assets/img/flow-card-a.webp', alt: 'Capabilities and scale, customised', box: [60, 120, 210, 440], radius: 4, shadow: `4px 4px 20px ${POP}` },
      { src: '/assets/img/flow-card-b.webp', alt: 'Capabilities and scale, standard defaults', box: [250, 175, 220, 312], radius: 4, shadow: `-4px 4px 20px ${POP}` },
    ]),
  },
  {
    slug: accessibleMove.slug,
    bg: '#faabab',
    pad: 20,
    ...halfCard,
    title: [
      { t: 'Safeguarding ' },
      { t: 'High-Stakes Migrations', c: '#bb213b' },
      { t: '\nThrough ' },
      { t: 'Inclusive Design', c: '#bb213b' },
    ],
    art: place(halfCard, [
      { src: '/assets/img/c335368e50.webp', alt: 'Migration plans table', box: [-624, 148, 1041, 650] },
      { src: '/assets/img/7930f05093.webp', alt: 'Plan status legend', box: [179, 103, 120, 320], radius: 4, shadow: `3px 4px 20px ${POP}` },
      { src: '/assets/img/35481d956e.webp', alt: 'VM status legend', box: [338, 164, 155, 320], radius: 4, shadow: `4px 4px 20px ${POP}` },
    ]),
  },
]
