import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./PolicyPages.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TermsOfServicePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="policy-page">
      <button className="back-button" onClick={() => navigate("/")}>
        <ArrowBackIcon />
        Back to Home
      </button>
      <main className="policy-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on
            Illuminate's website for personal, non-commercial transitory viewing
            only.
          </p>
          <p>
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              the website
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Services</h2>
          <p>
            Our psychological services are provided by licensed professionals.
            By using our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>
              Attend scheduled appointments or provide adequate notice for
              cancellations (see Cancellation Policy below)
            </li>
            <li>Follow professional recommendations and treatment plans</li>
            <li>Maintain confidentiality of your account information</li>
            <li>Pay for services as agreed upon</li>
          </ul>
        </section>

        <section>
          <h2>4. Cancellation Policy</h2>
          <p>
            <strong>Appointment cancellations must be made at least 24 hours in advance.</strong>
          </p>
          <p>
            If you need to cancel or reschedule your appointment, please notify 
            me at least 24 hours before your scheduled session time. This allows 
            me to offer the time slot to other clients who may need it.
          </p>
          <p>
            <strong>Late Cancellations and No-Shows:</strong> If you cancel with 
            less than 24 hours notice or fail to attend your scheduled appointment 
            without prior notification, the session fee will be charged. This policy 
            applies to both in-person and online sessions.
          </p>
          <p>
            Exceptions may be made in cases of genuine emergencies or unforeseen 
            circumstances, which will be evaluated on a case-by-case basis.
          </p>
        </section>

        <section>
          <h2>5. Confidentiality</h2>
          <p>
            All sessions and communications are treated with the strictest 
            confidentiality. Information shared during sessions will not be 
            disclosed to third parties except in the following circumstances:
          </p>
          <ul>
            <li>When you provide explicit written consent</li>
            <li>When there is an immediate risk of harm to yourself or others</li>
            <li>When required by law or court order</li>
            <li>In cases of suspected child abuse or neglect</li>
          </ul>
          <p>
            Session recordings are never made without your explicit written consent. 
            Any recordings will be stored securely and deleted according to agreed 
            retention periods.
          </p>
        </section>

        <section>
          <h2>6. Disclaimer</h2>
          <p>
            The materials on Illuminate's website are provided on an 'as is'
            basis. Illuminate makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation:
          </p>
          <ul>
            <li>Implied warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement of intellectual property</li>
            <li>Other violation of rights</li>
          </ul>
        </section>

        <section>
          <h2>7. Limitations</h2>
          <p>
            In no event shall Illuminate or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Illuminate's website.
          </p>
        </section>

        <section>
          <h2>8. Revisions and Errata</h2>
          <p>
            The materials appearing on Illuminate's website could include
            technical, typographical, or photographic errors. Illuminate does
            not warrant that any of the materials on its website are accurate,
            complete, or current.
          </p>
        </section>

        <section>
          <h2>9. Links</h2>
          <p>
            Illuminate has not reviewed all of the sites linked to its website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Illuminate of
            the site.
          </p>
        </section>

        <section>
          <h2>10. Modifications</h2>
          <p>
            Illuminate may revise these terms of service at any time without
            notice. By using this website, you agree to be bound by the current
            version of these terms of service.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Greece and you irrevocably submit to the
            exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, the cancellation 
            policy, or any other aspect of our services, please contact me at:
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

export default TermsOfServicePage;
