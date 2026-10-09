import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import PortfolioLayout from './components/PortfolioLayout'
import Work from './pages/Work'
import Artwork from './pages/Artwork'
import Resume from './pages/Resume'
import About from './pages/About'
import CaseStudyPage from './pages/CaseStudyPage'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<Work />} />
          <Route path="artwork" element={<Artwork />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path=":slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
