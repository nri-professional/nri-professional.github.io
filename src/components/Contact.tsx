// React
import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { ICONS } from '../utils/icons';

// Styles
import '../assets/styles/Contact.scss';

/**
 * CONTACT DATA
 * 
 * Customize these fields to match your contact information.
 */
const contactData = {
  email: "nicholasricketts59@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/nicholasricketts/"
};

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1>Contact</h1>
        <p className="contact-description">
          Feel free to reach out to me via{' '}
          <a 
            href={contactData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
          >
            <FontAwesomeIcon icon={ICONS.linkedin} />
            <span>LinkedIn message</span>
          </a>
          {' '}or{' '}
          <a 
            href={`mailto:${contactData.email}?subject=Portfolio Contact`}
            className="contact-link email-link"
          >
            <FontAwesomeIcon icon={ICONS.email} />
            <span>email</span>
          </a>
          . I'd love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default Contact;

