import ProjectCard from '../components/ProjectCard'
import { projects } from '../content/projects'
import useDocumentTitle from '../components/useDocumentTitle'

export default function Work() {
  useDocumentTitle()
  return (
    <div className="work-grid">
      {projects.map(p => (
        <ProjectCard key={p.slug} card={p} />
      ))}
    </div>
  )
}
