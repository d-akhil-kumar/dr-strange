import { useEffect } from 'react'

const SITE = 'Abhilash — UX Design Portfolio'

export default function useDocumentTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · Abhilash` : SITE
  }, [page])
}
