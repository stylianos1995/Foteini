import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import LanguageAttribute from "./components/LanguageAttribute/LanguageAttribute";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

interface LocationState {
  scrollTo?: string;
}

const ScrollToSection: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, state]);

  return null;
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Initialize lang attribute based on saved preference or default to Greek
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "el";
    document.documentElement.lang = savedLanguage;
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <ErrorBoundary>
        <Intro onComplete={handleIntroComplete} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <LanguageAttribute />
        <Router>
          <div className="App">
            <ScrollToSection />
            <ErrorBoundary>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Navbar />
                      <main>
                        <Hero />
                        <About />
                        <Services />
                        <Contact />
                      </main>
                      <Footer />
                    </>
                  }
                />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              </Routes>
            </ErrorBoundary>
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
