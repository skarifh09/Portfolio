
import FadeIn from "./FadeIn";
import SkillBar from "./SkillBar";

const categories = [
  {
    name: "Frontend",
    color: "var(--accent)",
    hex: "#0066cc",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript ES6+", level: 88 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "Responsive Web Design", level: 85 },
      { name: "UI/UX Implementation", level: 80 },
    ],
  },
  {
    name: "Backend",
    color: "var(--accent2)",
    hex: "#7c3aed",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 },
      { name: "RESTful API Design", level: 85 },
      { name: "JWT Authentication", level: 80 },
    ],
  },
  {
    name: "Database",
    color: "var(--accent3)",
    hex: "#059669",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "SQLite", level: 75 },
      { name: "H2 Database", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#d97706",
    hex: "#d97706",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 70 },
      { name: "Cloudinary", level: 75 },
      { name: "Stream Chat/Video API", level: 75 },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    style={{
      padding: "100px 5%",
      maxWidth: 1200,
      margin: "0 auto",
    }}
  >
    {/* Section Header */}
    <FadeIn>
      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          letterSpacing: 4,
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        03 / Skills
      </p>

      <h2 className="section-title">
        Tech <span style={{ color: "var(--accent)" }}>Stack</span>
      </h2>

      <div
        style={{
          width: 40,
          height: 2,
          background:
            "linear-gradient(90deg, var(--accent), transparent)",
          marginBottom: 24,
        }}
      />

      <p
        style={{
          maxWidth: 650,
          fontSize: 14,
          lineHeight: 1.8,
          color: "var(--text-secondary)",
          marginBottom: 48,
        }}
      >
        My technical toolkit covers frontend engineering, backend
        development, database management, and deployment tools used
        to build full stack web applications.
      </p>
    </FadeIn>

    {/* Skill Categories */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 32,
      }}
    >
      {categories.map((category, ci) => (
        <FadeIn key={category.name} delay={ci * 0.15}>
          <div className="card" style={{ height: "100%" }}>
            {/* Category Heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: category.color,
                  boxShadow: `0 0 6px ${category.hex}66`,
                }}
              />

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: category.color,
                }}
              >
                {category.name}
              </h3>
            </div>

            {/* Skill Bars */}
            {category.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                delay={ci * 0.1 + i * 0.07}
              />
            ))}
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default Skills;
