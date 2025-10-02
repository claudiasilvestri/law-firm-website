import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ color: "var(--blue)" }}>Contatti</h1>
      <p>Per qualsiasi richiesta, compila il form o contattaci via email/telefono:</p>
      <ContactForm />
    </section>
  );
}
