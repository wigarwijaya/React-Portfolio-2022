import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmail', 'template_o19di04', form.current, 'LUWQu7RlcoweVvJ2j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <a href="mailto:wigarwijaya@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <a href="whatsapp://send?abid=+6282246564606" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

          {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required/>
              <input type="email" name="email" placeholder="Your Email" required/>
              <textarea spellCheck="false" name="message" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
      </div>
    </section>
  );
};

export default Contact;
