import React, { useState, useMemo } from "react";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageContext";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
// You need to get these from your EmailJS account:
// 1. Service ID - from https://dashboard.emailjs.com/admin/integration
// 2. Template ID - from https://dashboard.emailjs.com/admin/templates
// 3. Public Key (User ID) - from https://dashboard.emailjs.com/admin/account
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_526dvcl";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_x7cn9fe";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "m5GNsT-rkvkYW25lL";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    issue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Find the selected issue label
      const selectedIssue = mentalHealthIssues.find(
        (issue) => issue.value === formData.issue
      );

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        appointment_date: formData.date,
        appointment_time: formData.time,
        topic: selectedIssue?.label || formData.issue,
        message: formData.message,
        to_email: "dritselifoteini@gmail.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: "success",
        message: t("contact.success") || "Message sent successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        issue: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: t("contact.error") || "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mentalHealthIssues = useMemo(() => [
    { value: "", label: t("contact.selectTopic") },
    { value: "anxiety-stress", label: t("contact.issues.anxiety") },
    { value: "self-confidence", label: t("contact.issues.confidence") },
    { value: "anger", label: t("contact.issues.anger") },
    { value: "loneliness", label: t("contact.issues.loneliness") },
    {
      value: "relationships",
      label: t("contact.issues.relationships"),
    },
    { value: "exhaustion", label: t("contact.issues.exhaustion") },
    { value: "communication", label: t("contact.issues.communication") },
    {
      value: "life-changes",
      label: t("contact.issues.lifeChanges"),
    },
    { value: "negative-thoughts", label: t("contact.issues.negativeThoughts") },
    { value: "self-esteem", label: t("contact.issues.selfEsteem") },
    { value: "work-life", label: t("contact.issues.workLife") },
    { value: "sleep", label: t("contact.issues.sleep") },
    { value: "personal-growth", label: t("contact.issues.personalGrowth") },
    { value: "fear", label: t("contact.issues.fear") },
    { value: "other", label: t("contact.issues.other") },
  ], [t]);

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  // Function to check if date is a weekday (Monday-Friday)
  const isWeekday = (dateString: string): boolean => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (selectedDate && !isWeekday(selectedDate)) {
      setSubmitStatus({
        type: "error",
        message: t("contact.weekendError") || "Please select a weekday (Monday-Friday).",
      });
      // Clear the date if weekend is selected
      setFormData((prev) => ({ ...prev, date: "" }));
      return;
    }
    setSubmitStatus({ type: null, message: "" });
    handleChange(e);
  };

  return (
    <section className="contact" id="contact">
      <h2>{t("contact.title")}</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {t("contact.name")}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t("contact.email")}
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
              {t("contact.date")}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </label>
            <label>
              {t("contact.time")}
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">{t("contact.selectTime")}</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            {t("contact.topic")}
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
            {t("contact.additional")}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder={t("contact.placeholder")}
              required
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.send")}
          </button>

          {submitStatus.type && (
            <div className={`submit-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
