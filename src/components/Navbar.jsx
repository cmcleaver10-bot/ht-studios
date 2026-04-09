import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Instructors', id: 'instructors' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-ht">HT</span>
          <span className="logo-studios">Studios</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>
            Enroll Now
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
