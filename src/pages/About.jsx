import { useEffect, useState } from "react";
import "../css/About.css";

export default function About() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    document.title = "Chi Sono | Federica D’Alessandro Lojacono";

    const handleResize = () => setIsTablet(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cvLink = (
    <a
      href="/assets/CV Federica D'Alessandro Lojacono.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="button-accent"
      aria-label="Visualizza il CV di Federica D’Alessandro Lojacono"
    >
      Visualizza CV
    </a>
  );

  return (
    <section className="about-section">
      <h1>Chi Sono | Federica D’Alessandro Lojacono</h1>
      <div className="about-content">
        <div className="about-foto">
          <img
            src="/assets/Foto Fede.JPG"
            alt="Ritratto professionale di Federica D’Alessandro Lojacono"
          />
          {isTablet && cvLink}
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
          <p>Sono anche qualificata come <strong>Gestore della Crisi da Sovraindebitamento</strong>.</p>
          {!isTablet && cvLink}
        </div>
      </div>
    </section>
  );
}