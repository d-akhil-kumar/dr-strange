import { NavLink, Outlet, Link } from 'react-router-dom'
import './PortfolioLayout.css'

const tabs = [
  { to: '/', label: 'Work', end: true },
  { to: '/artwork', label: 'Artwork' },
  { to: '/resume', label: 'Resume' },
  { to: '/about', label: 'About Me' },
]

/** Name, introduction and tab bar shared by the home-level pages. */
export default function PortfolioLayout() {
  return (
    <div className="portfolio container">
      <header className="portfolio__header">
        <Link to="/" className="portfolio__name">
          ABHILASH
        </Link>
      </header>

      <section className="portfolio__intro narrow" aria-label="Introduction">
        <p className="portfolio__headline">
          Hi I’m Abhilash! I untangle enterprise complexity to give admins their weekends back.
        </p>
        <p className="portfolio__current">
          Currently leading UX design for Nutanix Flow Networking, Storage, Prism Central,{' '}
          <br />
          and Move @{' '}
          <a href="https://www.nutanix.com/" target="_blank" rel="noreferrer">
            Nutanix
          </a>
        </p>
      </section>

      <div className="portfolio__body">
        <nav className="tabs" aria-label="Portfolio sections">
          {tabs.map(t => (
            <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => `tabs__link${isActive ? ' is-active' : ''}`}>
              {t.label}
            </NavLink>
          ))}
        </nav>
        <main id="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
