import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up (but be mindful of your neighbors)!</h1>
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Featuring TWO whole albums!!!</h2>
        <p className="point-description">No arbitrary limits. No distractions. Just Two Albums.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms so you can drown out the world wherever you go.</p>
      </div>
    </section>
  </section>
);

export default Landing;
