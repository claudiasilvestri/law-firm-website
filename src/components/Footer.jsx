import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
        © {new Date().getFullYear()} Studio Legale - Tutti i diritti riservati
      </p>
      <div className="socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}




