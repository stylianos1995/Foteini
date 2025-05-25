import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState("");

  const mentalHealthIssues = [
    { value: "", label: "Select a topic (optional)" },
    { value: "anxiety-stress", label: "Anxiety and Stress" },
    { value: "self-confidence", label: "Insecurity and Self-confidence" },
    { value: "anger", label: "Anger Management" },
    { value: "loneliness", label: "Feelings of Loneliness or Isolation" },
    {
      value: "relationships",
      label: "Relationship Issues (Friends, Family, Romantic)",
    },
    { value: "exhaustion", label: "Feelings of Exhaustion and Burnout" },
    { value: "communication", label: "Communication Problems" },
    {
      value: "life-changes",
      label: "Managing Life Changes (e.g., New Job, Moving)",
    },
    { value: "negative-thoughts", label: "Dealing with Negative Thoughts" },
    { value: "self-esteem", label: "Building Self-esteem" },
    { value: "work-life", label: "Work-Life Balance" },
    { value: "sleep", label: "Sleep Problems or Low Energy" },
    { value: "personal-growth", label: "Finding Meaning and Personal Growth" },
    { value: "fear", label: "Managing Fear and Indecision" },
    { value: "other", label: "Other (Please specify in message)" },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
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
