import portfolioData from "../data/portfolioData";

const Footer = () => (
  <footer style={{
    padding: "32px 5%",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-secondary)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  }}>
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--text-muted)" }}>
      © {new Date().getFullYear()}{" "}
      <span style={{ color: "var(--accent)" }}>{portfolioData.name}</span>. Built with React.
    </p>
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--text-muted)" }}>
      {portfolioData.email}
    </p>
  </footer>
);

export default Footer;
