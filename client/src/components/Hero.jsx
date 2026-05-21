export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-eyebrow">
        <span />
        Admissions Open 2026–27
      </div>
      <h1>
        OSM <em>Junior &<br />Degree</em> College
      </h1>
      <p className="hero-sub">Bandlaguda Campus · Hyderabad</p>
      <p className="hero-tagline">&quot;Education is the movement from Darkness to Light&quot;</p>
      <div className="hero-badges">
        <div className="badge">Regd. by T.S.B.I.E.</div>
        <div className="badge">Affiliated to Osmania University</div>
        <div className="badge">Asad Educational & Welfare Society</div>
        <div className="badge">Separate Classes · Boys & Girls</div>
      </div>
      <div className="hero-actions">
        <a href="#admissions" className="btn-primary">
          Apply for Admission
        </a>
        <a href="#courses" className="btn-secondary">
          Explore Courses →
        </a>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">2</div>
          <div className="stat-label">Campuses</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">10+</div>
          <div className="stat-label">Programs</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">3.6★</div>
          <div className="stat-label">Google Rating</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">JEE/NEET</div>
          <div className="stat-label">Guidance</div>
        </div>
      </div>
    </section>
  )
}
