import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chi Sono", path: "/about" },
    { name: "Servizi", path: "/services" },
    { name: "Contatti", path: "/contact" },
    { name: "Approfondimenti", path: "/approfondimenti" }
  ];

  return (
    <nav className="navbar">
      <div className="logo">⚖️ Avv. Federica D’Alessandro Lojacono</div>
      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

