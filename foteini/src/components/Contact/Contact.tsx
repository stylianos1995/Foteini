import React, { useState } from "react";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState("");

  const mentalHealthIssues = [
    { value: "", label: "Select a topic (optional)" },
    { value: "anxiety", label: "Anxiety & Stress" },
    { value: "depression", label: "Depression" },
    { value: "relationships", label: "Relationship Issues" },
    { value: "self-esteem", label: "Self-esteem & Confidence" },
    { value: "trauma", label: "Trauma & PTSD" },
    { value: "grief", label: "Grief & Loss" },
    { value: "addiction", label: "Addiction & Recovery" },
    { value: "eating", label: "Eating Disorders" },
    { value: "ocd", label: "OCD & Compulsive Behaviors" },
    { value: "adhd", label: "ADHD & Focus Issues" },
    { value: "sleep", label: "Sleep Problems" },
    { value: "work", label: "Work-related Stress" },
    { value: "parenting", label: "Parenting Challenges" },
    { value: "other", label: "Other (Please specify in message)" },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
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
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Appointment Date
            <input type="date" name="appointment" required />
          </label>
          <label>
            I would like to discuss
            <select
              name="issue"
              value={selectedIssue}
              onChange={(e) => setSelectedIssue(e.target.value)}
              className="issue-select"
            >
              {mentalHealthIssues.map((issue) => (
                <option key={issue.value} value={issue.value}>
                  {issue.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Additional Information
            <textarea
              name="message"
              rows={3}
              placeholder="Please provide any additional details you'd like to share (optional)"
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
