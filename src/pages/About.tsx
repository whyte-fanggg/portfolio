import { motion } from "framer-motion"
import TechStack from "../components/TechStack"
import WhyMe from "../components/WhyMe"
import me from "../assets/me.jpg"

function About() {
  return (
    <div
      style={{
        maxWidth: "1200px", // tighter container for better readability
        margin: "0 auto",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px", // more breathing space between sections
        textAlign: "center",
      }}
    >
      {/* Profile + Why Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
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
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        />
        <WhyMe />
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <TechStack />
      </motion.div>

      {/* Mission Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          background:
            "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)",
          color: "white",
          padding: "32px 24px",
          borderRadius: "16px",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1.6,
          maxWidth: "720px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        "Great web applications are built at the intersection of creativity,
        precision, and relentless curiosity."
      </motion.div>
    </div>
  )
}

export default About
