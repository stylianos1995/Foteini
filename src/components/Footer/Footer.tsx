import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>{t("footer.getInTouch")}</h3>
          <div className="contact-details">
            <p>
              <span>📧</span>
              <a href="mailto:dritselifoteini@gmail.com">dritselifoteini@gmail.com</a>
            </p>
            <p>
              <span>📞</span>
              <a href="tel:+31627904800">+31 627904800 (NL)</a>
            </p>
            <p>
              <span>📍</span>
              {t("footer.location")}
            </p>
            <p>
              <span>⏰</span>
              {t("footer.available")}
            </p>
          </div>
        </div>

        <div className="social-links">
          <h4>{t("footer.connect")}</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/foteini-dritseli-649858375/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/fcteini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="legal-links">
          <Link to="/privacy-policy">{t("footer.privacy")}</Link>
          <Link to="/terms-of-service">{t("footer.terms")}</Link>
        </div>
        <p>&copy; {currentYear} Foteini Dritseli. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
