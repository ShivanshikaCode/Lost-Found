import React from 'react';
import '../components/Support.css';

function Support() {
  return (
    <div className="support-container">
      <h2>Need Help? We're Here for You!</h2>

      <section className="support-section">
        <h3>📩 Contact Support</h3>
        <p>If you've lost something or need help with the platform, reach out to us.</p>
        <ul>
          <li>Email: <a href="mailto:support@yourdomain.com">support@yourdomain.com</a></li>
          <li>Phone: +91 9XXXXXXXX0</li>
        </ul>
      </section>

      <section className="support-section">
        <h3>❓ Frequently Asked Questions</h3>
        <details>
          <summary>How do I report a lost item?</summary>
          <p>Go to the "Report" page, fill out the form, and click submit.</p>
        </details>
        <details>
          <summary>How can I contact someone who posted an item?</summary>
          <p>Use the email address provided in the lost item post.</p>
        </details>
        <details>
          <summary>Is my contact information public?</summary>
          <p>Only your email will be shown to help people reach out to you.</p>
        </details>
      </section>

      <section className="support-section">
        <h3>📢 Suggestions & Feedback</h3>
        <p>We'd love to hear your thoughts! Email us anytime.</p>
      </section>
    </div>
  );
}

export default Support;
