import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height || 0;
      document.documentElement.style.setProperty("--navbar-height", `${Math.ceil(h)}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar" role="navigation" aria-label="Menu principale">
      <div className="logo" aria-label="Avv. Federica D’Alessandro Lojacono" tabIndex="0">
        ⚖️ Avv. Federica D’Alessandro Lojacono
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Chi Sono</Link></li>
        <li><Link to="/services">Servizi</Link></li>
        <li><Link to="/approfondimenti">Approfondimenti</Link></li>
        <li><Link to="/contact">Contatti</Link></li>
      </ul>
    </nav>
  );
}