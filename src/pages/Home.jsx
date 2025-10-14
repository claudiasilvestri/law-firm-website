import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <h1>Avvocato Civilista a Bari</h1>
      <p>
        Sono <strong>Federica D’Alessandro Lojacono</strong>, con oltre dieci anni di esperienza
        nel <strong>diritto civile</strong>, <strong>responsabilità medica</strong>,
        <strong>diritto societario</strong> e <strong>recupero crediti</strong>.
        Offro consulenza legale personalizzata e assistenza professionale, con strategie su misura
        per ogni cliente.
      </p>
      <p>
        Il mio approccio combina competenza tecnica e attenzione alla persona,
        garantendo soluzioni efficaci e orientate alla tutela dei diritti di chi si rivolge al mio studio.
      </p>
      <Link to="/contact" className="button-accent">
        Prenota Consulenza
      </Link>
    </section>
  );
}


