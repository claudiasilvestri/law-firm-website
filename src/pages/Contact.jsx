import "../css/ContactForm.css";
import ContactForm from "./ContactForm";

export default function Contatti() {
  return (
    <section className="contact-section" style={{ padding: "2rem" }}>
      <h2 style={{ color: "var(--blue)", marginBottom: "1rem" }}>Contatti</h2>
      <p>Ci trovi qui:</p>

      <div className="contact-layout">
        <div className="contact-map">
          <iframe
            title="Studio Legale Claudia Rossi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.123456789!2d16.8723!3d41.1251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347a3e1a1c2b1f1%3A0xabcdef123456789!2sPiazza%20Garibaldi%2049%2C%2070100%20Bari!5e0!3m2!1sit!2sit!4v1696375600000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-info">
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:info@studiolegale.com">info@studiolegale.com</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>{" "}
              <a href="tel:+390801234567">+39 080 123 4567</a>
            </p>
          </div>

          <h3 style={{ marginBottom: "1rem", color: "var(--blue)" }}>Scrivici un messaggio</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}




