import React from "react";
import "./Footer.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h2>Privacy Policy</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h3>1. Information We Collect</h3>
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
        <h3>2. How We Use Your Information</h3>
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
        <h3>3. Information Sharing</h3>
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
        <h3>4. Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, or disclosure. This
          includes:
        </p>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Secure storage systems</li>
          <li>Regular security assessments</li>
          <li>Staff training on data protection</li>
        </ul>
      </section>

      <section>
        <h3>5. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of communications</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section>
        <h3>6. Cookies and Tracking</h3>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Improve website functionality</li>
          <li>Analyze website usage</li>
          <li>Remember your preferences</li>
          <li>Provide a better user experience</li>
        </ul>
      </section>

      <section>
        <h3>7. Changes to This Policy</h3>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the "Last updated" date.
        </p>
      </section>

      <section>
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>Email: info@illuminate.com</p>
        <p>Phone: +30 690 000 0000</p>
        <p>Address: Athens, Greece</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
