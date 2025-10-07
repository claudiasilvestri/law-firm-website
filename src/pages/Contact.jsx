import { useState } from "react";
import "../css/Contact.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-main-title">Contatti</h2>
        <p className="contact-subtitle">
          Per informazioni, consulenze o appuntamenti, puoi contattarmi tramite i recapiti qui sotto
          oppure compilando il form.
        </p>

        <div className="contact-box">
          <div className="contact-icons-vertical">
            <div>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:avvfedericadalessandrolojacono@gmail.com">
                avvfedericadalessandrolojacono@gmail.com
              </a>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+393925068181">+39 392 506 8181</a>
            </div>
            <div>
              <i className="fa-solid fa-envelope-open-text"></i>
              <a href="mailto:dalessandrolojacono.federica@avvocatibari.legalmail.it">
                federica.dalessandro@ordineavvocati.baripec.it
              </a>
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/federica-d-alessandro-lojacono-avvocatocivilista/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-map">
            {!loaded && <div className="map-placeholder">Caricamento mappa...</div>}
            <iframe
              title="Studio Legale Federica D’Alessandro Lojacono"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.123456789!2d16.8723!3d41.1251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347a3e1a1c2b1f1%3A0xabcdef123456789!2sPiazza%20Garibaldi%2049%2C%2070100%20Bari!5e0!3m2!1sit!2sit!4v1696375600000!5m2!1sit!2sit"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className={loaded ? "loaded" : ""}
              onLoad={() => setLoaded(true)}
            ></iframe>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-box">
              <h3>Scrivici un messaggio</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}











