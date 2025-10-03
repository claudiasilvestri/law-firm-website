import foto from "../assets/foto.jpg"; 
import "../css/About.css"

export default function ChiSono() {
  return (
    <section className="chi-sono-section">
      <h1>Chi sono</h1>
      <div className="chi-sono-content">
        <div className="chi-sono-foto">
          <img src={foto} alt="Claudia Rossi" />
        </div>
        <div className="chi-sono-testo">
          <p>
            Sono Claudia Rossi, avvocato civilista con esperienza in diritto civile, responsabilità medica e contrattualistica.  
            Aiuto i miei clienti a tutelare i propri diritti con professionalità, trasparenza e competenza.
          </p>
          <a
            href="/CV_ClaudiaRossi.pdf"
            download
            className="button-accent"
          >
            Scarica il mio CV
          </a>
        </div>
      </div>
    </section>
  );
}


