
import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";

const NAV_LINKS = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];

const Navbar = ({ active, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "light"
  );

  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Apply the selected theme to the entire website
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleClick = (link) => {
    if (onNavClick) {
      onNavClick(link);
    }

    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="main-navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: "0 5%",
          background: scrolled
            ? "var(--navbar-bg)"
            : "var(--navbar-transparent)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          boxShadow: scrolled ? "0 2px 16px var(--navbar-shadow)" : "none",
          transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
          gap: 16,
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleClick("home")}
          aria-label="Go to home"
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Portfolio logo"
            style={{
              height: 36,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </button>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              className={`nav-link ${active === link ? "active" : ""}`}
              onClick={() => handleClick(link)}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
          style={{
            width: 42,
            height: 42,
            minWidth: 42,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--card-bg)",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {isDark ? (
            /* Sun icon */
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.42 1.42" />
              <path d="m17.65 17.65 1.42 1.42" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.35 17.65-1.42 1.42" />
              <path d="m19.07 4.93-1.42 1.42" />
            </svg>
          ) : (
            /* Moon icon */
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 190,
              border: "none",
              background: "rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
            }}
          />

          <div
            className="mobile-menu open"
            style={{
              position: "fixed",
              top: 70,
              left: 0,
              right: 0,
              zIndex: 195,
              background: "var(--navbar-bg)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              padding: "16px 5% 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                type="button"
                className={`mobile-nav-link ${
                  active === link ? "active" : ""
                }`}
                onClick={() => handleClick(link)}
                style={{
                  color: "var(--text-primary)",
                  background:
                    active === link ? "var(--accent-light)" : "transparent",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 16px",
                  textAlign: "left",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
