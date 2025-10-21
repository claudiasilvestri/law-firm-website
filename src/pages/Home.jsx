import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/Home.css";

export default function Home() {
  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    hero.classList.add("fade-in");
  }, []);

  return (
    <section className="home-section">
      <section className="hero-section">
        <h2>💼 Consulenza legale chiara, efficace e su misura</h2>
        <p>
          ✍🏻 Sono <strong>Federica D’Alessandro Lojacono</strong>, <strong>avvocato civilista a Bari</strong>. 
          Da oltre dieci anni affianco persone, professionisti e imprese nella gestione delle questioni legali, 
          offrendo <strong>ascolto</strong>, <strong>chiarezza</strong> e <strong>trasparenza</strong>.
        </p>
        <p>
          Credo in un approccio fondato sul <strong>dialogo diretto</strong> e sulla costruzione di 
          <strong> strategie personalizzate</strong>, perché ogni situazione richiede una <strong>soluzione concreta e sostenibile</strong>.
        </p>
        <p>
          Scegliere di affidarsi a me significa poter contare su un <strong>supporto legale costante</strong>, 
          orientato alla <strong>prevenzione dei rischi</strong> e alla <strong>tutela dei propri diritti</strong>.
        </p>
        <Link to="/contact" className="button-accent">
          Prenota Consulenza
        </Link>
      </section>
    </section>
  );
}




