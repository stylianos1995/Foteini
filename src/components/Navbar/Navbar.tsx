import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-fot.png";
import greekFlag from "../../assets/Flag_of_Greece.svg";
import britishFlag from "../../assets/Flag_of_the_United_Kingdom.svg";
import { useLanguage } from "../../contexts/LanguageContext";

interface LocationState {
  scrollTo?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

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
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setIsMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "el" ? "en" : "el");
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <button
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            {t("nav.home")}
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            {t("nav.about")}
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
            {t("nav.services")}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            {t("nav.contact")}
          </a>
        </div>
        
        <div className="language-toggle">
          <button
            className="lang-btn"
            onClick={handleLanguageToggle}
            aria-label={language === "el" ? "Switch to English" : "Switch to Greek"}
            title={language === "el" ? "Switch to English" : "Switch to Greek"}
          >
            <img 
              src={language === "el" ? greekFlag : britishFlag} 
              alt={language === "el" ? "Greek flag" : "British flag"}
              className="flag-icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
