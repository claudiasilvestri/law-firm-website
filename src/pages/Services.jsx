import "../css/Services.css";
import SEO from "../components/SEO";

const servicesData = [
  {
    emoji: "🩺",
    label: "Medicina",
    title: "Responsabilità Medica e Sanitaria",
    description: (
      <>
        Assisto <strong>pazienti e professionisti sanitari</strong> nella gestione dei casi di <strong>responsabilità medica</strong>, offrendo <strong>analisi della documentazione clinica</strong>, <strong>consulenza mirata</strong> e <strong>tutela in ogni fase del procedimento</strong>, sia in sede <strong>stragiudiziale</strong> che <strong>giudiziale</strong>.<br/>
        L’obiettivo è garantire <strong>tutela dei diritti</strong> e una <strong>gestione consapevole del contenzioso</strong>.
      </>
    )
  },
  {
    emoji: "🏢",
    label: "Edificio",
    title: "Diritto Societario e Commerciale",
    description: (
      <>
        Offro <strong>consulenza legale</strong> a <strong>imprese, società e professionisti</strong> in materia di <strong>costituzione, gestione e trasformazione societaria</strong>, nonché nella <strong>redazione di contratti commerciali</strong>.<br/>
        Supporto anche nelle <strong>operazioni straordinarie</strong> e nella <strong>governance aziendale</strong>, per assicurare <strong>solidità e continuità</strong> all’attività d’impresa.
      </>
    )
  },
  {
    emoji: "💰",
    label: "Soldi",
    title: "Sovraindebitamento e Procedure Concorsuali",
    description: (
      <>
        Aiuto <strong>privati e imprenditori</strong> in difficoltà economica a <strong>ristrutturare i debiti</strong> attraverso <strong>piani di composizione della crisi</strong>, <strong>accordi con i creditori</strong> e strumenti previsti dalla legge.<br/>
        Come <strong>Gestore della crisi da sovraindebitamento</strong>, accompagno il cliente con un <strong>approccio umano e pratico</strong> verso la ripartenza economica.
      </>
    )
  },
  {
    emoji: "🧾",
    label: "Documento",
    title: "Recupero Crediti e Contenziosi Civili",
    description: (
      <>
        Gestisco le attività di <strong>recupero crediti</strong> in modo <strong>rapido ed efficace</strong>, sia in via <strong>stragiudiziale</strong> che <strong>giudiziale</strong>.<br/>
        Offro inoltre <strong>assistenza nei contenziosi civili</strong> e nelle <strong>controversie contrattuali</strong>, con <strong>strategie mirate al risultato</strong> e attenzione ai <strong>costi e ai tempi</strong>.
      </>
    )
  },
  {
    emoji: "📄",
    label: "Contratto",
    title: "Contrattualistica e Tutela Patrimoniale",
    description: (
      <>
        Redigo e revisiono <strong>contratti civili e commerciali</strong>, curando ogni dettaglio per garantire <strong>sicurezza legale e chiarezza</strong>.<br/>
        Fornisco inoltre <strong>consulenza su locazioni, diritto condominiale e protezione del patrimonio</strong>, aiutando <strong>privati e imprese</strong> a prevenire i rischi e a tutelare i propri interessi.
      </>
    )
  },
  {
    emoji: "🫂",
    label: "Mediazione",
    title: "Mediazione e Conciliazione Civile",
    description: (
      <>
        Promuovo <strong>soluzioni basate sul dialogo e la mediazione</strong>, aiutando le parti a risolvere le controversie in modo <strong>rapido e meno oneroso</strong>.<br/>
        La <strong>mediazione civile e commerciale</strong> rappresenta una valida alternativa al contenzioso, volta a <strong>preservare i rapporti personali e professionali</strong>.
      </>
    )
  },
  {
    emoji: "🌍",
    label: "Mondo",
    title: "Tutela contro la Discriminazione e le Pari Opportunità",
    description: (
      <>
        Offro <strong>assistenza legale</strong> in casi di <strong>discriminazione di genere</strong>, sul lavoro o nell’accesso ai servizi, con particolare attenzione ai principi di <strong>uguaglianza e dignità personale</strong>.<br/>
        L’obiettivo è garantire <strong>tutela effettiva</strong> e rispetto dei <strong>diritti fondamentali</strong>, anche attraverso azioni <strong>giudiziarie mirate</strong>.
      </>
    )
  },
  {
    emoji: "🏛️",
    label: "Tribunale",
    title: "Consulenza Legale per Enti Pubblici e Società",
    description: (
      <>
        Collaboro con <strong>enti pubblici e società</strong> per la gestione di <strong>aspetti contrattuali, amministrativi e di compliance legale</strong>, fornendo <strong>supporto costante</strong> nelle procedure operative e nella <strong>prevenzione del contenzioso</strong>.
      </>
    )
  }
];

export default function Services() {
  return (
    <section className="services-section" aria-label="Pagina Servizi Legali">
      <SEO
        title="Servizi Legali | Federica D’Alessandro Lojacono"
        description="Scopri i servizi legali offerti da Federica D’Alessandro Lojacono a Bari: consulenza civile, societaria, contrattualistica, recupero crediti, mediazione e molto altro."
      />

      <h1>Servizi Legali | Federica D’Alessandro Lojacono</h1>

      <div className="services-intro">
        <p>
          <span role="img" aria-label="Valigia">💼</span> Hai bisogno di <strong>supporto legale concreto e su misura</strong>?<br/>
          Offro <strong>consulenze sia in studio a Bari sia online</strong>, per assistere <strong>persone, professionisti e aziende</strong> in ogni fase delle questioni legali.<br/>
          Dalla <strong>responsabilità medica</strong> al <strong>diritto societario</strong>, dal <strong>recupero crediti</strong> alle <strong>procedure concorsuali</strong>, costruisco <strong>strategie personalizzate</strong>, chiare ed efficaci, sempre con un approccio pratico ed <strong>orientato al risultato</strong>.
        </p>
      </div>

      <section className="services" aria-label="Elenco dei servizi legali offerti">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <h2>
              <span role="img" aria-label={service.label}>{service.emoji}</span> {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}