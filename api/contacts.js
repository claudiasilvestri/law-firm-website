import fetch from "node-fetch";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { name, email, message, token } = req.body;
  if (!token) return res.status(400).json({ status: "error", message: "Captcha mancante" });

  const secret = process.env.RECAPTCHA_SECRET || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
  const verification = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, { method: "POST" });
  const data = await verification.json();

  if (!data.success) return res.status(400).json({ status: "error", message: "Captcha non valido" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ status: "error", message: "Email non valida" });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "Nuovo messaggio dal form",
      text: message
    });
    res.json({ status: "success", message: "Messaggio inviato correttamente!" });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Errore nell'invio dell'email" });
  }
}

