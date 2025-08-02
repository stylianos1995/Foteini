import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    issue: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const mentalHealthIssues = [
    { value: "", label: "Select a topic" },
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

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <div className="appointment-time">
            <label>
              Preferred Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Preferred Time
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            What would you like to discuss?
            <select
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="issue-select"
              required
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
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Please provide any additional details you'd like to share"
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
