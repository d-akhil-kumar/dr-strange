import { Fragment } from 'react'
import type { Run } from '../content/types'

/** Renders a list of styled runs; `\n` becomes a line break. */
export default function RichText({ runs }: { runs: Run[] }) {
  return (
    <>
      {runs.map((r, i) => {
        if (r.t === '\n') return <br key={i} />
        const lines = r.t.split('\n')
        let node: React.ReactNode = lines.map((l, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {l}
          </Fragment>
        ))
        const style = r.c ? { color: r.c } : undefined
        if (r.u) node = <u>{node}</u>
        if (r.i) node = <em>{node}</em>
        if (r.b) node = <strong>{node}</strong>
        if (r.a) {
          return (
            <a key={i} href={r.a} target="_blank" rel="noreferrer" style={style}>
              {node}
            </a>
          )
        }
        return style ? (
          <span key={i} style={style}>
            {node}
          </span>
        ) : (
          <Fragment key={i}>{node}</Fragment>
        )
      })}
    </>
  )
}
