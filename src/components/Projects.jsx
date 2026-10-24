
import FadeIn from "./FadeIn";

const projects = [
  {
    name: "Real Time Video & Text Chat Application",
    desc: "Built a full stack language exchange platform using the MERN stack. Integrated Stream Chat and Video APIs for real time messaging and video calling, with JWT authentication, Cloudinary media storage, typing indicators, read receipts, and group chats. Deployed on Render.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Stream API",
      "JWT",
      "Cloudinary",
      "Render",
    ],
    color: "#0ea5e9",
    icon: "💬",
  },
  {
    name: "React Admin Dashboard",
    desc: "Designed and developed an inventory management system with role based login. Built a responsive admin dashboard with reusable React components and integrated REST APIs for customer data viewing, registration, secure access control, and inventory tracking.",
    tech: [
      "React.js",
      "REST APIs",
      "Java",
      "Spring Boot",
      "SQL",
      "Authentication",
    ],
    color: "#8b5cf6",
    icon: "📊",
  },
  {
    name: "Banking Application",
    desc: "Developed a Java based banking application using Spring Boot and REST APIs to support transactions, account management, and authentication.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Backend Development",
    ],
    color: "#10b981",
    icon: "🏦",
  },
  {
    name: "Brewmio E commerce Website",
    desc: "Developed a full stack e commerce website with a responsive frontend and PHP and SQL backend integration. Implemented Web3Forms for form submission and email data handling.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL",
      "Web3Forms",
    ],
    color: "#d97706",
    icon: "🛍️",
  },
  {
    name: "Module Management System",
    desc: "Built a CRUD based module management system using Java Spring Boot and an H2 in memory database. Implemented RESTful APIs for creating, reading, updating, and deleting module records.",
    tech: [
      "Java",
      "Spring Boot",
      "H2 Database",
      "CRUD",
      "REST APIs",
    ],
    color: "#ec4899",
    icon: "📚",
  },
  {
    name: "Home Application Store",
    desc: "Developed a web based application store for browsing and managing app listings. Used Java and SQLite for backend data management, with Node.js handling server side operations and an HTML, CSS, and JavaScript frontend.",
    tech: [
      "Java",
      "Node.js",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    color: "#14b8a6",
    icon: "🖥️",
  },
  {
    name: "Battleship Game",
    desc: "Built a Battleship game using object oriented programming principles, modular class design, and game logic to demonstrate Java programming and problem solving skills.",
    tech: [
      "Java",
      "OOP",
      "Game Logic",
      "Object Oriented Design",
    ],
    color: "#f97316",
    icon: "🎮",
  },
];

const certifications = [
  {
    name: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "Coursera",
    desc: "Coursework covering React development, object oriented backend architecture, Git and version control, CI/CD, deployment, cloud operations, security, and RESTful API architecture.",
    icon: "🎓",
  },
  {
    name: "90 Days of Data Structure Tutorial Series",
    issuer: "Course Completion",
    desc: "Successfully completed a 90 day data structures tutorial series.",
    icon: "💻",
  },
];

const Projects = () => (
  <section
    id="projects"
    style={{
      padding: "100px 5%",
      background: "var(--bg-secondary)",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
          04 / Projects
        </p>

        <h2 className="section-title">
          Featured <span style={{ color: "#d97706" }}>Work</span>
        </h2>

        <div
          style={{
            width: 40,
            height: 2,
            background: "linear-gradient(90deg, #d97706, transparent)",
            marginBottom: 48,
          }}
        />

        <p
          style={{
            maxWidth: 650,
            fontSize: 14,
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: 36,
          }}
        >
          A selection of my software development projects, covering full stack
          web applications, backend systems, e commerce platforms, and
          interactive applications.
        </p>
      </FadeIn>

      {/* Project Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((proj, i) => (
          <FadeIn key={proj.name} delay={i * 0.1}>
            <div
              className="proj-card"
              style={{
                "--accent": proj.color,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Project Icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${proj.color}18`,
                    border: `1px solid ${proj.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {proj.icon}
                </div>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke={proj.color}
                  strokeWidth="1.5"
                  style={{ opacity: 0.7 }}
                  aria-hidden="true"
                >
                  <path d="M5 12L12 5M12 5H7M12 5v5" />
                </svg>
              </div>

              {/* Project Details */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--text-primary)",
                  marginBottom: 10,
                  lineHeight: 1.5,
                }}
              >
                {proj.name}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {proj.desc}
              </p>

              {/* Technologies */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: "auto",
                }}
              >
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: `${proj.color}12`,
                      border: `1px solid ${proj.color}28`,
                      color: proj.color,
                      borderRadius: 20,
                      padding: "3px 10px",
                      fontSize: 11,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Certifications */}
      <FadeIn delay={0.2}>
        <div
          style={{
            marginTop: 64,
            background:
              "linear-gradient(135deg, rgba(0,102,204,0.05), rgba(124,58,237,0.05))",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 36,
          }}
        >
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "var(--text-primary)",
              marginBottom: 24,
            }}
          >
            🎓 Certifications & Learning
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "var(--accent-light)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 5,
                      lineHeight: 1.6,
                    }}
                  >
                    {cert.name}
                  </h4>

                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Projects;
