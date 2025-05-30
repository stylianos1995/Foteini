import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-fot.png";

interface LocationState {
  scrollTo?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: targetId } as LocationState });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "active" : ""}`}></div>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            About
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
            Services
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
