import './Instructors.css';

const instructors = [
  {
    name: 'Sarah Mitchell',
    specialty: 'Ballet & Contemporary',
    image: '/images/instructor1.png',
    bio: '15+ years of professional dance experience. Trained at Juilliard and performed with American Ballet Theatre.',
  },
  {
    name: 'Marcus Johnson',
    specialty: 'Hip-Hop & Jazz',
    image: '/images/instructor2.png',
    bio: 'Award-winning choreographer with credits in film and television. Passionate about making dance accessible to all.',
  },
  {
    name: 'Elena Rodriguez',
    specialty: 'Contemporary & Lyrical',
    image: '/images/instructor3.png',
    bio: 'Former principal dancer turned educator. Specializes in creative expression and building confidence through movement.',
  },
];

const Instructors = () => {
  return (
    <section className="instructors section-padding" id="instructors">
      <div className="container">
        <div className="instructors-header fade-up">
          <span className="section-label">Meet Our Team</span>
          <h2 className="section-title">World-Class Instructors</h2>
          <p className="section-subtitle">
            Our passionate instructors bring decades of professional experience
            and a genuine love for teaching to every class.
          </p>
        </div>

        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className="instructor-card fade-up"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="instructor-image">
                <img src={instructor.image} alt={instructor.name} />
                <div className="instructor-overlay">
                  <p className="instructor-bio">{instructor.bio}</p>
                </div>
              </div>
              <div className="instructor-info">
                <h3 className="instructor-name">{instructor.name}</h3>
                <p className="instructor-specialty">{instructor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
