import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";
import "lenis/dist/lenis.css";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects/:id" element={<Project />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
