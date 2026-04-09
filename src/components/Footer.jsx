import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-ht">HT</span> Studios
            </div>
            <p>
              Nurturing the joy of movement in every child. Dance classes
              for ages 3–18 in a warm, supportive environment.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">🎬</a>
              <a href="#" className="social-link" aria-label="TikTok">🎵</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Programs</a>
              <a href="#competitions" onClick={(e) => handleNavClick(e, 'competitions')}>Competitions</a>
              <a href="#instructors" onClick={(e) => handleNavClick(e, 'instructors')}>Instructors</a>
              <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Programs</h4>
            <div className="footer-links">
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Tiny Dancers (3–5)</a>
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Rising Stars (6–9)</a>
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Studio Company (10–14)</a>
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Elite Ensemble (15–18)</a>
            </div>
          </div>

          <div className="footer-column footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest news on recitals, workshops, and enrollment.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 HT Studios. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
