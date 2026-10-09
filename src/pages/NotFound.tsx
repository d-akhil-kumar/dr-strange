import { Link } from 'react-router-dom'
import useDocumentTitle from '../components/useDocumentTitle'
import './Shell.css'

export default function NotFound() {
  useDocumentTitle('Page not found')
  return (
    <main id="main" className="not-found container">
      <p className="not-found__code">404</p>
      <h1 className="h h--2">This page wandered off.</h1>
      <p className="text">The link may be broken, or the page may have moved.</p>
      <Link to="/" className="button">
        Back to work
      </Link>
    </main>
  )
}
