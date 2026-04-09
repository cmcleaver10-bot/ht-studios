import { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "HT Studios has completely transformed my daughter's confidence. She walked in shy and now she lights up the stage. The instructors genuinely care about each child's growth.",
    name: 'Amanda Peters',
    role: 'Parent of Rising Stars student',
    initials: 'AP',
    color: 'linear-gradient(135deg, #FF6B6B, #A855F7)',
    stars: 5,
  },
  {
    text: "I've been dancing at HT Studios for 6 years and it's my second home. The teachers push you to be your best while making every class feel like magic. I can't imagine dancing anywhere else!",
    name: 'Maya Thompson',
    role: 'Elite Ensemble dancer, Age 17',
    initials: 'MT',
    color: 'linear-gradient(135deg, #4169E1, #87CEEB)',
    stars: 5,
  },
  {
    text: "As a parent of three kids in the program, HT Studios makes scheduling easy and the results speak for themselves. My youngest started at 3 and now at 8 she performs with such poise.",
    name: 'David Chen',
    role: 'Parent of Tiny Dancers & Rising Stars students',
    initials: 'DC',
    color: 'linear-gradient(135deg, #FF8C00, #FFD700)',
    stars: 5,
  },
  {
    text: "The recitals at HT Studios are absolutely incredible. You can tell the instructors pour their hearts into every choreography. My son went from reluctant to obsessed with dance!",
    name: 'Rachel Kim',
    role: 'Parent of Studio Company student',
    initials: 'RK',
    color: 'linear-gradient(135deg, #9B59B6, #E91E63)',
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="testimonials-header fade-up">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Families Are Saying</h2>
          <p className="section-subtitle">
            Join hundreds of happy families who have made HT Studios
            part of their child's journey.
          </p>
        </div>

        <div className="testimonials-carousel fade-up">
          <div className="testimonial-card" key={current}>
            <div className="testimonial-quote-icon">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-stars">
              {[...Array(t.stars)].map((_, i) => (
                <span key={i} className="testimonial-star">★</span>
              ))}
            </div>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">{t.role}</span>
            </div>
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-arrows">
            <button className="carousel-arrow" onClick={prev} aria-label="Previous testimonial">
              ←
            </button>
            <button className="carousel-arrow" onClick={next} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
