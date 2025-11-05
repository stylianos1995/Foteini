import React, { useState, useEffect, useMemo } from "react";
import "./Services.css";
import { useLanguage } from "../../contexts/LanguageContext";
import closedBook from "../../assets/book3.png";
import openBook from "../../assets/book4.png";

const Services: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileCards, setShowMobileCards] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = useMemo(
    () => [
      {
        title: t("services.student.title"),
        description: t("services.student.desc"),
      },
      {
        title: t("services.transitions.title"),
        description: t("services.transitions.desc"),
      },
      {
        title: t("services.selfesteem.title"),
        description: t("services.selfesteem.desc"),
      },
      {
        title: t("services.grief.title"),
        description: t("services.grief.desc"),
      },
    ],
    [t]
  );

  const handleBookOpen = () => {
    if (isMobile) {
      // Mobile: Show cards instead of opening book
      setShowMobileCards(true);
    } else {
      // Desktop: Open book normally
      setIsTransitioning(true);
      setTimeout(() => {
        setIsBookOpen(true);
        setIsTransitioning(false);
      }, 50);
    }
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

  const handlePageClick = (side: "left" | "right") => {
    if (side === "left") {
      handlePrevPage();
    } else {
      handleNextPage();
    }
  };

  // Mobile: Card navigation (with wrap-around)
  const handleNextCard = () => {
    if (currentServiceIndex < services.length - 1) {
      setCurrentServiceIndex(currentServiceIndex + 1);
    } else {
      // Wrap to first service
      setCurrentServiceIndex(0);
    }
  };

  const handlePrevCard = () => {
    if (currentServiceIndex > 0) {
      setCurrentServiceIndex(currentServiceIndex - 1);
    } else {
      // Wrap to last service
      setCurrentServiceIndex(services.length - 1);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentServiceIndex(index);
  };

  // Swipe handlers for mobile cards
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextCard();
    }
    if (isRightSwipe) {
      handlePrevCard();
    }
  };

  const totalPages = Math.ceil(services.length / 2);

  return (
    <section id="services" className="services">
      <div className="services-container">
        {isMobile && showMobileCards ? (
          /* Mobile: Service Cards */
          <div className="mobile-cards-container">
            <div className="mobile-cards-wrapper">
              {/* Invisible left clickable area */}
              <div
                className="invisible-nav-area nav-left"
                onClick={handlePrevCard}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
              {/* Current card */}
              <div className="mobile-service-card active">
                <h3 className="service-card-title">
                  {services[currentServiceIndex].title}
                </h3>
                <p className="service-card-description">
                  {services[currentServiceIndex].description}
                </p>
              </div>
              {/* Invisible right clickable area */}
              <div
                className="invisible-nav-area nav-right"
                onClick={handleNextCard}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            </div>
            {/* Card indicators */}
            <div className="mobile-card-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`card-indicator-dot ${
                    index === currentServiceIndex ? "active" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Book Layout | Mobile: Closed Book */
          <div className="book-container">
            {!isBookOpen ? (
              <>
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
                    <h3>{t("services.discover")}</h3>
                    <p>{t("services.click")}</p>
                  </div>
                </div>
              </>
            ) : (
              /* Desktop: Open Book */
              <div className={`book-open ${!isTransitioning ? "active" : ""}`}>
                <img src={openBook} alt="Open Book" className="book-image" />
                <div className="book-pages">
                  <div
                    className="page left-page"
                    onClick={() => handlePageClick("left")}
                  >
                    <div className="page-content">
                      <h3>{services[currentPage].title}</h3>
                      <p>{services[currentPage].description}</p>
                    </div>
                  </div>
                  <div
                    className="page right-page"
                    onClick={() => handlePageClick("right")}
                  >
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
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
