import { Link, useParams } from 'react-router-dom'
import Blocks from '../components/Blocks'
import useDocumentTitle from '../components/useDocumentTitle'
import useReveal from '../components/useReveal'
import { caseStudies } from '../content/projects'
import NotFound from './NotFound'
import './CaseStudyPage.css'

const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path
      d={dir === 'left' ? 'M10 3 5 8l5 5' : 'm6 3 5 5-5 5'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function CaseStudyPage() {
  const { slug = '' } = useParams()
  const study = caseStudies[slug]
  useDocumentTitle(study?.name ?? 'Not found')
  useReveal(slug)

  if (!study) return <NotFound />
  const next = caseStudies[study.next]

  return (
    <div className="case">
      <nav className="case__nav" aria-label="Case study navigation">
        <Link to="/" className="case__back">
          <Chevron dir="left" />
          Go Back
        </Link>
        {next && (
          <Link to={`/${next.slug}`} className="case__next" title={next.name}>
            Next Case Study
            <Chevron dir="right" />
          </Link>
        )}
      </nav>
      <main id="main" className="case__main container">
        <article>
          <Blocks blocks={study.blocks} />
        </article>
        <footer className="case__footer">
          <Link to="/" className="case__back">
            <Chevron dir="left" />
            All work
          </Link>
          {next && (
            <Link to={`/${next.slug}`} className="case__next">
              Next: {next.name}
              <Chevron dir="right" />
            </Link>
          )}
        </footer>
      </main>
    </div>
  )
}
