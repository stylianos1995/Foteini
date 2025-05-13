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
      title: "Child & Adolescent Counseling",
      description:
        "Specialized support for young people dealing with emotional and behavioral challenges.",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description:
        "Evidence-based approach to help identify and change negative thought patterns.",
    },
    {
      title: "Neuropsychological Assessment",
      description:
        "Comprehensive evaluation of cognitive functioning and brain-behavior relationships.",
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
