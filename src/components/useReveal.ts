import { useEffect } from 'react'

/**
 * Fades `[data-reveal]` elements in as they enter the viewport.
 * Re-scans whenever `key` changes (e.g. on route change).
 */
export default function useReveal(key: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [key])
}
