import { useEffect, useState } from 'react'
import { API } from '../config'

const FALLBACK =
  '🎓 Admissions Open for 2026–27 | Intermediate: MPC, BiPC, MEC, CEC, AEC | Degree: B.Com, BBA, BCA, B.Sc | JEE / NEET / EAPCET Guidance Available | Transport Facility for Girls | Call: 8096143890 / 9246283900 | '

export function NoticeStrip() {
  const [text, setText] = useState(FALLBACK)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(API.NOTICES)
        if (!res.ok) return
        const data = await res.json()
        const first = data?.items?.[0]?.text
        if (first && !cancelled) setText(first)
      } catch {
        /* keep fallback */
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const doubled = `${text}\u00A0|\u00A0${text}\u00A0|\u00A0`

  return (
    <div className="notice-strip">
      <div className="notice-label">Notice</div>
      <div className="notice-text-wrap">
        <div className="notice-text">{doubled}</div>
      </div>
    </div>
  )
}
