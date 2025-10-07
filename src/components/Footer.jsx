import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
        © {new Date().getFullYear()} Federica D'alessandro Lojacono - Tutti i diritti riservati
      </p>
    </footer>
  );
}




