import React, { useState, useEffect } from "react";
import "./Services.css";
import closedBook from "../../assets/book1.png";
import openBook from "../../assets/book2.png";

const Services: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      title: "Individual Therapy",
      description:
        "Personalized one-on-one sessions focusing on your specific needs and goals.",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description:
        "Evidence-based approach to help identify and change negative thought patterns.",
    },
    {
      title: "Relationship Counseling",
      description:
        "Support for individuals and couples navigating relationship challenges.",
    },
    {
      title: "Stress Management",
      description:
        "Techniques and strategies to help you cope with daily stressors and improve your well-being.",
    },
  ];

  const handleBookOpen = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsBookOpen(true);
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextPage = () => {
    if (currentPage < services.length - 2) {
      setCurrentPage(currentPage + 2);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsBookOpen(false);
        setCurrentPage(0);
        setIsTransitioning(false);
      }, 50);
    }
  };

  const totalPages = Math.ceil(services.length / 2);

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="book-container">
          {!isBookOpen ? (
            <>
              <h2>My Services</h2>
              <div
                className={`book-closed ${!isTransitioning ? "active" : ""}`}
                onClick={handleBookOpen}
              >
                <img
                  src={closedBook}
                  alt="Closed Book"
                  className="book-image"
                />
                <div className="book-overlay">
                  <h3>Discover Your Path</h3>
                  <p>Click to explore my services</p>
                </div>
              </div>
            </>
          ) : (
            <div className={`book-open ${!isTransitioning ? "active" : ""}`}>
              <img src={openBook} alt="Open Book" className="book-image" />
              <div className="book-content">
                <div className="book-pages">
                  <div className="page left-page">
                    <div className="page-content">
                      <h3>{services[currentPage].title}</h3>
                      <p>{services[currentPage].description}</p>
                    </div>
                  </div>
                  <div className="page right-page">
                    <div className="page-content">
                      {currentPage + 1 < services.length && (
                        <>
                          <h3>{services[currentPage + 1].title}</h3>
                          <p>{services[currentPage + 1].description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="page-number">
                  {Math.floor(currentPage / 2) + 1} / {totalPages}
                </div>
                <div className="book-controls">
                  <button className="page-button prev" onClick={handlePrevPage}>
                    ←
                  </button>
                  <button
                    className="page-button next"
                    onClick={handleNextPage}
                    disabled={currentPage >= services.length - 2}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
