import { useState } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [active, setActive] = useState("home");

  const handleNavClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActive(section);
  };

  return (
    <div style={{ background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <Navbar active={active} onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
