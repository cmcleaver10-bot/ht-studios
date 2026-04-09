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

        <div className="programs-teams-header fade-up">
          <h2 className="section-title">Competition Teams</h2>
          <p className="section-subtitle">
            For dancers looking for more intensive training and performance opportunities.
            Audition based teams for serious young artists.
          </p>
        </div>

        <div className="programs-grid">
          <div className="program-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="program-icon">🎗️</div>
            <span className="program-age">Novice Level</span>
            <h3 className="program-name">Prep Team</h3>
            <p className="program-description">A bridge between recreational classes and the competitive world. Focus on foundation and performance basics.</p>
            <div className="program-styles">
              <span className="program-style-tag">Technical Drill</span>
              <span className="program-style-tag">Intro to Comp</span>
            </div>
          </div>
          <div className="program-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="program-icon">💎</div>
            <span className="program-age">Intermediate Level</span>
            <h3 className="program-name">Select Team</h3>
            <p className="program-description">Dancers committed to multiple regional competitions. Rigorous training in various disciplines with team-building emphasis.</p>
            <div className="program-styles">
              <span className="program-style-tag">Multiple Styles</span>
              <span className="program-style-tag">Regional Circuit</span>
            </div>
          </div>
          <div className="program-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="program-icon">🎭</div>
            <span className="program-age">Advanced Level</span>
            <h3 className="program-name">Elite Team</h3>
            <p className="program-description">Our highest level of commitment. National-level training for pre-professional dancers focused on mastery and artistry.</p>
            <div className="program-styles">
              <span className="program-style-tag">Pre-Professional</span>
              <span className="program-style-tag">National Circuit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
