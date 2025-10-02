import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmailSyntax = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");

    if (!validateEmailSyntax(email)) {
      setStatus("error");
      setStatusMessage("Email non valida");
      return;
    }

    if (message.length > 500) {
      setStatus("error");
      setStatusMessage("Il messaggio non può superare 500 caratteri");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setStatusMessage("Messaggio inviato correttamente!");
      setName("");
      setEmail("");
      setMessage("");
    }, 500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea
        placeholder="Messaggio"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={500}
        required
      />
      <div style={{ marginBottom: "1rem", fontSize: "0.8rem", textAlign: "right" }}>
        {message.length}/500
      </div>
      <button type="submit">Invia</button>
      {status && <div className={`status-box ${status}`}>{statusMessage}</div>}
    </form>
  );
}















