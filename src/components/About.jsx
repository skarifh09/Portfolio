import FadeIn from "./FadeIn";
import portfolioData from "../data/portfolioData";

const INTEREST_ICONS = { Photography: "📷", Sports: "⚽", "Arcade Gaming": "🎮" };

const INFO_CARDS = [
  { icon: "🎓", label: "Education", val: "B.Tech CST — CGPA 9.0", sub: "MAKAUT, 2023" },
  { icon: "💼", label: "Experience", val: "2+ Years", sub: "Full-Stack Development" },
  { icon: "🌍", label: "Location", val: "Kolkata, India", sub: "West Bengal" },
  { icon: "📧", label: "Email", val: portfolioData.email, sub: "Let's connect!" },
];

const About = () => (
  <section id="about" style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
    <FadeIn>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>01 / About</p>
      <h2 className="section-title">Who I <span style={{ color: "var(--accent)" }}>Am</span></h2>
      <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, var(--accent), transparent)", marginBottom: 48 }} />
    </FadeIn>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
      {INFO_CARDS.map((item, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <div className="card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 28 }}>{item.icon}</span>
            <div>
              <p style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>{item.val}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{item.sub}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn delay={0.3}>
      <div style={{ marginTop: 40, background: "var(--accent-light)", border: "1px solid var(--accent-border)", borderRadius: 16, padding: "28px 32px" }}>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--text-secondary)" }}>{portfolioData.profile}</p>
      </div>
    </FadeIn>

    <FadeIn delay={0.4}>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 10 }}>
        {portfolioData.interests.map((interest) => (
          <span key={interest} style={{ background: "var(--accent2-light)", border: "1px solid var(--accent2-border)", color: "var(--accent2)", borderRadius: 20, padding: "6px 16px", fontSize: 13 }}>
            {INTEREST_ICONS[interest] || "✨"} {interest}
          </span>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default About;
