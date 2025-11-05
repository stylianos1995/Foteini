import React from "react";
import "./Hero.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Foteini Dritseli</h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <blockquote>
          {t("hero.quote")}
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
