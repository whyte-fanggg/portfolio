import { motion } from "framer-motion"
import me from "../assets/me.jpg"
import TechStack from "../components/TechStack"
import AboutHeader from "../components/AboutHeader"
// import Typewriter from "../components/Typewriter"

function About() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        textAlign: "center",
      }}
    >
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src={me}
          alt="Stephen Francis"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          }}
        />
        <AboutHeader/>

        <p style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "700px" }}>
          "I'm a passionate web developer focused on creating digital
          experiences that are fast, functional, and beautifully crafted.
          Outside of coding, I share my knowledge as an instructor, empowering
          the next generation of tech innovators."
        </p>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <TechStack />
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(135deg, #1a1a1a, #4e54c8)",
          color: "white",
          padding: "30px 20px",
          borderRadius: "16px",
          maxWidth: "700px",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1.5,
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        }}
      >
        "Great web applications are built at the intersection of creativity,
        precision, and relentless curiosity."
      </motion.div>
    </div>
  )
}

export default About
