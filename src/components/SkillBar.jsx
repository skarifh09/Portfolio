import useInView from "../hooks/useInView";

const CAT_COLORS = {
  Frontend: "var(--accent)",
  Backend: "var(--accent2)",
  Database: "var(--accent3)",
};

const CAT_HEX = {
  Frontend: "#0066cc",
  Backend: "#7c3aed",
  Database: "#059669",
};

const SkillBar = ({ skill, delay = 0 }) => {
  const [ref, inView] = useInView();
  const colorVar = CAT_COLORS[skill.cat] || "var(--accent)";
  const colorHex = CAT_HEX[skill.cat] || "#0066cc";

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontFamily: "'Space Mono', monospace", color: "var(--text-primary)", letterSpacing: 1 }}>{skill.name}</span>
        <span style={{ fontSize: 12, color: colorVar, fontFamily: "'Space Mono', monospace" }}>{skill.level}%</span>
      </div>
      <div style={{ background: "var(--bg-secondary)", borderRadius: 3, height: 5, overflow: "hidden", border: "1px solid var(--border)" }}>
        <div style={{
          height: "100%", borderRadius: 3,
          background: `linear-gradient(90deg, ${colorHex}88, ${colorHex})`,
          width: inView ? `${skill.level}%` : "0%",
          transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          boxShadow: `0 0 6px ${colorHex}44`,
        }} />
      </div>
    </div>
  );
};

export default SkillBar;
