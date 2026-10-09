import { useEffect, useRef, useState } from 'react'

/**
 * Muted, looping screen recording that only downloads when it nears the
 * viewport and pauses while off-screen.
 */
export default function LazyVideo({ src, w, h, label }: { src: string; w: number; h: number; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (!('IntersectionObserver' in window)) {
      setLoad(true)
      return
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true)
          if (!reduce) v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { rootMargin: '300px 0px' },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className="media"
      width={w}
      height={h}
      src={load ? src : undefined}
      autoPlay={load}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      style={{ aspectRatio: `${w} / ${h}` }}
    />
  )
}
