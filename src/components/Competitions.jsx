import './Competitions.css';

const competitions = [
  {
    name: 'Starbound National Talent Competition',
    location: 'Philadelphia, PA',
    badge: 'Regional & National',
    description: 'One of the most prestigious dance competitions in the tri-state area. Our dancers compete in solo, duo, and group categories across all styles.',
    details: ['Solo', 'Duo/Trio', 'Group', 'All Styles'],
  },
  {
    name: 'Showstopper Dance Competition',
    location: 'Atlantic City, NJ',
    badge: 'Regional',
    description: 'A crowd-favorite regional competition where our Rising Stars and Studio Company teams showcase their technique and stage presence.',
    details: ['Jazz', 'Contemporary', 'Hip-Hop', 'Group'],
  },
  {
    name: 'NUVO Dance Convention',
    location: 'Various Locations, PA',
    badge: 'Convention & Competition',
    description: 'A weekend-long event combining world-class workshops with a high-energy competition. A favorite for learning and performing.',
    details: ['Workshops', 'Competition', 'All Ages'],
  },
  {
    name: 'Hall of Fame Dance Challenge',
    location: 'King of Prussia, PA',
    badge: 'Regional',
    description: 'A supportive competition environment perfect for our younger dancers to gain stage experience while the advanced teams push for top honors.',
    details: ['Ballet', 'Lyrical', 'Tap', 'Musical Theater'],
  },
  {
    name: 'Turn It Up Dance Challenge',
    location: 'Wilmington, DE',
    badge: 'Regional',
    description: 'Known for amazing judges and a fun atmosphere. Our dancers consistently bring home top scores and special awards from this competition.',
    details: ['Solo', 'Group', 'Contemporary', 'Jazz'],
  },
  {
    name: 'Adrenaline Dance Convention',
    location: 'Cherry Hill, NJ',
    badge: 'Convention & Competition',
    description: 'An energetic convention that pushes dancers out of their comfort zone with intensive masterclasses followed by a spirited competition.',
    details: ['Masterclasses', 'Competition', 'All Levels'],
  },
];

const Competitions = () => {
  return (
    <section className="competitions section-padding" id="competitions">
      <div className="container">
        <div className="competitions-header fade-up">
          <span className="section-label">Competition Season</span>
          <h2 className="section-title">Where We Compete</h2>
          <p className="section-subtitle">
            Our dancers take the stage at top regional and national competitions,
            building confidence and earning recognition for their hard work.
          </p>
        </div>

        <div className="competitions-grid">
          {competitions.map((comp, index) => (
            <div
              key={comp.name}
              className="competition-card fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="competition-badge">🏆 {comp.badge}</span>
              <h3 className="competition-name">{comp.name}</h3>
              <div className="competition-location">
                📍 {comp.location}
              </div>
              <p className="competition-description">{comp.description}</p>
              <div className="competition-details">
                {comp.details.map((detail) => (
                  <span key={detail} className="competition-detail-tag">{detail}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="competitions-achievements fade-up">
          <div className="achievements-text">
            <h3>Our Competition Track Record</h3>
            <p>
              Season after season, HT Studios dancers bring home top honors. 
              We're proud of every dancer who steps on that stage — because the 
              real win is the growth they show along the way.
            </p>
          </div>
          <div className="achievements-stats">
            <div className="achievement-stat">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Awards Won</div>
            </div>
            <div className="achievement-stat">
              <div className="achievement-number">12</div>
              <div className="achievement-label">Competitions / Year</div>
            </div>
            <div className="achievement-stat">
              <div className="achievement-number">6</div>
              <div className="achievement-label">Platinum Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
