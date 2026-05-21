import { useState } from 'react'
import { API } from '../config'

export function Admissions() {
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      course_interest: String(fd.get('course_interest') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    }

    setBusy(true)
    setStatus('')
    try {
      const res = await fetch(API.ENQUIRIES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus(data.message || 'Thank you. We will contact you soon.')
        form.reset()
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('Could not reach the server. Check your connection.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="admissions" id="admissions">
      <div className="section-label">Admissions 2026–27</div>
      <h2 className="section-title">Begin Your Journey Here</h2>
      <p className="section-desc">
        Join OSM Junior & Degree College for the academic year 2026–27. Seats are limited — secure yours today.
      </p>

      <div className="admission-steps">
        <div className="step">
          <div className="step-num">01</div>
          <h4>Enquire</h4>
          <p>Call us or visit the campus to learn about programmes, eligibility and fee structure.</p>
        </div>
        <div className="step">
          <div className="step-num">02</div>
          <h4>Apply</h4>
          <p>Fill out the admission form with required documents — marks sheets, TC, Aadhaar, and photos.</p>
        </div>
        <div className="step">
          <div className="step-num">03</div>
          <h4>Counselling</h4>
          <p>Attend a brief counselling session to choose the right stream based on your goals and interests.</p>
        </div>
        <div className="step">
          <div className="step-num">04</div>
          <h4>Confirm Seat</h4>
          <p>Pay the admission fee to confirm your seat and get your college ID and timetable.</p>
        </div>
      </div>

      <div className="admission-cta">
        <a href="tel:8096143890" className="btn-primary">
          📞 Call 8096143890
        </a>
        <a href="tel:9246283900" className="btn-secondary">
          📞 9246283900
        </a>
        <div className="admission-note">
          Beside RTA Office, Bandlaguda
          <br />
          Another branch at Moghalpura
        </div>
      </div>

      <div className="enquiry-wrap">
        <h3>Online enquiry</h3>
        <p className="sub">Leave your details and we will call you back about admissions, courses, or campus visits.</p>
        <form className="enquiry-form" id="enquiryForm" noValidate onSubmit={onSubmit}>
          <div className="form-row">
            <label htmlFor="eq-name">Full name</label>
            <input id="eq-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" />
          </div>
          <div className="form-row">
            <label htmlFor="eq-email">Email</label>
            <input
              id="eq-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-row">
            <label htmlFor="eq-phone">Phone</label>
            <input id="eq-phone" name="phone" type="tel" autoComplete="tel" required maxLength={32} placeholder="10-digit mobile number" />
          </div>
          <div className="form-row">
            <label htmlFor="eq-course">Course interest</label>
            <select id="eq-course" name="course_interest" defaultValue="">
              <option value="">Select a programme (optional)</option>
              <optgroup label="Intermediate">
                <option value="M.P.C.">M.P.C.</option>
                <option value="M.P.C. + EAMCET">M.P.C. + EAMCET</option>
                <option value="Bi.P.C.">Bi.P.C.</option>
                <option value="Bi.P.C. + NEET">Bi.P.C. + NEET</option>
                <option value="M.E.C.">M.E.C.</option>
                <option value="C.E.C.">C.E.C.</option>
              </optgroup>
              <optgroup label="Degree">
                <option value="B.Com General">B.Com – General</option>
                <option value="B.Com Computer Applications">B.Com – Computer Applications</option>
                <option value="B.B.A.">B.B.A. (subject to permission)</option>
                <option value="B.C.A.">B.C.A. (subject to permission)</option>
                <option value="B.Sc.">B.Sc. (subject to permission)</option>
              </optgroup>
              <option value="General enquiry">General enquiry</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="eq-message">Message</label>
            <textarea id="eq-message" name="message" maxLength={2000} placeholder="Questions, preferred campus, or academic year…" />
          </div>
          <div className="form-actions">
            <button type="submit" id="enquirySubmit" disabled={busy}>
              {busy ? 'Sending…' : 'Submit enquiry'}
            </button>
            <span className="form-status" id="enquiryStatus" role="status" aria-live="polite">
              {status}
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}
