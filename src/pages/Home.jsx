import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css/Home.css";

const homeText = [
  {
    emoji: "✍🏻",
    label: "Scrittura",
    content: (
      <>
        Sono <strong>Federica D’Alessandro Lojacono</strong>, <strong>avvocato civilista a Bari</strong>.
        Da oltre dieci anni affianco persone, professionisti e imprese nella gestione delle questioni legali,
        offrendo <strong>ascolto</strong>, <strong>chiarezza</strong> e <strong>trasparenza</strong>.
      </>
    )
  },
  {
    content: (
      <>
        Credo in un approccio fondato sul <strong>dialogo diretto</strong> e sulla costruzione di
        <strong> strategie personalizzate</strong>, poiché ogni situazione richiede una
        <strong> soluzione concreta e sostenibile</strong>.
      </>
    )
  },
  {
    content: (
      <>
        Scegliere di affidarsi a me significa poter contare su un <strong>supporto legale costante</strong>,
        orientato alla <strong>prevenzione dei rischi</strong> e alla <strong>tutela dei propri diritti</strong>.
      </>
    )
  }
];

export default function Home() {
  return (
    <section className="home-section" aria-label="Pagina Home">
      <Helmet>
        <title>Home | Federica D’Alessandro Lojacono</title>
        <meta
          name="description"
          content="Consulenza legale chiara, efficace e su misura a Bari. Federica D’Alessandro Lojacono offre supporto legale per persone, professionisti e imprese."
        />
      </Helmet>

      <div className="text-box">
        <h1>
          <span role="img" aria-label="Valigia">💼</span> Consulenza legale chiara, efficace e su misura
        </h1>
        {homeText.map((item, index) => (
          <p key={index}>
            {item.emoji && <span role="img" aria-label={item.label}>{item.emoji}</span>} {item.content}
          </p>
        ))}
        <Link 
          to="/contact" 
          className="button-accent" 
          aria-label="Richiedi una consulenza legale"
        >
          Richiedi una consulenza
        </Link>
      </div>
    </section>
  );
}