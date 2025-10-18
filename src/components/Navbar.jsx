import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">⚖️ Federica D’Alessandro Lojacono</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Chi Sono</Link></li>
        <li><Link to="/services">Servizi</Link></li>
        <li><Link to="/contact">Contatti</Link></li>
        <li><Link to="/approfondimenti">Approfondimenti</Link></li>
      </ul>
    </nav>
  );
}




