import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Peproys Automotive</h1>
        <img className="peproys" src="/images/peproys.png" alt="peproys" />
      </header>
      <main className="home-content">
        <section className="home-section">
          <h2>Friendly service for your automotive needs</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;