const CARDS = [
  {
    icon: '👨‍🏫',
    title: 'Experienced Faculty',
    body: 'Dedicated educators with years of expertise in their respective fields, committed to student success and understanding.',
  },
  {
    icon: '🔬',
    title: 'JEE / NEET / EAPCET',
    body: 'Specialised competitive exam guidance integrated into the curriculum for Science students aspiring to top institutions.',
  },
  {
    icon: '🏫',
    title: 'Separate Classes',
    body: 'Dedicated and focused environments for boys and girls, ensuring a comfortable and distraction-free learning experience.',
  },
  {
    icon: '🚌',
    title: 'Transport Facility',
    body: 'Safe and reliable transportation available for girl students, ensuring easy and secure commute to college.',
  },
  {
    icon: '🎓',
    title: 'University Affiliated',
    body: 'Recognised by T.S.B.I.E. and affiliated to the prestigious Osmania University for degree programmes.',
  },
  {
    icon: '🏆',
    title: 'Two Campuses',
    body: 'Conveniently located campuses at Bandlaguda and Moghalpura to serve students across Hyderabad.',
  },
]

export function WhyUs() {
  return (
    <section className="why-us" id="about">
      <div className="section-label">Why Choose Us</div>
      <h2 className="section-title">Excellence in Every Classroom</h2>
      <p className="section-desc">
        A legacy of academic quality under the Asad Educational & Welfare Society, serving students across Hyderabad with
        focused guidance and holistic development.
      </p>
      <div className="why-grid">
        {CARDS.map((c) => (
          <div key={c.title} className="why-card">
            <div className="why-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
