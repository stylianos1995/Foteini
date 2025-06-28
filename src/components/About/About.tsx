import React from "react";
import "./About.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import img2 from "../../assets/foteini.png";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <section id="about" className="about">
      <div
        ref={ref}
        className={`about-container ${isIntersecting ? "fade-in" : ""}`}
      >
        <div className="about-image">
          <img src={img2} alt="Foteini Dritseli" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a licensed psychologist with a passion for helping individuals
            navigate their mental health journey. With years of experience in
            cognitive behavioral therapy and relationship counseling, I provide
            a safe and supportive environment for my clients to explore their
            thoughts and emotions.
          </p>
          <p>
            My approach combines evidence-based techniques with a warm,
            empathetic style, ensuring that each client receives personalized
            care tailored to their unique needs.
          </p>
          <div className="credentials">
            <h3>Professional Credentials</h3>
            <ul>
              <li>Licensed Psychologist</li>
              <li>Specialized in Cognitive Behavioral Therapy</li>
              <li>Certified Relationship Counselor</li>
              <li>Member of the Greek Psychological Association</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
