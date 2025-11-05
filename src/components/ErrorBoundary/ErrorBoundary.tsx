import React, { Component, ErrorInfo, ReactNode } from "react";
import "./ErrorBoundary.css";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Simple translations for Error Boundary (since it might error before LanguageContext loads)
const errorMessages = {
  en: {
    title: "Oops! Something went wrong",
    message: "We're sorry, but something unexpected happened. Please try refreshing the page.",
    details: "Error Details (Development Only)",
    home: "Go to Home Page",
    reload: "Reload Page",
  },
  el: {
    title: "Ωχ! Κάτι πήγε στραβά",
    message: "Λυπούμαστε, αλλά κάτι απρόσμενο συνέβη. Παρακαλώ δοκιμάστε να ανανεώσετε τη σελίδα.",
    details: "Λεπτομέρειες Σφάλματος (Μόνο για Ανάπτυξη)",
    home: "Πηγαίνετε στην Αρχική Σελίδα",
    reload: "Ανανέωση Σελίδας",
  },
};

const getLanguage = (): "en" | "el" => {
  const saved = localStorage.getItem("language");
  return saved === "en" ? "en" : "el";
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    this.setState({
      error,
      errorInfo,
    });

    // Here you could also log to an error reporting service
    // e.g., Sentry, LogRocket, etc.
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      const lang = getLanguage();
      const messages = errorMessages[lang];

      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h1>{messages.title}</h1>
            <p>{messages.message}</p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="error-details">
                <summary>{messages.details}</summary>
                <pre className="error-message">
                  {this.state.error.toString()}
                  {this.state.errorInfo && (
                    <>
                      {"\n\n"}
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </pre>
              </details>
            )}
            <div className="error-actions">
              <button onClick={this.handleReload} className="error-button">
                {messages.home}
              </button>
              <button
                onClick={() => window.location.reload()}
                className="error-button secondary"
              >
                {messages.reload}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

