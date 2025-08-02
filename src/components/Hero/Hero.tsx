import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Foteini Dritseli</h1>
        <blockquote>
          Mental health is not a destination, but a process. It's about how you
          drive, not where you're going.
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
