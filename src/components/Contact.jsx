import React from "react";
import Email from "/src/components/svgs/Email";
import Linkedin from "/src/components/svgs/Linkedin";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <h2>You can reach me at these places</h2>
      <div className="contact-container">
        <div className="contact-box">
          <a
            href="https://www.linkedin.com/in/connorbaba/"
            aria-label="linkedin"
            target="_blank"
          >
            <Linkedin />
          </a>
          <p>Linkedin</p>
        </div>
        <div className="contact-box">
          <a href="mailto:connorjbaba@gmail.com" aria-label="email">
            <Email />
          </a>
          <p>E-mail</p>
        </div>
      </div>
    </section>
  );
}
