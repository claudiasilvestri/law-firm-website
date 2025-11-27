import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/Contact.css";
import ContactForm from "../components/ContactForm";

const contactDetails = [
  {
    icon: "fa-solid fa-envelope",
    label: "Invia una email a Federica D’Alessandro Lojacono",
    href: "mailto:avvfedericadalessandrolojacono@gmail.com",
    text: "avvfedericadalessandrolojacono@gmail.com"
  },
  {
    icon: "fa-solid fa-phone",
    label: "Chiama Federica D’Alessandro Lojacono",
    href: "tel:+393925068181",
    text: "+39 392 506 8181"
  },
  {
    icon: "fa-solid fa-envelope-open-text",
    label: "Invia una PEC a Federica D’Alessandro Lojacono",
    href: "mailto:dalessandrolojacono.federica@avvocatibari.legalmail.it",
    text: "dalessandrolojacono.federica@avvocatibari.legalmail.it"
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "Visita il profilo LinkedIn di Federica D’Alessandro Lojacono",
    href: "https://www.linkedin.com/in/federica-d-alessandro-lojacono-avvocatocivilista/",
    text: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer"
  }
];

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
            {contactDetails.map(({ icon, label, href, text, target, rel }) => (
              <div key={href}>
                <i className={icon} aria-hidden="true"></i>
                <a href={href} aria-label={label} target={target} rel={rel}>
                  {text}
                </a>
              </div>
            ))}
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

          <div className="form-box" aria-label="Modulo di contatto">
            <h3>Scrivi un messaggio</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}