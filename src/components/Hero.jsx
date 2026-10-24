import useTypingEffect from "../hooks/useTypingEffect";
import portfolioData from "../data/portfolioData";
import pic from "../assets/PIC.jpeg";

const TITLES = ["Software Developer", "Full-Stack Engineer", "React Specialist", "Java Developer"];

const Hero = ({ onNavClick }) => {
  const typedText = useTypingEffect(TITLES);

  return (
    <section id="home" className="grid-bg" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "80px 5% 40px", position: "relative", overflow: "hidden",
    }}>

      {/* Blob accents */}
      <div style={{ position: "absolute", top: "8%", right: "4%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "-4%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Two-column layout */}
      <div className="hero-layout" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 56, zIndex: 1 }}>

        {/* LEFT — text */}
        <div className="hero-text" style={{ flex: "1 1 320px" }}>
          <div style={{ opacity: 0, animation: "fadeSlide 0.8s ease 0.2s forwards" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: 4, color: "var(--accent)", marginBottom: 20, textTransform: "uppercase" }}>
              <span className="glow-dot" />Available for opportunities
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlide 0.8s ease 0.4s forwards" }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: -2, marginBottom: 16 }}>
              {portfolioData.name.split(" ").map((word, i) => (
                <span key={i} style={{ display: "block", color: i === 2 ? "var(--accent)" : "var(--text-primary)" }}>
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlide 0.8s ease 0.6s forwards" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(12px, 2vw, 18px)", color: "var(--text-secondary)", marginBottom: 12, height: 28 }}>
              {typedText}
              <span style={{ borderRight: "2px solid var(--accent)", animation: "blink 0.8s step-end infinite" }}>&nbsp;</span>
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlide 0.8s ease 0.8s forwards" }}>
            <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
              {portfolioData.profile}
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlide 0.8s ease 1s forwards", display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => onNavClick("projects")}>View Work</button>
            <button className="cta-btn" onClick={() => onNavClick("contact")}
              style={{ background: "transparent", borderColor: "var(--border)", color: "var(--text-secondary)" }}>
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-photo-wrap" style={{
          flex: "0 0 380px",
          maxWidth: "380px",
          opacity: 0,
          animation: "fadeSlide 0.9s ease 0.5s forwards",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {/* Glow ring behind the card */}
          <div style={{ position: "relative" }}>

            {/* Decorative blurred glow blob */}
            <div style={{
              position: "absolute",
              inset: -18,
              borderRadius: 32,
              background: "linear-gradient(135deg, rgba(0,102,204,0.22) 0%, rgba(124,58,237,0.18) 50%, rgba(0,102,204,0.10) 100%)",
              filter: "blur(18px)",
              zIndex: 0,
            }} />

            {/* Outer accent border ring */}
            <div style={{
              position: "absolute",
              inset: -5,
              borderRadius: 26,
              background: "linear-gradient(135deg, rgba(0,102,204,0.5), rgba(124,58,237,0.4), rgba(0,102,204,0.2))",
              zIndex: 1,
            }} />

            {/* Photo card */}
            <div style={{
              position: "relative",
              zIndex: 2,
              width: 380,
              height: 500,
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: `
                0 2px 4px rgba(0,102,204,0.08),
                0 8px 16px rgba(0,102,204,0.12),
                0 24px 48px rgba(0,102,204,0.18),
                0 48px 80px rgba(124,58,237,0.12),
                inset 0 1px 0 rgba(255,255,255,0.9)
              `,
              border: "3px solid rgba(255,255,255,0.95)",
            }}>
              <img
                src={pic}
                alt="Sekh Arif Hossain"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />

              {/* Subtle inner shine overlay */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "float 2s ease-in-out infinite" }}>
        <span style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", letterSpacing: 2 }}>SCROLL</span>
        <svg width="20" height="20" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
          <path d="M10 4v12M4 10l6 6 6-6" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-photo-wrap { flex: 0 0 300px !important; max-width: 300px !important; }
          .hero-photo-wrap .photo-card { width: 300px !important; height: 400px !important; }
        }
        @media (max-width: 768px) {
          .hero-layout { gap: 32px !important; }
          .hero-photo-wrap { flex: 0 0 240px !important; max-width: 240px !important; }
          .hero-photo-wrap .photo-card { width: 240px !important; height: 320px !important; }
        }
        @media (max-width: 600px) {
          .hero-layout { flex-direction: column !important; align-items: center !important; text-align: center; }
          .hero-text { flex: unset !important; width: 100%; }
          .hero-photo-wrap { flex: unset !important; max-width: 260px !important; width: 260px !important; display: flex !important; }
          .hero-photo-wrap div[style] { width: 260px !important; height: 340px !important; }
        }
      `}</style>

    </section>
  );
};

export default Hero;