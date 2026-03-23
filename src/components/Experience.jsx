import FadeIn from "./FadeIn";
import portfolioData from "../data/portfolioData";

const Experience = () => (
  <section id="experience" style={{ padding: "100px 5%", background: "var(--bg-secondary)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>02 / Experience</p>
        <h2 className="section-title">Work <span style={{ color: "var(--accent2)" }}>History</span></h2>
        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, var(--accent2), transparent)", marginBottom: 48 }} />
      </FadeIn>

      {/* Work cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
        {portfolioData.experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="card" style={{ height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text-primary)", marginBottom: 4 }}>{exp.role}</h3>
                  <p style={{ color: "var(--accent)", fontSize: 13, fontWeight: 500 }}>{exp.company}</p>
                </div>
                <span style={{ background: "var(--accent-light)", border: "1px solid var(--accent-border)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                  {exp.period}
                </span>
              </div>

              <ul style={{ listStyle: "none", marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                {exp.points.map((point, j) => (
                  <li key={j} style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 4, height: 4, borderRadius: "50%", background: "var(--accent2)" }} />
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education */}
      <FadeIn delay={0.2}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, color: "var(--text-primary)", marginTop: 64, marginBottom: 28 }}>
          Education <span style={{ color: "var(--accent3)", fontSize: 14, fontFamily: "'Space Mono', monospace" }}>// Timeline</span>
        </h3>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
        <div style={{ position: "absolute", left: 14, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, var(--accent-border), transparent)" }} />
        {portfolioData.education.map((ed, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div style={{ display: "flex", gap: 24, paddingLeft: 40, position: "relative" }}>
              <div style={{ position: "absolute", left: 8, top: 16, width: 14, height: 14, borderRadius: "50%", border: "2px solid var(--accent)", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
              </div>
              <div className="card" style={{ flex: 1, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{ed.degree}</h4>
                    <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{ed.institution}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 12, fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", marginBottom: 4 }}>{ed.period}</p>
                    <p style={{ fontSize: 13, color: "var(--accent3)", fontWeight: 600 }}>{ed.score}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
