import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Us</h1>
      <div className="contact-section">
        <div className="contact-left">
          <div style={{ margin: "20px 0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55810.321999449494!2d77.04231072587055!3d28.5892776326383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bb2417f53af%3A0x12b4a9b7a059f109!2sADITI%20STUDY%20LIBRARY!5e0!3m2!1sen!2sin!4v1721116091336!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
      </div>
      <div className="contact-right">
        <p>
          We are here to help! Whether you have questions, need more
          information, or want to schedule a visit, feel free to reach out to
          us.
        </p>
        <h3>Address</h3>
        <p>
          Prajapati PG K1/14, Street No. 36, Som Bazar Road, Rajapuri Near Aditi
          Study Library, Opposite Dwarka Sec 5 Delhi - 110059
        </p>
        <h3>Phone Numbers:</h3>
        <p>
          <i class="ri-phone-line"></i>8700788861
        </p>
        <p>
          <i class="ri-phone-line"></i>9267927726
        </p>
        <p>
          Our team is available to assist you with any inquiries and ensure you
          have all the information you need. We look forward to hearing from
          you!
        </p>
      </div>
    </div>
    </div>

  );
};

export default Contact;
