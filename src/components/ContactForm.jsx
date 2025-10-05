import React, { useState } from "react";
import "../css/ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");

    if (honeypot) {
      setStatus("error");
      setStatusMessage("Invio non valido.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqaybweo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("✅ Messaggio inviato con successo!");
        setName("");
        setEmail("");
        setMessage("");
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
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Messaggio"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={500}
        required
      />
      <div className="message-counter">{message.length}/500</div>

      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />

      <button type="submit" className="btn-cta">Invia</button>

      {status && <div className={`status-box ${status}`}>{statusMessage}</div>}
    </form>
  );
}


























