import useDocumentTitle from '../components/useDocumentTitle'
import './Shell.css'

// Principles are drawn from the reflections in the published case studies.
const principles = [
  {
    title: 'Psychological safety is a feature',
    body: 'In enterprise infrastructure, intentional friction, smart defaults and radical transparency are what make users brave enough to click “Convert”.',
  },
  {
    title: 'Accessibility is a catalyst',
    body: 'Designing for edge cases like colour blindness and screen readers drives clarity for everyone using the product.',
  },
  {
    title: 'Recommend, don’t gate',
    body: 'A good default beats a blank canvas. Give people a confident starting point and an honest way back.',
  },
]

export default function About() {
  useDocumentTitle('About Me')
  return (
    <div className="shell">
      <p className="shell__notice">More about me coming soon</p>

      <div className="about">
        <div className="about__portrait" role="img" aria-label="Portrait placeholder">
          <span aria-hidden="true">A</span>
          <small>Photo coming soon</small>
        </div>

        <div className="about__body">
          <h2 className="h h--2">Hi, I’m Abhilash.</h2>
          <p className="text">
            I’m a Lead UX Designer at Nutanix, where I untangle enterprise complexity to give admins their weekends
            back. I currently lead design for Nutanix Flow Networking, Storage, Prism Central and Move.
          </p>
          <p className="text">
            I’m always happy to talk about complex systems, finite state machines, progressive disclosure, inclusive
            design systems, or how to design for enterprise trust.
          </p>

          <h3 className="h h--4">What I believe</h3>
          <div className="principles">
            {principles.map(p => (
              <div key={p.title} className="principle">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>

          <h3 className="h h--4">Let’s talk</h3>
          <p className="text" style={{ color: 'var(--muted)' }}>
            Contact details coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}
