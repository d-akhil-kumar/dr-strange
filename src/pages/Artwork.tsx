import useDocumentTitle from '../components/useDocumentTitle'
import './Shell.css'

// Placeholder pieces until the artwork gallery is ready.
const pieces = [
  { title: 'Sketchbook', note: 'Coming soon', bg: 'var(--green)' },
  { title: 'Illustrations', note: 'Coming soon', bg: 'var(--yellow)' },
  { title: 'Iconography', note: 'Coming soon', bg: 'var(--pink)' },
  { title: 'Explorations', note: 'Coming soon', bg: '#e9caff' },
  { title: 'Typography', note: 'Coming soon', bg: '#b0e1ff' },
  { title: 'Studies', note: 'Coming soon', bg: '#d5dae0' },
]

export default function Artwork() {
  useDocumentTitle('Artwork')
  return (
    <div className="shell">
      <p className="shell__notice">Artwork gallery is being curated, check back soon</p>
      <div className="art-grid">
        {pieces.map(p => (
          <div key={p.title} className="art-tile" style={{ background: p.bg }}>
            <span className="art-tile__shape" aria-hidden="true" />
            <p className="art-tile__label">
              {p.title}
              <small>{p.note}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
