import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Peproys</h1>
      </header>
      <main className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing the best service to our customers. Our mission is to deliver high-quality products and service that exceed expectations.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
