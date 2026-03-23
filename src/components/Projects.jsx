import FadeIn from "./FadeIn";
import portfolioData from "../data/portfolioData";

const Projects = () => (
  <section id="projects" style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>04 / Projects</p>
        <h2 className="section-title">Featured <span style={{ color: "#d97706" }}>Work</span></h2>
        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #d97706, transparent)", marginBottom: 48 }} />
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {portfolioData.projects.map((proj, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="proj-card" style={{ "--accent": proj.color }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${proj.color}18`, border: `1px solid ${proj.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  {proj.icon}
                </div>
                <svg width="18" height="18" fill="none" stroke={proj.color} strokeWidth="1.5" style={{ opacity: 0.7 }}>
                  <path d="M5 12L12 5M12 5H7M12 5v5" />
                </svg>
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text-primary)", marginBottom: 10 }}>{proj.name}</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{proj.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {proj.tech.map((t) => (
                  <span key={t} style={{ background: `${proj.color}12`, border: `1px solid ${proj.color}28`, color: proj.color, borderRadius: 20, padding: "3px 10px", fontSize: 11, fontFamily: "'Space Mono', monospace" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Awards */}
      <FadeIn delay={0.2}>
        <div style={{ marginTop: 64, background: "linear-gradient(135deg, rgba(0,102,204,0.05), rgba(124,58,237,0.05))", border: "1px solid var(--border)", borderRadius: 20, padding: 36 }}>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: "var(--text-primary)", marginBottom: 24 }}>🏆 Awards & Achievements</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {portfolioData.awards.map((award, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--accent-light)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontFamily: "'Space Mono', monospace", color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Projects;
