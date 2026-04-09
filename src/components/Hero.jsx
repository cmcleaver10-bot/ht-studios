import './Hero.css';

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="Young dancers leaping in a bright studio" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-shapes">
        <div className="hero-shape" />
        <div className="hero-shape" />
        <div className="hero-shape" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="sparkle">✨</span>
          Now Enrolling for Fall 2026
        </div>
        <h1 className="hero-title">
          Where Young<br />
          Dancers <span className="highlight">Shine</span>
        </h1>
        <p className="hero-description">
          At HT Studios, we nurture the joy of movement in every child.
          From first plié to center stage — dance classes for ages 3–18
          in ballet, jazz, hip-hop, contemporary and more.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn-primary" onClick={(e) => handleScroll(e, 'contact')}>
            Start Dancing Today
          </a>
          <a href="#programs" className="hero-btn-secondary" onClick={(e) => handleScroll(e, 'programs')}>
            Explore Programs →
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
