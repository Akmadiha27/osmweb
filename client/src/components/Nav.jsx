import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_SRC, SOCIETY_LOGO_SRC } from '../config'

export function Nav() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  return (
    <nav>
      <Link to="/" className="nav-logo" onClick={close}>
        <img
          className="nav-logo-img"
          src={LOGO_SRC}
          width={44}
          height={44}
          alt=""
          decoding="async"
        />
        <div className="nav-logo-text">
          <strong>OSM Junior & Degree College</strong>
          <span className="nav-logo-affiliation">Affiliated to Osmania University</span>
        </div>
      </Link>
      <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
        <li>
          <a href="/#about" onClick={close}>
            About
          </a>
        </li>
        <li>
          <a href="/#courses" onClick={close}>
            Courses
          </a>
        </li>
        <li>
          <a href="/#admissions" onClick={close}>
            Admissions
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={close}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <button
          type="button"
          className="nav-toggle"
          id="navToggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <a href="tel:8096143890" className="nav-cta" onClick={close}>
          Enquire Now
        </a>
      </div>

      <div className="nav-society-wrap" aria-hidden="true">
        <img
          className="nav-society-logo"
          src={SOCIETY_LOGO_SRC}
          width={44}
          height={44}
          alt=""
          decoding="async"
        />
      </div>
    </nav>
  )
}
