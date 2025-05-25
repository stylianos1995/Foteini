import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a dedicated psychologist with a passion for helping individuals
            navigate their mental health journey. With extensive experience in
            cognitive-behavioral therapy, I specialize in providing personalized
            care for adults.
          </p>
          <p>
            My approach combines evidence-based practices with a warm,
            understanding environment where clients feel safe to explore their
            thoughts and emotions. I believe in creating a collaborative
            therapeutic relationship that empowers individuals to achieve their
            mental health goals.
          </p>
          <div className="credentials">
            <h3>Credentials</h3>
            <ul>
              <li>MSc in Psychology</li>
              <li>BSc in Psychology</li>
              <li>Certified Mental Health Counselor</li>
              <li>Specialized in Cognitive Behavioral Therapy</li>
            </ul>
          </div>
        </div>
        <div className="profile-image-container">
          {/* Profile image will be added here */}
          <div className="profile-image-placeholder">
            <span>Profile Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
