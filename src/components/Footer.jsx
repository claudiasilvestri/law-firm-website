import "../css/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">
        © {currentYear} Avv. Federica D’Alessandro Lojacono – Tutti i diritti riservati
      </p>

      <p className="vat">
        P. IVA 07282120729
      </p>

      <p className="credits">
        Sito web realizzato da{" "}
        <a
          href="https://www.linkedin.com/in/claudia-silvestri-specialista-comunicazione-digitale/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profilo LinkedIn di Claudia Silvestri"
        >
          Claudia Silvestri
        </a>
      </p>
    </footer>
  );
}