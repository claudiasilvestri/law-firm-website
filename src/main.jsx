import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; 
import App from "./App.jsx";

import "./css/App.css";
import "./css/Navbar.css";
import "./css/Footer.css";
import "./css/Approfondimenti.css";
import "./css/About.css";
import "./css/Contact.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider> 
      <App />
    </HelmetProvider>
  </StrictMode>
);

