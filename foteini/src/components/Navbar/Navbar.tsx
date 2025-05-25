import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-fot.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <button className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection("about")}>
            About
          </a>
          <a href="#services" onClick={() => scrollToSection("services")}>
            Services
          </a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
