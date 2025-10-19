import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contatti from "./pages/Contact"; 
import Approfondimenti from "./pages/Approfondimenti";
import ArticlePage from "./pages/ArticlePage"; 
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contatti />} />
            <Route path="/approfondimenti" element={<Approfondimenti />} />
            <Route path="/approfondimenti/:id" element={<ArticlePage />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





