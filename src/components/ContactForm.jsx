import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      setStatus("error");
      setStatusMessage("Completa il ReCAPTCHA");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token: recaptchaValue }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setStatusMessage(data.message);
        setName("");
        setEmail("");
        setMessage("");
        setRecaptchaValue(null);
        window.grecaptcha?.reset();
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Errore durante l'invio.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Errore di rete. Riprova più tardi.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Messaggio" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={(value) => setRecaptchaValue(value)} />
      <button type="submit" disabled={!recaptchaValue}>Invia</button>
      {status && <div className={`status-box ${status}`}>{statusMessage}</div>}
    </form>
  );
}








