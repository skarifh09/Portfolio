import FadeIn from "./FadeIn";
import SkillBar from "./SkillBar";
import portfolioData from "../data/portfolioData";

const CATEGORIES = ["Frontend", "Backend", "Database"];
const CAT_COLORS = { Frontend: "var(--accent)", Backend: "var(--accent2)", Database: "var(--accent3)" };
const CAT_HEX = { Frontend: "#0066cc", Backend: "#7c3aed", Database: "#059669" };

const Skills = () => (
  <section id="skills" style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
    <FadeIn>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>03 / Skills</p>
      <h2 className="section-title">Tech <span style={{ color: "var(--accent)" }}>Stack</span></h2>
      <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, var(--accent), transparent)", marginBottom: 48 }} />
    </FadeIn>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
      {CATEGORIES.map((cat, ci) => {
        const colorVar = CAT_COLORS[cat];
        const colorHex = CAT_HEX[cat];
        const catSkills = portfolioData.skills.filter((s) => s.cat === cat);
        return (
          <FadeIn key={cat} delay={ci * 0.15}>
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: colorVar, boxShadow: `0 0 6px ${colorHex}66` }} />
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: colorVar }}>{cat}</h3>
              </div>
              {catSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={ci * 0.1 + i * 0.07} />
              ))}
            </div>
          </FadeIn>
        );
      })}
    </div>
  </section>
);

export default Skills;
