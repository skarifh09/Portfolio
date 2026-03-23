import { useState } from "react";
import FadeIn from "./FadeIn";
import portfolioData from "../data/portfolioData";

const CONTACT_ITEMS = [
  { icon: "✉️", label: "Email", key: "email" },
  { icon: "📞", label: "Phone", key: "phone" },
  { icon: "📍", label: "Location", key: "location" },
];

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
      <FadeIn>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>05 / Contact</p>
        <h2 className="section-title">Get In <span style={{ color: "var(--accent)" }}>Touch</span></h2>
        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, var(--accent), transparent)", marginBottom: 48 }} />
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>

        {/* Left — contact info */}
        <FadeIn>
          <div>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 36 }}>
              I'm currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open.
            </p>
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, padding: "16px 20px", background: "var(--bg-card)", borderRadius: 12, border: "1px solid var(--border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 11, fontFamily: "'Space Mono', monospace", color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: "var(--text-primary)" }}>{portfolioData[item.key]}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.2}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            className="card"
          >
            {/* Web3Forms access key */}
            <input type="hidden" name="access_key" value="74f014b7-4b1e-4830-b853-d963fdc506ae" />
            {/* Optional: customize the email subject */}
            <input type="hidden" name="subject" value="New message from Portfolio Contact Form" />
            {/* Honeypot spam protection */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text-primary)", marginBottom: 8 }}>
              Send a Message
            </h3>

            <input
              className="contact-input"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              className="contact-input"
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
            <input
              className="contact-input"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="contact-input"
              placeholder="Your message..."
              name="message"
              rows={5}
              style={{ resize: "vertical" }}
              required
            />

            <button
              type="submit"
              className="cta-btn"
              style={{ width: "100%", fontSize: 12, opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {/* Success message */}
            {status === "success" && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.25)", borderRadius: 10 }}>
                <span style={{ fontSize: 18 }}>✅</span>
                <p style={{ fontSize: 13, color: "var(--accent3)", fontFamily: "'DM Sans', sans-serif" }}>
                  Message sent! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 10 }}>
                <span style={{ fontSize: 18 }}>❌</span>
                <p style={{ fontSize: 13, color: "#dc2626", fontFamily: "'DM Sans', sans-serif" }}>
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;