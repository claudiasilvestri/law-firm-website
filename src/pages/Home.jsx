import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <div className="text-box">
        <h1>
          <span role="img" aria-label="Valigia">💼</span> Consulenza legale chiara, efficace e su misura
        </h1>
        <p>
          <span role="img" aria-label="Scrittura">✍🏻</span> Sono <strong>Federica D’Alessandro Lojacono</strong>, <strong>avvocato civilista a Bari</strong>.
          Da oltre dieci anni affianco persone, professionisti e imprese nella gestione delle questioni legali,
          offrendo <strong>ascolto</strong>, <strong>chiarezza</strong> e <strong>trasparenza</strong>.
        </p>
        <p>
          Credo in un approccio fondato sul <strong>dialogo diretto</strong> e sulla costruzione di
          <strong> strategie personalizzate</strong>, perché ogni situazione richiede una
          <strong> soluzione concreta e sostenibile</strong>.
        </p>
        <p>
          Scegliere di affidarsi a me significa poter contare su un <strong>supporto legale costante</strong>,
          orientato alla <strong>prevenzione dei rischi</strong> e alla <strong>tutela dei propri diritti</strong>.
        </p>
        <Link 
          to="/contact" 
          className="button-accent" 
          aria-label="Richiedi una consulenza legale"
        >
          Richiedi una Consulenza
        </Link>
      </div>
    </section>
  );
}

