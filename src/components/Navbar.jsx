import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Menu principale">
      <div className="logo" aria-label="Avv. Federica D’Alessandro Lojacono" tabIndex="0" >
        ⚖️ Avv. Federica D’Alessandro Lojacono
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" aria-label="Vai alla home">Home</Link>
        </li>
        <li>
          <Link to="/about" aria-label="Vai alla pagina Chi Sono">Chi Sono</Link>
        </li>
        <li>
          <Link to="/services" aria-label="Vai alla pagina Servizi">Servizi</Link>
        </li>
        <li>
          <Link to="/contact" aria-label="Vai alla pagina Contatti">Contatti</Link>
        </li>
        <li>
          <Link to="/approfondimenti" aria-label="Vai alla pagina Approfondimenti">Approfondimenti</Link>
        </li>
      </ul>
    </nav>
  );
}

