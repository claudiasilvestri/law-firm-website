import "../css/Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <h1>Servizi Legali | Federica D’Alessandro Lojacono</h1>
      
      <div className="service">
        <h2>Responsabilità Medica</h2>
        <p>
          Assisto pazienti che hanno subito danni per <strong>errori medici</strong> o omissioni sanitarie. 
          Analizzo cartelle cliniche e gestisco tutta la documentazione per tutelare i tuoi diritti.
        </p>
      </div>

      <div className="service">
        <h2>Diritto Societario e Commerciale</h2>
        <p>
          Consulenza per <strong>imprese e professionisti</strong> su costituzione società, contratti commerciali, governance e gestione della crisi aziendale.
        </p>
      </div>

      <div className="service">
        <h2>Sovraindebitamento e Procedure Concorsuali</h2>
        <p>
          Supporto chi si trova in difficoltà economica tramite <strong>piani di composizione della crisi</strong>, mediazione con creditori e procedure concorsuali.
        </p>
      </div>

      <div className="service">
        <h2>Recupero Crediti e Contenziosi Civili</h2>
        <p>
          Gestione di <strong>recupero crediti</strong> e contenziosi civili, con soluzioni stragiudiziali rapide o tutela giudiziale completa.
        </p>
      </div>

      <div className="service">
        <h2>Contrattualistica e Tutela Patrimoniale</h2>
        <p>
          Redazione e revisione di contratti civili e commerciali, protezione del patrimonio, locazioni e diritto condominiale.
        </p>
      </div>
    </section>
  );
}

