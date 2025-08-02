import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="contact-details">
            <p>
              <span>📧</span>
              <a href="mailto:fotdrt@gmail.com">fotdrt@gmail.com</a>
            </p>
            <p>
              <span>📞</span>
              <a href="tel:+306977628660">(+30) 6977628660</a>
            </p>
            <p>
              <span>📍</span>
              Thessaloniki, Greece
            </p>
            <p>
              <span>⏰</span>
              Available for appointments Monday to Friday, 9:00 - 18:00
            </p>
          </div>
        </div>

        <div className="social-links">
          <h4>Connect with Me</h4>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com/your-profile"
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
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
        <p>&copy; {currentYear} Foteini Dritseli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
