import { motion } from "framer-motion"
import Typewriter from "../components/Typewriter"
import ParticlesBackground from "../components/ParticlesBackground"
import heroImage from "../assets/hero-image.png" // Update path if needed

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
            fontSize: "clamp(1.8rem, 4vw, 3rem)", // 👇 reduced font size
            fontWeight: 800,
            textAlign: "left",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          <Typewriter
            texts={[
              "Building Seamless Web Experiences.",
              "Delivering Speed, Style, and Precision.",
              "Turning Ideas into Scalable Products.",
            ]}
          />
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
          I craft fast, scalable, and visually polished web applications built
          for real-world impact.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            padding: "14px 30px",
            backgroundColor: "var(--primary-color)",
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
