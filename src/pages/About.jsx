import "../css/About.css";

export default function About() {
  return (
    <section className="about-section">
      <h1>Chi Sono | Federica D’Alessandro Lojacono</h1>
      <div className="about-content">
        <div className="about-foto">
          <img
            src="/assets/Foto Federica.jpg"
            alt="Federica D’Alessandro Lojacono"
          />
        </div>
        <div className="about-text">
          <p>
            Mi chiamo <strong>Federica D’Alessandro Lojacono</strong>, avvocato civilista a Bari. 
            Dal 2009 affianco privati e imprese con consulenze legali personalizzate, garantendo professionalità, trasparenza e risultati concreti.
          </p>
          <h2>I miei valori</h2>
          <ul>
            <li><strong>Chiarezza:</strong> ogni complessità legale viene spiegata in modo semplice.</li>
            <li><strong>Assistenza su misura:</strong> soluzioni personalizzate in base alle esigenze di ciascun cliente.</li>
            <li><strong>Risultati concreti:</strong> strategie efficaci sia in ambito stragiudiziale sia giudiziale.</li>
          </ul>
          <p>
            Sono anche qualificata come <strong>Gestore della Crisi da Sovraindebitamento</strong>, per supportare chi affronta difficoltà economiche.
          </p>
          <a 
            href="/assets/CV Federica Dalessandro Lojacono.pdf" 
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









