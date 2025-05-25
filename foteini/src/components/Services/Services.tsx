import React from "react";
import "./Services.css";

const Services: React.FC = () => {
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

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
