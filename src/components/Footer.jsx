import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        © {new Date().getFullYear()} Avv. Federica D’Alessandro Lojacono – Tutti i diritti riservati
      </p>
      <p className="credits">
        Sito web realizzato da{" "}
        <a 
          href="https://www.linkedin.com/in/claudia-silvestri-specialista-comunicazione-digitale/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Claudia Silvestri
        </a>
      </p>
    </footer>
  );
}








