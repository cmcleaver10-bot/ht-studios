import './Programs.css';

const programs = [
  {
    icon: '🩰',
    name: 'Tiny Dancers',
    age: 'Ages 3–5',
    description: 'A magical introduction to dance through creative movement, rhythm games, and imaginative play. Building coordination, musicality, and confidence in our tiniest movers.',
    styles: ['Creative Movement', 'Pre-Ballet', 'Music & Rhythm'],
  },
  {
    icon: '⭐',
    name: 'Rising Stars',
    age: 'Ages 6–9',
    description: 'Building strong foundations in multiple dance disciplines. Students explore technique, creativity, and teamwork while developing their own artistic voice.',
    styles: ['Ballet', 'Jazz', 'Hip-Hop', 'Tap'],
  },
  {
    icon: '🔥',
    name: 'Studio Company',
    age: 'Ages 10–14',
    description: 'Intensive technique training meets artistry. Dancers refine skills, learn choreography, and prepare for performances and competitions.',
    styles: ['Contemporary', 'Ballet', 'Jazz', 'Lyrical'],
  },
  {
    icon: '👑',
    name: 'Elite Ensemble',
    age: 'Ages 15–18',
    description: 'Pre-professional training for dedicated dancers. Advanced technique, performance opportunities, and mentorship to prepare for the next stage of their dance journey.',
    styles: ['Advanced Ballet', 'Contemporary', 'Partnering', 'Improvisation'],
  },
];

const Programs = () => {
  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="programs-header fade-up">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">A Path for Every Dancer</h2>
          <p className="section-subtitle">
            Four thoughtfully designed programs that grow with your child,
            from their first twirl to the grand stage.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className="program-card fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="program-icon">{program.icon}</div>
              <span className="program-age">{program.age}</span>
              <h3 className="program-name">{program.name}</h3>
              <p className="program-description">{program.description}</p>
              <div className="program-styles">
                {program.styles.map((style) => (
                  <span key={style} className="program-style-tag">{style}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
