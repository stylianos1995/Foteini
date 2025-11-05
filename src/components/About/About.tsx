import React, { useState, useMemo } from "react";
import "./About.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import img2 from "../../assets/foteini.png";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = useMemo(
    () => [
      {
        title: t("about.academic.title"),
        content: t("about.academic.content"),
      },
      {
        title: t("about.experience.title"),
        content: t("about.experience.content"),
      },
      {
        title: t("about.training.title"),
        content: t("about.training.content"),
      },
      {
        title: t("about.work.title"),
        content: (
          <>
            <p>{t("about.work.content")}</p>
            <ul className="work-approach">
              <li>{t("about.work.online")}</li>
              <li>{t("about.work.fees")}</li>
              <li>{t("about.work.free")}</li>
            </ul>
          </>
        ),
      },
    ],
    [t]
  );

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="about" className="about">
      <div
        ref={ref}
        className={`about-container ${isIntersecting ? "fade-in" : ""}`}
      >
        {/* About Intro Section - Photo and Text Side by Side */}
        <div className="about-intro">
          <div className="about-image">
            <img src={img2} alt="Foteini Dritseli" />
          </div>
          <div className="about-content">
            <h2>{t("about.title")}</h2>
            <p>{t("about.intro")}</p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="questions-section">
          <h2 className="questions-title">{t("about.questions.title")}</h2>
          <div className="questions-container">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`question-item ${
                  openQuestion === index ? "open" : ""
                }`}
              >
                <button
                  className="question-header"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openQuestion === index}
                >
                  <h3>{question.title}</h3>
                  <span className="question-icon">
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </button>
                <div className="question-content">
                  {typeof question.content === "string" ? (
                    <p>{question.content}</p>
                  ) : (
                    question.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
