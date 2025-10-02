import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message, token } = req.body;

  if (!token) return res.status(400).json({ status: "error", message: "Completa il ReCAPTCHA" });

  const secret = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
  const verification = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );
  const data = await verification.json();

  if (!data.success) return res.status(400).json({ status: "error", message: "Captcha non valido" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ status: "error", message: "Email non valida" });

  res.json({ status: "success", message: "Messaggio inviato correttamente!" });
});

app.listen(3001, () => console.log("Server in ascolto su http://localhost:3001"));
