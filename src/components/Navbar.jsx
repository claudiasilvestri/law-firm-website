import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; 

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); 
      } else {
        setHidden(false); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chi Sono", path: "/about" },
    { name: "Servizi", path: "/services" },
    { name: "Contatti", path: "/contact" },
    { name: "Approfondimenti", path: "/approfondimenti" }
  ];

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
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
