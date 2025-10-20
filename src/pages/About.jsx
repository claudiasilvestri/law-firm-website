import "../css/About.css";

export default function About() {
  return (
    <section className="about-section">
      <h1>Chi Sono | Federica D’Alessandro Lojacono</h1>

      <div className="about-content">
        <div className="about-foto">
          <img
            src="/assets/Foto Fede.JPG"
            alt="Federica D’Alessandro Lojacono"
          />
        </div>

        <div className="about-text">
          <h3>I miei valori</h3>
          <ul>
            <li><strong>Chiarezza:</strong> ogni complessità legale spiegata in modo semplice.</li>
            <li><strong>Assistenza su misura:</strong> soluzioni personalizzate in base alle esigenze di ciascun cliente.</li>
            <li><strong>Risultati concreti:</strong> strategie efficaci sia in ambito stragiudiziale sia giudiziale.</li>
          </ul>

          <h3>Aree di competenza</h3>
          <ul>
            <li>Diritto civile e commerciale</li>
            <li>Diritto societario e fallimentare</li>
            <li>Contrattualistica d’impresa</li>
            <li>Mediazione e risoluzione alternativa delle controversie</li>
            <li>Responsabilità medica</li>
            <li>Diritto antidiscriminatorio e pari opportunità</li>
            <li>Consulenza per enti pubblici e società</li>
          </ul>

          <p>
            Sono anche qualificata come <strong>Gestore della Crisi da Sovraindebitamento</strong>, per supportare chi affronta difficoltà economiche.
          </p>

          <a 
            href="/assets/CV Federica D'Alessandro Lojacono.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-accent"
          >
            Visualizza CV
          </a>
        </div>
      </div>
    </section>
  );
}











