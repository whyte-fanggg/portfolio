import { motion } from "framer-motion"
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import Typewriter from "../components/Typewriter"
import ParticlesBackground from "../components/ParticlesBackground"
import heroImage from "../assets/hero-image.png"

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "60px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
        gap: "40px",
      }}
    >
      <ParticlesBackground />

      {/* Left 70% */}
      <div style={{ flex: 7, zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            textAlign: "left",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontWeight: 700 }}>I build</span>
            <Typewriter
              texts={[
                "tools that solve real problems.",
                "UI that gets out of the way.",
                "code that feels invisible.",
              ]}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: "1.1rem",
            fontWeight: 400,
            maxWidth: "600px",
            marginBottom: "30px",
            color: "var(--text-color)",
            textAlign: "left",
          }}
        >
          I care about details. The micro-interactions, the loading states, the
          things most people never notice — that's what I craft with intention.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            padding: "14px 30px",
            background:
              "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)",
            color: "white",
            borderRadius: "50px",
            fontWeight: 600,
            fontSize: "18px",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#333"
            e.currentTarget.style.transform = "scale(1.08)"
            e.currentTarget.style.boxShadow =
              "0 8px 30px rgba(100, 108, 255, 0.6)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--primary-color)"
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"
          }}
        >
          Explore My Work
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          {[
            {
              icon: FaFacebookF,
              url: "https://facebook.com/stephenfrancis.dev",
              gradient: "linear-gradient(45deg, #0e5bb5, #2c72df)", // Facebook blue
            },
            {
              icon: FaInstagram,
              url: "https://instagram.com/stephenfrancis.dev",
              gradient:
                "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)", // Instagram multicolor
            },
            {
              icon: FaLinkedinIn,
              url: "https://www.linkedin.com/in/stephenchintalapudi-dev/",
              gradient: "linear-gradient(45deg, #00497a, #006fa6)", // LinkedIn blue
            },
            {
              icon: FaGithub,
              url: "https://github.com/whyte-fanggg",
              gradient: "linear-gradient(45deg, #161b22, #4c4177)", // GitHub dark
            },
          ].map(({ icon: Icon, url, gradient }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f8f9fb",
                color: "#333",
                fontSize: "20px",
                boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = gradient
                e.currentTarget.style.color = "white"
                e.currentTarget.style.boxShadow =
                  "inset 4px 4px 10px rgba(0,0,0,0.1), inset -4px -4px 10px rgba(255,255,255,0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f8f9fb"
                e.currentTarget.style.color = "#333"
                e.currentTarget.style.boxShadow =
                  "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff"
              }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right 30% */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{ flex: 3, zIndex: 1 }}
      >
        <img
          src={heroImage}
          alt="Developer Illustration"
          style={{ width: "360px", height: "auto" }}
        />
      </motion.div>

      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(13, 71, 161, 0.7); }
            70% { box-shadow: 0 0 0 20px rgba(13, 71, 161, 0); }
            100% { box-shadow: 0 0 0 0 rgba(13, 71, 161, 0); }
          }

          @media (max-width: 768px) {
            section#home {
              flex-direction: column;
              text-align: center;
              padding: 40px 20px;
            }
            section#home > div {
              text-align: center !important;
              align-items: center;
            }
          }
        `}
      </style>
    </section>
  )
}

export default Hero
