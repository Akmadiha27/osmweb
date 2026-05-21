export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">Find Us</div>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Bandlaguda Campus</h3>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-item-text">
              <strong>Address</strong>
              <span>
                Beside RTA Office, Rajiv Gandhi Nagar,
                <br />
                Rahmath Nagar Colony, Bandlaguda,
                <br />
                Chandrayangutta, Hyderabad - 500005
              </span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-item-text">
              <strong>Phone</strong>
              <a href="tel:8096143890">8096143890</a>
              <a href="tel:9246283900">9246283900</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div className="contact-item-text">
              <strong>Website</strong>
              <a href="http://osmcollege.edu.in/" target="_blank" rel="noopener noreferrer">
                osmcollege.edu.in
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div className="contact-item-text">
              <strong>Office Hours</strong>
              <span>Monday - Saturday: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🏫</div>
            <div className="contact-item-text">
              <strong>Branch Campus</strong>
              <span>Moghalpura, Hyderabad</span>
            </div>
          </div>
        </div>

        <div>
          <div className="contact-map">
            <iframe
              title="OSM Junior and Degree College Bandlaguda map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7!2d78.465!3d17.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbdeb8b645425%3A0x1b3717ff3e2d8713!2sOSM%20Junior%20%26%20Degree%20College!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="contact-map-note">Bandlaguda Campus - Beside RTA Office</p>

          <div className="contact-map" style={{ marginTop: '16px' }}>
            <iframe
              title="OSM Junior College Moghalpura map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30465.31145991923!2d78.43801117431639!3d17.355843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb981fc3023069%3A0xa501fa1356f51b2e!2sOSM%20Junior%20College!5e0!3m2!1sen!2sin!4v1777818710219!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="contact-map-note">Moghalpura Campus</p>
        </div>
      </div>
    </section>
  )
}

