import { LOGO_SRC } from '../config'

function scrollToSection(e, id) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img className="footer-logo" src={LOGO_SRC} width={64} height={64} alt="OSM" decoding="async" />
          <div className="logo-sub">Junior & Degree College</div>
          <p>
            Providing quality education under the Asad Educational & Welfare Society. Regd. by T.S.B.I.E., Affiliated to
            Osmania University.
          </p>
        </div>
        <div className="footer-links">
          <h4>Intermediate</h4>
          <ul>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                MPC
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                MPC + EAPCET
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                Bi.P.C.
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                Bi.P.C. + NEET
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                MEC
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                CEC
              </a>
            </li>
            <li>
              <a href="#courses-intermediate" onClick={(e) => scrollToSection(e, 'courses-intermediate')}>
                AEC
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Degree</h4>
          <ul>
            <li>
              <a href="#courses-degree" onClick={(e) => scrollToSection(e, 'courses-degree')}>
                B.Com General
              </a>
            </li>
            <li>
              <a href="#courses-degree" onClick={(e) => scrollToSection(e, 'courses-degree')}>
                B.Com Computers
              </a>
            </li>
            <li>
              <a href="#courses-degree" onClick={(e) => scrollToSection(e, 'courses-degree')}>
                BBA
              </a>
              <span className="footer-permission-note"> (subject to permission)</span>
            </li>
            <li>
              <a href="#courses-degree" onClick={(e) => scrollToSection(e, 'courses-degree')}>
                BCA
              </a>
              <span className="footer-permission-note"> (subject to permission)</span>
            </li>
            <li>
              <a href="#courses-degree" onClick={(e) => scrollToSection(e, 'courses-degree')}>
                B.Sc
              </a>
              <span className="footer-permission-note"> (subject to permission)</span>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:8096143890">8096143890</a>
            </li>
            <li>
              <a href="tel:9246283900">9246283900</a>
            </li>
            <li>
              <a href="http://osmcollege.edu.in/" target="_blank" rel="noopener noreferrer">
                osmcollege.edu.in
              </a>
            </li>
            <li>
              <a href="#contact">Bandlaguda Campus</a>
            </li>
            <li>
              <a href="#contact">Moghalpura Campus</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 OSM Junior & Degree College. All rights reserved.</p>
        <p className="footer-affiliation">Regd. T.S.B.I.E. · Affiliated Osmania University · Asad Educational & Welfare Society</p>
      </div>
    </footer>
  )
}
