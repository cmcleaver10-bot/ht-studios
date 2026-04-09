import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-up">
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Ready to Begin?</h2>
              <p className="section-subtitle">
                Whether you have questions or are ready to enroll, we'd love
                to hear from you. Drop us a line or stop by the studio!
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div className="contact-item-content">
                <h4>Studio Location</h4>
                <p>123 Dance Avenue, Suite 200<br />Your City, ST 12345</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <p>(610) 763-1172</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-item-content">
                <h4>Email</h4>
                <p>haleymtaylor33@gmail.com</p>
              </div>
            </div>

            <div className="contact-hours">
              <h4>Studio Hours</h4>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">3:00 PM – 8:30 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">9:00 AM – 4:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper fade-up" style={{ transitionDelay: '0.2s' }}>
            <h3>Send Us a Message</h3>
            <p className="form-subtitle">We'll get back to you within 24 hours.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input type="text" id="contact-name" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input type="email" id="contact-email" placeholder="jane@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input type="tel" id="contact-phone" placeholder="(555) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-age">Child's Age</label>
                  <select id="contact-age" required>
                    <option value="" disabled selected>Select age range</option>
                    <option value="3-5">3–5 years (Tiny Dancers)</option>
                    <option value="6-9">6–9 years (Rising Stars)</option>
                    <option value="10-14">10–14 years (Studio Company)</option>
                    <option value="15-18">15–18 years (Elite Ensemble)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your child's dance experience and interests..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
