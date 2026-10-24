
import FadeIn from "./FadeIn";
import portfolioData from "../data/portfolioData";
import cv from "../assets/Sekh_Arif_Hossain_CV.pdf";

const INTEREST_ICONS = {
  Photography: "📷",
  Sports: "⚽",
  "Arcade Gaming": "🎮",
};

const INFO_CARDS = [
  {
    icon: "🎓",
    label: "Education",
    val: "B.Tech CST — CGPA 9.0",
    sub: "MAKAUT, 2023",
  },
  {
    icon: "💼",
    label: "Experience",
    val: "2+ Years",
    sub: "Full-Stack Development",
  },
  {
    icon: "🌍",
    label: "Location",
    val: "Kolkata, India",
    sub: "West Bengal",
  },
  {
    icon: "📧",
    label: "Email",
    val: portfolioData.email,
    sub: "Let's connect!",
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 5%",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 55 }}>
          <p
            style={{
              color: "var(--accent)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Get to know me
          </p>

          <h2
            className="section-title"
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
              marginBottom: 16,
            }}
          >
            About <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            A little about my background, experience, and passion for
            building applications.
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 40,
          alignItems: "start",
        }}
      >
        <FadeIn>
          <div>
            <div
              style={{
                fontSize: 13,
                color: "var(--accent)",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Who I Am
            </div>

            <h3
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.4,
                marginBottom: 22,
              }}
            >
              Full Stack Developer passionate about building useful
              digital experiences.
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 20,
              }}
            >
              {portfolioData.profile}
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 28,
              }}
            >
              I enjoy developing responsive user interfaces, building
              REST APIs, working with databases, and creating reliable
              full-stack applications.
            </p>

            <a
              href={cv}
              download="Sekh_Arif_Hossain_CV.pdf"
              className="cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                textDecoration: "none",
                padding: "13px 24px",
                cursor: "pointer",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>

              Download CV
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: 16,
            }}
          >
            {INFO_CARDS.map((item) => (
              <div
                key={item.label}
                className="card"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  minWidth: 0,
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 27,
                    marginBottom: 16,
                  }}
                >
                  {item.icon}
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </p>

                <h4
                  style={{
                    color: "var(--text-primary)",
                    fontSize: 17,
                    lineHeight: 1.5,
                    overflowWrap: "anywhere",
                    marginBottom: 6,
                  }}
                >
                  {item.val}
                </h4>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div style={{ marginTop: 65 }}>
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: 22,
              marginBottom: 22,
            }}
          >
            Interests & Hobbies
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {portfolioData.interests?.map((interest) => (
              <span
                key={interest}
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "12px 18px",
                  borderRadius: 30,
                  fontSize: 14,
                }}
              >
                <span>{INTEREST_ICONS[interest] || "✨"}</span>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
