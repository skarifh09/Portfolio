import { useState, useEffect } from "react";
import logo from "../assets/logo.webp"; // ← change filename if different e.g. logo.svg

const NAV_LINKS = ["home", "about", "experience", "skills", "projects", "contact"];

const Navbar = ({ active, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    onNavClick(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5%",
        background: scrolled ? "rgba(248,250,252,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition: "all 0.4s",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>

        {/* Logo */}
        <div style={{ cursor: "pointer" }} onClick={() => handleClick("home")}>
          <img src={logo} alt="Logo" style={{ height: 36, width: "auto", objectFit: "contain" }} />
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <button key={link} className={`nav-link ${active === link ? "active" : ""}`} onClick={() => handleClick(link)}>
              {link}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen((o) => !o)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", display: "none", padding: 8 }}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" /></>
              : <><line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="12" x2="19" y2="12" /><line x1="3" y1="17" x2="19" y2="17" /></>}
          </svg>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button key={link} className="mobile-nav-link" onClick={() => handleClick(link)}>{link}</button>
        ))}
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 150 }} />}
    </>
  );
};

export default Navbar;