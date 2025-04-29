import { motion } from "framer-motion"
import Typewriter from "../components/Typewriter"
import ParticlesBackground from "../components/ParticlesBackground"

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Heading and Typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          minHeight: "220px", // 🚀 Slightly taller to handle 2 lines naturally
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // 🚀 Start text a bit higher (not fully center)
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800,
          textAlign: "center",
          paddingTop: "20px", // 🚀 Push it a little more down nicely
          marginBottom: "20px",
          overflow: "hidden",
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

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          fontSize: "1.25rem",
          fontWeight: 400,
          maxWidth: "700px",
          marginBottom: "30px",
          color: "var(--text-color)",
        }}
      >
        "I'm a passionate web developer creating fast, beautiful web applications that elevate brands and drive impact."
      </motion.p>

      {/* CTA Button with Pulse */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          marginTop: "40px",
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

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(13, 71, 161, 0.7); }
            70% { box-shadow: 0 0 0 20px rgba(13, 71, 161, 0); }
            100% { box-shadow: 0 0 0 0 rgba(13, 71, 161, 0); }
          }
        `}
      </style>
    </section>
  )
}

export default Hero
