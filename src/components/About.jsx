import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper fade-up">
            <div className="about-image">
              <img src="/images/about.png" alt="Dance instructor teaching young children in the studio" />
            </div>
            <div className="about-image-accent" />
          </div>

          <div className="about-content fade-up" style={{ transitionDelay: '0.2s' }}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Building Confidence One Step at a Time</h2>
            <p className="about-text">
              Founded with a passion for nurturing young talent, HT Studios has been
              a cornerstone of dance education in our community. We believe every child
              deserves the chance to express themselves through the art of movement.
            </p>
            <p className="about-text">
              Our carefully designed programs cater to dancers of all levels — from
              curious 3-year-olds taking their first steps to ambitious teens preparing
              for the stage. With world-class instructors and a warm, supportive environment,
              we help every student discover their unique rhythm.
            </p>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">4</div>
                <div className="stat-label">Years Teaching</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Dancers</div>
              </div>
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Dance Styles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
