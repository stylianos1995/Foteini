import React, { useState } from "react";
import "./Intro.css";
import logo from "../../assets/logo-fot.png";

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // Wait for animation to complete
  };

  return (
    <div className={`intro-container ${isAnimating ? "fade-out" : ""}`}>
      <div
        className={`intro-content ${isHovered ? "hover" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="intro-logo" />
          <div className="glow-effect"></div>
        </div>
        <h1 className="intro-title">Illuminate</h1>
        <p className="intro-subtitle">Become the light</p>
      </div>
    </div>
  );
};

export default Intro;
