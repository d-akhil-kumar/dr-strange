import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectCard as Card } from '../content/projects'
import Collage from './Collage'
import RichText from './RichText'
import './ProjectCard.css'

export default function ProjectCard({ card }: { card: Card }) {
  const style = {
    background: card.bg,
    '--pad': `${card.pad}px`,
    '--title-h': `${card.titleHeight}px`,
  } as CSSProperties
  return (
    <Link to={`/${card.slug}`} className={`project-card${card.wide ? ' project-card--wide' : ''}`} style={style}>
      <h2 className="project-card__title">
        <RichText runs={card.title} />
      </h2>
      <Collage className="project-card__art" items={card.art} w={card.w} h={card.h - card.titleHeight} />
      <span className="visually-hidden">Read case study</span>
    </Link>
  )
}
