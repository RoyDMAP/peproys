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
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, our company has grown from a small startup to a leading provider in our industry. Our journey has been driven by innovation and a passion for excellence.
          </p>
        </section>
        <section className="about-section">
          <h2>Meet the Team</h2>
          <p>
            Our team is made up of experienced mechanics who are dedicated to achieving the best customer service. We believe in providing quality parts to our customers.
          </p>
        </section>
      </main>
    
    </div>
  );
};

export default About;
