import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./PolicyPages.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="policy-page">
      <button className="back-button" onClick={() => navigate("/")}>
        <ArrowBackIcon />
        Back to Home
      </button>
      <main className="policy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Appointment scheduling information</li>
            <li>Communication preferences</li>
            <li>Any information you choose to share during consultations</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Schedule and manage your appointments</li>
            <li>Send you appointment reminders and updates</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our services and website</li>
            <li>Maintain professional records as required by law</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or share your personal information with third parties
            except:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>When required by professional ethics or law</li>
          </ul>
        </section>

        <section>
          <h2>4. Confidentiality and Privacy Protection</h2>
          <p>
            <strong>Your privacy is our priority.</strong> All sessions, whether 
            conducted in-person or online, remain absolutely confidential. This 
            confidentiality is fundamental to the therapeutic relationship and is 
            protected by professional ethics and legal requirements.
          </p>
          <p>
            I maintain records of sessions (e.g., contact information, dates, 
            treatment goals), which are stored securely. You have the right to 
            access, correct, or delete your data at any time.
          </p>
          <p>
            <strong>Sessions are not recorded without your explicit consent.</strong> 
            Confidentiality may only be breached in cases of immediate danger to 
            yourself or others, or when required by legal obligation.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
            This includes:
          </p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure storage systems for all session records</li>
            <li>Regular security assessments</li>
            <li>Professional training on data protection and confidentiality</li>
            <li>Limited access to records on a need-to-know basis only</li>
          </ul>
        </section>

        <section>
          <h2>6. Session Records</h2>
          <p>
            I maintain professional records for therapy sessions, which may include:
          </p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Session dates and attendance</li>
            <li>Treatment goals and progress notes</li>
            <li>Relevant clinical information necessary for providing effective care</li>
          </ul>
          <p>
            All records are stored securely and are accessible only to authorized 
            personnel. Records are retained in accordance with professional 
            standards and legal requirements.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal information and session records</li>
            <li><strong>Correct</strong> inaccurate information</li>
            <li><strong>Request deletion</strong> of your information (subject to legal retention requirements)</li>
            <li><strong>Opt-out</strong> of non-essential communications</li>
            <li><strong>Withdraw consent</strong> at any time</li>
            <li><strong>Request a copy</strong> of your records</li>
          </ul>
          <p>
            To exercise any of these rights, please contact me directly using 
            the contact information provided below.
          </p>
        </section>

        <section>
          <h2>8. Limitations of Confidentiality</h2>
          <p>
            While confidentiality is strictly maintained, there are limited 
            circumstances where disclosure may be required:
          </p>
          <ul>
            <li>When there is an <strong>immediate risk of harm</strong> to yourself or others</li>
            <li>When required by <strong>legal obligation</strong> or court order</li>
            <li>In cases involving <strong>child abuse or neglect</strong></li>
            <li>When disclosure is necessary for <strong>professional supervision or consultation</strong> (with all identifying information removed)</li>
          </ul>
          <p>
            In such cases, I will discuss the situation with you whenever 
            possible and disclose only the minimum information necessary.
          </p>
        </section>

        <section>
          <h2>9. Cookies and Tracking</h2>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul>
            <li>Improve website functionality</li>
            <li>Analyze website usage</li>
            <li>Remember your preferences</li>
            <li>Provide a better user experience</li>
          </ul>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any significant changes by posting the new policy on this page and
            updating the "Last updated" date. Continued use of our services after
            such changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, your rights, or 
            how we handle your data, please contact me at:
          </p>
          <p><strong>Email:</strong> dritselifoteini@gmail.com</p>
          <p><strong>Phone:</strong> +31 627904800 (NL)</p>
          <p><strong>Location:</strong> Maastricht, The Netherlands</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
