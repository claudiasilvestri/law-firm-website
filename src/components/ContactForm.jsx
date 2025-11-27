import React, { useState } from "react";
import "../css/Contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");

    if (formData.honeypot) {
      setStatus("error");
      setStatusMessage("Invio non valido.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqaybweo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("✅ Messaggio inviato con successo!");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setStatusMessage("❌ Errore durante l'invio. Riprova più tardi.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("🌐 Errore di rete. Controlla la connessione.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="sr-only">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message" className="sr-only">Messaggio</label>
      <textarea
        id="message"
        name="message"
        placeholder="Messaggio"
        value={formData.message}
        onChange={handleChange}
        maxLength={500}
        required
      />
      <div className="message-counter">{formData.message.length}/500</div>

      <input
        name="honeypot"
        type="text"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <button type="submit" className="btn-cta">
        Invia
      </button>

      {status && (
        <div className={`status-box ${status}`} role="alert">
          {statusMessage}
        </div>
      )}
    </form>
  );
}