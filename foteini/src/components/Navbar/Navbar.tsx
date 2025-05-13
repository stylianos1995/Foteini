import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-fot.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <button className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
