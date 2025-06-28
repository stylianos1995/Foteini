import React from "react";
import "./Footer.css";

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service">
      <h2>Terms of Service</h2>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using this website, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>
      </section>

      <section>
        <h3>2. Use License</h3>
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
        <h3>3. Services</h3>
        <p>
          Our psychological services are provided by licensed professionals. By
          using our services, you agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>
            Attend scheduled appointments or provide adequate notice for
            cancellations
          </li>
          <li>Follow professional recommendations and treatment plans</li>
          <li>Maintain confidentiality of your account information</li>
          <li>Pay for services as agreed upon</li>
        </ul>
      </section>

      <section>
        <h3>4. Disclaimer</h3>
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
        <h3>5. Limitations</h3>
        <p>
          In no event shall Illuminate or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on Illuminate's website.
        </p>
      </section>

      <section>
        <h3>6. Revisions and Errata</h3>
        <p>
          The materials appearing on Illuminate's website could include
          technical, typographical, or photographic errors. Illuminate does not
          warrant that any of the materials on its website are accurate,
          complete, or current.
        </p>
      </section>

      <section>
        <h3>7. Links</h3>
        <p>
          Illuminate has not reviewed all of the sites linked to its website and
          is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Illuminate of the
          site.
        </p>
      </section>

      <section>
        <h3>8. Modifications</h3>
        <p>
          Illuminate may revise these terms of service at any time without
          notice. By using this website, you agree to be bound by the current
          version of these terms of service.
        </p>
      </section>

      <section>
        <h3>9. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Greece and you irrevocably submit to the exclusive
          jurisdiction of the courts in that location.
        </p>
      </section>

      <section>
        <h3>10. Contact Information</h3>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
        </p>
        <p>Email: info@illuminate.com</p>
        <p>Phone: +30 690 000 0000</p>
        <p>Address: Athens, Greece</p>
      </section>
    </div>
  );
};

export default TermsOfService;
