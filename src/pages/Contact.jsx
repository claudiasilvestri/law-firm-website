import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/Contact.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="contact-section" aria-label="Pagina Contatti">
      <Helmet>
        <title>Contatti | Studio Legale Federica D’Alessandro Lojacono</title>
        <meta
          name="description"
          content="Per informazioni o consulenze legali contatta Federica D’Alessandro Lojacono tramite email, telefono o form online."
        />
      </Helmet>

      <div className="contact-container">
        <h2 className="contact-main-title">Contatti</h2>
        <p className="contact-subtitle">
          Per informazioni, consulenze o appuntamenti, puoi contattarmi tramite i recapiti qui sotto
          oppure compilando il form.
        </p>

        <div className="contact-box" aria-label="Recapiti e contatti">
          <div className="contact-icons-vertical">
            <div>
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <a
                href="mailto:avvfedericadalessandrolojacono@gmail.com"
                aria-label="Invia una email a Federica D’Alessandro Lojacono"
              >
                avvfedericadalessandrolojacono@gmail.com
              </a>
            </div>
            <div>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <a
                href="tel:+393925068181"
                aria-label="Chiama Federica D’Alessandro Lojacono"
              >
                +39 392 506 8181
              </a>
            </div>
            <div>
              <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
              <a
                href="mailto:dalessandrolojacono.federica@avvocatibari.legalmail.it"
                aria-label="Invia una PEC a Federica D’Alessandro Lojacono"
              >
                dalessandrolojacono.federica@avvocatibari.legalmail.it
              </a>
            </div>
            <div>
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              <a
                href="https://www.linkedin.com/in/federica-d-alessandro-lojacono-avvocatocivilista/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita il profilo LinkedIn di Federica D’Alessandro Lojacono"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-map">
            <iframe
              title="Studio Legale Federica D’Alessandro Lojacono"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.123456789!2d16.8723!3d41.1251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347a3e1a1c2b1f1%3A0xabcdef123456789!2sPiazza%20Garibaldi%2049%2C%2070100%20Bari!5e0!3m2!1sit!2sit!4v1696375600000!5m2!1sit!2sit"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-box" aria-label="Modulo di contatto">
              <h3>Scrivi un messaggio</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
