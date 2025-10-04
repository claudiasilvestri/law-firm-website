import "../css/Home.css";

export default function Home() {
  return (
    <section className="home-section">
      <h1>Avvocato Civilista a Bari | Federica D’Alessandro Lojacono</h1>
      <p>
        Sono <strong>Federica D’Alessandro Lojacono</strong>, avvocato civilista a Bari con oltre dieci anni di esperienza. 
        Offro consulenza legale personalizzata e assistenza professionale in ambito <strong>diritto civile, responsabilità medica, diritto societario</strong> e <strong>recupero crediti</strong>.
      </p>
      <p>
        Il mio approccio combina competenza tecnica e attenzione alla persona: ogni cliente riceve strategie su misura, orientate alla tutela dei propri diritti e alla risoluzione efficace dei problemi legali.
      </p>
      <a href="/contatti" className="button-accent">Richiedi Consulenza</a>
    </section>
  );
}

