import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"; 
import Approfondimenti from "./pages/Approfondimenti";
import ArticlePage from "./pages/ArticlePage"; 

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
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



