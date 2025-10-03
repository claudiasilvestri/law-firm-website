import React, { useState } from "react";
import "../css/ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmailSyntax = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isDisposableEmail = (email) => {
    const disposableDomains = ["mailinator.com", "tempmail.com", "10minutemail.com", "yopmail.com", "guerrillamail.com"];
    const domain = email.split("@")[1]?.toLowerCase();
    return disposableDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");

    if (honeypot) {
      setStatus("error");
      setStatusMessage("Invio non valido.");
      return;
    }

    if (!validateEmailSyntax(email)) {
      setStatus("error");
      setStatusMessage("Inserisci un indirizzo email valido.");
      return;
    }

    if (isDisposableEmail(email)) {
      setStatus("error");
      setStatusMessage("Non sono ammessi indirizzi email temporanei.");
      return;
    }

    if (message.length > 500) {
      setStatus("error");
      setStatusMessage("Il messaggio non può superare 500 caratteri.");
      return;
    }

    const blockedWords = ["test", "fake", "spam"];
    if (blockedWords.some(word => message.toLowerCase().includes(word))) {
      setStatus("error");
      setStatusMessage("Messaggio contenente parole non consentite.");
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
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Messaggio" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={500} required />
      <div className="message-counter">{message.length}/500</div>

      <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

      <button type="submit" className="btn-cta">Invia</button>

      {status && <div className={`status-box ${status}`}>{statusMessage}</div>}
    </form>
  );
}
