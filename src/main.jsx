import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./css/App.css";
import "./css/Navbar.css";
import "./css/Footer.css";
import "./css/Blog.css";
import "./css/About.css";
import "./css/ContactForm.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


