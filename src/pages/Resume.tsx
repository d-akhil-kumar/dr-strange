import { Link } from 'react-router-dom'
import useDocumentTitle from '../components/useDocumentTitle'
import { projects, caseStudies } from '../content/projects'
import './Shell.css'

const skills = [
  'Enterprise UX',
  'UX Strategy',
  'Information Architecture',
  'User Research',
  'Usability Testing',
  'Accessibility (WCAG AA)',
  'Design Systems',
  'Prototyping',
  'Figma',
  'FigJam',
]

export default function Resume() {
  useDocumentTitle('Resume')
  return (
    <div className="shell">
      <p className="shell__notice">Draft resume, full details and PDF coming soon</p>

      <div className="resume">
        <h2 className="resume__label">Experience</h2>
        <div>
          <div className="resume__entry">
            <p className="h h--5">Lead UX Designer · Nutanix</p>
            <p className="resume__meta">Present</p>
            <p className="text">
              Leading UX design for Nutanix Flow Networking, Storage, Prism Central and Move, turning
              high-stakes infrastructure operations into guided, trustworthy workflows.
            </p>
          </div>
          <div className="resume__entry" aria-hidden="true">
            <span className="placeholder-line" style={{ width: '42%' }} />
            <span className="placeholder-line" style={{ width: '18%' }} />
            <span className="placeholder-line" style={{ width: '88%' }} />
            <span className="placeholder-line" style={{ width: '64%' }} />
          </div>
        </div>

        <h2 className="resume__label">Selected work</h2>
        <div className="resume__links">
          {projects.map(p => (
            <Link key={p.slug} to={`/${p.slug}`}>
              {caseStudies[p.slug].name} →
            </Link>
          ))}
        </div>

        <h2 className="resume__label">Skills</h2>
        <div className="chips">
          {skills.map(s => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <h2 className="resume__label">Education</h2>
        <div className="resume__entry" aria-label="Coming soon">
          <span className="placeholder-line" style={{ width: '50%' }} />
          <span className="placeholder-line" style={{ width: '22%' }} />
        </div>
      </div>

      <div className="resume__actions">
        <a className="button" aria-disabled="true" href="#">
          Download PDF (coming soon)
        </a>
      </div>
    </div>
  )
}
